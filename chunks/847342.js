l.d(n, { default: () => b });
var t = l(627968);
l(64700);
var r = l(621466),
    i = l(397927),
    c = l(442433),
    s = l(50268),
    d = l(373963),
    a = l(777933),
    o = l(826308),
    h = l(345254),
    u = l(483768),
    f = l(20883),
    A = l(979766),
    p = l(985018);
function b(e) {
    var n;
    let l,
        b,
        v,
        { channel: x, message: g, target: j, attachment: m, onSelect: V } = e,
        k = j;
    if (null != m) b = l = m.url;
    else
        for (; (0, r.vq)(k); )
            (0, r.vq)(k, HTMLImageElement) && null != k.src && (b = k.src),
                (0, r.vq)(k, HTMLAnchorElement) && null != k.href && ((l = k.href), (v = k.textContent)),
                (k = k.parentNode);
    let C = null == (n = document.getSelection()) ? void 0 : n.toString(),
        X = (0, d.A)(C),
        _ = (0, o.A)(C),
        w = (0, A.A)(g, x),
        q = (0, f.A)(g, x),
        H = (0, h.A)(g, x),
        I = (0, u.A)(g, x),
        M = (0, a.A)(null != l ? l : b, v),
        N = (0, s.A)({
            id: g.id,
            label: p.intl.string(p.t.zBoHlf),
            shiftId: "".concat(g.channel_id, "-").concat(g.id),
        }),
        S = (0, s.A)({
            id: g.author.id,
            label: p.intl.string(p.t.Muw4wm),
        });
    return (0, t.jsxs)(i.W1t, {
        navId: "message",
        onClose: c.Z_,
        "aria-label": p.intl.string(p.t.ChPNkN),
        onSelect: V,
        children: [
            (0, t.jsx)(i.rXV, { children: X }),
            (0, t.jsx)(i.rXV, { children: _ }),
            (0, t.jsxs)(i.rXV, {
                children: [w, q, H, I],
            }),
            (0, t.jsx)(i.rXV, { children: M }),
            (0, t.jsxs)(i.rXV, {
                children: [N, S],
            }),
        ],
    });
}
