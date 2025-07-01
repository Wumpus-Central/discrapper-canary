t.d(n, { default: () => x });
var i = t(255367);
t(73800);
var l = t(374470),
    s = t(481060),
    r = t(239091),
    c = t(299206),
    a = t(26737),
    o = t(905041),
    d = t(89013),
    p = t(449751),
    u = t(601184),
    h = t(168405),
    _ = t(536639),
    b = t(388032);
function x(e) {
    var n;
    let t,
        x,
        k,
        { channel: g, message: m, target: f, attachment: v, onSelect: Z } = e,
        j = f;
    if (null != v) x = t = v.url;
    else for (; (0, l.k)(j); ) ((0, l.k)(j, HTMLImageElement) && null != j.src && (x = j.src), (0, l.k)(j, HTMLAnchorElement) && null != j.href && ((t = j.href), (k = j.textContent)), (j = j.parentNode));
    let C = null == (n = document.getSelection()) ? void 0 : n.toString(),
        S = (0, a.Z)(C),
        I = (0, d.Z)(C),
        N = (0, _.Z)(m, g),
        T = (0, h.Z)(m, g),
        w = (0, p.Z)(m, g),
        B = (0, u.Z)(m, g),
        L = (0, o.Z)(null != t ? t : x, k),
        Q = (0, c.Z)({
            id: m.id,
            label: b.intl.string(b.t.zBoHlZ),
            shiftId: ''.concat(m.channel_id, '-').concat(m.id)
        }),
        y = (0, c.Z)({
            id: m.author.id,
            label: b.intl.string(b.t.Muw4ws)
        });
    return (0, i.jsxs)(s.v2r, {
        navId: 'message',
        onClose: r.Zy,
        'aria-label': b.intl.string(b.t.ChPNkJ),
        onSelect: Z,
        children: [
            (0, i.jsx)(s.kSQ, { children: S }),
            (0, i.jsx)(s.kSQ, { children: I }),
            (0, i.jsxs)(s.kSQ, {
                children: [N, T, w, B]
            }),
            (0, i.jsx)(s.kSQ, { children: L }),
            (0, i.jsxs)(s.kSQ, {
                children: [Q, y]
            })
        ]
    });
}
