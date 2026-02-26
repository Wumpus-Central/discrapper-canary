l.d(t, { A: () => x });
var i = l(627968);
l(64700);
var s = l(284009),
    a = l.n(s),
    n = l(158954),
    r = l(397927),
    c = l(263063),
    d = l(976860),
    o = l(985018),
    u = l(910925);
function x(e) {
    let { directoryGuildName: t, guildToAdd: l, isExistingGuildFlow: s, onClose: x } = e;
    return (
        a()(null != l, "Missing guild in Hub add guild confirmation"),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(n.cwr, {
                    children: (0, i.jsxs)("div", {
                        className: u.Qs,
                        children: [
                            (0, i.jsx)(c.Ay, { guild: l, size: c.Ay.Sizes.XLARGE, active: !0 }),
                            (0, i.jsx)(r.Heading, {
                                className: u.DD,
                                variant: "heading-xl/semibold",
                                children: o.intl.string(o.t.CueiPY),
                            }),
                            (0, i.jsx)(r.Text, {
                                color: "text-default",
                                variant: "text-md/normal",
                                children: s
                                    ? o.intl.formatToPlainString(o.t.R7Pqn5, { guildName: t })
                                    : o.intl.formatToPlainString(o.t.eIxPSv, { guildName: t }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(n.H7u, {
                    actionsFullWidth: !0,
                    actions: s
                        ? [{ text: o.intl.string(o.t["X0WK+6"]), variant: "primary", onClick: x }]
                        : [
                              { text: o.intl.string(o.t["X/VABv"]), variant: "secondary", onClick: x },
                              {
                                  text: o.intl.string(o.t.DymAQt),
                                  variant: "primary",
                                  onClick: () => {
                                      (0, d.uh)(l.id), x?.();
                                  },
                              },
                          ],
                }),
            ],
        })
    );
}
