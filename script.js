const allQuestions = [
    {
        number: 1,
        question: "Camera Obscura’nın çalışma prensibini Rönesans Dönemi’nde ilk kez tanımlayan isim aşağıdakilerden hangisidir?",
        options: ["Niepce", "Uccello", "Leonardo Da Vinci", "Raffaello", "Michalengelo"],
        answer: "Leonardo Da Vinci"
    },
    {
        number: 2,
        question: "Aynadaki yansıma kuralını bularak görüntünün baş aşağı görülme eksikliğini gideren isim aşağıdakilerden hangisidir?",
        options: ["Johannes Kepler", "Daniello Barbaro", "İbn-i Heysem", "Giovanni Battista Della", "Daguerre"],
        answer: "Johannes Kepler"
    },
    {
        number: 3,
        question: "1826 yılında kalıcı görüntüyü sağlayarak ilk fotoğraf görüntüsünü elde eden isim aşağıdakilerden hangisidir?",
        options: ["François Arago", "Niepce", "William Henry Fox Talbot", "George Eastman", "Joseph Bancroft"],
        answer: "Niepce"
    },
    {
        number: 4,
        question: "Fotoğrafın resmen bir buluş olarak kabul edilmesinin resmî belgesi niteliğindeki buluş aşağıdakilerden hangisidir?",
        options: ["Banyolama", "Calotype", "Fotogram", "Daguerreotype", "Pozlama"],
        answer: "Daguerreotype"
    },
    {
        number: 5,
        question: "İlk kez negatif ve pozitif tekniğini bularak tek bir negatifi çoğaltıp pozitif görüntüler elde etmenin mümkün olduğunu gösteren isim aşağıdakilerden hangisidir?",
        options: ["Niepce", "George Eastman", "François Arago", "Giovanni Battista Della", "William Henry Fox Talbot"],
        answer: "William Henry Fox Talbot"
    },
    {
        number: 6,
        question: "Yüzey üzerinde görüntü oluşmasına yardımcı olan ve ışıkla etkileşimi sonucu kararma-ağarma özelliklerine sahip kimyasal madde aşağıdakilerden hangisidir?",
        options: ["Gümüş", "Bakır", "Altın", "Krom", "Civa"],
        answer: "Gümüş"
    },
    {
        number: 7,
        question: "“Universal tip” olarak bilinen hem gün ışığında hem de yapay ışıkta elde edilen renkli negatifler hangi yöntemle fotoğraf kartlarına tab edilerek birer pozitif görüntüye dönüştürülürler?",
        options: ["Banyolama", "Küçültme", "Büyütme", "Fotogram", "Calotype"],
        answer: "Büyütme"
    },
    {
        number: 8,
        question: "İki boyutlu fotoğraflar yerine üç boyutlu fotoğraflar elde ederek fotoğraflara derinlik hissi veren fotoğraf makinesi türü aşağıdakilerden hangisidir?",
        options: ["Leica Fotoğraf Makinesi", "Katlanabilir Fotoğraf Makinesi", "Dijital Fotoğraf Makinesi", "Stereoskopik Fotoğraf Makinesi", "Kutu Fotoğraf Makinesi"],
        answer: "Stereoskopik Fotoğraf Makinesi"
    },
    {
        number: 9,
        question: "Niepce’nin metal levha üzerinde ilk mimari fotoğrafı elde ederken kullanmış olduğu yöntem aşağıdakilerden hangisidir?",
        options: ["Fotografi", "Gölgeleme", "Heliogarfi", "Calotyp", "Daguerreotype"],
        answer: "Heliogarfi"
    },
    {
        number: 10,
        question: "Kutu fotoğraf makinesinin özellikleri arasında aşağıdakilerden hangisi yoktur?",
        options: ["Fotoğraf makinelerinin en basit halidir.", "Madeni ya da bakalit gövdeden oluşur.", "Objektifleri iç bükey-dış bükey malzemeden yapılmıştır.", "Sabit netleme özelliğine sahiptir.", "Dia pozitif filmler kullanılır."],
        answer: "Dia pozitif filmler kullanılır."
    },
    {
        number: 11,
        question: "Fotoğraf makinesinin ana yapısını oluşturan iki mekanizma aşağıdakilerden hangisinde doğru verilmiştir?",
        options: ["Vizör-LCD ekran", "Objektif-gövde", "Batarya-Flaş", "Hafıza kartı-flaş", "Diyafram-zoom halkası"],
        answer: "Objektif-gövde"
    },
    {
        number: 12,
        question: "Objektif üzerinde bulunan mekanizmalar arasında aşağıdakilerden hangisi yoktur?",
        options: ["Netleme halkası", "Vibrasyon değeri", "Diyafram değerleri", "Mod kadranı", "Zoom halkası"],
        answer: "Mod kadranı"
    },
    {
        number: 13,
        question: "Fotoğraf makinesinde diyafram değerini gösteren ifade aşağıdakilerden hangisidir?",
        options: ["f numarası", "z numarası", "m numarası", "d numarası", "k numarası"],
        answer: "f numarası"
    },
    {
        number: 14,
        question: "Fotoğrafta konuların ayrıntılarının miktarını belirleyen netlik, fotoğraf makinesinde aşağıdaki hangi halka üzerinden yapılır?",
        options: ["Zoom halkası", "Focus halkası", "Diyafram halkası", "Objektif halkası", "Mod halkası"],
        answer: "Focus halkası"
    },
    {
        number: 15,
        question: "Fotoğraf makinesinin tüm sistem ve işlevlerini gösteren ekran olarak bilgi panosu, vizör, bilgisayar monitörü ve playback yerine aşağıdakilerden hangisi geçmektedir?",
        options: ["Flaş", "Info", "LCD ekran", "Ön izleme düğmesi", "Diyoptri düğmesi"],
        answer: "LCD ekran"
    },
    {
        number: 16,
        question: "Fotoğraf makinesinin gövdesinde…………………, …………………… ve ………….. düğmeleri bulunur. Cümlede boş bırakılan yerlere sırasıyla yukarıdakilerden hangileri getirilmelidir?",
        options: ["I, II  ve III", "I, III ve IV", "II, III ve IV", "II, IV ve V", "III, IV ve V"],
        answer: "I, II  ve III"
    },
    {
        number: 17,
        question: "Fotoğraf makinesinde bulunan deklanşörün tanımı aşağıdakilerden hangisidir?",
        options: ["Netlik sağlayan düğmedir.", "Diyafram ayarlarını yapan düğmedir.", "Fotoğraf çekilirken basılan düğmedir.", "Işığın yetersiz olduğu durumlarda kullanılan düğmedir.", "Ön izleme yapabilmek için basılan düğmedir."],
        answer: "Fotoğraf çekilirken basılan düğmedir."
    },
    {
        number: 18,
        question: "Fotoğraf makinelerine takılan hafıza kartı çeşitleri arasında aşağıdakilerden hangisi bulunmaz?",
        options: ["Secure Digital (SD) kart", "Multimedia (MMC) kart", "Smart Media (SM) kart", "Compact Flash (CF) kart", "Compact Disk (CD) kart"],
        answer: "Compact Disk (CD) kart"
    },
    {
        number: 19,
        question: "Fotoğraf makinesinden depolama alanına veri aktarımı yapan çıkışlardan biri aşağıdakilerden hangisidir?",
        options: ["USB çıkışı", "Aux çıkışı", "VGA çıkışı", "Kompozit çıkışı", "A/V çıkışı"],
        answer: "USB çıkışı"
    },
    {
        number: 20,
        question: "Göz ile vizörün buluştuğu noktada netliğin ayarlanmasını sağlayan, fotoğrafın net olması için kullanılan düğme aşağıdakilerden hangisidir?",
        options: ["Info", "Diyoptri", "Vibrasyon", "Menü", "Lens çıkarma"],
        answer: "Diyoptri"
    },
    {
        number: 21,
        question: "Bir fotoğrafın aydınlık ve karanlık oluşu anlamına aşağıdakilerden hangisi gelmektedir?",
        options: ["Diyafram", "Odak uzaklığı", "Enstantane", "Pozlama", "ISO"],
        answer: "Pozlama"
    },
    {
        number: 22,
        question: "Diyafram tarafından ışığın objektiften geçmesine izin veren delik ya da açıklığa ne ad verilmektedir?",
        options: ["ISO", "Diyafram boyutu", "Enstantane", "İris diyafram", "Diyafram açıklığı"],
        answer: "Diyafram açıklığı"
    },
    {
        number: 23,
        question: "Filmin ışığa duyarlılık hassasiyetini belirleyen unsur aşağıdakilerden hangisidir?",
        options: ["F/stop", "Alan derinliği", "Basit diyafram", "ISO", "Enstantane"],
        answer: "ISO"
    },
    {
        number: 24,
        question: "Görüntüsü alınan objeden yansıyan ışınların aynanın üzerine düşeceği yoğunluğu belirleyen sisteme ne ad verilmektedir?",
        options: ["ISO", "F/durak", "Diyafram", "Enstantane", "Işık yoğunluğu"],
        answer: "Diyafram"
    },
    {
        number: 25,
        question: "Diyafram, deklanşör hızı ve ISO arasındaki dengeleme eylemi, fotoğrafta ne olarak adlandırılmaktadır?",
        options: ["Enstantane", "Demir üçgen", "F/durak", "Basit diyafram", "Açık diyafram"],
        answer: "Demir üçgen"
    },
    {
        number: 26,
        question: "Bir fotoğrafta net odakta görünen en yakın ve en uzak nesneler arasındaki mesafe miktarına ne ad verilmektedir?",
        options: ["Diyafram boyutu", "Diyafram açıklığı", "Alan derinliği", "Işık yoğunluğu", "Pozlama"],
        answer: "Alan derinliği"
    },
    {
        number: 27,
        question: "Diyafram açıklıklarının aydınlanma koşullarına göre otomatik olarak sağlanması için yapılmış diyafram sistemi aşağıdakilerden hangisidir?",
        options: ["Basit diyafram", "İris diyafram", "Odak diyafram", "Otomatik diyafram", "Diyafram açıklığı"],
        answer: "Otomatik diyafram"
    },
    {
        number: 28,
        question: "Bir merceğin bir görüntüyü veya sahneyi ne kadar büyüttüğünü tanımlayan kavram aşağıdakilerden hangisidir?",
        options: ["Odak uzaklığı", "Odak noktası", "Işık yoğunluğu", "Alan derinliği", "Diyafram boyutu"],
        answer: "Odak uzaklığı"
    },
    {
        number: 29,
        question: "Daha az alan derinliği veya sığ alan derinliği anlamında aşağıdakilerden hangisi kullanılmaktadır?",
        options: ["F/stop", "Düşük f/stop sayısı", "Yüksek f/stop sayısı", "f/durak", "Enstantane"],
        answer: "Düşük f/stop sayısı"
    },
    {
        number: 30,
        question: "Bir nesnenin görüntüsünün istenilen biçimde çekilmesi için cisimlerin üzerine düşen ya da etrafındaki ışık miktarını ayarlamak için enstantane ayarına uygun yapılması gereken ayar aşağıdakilerden hangisidir?",
        options: ["F/durak", "Alan derinliği", "Odak noktası", "Diyafram ayarı", "ISO"],
        answer: "Diyafram ayarı"
    },
    {
        number: 31,
        question: "Hareketli bir nesnenin hareketi flu bir şekilde aşağıdaki değerlerden hangisinde fotoğraflanabilir?",
        options: ["1/2000", "1/2", "1/4000", "1/8000", "1/1000"],
        answer: "1/2"
    },
    {
        number: 32,
        question: "Enstantane değerleri aşağıdakilerden hangisinin hareketiyle elde edilir?",
        options: ["Vizör", "Sensör", "Film", "Obtüratör", "Pixell"],
        answer: "Obtüratör"
    },
    {
        number: 33,
        question: "Yüksek ASA’dan kaynaklanan görüntü bozulması ne olarak adlandırılır?",
        options: ["Işık", "Gümüş nitrat", "Grain", "Ayna", "Perde"],
        answer: "Grain"
    },
    {
        number: 34,
        question: "Normal değer olarak kabul edilen değer aşağıdaki enstantane değerlerinden hangisidir?",
        options: ["1/125", "1/500", "1/2000", "1/30", "1/250"],
        answer: "1/125"
    },
    {
        number: 35,
        question: "Enstantane değerlerinden hangisinde ışık 1/250 değerinden 3 kat daha hızlı sürede sensöre ulaşır?",
        options: ["1/15", "1/60", "1/4000", "1/1000", "1/2000"],
        answer: "1/2000"
    },
    {
        number: 36,
        question: "Noise oranı aşağıdaki değerlerden hangisinde en yüksektir?",
        options: ["ISO 100", "ISO 3200", "ISO 400", "ISO 1600", "ISO 800"],
        answer: "ISO 3200"
    },
    {
        number: 37,
        question: "Dijital fotoğraf makinelerinde yüksek ISO’dan kaynaklanan görüntü bozulması ne olarak adlandırılır?",
        options: ["Piksel", "Ayna", "Noise", "Obtüratör", "Perde"],
        answer: "Noise"
    },
    {
        number: 38,
        question: "ASA değerleri aşağıdakilerden hangisine bağlı olarak değişiklik gösterir?",
        options: ["Gümüş zerrecikleri", "Piksel", "Sensör", "Nesnenin hareketi", "Obtüratör"],
        answer: "Gümüş zerrecikleri"
    },
    {
        number: 39,
        question: "Eski doğu bloku ülkelerinde ASA yerine kullanılan kavram aşağıdakilerden hangisidir?",
        options: ["ISO", "Grain", "Stop", "DIN", "Gümüş nitrat"],
        answer: "DIN"
    },
    {
        number: 40,
        question: "ISO 100 ve 1/60 enstantane değerinde elde edilen poz değerinin aynısını 1/2000 enstantane değerinde elde edebilmek için ISO değeri kaç olmalıdır?",
        options: ["6400", "800", "400", "50", "3200"],
        answer: "3200"
    },
    {
        number: 41,
        question: "Fotoğrafınızın ışık değerinin gerekenden az olması durumunda yapılması gereken yardımcı pozlama ayarı aşağıdakilerden hangisidir?",
        options: ["WB ayarı", "Flaş ayarı", "Pozlama değeri (EV) +’ya doğru ayarı", "Uv Filtre ayarı", "Noktasal ölçüm modu ayarı"],
        answer: "Pozlama değeri (EV) +’ya doğru ayarı"
    },
    {
        number: 42,
        question: "Düz ve temiz bir fon önünde ters ışıkla oluşacak siluetler ile yakalayacağınız kontrast biçimi aşağıdakilerden hangisidir?",
        options: ["Leke kontrastı", "İçerik kontrastı", "Nokta kontrastı", "Çizgisel kontrast", "Şekilsel kontrast"],
        answer: "Leke kontrastı"
    },
    {
        number: 43,
        question: "Fotoğrafındaki karanlık bölgeleri arındırarak bir kontrast sağlamak istediğinizde makinenizdeki hangi ayar ile oynamanız gerekmektedir?",
        options: ["Whites- Blacks", "Highlights", "White balance", "Image size", "Shadows"],
        answer: "Shadows"
    },
    {
        number: 44,
        question: "Kadrajdaki birçok noktadan farklı ışık yoğunluklarını görüp ve onların ortalamasını alarak alan bilgisi ile birlikte bir hesaplama yapan ölçüm yöntemi aşağıdakilerden hangisidir?",
        options: ["Merkez ağırlıklı", "Noktasal", "Genel", "Kısmi", "Çok bölgeli"],
        answer: "Çok bölgeli"
    },
    {
        number: 45,
        question: "Milyonlarca yatay ve dikey görüntünün birleşmesi ile oluşan sayısal görüntüleri, fotoğrafı hangi çözünürlükte ve kalitede çekebileceğinizi ifade eden kavram aşağıdakilerden hangisidir?",
        options: ["Iso değeri", "Pixel", "Vizör", "Diyafram", "Enstantane"],
        answer: "Pixel"
    },
    {
        number: 46,
        question: "Çekim esnasındaki ham görüntünün herhangi bir işleme maruz kalmadan doğrudan kaydedilmesine olanak sağlayan özel format aşağıdakilerden hangisidir?",
        options: ["JPEG", "TIFF", "BMP", "RAW", "GIF"],
        answer: "RAW"
    },
    {
        number: 47,
        question: "Beklenenden daha az netliğe sahip bir fotoğrafa netlik kazandırmak amacıyla yapılan ayar aşağıdakilerden hangisidir?",
        options: ["Kontrast", "Image sharpening", "UV Filtre", "ISO", "WB"],
        answer: "Image sharpening"
    },
    {
        number: 48,
        question: "Renk matriksi veya değerlendirmeli ölçüm olarak da bilinen ve fotoğraf makinesinde simgesi ile verilen ölçüm yöntemi aşağıdakilerden hangisidir?",
        options: ["Noktasal", "Merkez ağırlıklı", "Çok bölgeli", "Genel", "Kısmi"],
        answer: "Genel"
    },
    {
        number: 49,
        question: "6000 Kelvin’e ayarlanmış beyaz ayarı değerinde olan ve gün ışığı ve gölge arasında tonlara sahip olan beyaz ayarı yaparken hangi modu seçersiniz?",
        options: ["Gün ışığı (Daylight)", "Gölge (Shade)", "Bulutlu (Cloudy)", "Ampül (Tungsten)", "Floresan (Fluorescent)"],
        answer: "Bulutlu (Cloudy)"
    },
    {
        number: 50,
        question: "Beyaz ayarında simgesi ile seçeceğiniz mod aşağıdakilerden hangisidir?",
        options: ["Seçimli / Özel (Custom)", "Kelvin", "Gölge (Shade)", "Ampül (Tungsten)", "Otomatik (Auto)"],
        answer: "Otomatik (Auto)"
    },
    {
        number: 51,
        question: "Objektifin işlevleri ve özellikleri arasında aşağıdakilerden hangisi yer almaz?",
        options: ["Konudan yansıyan ışığın kamera içindeki yüzeye düşmesini sağlar.", "Konudan yansıyan ışınları belli bir noktaya odaklar.", "Nesnenin görüntüsünü oluşturan parçadır.", "Sadece kalın kenarlı merceklerden oluşur.", "Objektifin görüş açısı odak uzaklığı ile ters orantılıdır."],
        answer: "Sadece kalın kenarlı merceklerden oluşur."
    },
    {
        number: 52,
        question: "Odak uzaklığı ile ilgili aşağıdakilerden hangisi söylenemez?",
        options: ["Odak uzaklığı milimetre olarak ifade edilir.", "Odak uzaklığı arttıkça merceğin yakınlaşması azalır.", "Uzun odak uzunluğunda nesneler daha yakındaymış gibi görünür.", "İnsan gözünün odak uzaklığı ortalama 50 mm’dir.", "Odak uzaklığı ile görüş alanı ters orantılıdır."],
        answer: "Odak uzaklığı arttıkça merceğin yakınlaşması azalır."
    },
    {
        number: 53,
        question: "Nesnelerden gelen ışınların duyarkatta toplanma gücünün ölçüsü aşağıdaki kavramların hangisiyle ifade edilir?",
        options: ["Diyafram", "Görüş alanı", "Objektif hızı", "Mercek", "Odak uzaklığı"],
        answer: "Objektif hızı"
    },
    {
        number: 54,
        question: "Görüntüde muhtemel renk sapmalarını engellemek için alınabilecek tedbirler arasında aşağıdakilerden hangisi yoktur?",
        options: ["Tripod kullanmamak", "Çok keskin renk karşıtlıkları içeren sahnelerden kaçınmak", "Diyafram açıklığını ayarlamak", "Kaliteli objektif tercih etmek", "Çekim amacına uygun odak uzaklığı seçmek"],
        answer: "Tripod kullanmamak"
    },
    {
        number: 55,
        question: "Fotoğrafın bulanık çıkmasının nedenleri arasında aşağıdakilerden hangisi yoktur?",
        options: ["Konunun hareketli olması", "Pozlama süresinin fazla olması", "Konunun karşıt renkler içermesi", "Ortamda yeterli ışık bulunmaması", "Çekim esnasında fotoğraf makinesinin hareket ettirilmesi"],
        answer: "Konunun karşıt renkler içermesi"
    },
    {
        number: 56,
        question: "Objektifin bileşenleri arasında aşağıdakilerden hangisi yer almaz?",
        options: ["Bayonet", "Netleme halkası", "Objektif çerçevesi", "Diyafram perdesi", "Vizör"],
        answer: "Vizör"
    },
    {
        number: 57,
        question: "Geniş açılı objektiflerin özellikleri arasında aşağıdakilerden hangisi yer almaz?",
        options: ["Uzun odak uzaklıklı objektiflerdir.", "Alan derinlikleri fazladır.", "Odak uzaklıkları 50 mm’den azdır.", "Manzara veya kalabalık sahne çekimleri için idealdir.", "İnsan gözünün gördüğü açıdan daha geniş bir alanı yakalayabilirler."],
        answer: "Uzun odak uzaklıklı objektiflerdir."
    },
    {
        number: 58,
        question: "Değişken odak uzaklıklı objektifleri aşağıdakilerden hangisi tanımlamaz?",
        options: ["Farklı odak uzaklığına sahip objektiflerin özelliklerini bir arada barındıran objektiflerdir.", "Odak uzaklığı değişebilen objektiflerdir.", "Hem geniş hem de dar açılı görüntülerin yakalanmasına imkân tanıyan objektiflerdir.", "Standart objektiflere göre gövdesinde daha fazla merceğin bulunduğu objektiflerdir.", "Görüş açısı en geniş objektiflerdir."],
        answer: "Görüş açısı en geniş objektiflerdir."
    },
    {
        number: 59,
        question: "Yansımayı azaltarak parlaklığı önleyen ve renklerin daha canlı görünmesini sağlayan filtre hangisidir?",
        options: ["Vidalı filtre", "Nötr yoğunluklu filtre", "Gri-siyah renk filtresi", "Polarize filtre", "UV filtre"],
        answer: "Polarize filtre"
    },
    {
        number: 60,
        question: "ND filtrelerin özellikleri arasında aşağıdakilerden hangisi yer almaz?",
        options: ["Dereceli filtre olarak da adlandırılır.", "Objektife gelen ışığın miktarını arttırır.", "Gri-siyah renkte üretilir.", "Özellikle doğa fotoğrafçılığında kullanılır.", "Filtrenin koyuluk derecesi arttıkça parlaklığı düşürme oranı da artar."],
        answer: "Objektife gelen ışığın miktarını arttırır."
    }
];

