n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(397927),
    o = n(405269),
    d = n(652215),
    c = n(985018),
    u = n(671818);
let A = (e) => {
        let { IconComponent: t, className: n } = e;
        return (0, i.jsx)("div", {
            className: l()(u.kJ, n),
            children: (0, i.jsx)(t, { className: u.Kk, color: "currentColor" }),
        });
    },
    h = (e) => {
        let { circle: t, smallHeader: n, text: r, className: a } = e;
        return (0, i.jsxs)("div", {
            className: l()(u.yX, a),
            children: [
                t,
                (0, i.jsxs)("div", {
                    className: u.h_,
                    children: [
                        null != n ? (0, i.jsx)("div", { className: u.VA, children: n }) : null,
                        (0, i.jsx)("div", { className: u.Qq, children: r }),
                    ],
                }),
            ],
        });
    };
class _ extends r.Component {
    render() {
        let { reason: e, className: t } = this.props;
        if (e.type === d.g_B.RECENT_RELEASE_DATE)
            return (0, i.jsx)(h, {
                className: t,
                circle: (0, i.jsx)(A, { IconComponent: s.CTc }),
                smallHeader: c.intl.string(c.t.u81aYY),
                text: (0, o.i$)(e.releaseDate, "LL"),
            });
        if (e.type === d.g_B.RELEASE_DATE)
            return (0, i.jsx)(h, {
                className: t,
                circle: (0, i.jsx)(A, { IconComponent: s.CTc }),
                smallHeader: c.intl.string(c.t.qpwaNY),
                text: (0, o.i$)(e.releaseDate, "LL"),
            });
        if (e.type === d.g_B.EARLY_ACCESS)
            if (null != e.releaseDate)
                return (0, i.jsx)(h, {
                    className: t,
                    circle: (0, i.jsx)(A, { IconComponent: s.wUM, className: u.gY }),
                    smallHeader: c.intl.string(c.t.HYys0s),
                    text: (0, o.i$)(e.releaseDate, "LL"),
                });
            else
                return (0, i.jsx)(h, {
                    className: t,
                    circle: (0, i.jsx)(A, { IconComponent: s.wUM, className: u.gY }),
                    text: c.intl.string(c.t.HYys0s),
                });
        return e.type === d.g_B.FLAVOR_TEXT
            ? (0, i.jsx)(h, { circle: (0, i.jsx)(A, { IconComponent: s.A9s }), text: e.flavorText, className: t })
            : e.type === d.g_B.HAS_FREE_PREMIUM_CONTENT
              ? (0, i.jsx)(h, {
                    className: t,
                    circle: (0, i.jsx)(A, { IconComponent: s.tvc, className: u.uf }),
                    text: c.intl.string(c.t.R9SwVl),
                })
              : null;
    }
}
