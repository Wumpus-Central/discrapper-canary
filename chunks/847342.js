t.d(n, {
    default: () => A,
});
var l = t(627968);
t(64700);
var i = t(621466),
    r = t(397927),
    s = t(442433),
    d = t(50268),
    a = t(373963),
    c = t(777933),
    o = t(826308),
    h = t(345254),
    u = t(483768),
    p = t(20883),
    f = t(979766),
    g = t(985018);

function A(e) {
    var n;
    let t,
        A,
        m,
        { channel: x, message: v, target: _, attachment: j, onSelect: V } = e,
        b = _;
    if (null != j) A = t = j.url;
    else
        for (; (0, i.vq)(b); )
            (0, i.vq)(b, HTMLImageElement) && null != b.src && (A = b.src),
                (0, i.vq)(b, HTMLAnchorElement) && null != b.href && ((t = b.href), (m = b.textContent)),
                (b = b.parentNode);
    let k = null == (n = document.getSelection()) ? void 0 : n.toString(),
        C = (0, a.A)(k),
        X = (0, o.A)(k),
        w = (0, f.A)(v, x),
        q = (0, p.A)(v, x),
        H = (0, h.A)(v, x),
        I = (0, u.A)(v, x),
        M = (0, c.A)(null != t ? t : A, m),
        N = (0, d.A)({
            id: v.id,
            label: g.intl.string(g.t.zBoHlf),
            shiftId: "".concat(v.channel_id, "-").concat(v.id),
        }),
        S = (0, d.A)({
            id: v.author.id,
            label: g.intl.string(g.t.Muw4wm),
        });
    return (0, l.jsxs)(r.W1t, {
        "data-menu-mixed": !0,
        navId: "message",
        onClose: s.Z_,
        "aria-label": g.intl.string(g.t.ChPNkN),
        onSelect: V,
        children: [
            (0, l.jsx)(r.rXV, {
                children: C,
            }),
            (0, l.jsx)(r.rXV, {
                children: X,
            }),
            (0, l.jsxs)(r.rXV, {
                children: [w, q, H, I],
            }),
            (0, l.jsx)(r.rXV, {
                children: M,
            }),
            (0, l.jsxs)(r.rXV, {
                children: [N, S],
            }),
        ],
    });
}
