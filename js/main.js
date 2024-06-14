$(document).ready(function(){
    
    //Slider
    
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
    });

    //Posts
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum qui delectus eius pariatur, optio quas. Officia iure fugit odit laboriosam id praesentium atque maxime quas. Earum sapiente deserunt, quia labore architecto, perspiciatis ex cupiditate possimus id saepe inventore nam nisi! Optio a, aliquam at accusantium consequuntur doloremque ducimus fuga!' 
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum qui delectus eius pariatur, optio quas. Officia iure fugit odit laboriosam id praesentium atque maxime quas. Earum sapiente deserunt, quia labore architecto, perspiciatis ex cupiditate possimus id saepe inventore nam nisi! Optio a, aliquam at accusantium consequuntur doloremque ducimus fuga!' 
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum qui delectus eius pariatur, optio quas. Officia iure fugit odit laboriosam id praesentium atque maxime quas. Earum sapiente deserunt, quia labore architecto, perspiciatis ex cupiditate possimus id saepe inventore nam nisi! Optio a, aliquam at accusantium consequuntur doloremque ducimus fuga!' 
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum qui delectus eius pariatur, optio quas. Officia iure fugit odit laboriosam id praesentium atque maxime quas. Earum sapiente deserunt, quia labore architecto, perspiciatis ex cupiditate possimus id saepe inventore nam nisi! Optio a, aliquam at accusantium consequuntur doloremque ducimus fuga!' 
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum qui delectus eius pariatur, optio quas. Officia iure fugit odit laboriosam id praesentium atque maxime quas. Earum sapiente deserunt, quia labore architecto, perspiciatis ex cupiditate possimus id saepe inventore nam nisi! Optio a, aliquam at accusantium consequuntur doloremque ducimus fuga!' 
        },
    ];

    posts.forEach((item, index) => {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer más</a>
            </article>
        `;

        $("#posts").append(post);
    });

    //Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function (){
        theme.attr("href", "css/green.css");
    });

    $("#to-blue").click(function (){
        theme.attr("href", "css/blue.css");
    });
});