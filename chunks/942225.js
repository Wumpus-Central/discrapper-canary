r.d(t, {
    A: () => O,
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    a = r.n(i),
    s = r(735438),
    c = r(311907),
    o = r(397927),
    u = r(993408),
    d = r(821701),
    m = r(764999),
    p = r(702211),
    x = r(773669),
    g = r(290863),
    b = r(405269),
    A = r(927578),
    h = r(291661),
    f = r(985018),
    v = r(455509);
let y = [
        {
            avatarSize: o._3J.SIZE_40,
            showStatus: !1,
        },
        {
            avatarSize: o._3J.SIZE_32,
            showStatus: !1,
        },
        {
            avatarSize: o._3J.SIZE_40,
            showStatus: !0,
        },
        {
            avatarSize: o._3J.SIZE_32,
            showStatus: !0,
        },
    ],
    j = (e) => {
        let { purchase: t } = e,
            r = (0, c.bG)([x.default], () => x.default.locale),
            l = (0, u.gA)(t),
            i = null != t.expiresAt ? (0, b.Tf)(Date.now(), t.expiresAt) : null,
            a = (0, m.Tk)(t),
            s = t.purchasedAt.toLocaleDateString(r, {
                month: "long",
                year: "numeric",
            });
        return (0, n.jsxs)("div", {
            className: v.c6,
            children: [
                (0, n.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: a,
                }),
                null != i &&
                    (0, n.jsx)(o.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: f.intl.format(f.t.Io7ozn, {
                            days: i.days.toString(),
                        }),
                    }),
                (0, n.jsxs)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        f.intl.format(f.t.gW9R4B, {
                            date: s,
                        }),
                        null != t.expiresAt &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("br", {}),
                                    f.intl.format(f.t.eZSTa5, {
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
                l &&
                    (0, n.jsx)(o.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: f.intl.string(f.t.nKdAlO),
                    }),
            ],
        });
    },
    O = (e) => {
        let { user: t, guildId: r, avatarDecoration: i, className: x } = e,
            b = (0, c.bG)([g.A], () => g.A.getStatus(t.id)),
            { product: O, purchase: _ } = (0, d.A)(null == i ? void 0 : i.skuId),
            S = A.Ay.canUseCollectibles(t),
            E = null != _ ? (0, u.gA)(_) : (0, u.G0)(O),
            I = !S && (0, u.gA)(_),
            k = (0, p.b)(!E || S),
            T = (0, m.Tk)(_),
            P = (0, m.o7)(O),
            C = l.useMemo(
                () =>
                    I
                        ? f.intl.string(f.t["7vkeu5"])
                        : E && S && !k
                          ? f.intl.string(f.t.hmyYK8)
                          : E && !S && k
                            ? f.intl.string(f.t.q0PlFn)
                            : !E || S || k
                              ? f.intl.string(f.t.fEGjVQ)
                              : f.intl.string(f.t["0xs2sA"]),
                [I, E, S, k],
            );
        return null != i && (null == _ || I)
            ? (0, n.jsxs)("div", {
                  className: a()(v.kk, v.O7, x),
                  children: [
                      (0, n.jsx)("div", {
                          className: v.Bo,
                          children: (0, n.jsx)(h.A, {
                              user: t,
                              guildId: r,
                              avatarDecorationOverride: i,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          className: v.hx,
                          children: [
                              (0, n.jsx)(o.Text, {
                                  variant: "text-sm/semibold",
                                  children: (0, s.isEmpty)(T) ? P : T,
                              }),
                              (0, n.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  children: C,
                              }),
                          ],
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  className: a()(v.kk, x),
                  children: [
                      (0, n.jsxs)("div", {
                          className: v.$M,
                          children: [
                              (0, n.jsx)("div", {
                                  className: v.TB,
                                  children: (0, n.jsx)(h.A, {
                                      user: t,
                                      guildId: r,
                                      avatarDecorationOverride: i,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: v.Kh,
                                  children: y.map((e) => {
                                      let { avatarSize: l, showStatus: a } = e;
                                      return (0, n.jsx)(
                                          "div",
                                          {
                                              className: v.CX,
                                              children: (0, n.jsx)(h.A, {
                                                  user: t,
                                                  guildId: r,
                                                  avatarSize: l,
                                                  avatarDecorationOverride: i,
                                                  status: a ? b : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          "".concat(l).concat(a),
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != _ &&
                          (0, n.jsx)(j, {
                              purchase: _,
                          }),
                  ],
              });
    };
