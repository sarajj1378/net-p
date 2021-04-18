// Our product database.
const sampleProducts = [{
        id: 1,
        name: "ASUS TUF Gaming A15 FA506IU-BQ103T",
        category: "asus",
        price: 5000,
        description: "از سری لپ‌تاپ‌های قدرتمند، بادوام و باکیفیت سری TUF Gaming شرکت ایسوس پردازنده مرکزی بسیار پرقدرت 8 هسته‌ای AMD Ryzen 7 4800H پردازنده گرافیکی قدرتمند NVIDIA® GeForce® GTX 1660 Ti با حافظه اختصاصی 6 گیگابایت حافظه RAM دو کاناله با ظرفیت 16 گیگابایت 3200 مگاهرتز با قابلیت ارتقا حافظه داخلی پرسرعت 256GB PCIe NVMe SSD همراه با 1TB HDD\n" +
            "\n" +
            "صفحه نمایش 15.6 اینچی IPS ضد انعکاس و مات با وضوح تصویر بالا کیبورد گیمینگ خوش‌تایپ RGB، دارای پورت‌های رایج ورودی و خروجی مدل برند نیو، دارای یک سال گارانتی رسمی بین‌المللی شرکت ایسوس دارای Windows 10 اورجینال، دارای ماوس و کیف همراه شرکت ایسوس TUF Gaming Backpack + TUF Gaming M5 Mouse",
        popular: true,
        imageUrls: [
            "https://www.rojsa.com/media/catalog/product/cache/1/thumbnail/82x91/9df78eab33525d08d6e5fb8d27136e95/a/s/asus-tuf-gaming-a15-fa506iv_5_1.jpg"
        ]

    },
    {
        id: 2,
        name: "Asus ROG Zephyrus G14 GA401IV-BR9N6",
        category: "asus",
        price: 6000,
        description: "از سری لپ‌تاپ‌های قدرتمند، بادوام و باکیفیت سری ROG Zephyrus شرکت ایسوس پردازنده مرکزی بسیار پرقدرت 8 هسته‌ای AMD Ryzen 9 4900HS پردازنده گرافیکی قدرتمند NVIDIA GeForce RTX 2060 با حافظه اختصاصی 6 گیگابایت حافظه RAM دو کاناله با ظرفیت 16 گیگابایت 3200 مگاهرتز با قابلیت ارتقا تا 32 گیگابایت حافظه داخلی پرسرعت 1TB PCIe NVMe SSD همراه با قابلیت ارتقا" +
            "صفحه نمایش 14 اینچی IPS ضد انعکاس و مات با وضوح تصویر بالا کیبورد گیمینگ خوش‌تایپ، دارای پورت‌های رایج ورودی و خروجی مدل برند نیو، دارای یک سال گارانتی رسمی بین‌المللی شرکت ایسوس دارای Windows 10 اورجینال، مدل تولید شده برای ایالات متحده آمریکا",
        popular: true,
        imageUrls: [
            "https://www.rojsa.com/media/catalog/product/cache/1/thumbnail/82x91/9df78eab33525d08d6e5fb8d27136e95/a/s/asus-rog-zephyrus-g14-ga401iu-bm073t-06_2.jpg",
        ]
    },
    {
        id: 3,
        name: "Lenovo Legion 5 15ARH05H 82B1005FAX",
        category: "lenovo",
        price: 5500,
        description: "از سری لپ‌تاپ‌های گیمینگ پرمیوم و باکیفیت سری LEGION شرکت Lenovo پردازنده مرکزی قدرتمند 8 هسته‌ای رایزن AMD Ryzen 7 4800H پردازنده گرافیکی NVIDIA GeForce GTX 1660 Ti 6GB GDDR6 حافظه RAM با ظرفیت 16 و قابلیت ارتقا 3200حافظه داخلی پرسرعت با ظرفیت 256GB SSD M.2 2280 PCIe 3.0x4 NVMe + 1TB HDD" + "صفحه نمایش باکیفیت بدون لبه 15.6 اینچ 144 هرتزی IPS ضد انعکاس و مات قابلیت حمل بالا به سبب وزن کم، ضخامت اندک نسبت به محصولات هم‌رده بدنه باکیفیت و شکیل بی‌نظیر، کیبورد خوش‌تایپ، طراحی چشم‌نواز با کیبورد 4-Zone RGB ارائه شده در وضعیت برند نیو، دارای گارانتی یک ساله شرکت لنوو",
        popular: false,
        imageUrls: [
            "https://www.rojsa.com/media/catalog/product/cache/1/thumbnail/82x91/9df78eab33525d08d6e5fb8d27136e95/l/e/lenovo-legion-5-15-05_3.jpg"
        ]
    },
    {
        id: 4,
        name: "MSI GF65 Thin 10SDR-645US",
        category: "msi",
        price: 3700,
        description: "از سری لپ‌تاپ‌های گیمینگ قدرتمند، نازک و باکیفیت سری GF شرکت MSI پردازنده مرکزی 6 هسته‌ای قدرتمند نسل دهم Intel® Core™ i7-10750H پردازنده گرافیکی قدرتمند Nvidia GTX1660Ti با حافظه اختصاصی 6 گیگابایت حافظه RAM با ظرفیت 8 گیگابایت با فرکانس کاری 2666 مگاهرتز با قابلیت ارتقا تا 64 گیگابایت حافظه داخلی پرسرعت با ظرفیت 512 گیگابایت از نوع NVMe SSD " + "صفحه نمایش 15.6 اینچی بدون حاشیه IPS ضد انعکاس و مات 120Hz مدل تولید شده برای ایالات متحده آمریکا (مدل سایت آمازون)، دارای ویندوز 10 اورجینال مدل برند نیو همراه با یک سال گارانتی رسمی بین‌المللی شرکت MSI",
        popular: true,
        imageUrls: [
            "https://www.rojsa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/s/msi-gf65-thin-10sdr-01.jpg"
        ]
    },
    {
        id: 5,
        name: "Lenovo Flex 6-14IKB",
        category: "lenovo",
        price: 8000,
        description: "از سری الترابوک‎های ‎باکیفیت، لمسی، کانورتبل Flex شرکت Lenovo پردازنده مرکزی قدرتمند چهار هسته‌ای نسل هشتم Intel Core i7-8550U پردازنده گرافیکی مجزای NVIDIA GeForce MX130 با حافظه 2 گیگابایت حافظه RAM با ظرفیت 8 گیگابایت از نوع DDR4 با فرکانس کاری 2400 MHz حافظه ذخیره‌سازی پرسرعت NVMe PCIe SSD با ظرفیت 256 گیگابایت" + "صفحه‌ نمایش 14 اینچی IPS لمسی و بدون حاشیه با رزولوشن Full-HD بدنه ترکیبی آلومنیومی و فیبرکربنی، قابلیت پشتیبانی از قلم اکتیو صفحه نمایش کیبورد خوش‎تایپ، قابلیت استفاده در حالات مختلف، باتری باکیفیت تا 8 ساعت طراحی زیبا، دارای حسگر اثر انگشت Fingerprint و ویندوز 10 اورجینال دارای پورت‎های ورودی و خروجی رایج، مدل تولید شده برای ایالات متحده آمریکا",
        popular: true,
        imageUrls: [
            "https://www.rojsa.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/l/e/lenovo-flex-6-14ikb-1.jpg"
        ]
    },

    {
        id: 8,
        name: "Acer Aspire 7 A717-72G-700J",
        category: "acer",
        price: 10000,
        description: "از لپ‌تاپ‌های گیمینگ خوش‌ساخت و باکیفیت سری Aspire شرکت ایسر پردازنده مرکزی شش هسته‌ای قدرتمند نسل هشتم Intel Core i7-8750H پردازنده گرافیکی NVIDIA GeForce GTX 1060 با حافظه اختصاصی 6 گیگابایت حافظه RAM دو کاناله با ظرفیت 16 گیگابایت از نوع DDR4 با قابلیت ارتقا تا 32 گیگابایت حافظه داخلی با ظرفیت 256GB PCIe NVMe SSD و " + "قابلیت اضافه کردن حافظه 2.5 اینچی صفحه نمایش باکیفیت 17.3 اینچی IPS مات با وضوح تصویر Full HD، کیفیت صوت عالی کیبورد خوش‌تایپ، سیستم خنک کنندگی استثنایی به منظور اجرای طولانی مدت بازی‌های سنگین مدل تولید شده برای ایالات متحده آمریکا، دارای ویندوز 10 اورجینال",
        popular: false,
        imageUrls: [
            "https://www.rojsa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acer-aspire-7-a717-72g-700j.jpg"
        ]
    },
    {
        id: 9,
        name: "Acer Predator Helios 300 PH315-51",
        category: "acer",
        price: 4000,
        description: "از مشهورترین محصولات پرقدرت پرمیوم گیمینگ سری Predator شرکت ایسر پردازنده مرکزی شش هسته‌ای قدرتمند نسل هشتم Intel Core i7-8750H پردازنده گرافیکی NVIDIA GeForce GTX 1060 با حافظه اختصاصی 6 گیگابایت حافظه RAM دو کاناله با ظرفیت 16 گیگابایت از نوع DDR4 با فرکانس کاری 2666 مگاهرتز حافظه داخلی با ظرفیت 256GB PCIe NVMe SSD و قابلیت اضافه کردن حافظه 2.5 اینچی" + "صفحه نمایش باکیفیت 15.6 اینچی 144 هرتزی IPS ضد انعکاس و مات کیبورد خوش‌تایپ، بدنه تمام آلومنیومی باکیفیت، سیستم خنک کنندگی عالی مدل برند نیو همراه با یک سال گارانتی رسمی بین‌المللی شرکت ایسر مدل تولید شده برای ایالات متحده آمریکا (مدل سایت آمازون)، دارای ویندوز 10 اورجینال",
        popular: false,
        imageUrls: [
            "https://www.rojsa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acer-predator-helios-300-ph315-51-78np.jpg"
        ]
    },
    {
        id: 10,
        name: "MSI GL65 9SDK-026US",
        category: "msi",
        price: 5600,
        description: "از سری لپ‌تاپ‌های گیمینگ قدرتمند، نازک و باکیفیت سری GL شرکت MSI پردازنده مرکزی 6 هسته‌ای قدرتمند نسل نهم Intel® Core™ i7-9750H پردازنده گرافیکی قدرتمند Nvidia GTX1660Ti با حافظه اختصاصی 6 گیگابایت حافظه RAM با ظرفیت 32 گیگابایت با فرکانس کاری 2666 مگاهرتز با قابلیت ارتقا تا 64 گیگابایت حافظه داخلی پرسرعت با ظرفیت 512 گیگابایت از نوع PCIe NVMe SSD" + "باریک، نازک با قابلیت حمل بالا به لطف وزن سبک، تاچ‌پد دقیق، طراحی زیبا دارای کیبورد RGB صفحه نمایش 15.6 اینچی بدون حاشیه IPS ضد انعکاس و مات مدل تولید شده برای ایالات متحده آمریکا (مدل سایت آمازون)، دارای ویندوز 10 اورجینال مدل برند نیو همراه با یک سال گارانتی رسمی بین‌المللی شرکت MSI",

        popular: true,
        imageUrls: ["https://www.rojsa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/s/msi-gl65-9sdk-026-17.jpeg"]
    },
    {
        id: 11,
        name: "Acer Aspire 3 A315-55G",
        category: "acer",
        price: 10560,
        description: "از سری لپ‌تاپ‌های اقتصادی خوش‌ساخت سری Aspire شرکت ایسر پردازنده مرکزی چهار هسته‌ای نسل دهم Intel Core i7-10510U پردازنده گرافیکی NVIDIA GeForce MX230 با حافظه اختصاصی 2 گیگابایت حافظه RAM با ظرفیت 8 گیگابایت با فرکانس کاری 2400 مگاهرتز حافظه داخلی با ظرفیت 1TB HDD، کیفیت ساخت مناسب" + "صفحه نمایش باکیفیت 15.6 اینچی با وضوح تصویر Full HD شناخته‌شده به عنوان یکی از بهترین لپ‌تاپ‌های اقتصادی دنیا مدل برند نیو، دارای یک سال گارانتی رسمی بین المللی شرکت ایسر",
        popular: true,
        imageUrls: ["https://www.rojsa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acer-aspire-3-a315-55g.jpg"]
    },
    {
        id: 12,
        name: "LG G8X ThinQ",
        category: "LG",
        price: 199,
        description: "گوشی جدید G8 ThinQ ال‌جی به عنوان یک پرچم‌دار تنها متمایز از سایرین نیست ولی به اندازه کافی قابل قبول است. اما کافی است قاب نمایشگر دوگانه را به آن وصل کنید تا همه چیز ناگهان جالب شود.\n" +
            "\n" +
            "روی هم رفته، این دستگاه‌ها مزه‎ای از زندگی با چند نمایشگر را فراهم می‌کنند که سایر شرکت‌ها سعی در محبوب کردن آن داشته‌اند و چنین نمایشگرهایی برای مولتی تسکینگ یا انجام چند کار همزمان عالی هستند.",
        popular: false,
        imageUrls: [
            "https://www.lg.com/ir/images/mobile-phones/md07515895/Z-01.jpg"
        ]
    },
    {
        id: 13,
        name: "Apple iPhone 12",
        category: "apple",
        price: 1999,
        description: "اپل به ندرت طراحی فیزیکی آیفون را از نسلی به نسل دیگر تغییر می‌دهد و بنابراین، هر تغییری هر چند کوچک، معمولا با شور و اشتیاق توسط کاربران پذیرفته می‌شود. شما می‌توانید آیفون 12 را با زیبایی جدیدی در اختیار داشته و از طراحی تخت آن که همراه با اصلاحات نسبتا معتبر و قابل قبول همراه بوده است، لذت ببرید.",
        popular: false,
        imageUrls: [
            "https://bazarganisib.com/wp-content/uploads/2020/10/7i.jpg"
        ]

    },

];

// List of item categories.
const categories = [{
        name: "همه دسته بندی ها",
        icon: "cell"
    },
    {
        name: "asus",
        icon: "cell"
    },
    {
        name: "acer",
        icon: "cell"
    },
    {
        name: "lenovo",
        icon: "cell"
    },
    {
        name: "msi",
        icon: "cell"
    }
];

// Data for rendering menu.
const dataForTheMenu = [
    { name: "خانه", url: "/", icon: "home", id: 0 },
    {
        name: "دسته بندی ها",
        id: 1,
        children: categories.map((x, i) => {
            return {
                name: x.name,
                id: i,
                url: "/?category=" + x.name,
                icon: x.icon
            };
        })
    }
];



export { sampleProducts, categories, dataForTheMenu };