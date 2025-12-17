t.d(n, { default: () => k });
var l = t(54381);
t(473749);
var i = t(374470),
    s = t(481060),
    a = t(239091),
    r = t(299206),
    c = t(26737),
    d = t(905041),
    o = t(89013),
    h = t(449751),
    u = t(601184),
    p = t(168405),
    f = t(536639),
    g = t(388032);
function k(e) {
    var n;
    let t,
        k,
        Z,
        { channel: b, message: m, target: x, attachment: S, onSelect: j } = e,
        v = x;
    if (null != S) k = t = S.url;
    else
        for (; (0, i.kK)(v); )
            (0, i.kK)(v, HTMLImageElement) && null != v.src && (k = v.src),
                (0, i.kK)(v, HTMLAnchorElement) && null != v.href && ((t = v.href), (Z = v.textContent)),
                (v = v.parentNode);
    let C = null == (n = document.getSelection()) ? void 0 : n.toString(),
        Q = (0, c.Z)(C),
        w = (0, o.Z)(C),
        T = (0, f.Z)(m, b),
        H = (0, p.Z)(m, b),
        I = (0, h.Z)(m, b),
        K = (0, u.Z)(m, b),
        M = (0, d.Z)(null != t ? t : k, Z),
        N = (0, r.Z)({
            id: m.id,
            label: g.intl.string(g.t.zBoHlf),
            shiftId: "".concat(m.channel_id, "-").concat(m.id),
        }),
        _ = (0, r.Z)({
            id: m.author.id,
            label: g.intl.string(g.t.Muw4wm),
        });
    return (0, l.jsxs)(s.v2r, {
        navId: "message",
        onClose: a.Zy,
        "aria-label": g.intl.string(g.t.ChPNkN),
        onSelect: j,
        children: [
            (0, l.jsx)(s.kSQ, { children: Q }),
            (0, l.jsx)(s.kSQ, { children: w }),
            (0, l.jsxs)(s.kSQ, {
                children: [T, H, I, K],
            }),
            (0, l.jsx)(s.kSQ, { children: M }),
            (0, l.jsxs)(s.kSQ, {
                children: [N, _],
            }),
        ],
    });
}
