n.d(e, { default: () => m });
var i = n(54381);
n(473749);
var r = n(374470),
    l = n(481060),
    s = n(239091),
    a = n(299206),
    o = n(26737),
    c = n(905041),
    d = n(89013),
    g = n(449751),
    h = n(601184),
    u = n(168405),
    p = n(536639),
    f = n(388032);
function m(t) {
    var e;
    let n,
        m,
        v,
        { channel: b, message: j, target: y, attachment: x, onSelect: E } = t,
        S = y;
    if (null != x) m = n = x.url;
    else
        for (; (0, r.kK)(S); )
            (0, r.kK)(S, HTMLImageElement) && null != S.src && (m = S.src),
                (0, r.kK)(S, HTMLAnchorElement) && null != S.href && ((n = S.href), (v = S.textContent)),
                (S = S.parentNode);
    let O = null == (e = document.getSelection()) ? void 0 : e.toString(),
        Z = (0, o.Z)(O),
        C = (0, d.Z)(O),
        M = (0, p.Z)(j, b),
        P = (0, u.Z)(j, b),
        N = (0, g.Z)(j, b),
        I = (0, h.Z)(j, b),
        T = (0, c.Z)(null != n ? n : m, v),
        D = (0, a.Z)({
            id: j.id,
            label: f.intl.string(f.t.zBoHlf),
            shiftId: "".concat(j.channel_id, "-").concat(j.id),
        }),
        k = (0, a.Z)({
            id: j.author.id,
            label: f.intl.string(f.t.Muw4wm),
        });
    return (0, i.jsxs)(l.v2r, {
        navId: "message",
        onClose: s.Zy,
        "aria-label": f.intl.string(f.t.ChPNkN),
        onSelect: E,
        children: [
            (0, i.jsx)(l.kSQ, { children: Z }),
            (0, i.jsx)(l.kSQ, { children: C }),
            (0, i.jsxs)(l.kSQ, {
                children: [M, P, N, I],
            }),
            (0, i.jsx)(l.kSQ, { children: T }),
            (0, i.jsxs)(l.kSQ, {
                children: [D, k],
            }),
        ],
    });
}
