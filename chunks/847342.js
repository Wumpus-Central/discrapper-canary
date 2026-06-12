n.d(t, { default: () => p });
var l = n(627968);
n(64700);
var r = n(621466),
    i = n(980707),
    s = n(477782),
    d = n(442433),
    a = n(50268),
    c = n(373963),
    h = n(777933),
    o = n(826308),
    u = n(345254),
    A = n(483768),
    f = n(20883),
    g = n(979766),
    m = n(375708);
function p(e) {
    let t,
        n,
        p,
        { channel: x, message: j, target: v, attachment: b, onSelect: k } = e,
        C = v;
    if (null != b) n = t = b.url;
    else
        for (; (0, r.vq)(C); )
            (0, r.vq)(C, HTMLImageElement) && null != C.src && (n = C.src),
                (0, r.vq)(C, HTMLAnchorElement) && null != C.href && ((t = C.href), (p = C.textContent)),
                (C = C.parentNode);
    let X = document.getSelection()?.toString(),
        w = (0, c.A)(X),
        _ = (0, o.A)(X),
        q = (0, g.A)(j, x),
        H = (0, f.A)(j, x),
        I = (0, u.A)(j, x),
        M = (0, A.A)(j, x),
        N = (0, h.A)(t ?? n, p),
        S = (0, a.A)({ id: j.id, label: m.intl.string(m.t.zBoHlf), shiftId: `${j.channel_id}-${j.id}` }),
        E = (0, a.A)({ id: j.author.id, label: m.intl.string(m.t.Muw4wm) });
    return (0, l.jsxs)(i.W, {
        "data-menu-migrated-auto": !0,
        navId: "message",
        onClose: d.Z_,
        "aria-label": m.intl.string(m.t.ChPNkN),
        onSelect: k,
        children: [
            (0, l.jsx)(s.rX, { children: w }),
            (0, l.jsx)(s.rX, { children: _ }),
            (0, l.jsxs)(s.rX, { children: [q, H, I, M] }),
            (0, l.jsx)(s.rX, { children: N }),
            (0, l.jsxs)(s.rX, { children: [S, E] }),
        ],
    });
}
