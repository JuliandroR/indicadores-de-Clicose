var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        // this.receivedEvent('deviceready');
        document.getElementById("nova_medicao").addEventListener("click", () => {
            window.location.assign("pages/nova_medicao.html");
        })
    },

    // receivedEvent: function(id) {
    // }
};

app.initialize();