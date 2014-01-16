// In case a lag spike happens, don't want to trip up clock.getDelta() making it return
//  a large value like 1.2s after the spike, screwing up all movement thereafter.
var deltaTime = function (dt) {
    var step = 1/60;
    if(dt>step) {
        return step*2; // Assume framerate dipped low, so don't use 60fps.
    }
    else {
        return dt;
    }
}