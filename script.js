// تهيئة مكتبة AOS للرسوميات المتحركة
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // إعدادات Firebase الخاصة بك
  const firebaseConfig = {
    apiKey: "AIzaSyAg146enaVn0vWUWvLT3CCTyXV5GNioulA",
    authDomain: "lebnan-web.firebaseapp.com",
    projectId: "lebnan-web",
    storageBucket: "lebnan-web.appspot.com",
    messagingSenderId: "904273519755",
    appId: "1:904273519755:web:e3f0b8f2e4be148188208e",
    measurementId: "G-0F685T1WHV"
  };
  
  // تهيئة Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // التعامل مع فورم الحجز
  const reservationForm = document.getElementById('reservation-form');
  
  if (reservationForm) {
    reservationForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const date = document.getElementById('date').value;
  
      if (name && email && date) {
        try {
          await db.collection('reservations').add({
            name: name,
            email: email,
            date: date,
            timestamp: new Date()
          });
  
          alert('✅ تم حجز الطاولة بنجاح!');
          reservationForm.reset();
        } catch (error) {
          console.error("❌ خطأ أثناء حفظ البيانات:", error);
          alert('حدث خطأ أثناء الحجز. حاول مرة أخرى.');
        }
      } else {
        alert('❗ يرجى ملء جميع الحقول.');
      }
    });
  }
  