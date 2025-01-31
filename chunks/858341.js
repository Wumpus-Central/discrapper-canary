l.d(e, { default: () => p });
var t = l(200651);
l(192379);
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
        { channel: g, message: v, target: x, attachment: j, onSelect: b } = n,
        m = x;
    if (null != j) p = l = j.url;
    else for (; (0, i.k)(m); ) (0, i.k)(m, HTMLImageElement) && null != m.src && (p = m.src), (0, i.k)(m, HTMLAnchorElement) && null != m.href && ((l = m.href), (S = m.textContent)), (m = m.parentNode);
    let C = null === (e = document.getSelection()) || void 0 === e ? void 0 : e.toString(),
        Q = (0, d.Z)(C),
        w = (0, o.Z)(C),
        H = (0, Z.Z)(v, g),
        I = (0, k.Z)(v, g),
        M = (0, h.Z)(v, g),
        _ = (0, u.Z)(v, g),
        E = (0, a.Z)(null != l ? l : p, S),
        L = (0, c.Z)({
            id: v.id,
            label: f.intl.string(f.t.zBoHlZ),
            shiftId: ''.concat(v.channel_id, '-').concat(v.id)
        }),
        N = (0, c.Z)({
            id: v.author.id,
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
