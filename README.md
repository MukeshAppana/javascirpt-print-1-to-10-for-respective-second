# javascirpt-print-1-to-10-for-respective-second
This is one of the most asked questions in interviews 

Q)print 1 to 10 numbers or any numbers for respective seconds in java script
  we can acheive this by using settimeout method and loops in java script

print number   for seconds(from starting)
    1                 1
    2                 2
    3                 3
    4                 4
    5                 5
    6                 6
    7                 7
    8                 8
    9                 9
    10                10

But here is one thing that you should always observe most of the developers use for loops
while initialising variable most use var , then you will get the same out put for all iterations .

To get desired output we must use let in for loop so that it prints each number for respective seconds.

but some smart interviews mention a condition that print them without using let , then there is no other way rather than using var in the for loop 
while using the var in for loop the most important thing one should keep in mind is about clousers concept from where the variable takes its value ,
so we include another function and inside this we use setimeout function 


Refer the app.js file to chek the both codes written using both let and var in for loop.
