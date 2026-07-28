n.d(t, { A: () => x, Q: () => m });
var l,
    i = n(477900);
n(582128);
var r = n(503698),
    s = n.n(r),
    a = n(863610),
    u = n(935154),
    o = n(47167),
    d = n(573435),
    c = n(260509),
    h = n(652215),
    g = n(324157),
    m = (((l = {}).TINY_24 = "TINY_24"), (l.SMALL_32 = "SMALL_32"), (l.MEDIUM_40 = "MEDIUM_40"), l);
let I = { TINY_24: 24, SMALL_32: 32, MEDIUM_40: 40 },
    E = { TINY_24: 24, SMALL_32: 26, MEDIUM_40: 34 },
    A = { TINY_24: [13, 11, 10], SMALL_32: [13, 11, 10], MEDIUM_40: [24, 20, 16] },
    f = { TINY_24: [9, 8, 7], SMALL_32: [12, 11, 9.5], MEDIUM_40: [14, 13, 11] },
    p = { TINY_24: g.d7, SMALL_32: g.OI, MEDIUM_40: g.H5 },
    S = { TINY_24: 12, SMALL_32: 16, MEDIUM_40: 20 };
function N(e, t) {
    return 0 === e.length
        ? 0
        : t.length <= 0
          ? e[0]
          : t.length > e.length
            ? e[e.length - 1]
            : (e[t.length - 1] ?? e[e.length - 1]);
}
let x = function (e) {
    var t;
    let n,
        { className: l, iconClassName: r, size: m, channel: x, guild: T, isTyping: _ = !1, typingFillColor: y } = e,
        C = (0, o.Ay)(x),
        v = (0, u.S3)(h.clD.ONLINE, null);
    if (null == T) return null;
    let R = A[m],
        D = E[m],
        b = I[m],
        j = (0, c.Iv)(T, 48),
        k = S[m],
        M =
            0 ===
            (n =
                null != (t = C ?? "")
                    ? t
                          .replace(/[-_]+/g, " ")
                          .replace(/'s /g, " ")
                          .replace(/\w+/g, (e) => e[0])
                          .replace(/\s/g, "")
                    : "").length
                ? "?"
                : n.slice(0, 3),
        O = (0, c.Rb)(T);
    return (0, i.jsxs)("div", {
        className: s()(g.zr, l),
        role: "img",
        style: { width: b, height: b },
        children: [
            (0, i.jsx)(d.Ay, {
                mask: d.hW.CHANNEL_ICON_WITH_GUILD_ICON,
                width: D,
                height: D,
                children:
                    null != j
                        ? (0, i.jsx)("img", {
                              alt: T.name,
                              src: j,
                              className: g.es,
                              draggable: !1,
                              style: { width: D, height: D },
                          })
                        : (0, i.jsx)("div", {
                              className: s()(g.TT, g.q9),
                              style: { fontSize: N(R, O), width: D, height: D },
                              children: O,
                          }),
            }),
            (0, i.jsx)("div", {
                className: s()(g._C, p[m], r),
                "aria-hidden": !0,
                children: (0, i.jsx)(d.Ay, {
                    mask: d.hW.SQUIRCLE,
                    width: k,
                    height: k,
                    children: _
                        ? (0, i.jsx)("div", {
                              className: s()(p[m], g.WQ),
                              style: { backgroundColor: y ?? v },
                              children: (0, i.jsx)(a.n, { dotRadius: k / 10 }),
                          })
                        : (0, i.jsx)("div", {
                              className: s()(p[m], g.q9),
                              style: { fontSize: N(f[m], M) },
                              children: M,
                          }),
                }),
            }),
        ],
    });
};
