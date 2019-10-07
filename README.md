How many lines are drawn each frame? In other words, how often does the for loop run?
39
What do the first, second, and third appearances of the number 10 do in the code?
The first one defines the start position of the line; The second one defines the end of the end position; the last one defines the gap distance of each lines.
How many times does the loop body run each frame, once the x and y arrays are full?
I don't know the answer.
What are two ways of increasing the spacing between rings?
1.(var i = 0; i < x.length; i = i + 10) ;  change "10" to a bigger number.
2. ellipse(x[i], y[i], 1 + (x.length - i); change "1" into "-i" ellipse(x[i], y[i], -i  + (x.length - i)
How can you make the ellipse trail longer?
（ x = x.slice(-50); y = y.slice(-50); ）change -50 to a smaller number
