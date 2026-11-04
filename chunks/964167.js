(n(323874), n(14289), n(35956));
var i = n(806163),
    r = n(976860);
function a(e) {
    return "chat" === new URLSearchParams(e).get("view");
}
function s() {
    return a((0, r.JK)().location.search);
}
function l(e) {
    return `${e}?view=chat`;
}
n.d(
    t,
    {},
    {
        Dw: a,
        V1: function (e) {
            return s() ? l(e) : e;
        },
        gu: l,
        qz: function () {
            return a((0, i.zy)().search);
        },
        rm: s,
    },
);
