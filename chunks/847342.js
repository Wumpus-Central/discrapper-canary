t.d(n, {
    default: () => g,
});
var l = t(627968);
t(64700);
var i = t(621466),
    r = t(397927),
    s = t(442433),
    c = t(50268),
    a = t(373963),
    d = t(777933),
    o = t(826308),
    u = t(345254),
    h = t(483768),
    p = t(20883),
    _ = t(979766),
    f = t(985018);

function g(e) {
    var n;
    let t,
        g,
        m,
        { channel: A, message: b, target: x, attachment: v, onSelect: j } = e,
        k = x;
    if (null != v) g = t = v.url;
    else
        for (; (0, i.vq)(k); )
            (0, i.vq)(k, HTMLImageElement) && null != k.src && (g = k.src),
                (0, i.vq)(k, HTMLAnchorElement) && null != k.href && ((t = k.href), (m = k.textContent)),
                (k = k.parentNode);
    let V = null == (n = document.getSelection()) ? void 0 : n.toString(),
        C = (0, a.A)(V),
        X = (0, o.A)(V),
        w = (0, _.A)(b, A),
        N = (0, p.A)(b, A),
        q = (0, u.A)(b, A),
        H = (0, h.A)(b, A),
        I = (0, d.A)(null != t ? t : g, m),
        M = (0, c.A)({
            id: b.id,
            label: f.intl.string(f.t.zBoHlf),
            shiftId: "".concat(b.channel_id, "-").concat(b.id),
        }),
        S = (0, c.A)({
            id: b.author.id,
            label: f.intl.string(f.t.Muw4wm),
        });
    return (0, l.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "message",
        onClose: s.Z_,
        "aria-label": f.intl.string(f.t.ChPNkN),
        onSelect: j,
        children: [
            (0, l.jsx)(r.rXV, {
                children: C,
            }),
            (0, l.jsx)(r.rXV, {
                children: X,
            }),
            (0, l.jsxs)(r.rXV, {
                children: [w, N, q, H],
            }),
            (0, l.jsx)(r.rXV, {
                children: I,
            }),
            (0, l.jsxs)(r.rXV, {
                children: [M, S],
            }),
        ],
    });
}
