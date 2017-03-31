// USING SEMAPHORE 
// A SEMAPHORE is a special kind of integer variable that allows processes to access shared resource or critical section in a mutually exclusive manner

import java.util.concurrent.Semaphore;
public class ConsumerProducer {

	public static void main(String[] args) {
		Semaphore semaphoreProducer=new Semaphore(1);
		Semaphore semaphoreConsumer=new Semaphore(0);
		
		System.out.println("SemaphoreProducer : 1 | SemaphoreConsumer : 0");
		
		Producer producer=new Producer(semaphoreProducer,semaphoreConsumer);
		Consumer consumer=new Consumer(semaphoreProducer,semaphoreConsumer);
		
		Thread producerThread=new Thread(producer,"ProducerThread");
		Thread consumerThread=new Thread(consumer,"ConsumerThread");
		
		producerThread.start();
		consumerThread.start();
		
		System.out.println("Threads waiting to access the resource : " +semaphoreProducer.getQueueLength() +" "+semaphoreConsumer.getQueueLength());
	}
	

}

class Producer implements Runnable
{
	Semaphore semaphoreProducer;
	Semaphore semaphoreConsumer;
	
	
	
	Producer(Semaphore semaphoreProducer, Semaphore semaphoreConsumer)
	{
		this.semaphoreProducer=semaphoreProducer;
		this.semaphoreConsumer=semaphoreConsumer;
	}
	
	public void run()
	{
		for(int i=1;i<=5;i++)
		{
			try
			{
				semaphoreProducer.acquire();
				System.out.println("Producer produced the item : " +i);
				semaphoreConsumer.release();
			}
			catch(InterruptedException ie)
			{
				ie.printStackTrace();
			}
		}
	}
}

class Consumer implements Runnable
{
	Semaphore semaphoreProducer;
	Semaphore semaphoreConsumer;
	
	Consumer(Semaphore semaphoreProducer, Semaphore semaphoreConsumer)
	{
		this.semaphoreProducer=semaphoreProducer;
		this.semaphoreConsumer=semaphoreConsumer;
	}
	public void run()
	{
		for(int i=1;i<=5;i++)
			try
		{
				semaphoreConsumer.acquire();
				System.out.println("Consumer consumed the item : " +i);
				semaphoreProducer.release();
		}
		catch(InterruptedException ie)
		{
			ie.printStackTrace();
		}
	}
}