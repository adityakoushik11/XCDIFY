
public class StaticInnerDemo {
	//int d=20;
	static int data=30;
	
	static class InnerClass
	{
		void message()
		{
			System.out.println("the static data is : " +data);
			//System.out.println("the non static data : " +d);
		}
	}

	public static void main(String[] args) 
	{
		StaticInnerDemo.InnerClass d=new StaticInnerDemo.InnerClass();
		d.message();

	}

}
