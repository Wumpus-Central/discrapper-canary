t.d(e, { default: () => Z });
var l = t(951288);
t(647438);
var s = t(374470),
    i = t(481060),
    c = t(239091),
    r = t(299206),
    a = t(26737),
    o = t(905041),
    d = t(89013),
    u = t(449751),
    h = t(601184),
    p = t(168405),
    g = t(536639),
    k = t(388032);
function Z(n) {
    var e;
    let t,
        Z,
        _,
        { channel: f, message: x, target: S, attachment: m, onSelect: j } = n,
        v = S;
    if (null != m) Z = t = m.url;
    else
        for (; (0, s.kK)(v); )
            (0, s.kK)(v, HTMLImageElement) && null != v.src && (Z = v.src),
                (0, s.kK)(v, HTMLAnchorElement) && null != v.href && ((t = v.href), (_ = v.textContent)),
                (v = v.parentNode);
    let b = null == (e = document.getSelection()) ? void 0 : e.toString(),
        C = (0, a.Z)(b),
        Q = (0, d.Z)(b),
        w = (0, g.Z)(x, f),
        T = (0, p.Z)(x, f),
        B = (0, u.Z)(x, f),
        H = (0, h.Z)(x, f),
        I = (0, o.Z)(null != t ? t : Z, _),
        K = (0, r.Z)({
            id: x.id,
            label: k.intl.string(k.t.zBoHlZ),
            shiftId: "".concat(x.channel_id, "-").concat(x.id),
        }),
        M = (0, r.Z)({
            id: x.author.id,
            label: k.intl.string(k.t.Muw4ws),
        });
    return (0, l.jsxs)(i.v2r, {
        navId: "message",
        onClose: c.Zy,
        "aria-label": k.intl.string(k.t.ChPNkJ),
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
