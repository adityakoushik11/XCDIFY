import os
def change(path,dir_name):
	try:
		os.chdir(path)
		os.mkdir(dir_name)
	except OSError as err:
		print(err)
	finally:
		print("finally block executed")
