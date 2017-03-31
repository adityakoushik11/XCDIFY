
public class Deadlock {

	public static void main(String[] args) {
		String resource1="CLOUD";
		String resource2="BIG_DATA";
		
		Thread t1=new Thread()
		{
			public void run()
			{
				synchronized(resource1)
				{
					System.out.println(Thread.currentThread().getName() +"Acquired resource 1");
					synchronized(resource2)
					{
						System.out.println(Thread.currentThread().getName() +"Acquired resource 2");
					}
				}
			}
		};
		
		Thread t2=new Thread()
				{
			public void run()
			{
				synchronized(resource2)
				{
					System.out.println(Thread.currentThread().getName() +"Acquired resource 2");
					synchronized(resource1)
					{
						System.out.println(Thread.currentThread().getName() +"Acquired resource 1");
					}
				}
			}
				};
				t1.start();
				t2.start();

	}

}

