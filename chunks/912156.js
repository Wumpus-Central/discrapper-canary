n.d(t, { A: () => x, Q: () => f });
var l,
    i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    u = n(863610),
    o = n(935154),
    d = n(47167),
    c = n(573435),
    h = n(260509),
    g = n(652215),
    I = n(778712),
    A = n(612776),
    f = (((l = {}).TINY_24 = "TINY_24"), (l.SMALL_32 = "SMALL_32"), (l.MEDIUM_40 = "MEDIUM_40"), l);
let E = { TINY_24: 24, SMALL_32: 32, MEDIUM_40: 40 },
    m = { TINY_24: 24, SMALL_32: 26, MEDIUM_40: 34 },
    S = { TINY_24: [13, 11, 10], SMALL_32: [13, 11, 10], MEDIUM_40: [24, 20, 16] },
    _ = { TINY_24: [9, 8, 7], SMALL_32: [12, 11, 9.5], MEDIUM_40: [14, 13, 11] },
    p = { TINY_24: A.d7, SMALL_32: A.OI, MEDIUM_40: A.H5 },
    N = { TINY_24: 12, SMALL_32: 16, MEDIUM_40: 20 };
function T(e, t) {
    return 0 === e.length
        ? 0
        : t.length <= 0
          ? e[0]
          : t.length > e.length
            ? e[e.length - 1]
            : (e[t.length - 1] ?? e[e.length - 1]);
}
function y(e) {
    let { size: t } = e,
        n = (0, I.Kj)(t),
        l = 2.5 * n.status,
        i = (l - n.status) / 2,
        r = n.status,
        s = n.size - l + i - n.stroke - n.offset,
        a = n.size - r - n.stroke - n.offset,
        u = l + 2 * n.stroke,
        o = r + 2 * n.stroke,
        d = (n.status + 2 * n.stroke) / 2,
        c = n.size - l + i - n.offset,
        h = n.size - r;
    return {
        iconSize: n.size,
        statusWidth: l,
        statusHeight: r,
        dotRadius: n.status / 4,
        avatarCutoutX: s,
        avatarCutoutY: a,
        avatarCutoutWidth: u,
        avatarCutoutHeight: o,
        avatarCutoutRadius: d,
        indicatorX: c,
        indicatorY: h,
    };
}
let C = r.memo(function (e) {
        let { avatarSize: t, typingFillColor: n } = e,
            l = (0, o.S3)(g.clD.ONLINE, null),
            { statusWidth: r, statusHeight: s, dotRadius: a } = y({ size: t });
        return (0, i.jsx)(c.Ay, {
            mask: c.hW.STATUS_TYPING,
            width: r,
            height: s,
            "aria-hidden": !0,
            children: (0, i.jsx)("div", {
                className: A.WQ,
                style: { backgroundColor: n ?? l },
                children: (0, i.jsx)(u.n, { dotRadius: a }),
            }),
        });
    }),
    x = function (e) {
        var t;
        let n,
            { className: l, iconClassName: s, size: u, channel: o, guild: g, isTyping: f = !1, typingFillColor: x } = e,
            v = r.useId(),
            M = (0, d.Ay)(o);
        if (null == g) return null;
        let D = S[u],
            R = m[u],
            O = E[u],
            U = (0, h.Iv)(g, 48),
            G = N[u],
            w = (() => {
                switch (u) {
                    case "TINY_24":
                        return I._3.SIZE_24;
                    case "SMALL_32":
                        return I._3.SIZE_32;
                    case "MEDIUM_40":
                        return I._3.SIZE_40;
                    default:
                        return u;
                }
            })(),
            L =
                0 ===
                (n =
                    null != (t = M ?? "")
                        ? t
                              .replace(/[-_]+/g, " ")
                              .replace(/'s /g, " ")
                              .replace(/\w+/g, (e) => e[0])
                              .replace(/\s/g, "")
                        : "").length
                    ? "?"
                    : n.slice(0, 3),
            F = (0, h.Rb)(g),
            b = (0, i.jsxs)("div", {
                className: a()(A.zr, l),
                role: "img",
                style: { width: O, height: O },
                children: [
                    (0, i.jsx)(c.Ay, {
                        mask: c.hW.CHANNEL_ICON_WITH_GUILD_ICON,
                        width: R,
                        height: R,
                        children:
                            null != U
                                ? (0, i.jsx)("img", {
                                      alt: g.name,
                                      src: U,
                                      className: A.es,
                                      style: { width: R, height: R },
                                  })
                                : (0, i.jsx)("div", {
                                      className: a()(A.TT, A.q9),
                                      style: { fontSize: T(D, F), width: R, height: R },
                                      children: F,
                                  }),
                    }),
                    (0, i.jsx)("div", {
                        className: a()(A._C, p[u], s),
                        "aria-hidden": !0,
                        children: (0, i.jsx)(c.Ay, {
                            mask: c.hW.SQUIRCLE,
                            width: G,
                            height: G,
                            children: (0, i.jsx)("div", {
                                className: a()(p[u], A.q9),
                                style: { fontSize: T(_[u], L) },
                                children: L,
                            }),
                        }),
                    }),
                ],
            }),
            {
                iconSize: k,
                avatarCutoutX: P,
                avatarCutoutY: j,
                avatarCutoutWidth: V,
                avatarCutoutHeight: H,
                avatarCutoutRadius: Y,
                indicatorX: W,
                indicatorY: z,
            } = y({ size: w });
        return f
            ? (0, i.jsxs)("div", {
                  className: A.J4,
                  "aria-hidden": !0,
                  style: { width: O, height: O },
                  children: [
                      (0, i.jsxs)("svg", {
                          width: k,
                          height: k,
                          viewBox: `0 0 ${k} ${k}`,
                          className: A._S,
                          "aria-hidden": !0,
                          children: [
                              (0, i.jsx)("defs", {
                                  children: (0, i.jsxs)("mask", {
                                      id: v,
                                      width: k,
                                      height: k,
                                      children: [
                                          (0, i.jsx)("rect", {
                                              x: 0,
                                              y: 0,
                                              width: k,
                                              height: k,
                                              rx: Math.round(0.3 * k),
                                              ry: Math.round(0.3 * k),
                                              fill: "white",
                                          }),
                                          (0, i.jsx)("rect", {
                                              x: P,
                                              y: j,
                                              width: V,
                                              height: H,
                                              rx: Y,
                                              ry: Y,
                                              fill: "black",
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsx)("foreignObject", {
                                  x: 0,
                                  y: 0,
                                  width: k,
                                  height: k,
                                  overflow: "visible",
                                  mask: `url(#${v})`,
                                  children: b,
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: A.RL,
                          style: { left: W, top: z },
                          children: (0, i.jsx)(C, { avatarSize: w, typingFillColor: x }),
                      }),
                  ],
              })
            : b;
    };
