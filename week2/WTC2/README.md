# Metin Boyutlandırma ve Hizalama
## Metin Boyutlandırma ve Hizalama
### 1. Metin Boyutlandırma:
   > Metin boyutlandırmak, metinlerin web sayfalarında uygun büyüklükte görüntülenmesini sağlar. Metin boyutunu ayarlamak için font-size özelliğini kullanırız.
### A. Piksel (px) Birimiyle Boyutlandırma:
```
p {
     font-size: 12px;
    /* Metin boyutunu 12 piksel olarak ayarlama */
}
```
> Başka bir örnek:
```
/* Metin boyutunu büyütme ve harf başlangıçlarını büyük yapma */
h1 {
     font-size: 36px;
    /* Metin boyutu 36 piksel */
     text-transform: capitalize;
    /* Metinlerin baş harflerini büyük yapma */
}
```
### B. İm (em) Birimiyle Boyutlandırma:
> em birimi, metnin bulunduğu elementin font büyüklüğüne göre boyutlandırma yapar.
```
 body {
     font-size: 16px;
    /* Varsayılan font boyutunu belirleme */
}
 p {
     font-size: 1.2em;
    /* Metin boyutunu 1.2 em olarak ayarlama (1.2 * 16px = 19.2px) */
}
```
> Başka bir örnek:
```
/* Metin boyutunu ayarlama ve düz metin (normal) olarak belirleme */
p {
     font-size: 20px;
    /* Metin boyutu 20 piksel */
     font-style: normal;
    /* Yazı tipini düz metin yapma */
}
```
### C. Yüzde (%) Birimiyle Boyutlandırma:
> em birimi gibi, em birimi yerine yüzde birimi de metni etkili bir şekilde boyutlandırabilir.
```
h1 {
     font-size: 150%;
    /* Metin boyutunu yüzde olarak artırma */
}
```
### 2. Metin Hizalama:

> Metin hizalamak, metinleri yatayda hizalamanın yanı sıra blok düzeyinde hizalamanın nasıl yapılacağını da içerir. Metin hizalamak için text-align ve display özelliklerini kullanırız.
###  A. Yatay Metin Hizalaması:
```
 p {
     text-align: center;
    /* Metni merkezde yatay hizalama */
}
 h1 {
     text-align: right;
    /* Metni sağda yatay hizalama */
}
 h2 {
     text-align: justify;
    /* Metni her iki kenara yaslamak (her satırı sola ve sağa yaslar) */
}
```
> Başka bir örnek:
```
/* Metni ortada hizalama ve kenarlık eklemek */
.centered-text {
     text-align: center;
    /* Metni merkezde yatay hizalama */
     border: 2px solid #FF5733;
    /* 2 piksel kalınlığında turuncu kenarlık */
     padding: 10px;
    /* Kenarlığın içeriye doğru boşluk bırakması */
}
```
###   B. Blok Düzeyinde Metin Hizalaması:
> display özelliğini kullanarak blok düzeyinde metin hizalayabiliriz.
```
div {
     display: block;
    /* Metni blok element olarak hizalama */
}
 span {
     display: inline;
    /* Metni satır içi element olarak hizalama */
}
```
> Başka bir örnek:
```
/* Metni ortada hizalama ve kenarlıkla arka plana görüntü ekleme */
.centered-image-text {
     text-align: center;
     border: 1px solid #007BFF;
    /* 1 piksel kalınlığında mavi kenarlık */
     background-image: url("background-image.jpg");
    /* Arka plana görüntü ekleme */
     background-size: cover;
     padding: 20px;
    /* Kenarlığın içeriye doğru boşluk bırakması */
     color: #FFFFFF;
    /* Metin rengini beyaz yapma */
}
```
### 3. Metinlerin Ortalanması:
> Metinleri dikeyde ve yatayda ortalamak için vertical-align ve text-align özelliklerini kullanabiliriz.
```
/* Metni yatayda merkezde hizalama */
 h1 {
     text-align: center;
}
/* Metni dikeyde merkezde hizalama */
 .vertical-center {
     display: flex;
     align-items: center;
     justify-content: center;
     height: 300px;
    /* Yükseklik değerini belirtmek önemlidir */
}
```
> Başka bir örnek:
```
/* Çok satırlı metni ortada hizalama ve satır yüksekliğini ayarlama */
.multiline-center {
     text-align: center;
     line-height: 1.6;
    /* Satır yüksekliğini belirleme */
}
```
> Başka bir örnek:
```
/* Çok satırlı metni dikeyde ve yatayda ortala */
.multiline-vertical-horizontal-center {
     display: flex;
     align-items: center;
    /* Dikeyde ortala */
     justify-content: center;
    /* Yatayda ortala */
     height: 300px;
    /* Yükseklik değerini belirtmek önemlidir */
}
```
### 4. Çok Satırlı Metin Hizalaması:
> Çok satırlı metinleri hizalamak için text-align ve line-height özelliklerini kullanabiliriz.
```
/* Çok satırlı metni merkezde hizalama */
 .multiline-center {
     text-align: center;
     line-height: 1.6;
    /* Satır yüksekliğini belirlemek önemlidir */
}
```
### Metin Kaydırma ve İçerik Gizleme
```
/* Metni kaydırma ve içeriğin görünmesini engelleme */
.scroll-hide-content {
     overflow: hidden;
    /* İçeriğin görünmesini engelleme */
     white-space: nowrap;
    /* Metinlerin satır sonunda kesilmesini önleme */
     text-overflow: ellipsis;
    /* Metni ... ile gösterme (eğer içeriğin tamamı görüntülenmiyorsa) */
}
```