let l = "discord7937464",
    i = "www.xbox.com";
n.d(
    t,
    {},
    {
        b9: function (e) {
            let t = encodeURIComponent(e);
            return `msxbox://game/?productid=${t}&ocid=${l}`;
        },
        bH: i,
        jA: function (e) {
            let t = encodeURIComponent(e);
            return `https://${i}/games/store/title/${t}?ocid=${l}`;
        },
    },
);
