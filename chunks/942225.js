r.d(t, { A: () => f });
var n = r(627968),
    s = r(64700),
    i = r(503698),
    a = r.n(i),
    l = r(735438),
    o = r(311907),
    c = r(397927),
    d = r(993408),
    u = r(821701),
    m = r(645178),
    x = r(702211),
    A = r(773669),
    h = r(290863),
    g = r(405269),
    p = r(927578),
    _ = r(291661),
    v = r(985018),
    j = r(455509);
let y = [
        { avatarSize: c._3J.SIZE_40, showStatus: !1 },
        { avatarSize: c._3J.SIZE_32, showStatus: !1 },
        { avatarSize: c._3J.SIZE_40, showStatus: !0 },
        { avatarSize: c._3J.SIZE_32, showStatus: !0 },
    ],
    I = (e) => {
        let { purchase: t } = e,
            r = (0, o.bG)([A.default], () => A.default.locale),
            s = (0, d.gA)(t),
            i = null != t.expiresAt ? (0, g.Tf)(Date.now(), t.expiresAt) : null,
            a = (0, m.Tk)(t),
            l = t.purchasedAt.toLocaleDateString(r, { month: "long", year: "numeric" });
        return (0, n.jsxs)("div", {
            className: j.c6,
            children: [
                (0, n.jsx)(c.Text, { variant: "text-sm/semibold", color: "text-strong", children: a }),
                null != i &&
                    (0, n.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: v.intl.format(v.t.Io7ozn, { days: i.days.toString() }),
                    }),
                (0, n.jsxs)(c.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        v.intl.format(v.t.gW9R4B, { date: l }),
                        null != t.expiresAt &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("br", {}),
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
                s &&
                    (0, n.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: v.intl.string(v.t.nKdAlO),
                    }),
            ],
        });
    },
    f = (e) => {
        let { user: t, guildId: r, avatarDecoration: i, className: A } = e,
            g = (0, o.bG)([h.A], () => h.A.getStatus(t.id)),
            { product: f, purchase: C } = (0, u.A)(i?.skuId),
            T = p.Ay.canUseCollectibles(t),
            E = null != C ? (0, d.gA)(C) : (0, d.G0)(f),
            S = !T && (0, d.gA)(C),
            k = (0, x.b)(!E || T),
            N = (0, m.Tk)(C),
            O = (0, m.o7)(f),
            P = s.useMemo(
                () =>
                    S
                        ? v.intl.string(v.t["7vkeu5"])
                        : E && T && !k
                          ? v.intl.string(v.t.hmyYK8)
                          : E && !T && k
                            ? v.intl.string(v.t.q0PlFn)
                            : !E || T || k
                              ? v.intl.string(v.t.fEGjVQ)
                              : v.intl.string(v.t["0xs2sA"]),
                [S, E, T, k],
            );
        return null != i && (null == C || S)
            ? (0, n.jsxs)("div", {
                  className: a()(j.kk, j.O7, A),
                  children: [
                      (0, n.jsx)("div", {
                          className: j.Bo,
                          children: (0, n.jsx)(_.A, { user: t, guildId: r, avatarDecorationOverride: i }),
                      }),
                      (0, n.jsxs)("div", {
                          className: j.hx,
                          children: [
                              (0, n.jsx)(c.Text, { variant: "text-sm/semibold", children: (0, l.isEmpty)(N) ? O : N }),
                              (0, n.jsx)(c.Text, { variant: "text-sm/normal", children: P }),
                          ],
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  className: a()(j.kk, A),
                  children: [
                      (0, n.jsxs)("div", {
                          className: j.$M,
                          children: [
                              (0, n.jsx)("div", {
                                  className: j.TB,
                                  children: (0, n.jsx)(_.A, { user: t, guildId: r, avatarDecorationOverride: i }),
                              }),
                              (0, n.jsx)("div", {
                                  className: j.Kh,
                                  children: y.map((e) => {
                                      let { avatarSize: s, showStatus: a } = e;
                                      return (0, n.jsx)(
                                          "div",
                                          {
                                              className: j.CX,
                                              children: (0, n.jsx)(_.A, {
                                                  user: t,
                                                  guildId: r,
                                                  avatarSize: s,
                                                  avatarDecorationOverride: i,
                                                  status: a ? g : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          `${s}${a}`,
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != C && (0, n.jsx)(I, { purchase: C }),
                  ],
              });
    };
