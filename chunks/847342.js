n.d(t, { default: () => E });
var i = n(627968);
n(64700);
var l = n(621466),
    r = n(861672),
    s = n(477782),
    a = n(442433),
    o = n(50268),
    c = n(373963),
    d = n(777933),
    h = n(826308),
    g = n(345254),
    A = n(483768),
    m = n(20883),
    p = n(979766),
    u = n(985018);
function E(e) {
    let t,
        n,
        E,
        { channel: f, message: x, target: I, attachment: N, onSelect: _ } = e,
        C = I;
    if (null != N) n = t = N.url;
    else
        for (; (0, l.vq)(C); )
            (0, l.vq)(C, HTMLImageElement) && null != C.src && (n = C.src),
                (0, l.vq)(C, HTMLAnchorElement) && null != C.href && ((t = C.href), (E = C.textContent)),
                (C = C.parentNode);
    let v = document.getSelection()?.toString(),
        S = (0, c.A)(v),
        T = (0, h.A)(v),
        M = (0, p.A)(x, f),
        b = (0, m.A)(x, f),
        j = (0, g.A)(x, f),
        P = (0, A.A)(x, f),
        y = (0, d.A)(t ?? n, E),
        D = (0, o.A)({ id: x.id, label: u.intl.string(u.t.zBoHlf), shiftId: `${x.channel_id}-${x.id}` }),
        L = (0, o.A)({ id: x.author.id, label: u.intl.string(u.t.Muw4wm) });
    return (0, i.jsxs)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "message",
        onClose: a.Z_,
        "aria-label": u.intl.string(u.t.ChPNkN),
        onSelect: _,
        children: [
            (0, i.jsx)(s.rX, { children: S }),
            (0, i.jsx)(s.rX, { children: T }),
            (0, i.jsxs)(s.rX, { children: [M, b, j, P] }),
            (0, i.jsx)(s.rX, { children: y }),
            (0, i.jsxs)(s.rX, { children: [D, L] }),
        ],
    });
}
