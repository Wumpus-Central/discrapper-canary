n.d(t, { A: () => s });
var r = n(477900),
    l = n(607470),
    a = n(847608),
    i = n(715333);
let s = function (e) {
    let { src: t } = e,
        n = (0, a.A)(t);
    return null == n
        ? null
        : (0, a.c)(n.mimeType)
          ? (0, r.jsx)(l.A, { className: i.S, src: n.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 })
          : (0, r.jsx)("img", { className: i.S, src: n.src, alt: n.alt ?? "" });
};
