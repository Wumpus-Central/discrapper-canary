r.d(t, { A: () => C });
var s = r(627968),
    i = r(64700),
    n = r(503698),
    a = r.n(n),
    l = r(735438),
    o = r(311907),
    c = r(778712),
    d = r(834730),
    u = r(702211),
    m = r(773669),
    A = r(290863),
    h = r(405269),
    x = r(927578),
    g = r(993408),
    p = r(821701),
    _ = r(536572),
    v = r(162232),
    j = r(985018),
    E = r(304452);
let I = [
        { avatarSize: c._3.SIZE_40, showStatus: !1 },
        { avatarSize: c._3.SIZE_32, showStatus: !1 },
        { avatarSize: c._3.SIZE_40, showStatus: !0 },
        { avatarSize: c._3.SIZE_32, showStatus: !0 },
    ],
    y = (e) => {
        let { purchase: t } = e,
            r = (0, o.bG)([m.default], () => m.default.locale),
            i = (0, g.gA)(t),
            n = null != t.expiresAt ? (0, h.Tf)(Date.now(), t.expiresAt) : null,
            a = (0, _.Sw)(t),
            l = t.purchasedAt.toLocaleDateString(r, { month: "long", year: "numeric" });
        return (0, s.jsxs)("div", {
            className: E.c6,
            children: [
                (0, s.jsx)(d.E, { variant: "text-sm/semibold", color: "text-strong", children: a }),
                null != n &&
                    (0, s.jsx)(d.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.Io7ozn, { days: n.days.toString() }),
                    }),
                (0, s.jsxs)(d.E, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        j.intl.format(j.t.gW9R4B, { date: l }),
                        null != t.expiresAt &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)("br", {}),
                                    j.intl.format(j.t.eZSTa5, {
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
                i &&
                    (0, s.jsx)(d.E, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: j.intl.string(j.t.nKdAlO),
                    }),
            ],
        });
    },
    C = (e) => {
        let { user: t, guildId: r, avatarDecoration: n, className: c } = e,
            m = (0, o.bG)([A.A], () => A.A.getStatus(t.id)),
            { product: h, purchase: C } = (0, p.A)(n?.skuId),
            f = x.Ay.canUseCollectibles(t),
            S = null != C ? (0, g.gA)(C) : (0, g.G0)(h),
            N = !f && (0, g.gA)(C),
            k = (0, u.b)(!S || f),
            w = (0, _.Sw)(C),
            T = (0, _.VG)(h),
            b = i.useMemo(
                () =>
                    N
                        ? j.intl.string(j.t["7vkeu5"])
                        : S && f && !k
                          ? j.intl.string(j.t.hmyYK8)
                          : S && !f && k
                            ? j.intl.string(j.t.q0PlFn)
                            : !S || f || k
                              ? j.intl.string(j.t.fEGjVQ)
                              : j.intl.string(j.t["0xs2sA"]),
                [N, S, f, k],
            );
        return null != n && (null == C || N)
            ? (0, s.jsxs)("div", {
                  className: a()(E.kk, E.O7, c),
                  children: [
                      (0, s.jsx)("div", {
                          className: E.Bo,
                          children: (0, s.jsx)(v.A, { user: t, guildId: r, avatarDecorationOverride: n }),
                      }),
                      (0, s.jsxs)("div", {
                          className: E.hx,
                          children: [
                              (0, s.jsx)(d.E, { variant: "text-sm/semibold", children: (0, l.isEmpty)(w) ? T : w }),
                              (0, s.jsx)(d.E, { variant: "text-sm/normal", children: b }),
                          ],
                      }),
                  ],
              })
            : (0, s.jsxs)("div", {
                  className: a()(E.kk, c),
                  children: [
                      (0, s.jsxs)("div", {
                          className: E.$M,
                          children: [
                              (0, s.jsx)("div", {
                                  className: E.TB,
                                  children: (0, s.jsx)(v.A, { user: t, guildId: r, avatarDecorationOverride: n }),
                              }),
                              (0, s.jsx)("div", {
                                  className: E.Kh,
                                  children: I.map((e) => {
                                      let { avatarSize: i, showStatus: a } = e;
                                      return (0, s.jsx)(
                                          "div",
                                          {
                                              className: E.CX,
                                              children: (0, s.jsx)(v.A, {
                                                  user: t,
                                                  guildId: r,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: n,
                                                  status: a ? m : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          `${i}${a}`,
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != C && (0, s.jsx)(y, { purchase: C }),
                  ],
              });
    };
