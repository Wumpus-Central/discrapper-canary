n.d(t, { default: () => p });
var l = n(477900);
n(582128);
var r = n(621466),
    i = n(980707),
    s = n(477782),
    d = n(442433),
    a = n(50268),
    c = n(373963),
    h = n(777933),
    u = n(826308),
    o = n(345254),
    A = n(483768),
    m = n(20883),
    f = n(979766),
    g = n(105292);
function p(e) {
    let t,
        n,
        p,
        { channel: x, message: j, target: v, attachment: b, onSelect: k } = e,
        C = v;
    if (null != b) n = t = b.url;
    else
        for (; (0, r.vq)(C);)
            ((0, r.vq)(C, HTMLImageElement) && null != C.src && (n = C.src),
                (0, r.vq)(C, HTMLAnchorElement) && null != C.href && ((t = C.href), (p = C.textContent)),
                (C = C.parentElement));
    let X = document.getSelection()?.toString(),
        w = (0, c.A)(X),
        _ = (0, u.A)(X),
        q = (0, f.A)(j, x),
        E = (0, m.A)(j, x),
        H = (0, o.A)(j, x),
        I = (0, A.A)(j, x),
        M = (0, h.A)(t ?? n, p),
        S = (0, a.A)({ id: j.id, label: g.intl.string(g.t.zBoHlf), shiftId: `${j.channel_id}-${j.id}` }),
        L = (0, a.A)({ id: j.author.id, label: g.intl.string(g.t.Muw4wm) });
    return (0, l.jsxs)(i.W, {
        "data-menu-migrated-auto": !0,
        navId: "message",
        onClose: d.Z_,
        "aria-label": g.intl.string(g.t.ChPNkN),
        onSelect: k,
        children: [
            (0, l.jsx)(s.rX, { children: w }),
            (0, l.jsx)(s.rX, { children: _ }),
            (0, l.jsxs)(s.rX, { children: [q, E, H, I] }),
            (0, l.jsx)(s.rX, { children: M }),
            (0, l.jsxs)(s.rX, { children: [S, L] }),
        ],
    });
}
