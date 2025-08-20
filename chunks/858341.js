t.d(n, { default: () => k });
var l = t(951288);
t(647438);
var r = t(374470),
    s = t(481060),
    i = t(239091),
    o = t(299206),
    c = t(26737),
    a = t(905041),
    d = t(89013),
    u = t(449751),
    h = t(601184),
    p = t(168405),
    _ = t(536639),
    g = t(388032);
function k(e) {
    var n;
    let t,
        k,
        Z,
        { channel: f, message: E, target: S, attachment: j, onSelect: v } = e,
        x = S;
    if (null != j) k = t = j.url;
    else
        for (; (0, r.k)(x); )
            (0, r.k)(x, HTMLImageElement) && null != x.src && (k = x.src),
                (0, r.k)(x, HTMLAnchorElement) && null != x.href && ((t = x.href), (Z = x.textContent)),
                (x = x.parentNode);
    let M = null == (n = document.getSelection()) ? void 0 : n.toString(),
        O = (0, c.Z)(M),
        R = (0, d.Z)(M),
        T = (0, _.Z)(E, f),
        m = (0, p.Z)(E, f),
        b = (0, u.Z)(E, f),
        C = (0, h.Z)(E, f),
        N = (0, a.Z)(null != t ? t : k, Z),
        Q = (0, o.Z)({
            id: E.id,
            label: g.intl.string(g.t.zBoHlZ),
            shiftId: "".concat(E.channel_id, "-").concat(E.id),
        }),
        w = (0, o.Z)({
            id: E.author.id,
            label: g.intl.string(g.t.Muw4ws),
        });
    return (0, l.jsxs)(s.v2r, {
        navId: "message",
        onClose: i.Zy,
        "aria-label": g.intl.string(g.t.ChPNkJ),
        onSelect: v,
        children: [
            (0, l.jsx)(s.kSQ, { children: O }),
            (0, l.jsx)(s.kSQ, { children: R }),
            (0, l.jsxs)(s.kSQ, {
                children: [T, m, b, C],
            }),
            (0, l.jsx)(s.kSQ, { children: N }),
            (0, l.jsxs)(s.kSQ, {
                children: [Q, w],
            }),
        ],
    });
}
