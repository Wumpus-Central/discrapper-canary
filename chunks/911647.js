r.d(t, { A: () => C });
var s = r(627968),
    i = r(64700),
    n = r(503698),
    l = r.n(n),
    a = r(735438),
    o = r(311907),
    c = r(397927),
    d = r(702211),
    u = r(773669),
    m = r(290863),
    x = r(405269),
    A = r(927578),
    h = r(993408),
    g = r(821701),
    _ = r(536572),
    p = r(162232),
    v = r(985018),
    j = r(933155);
let y = [
        { avatarSize: c._3J.SIZE_40, showStatus: !1 },
        { avatarSize: c._3J.SIZE_32, showStatus: !1 },
        { avatarSize: c._3J.SIZE_40, showStatus: !0 },
        { avatarSize: c._3J.SIZE_32, showStatus: !0 },
    ],
    I = (e) => {
        let { purchase: t } = e,
            r = (0, o.bG)([u.default], () => u.default.locale),
            i = (0, h.gA)(t),
            n = null != t.expiresAt ? (0, x.Tf)(Date.now(), t.expiresAt) : null,
            l = (0, _.Sw)(t),
            a = t.purchasedAt.toLocaleDateString(r, { month: "long", year: "numeric" });
        return (0, s.jsxs)("div", {
            className: j.c6,
            children: [
                (0, s.jsx)(c.Text, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                null != n &&
                    (0, s.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: v.intl.format(v.t.Io7ozn, { days: n.days.toString() }),
                    }),
                (0, s.jsxs)(c.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        v.intl.format(v.t.gW9R4B, { date: a }),
                        null != t.expiresAt &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)("br", {}),
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
                i &&
                    (0, s.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: v.intl.string(v.t.nKdAlO),
                    }),
            ],
        });
    },
    C = (e) => {
        let { user: t, guildId: r, avatarDecoration: n, className: u } = e,
            x = (0, o.bG)([m.A], () => m.A.getStatus(t.id)),
            { product: C, purchase: E } = (0, g.A)(n?.skuId),
            S = A.Ay.canUseCollectibles(t),
            T = null != E ? (0, h.gA)(E) : (0, h.G0)(C),
            f = !S && (0, h.gA)(E),
            k = (0, d.b)(!T || S),
            N = (0, _.Sw)(E),
            P = (0, _.VG)(C),
            O = i.useMemo(
                () =>
                    f
                        ? v.intl.string(v.t["7vkeu5"])
                        : T && S && !k
                          ? v.intl.string(v.t.hmyYK8)
                          : T && !S && k
                            ? v.intl.string(v.t.q0PlFn)
                            : !T || S || k
                              ? v.intl.string(v.t.fEGjVQ)
                              : v.intl.string(v.t["0xs2sA"]),
                [f, T, S, k],
            );
        return null != n && (null == E || f)
            ? (0, s.jsxs)("div", {
                  className: l()(j.kk, j.O7, u),
                  children: [
                      (0, s.jsx)("div", {
                          className: j.Bo,
                          children: (0, s.jsx)(p.A, { user: t, guildId: r, avatarDecorationOverride: n }),
                      }),
                      (0, s.jsxs)("div", {
                          className: j.hx,
                          children: [
                              (0, s.jsx)(c.Text, { variant: "text-sm/semibold", children: (0, a.isEmpty)(N) ? P : N }),
                              (0, s.jsx)(c.Text, { variant: "text-sm/normal", children: O }),
                          ],
                      }),
                  ],
              })
            : (0, s.jsxs)("div", {
                  className: l()(j.kk, u),
                  children: [
                      (0, s.jsxs)("div", {
                          className: j.$M,
                          children: [
                              (0, s.jsx)("div", {
                                  className: j.TB,
                                  children: (0, s.jsx)(p.A, { user: t, guildId: r, avatarDecorationOverride: n }),
                              }),
                              (0, s.jsx)("div", {
                                  className: j.Kh,
                                  children: y.map((e) => {
                                      let { avatarSize: i, showStatus: l } = e;
                                      return (0, s.jsx)(
                                          "div",
                                          {
                                              className: j.CX,
                                              children: (0, s.jsx)(p.A, {
                                                  user: t,
                                                  guildId: r,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: n,
                                                  status: l ? x : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          `${i}${l}`,
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != E && (0, s.jsx)(I, { purchase: E }),
                  ],
              });
    };
