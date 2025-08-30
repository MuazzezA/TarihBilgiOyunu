
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
        text: "30 Ağustos Zafer Bayramı, Türkiye Cumhuriyeti'nin kuruluşuna giden yolda büyük bir dönüm noktasıdır. Bu bayram, Türk milletinin bağımsızlık mücadelesinin en önemli zaferlerinden birini simgeler. Kurtuluş Savaşı'nın kazanılması ve ulusal egemenliğin sağlanması sürecinde oynadığı kritik rol unutulmazdır.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz hakkında bilgi" },
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı nedir?" },
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyetin ilanı" },
            { id: "zafer_bayrami_onemi", label: "30 Ağustos Zafer Bayramı'nın önemi" },
            { id: "ataturk_liderligi", label: "Atatürk'ün liderliği" },
            { id: "kulturel_etkiler", label: "Tarihi ve kültürel etkiler" },
        ],
    },
    // Büyük Taarruz
    buyuk_taarruz: {
        text: "Büyük Taarruz, 26 Ağustos 1922'de başlamış ve 30 Ağustos'ta zaferle sonuçlanmıştır. Mustafa Kemal Atatürk'ün önderliğinde Türk ordusu, Yunan işgaline karşı büyük bir stratejik saldırı gerçekleştirmiştir. Bu taarruz, Kurtuluş Savaşı'nın seyrini değiştiren en kritik askeri harekâttır.",
        options: [
            { id: "dumlupinar_onemi", label: "Dumlupınar Savaşı'nın önemi" },
            { id: "taarruz_stratejisi", label: "Büyük Taarruz stratejisi" },
            { id: "ordu_hazirliklari", label: "Ordu hazırlıkları" },
            { id: "cevre_sehirler", label: "Stratejik şehirler ve etkileri" },
            { id: "askeri_liderler", label: "Askeri liderler" },
        ],
    },
    dumlupinar_onemi: {
        text: "Dumlupınar Savaşı, Büyük Taarruz'un en önemli muharebesidir ve Türk ordusunun kesin zaferini simgeler. Bu savaş, düşman ordularının Anadolu'dan tamamen temizlenmesini sağlamış ve Türk milletine büyük moral kazandırmıştır. 30 Ağustos, bu zaferin anıldığı gün olarak resmî bayram haline gelmiştir.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz detayları" },
            { id: "savasta_stratejik_önem", label: "Savaşın stratejik önemi" },
        ],
    },
    taarruz_stratejisi: {
        text: "Büyük Taarruz'da Türk ordusu, düşman hatlarını derinlemesine sarsacak hızlı ve etkili bir strateji uygulamıştır. Manevra kabiliyeti yüksek bir ordu ile yapılan saldırılar, düşmanın moralini bozmuş ve zaferi hızlandırmıştır. Atatürk'ün askeri dehası, bu stratejinin başarısında belirleyici olmuştur.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz genel bilgisi" },
        ],
    },
    ordu_hazirliklari: {
        text: "Taarruz öncesi Türk ordusu kapsamlı bir hazırlık dönemi geçirmiştir. Silah ve mühimmat temini, lojistik planlama ve istihbarat faaliyetleri büyük önem taşımıştır. Bu hazırlıklar, zaferin sağlanmasında kritik rol oynamıştır.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz detayları" },
        ],
    },
    cevre_sehirler: {
        text: "Büyük Taarruz sırasında stratejik olarak önemli şehirler ele geçirilmiştir. Bu şehirlerin kontrolü, düşman hatlarını zayıflatmış ve Türk ordusunun ilerlemesini kolaylaştırmıştır. Şehirlerin kurtarılması, bölge halkına moral ve güven vermiştir.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz genel bilgisi" },
        ],
    },
    askeri_liderler: {
        text: "Atatürk dışında Fevzi Çakmak, İsmet İnönü ve diğer komutanlar da Büyük Taarruz'da önemli görevler üstlenmiştir. Her bir liderin taktik ve yönetim yetenekleri, zaferin kazanılmasına katkıda bulunmuştur. Bu liderlerin işbirliği, Türk ordusunun başarısının temel taşlarından biridir.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz detayları" },
        ],
    },

    // Kurtuluş Savaşı
    kurtulus_savasi: {
        text: "Kurtuluş Savaşı, 1919 yılında başlayan ve Türk milletinin bağımsızlık mücadelesini simgeleyen önemli bir dönemdir. İşgal güçlerine karşı gösterilen direniş ve milli mücadele sayesinde Türkiye'nin varlığı korunmuştur. Bu savaş, modern Türkiye Cumhuriyeti'nin temellerini atan bir süreçtir ve halkın birlik ruhunu güçlendirmiştir.",
        options: [
            { id: "buyuk_taarruz", label: "Büyük Taarruz süreci" },
            { id: "kongreler", label: "Kurtuluş Savaşı kongreleri" },
            { id: "diplomasi", label: "Diplomatik girişimler" },
            { id: "halk_direnisi", label: "Halk direnişi" },
        ],
    },
    kongreler: {
        text: "Erzurum ve Sivas Kongreleri, Kurtuluş Savaşı'nın yönetim ve strateji kararlarını şekillendirmiştir. Bu kongrelerde milli irade ve birlik vurgusu öne çıkmıştır. Alınan kararlar, tüm mücadele sürecinin yol haritasını belirlemiştir.",
        options: [
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı genel bilgileri" },
        ],
    },
    diplomasi: {
        text: "Kurtuluş Savaşı süresince diplomasi büyük önem taşımıştır. Lozan Antlaşması gibi anlaşmalar, Türkiye'nin bağımsızlığının uluslararası alanda tanınmasını sağlamıştır. Diplomatik başarılar, askeri zaferlerin kalıcılığını güvence altına almıştır.",
        options: [
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı genel bilgileri" },
        ],
    },
    halk_direnisi: {
        text: "Milli Mücadele, halkın her kesiminin katıldığı bir direniş hareketidir. Kuva-yi Milliye ve yerel direniş grupları, savaşın kazanılmasında kritik rol oynamıştır. Bu süreç, Türk milletinin bağımsızlık ve özveri ruhunu ortaya koyar.",
        options: [
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı genel bakış" },
        ],
    },

    // Cumhuriyet
    cumhuriyet_kurulusu: {
        text: "29 Ekim 1923'te Cumhuriyet ilan edilmiş ve Türkiye modernleşme yolunda büyük adımlar atmıştır. Atatürk önderliğinde gerçekleştirilen inkılaplar, eğitim, hukuk ve toplumsal yapıyı köklü şekilde değiştirmiştir. Bu ilan, Türk milletinin bağımsızlık ve egemenlik mücadelesinin taçlandırılması anlamına gelmektedir.",
        options: [
            { id: "kurtulus_savasi", label: "Kurtuluş Savaşı'nın etkileri" },
            { id: "inkilaplar", label: "Cumhuriyet sonrası inkılaplar" },
            { id: "egitim_reformlari", label: "Eğitim reformları" },
            { id: "kadın_haklari", label: "Kadın hakları ve toplumsal değişim" },
            { id: "anayasa_calismlari", label: "Anayasa çalışmaları" },
        ],
    },
    inkilaplar: {
        text: "Cumhuriyetin ilanı sonrası yapılan inkılaplar, toplumsal yaşamın her alanını dönüştürmüştür. Eğitimde Latin alfabesine geçiş, hukukta medeni kanunun kabulü ve kadın haklarının tanınması, modern Türkiye'nin temellerini oluşturmuştur. Bu reformlar, Türk halkının özgür ve eşit bir toplumda yaşamasını sağlamıştır.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyetin temelleri" },
            { id: "ataturk_liderligi", label: "Atatürk'ün reform vizyonu" },
        ],
    },
    egitim_reformlari: {
        text: "Cumhuriyet döneminde eğitim alanında köklü değişiklikler yapılmıştır. Millet mektepleri açılmış, Latin alfabesine geçilmiş ve okuryazarlık oranı hızla artırılmıştır. Bu reformlar, toplumun çağdaş ve bilinçli bir yapıya kavuşmasını sağlamıştır.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyetin ilanı" },
        ],
    },
    kadın_haklari: {
        text: "Cumhuriyet ile birlikte kadınlara seçme ve seçilme hakkı tanınmıştır. Kadınlar hem siyasi hem sosyal yaşamda daha aktif roller üstlenmeye başlamıştır. Bu değişim, toplumsal cinsiyet eşitliği açısından devrim niteliğindedir.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyet süreci" },
        ],
    },
    anayasa_calismlari: {
        text: "1921 ve 1924 Anayasaları, yeni devletin temel yapısını oluşturmuştur. Bu anayasalar, hem hukuki düzeni hem de devletin işleyişini belirlemiştir. Cumhuriyetin demokratik temelleri bu çalışmalarla atılmıştır.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyetin temelleri" },
        ],
    },

    // Atatürk
    ataturk_liderligi: {
        text: "Mustafa Kemal Atatürk, Kurtuluş Savaşı boyunca hem askeri hem de siyasi lider olarak öne çıkmıştır. Savaşın kazanılmasının ardından, yeni devletin modernleşmesi için kapsamlı reformlar başlatmıştır. Atatürk'ün vizyonu, Türkiye Cumhuriyeti'nin çağdaş bir devlet olarak şekillenmesini sağlamıştır.",
        options: [
            { id: "cumhuriyet_kurulusu", label: "Cumhuriyet süreci" },
            { id: "stratejik_deha", label: "Atatürk'ün askeri dehası" },
            { id: "politik_vizyon", label: "Atatürk'ün politik vizyonu" },
            { id: "millet_egitimi", label: "Halkı bilinçlendirme ve eğitim" },
        ],
    },
    stratejik_deha: {
        text: "Atatürk, askeri dehasıyla düşman karşısında üstün stratejiler geliştirmiştir. Büyük Taarruz ve diğer savaş planlamaları onun liderliğini ve taktik zekasını gösterir. Bu stratejiler, Türk ordusunun başarısında belirleyici olmuştur.",
        options: [
            { id: "ataturk_liderligi", label: "Atatürk liderliği" },
        ],
    },
    politik_vizyon: {
        text: "Atatürk, yeni Türkiye'nin demokratik ve çağdaş bir devlet olmasını hedeflemiştir. Siyasi reformlar ve anayasal düzenlemeler, onun vizyonunun yansımalarıdır. Bu vizyon, Cumhuriyet'in kalıcı olmasını sağlamıştır.",
        options: [
            { id: "ataturk_liderligi", label: "Atatürk liderliği" },
        ],
    },
    millet_egitimi: {
        text: "Atatürk, halkı bilinçlendirme ve eğitme çalışmalarına büyük önem vermiştir. Okuryazarlık seferberlikleri ve eğitim reformları, toplumsal dönüşümün temelini oluşturmuştur. Halkın bilgiye erişimi, modern Türkiye'nin oluşumunda kritik rol oynamıştır.",
        options: [
            { id: "ataturk_liderligi", label: "Atatürk liderliği" },
        ],
    },

    // 30 Ağustos Zafer Bayramı
    zafer_bayrami_onemi: {
        text: "30 Ağustos Zafer Bayramı, sadece bir askeri zaferi değil, aynı zamanda Türk milletinin bağımsızlık ve özgürlük mücadelesinin simgesidir. Her yıl çeşitli törenlerle kutlanan bu gün, ulusal birlik ve beraberliği pekiştirir. Bu bayram, özellikle genç kuşaklara tarihten ders çıkarmaları için önemli bir hatırlatıcıdır.",
        options: [
            { id: "bayram_torenleri", label: "Bayram törenleri" },
            { id: "genclere_mesaj", label: "Gençlere mesaj" },
            { id: "askeri_geceler", label: "Askeri geçit törenleri" },
        ],
    },
    bayram_torenleri: {
        text: "30 Ağustos'ta Türkiye genelinde resmi törenler düzenlenir. Ankara'daki törenler en kapsamlı olanlardır ve devlet protokolü ile askeri birlikler katılır. Bu törenler, zaferin anılmasını ve gelecek nesillere aktarılmasını sağlar.",
        options: [
            { id: "zafer_bayrami_onemi", label: "Zafer Bayramı önemi" },
        ],
    },
    genclere_mesaj: {
        text: "Bu bayram genç kuşaklara tarih bilinci ve bağımsızlık ruhu aşılamak için bir fırsattır. Okullarda programlar ve etkinlikler düzenlenir. Gençler, geçmişteki mücadeleleri öğrenerek ulusal değerleri benimserler.",
        options: [
            { id: "zafer_bayrami_onemi", label: "Zafer Bayramı önemi" },
            { id: "genclige_hitabe", label: "Atatürk'ün Gençliğe Hitabe'si" }
        ],
    },
    askeri_geceler: {
        text: "Bazı şehirlerde 30 Ağustos geceleri askeri geçit törenleri ve gösteriler düzenlenir. Bu etkinlikler, halkın zaferin önemini anlamasını sağlar. Askeri disiplin ve düzen, tarihsel bilinçle birleşir.",
        options: [
            { id: "zafer_bayrami_onemi", label: "Zafer Bayramı önemi" },
        ],
    },
    genclige_hitabe: {
        text: "Atatürk'ün Gençliğe Hitabesi, gençlere bağımsızlık ve cumhuriyet bilincini aktarmayı amaçlayan önemli bir metindir. Hitabe, Türk gençliğinin vatanı koruma sorumluluğunu ve milli değerleri yaşatma görevini vurgular. Her 19 Mayıs ve 30 Ağustos etkinliklerinde bu metin sıkça okunur ve gençlere örnek teşkil eder.",
        options: [
            { id: "genclere_mesaj", label: "Gençlere mesaj" },
            { id: "19_mayis", label: "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı" }
        ]

    },
    "19_mayis": {
    text: "19 Mayıs 1919, Atatürk'ün Samsun'a çıkarak Kurtuluş Mücadelesi'ni başlattığı gündür. Bu tarih, gençlere ve spora ithaf edilmiş bir milli bayram olarak kutlanır. Her yıl ülke genelinde törenler ve etkinliklerle anılır.",
        options: [
        { id: "genclige_hitabe", label: "Gençliğe Hitabe" }
    ],
   },


    // Kültürel Etkiler
    kulturel_etkiler: {
        text: "Kurtuluş Savaşı ve Cumhuriyetin ilanı, Türkiye'nin kültürel yaşamını da derinden etkilemiştir. Sanat, edebiyat ve eğitim alanında köklü değişimler yaşanmıştır. Savaşın izleri ve zaferlerin anısı, müzeler ve anıtlar aracılığıyla günümüze taşınmıştır.",
        options: [
            { id: "sanat_ve_edebiyat", label: "Sanat ve edebiyat" },
            { id: "muzeler_ve_anitlar", label: "Müzeler ve anıtlar" },
        ],
    },
    sanat_ve_edebiyat: {
        text: "Kurtuluş Savaşı ve Cumhuriyet dönemi, sanat ve edebiyatı derinden etkilemiştir. Bu dönemde yazılan eserler, milli duyguları ve özgürlük mücadelesini yansıtır. Şiir, roman ve tiyatro gibi alanlarda yeni akımlar ortaya çıkmıştır.",
        options: [
            { id: "kulturel_etkiler", label: "Kültürel etkiler" },
        ],
    },
    muzeler_ve_anitlar: {
        text: "Savaş alanları, müzeler ve anıtlar, Kurtuluş Savaşı'nın ve 30 Ağustos Zaferi'nin hatırlanmasını sağlar. Bu mekanlar, tarih bilincini canlı tutar ve ziyaretçilere milli mücadele ruhunu aktarır. Anıtlar özellikle Dumlupınar ve Sakarya gibi kritik alanlarda yoğunlaşmıştır.",
        options: [
            { id: "kulturel_etkiler", label: "Kültürel etkiler" },
        ],
    },
};
