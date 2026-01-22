n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    l = n(397927),
    c = n(496431),
    u = n(985018),
    d = n(338422);
let f = 1e3;

function p(e) {
    let t = e.toString();
    return 1 === t.length ? ["0", t[0]] : [t[0], t[1]];
}

function _(e) {
    switch (e) {
        case "days":
            return u.intl.string(u.t.ixASa2);
        case "hours":
            return u.intl.string(u.t["8sNvNn"]);
        case "minutes":
            return u.intl.string(u.t["Gv6kP/"]);
        case "seconds":
            return u.intl.string(u.t.JhaiLW);
        default:
            return "";
    }
}

function h(e, t) {
    let [n, i] = p(e.unitValue);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(
                "div",
                {
                    className: d.bh,
                    children: [
                        (0, r.jsxs)("div", {
                            className: d.kB,
                            children: [
                                (0, r.jsx)("div", {
                                    className: d.B2,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-md/medium",
                                        color: "always-white",
                                        children: n,
                                    }),
                                }),
                                (0, r.jsx)("div", {
                                    className: d.B2,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-md/medium",
                                        color: "always-white",
                                        children: i,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: _(e.unitType),
                        }),
                    ],
                },
                e.unitType,
            ),
            !t &&
                (0, r.jsx)(l.Text, {
                    className: d.cV,
                    variant: "text-lg/normal",
                    color: "always-white",
                    children: ":",
                }),
        ],
    });
}
let m = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, c.A)(o()(t).toDate(), f);
    if (null == i) return null;
    let { days: s, hours: p, minutes: _, seconds: m } = i,
        g = [
            {
                unitValue: s,
                unitType: "days",
            },
            {
                unitValue: p,
                unitType: "hours",
            },
            {
                unitValue: _,
                unitType: "minutes",
            },
            {
                unitValue: m,
                unitType: "seconds",
            },
        ];
    return (0, r.jsxs)("div", {
        className: a()(d.Xl, n),
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: u.intl.string(u.t["/ARFVE"]),
            }),
            (0, r.jsx)("div", {
                className: d.$R,
                children: g.map((e, t) => h(e, t === g.length - 1)),
            }),
        ],
    });
};
