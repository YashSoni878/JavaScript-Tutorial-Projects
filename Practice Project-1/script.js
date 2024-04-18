var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    var rectLocation = rect.getBoundingClientRect();
    var insideRectData = details.clientX - rectLocation.left;

    if(insideRectData < rectLocation.width/2){
        // console.log("you are on left side");
        var redColor = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRectData);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        })
    }
    else{
        // console.log("you are on right side");
        var blueColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insideRectData);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4
        })
    }
});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: "white"
    })
})
