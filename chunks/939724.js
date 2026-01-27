n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(989349),
    a = n.n(s),
    o = n(397927),
    c = n(496431),
    d = n(985018),
    u = n(338422);
let _ = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, c.A)(a()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: s, hours: _, minutes: p, seconds: m } = i,
        g = [
            {
                unitValue: s,
                unitType: "days",
            },
            {
                unitValue: _,
                unitType: "hours",
            },
            {
                unitValue: p,
                unitType: "minutes",
            },
            {
                unitValue: m,
                unitType: "seconds",
            },
        ];
    return (0, r.jsxs)("div", {
        className: l()(u.Xl, n),
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: d.intl.string(d.t["/ARFVE"]),
            }),
            (0, r.jsx)("div", {
                className: u.$R,
                children: g.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, l] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        className: u.bh,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: u.kB,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: u.B2,
                                                        children: (0, r.jsx)(o.Text, {
                                                            variant: "text-md/medium",
                                                            color: "always-white",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: u.B2,
                                                        children: (0, r.jsx)(o.Text, {
                                                            variant: "text-md/medium",
                                                            color: "always-white",
                                                            children: l,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xs/semibold",
                                                color: "always-white",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return d.intl.string(d.t.ixASa2);
                                                        case "hours":
                                                            return d.intl.string(d.t["8sNvNn"]);
                                                        case "minutes":
                                                            return d.intl.string(d.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return d.intl.string(d.t.JhaiLW);
                                                        default:
                                                            return "";
                                                    }
                                                })(e.unitType),
                                            }),
                                        ],
                                    },
                                    e.unitType,
                                ),
                                !t &&
                                    (0, r.jsx)(o.Text, {
                                        className: u.cV,
                                        variant: "text-lg/normal",
                                        color: "always-white",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === g.length - 1),
                ),
            }),
        ],
    });
};
