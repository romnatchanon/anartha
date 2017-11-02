function Join() {
    swal({
            title: "Are you sure?",
            text: "Once joined, you will not be able to again!",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Yeah!! See you in this activity.", {
                    icon: "success",
                });
            }
        });
}

function TestSwal(){
    swal({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//github.com">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
      })
}

function Detail1() {
    swal("Taking a Photo", "Place : KMUTT","fgre");
}

function Detail2() {
    swal("Plant a Tree", "Place : Bang Khun Thian");
}

function Detail3() {
    swal("Kayak", "Place : Sunshine Paradise Resort - Prachuap Khiri Khan");
}

function Detail4() {
    swal("Diving", "Place : Koh Sri-Chang");
}

function Detail5() {
    swal("Swimming", "Place : The CUBE - Pracha uthit");
}

function Detail6() {
    swal("Watching a Movie", "Place : Siam");
}

function Detail7() {
    swal("Writing", "Place : SIT@KMUTT");
}

function Detail8() {
    swal("Science", "Place : Germany");
}

function Egg1() {
    swal({
        title: "Activity",
        text: "Game for the brain",
        content: {
            element: "img",
            attributes: {
                src: "imgs/GameFirst.png",
                className: "img-responsive"
            }
        },
    });
}

function Egg2() {
    $.fn.fullpage.moveSectionDown();
}

function Login() {
    swal("Type your username here:", {
            content: {
                element: "input",
                attributes: {
                    placeholder: "username",

                },
            },
        })
        .then((value) => {
            swal("Type your password here:", {
                content: {
                    element: "input",
                    attributes: {
                        placeholder: "password",
                        type: "password",
                    },
                },
            });
        });
};
