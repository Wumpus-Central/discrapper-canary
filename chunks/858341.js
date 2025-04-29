l.d(e, { default: () => p });
var t = l(255367);
l(73800);
var i = l(374470),
    r = l(481060),
    s = l(239091),
    c = l(299206),
    d = l(26737),
    a = l(905041),
    o = l(89013),
    h = l(449751),
    u = l(601184),
    k = l(168405),
    Z = l(536639),
    f = l(388032);
function p(n) {
    var e;
    let l,
        p,
        S,
        { channel: g, message: x, target: j, attachment: v, onSelect: b } = n,
        m = j;
    if (null != v) p = l = v.url;
    else for (; (0, i.k)(m); ) (0, i.k)(m, HTMLImageElement) && null != m.src && (p = m.src), (0, i.k)(m, HTMLAnchorElement) && null != m.href && ((l = m.href), (S = m.textContent)), (m = m.parentNode);
    let C = null == (e = document.getSelection()) ? void 0 : e.toString(),
        Q = (0, d.Z)(C),
        w = (0, o.Z)(C),
        H = (0, Z.Z)(x, g),
        I = (0, k.Z)(x, g),
        M = (0, h.Z)(x, g),
        _ = (0, u.Z)(x, g),
        E = (0, a.Z)(null != l ? l : p, S),
        L = (0, c.Z)({
            id: x.id,
            label: f.intl.string(f.t.zBoHlZ),
            shiftId: ''.concat(x.channel_id, '-').concat(x.id)
        }),
        N = (0, c.Z)({
            id: x.author.id,
            label: f.intl.string(f.t.Muw4ws)
        });
    return (0, t.jsxs)(r.v2r, {
        navId: 'message',
        onClose: s.Zy,
        'aria-label': f.intl.string(f.t.ChPNkJ),
        onSelect: b,
        children: [
            (0, t.jsx)(r.kSQ, { children: Q }),
            (0, t.jsx)(r.kSQ, { children: w }),
            (0, t.jsxs)(r.kSQ, {
                children: [H, I, M, _]
            }),
            (0, t.jsx)(r.kSQ, { children: E }),
            (0, t.jsxs)(r.kSQ, {
                children: [L, N]
            })
        ]
    });
}
