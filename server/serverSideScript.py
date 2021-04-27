from tkinter import *

root = Tk()

canvas_dimensions = {'x':1000, 'y':1000}
T = Text(root, height = 2, width = 10)
  
# Create label
l = Label(root, text = "script running on server")
  
l.pack()
T.pack()
    
root.mainloop()