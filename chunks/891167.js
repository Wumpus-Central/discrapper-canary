l.d(t, { A: () => i });
var r = l(627968),
    n = l(607470),
    a = l(847608),
    s = l(686216);
let i = (e) => {
    let { src: t } = e,
        l = (0, a.A)(t);
    return null == l
        ? null
        : (0, a.c)(l.mimeType)
          ? (0, r.jsx)(n.A, { className: s.S, src: l.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 })
          : (0, r.jsx)("img", { className: s.S, src: l.src, alt: l.alt ?? "" });
};
