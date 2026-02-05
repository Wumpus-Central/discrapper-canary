n.d(t, { A: () => C, Q: () => E });
var l,
    i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    u = n(863610),
    o = n(935154),
    d = n(573435),
    c = n(260509),
    h = n(652215),
    g = n(778712),
    I = n(624510),
    E = (((l = {}).TINY_24 = "TINY_24"), (l.SMALL_32 = "SMALL_32"), (l.MEDIUM_40 = "MEDIUM_40"), l);
let A = { TINY_24: 24, SMALL_32: 32, MEDIUM_40: 40 },
    f = { TINY_24: 24, SMALL_32: 26, MEDIUM_40: 34 },
    m = { TINY_24: [13, 11, 10], SMALL_32: [13, 11, 10], MEDIUM_40: [24, 20, 16] },
    S = { TINY_24: [9, 8, 7], SMALL_32: [10, 9, 8], MEDIUM_40: [14, 12, 8] },
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
        s = n.status,
        r = n.size - l + i - n.stroke - n.offset,
        a = n.size - s - n.stroke - n.offset,
        u = l + 2 * n.stroke,
        o = s + 2 * n.stroke,
        d = (n.status + 2 * n.stroke) / 2,
        c = n.size - l + i - n.offset,
        h = n.size - s;
    return {
        iconSize: n.size,
        statusWidth: l,
        statusHeight: s,
        dotRadius: n.status / 4,
        avatarCutoutX: r,
        avatarCutoutY: a,
        avatarCutoutWidth: u,
        avatarCutoutHeight: o,
        avatarCutoutRadius: d,
        indicatorX: c,
        indicatorY: h,
    };
}
let y = s.memo(function (e) {
        let { avatarSize: t } = e,
            n = (0, o.S3)(h.clD.ONLINE, null),
            { statusWidth: l, statusHeight: s, dotRadius: r } = _({ size: t });
        return (0, i.jsx)(d.Ay, {
            mask: d.hW.STATUS_TYPING,
            width: l,
            height: s,
            "aria-hidden": !0,
            children: (0, i.jsx)("div", {
                className: I.WQ,
                style: { backgroundColor: n },
                children: (0, i.jsx)(u.n, { dotRadius: r }),
            }),
        });
    }),
    C = function (e) {
        var t;
        let n,
            {
                className: l,
                iconClassName: r,
                size: u,
                channel: o,
                guild: h,
                locked: E,
                hasActiveThreads: C,
                isTyping: x = !1,
            } = e,
            v = s.useId();
        if (null == h) return null;
        let M = m[u],
            D = f[u],
            R = A[u],
            U = (0, c.Iv)(h, 48),
            O = N[u],
            G = (() => {
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
            b =
                (n =
                    null != (t = o?.name ?? "")
                        ? t
                              .replace(/[-_]+/g, " ")
                              .replace(/'s /g, " ")
                              .replace(/\w+/g, (e) => e[0])
                              .replace(/\s/g, "")
                        : "").length > 0
                    ? n
                    : "?",
            w = (0, c.Rb)(h),
            L = (0, i.jsxs)("div", {
                className: a()(I.zr, l),
                role: "img",
                style: { width: R, height: R },
                children: [
                    (0, i.jsx)(d.Ay, {
                        mask: d.hW.CHANNEL_ICON_WITH_GUILD_ICON,
                        width: D,
                        height: D,
                        children:
                            null != U
                                ? (0, i.jsx)("img", {
                                      alt: h.name,
                                      src: U,
                                      className: I.es,
                                      style: { width: D, height: D },
                                  })
                                : (0, i.jsx)("div", {
                                      className: a()(I.TT, I.q9),
                                      style: { fontSize: T(M, w), width: D, height: D },
                                      children: w,
                                  }),
                    }),
                    (0, i.jsx)("div", {
                        className: a()(I._C, p[u], r),
                        "aria-hidden": !0,
                        children: (0, i.jsx)(d.Ay, {
                            mask: d.hW.SQUIRCLE,
                            width: O,
                            height: O,
                            children: (0, i.jsx)("div", {
                                className: a()(p[u], I.q9),
                                style: { fontSize: T(S[u], b) },
                                children: b,
                            }),
                        }),
                    }),
                ],
            }),
            {
                iconSize: k,
                avatarCutoutX: F,
                avatarCutoutY: P,
                avatarCutoutWidth: j,
                avatarCutoutHeight: V,
                avatarCutoutRadius: H,
                indicatorX: Y,
                indicatorY: z,
            } = _({ size: G });
        return x
            ? (0, i.jsxs)("div", {
                  className: I.J4,
                  "aria-hidden": !0,
                  style: { width: R, height: R },
                  children: [
                      (0, i.jsxs)("svg", {
                          width: k,
                          height: k,
                          viewBox: `0 0 ${k} ${k}`,
                          className: I._S,
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
                                              x: F,
                                              y: P,
                                              width: j,
                                              height: V,
                                              rx: H,
                                              ry: H,
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
                                  children: L,
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: I.RL,
                          style: { left: Y, top: z },
                          children: (0, i.jsx)(y, { avatarSize: G }),
                      }),
                  ],
              })
            : L;
    };
