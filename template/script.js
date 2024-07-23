function redirectTo(url){
    window.location.href = url;
}

// Camera
document.querySelector(".bt-1").addEventListener("click", function(){
    redirectTo("");
});

// Temp plot
document.querySelector(".bt-2").addEventListener("click", function(){
    redirectTo("/plot_aht21");
});

// Calling
document.querySelector(".bt-3").addEventListener("click", function(){
    redirectTo("");
});

// Gas plot
document.querySelector(".bt-4").addEventListener("click", function(){
    redirectTo("/plot_mq6");
});

// Temperature Data
document.querySelector(".bt-5").addEventListener("click", function(){
    redirectTo("/aht21");
});

// MQ6 plot 
document.querySelector(".bt-6").addEventListener("click", function(){
    redirectTo("/mq6");
});
// Overall Plot 
document.querySelector(".bt-7").addEventListener("click", function(){
    redirectTo("/overall");
});


// ESP online check
function updateStatus() {
    fetch('/esp32_status')
        .then(response => response.json())
        .then(data => {
            for (const [device, status] of Object.entries(data)) {
                const deviceElement = document.getElementById(`${device}_status`);
                const statusText = document.getElementById(`${device}_status_text`);
                const indicator = deviceElement.querySelector('.indicator');

                if (status === 'online') {
                    statusText.textContent = 'Online';
                    indicator.classList.add('online');
                    indicator.classList.remove('offline');
                } else {
                    statusText.textContent = 'Offline';
                    indicator.classList.add('offline');
                    indicator.classList.remove('online');
                }
            }
        })
        .catch(error => {
            console.error('Error fetching status:', error);
        });
}
// Update status every 5 seconds
setInterval(updateStatus, 5000);
// Initial update
updateStatus();