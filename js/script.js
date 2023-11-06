function toggleMode() {
    const body = document.body;

    body.classList.toggle("dark-mode");
    const button = document.getElementById("toggleButton");
    if (body.classList.contains("dark-mode")) {
      button.innerHTML = '<i class="fas fa-toggle-on"></i>';
    } else {
      button.innerHTML = '<i class="fas fa-toggle-off"></i>';
    }
  }

  