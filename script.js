Webcam.set({width: 350, height: 350, image_format:'png', png_quality:100});
cam = document.getElementById("cam");
function Take_pic(){
    Webcam.snap(function (data_uri){
        document.getElementById("captured").innerHTML ='<img id="pic" src="'+data_uri+'">'
    });
}