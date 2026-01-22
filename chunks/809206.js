var r = n(797686),
    i = /\.textClipping$/,
    a = {
        "text/plain": !0,
        "text/html": !0,
        "text/rtf": !0,
    },
    s = 5e3;

function o(e, t) {
    if (!n.g.FileReader || (e.type && !(e.type in a))) return void t("");
    if ("" === e.type) {
        var s = "";
        i.test(e.name) && (s = e.name.replace(i, "")), t(s);
        return;
    }
    var o = new FileReader();
    (o.onload = function () {
        var e = o.result;
        "string" != typeof e && r(!1), t(e);
    }),
        (o.onerror = function () {
            t("");
        }),
        o.readAsText(e);
}
e.exports = function (e, t) {
    var n = 0,
        r = [];
    e.forEach(function (i) {
        o(i, function (i) {
            n++, i && r.push(i.slice(0, s)), n == e.length && t(r.join("\r"));
        });
    });
};
