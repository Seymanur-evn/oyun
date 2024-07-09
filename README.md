# Canvas Oyun Projesi

Bu proje, HTML5 Canvas kullanarak oluşturulmuş basit bir oyun uygulamasıdır. Oyuncu, bir köpeği kontrol ederek ekranda ilerlemeye ve engellerden kaçınmaya çalışır. 

## Özellikler

- Klavye ok tuşları ile köpeği kontrol etme (sola, sağa hareket etme ve zıplama).
- Engellerden kaçınma.
- Skor takibi.
- Arkaplan müziği ve ses efektleri (zıplama ve çarpma sesleri).
- Gittikçe zorlaşan oyun dinamikleri.

## Gereksinimler

- Bir web tarayıcısı (Google Chrome, Firefox, Safari, vb.)

## Kullanım

### Kontroller

- Yukarı ok tuşu: Zıplama
- Sol ok tuşu: Sola hareket
- Sağ ok tuşu: Sağa hareket

### Oyun Mekanikleri

- Oyuncu köpeği kontrol eder ve ekrandaki limonlardan kaçınır.
- Köpek bir limona çarparsa oyun yeniden başlar.
- Zamanla oyun hızlanır ve daha fazla engel ortaya çıkar.

## Dosya Yapısı

- `index.html`: Oyunun çalıştırılacağı ana HTML dosyası.
- `main.js`: Oyun mantığının bulunduğu JavaScript dosyası.
- `resim/`: Oyun için kullanılan görüntü dosyaları.
- `ses/`: Oyun için kullanılan ses dosyaları.

## Görseller ve Sesler

- Görseller ve ses dosyaları `resim/` ve `ses/` klasörlerine yerleştirilmiştir. Bu dosyalar oyun sırasında kullanılır.

### Görseller

- `arkaPlan.png`: Oyun arkaplanı.
- `giris.jpg`: Oyun başlangıç ekranı.
- `k1.png`, `k2.png`, `k3.png`, `k4.png`: Köpeğin farklı hareket pozisyonları.
- `zemin.png`: Oyun zemini.
- `limon.png`: Engeller (limonlar).

### Sesler

- `advantureTime.m4a`: Arkaplan müziği.
- `ziplama.mp3`: Zıplama sesi.
- `yanma.mp3`: Çarpışma sesi.

