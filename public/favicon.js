let favicon_images = [
    './Path1.png',
    './Path2.png',
    './Path3.png',
    './Path4.png',
    './Path5.png',
    './Path5.png',
],
    image_counter = 0; // To keep track of the current image

setInterval(function () {
    $("link[rel='icon']").remove();
    $("link[rel='shortcut icon']").remove();
    $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

    // If last image then goto first image
    // Else go to next image    
    if (image_counter == favicon_images.length - 1)
        image_counter = 0;
    else
        image_counter++;
}, 200);