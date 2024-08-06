// تأثير النقر على زر الاحتفال
document.getElementById('celebrateBtn').addEventListener('click', () => {
    // إنشاء تأثير قصاصات ورق ملونة بألوان قوس قزح
    for (let i = 0; i < 60; i++) { // زيادة عدد القصاصات
        let confetti = document.createElement('div'); // إنشاء عنصر جديد للقصاصات
        confetti.className = 'confetti'; // تعيين اسم الكلاس
        confetti.style.left = `${Math.random() * 100}vw`; // تعيين موقع أفقي عشوائي
        confetti.style.top = `${Math.random() * 100}vh`; // تعيين موقع عمودي عشوائي
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`; // ألوان قوس قزح
        document.querySelector('.hero').appendChild(confetti); // إضافة القصاصات إلى قسم البطل

        // إزالة القصاصات بعد فترة معينة
        setTimeout(() => {
            confetti.remove(); // إزالة القصاصة بعد 4 ثواني
        }, 4000); // زيادة مدة ظهور القصاصات
    }

    // تغيير الصورة عند النقر
    const photo = document.getElementById('shams-photo');
    photo.src = 'shams-happy-blue.jpg'; // تعيين الصورة الجديدة

    // التأكد من أن صورة الاحتفال بالحجم نفسه كما الصورة الأولى
    const newPhoto = document.createElement('img');
    newPhoto.src = 'shams-happy-blue.jpg'; // تعيين نفس الصورة الجديدة
    newPhoto.style.width = `${photo.clientWidth}px`; // تعيين العرض مطابقاً للصورة الأولى
    newPhoto.style.height = `${photo.clientHeight}px`; // تعيين الارتفاع مطابقاً للصورة الأولى
    newPhoto.className = 'img-fluid rounded-circle my-4 resized-img'; // إضافة نفس الكلاس

    // تعيين الصورة الجديدة
    photo.replaceWith(newPhoto);
});

// تأثير النقر على صندوق الهدية
document.getElementById('giftBox').addEventListener('click', () => {
    // إخفاء صندوق الهدية وعرض الرسالة
    document.getElementById('gift-box').style.display = 'none';
    document.getElementById('message').style.display = 'block';

    // إنشاء تأثير الفراشات
    for (let i = 0; i < 30; i++) { // زيادة عدد الفراشات
        let butterfly = document.createElement('div'); // إنشاء عنصر جديد للفراشة
        butterfly.className = 'butterfly'; // تعيين اسم الكلاس
        butterfly.style.left = `${Math.random() * 100}vw`; // تعيين موقع أفقي عشوائي
        butterfly.style.top = `${Math.random() * 100}vh`; // تعيين موقع عمودي عشوائي
        butterfly.style.setProperty('--end-x', `${Math.random() * 200 - 100}vw`); // تعيين موقع النهاية العشوائي
        butterfly.style.setProperty('--end-y', `${Math.random() * 200 - 100}vh`);
        document.getElementById('message').appendChild(butterfly); // إضافة الفراشات إلى قسم الرسالة

        // إزالة الفراشة بعد انتهاء التحريك
        butterfly.addEventListener('animationend', () => {
            butterfly.remove(); // إزالة الفراشة بعد انتهاء الرسوم المتحركة
        });
    }
});
