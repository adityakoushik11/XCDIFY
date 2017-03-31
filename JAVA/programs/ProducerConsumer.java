
public class ProducerConsumer
{
	public static void main(String...args)
	{
		IntBuffer buffer=new IntBuffer(10);
		
		Producer1 producer=new Producer1(buffer);
		Consumer1 consumer=new Consumer1(buffer);
		
		Thread t1=new Thread(producer);
		Thread t2=new Thread(consumer);
		
		t1.start();
		t2.start();
	}
}

class Producer1 implements Runnable
{
	private final IntBuffer buffer;
	
	Producer1(IntBuffer b)
	{
		this.buffer=b;
	}
	
	public void run()
	{
		for(int i=0;i<20;i++)
		{
			int n=(int) (Math.random()*100);
			buffer.put(n);
			System.out.println("Producer produced : " +n);
		}
	}
}

class Consumer1 implements Runnable
{
	private final IntBuffer buffer;
	
	Consumer1(IntBuffer b)
	{
		this.buffer=b;
	}
	
	public void run()
	{
		while(!buffer.isEmpty())
		{
			int i=buffer.take();
			System.out.println("Consumer consumedthe item : " +i);
		}
	}
}

class IntBuffer{

    private final int[] storage;
    private volatile int end;
    private volatile int start;

    public IntBuffer(int size) {
        this.storage = new int[size];
        end = 0;
        start = 0;
    }


    public void put(int n) { // puts add the END
        synchronized(storage) {
            boolean full = (start == (end+storage.length+1)%storage.length);
            while(full){ // queue is full
                try {
                    storage.notifyAll(); 
                    storage.wait();

                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            this.storage[end] = n;
            end = incrementMod(end);
            storage.notifyAll();
        }
    }


    public int take(){

        synchronized(storage) {
            while (end == start) { // empty queue
                try {
                    storage.notifyAll(); // notify waiting producers
                    storage.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            int index = start;
            start = incrementMod(start);
            storage.notifyAll(); // notify waiting producers
            return this.storage[index];

        }
    }

    private int incrementMod(int index) {
        synchronized (storage) {
            if (index == storage.length-1) return 0;
            else return index+1;
        }
    }

    public boolean isEmpty(){
        synchronized (storage) {
            return (start == end);
        }
    }

}