let questions = []; // This will hold either all questions or 25 random questions
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let quizMode = '';

// Shuffle function to pick random questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Start the quiz with chosen mode
function startQuiz(mode) {
    quizMode = mode;
    correctCount = 0;
    incorrectCount = 0;
    currentQuestionIndex = 0;

    // Select questions based on the chosen mode
    if (mode === 'all') {
        questions = allQuestions; // Use all questions
    } else if (mode === 'random') {
        // Shuffle and select first 25 questions
        questions = [...allQuestions]; // Clone allQuestions array
        shuffleArray(questions);
        questions = questions.slice(0, 25);
    }

    // Hide the guide text and mode selection
    document.getElementById("intro-text").style.display = "none";
    document.getElementById("mode-selection").style.display = "none";
    document.getElementById("question-container").style.display = "block";

    showQuestion();
}

// Display the current question
function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "";

    const questionElement = document.createElement("p");
    questionElement.innerText = `Soru ${questions[currentQuestionIndex].number}: ${questions[currentQuestionIndex].question}`;
    questionContainer.appendChild(questionElement);

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectAnswer(button, option);
        questionContainer.appendChild(button);
    });
}

// Handle answer selection
function selectAnswer(button, selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const answerMessage = document.getElementById("answer-message");

    if (selectedOption === correctAnswer) {
        correctCount++;
        answerMessage.innerText = "Doğru!";
        answerMessage.className = "correct";
    } else {
        incorrectCount++;
        answerMessage.innerText = "Yanlış!";
        answerMessage.className = "incorrect";
        button.classList.add("incorrect");

        // Highlight the correct answer button
        highlightCorrectAnswer();
    }

    // Delay before moving to the next question to show the answer message
    setTimeout(() => {
        answerMessage.innerText = "";
        button.classList.remove("incorrect");

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showResults();
        }
    }, 1000); // 1 second delay to display feedback
}

