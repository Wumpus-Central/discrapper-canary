l.d(n, { default: () => p });
var t = l(200651);
l(192379);
var r = l(374470),
    i = l(481060),
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
function p(e) {
    var n;
    let l,
        p,
        S,
        { channel: g, message: x, target: j, attachment: v, onSelect: b } = e,
        m = j;
    if (null != v) p = l = v.url;
    else for (; (0, r.k)(m); ) (0, r.k)(m, HTMLImageElement) && null != m.src && (p = m.src), (0, r.k)(m, HTMLAnchorElement) && null != m.href && ((l = m.href), (S = m.textContent)), (m = m.parentNode);
    let C = null == (n = document.getSelection()) ? void 0 : n.toString(),
        N = (0, d.Z)(C),
        Q = (0, o.Z)(C),
        w = (0, Z.Z)(x, g),
        H = (0, k.Z)(x, g),
        I = (0, h.Z)(x, g),
        M = (0, u.Z)(x, g),
        W = (0, a.Z)(null != l ? l : p, S),
        _ = (0, c.Z)({
            id: x.id,
            label: f.NW.string(f.t.zBoHlZ),
            shiftId: ''.concat(x.channel_id, '-').concat(x.id)
        }),
        E = (0, c.Z)({
            id: x.author.id,
            label: f.NW.string(f.t.Muw4ws)
        });
    return (0, t.jsxs)(i.v2r, {
        navId: 'message',
        onClose: s.Zy,
        'aria-label': f.NW.string(f.t.ChPNkJ),
        onSelect: b,
        children: [
            (0, t.jsx)(i.kSQ, { children: N }),
            (0, t.jsx)(i.kSQ, { children: Q }),
            (0, t.jsxs)(i.kSQ, {
                children: [w, H, I, M]
            }),
            (0, t.jsx)(i.kSQ, { children: W }),
            (0, t.jsxs)(i.kSQ, {
                children: [_, E]
            })
        ]
    });
}
