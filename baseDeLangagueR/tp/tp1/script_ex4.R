# 
# Distribution
# -------------

normchi<-function(x) {sum((rnorm(10))^2)}
tt<-tapply(1:1000,as.factor(1:1000),normchi)
#
hist(tt,proba=T,nclass=20,main='Somme de va normales = chi-deux',xlab='somme')
x0<-seq(0,30,length=100)
lines(x0,dchisq(x0, df=10),col=4)

#
y1<-dchisq(x0,3)
y2<-dchisq(x0,5)
y3<-dchisq(x0,10)
y4<-dchisq(x0,15)
y5<-dchisq(x0,20)
#
X11()
plot(x0,y1,type="n",xlab="x",ylab="Chi-2 densite")
lines(x0,y1,lty=1)
lines(x0,y2,lty=2)
lines(x0,y3,lty=3)
lines(x0,y4,lty=4)
lines(x0,y5,lty=5)
lego<-c("Chi-deux(3)","Chi-deux(5)","Chi-deux(10)","Chi-deux(15)","Chi-deux(20)")
legend(18,0.23,lego,lty=1:5)
