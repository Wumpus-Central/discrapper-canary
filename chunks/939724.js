n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(989349),
    l = n.n(a),
    o = n(397927),
    c = n(496431),
    d = n(985018),
    u = n(338422);
let _ = (e) => {
    let { expiresAt: t, className: n } = e,
        s = (0, c.A)(l()(t).toDate(), 1e3);
    if (null == s) return null;
    let { days: a, hours: _, minutes: m, seconds: A } = s,
        g = [
            { unitValue: a, unitType: "days" },
            { unitValue: _, unitType: "hours" },
            { unitValue: m, unitType: "minutes" },
            { unitValue: A, unitType: "seconds" },
        ];
    return (0, i.jsxs)("div", {
        className: r()(u.Xl, n),
        children: [
            (0, i.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: d.intl.string(d.t["/ARFVE"]),
            }),
            (0, i.jsx)("div", {
                className: u.$R,
                children: g.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [s, r] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(
                                    "div",
                                    {
                                        className: u.bh,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: u.kB,
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: u.B2,
                                                        children: (0, i.jsx)(o.Text, {
                                                            variant: "text-md/medium",
                                                            color: "always-white",
                                                            children: s,
                                                        }),
                                                    }),
                                                    (0, i.jsx)("div", {
                                                        className: u.B2,
                                                        children: (0, i.jsx)(o.Text, {
                                                            variant: "text-md/medium",
                                                            color: "always-white",
                                                            children: r,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsx)(o.Text, {
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
                                    (0, i.jsx)(o.Text, {
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
