var json = ["data/1.json", "data/2.json"];
var count = 0;

$(document).ready(function () {
    $('#load').click(function () {
        loadJSON();
    });
    $('#body').scroll(function () {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            loadJSON();
        }
    });
});

function loadJSON() {
    if (count >= json.length) {
        showWarning();
    } else {
        $.getJSON(json[count].toString(), function (jsonObject) {
            createData(jsonObject);
        });
    }
}

function createData(jsonObject) {
    $.each(jsonObject, function (i, noticia) {
        var thumbnail = $('<div>', {class: "thumbnail box-shadow"});
        var img = $('<img>',{src: noticia.imgbig, alt: noticia.title, class: "img-responsive shadow-green-dark"});
        var caption = $('<div>', {class: "caption"});
        var title = $('<h3>');
        title.append($('<a>', {text: noticia.title}));
        title.append($('<br>'));
        title.append($('<small>', {text: noticia.datetime}));
        caption.append(title);
        caption.append(noticia.description)
        thumbnail.append(img);
        thumbnail.append(caption);
        thumbnail.appendTo($('#news'));
    });
    count++;
}

function showWarning(){
    $('#no-more-news').fadeIn(750).delay(1000).fadeOut(750);
}