a <- runif(5)
a
a[2]
a[2:4]
a[c(1,3)]
ls
rm(a)
ls
#------------------------------------------------
ch <- "Voici une chaîne"
ch
(ch <- 'Voici une chaîne')
(nb <- 101)
(nb2 <- 101L)
typeof(nb)
typeof(nb2)

c(TRUE,FALSE,T,F)
nb==nb2
identical(nb,nb2)
NA

c(NaN,log(-1),0/0)

c(Inf,1/0,-1/0)
(a <- 1+2i)
rm(ch,nb,nb2,a)

#---------------------------------------------------------------------

v <- c(1,3,2)
v

logical(2)
integer(1)
numeric()
character(3)

1:10
seq(1,10)

rep(2,3)
rep(1:2,3)
rep(1:2,2:3)
rep(c("toto","tutu"),2:1)

paste(c("toto","tutu"),1:2)
paste(c("toto","tutu"),1:2,sep="")
paste(c("toto","tutu",'titi'),c("toto2","tutu2",'titi2'),collapse=" & ")

#-------------------------------------------
(l <- list(1:10,c("toto","titi")))
(l2 <- list(a=1:10,b=c("toto","titi")))
c(l,l2)



#--------fonction ----------
(function(x) x^2)(3)


puissance <- function(x,pow=2, toto=2, titi=4) x^pow + toto*titi

A <- puissance(4)
A

puissanceinvisible <- function(x,pow=2, toto=2, titi=4) invisible(x^pow + toto*titi)
A <- puissanceinvisible(4)
A

puissanceWmissing <- function(x,pow=2, toto=2, titi=4) {
  if(missing(x)) print("messing x")
  else   x^pow + toto*titi
}
A <- puissanceWmissing(4)
A
A <- puissanceWmissing()


join <- function(...) (print(...))


"%+%" <- function(ch1,ch2) paste(ch1,ch2)

q <- "toto" %+% "et" %+% "med"
q
join("toto", "et", "titi")

{(v <- c(1,3,2));v*2}
# équivalent à
{
  (v <- c(1,3,2))
  v*2
}
case <- "toto"
switch(case,toto=,TOTO="ToTo",titi="tItI","Autre")

switch(2,toto=,TOTO="ToTo",titi="tItI","Autre")

get('{')
get('{')(a<-1,a<-2*a,a^3)

get('[')(v,2:3)
get('if')(3 %in% v,{a<-12},{a<-21})
a
c <- get('if')(3 %in% v,{12},{21})
c

body(get)
formals(puissance)

do.call(puissance)

e <- new.env()
ls(e)
e$a <- "bobo"
e

save.image()

parent.env(e)

ls <- (function(x) x^2)
ls(5)
ls()

