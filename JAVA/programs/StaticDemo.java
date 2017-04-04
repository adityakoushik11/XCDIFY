
 class StaticApp {
	
	  StaticApp()
	{
		System.out.println("inside super class constructor");
	}

}

class StaticDemoChild extends StaticApp
{
	StaticDemoChild()
	{
		
		System.out.println("inside base class constructor");
	}
	
	void display()
	{
		System.out.print("just  method");
	}
}

public class StaticDemo
{
	public static void main(String...args)
	{
		StaticDemoChild obj=new StaticDemoChild();
		obj.display();
	
	//StaticApp a=new StaticApp();
	
	
	}
	
	
	
}