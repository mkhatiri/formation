library("lattice", lib.loc="~/R/x86_64-pc-linux-gnu-library/3.2")

a <- 3
data()

x = c(3,5,3,5,6,8,4,2,2,2,4,5)
xx <- seq(0,1,length=50) ; fx <- sin(2*pi*xx)
plot(x=xx,y=fx, xlab = "x", ylab = "y",type = "lp")



#seance 2
x = 5.4

mode(x)
typeof(x)

5*log(x)
is.infinite(x)

is.infinite(x/0)


x <- c(3,2,4,5,5,NA,NA,23,5,NA,23,5)
!is.na(x)
help(Math)
help(is.na)
NaN
class(x)
typeof(x)

ai <- 439L
ai

M <- matrix(x, nrow = 2, ncol = 6)
M
print(M)

seq(1,5,length = 10)
seq(1,5,by = 0.2)
rep(1,4)
rep(c(1,4),each=3)
rep(c(1,4),3)
mesures <- scan(n=4)
help(scan)
#mesires <- scan(what = string())


x <- c(3,2,3,5,34,44,6,-5,26,-4)
y <- (x*3 + 4)*(x>2)
y

T <- c(-3,2,3,15,34,44,65,5,26,-4)
which.min(T)
T[10]

typeof(T)

which(x==min(x))
min(x)

paste("A",c(1,2,3,"E",5), sep="*")


mA <- matrix(1:36, nrow = 6, byrow = T )
mA
mA[4,2]
help(matrix)

MA[-1]



mA <- matrix(1:36, nrow = 6, byrow = T )
mA
mB <- matrix(1:36, nrow = 6, byrow = T )
mB

eigen(t(mA%*%mB))

sexe <- factor(c("F","F","M","F","M","F","F"))
sexe
salto <- c(1:5,7:3)
salto

y <- summary(salto)
y
y[2]

salto.f <- as.factor(salto)
levels(salto.f)
salto
salto.f
salto
names(lis) <- list(c(2,1,4,5),"med",3L)
lis
names(lis)
help(attributes)
lis[[1]]
lis$med
lapply(lis,mean)
attributes(lis)
x <- c(2,1,4,5)
y <- "med"
w <- 3L
names(lis) <- list(c(2,1,4,5),"med",3L)
lis
lis$x



vec1 <- 5:1
vec2 <- c("Z","E","R","T","D")
df <- data.frame(nomVar1=vec1, nomVar2=vec2)
df



par(mfrow=c(1,2))
grillex <- seq(0,1,length=20)
fx <- sin(2*pi*grillex)
plot(x=grillex,y=fx)
plot(x=grillex,y=fx, main = expression("graphe de f(x) = sin"), xlab = "x", ylab=expression(sin(2*pi*x)))

par(mfrow=c(1,1))

boxplot(iris$Sepal.Width)
boxplot(iris$Sepal.Width~iris$Species)
iris
iris
Sepal.Length <- cut(iris$Sepal.Length,4)
Sepal.Width <- cut(iris$Sepal.Width,5)
Sepal.Length
Sepal.Width
iris
help(cut)



x<- 0:10
y <-0.5^x
z <-x^3
w<-x^(-2)
plot(x,y,type="l",main="Fonctions puissances",cex.main=0.9)
text(4,y[4]+5,expression(x^2))
lines(x,z,col="red")
text(2,z[2]+5,expression(x^3))
lines(x,w,col="blue")
text(6,w[6]+5,expression(x^-2))

Sepal.Length <- cut(iris$Sepal.Length,4)
pie(table(Sepal.Length),col=1:nlevels(Sepal.Length),radius = 1.)


ecarty <- range(iris[,"Sepal.Length"])
plot(iris[1:75,"Sepal.Length"],type="l")
lines(iris[76:150,"Sepal.Length"],ylim=ecarty,col="red")
legend("topleft",legend=c("sem1","sem2"),col=c("black","red"),lty=1)


iris[1:75,"Sepal.Length"]

fichier <- read.table("fichier128_1000run", sep="\t", dec = ".", header = FALSE)
fichier
fichier$V2

fichier402 <- fichier[,2]
fichier402
fichier64 <- fichier$V8
fichier64
class(fichier402)
mode(fichier402)
fichier402
indice402 <- which(fichier402==402)
indice64 <- which(fichier64==128)
indice <- which(indice64==indice402)
fichier1 <- fichier[indice,]
fichier1
boxplot(V7~V9, data = fichier1)

