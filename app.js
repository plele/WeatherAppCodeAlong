window.addEventListener('load', ()=>{
    let long;
    let lat;
    if( navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `
            https://api.darksky.net/forecast/06d147634a2bb275f6ef9f0ec5769b50/${lat},${long}`
        })
    fetch(api)

    }else {
        h1.textContent = "Hey This is not working"
    }

});