function GrowShove(grower){
    var element = document.getElementById(grower);
    var id = setInterval(frame, 5);

    var increment = 1.0;
    var growSize = 100.0;
    var currentStep = 0.0;

    if(currentStep > targetSize){
        clearInterval(id);
    } else {
        element.style.width -= increment;
    }
}