t.d(n, { default: () => k });
var l = t(951288);
t(647438);
var s = t(374470),
    i = t(481060),
    c = t(239091),
    r = t(299206),
    a = t(26737),
    d = t(905041),
    o = t(89013),
    u = t(449751),
    h = t(601184),
    p = t(168405),
    f = t(536639),
    g = t(388032);
function k(e) {
    var n;
    let t,
        k,
        Z,
        { channel: x, message: S, target: m, attachment: _, onSelect: j } = e,
        v = m;
    if (null != _) k = t = _.url;
    else
        for (; (0, s.kK)(v); )
            (0, s.kK)(v, HTMLImageElement) && null != v.src && (k = v.src),
                (0, s.kK)(v, HTMLAnchorElement) && null != v.href && ((t = v.href), (Z = v.textContent)),
                (v = v.parentNode);
    let b = null == (n = document.getSelection()) ? void 0 : n.toString(),
        C = (0, a.Z)(b),
        Q = (0, o.Z)(b),
        w = (0, f.Z)(S, x),
        T = (0, p.Z)(S, x),
        B = (0, u.Z)(S, x),
        H = (0, h.Z)(S, x),
        I = (0, d.Z)(null != t ? t : k, Z),
        K = (0, r.Z)({
            id: S.id,
            label: g.intl.string(g.t.zBoHlZ),
            shiftId: "".concat(S.channel_id, "-").concat(S.id),
        }),
        M = (0, r.Z)({
            id: S.author.id,
            label: g.intl.string(g.t.Muw4ws),
        });
    return (0, l.jsxs)(i.v2r, {
        navId: "message",
        onClose: c.Zy,
        "aria-label": g.intl.string(g.t.ChPNkJ),
        onSelect: j,
        children: [
            (0, l.jsx)(i.kSQ, { children: C }),
            (0, l.jsx)(i.kSQ, { children: Q }),
            (0, l.jsxs)(i.kSQ, {
                children: [w, T, B, H],
            }),
            (0, l.jsx)(i.kSQ, { children: I }),
            (0, l.jsxs)(i.kSQ, {
                children: [K, M],
            }),
        ],
    });
}
