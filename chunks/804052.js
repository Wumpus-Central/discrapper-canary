n.d(t, {
    A: () => h,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    o = n(405269),
    c = n(652215),
    u = n(985018),
    d = n(671818);
let p = (e) => {
        let { IconComponent: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: a()(d.kJ, n),
            children: (0, r.jsx)(t, {
                className: d.Kk,
                color: "currentColor",
            }),
        });
    },
    f = (e) => {
        let { circle: t, smallHeader: n, text: i, className: l } = e;
        return (0, r.jsxs)("div", {
            className: a()(d.yX, l),
            children: [
                t,
                (0, r.jsxs)("div", {
                    className: d.h_,
                    children: [
                        null != n
                            ? (0, r.jsx)("div", {
                                  className: d.VA,
                                  children: n,
                              })
                            : null,
                        (0, r.jsx)("div", {
                            className: d.Qq,
                            children: i,
                        }),
                    ],
                }),
            ],
        });
    };
class h extends i.Component {
    render() {
        let { reason: e, className: t } = this.props;
        if (e.type === c.g_B.RECENT_RELEASE_DATE)
            return (0, r.jsx)(f, {
                className: t,
                circle: (0, r.jsx)(p, {
                    IconComponent: s.CTc,
                }),
                smallHeader: u.intl.string(u.t.u81aYY),
                text: (0, o.i$)(e.releaseDate, "LL"),
            });
        if (e.type === c.g_B.RELEASE_DATE)
            return (0, r.jsx)(f, {
                className: t,
                circle: (0, r.jsx)(p, {
                    IconComponent: s.CTc,
                }),
                smallHeader: u.intl.string(u.t.qpwaNY),
                text: (0, o.i$)(e.releaseDate, "LL"),
            });
        if (e.type === c.g_B.EARLY_ACCESS)
            if (null != e.releaseDate)
                return (0, r.jsx)(f, {
                    className: t,
                    circle: (0, r.jsx)(p, {
                        IconComponent: s.wUM,
                        className: d.gY,
                    }),
                    smallHeader: u.intl.string(u.t.HYys0s),
                    text: (0, o.i$)(e.releaseDate, "LL"),
                });
            else
                return (0, r.jsx)(f, {
                    className: t,
                    circle: (0, r.jsx)(p, {
                        IconComponent: s.wUM,
                        className: d.gY,
                    }),
                    text: u.intl.string(u.t.HYys0s),
                });
        return e.type === c.g_B.FLAVOR_TEXT
            ? (0, r.jsx)(f, {
                  circle: (0, r.jsx)(p, {
                      IconComponent: s.A9s,
                  }),
                  text: e.flavorText,
                  className: t,
              })
            : e.type === c.g_B.HAS_FREE_PREMIUM_CONTENT
              ? (0, r.jsx)(f, {
                    className: t,
                    circle: (0, r.jsx)(p, {
                        IconComponent: s.tvc,
                        className: d.uf,
                    }),
                    text: u.intl.string(u.t.R9SwVl),
                })
              : null;
    }
}
