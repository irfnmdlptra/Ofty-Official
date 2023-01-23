

      const scriptURL = "https://script.google.com/macros/s/AKfycbwIHLPxM3yt0cCku1aSsJX1tboGFpRYezpAGKuFT7BxzA1O-Dya5MfvwWtibsoU7EU/exec";
      const form = document.forms["ofty-form"];
      const btnKirim = document.querySelector('.btn-kirim')
      const btnLoading = document.querySelector('.btn-loading')
      const myAlert = document.querySelector('.my-alert')

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        // Menghilakan Tombol Kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            console.log("Success!", response)
            myAlert.classList.toggle('d-none')
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });
