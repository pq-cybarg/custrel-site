(function () {
    var localApi = (location.hostname === "127.0.0.1" || location.hostname === "localhost") && location.port === "8000";
    if (localApi) {
        document.getElementById("for-implementers").hidden = false;
    }
})();
