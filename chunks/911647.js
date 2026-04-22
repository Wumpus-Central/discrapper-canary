r.d(t, { A: () => N });
var a = r(627968),
    n = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(735438),
    o = r(311907),
    c = r(778712),
    u = r(834730),
    d = r(702211),
    A = r(773669),
    m = r(290863),
    h = r(405269),
    _ = r(927578),
    g = r(993408),
    p = r(821701),
    E = r(536572),
    f = r(162232),
    v = r(985018),
    x = r(304452);
let I = [
        { avatarSize: c._3.SIZE_40, showStatus: !1 },
        { avatarSize: c._3.SIZE_32, showStatus: !1 },
        { avatarSize: c._3.SIZE_40, showStatus: !0 },
        { avatarSize: c._3.SIZE_32, showStatus: !0 },
    ],
    R = (e) => {
        let { purchase: t } = e,
            r = (0, o.bG)([A.default], () => A.default.locale),
            n = (0, g.gA)(t),
            l = null != t.expiresAt ? (0, h.Tf)(Date.now(), t.expiresAt) : null,
            s = (0, E.Sw)(t),
            i = t.purchasedAt.toLocaleDateString(r, { month: "long", year: "numeric" });
        return (0, a.jsxs)("div", {
            className: x.c6,
            children: [
                (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", children: s }),
                null != l &&
                    (0, a.jsx)(u.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: v.intl.format(v.t.Io7ozn, { days: l.days.toString() }),
                    }),
                (0, a.jsxs)(u.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        v.intl.format(v.t.gW9R4B, { date: i }),
                        null != t.expiresAt &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("br", {}),
                                    v.intl.format(v.t.eZSTa5, {
                                        date: t.expiresAt.toLocaleDateString(r, {
                                            minute: "numeric",
                                            hour: "numeric",
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                n &&
                    (0, a.jsx)(u.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: v.intl.string(v.t.nKdAlO),
                    }),
            ],
        });
    },
    N = (e) => {
        let { user: t, guildId: r, avatarDecoration: l, className: c } = e,
            A = (0, o.bG)([m.A], () => m.A.getStatus(t.id)),
            { product: h, purchase: N } = (0, p.A)(l?.skuId),
            y = _.Ay.canUseCollectibles(t),
            C = null != N ? (0, g.gA)(N) : (0, g.G0)(h),
            T = !y && (0, g.gA)(N),
            O = (0, d.b)(!C || y),
            P = (0, E.Sw)(N),
            b = (0, E.VG)(h),
            j = n.useMemo(
                () =>
                    T
                        ? v.intl.string(v.t["7vkeu5"])
                        : C && y && !O
                          ? v.intl.string(v.t.hmyYK8)
                          : C && !y && O
                            ? v.intl.string(v.t.q0PlFn)
                            : !C || y || O
                              ? v.intl.string(v.t.fEGjVQ)
                              : v.intl.string(v.t["0xs2sA"]),
                [T, C, y, O],
            );
        return null != l && (null == N || T)
            ? (0, a.jsxs)("div", {
                  className: s()(x.kk, x.O7, c),
                  children: [
                      (0, a.jsx)("div", {
                          className: x.Bo,
                          children: (0, a.jsx)(f.A, { user: t, guildId: r, avatarDecorationOverride: l }),
                      }),
                      (0, a.jsxs)("div", {
                          className: x.hx,
                          children: [
                              (0, a.jsx)(u.E, { variant: "text-sm/semibold", children: (0, i.isEmpty)(P) ? b : P }),
                              (0, a.jsx)(u.E, { variant: "text-sm/normal", children: j }),
                          ],
                      }),
                  ],
              })
            : (0, a.jsxs)("div", {
                  className: s()(x.kk, c),
                  children: [
                      (0, a.jsxs)("div", {
                          className: x.$M,
                          children: [
                              (0, a.jsx)("div", {
                                  className: x.TB,
                                  children: (0, a.jsx)(f.A, { user: t, guildId: r, avatarDecorationOverride: l }),
                              }),
                              (0, a.jsx)("div", {
                                  className: x.Kh,
                                  children: I.map((e) => {
                                      let { avatarSize: n, showStatus: s } = e;
                                      return (0, a.jsx)(
                                          "div",
                                          {
                                              className: x.CX,
                                              children: (0, a.jsx)(f.A, {
                                                  user: t,
                                                  guildId: r,
                                                  avatarSize: n,
                                                  avatarDecorationOverride: l,
                                                  status: s ? A : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          `${n}${s}`,
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != N && (0, a.jsx)(R, { purchase: N }),
                  ],
              });
    };
