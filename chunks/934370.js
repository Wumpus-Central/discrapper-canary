i.d(e, { F: () => A });
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(602450),
    a = i(557571),
    u = i(985018),
    o = i(215765),
    d = i(32538);
let A = () => {
        let { isWeb: t, installationStatus: e, perkAvailableToUser: i } = (0, a.lV)(),
            d = (0, l.useMemo)(() => {
                if (t || !i) return u.intl.string(o.default.jV0wEC);
                switch (e) {
                    case r.Lk.ERROR:
                        return u.intl.string(o.default.cjqyz7);
                    case r.Lk.INSTALLING_TIMEOUT:
                        return u.intl.string(o.default.an5PuY);
                    case r.Lk.NOT_INSTALLED:
                    case r.Lk.UNKNOWN:
                        return u.intl.string(o.default.jV0wEC);
                    case r.Lk.INSTALLING:
                        return u.intl.string(o.default.lYWqUK);
                    case r.Lk.WAITING_FOR_TERMS:
                    case r.Lk.READY_FOR_LICENSE:
                        return u.intl.string(o.default.NSVz3Y);
                    case r.Lk.EXISTING_INSTALLATION:
                        return u.intl.string(o.default.FgL0HB);
                    case r.Lk.ZERO_TRUST:
                        return u.intl.string(o.default["7zgDRR"]);
                    case r.Lk.INSTALLED:
                        return (0, n.jsx)(T, {});
                }
            }, [t, e, i]);
        return (0, n.jsx)(s.DZT, { variant: "heading-md/semibold", children: d });
    },
    T = () => {
        switch ((0, a.lV)((t) => t.connectionStatus)) {
            case r.l7.INITIALIZING:
                return (0, n.jsxs)("span", {
                    className: d.u,
                    children: [
                        u.intl.string(o.default["00vkCU"]),
                        " ",
                        (0, n.jsx)("span", {
                            children: (0, n.jsx)(s.y$y, { type: s.tVU.SPINNING_CIRCLE, className: d.b }),
                        }),
                    ],
                });
            case r.l7.CONNECTED:
                return u.intl.string(o.default.FBu3XJ);
            case r.l7.DISCONNECTED:
                return u.intl.string(o.default["9V78nW"]);
            case r.l7.ERROR:
                return u.intl.string(o.default.i4ZzK6);
        }
    };
