n.d(e, { default: () => u });
var i = n(627968);
n(64700);
var r = n(621466),
    s = n(397927),
    l = n(442433),
    a = n(50268),
    o = n(373963),
    c = n(777933),
    d = n(826308),
    h = n(345254),
    g = n(483768),
    A = n(20883),
    m = n(979766),
    p = n(985018);
function u(t) {
    let e,
        n,
        u,
        { channel: E, message: N, target: x, attachment: f, onSelect: _ } = t,
        I = x;
    if (null != f) n = e = f.url;
    else
        for (; (0, r.vq)(I); )
            (0, r.vq)(I, HTMLImageElement) && null != I.src && (n = I.src),
                (0, r.vq)(I, HTMLAnchorElement) && null != I.href && ((e = I.href), (u = I.textContent)),
                (I = I.parentNode);
    let C = document.getSelection()?.toString(),
        v = (0, o.A)(C),
        S = (0, d.A)(C),
        T = (0, m.A)(N, E),
        b = (0, A.A)(N, E),
        M = (0, h.A)(N, E),
        j = (0, g.A)(N, E),
        P = (0, c.A)(e ?? n, u),
        D = (0, a.A)({ id: N.id, label: p.intl.string(p.t.zBoHlf), shiftId: `${N.channel_id}-${N.id}` }),
        R = (0, a.A)({ id: N.author.id, label: p.intl.string(p.t.Muw4wm) });
    return (0, i.jsxs)(s.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "message",
        onClose: l.Z_,
        "aria-label": p.intl.string(p.t.ChPNkN),
        onSelect: _,
        children: [
            (0, i.jsx)(s.rXV, { children: v }),
            (0, i.jsx)(s.rXV, { children: S }),
            (0, i.jsxs)(s.rXV, { children: [T, b, M, j] }),
            (0, i.jsx)(s.rXV, { children: P }),
            (0, i.jsxs)(s.rXV, { children: [D, R] }),
        ],
    });
}
