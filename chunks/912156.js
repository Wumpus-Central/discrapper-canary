n.d(t, { A: () => y, Q: () => f });
var l,
    i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    u = n(863610),
    o = n(935154),
    d = n(573435),
    c = n(260509),
    h = n(652215),
    g = n(778712),
    I = n(624510),
    f = (((l = {}).TINY_24 = "TINY_24"), (l.SMALL_32 = "SMALL_32"), (l.MEDIUM_40 = "MEDIUM_40"), l);
let A = { TINY_24: 24, SMALL_32: 32, MEDIUM_40: 40 },
    E = { TINY_24: 24, SMALL_32: 26, MEDIUM_40: 34 },
    m = { TINY_24: [13, 11, 10], SMALL_32: [13, 11, 10], MEDIUM_40: [24, 20, 16] },
    S = { TINY_24: [9, 8, 7], SMALL_32: [12, 11, 9.5], MEDIUM_40: [14, 13, 11] },
    p = { TINY_24: I.d7, SMALL_32: I.OI, MEDIUM_40: I.H5 },
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
function _(e) {
    let { size: t } = e,
        n = (0, g.Kj)(t),
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
            l = (0, o.S3)(h.clD.ONLINE, null),
            { statusWidth: r, statusHeight: s, dotRadius: a } = _({ size: t });
        return (0, i.jsx)(d.Ay, {
            mask: d.hW.STATUS_TYPING,
            width: r,
            height: s,
            "aria-hidden": !0,
            children: (0, i.jsx)("div", {
                className: I.WQ,
                style: { backgroundColor: n ?? l },
                children: (0, i.jsx)(u.n, { dotRadius: a }),
            }),
        });
    }),
    y = function (e) {
        var t;
        let n,
            { className: l, iconClassName: s, size: u, channel: o, guild: h, isTyping: f = !1, typingFillColor: y } = e,
            x = r.useId();
        if (null == h) return null;
        let v = m[u],
            M = E[u],
            D = A[u],
            R = (0, c.Iv)(h, 48),
            U = N[u],
            O = (() => {
                switch (u) {
                    case "TINY_24":
                        return g._3.SIZE_24;
                    case "SMALL_32":
                        return g._3.SIZE_32;
                    case "MEDIUM_40":
                        return g._3.SIZE_40;
                    default:
                        return u;
                }
            })(),
            G =
                0 ===
                (n =
                    null != (t = o?.name ?? "")
                        ? t
                              .replace(/[-_]+/g, " ")
                              .replace(/'s /g, " ")
                              .replace(/\w+/g, (e) => e[0])
                              .replace(/\s/g, "")
                        : "").length
                    ? "?"
                    : n.slice(0, 3),
            b = (0, c.Rb)(h),
            w = (0, i.jsxs)("div", {
                className: a()(I.zr, l),
                role: "img",
                style: { width: D, height: D },
                children: [
                    (0, i.jsx)(d.Ay, {
                        mask: d.hW.CHANNEL_ICON_WITH_GUILD_ICON,
                        width: M,
                        height: M,
                        children:
                            null != R
                                ? (0, i.jsx)("img", {
                                      alt: h.name,
                                      src: R,
                                      className: I.es,
                                      style: { width: M, height: M },
                                  })
                                : (0, i.jsx)("div", {
                                      className: a()(I.TT, I.q9),
                                      style: { fontSize: T(v, b), width: M, height: M },
                                      children: b,
                                  }),
                    }),
                    (0, i.jsx)("div", {
                        className: a()(I._C, p[u], s),
                        "aria-hidden": !0,
                        children: (0, i.jsx)(d.Ay, {
                            mask: d.hW.SQUIRCLE,
                            width: U,
                            height: U,
                            children: (0, i.jsx)("div", {
                                className: a()(p[u], I.q9),
                                style: { fontSize: T(S[u], G) },
                                children: G,
                            }),
                        }),
                    }),
                ],
            }),
            {
                iconSize: L,
                avatarCutoutX: F,
                avatarCutoutY: k,
                avatarCutoutWidth: P,
                avatarCutoutHeight: j,
                avatarCutoutRadius: V,
                indicatorX: H,
                indicatorY: Y,
            } = _({ size: O });
        return f
            ? (0, i.jsxs)("div", {
                  className: I.J4,
                  "aria-hidden": !0,
                  style: { width: D, height: D },
                  children: [
                      (0, i.jsxs)("svg", {
                          width: L,
                          height: L,
                          viewBox: `0 0 ${L} ${L}`,
                          className: I._S,
                          "aria-hidden": !0,
                          children: [
                              (0, i.jsx)("defs", {
                                  children: (0, i.jsxs)("mask", {
                                      id: x,
                                      width: L,
                                      height: L,
                                      children: [
                                          (0, i.jsx)("rect", {
                                              x: 0,
                                              y: 0,
                                              width: L,
                                              height: L,
                                              rx: Math.round(0.3 * L),
                                              ry: Math.round(0.3 * L),
                                              fill: "white",
                                          }),
                                          (0, i.jsx)("rect", {
                                              x: F,
                                              y: k,
                                              width: P,
                                              height: j,
                                              rx: V,
                                              ry: V,
                                              fill: "black",
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsx)("foreignObject", {
                                  x: 0,
                                  y: 0,
                                  width: L,
                                  height: L,
                                  overflow: "visible",
                                  mask: `url(#${x})`,
                                  children: w,
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: I.RL,
                          style: { left: H, top: Y },
                          children: (0, i.jsx)(C, { avatarSize: O, typingFillColor: y }),
                      }),
                  ],
              })
            : w;
    };
