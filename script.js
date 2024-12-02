// กำหนดตัวแปรสำหรับเลือกทุกๆ section และทุกๆ ลิงก์ใน navbar
let sections = document.querySelectorAll('section');  // เลือกทุกๆ <section>
let navLinks = document.querySelectorAll('header nav a');  // เลือกทุกๆ <a> ใน <nav> ภายใน <header>

// เมื่อมีการเลื่อนหน้าจอลง
window.onscroll = () => {
    // วนลูปผ่านแต่ละ <section>
    sections.forEach(sec => {
        let top = window.scrollY;  // ความสูงที่เลื่อนหน้าจอลงมา
        let offset = sec.offsetTop;  // ตำแหน่งของ section จากขอบบนของเอกสาร
        let height = sec.offsetHeight;  // ความสูงของ section
        let id = sec.getAttribute('id');  // ดึงค่า id ของ section เพื่อใช้ในลิงก์

        // ตรวจสอบว่าเมื่อเลื่อนหน้าจอลงไปถึงตำแหน่งนี้หรือไม่
        if (top >= offset && top < offset + height) {
            // ลบคลาส 'active' ออกจากทุกลิงก์ใน navbar
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // เพิ่มคลาส 'active' ให้กับลิงก์ที่ตรงกับ id ของ section ปัจจุบัน
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};