// Highlight the correct answer for incorrect attempts
function highlightCorrectAnswer() {
    const buttons = document.querySelectorAll("#question-container button");
    buttons.forEach(btn => {
        if (btn.innerText === questions[currentQuestionIndex].answer) {
            btn.classList.add("correct"); // Highlight the correct answer
        }
    });
}

// Show final results with a "Giriş Sayfasına Git" button
function showResults() {
    const questionContainer = document.getElementById("question-container");
    let score = correctCount;

    if (quizMode === 'random') {
        score = (correctCount / 25) * 100; // Scale score to 100 points
    }

    questionContainer.innerHTML = `
        <h2>Sonuçlar</h2>
        <p>Doğru: ${correctCount}</p>
        <p>Yanlış: ${incorrectCount}</p>
        <p>Puan: ${quizMode === 'random' ? score.toFixed(2) + " / 100" : correctCount + " / " + questions.length}</p>
        <button onclick="resetQuiz()">Giriş Sayfasına Git</button>
    `;
}

// Reset quiz and show intro page
function resetQuiz() {
    document.getElementById("intro-text").style.display = "block";
    document.getElementById("mode-selection").style.display = "block";
    document.getElementById("question-container").style.display = "none";
    document.getElementById("answer-message").innerText = "";
}

// Initialize with the mode selection view
document.getElementById("question-container").style.display = "none";
document.getElementById("answer-message").style.display = "block";