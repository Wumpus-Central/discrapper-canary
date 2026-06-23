n.d(t, { A: () => i });
var r = n(627968),
    l = n(607470),
    a = n(847608),
    s = n(686216);
let i = function (e) {
    let { src: t } = e,
        n = (0, a.A)(t);
    return null == n
        ? null
        : (0, a.c)(n.mimeType)
          ? (0, r.jsx)(l.A, { className: s.S, src: n.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 })
          : (0, r.jsx)("img", { className: s.S, src: n.src, alt: n.alt ?? "" });
};
