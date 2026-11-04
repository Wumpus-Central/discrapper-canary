let l = "discord7937464",
    r = "www.xbox.com";
n.d(
    t,
    {},
    {
        b9: function (e) {
            let t = encodeURIComponent(e);
            return `msxbox://game/?productid=${t}&ocid=${l}`;
        },
        bH: r,
        jA: function (e) {
            let t = encodeURIComponent(e);
            return `https://${r}/games/store/title/${t}?ocid=${l}`;
        },
    },
);
