# Bootstrap 12'lik Izgara Sistemi

## Genel Bakış
Bootstrap, responsive (duyarlı) sayfa düzenleri oluşturmak için CSS flexbox tabanlı bir ızgara (grid) sistemi kullanır. Bu ızgara sistemi üç ana bileşenden oluşur:

- **Kapsayıcı (`.container`)**
- **Satırlar (`.row`)**
- **Kolonlar (`.col-*`)** (Örnek: `.col-md-8`)

Bu ızgara sistemi 12 sütuna dayanır ve bu sütunların farklı şekillerde birleştirilmesiyle çeşitli düzenler oluşturulabilir.

## Kolon Sınıf İsimleri
Responsive tasarım oluşturmak için Bootstrap, ön tanımlı kolon sınıfları sunar. Bu sınıflar, bir elemanın farklı ekran boyutlarında kaç sütun kaplayacağını belirlemek için kullanılır.

### Eşit Kolonlar
Eşit genişlikte kolonlar oluşturmak için şu seçenekleri kullanabilirsiniz:

- 12 adet 1 sütun genişliğinde kolon (`.col-[sınıfAdı]-1`)
- 6 adet 2 sütun genişliğinde kolon (`.col-[sınıfAdı]-2`)
- 4 adet 3 sütun genişliğinde kolon (`.col-[sınıfAdı]-3`)
- 3 adet 4 sütun genişliğinde kolon (`.col-[sınıfAdı]-4`)
- 2 adet 6 sütun genişliğinde kolon (`.col-[sınıfAdı]-6`)
- 1 adet 12 sütun genişliğinde kolon (`.col-[sınıfAdı]-12`)

Veya, `.col` sınıfını kullanarak elemanların sayısına göre otomatik olarak eşit genişlikte kolonlara bölebilirsiniz.
![esit-kolonlu-tasarim](https://github.com/user-attachments/assets/c962c0c3-dfc0-4593-8925-71568602c907)


#### Örnek

```
html
<div class="row">
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
</div>

<div class="row">
    <div class="col-2">Kolon</div>
    <div class="col-2">Kolon</div>
    <div class="col-2">Kolon</div>
    <div class="col-2">Kolon</div>
    <div class="col-2">Kolon</div>
    <div class="col-2">Kolon</div>
</div>

<div class="row">
    <div class="col-3">Kolon</div>
    <div class="col-3">Kolon</div>
    <div class="col-3">Kolon</div>
    <div class="col-3">Kolon</div>
</div>
<div class="row">
    <div class="col-4">Kolon</div>
    <div class="col-4">Kolon</div>
    <div class="col-4">Kolon</div>
</div>

<div class="row">
    <div class="col-6">Kolon</div>
    <div class="col-6">Kolon</div>
</div>

<div class="row">
    <div class="col-12">Kolon</div>
</div>
```
### Eşit Olmayan Kolonlar
Kolon sayılarının 12'ye tamamlanma zorunluluğu yoktur. Tasarıma göre istenilen sayıda kolonlar oluşturulabilir ve istenilen yerlerde boşluk bırakılabilir.
* 1 adet 2'li kolon (.col-[sınıfAdı]-2) ile 1 adet 10'lu kolon (.col-[sınıfAdı]-10) ya da 1 adet 8'li kolon (.col-[sınıfAdı]-8) ile 1 adet 4'lü kolon (.col-[sınıfAdı]-4) 12'ye tamamlanabilir.

Tek bir adet 8'li kolon (.col-[sınıfAdı]-8), tek bir adet 6'lı kolon (.col-[sınıfAdı]-6) ya da 1 adet 4'lü kolon (.col-[sınıfAdı]-4) ile 1 adet 5'li kolon (.col-[sınıfAdı]-5) kolon 12'ye tamamlanmadan bıraklabilir. Böylece eksik bırakılan kolon değeri kadar yan tarafta boşluk kalmış olur.
Verilen kolon değerlerinin toplamı 12'den fazla olması durumunda son kolon bloğu bozmayacağı için alt tarafa geçer. **Örnek olarak;**

1 adet 8'li kolondan sonra 1 adet 6'lı kolon değeri verilir ise 8 + 6 = 14 toplam kolon sayısı 12'den büyük olacağı için 6'lı kolon 8'li kolonun altına geçer.

Kolonların arasında da boşluk bırakmak mümkün. Bunun için col sınıfının yanına öntanımlı margin ve margin yönünü (ml-auto gibi) belirten bir sınıf adı daha eklenmelidir. Kolonun solunda boşluk bırakmak için margin (m) left (l) yani ml-auto sınıfı eklemeli, aynı şekilde sağ tarfında boşluk bırakılmak istenirse margin (m) right (r) yani mr-auto sınıfı eklemelidir.

**Örneğin;** col-4 mr-auto sınıfı olan bir kolonun **sağ** tarafında, col-4 ml-auto sınıfı ise kolonun **solunda** boşluk bırakır.
![esit-olmayan-kolonlar](https://github.com/user-attachments/assets/a6af84e3-b27c-400b-b03c-d9cec35d96cc)

```
<div class="row">
    <div class="col-2">2 Kolon</div>
    <div class="col-10">10 Kolon</div>
</div>

<div class="row">
    <div class="col-8">8 Kolon</div>
    <div class="col-4">4 Kolon</div>
</div>

<div class="row">
    <div class="col-8">8 Kolon</div>
    <div class="col-6">6 Kolon</div>
</div>

<div class="row">
    <div class="col-4">4 Kolon</div>
    <div class="col-5">5 Kolon</div>
</div>

<div class="row">
    <div class="col-4 mr-auto">4 Kolon</div>
    <div class="col-5">5 Kolon</div>
</div>

<div class="row">
    <div class="col-4">4 Kolon</div>
    <div class="col-5 ml-auto">5 Kolon</div>
</div>
```
### Kolonların Sıralanması
Öntanımlı order-[sıra numarası] sınıfını ekleyerek kolonları sıralayabiliriz.
**Örneğin;** col-3 order-3 üç kolonluk bölümü üçüncü sıraya yerleştirecektir.
![kolon-siralama](https://github.com/user-attachments/assets/75ea40c8-579c-4120-846d-95b07885e306)

```
<div class="row">
    <div class="col-3 order-3">3 Kolon</div>
    <div class="col-4 order-2">4 Kolon</div>
    <div class="col order-1">5 Kolon</div>
</div>
```
### İç içe Izgara Sistemi
Bir satırdaki (row) kolonun (col) içine başka bir satır eklenerek yine kolonlara bölünebilir.
![icice-izgara-sistemi](https://github.com/user-attachments/assets/742a2c0a-4003-4eea-af3c-311dbdcc7df7)
```
<div class="row">
    <div class="col-4">4 Kolon</div>
    <div class="col-8">
        8 Kolon

        <div class="row">
            <div class="col-6">6 Kolon</div>
            <div class="col-6">6 Kolon</div>
        </div>
    </div>
</div>
```
### Kaynaklar:
* [Resmi Bootstrap Sayfası](https://getbootstrap.com/)
