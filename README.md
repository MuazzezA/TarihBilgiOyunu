# 30 Ağustos Zafer Bayramı Hobi Projesi

Bu proje, Türkiye Cumhuriyeti'nin kuruluş sürecini ve 30 Ağustos Zafer Bayramı'nı interaktif bir şekilde öğrenmeye yönelik bir düğüm (node) tabanlı bilgi yapısı içerir.

## İçerik

- Kurtuluş Savaşı
- Büyük Taarruz ve Dumlupınar Savaşı
- Cumhuriyetin ilanı ve inkılaplar
- Atatürk’ün liderliği ve vizyonu
- 30 Ağustos Zafer Bayramı ve törenler
- Kültürel ve sanatsal etkiler

## Veri Yapısı

Projede bilgiler **node** (düğüm) yapısı ile organize edilmiştir. Her node şu alanlara sahiptir:

```ts
export type NodeOption = {
    id: string;      // Seçilebilecek diğer node’un ID'si
    label: string;   // Kullanıcıya gösterilecek seçenek metni
};

export type NodeData = {
    text: string;           // Node içeriği (bilgi veya açıklama)
    options: NodeOption[];  // Kullanıcının seçebileceği diğer node’lar
};
```

## Kullanım

1. `data` içindeki `root` node’u ile başla.
2. `options` içindeki ID’leri takip ederek diğer node’lara geçiş yap.
3. Node ID’leri kullanılarak içerikler interaktif şekilde gösterilebilir.

### Örnek

```ts
import { data } from './data';

const rootNode = data['root'];
console.log(rootNode.text);

rootNode.options.forEach(option => {
    console.log(`${option.label} -> ${data[option.id].text}`);
});
```
