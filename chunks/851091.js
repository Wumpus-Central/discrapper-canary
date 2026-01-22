n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(158954),
    r = n(397927),
    c = n(263063),
    d = n(976860),
    o = n(985018),
    u = n(100135);
function x(e) {
    let { directoryGuildName: t, guildToAdd: n, isExistingGuildFlow: i, onClose: x } = e;
    return (
        s()(null != n, "Missing guild in Hub add guild confirmation"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(a.cwr, {
                    children: (0, l.jsxs)("div", {
                        className: u.Qs,
                        children: [
                            (0, l.jsx)(c.A, {
                                guild: n,
                                size: c.A.Sizes.XLARGE,
                                active: !0,
                            }),
                            (0, l.jsx)(r.Heading, {
                                className: u.DD,
                                variant: "heading-xl/semibold",
                                children: o.intl.string(o.t.CueiPY),
                            }),
                            (0, l.jsx)(r.Text, {
                                color: "text-default",
                                variant: "text-md/normal",
                                children: i
                                    ? o.intl.formatToPlainString(o.t.R7Pqn5, { guildName: t })
                                    : o.intl.formatToPlainString(o.t.eIxPSv, { guildName: t }),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(a.H7u, {
                    actionsFullWidth: !0,
                    actions: i
                        ? [
                              {
                                  text: o.intl.string(o.t["X0WK+6"]),
                                  variant: "primary",
                                  onClick: x,
                              },
                          ]
                        : [
                              {
                                  text: o.intl.string(o.t["X/VABv"]),
                                  variant: "secondary",
                                  onClick: x,
                              },
                              {
                                  text: o.intl.string(o.t.DymAQt),
                                  variant: "primary",
                                  onClick: () => {
                                      (0, d.uh)(n.id), null == x || x();
                                  },
                              },
                          ],
                }),
            ],
        })
    );
}
