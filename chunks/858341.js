n.d(e, { default: () => m });
var i = n(951288);
n(647438);
var r = n(374470),
    l = n(481060),
    s = n(239091),
    a = n(299206),
    o = n(26737),
    c = n(905041),
    d = n(89013),
    h = n(449751),
    g = n(601184),
    u = n(168405),
    p = n(536639),
    f = n(388032);
function m(t) {
    var e;
    let n,
        m,
        v,
        { channel: j, message: x, target: y, attachment: b, onSelect: C } = t,
        E = y;
    if (null != b) m = n = b.url;
    else
        for (; (0, r.kK)(E); )
            (0, r.kK)(E, HTMLImageElement) && null != E.src && (m = E.src),
                (0, r.kK)(E, HTMLAnchorElement) && null != E.href && ((n = E.href), (v = E.textContent)),
                (E = E.parentNode);
    let S = null == (e = document.getSelection()) ? void 0 : e.toString(),
        O = (0, o.Z)(S),
        M = (0, d.Z)(S),
        P = (0, p.Z)(x, j),
        Z = (0, u.Z)(x, j),
        N = (0, h.Z)(x, j),
        I = (0, g.Z)(x, j),
        k = (0, c.Z)(null != n ? n : m, v),
        T = (0, a.Z)({
            id: x.id,
            label: f.intl.string(f.t.zBoHlf),
            shiftId: "".concat(x.channel_id, "-").concat(x.id),
        }),
        D = (0, a.Z)({
            id: x.author.id,
            label: f.intl.string(f.t.Muw4wm),
        });
    return (0, i.jsxs)(l.v2r, {
        navId: "message",
        onClose: s.Zy,
        "aria-label": f.intl.string(f.t.ChPNkN),
        onSelect: C,
        children: [
            (0, i.jsx)(l.kSQ, { children: O }),
            (0, i.jsx)(l.kSQ, { children: M }),
            (0, i.jsxs)(l.kSQ, {
                children: [P, Z, N, I],
            }),
            (0, i.jsx)(l.kSQ, { children: k }),
            (0, i.jsxs)(l.kSQ, {
                children: [T, D],
            }),
        ],
    });
}
