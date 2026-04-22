n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(989349),
    l = n.n(s),
    c = n(834730),
    o = n(496431),
    d = n(985018),
    u = n(116689);
let _ = (e) => {
    let { expiresAt: t, className: n } = e,
        a = (0, o.A)(l()(t).toDate(), 1e3);
    if (null == a) return null;
    let { days: s, hours: _, minutes: m, seconds: p } = a,
        f = [
            { unitValue: s, unitType: "days" },
            { unitValue: _, unitType: "hours" },
            { unitValue: m, unitType: "minutes" },
            { unitValue: p, unitType: "seconds" },
        ];
    return (0, r.jsxs)("div", {
        className: i()(u.Xl, n),
        children: [
            (0, r.jsx)(c.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: d.intl.string(d.t["/ARFVE"]),
            }),
            (0, r.jsx)("div", {
                className: u.$R,
                children: f.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [a, i] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
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
                                                        children: (0, r.jsx)(c.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: u.B2,
                                                        children: (0, r.jsx)(c.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(c.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
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
                                    (0, r.jsx)(c.E, {
                                        className: u.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === f.length - 1),
                ),
            }),
        ],
    });
};
