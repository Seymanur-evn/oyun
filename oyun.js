//Canvas ile eklemek için
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bX =70;
var bY =320;
var sayac=0;
var yercekimi=1;
var skor=0;

//müzik ekleme
var ses = new Audio();
var ziplamaSes = new Audio();
var yanmaSes = new Audio();

ses.src = "ses/advantureTime.m4a";
ziplamaSes.src = "ses/ziplama.mp3";
yanmaSes.src = "ses/yanma.mp3";

//gorselleri ekle
var arkaPlan = new Image();
var giris = new Image();
var k1 = new Image();
var k2 = new Image();
var k3 = new Image();
var k4 = new Image();
var k5 = new Image();
var k6 = new Image();
var k7 = new Image();
var zemin = new Image();
var limon = new Image();

arkaPlan.src = "resim/arkaPlan.png";
giris.src = "resim/giris.jpg";
k1.src = "resim/k1.png";
k2.src = "resim/k2.png";
k3.src = "resim/k3.png";
k4.src = "resim/k4.png";
zemin.src = "resim/zemin.png";
limon.src = "resim/limon.png";

//limonun konumunu tutacak 
var lim=[];
var limonAralik=500;
var limonHiz=1;
var limonSayi=2;

//diziye yeni öge eklemek için konumlarını belirttik
lim.push({
  x : cvs.width,
  y: 400
});
//ok tuşlarının kodlarını önce klavyeye dinleyici ekleyerek e değişkeniyle aldık 

document.addEventListener("keydown",zipla);
function zipla(e){
   //sonra kodlarına eşleşmesi durumunda zıplamayı bulunduğu y konumundan yukarıya taşıdım
  //havadaykende zıplama olayını gerçekleştirip sürekli havada kalmasını engellemek için başlangıç konumunda zıplama koşulu koydum
   if (e.keyCode == 38) {
  if(bY ==320){
    bY -= 120;
    bX +=2;
    ziplamaSes.play();
  }   
//sağ sol tuşlarında ise x konumlarını arttırıp azaltarak yaptım
  }
  if (e.keyCode == 37){
    bX-=30;
  }
  //sag
  if (e.keyCode == 39){
    bX+=30;
  }


  
}

function ciz(){
  //arkaplan ve zemini resimlerini konumlandırdık
  //ben zemini iki tane yan yana boyutuna göre koydum ekrana sığsın diye
    ctx.drawImage(arkaPlan,0,0);
    ctx.drawImage(zemin,0,450); 
    
    //baslangıcta müzik çalsın diye skoru baz aldım
    if (skor == 0 ||skor ==42) {
    ses.play();
  }
    //oyun ilerledikçe hız kazandırdım 
    if(skor>=1){
      limonHiz=2;
    }
    else if(skor>=5){
      limonHiz=2.5;
    }
    else if(skor>=10){
      limonHiz=3;
      limonAralik=600;
      limonSayi=4;

    }
    else if(skor>=15){
      limonHiz=3.5;
      limonAralik=650;
      limonSayi=5;
    }
    else if(skor>=25){
      limonHiz=4;
      limonAralik=700;
      limonSayi=5;
    }
    //limonun ekran boyutundan limon Aralığını çıkarttık o aralığı geçince limon oluşturduk
    if (lim.length < limonSayi && lim[lim.length-1].x < cvs.width - limonAralik) {
        lim.push({
          x : cvs.width,
          y: 400
        });
      }
      //döngü içinden devamlı limon oluşturduk lim içindeki konumları kullanarak
      for(var i=0;i<lim.length;i++){
        ctx.drawImage(limon,lim[i].x,lim[i].y);
        //x konumundan hız değişkenini çıkartarak ekranda sağa kaydırdık
        lim[i].x-=limonHiz;
        if(lim[i].x + limon.width < 0){
          lim[i].x = cvs.width;
          lim[i].y =400;
        }
        //burda köpek ve gelen limonun boy genişliğine göre birbiriyle çarpişma yaşaması durumunun koşulunu koyduk
        if(bX+k1.width > lim[i].x && bY+k1.height > lim[i].y 
            && bX < lim[i].x + limon.width && bY < lim[i].y + limon.height){
           
            yanmaSes.play();
            //çarpışma koşulunda oyun tekrar başlatılır
            location.reload(); 
        }
        //burda skoru limon x kordinatında 50 konumuna gelince skoru arttırdım
        if(lim[i].x==50){
            skor++;
        }

    }
    //burda sayaç arttırdım k1 k2 k3 resimleri arasında geçiş sağlamak için
    sayac+=0.5;
    //bu kısımda zıplayınca zemin yüksekliğinden yukardaysa eğer köpek resmimize yercekimi uyguladım
    if(bY + k1.height <=  cvs.height - zemin.height||bY + k2.height <=  cvs.height - zemin.height||bY + k3.height <=  cvs.height - zemin.height){
        bY+=yercekimi;
        //burda zıplayınca zıplayan köpek resmi bastırdık
        ctx.drawImage(k4,bX,bY);
        
        
      }
      //eğer zeminle aynı konumdaysa sadece yürüme görüntüsü için k1 k2 k3 arasında sayaç sayısına bölünme oranıyla sırasıyla bastırdım
      //çok hızlı bir geçiş olmasın diye 3'e bölerek değil 18'e bölüp aynı resmi basma sayısını arttırdım
      else{
        bY=320;
        if (sayac % 18 == 0 || sayac % 18 == 1 ||sayac % 18 == 2||sayac % 18 == 3||sayac % 18 == 4||sayac % 18 == 5) {
                ctx.drawImage(k2, bX, bY);
              }
              else if(sayac % 18 == 6 || sayac % 18 == 7 ||sayac % 18 == 8||sayac % 18 == 9||sayac % 18 == 10||sayac % 18 ==11){
                ctx.drawImage(k3, bX, bY);
              }
              else {
                ctx.drawImage(k1, bX, bY+30);
              }
      }
      //skoru ekrana yazdırdım
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Skor : "+skor,10,cvs.height-20);
      
    requestAnimationFrame(ciz);
     
}

ciz();
ciz();
