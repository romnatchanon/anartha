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
    swal("Science", "...and here's the text!");
}

function Egg2() {
    swal("Science", "...and here's the text!");
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
