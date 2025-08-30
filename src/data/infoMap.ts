export type NodeOption = {
    id: string;
    label: string;
};

export type NodeData = {
    text: string;
    options: NodeOption[];
};

export const data: Record<string, NodeData> = {
    root: {
        text: "30 Ağustos Zafer Bayramı, Türkiye Cumhuriyeti'nin kuruluş yolundaki en kritik dönüm noktalarından biridir. Bu bayram, Türk milletinin Kurtuluş Savaşı'nda kazandığı en önemli zaferlerden birini temsil eder. 1922'de kazanılan bu zafer, hem ulusal egemenliğin sağlanmasına hem de modern Türkiye'nin temellerinin atılmasına büyük katkı sağlamıştır.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz hakkında detaylı bilgi" },
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı nedir ve önemi" },
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyetin ilanı ve etkileri" },
            { id: "zafer_bayrami_onemi", label: "30 Ağustos Zafer Bayramı'nın anlamı" },
            { id: "ataturk_liderligi", label: "Atatürk'ün liderliği ve vizyonu" },
            { id: "kulturel_etkiler", label: "Tarihi ve kültürel etkiler" },
        ],
    },

    // Büyük Taarruz
    buyuk_taarruz: {
        text: "Büyük Taarruz, 26 Ağustos 1922'de başlamış ve 30 Ağustos'ta kesin zaferle sonuçlanmıştır. Mustafa Kemal Atatürk önderliğinde, 98.000 kişilik Türk ordusu, yaklaşık 130.000 kişilik Yunan kuvvetlerine karşı stratejik bir saldırı gerçekleştirmiştir. Bu harekât, Türk ordusunun moralini yükseltmiş, düşmanın moralini bozmuş ve Kurtuluş Savaşı'nın seyrini tamamen değiştirmiştir.",
        options: [
            { id: "dumlupinar_onemi", label: "Dumlupınar Savaşı ve önemi" },
            { id: "taarruz_stratejisi", label: "Büyük Taarruz'un askeri stratejisi" },
            { id: "ordu_hazirliklari", label: "Ordu hazırlıkları ve planlamalar" },
            { id: "cevre_sehirler", label: "Stratejik şehirler ve etkileri" },
            { id: "askeri_liderler", label: "Önemli askeri liderler" },
            { id: "askeri_iletisim", label: "Askeri iletişim ve koordinasyon" },
            { id: "lojistik_ve_ikmal", label: "Lojistik ve ikmal planları" },
        ],
    },
    dumlupinar_onemi: {
        text: "Dumlupınar Savaşı, 30 Ağustos 1922'de gerçekleşmiş ve Büyük Taarruz'un kesin zaferle sonuçlandığı muharebe olmuştur. Bu savaş, Yunan ordusunun Anadolu'dan çekilmesini sağlamış ve Türk milletine büyük bir moral kazandırmıştır. Savaş sonrası işgal altındaki şehirler hızla kurtarılmış ve milli egemenlik güçlenmiştir.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz detayları" },
            { id: "savasta_stratejik_önem", label: "Dumlupınar'ın stratejik önemi" },
            { id: "savas_taktikleri", label: "Savaşta uygulanan taktikler" },
        ],
    },
    taarruz_stratejisi: {
        text: "Büyük Taarruz sırasında Türk ordusu, düşman hatlarını derinlemesine sarsacak hızlı ve etkili bir strateji uygulamıştır. Atatürk, piyade, topçu ve süvari birliklerini eş zamanlı kullanarak düşmanın moralini bozmuş, cephede hızlı ilerlemeyi sağlamıştır. Bu strateji, savaşın kazanılmasında belirleyici rol oynamıştır.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz genel bilgisi" },
            { id: "savas_taktikleri", label: "Uygulanan savaş taktikleri" },
        ],
    },
    ordu_hazirliklari: {
        text: "Büyük Taarruz öncesinde Türk ordusu kapsamlı bir hazırlık süreci geçirmiştir. Silah ve mühimmat temini, lojistik hatların planlanması, askerlerin eğitimi ve istihbarat faaliyetleri titizlikle yürütülmüştür. Bu hazırlıklar, taarruzun başarısını doğrudan etkilemiştir.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz detayları" },
            { id: "lojistik_ve_ikmal", label: "Lojistik ve ikmal hazırlıkları" },
        ],
    },
    cevre_sehirler: {
        text: "Taarruz sırasında stratejik öneme sahip şehirler, düşmanın lojistik ve savunma hatlarını kesmek için ele geçirilmiştir. Afyonkarahisar, Dumlupınar ve Kütahya gibi şehirlerin kontrolü, Türk ordusunun ilerleyişini kolaylaştırmış ve düşmanın geri çekilmesini hızlandırmıştır.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz genel bilgisi" },
            { id: "dumlupinar_onemi", label: "Dumlupınar Savaşı ile bağlantı" },
        ],
    },
    askeri_liderler: {
        text: "Büyük Taarruz sırasında Mustafa Kemal Atatürk'ün yanı sıra Fevzi Çakmak, İsmet İnönü, Kazım Karabekir ve diğer üst düzey komutanlar önemli görevler üstlenmiştir. Her bir liderin stratejik kararlardaki katkısı, zaferin kazanılmasında kritik olmuştur.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz detayları" },
            { id: "taarruz_stratejisi", label: "Taarruz stratejisi ile bağlantı" },
        ],
    },
    askeri_iletisim: {
        text: "Büyük Taarruz ve Kurtuluş Savaşı süresince iletişim kritik bir unsur olmuştur. Telgraf, telsiz ve haberci sistemleriyle ordunun koordinasyonu sağlanmış, cephelerdeki gelişmeler hızla üst komutaya iletilmiştir. Bu sistem, askeri kararların zamanında uygulanmasını sağlamıştır.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz detayları" },
            { id: "stratejik_deha", label: "Atatürk'ün askeri dehası ile bağlantı" },
        ],
    },
    lojistik_ve_ikmal: {
        text: "Kurtuluş Savaşı boyunca lojistik ve ikmal hatları, ordunun kesintisiz operasyon yürütmesi için büyük önem taşımıştır. Cephane, yiyecek ve malzeme taşımacılığı düzenli ve güvenli şekilde planlanmıştır. Bu planlama, taarruzların başarıyla gerçekleşmesini sağlamıştır.",
        options: [
            { id: "ordu_hazirliklari", label: "Ordu hazırlıkları ile bağlantı" },
            { id: "buyuk_taarruz", label: "Büyük Taarruz ile bağlantı" },
        ],
    },
    savas_taktikleri: {
        text: "Büyük Taarruz ve diğer savaşlarda uygulanan taktikler, modern askeri strateji açısından örnek oluşturmuştur. Piyade ve topçu birliklerinin koordinasyonu, süvari hücumları ve sürpriz manevralar düşman hatlarını çökerterek zaferi sağlamıştır. Bu taktikler, Atatürk'ün askeri vizyonunu ve ileri görüşlülüğünü göstermektedir.",
        options: [
            { id: "taarruz_stratejisi", label: "Büyük Taarruz stratejisi" },
            { id: "stratejik_deha", label: "Atatürk'ün askeri dehası" },
        ],
    },

    // Kurtuluş Savaşı
    kurtulus_savasi: {
        text: "Kurtuluş Savaşı, 1919-1923 yılları arasında Türk milletinin bağımsızlık mücadelesini simgeleyen bir süreçtir. Yunan, İngiliz ve Fransız işgal güçlerine karşı sürdürülen bu mücadele, Türk topraklarının korunmasını ve ulusal egemenliğin sağlanmasını mümkün kılmıştır. Savaş, modern Türkiye Cumhuriyeti'nin kuruluş sürecinin temel taşlarını oluşturmuştur.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz süreci" },
            { id: "kongreler", label: "Kurtuluş Savaşı kongreleri" },
            { id: "diplomasi", label: "Diplomatik girişimler ve antlaşmalar" },
            { id: "halk_direnisi", label: "Halk direnişi ve Kuva-yi Milliye" },
            { id: "milli_moral", label: "Milli moral ve motivasyon" },
        ],
    },
    kongreler: {
        text: "Erzurum (23 Temmuz – 7 Ağustos 1919) ve Sivas Kongreleri (4–11 Eylül 1919), Kurtuluş Savaşı'nın yönetim ve strateji kararlarını belirlemiştir. Bu kongrelerde milli irade, yerel direniş gruplarının birleşmesi ve birlik vurgusu ön plana çıkmıştır. Alınan kararlar, savaşın planlı ve organize bir şekilde yürütülmesini sağlamıştır.",
        options: [
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı genel bilgileri" },
            { id: "buyuk_taarruz", label: "Büyük Taarruz bağlantısı" },
        ],
    },
    diplomasi: {
        text: "Kurtuluş Savaşı sırasında diplomasi, askeri zaferlerin kalıcılığını sağlamada kritik olmuştur. Lozan Antlaşması (24 Temmuz 1923) ile Türkiye'nin bağımsızlığı uluslararası alanda tanınmış ve sınırları güvence altına alınmıştır. Bu diplomatik başarı, Türkiye'nin yeni devlet olarak kabul görmesini sağlamıştır.",
        options: [
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı genel bilgileri" },
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyetin ilanına etkisi" },
        ],
    },
    halk_direnisi: {
        text: "Milli Mücadele, halkın geniş katılımıyla gerçekleşmiştir. Kuva-yi Milliye ve yerel direniş grupları, işgal güçlerine karşı kritik roller üstlenmiş, savaşı desteklemişlerdir. Bu süreç, Türk milletinin bağımsızlık ve özveri ruhunu ortaya koymuştur.",
        options: [
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı genel bakış" },
            { id: "kongreler", label: "Kongreler ile bağlantı" },
        ],
    },
    milli_moral: {
        text: "Kurtuluş Savaşı sırasında halkın morali ve milli bilinç, zaferin kazanılmasında kritik bir etkendir. Tiyatro oyunları, şiirler, konferanslar ve halk toplantıları ile milli dayanışma güçlendirilmiş, askerler ve sivil halk için motivasyon sağlanmıştır.",
        options: [
            { id: "sanat_ve_edebiyat", label: "Sanat ve edebiyat" },
            { id: "halk_direnisi", label: "Halk direnişi" },
        ],
    },

    // Cumhuriyet
    cumhuriyet_kurulusu: {
        text: "29 Ekim 1923'te Türkiye Cumhuriyeti ilan edilmiş ve modernleşme süreci başlamıştır. Atatürk önderliğinde gerçekleştirilen inkılaplar, eğitim, hukuk ve toplumsal yaşamı köklü şekilde dönüştürmüştür. Cumhuriyetin ilanı, Türk milletinin bağımsızlık mücadelesinin ve ulusal egemenliğin simgesi olarak tarih sahnesine geçmiştir.",
        options: [
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı'nın etkileri" },
            { id: "inkilaplar", label: "Cumhuriyet sonrası inkılaplar" },
            { id: "egitim_reformlari", label: "Eğitim reformları" },
            { id: "kadın_haklari", label: "Kadın hakları ve toplumsal değişim" },
            { id: "anayasa_calismlari", label: "Anayasa çalışmaları" },
            { id: "baskent_ankara", label: "Başkent Ankara'nın seçimi" },
        ],
    },
    inkilaplar: {
        text: "Cumhuriyetin ilanından sonra yapılan inkılaplar, toplumsal yaşamın tüm alanlarını dönüştürmüştür. Eğitimde Latin alfabesinin kabulü, hukukta Medeni Kanun'un uygulanması ve kadın haklarının tanınması, modern Türkiye'nin temellerini oluşturmuştur. Bu reformlar, halkın eşit ve özgür bir toplumda yaşamasını mümkün kılmıştır.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyetin temelleri" },
            { id: "ataturk_liderligi", label: "Atatürk'ün reform vizyonu" },
            { id: "baskent_ankara", label: "Başkent Ankara" },
        ],
    },
    egitim_reformlari: {
        text: "Cumhuriyet döneminde eğitim alanında köklü değişiklikler yapılmıştır. Millet Mektepleri açılmış, Latin alfabesine geçilmiş ve okuryazarlık oranı hızla artırılmıştır. Bu reformlar, toplumun çağdaş ve bilinçli bir yapıya kavuşmasını sağlamıştır.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyetin ilanı" },
            { id: "inkilaplar", label: "Cumhuriyet inkılapları" },
        ],
    },
    kadın_haklari: {
        text: "Cumhuriyetin ilanıyla birlikte kadınlara seçme ve seçilme hakkı verilmiştir. Kadınlar, siyasi ve sosyal yaşamda daha aktif roller üstlenmeye başlamış, toplumsal cinsiyet eşitliği açısından önemli bir adım atılmıştır.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyet süreci" },
            { id: "inkilaplar", label: "Cumhuriyet inkılapları" },
        ],
    },
    anayasa_calismlari: {
        text: "1921 ve 1924 Anayasaları, yeni devletin hukuki ve idari temelini oluşturmuştur. Bu anayasalar, devletin işleyişini ve vatandaşların haklarını düzenlemiş, Cumhuriyet'in demokratik temellerini sağlamıştır.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyetin temelleri" },
            { id: "politik_vizyon", label: "Atatürk'ün politik vizyonu" },
        ],
    },
    baskent_ankara: {
        text: "Cumhuriyetin ilanından sonra Ankara başkent olarak seçilmiştir. Bu karar, hem stratejik konum hem de sembolik anlam taşımaktadır. Ankara, modern Türkiye'nin yeniden yapılandırılmasında merkezi rol oynamıştır.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyetin ilanı" },
            { id: "inkilaplar", label: "Cumhuriyet inkılapları" },
        ],
    },

    // Atatürk
    ataturk_liderligi: {
        text: "Mustafa Kemal Atatürk, Kurtuluş Savaşı boyunca askeri ve siyasi lider olarak öne çıkmıştır. Savaş sonrası yeni devletin modernleşmesi için kapsamlı reformlar başlatmıştır. Atatürk'ün vizyonu, Türkiye Cumhuriyeti'nin çağdaş ve güçlü bir devlet olarak şekillenmesini sağlamıştır.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyet süreci" },
            { id: "stratejik_deha", label: "Atatürk'ün askeri dehası" },
            { id: "politik_vizyon", label: "Atatürk'ün politik vizyonu" },
            { id: "millet_egitimi", label: "Halkın bilinçlendirilmesi ve eğitim" },
        ],
    },
    stratejik_deha: {
        text: "Atatürk, askeri dehasıyla düşman karşısında üstün stratejiler geliştirmiştir. Büyük Taarruz ve diğer savaş planlamaları, onun liderliğini ve ileri görüşlülüğünü göstermektedir. Bu stratejiler, Türk ordusunun başarısında belirleyici olmuştur.",
        options: [
            { id: "ataturk_liderligi", label: "Atatürk liderliği" },
            { id: "buyuk_taarruz", label: "Büyük Taarruz ile bağlantı" },
        ],
    },
    politik_vizyon: {
        text: "Atatürk, Türkiye'yi demokratik, çağdaş ve bağımsız bir devlet olarak inşa etmeyi hedeflemiştir. Siyasi reformlar ve anayasal düzenlemeler, bu vizyonun somut göstergeleridir ve Cumhuriyet'in kalıcı olmasını sağlamıştır.",
        options: [
            { id: "ataturk_liderligi", label: "Atatürk liderliği" },
            { id: "anayasa_calismlari", label: "Anayasa çalışmaları" },
        ],
    },
    millet_egitimi: {
        text: "Atatürk, halkı bilinçlendirme ve eğitme çalışmalarına büyük önem vermiştir. Okuryazarlık seferberlikleri, millet mektepleri ve eğitim reformları, toplumsal dönüşümün temelini oluşturmuştur. Halkın bilgiye erişimi, modern Türkiye'nin oluşumunda kritik bir rol oynamıştır.",
        options: [
            { id: "ataturk_liderligi", label: "Atatürk liderliği" },
            { id: "egitim_reformlari", label: "Eğitim reformları" },
        ],
    },

    // 30 Ağustos Zafer Bayramı
    zafer_bayrami_onemi: {
        text: "30 Ağustos Zafer Bayramı, sadece bir askeri zaferi değil, Türk milletinin bağımsızlık ve özgürlük mücadelesinin simgesidir. Her yıl çeşitli törenlerle kutlanan bu gün, ulusal birlik ve beraberliği pekiştirir. Özellikle genç kuşaklara tarihten ders çıkarma fırsatı sunar ve milli bilinç oluşturur.",
        options: [
            { id: "bayram_torenleri", label: "Bayram törenleri" },
            { id: "genclere_mesaj", label: "Gençlere verilen mesajlar" },
            { id: "askeri_geceler", label: "Askeri geçit ve gösteriler" },
            { id: "ulusal_simgeler", label: "Ulusal simgeler ve semboller" },
        ],
    },
    bayram_torenleri: {
        text: "30 Ağustos'ta Türkiye genelinde resmi törenler düzenlenir. Ankara'daki resmi törenler en kapsamlı olanlarıdır. Devlet protokolü ve askeri birliklerin katılımıyla gerçekleşen bu törenler, zaferin anılmasını ve gelecek nesillere aktarılmasını sağlar.",
        options: [
            { id: "zafer_bayrami_onemi", label: "Zafer Bayramı önemi" },
            { id: "askeri_geceler", label: "Askeri geçit törenleri" },
        ],
    },
    genclere_mesaj: {
        text: "Bu bayram, genç kuşaklara tarih bilinci ve bağımsızlık ruhu aşılamak için önemlidir. Okullarda özel programlar ve etkinlikler düzenlenir. Gençler, geçmişteki mücadeleleri öğrenerek ulusal değerleri benimser ve Cumhuriyet bilincini geliştirir.",
        options: [
            { id: "zafer_bayrami_onemi", label: "Zafer Bayramı önemi" },
            { id: "genclige_hitabe", label: "Atatürk'ün Gençliğe Hitabesi" },
        ],
    },
    askeri_geceler: {
        text: "Bazı şehirlerde 30 Ağustos geceleri askeri geçit törenleri ve gösteriler düzenlenir. Bu etkinlikler, halkın zaferin önemini anlamasına ve milli bilinç kazanmasına yardımcı olur. Askeri disiplin ve düzen, tarih bilinciyle birleşerek görsel bir şölen sunar.",
        options: [
            { id: "zafer_bayrami_onemi", label: "Zafer Bayramı önemi" },
            { id: "bayram_torenleri", label: "Bayram törenleri" },
        ],
    },
    genclige_hitabe: {
        text: "Atatürk'ün Gençliğe Hitabesi, gençlere bağımsızlık ve Cumhuriyet bilincini aktarmayı amaçlayan önemli bir metindir. Hitabe, Türk gençliğine vatanı koruma sorumluluğunu ve milli değerleri yaşatma görevini hatırlatır. Her 19 Mayıs ve 30 Ağustos etkinliklerinde okunur ve örnek teşkil eder.",
        options: [
            { id: "genclere_mesaj", label: "Gençlere mesaj" },
            { id: "19_mayis", label: "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı" },
        ],
    },
    "19_mayis": {
        text: "19 Mayıs 1919, Mustafa Kemal Atatürk'ün Samsun'a çıkarak Kurtuluş Mücadelesi'ni başlattığı gündür. Bu tarih, gençlere ve spora ithaf edilmiş bir milli bayram olarak kutlanır. Ülke genelinde törenler, yürüyüşler ve sportif etkinliklerle anılır.",
        options: [
            { id: "genclige_hitabe", label: "Gençliğe Hitabe" },
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı bağlantısı" },
        ],
    },

    // Kültürel Etkiler
    kulturel_etkiler: {
        text: "Kurtuluş Savaşı ve Cumhuriyetin ilanı, Türkiye'nin kültürel yaşamını derinden etkilemiştir. Sanat, edebiyat, müzik ve eğitim alanında köklü değişimler yaşanmıştır. Zafer ve savaş anıları, müzeler ve anıtlar aracılığıyla günümüze taşınmıştır.",
        options: [
            { id: "sanat_ve_edebiyat", label: "Sanat ve edebiyat etkileri" },
            { id: "muzeler_ve_anitlar", label: "Müzeler ve anıtlar" },
            { id: "ulusal_simgeler", label: "Ulusal simgeler ve semboller" },
        ],
    },
    sanat_ve_edebiyat: {
        text: "Kurtuluş Savaşı ve Cumhuriyet dönemi, sanat ve edebiyatı derinden etkilemiştir. Bu dönemde yazılan şiirler, romanlar ve tiyatro eserleri, milli duyguları ve özgürlük mücadelesini yansıtır. Yeni edebi akımlar ve tiyatro toplulukları bu dönemde ortaya çıkmıştır.",
        options: [
            { id: "kulturel_etkiler", label: "Kültürel etkiler" },
            { id: "inkilaplar", label: "Cumhuriyet inkılapları" },
            { id: "milli_moral", label: "Milli moral" },
        ],
    },
    muzeler_ve_anitlar: {
        text: "Savaş alanları, müzeler ve anıtlar, Kurtuluş Savaşı ve 30 Ağustos Zaferi'nin hatırlanmasını sağlar. Dumlupınar, Sakarya ve Çanakkale gibi kritik bölgelerdeki anıtlar, tarih bilincini canlı tutar ve ziyaretçilere milli mücadele ruhunu aktarır.",
        options: [
            { id: "kulturel_etkiler", label: "Kültürel etkiler" },
            { id: "buyuk_taarruz", label: "Büyük Taarruz bağlantısı" },
            { id: "ulusal_simgeler", label: "Ulusal simgeler" },
        ],
    },
    savasta_stratejik_önem: {
        text: "Dumlupınar Savaşı ve diğer muharebelerdeki stratejik önem, Büyük Taarruz'un başarısını doğrudan etkilemiştir. Bu zafer, Türk ordusunun hareket kabiliyetini artırmış ve düşmanın Anadolu içlerine ilerlemesini engellemiştir.",
        options: [
            { id: "dumlupinar_onemi", label: "Dumlupınar Savaşı detayları" },
            { id: "buyuk_taarruz", label: "Büyük Taarruz genel bilgisi" },
        ],
    },

    ulusal_simgeler: {
        text: "Türkiye'nin ulusal simgeleri, bağımsızlık ve Cumhuriyet bilincini pekiştiren önemli öğelerdir. Bayrak, Anıtkabir, Milli Marş ve çeşitli milli değerler, halkın tarih bilincini ve birlik duygusunu güçlendirir.",
        options: [
            { id: "zafer_bayrami_onemi", label: "Zafer Bayramı önemi" },
            { id: "kulturel_etkiler", label: "Kültürel etkiler" },
        ],
    },

};
