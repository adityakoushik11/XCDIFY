class ProcessSynchronization
{
	public static void main(String...args)
	{
		Table obj=new Table();
		MyThread1 t1=new MyThread1(obj);
		MyThread2 t2=new MyThread2(obj);
		MyThread3 t3=new MyThread3(obj);
		
		t1.start();
		t2.start();
		t3.start();
		
	}
}

class Table
{
	synchronized void printTable(int n)
	{
		for(int i=1;i<=5;i++)
		{
			System.out.println(n*i);
		}
	}
}

class MyThread1 extends Thread
{
	Table t;
	MyThread1(Table t)
	{
		this.t=t;
	}
	public void run()
	{
		t.printTable(10);
	}
}


class MyThread2 extends Thread
{
	Table t;
	MyThread2(Table t)
	{
		this.t=t;
	}
	public void run()
	{
		t.printTable(7);
	}
}


class MyThread3 extends Thread
{
	Table t;
	MyThread3(Table t)
	{
		this.t=t;
	}
	public void run()
	{
		t.printTable(1000);
	}
}