/*
 * Magangkuy - Responsive Login Page
 *
 * Desain berdasarkan wireframe Figma.
 * Mendukung tampilan desktop dan Android.
 *
 * Warna utama:
 * Navy  : #122940
 * Green : #176c68
 * Lime  : #e5f9b2
 */

/* Reset CSS dan pengaturan dasar */
// Mengambil elemen form dan input
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Fitur tampilkan dan sembunyikan kata sandi
if (passwordInput && togglePassword) {
    togglePassword.addEventListener("click", function () {
        const isHidden = passwordInput.type === "password";

        passwordInput.type = isHidden ? "text" : "password";

        togglePassword.textContent = isHidden
            ? "Sembunyikan"
            : "Tampilkan";

        togglePassword.setAttribute(
            "aria-label",
            isHidden ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
        );
    });
}
/* 
 * Responsive Design
 * Mengubah layout desktop dua kolom
 * menjadi satu kolom untuk Android dan tablet.
 */
@media (max-width: 768px) {
    /* CSS mobile yang sudah kamu buat */
}
// Validasi dan simulasi proses login
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Menjalankan validasi bawaan HTML
        if (!loginForm.checkValidity()) {
            loginForm.reportValidity();
            return;
        }

        // Login masih berupa simulasi frontend
        alert("Form login berhasil divalidasi. Backend belum tersedia.");
    });
}

