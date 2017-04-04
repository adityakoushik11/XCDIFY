import java.lang.reflect.*;

class InstanceConstructor
{
	public static void main(String...strings)
	{
		try {Constructor c=Super.class.getDeclaredConstructor();
		c.setAccessible(true);
		c.newInstance();
		}
		catch(Exception e)
		{
			System.out.println(e.getStackTrace());
		}
		
	}
}


class Super
{
	private Super()
	{
		System.out.println("inside private constructor");
	}
}