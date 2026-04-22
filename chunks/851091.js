l.d(t, { A: () => C });
var i = l(627968);
l(64700);
var s = l(284009),
    a = l.n(s),
    n = l(430993),
    r = l(696208),
    c = l(534514),
    d = l(834730),
    o = l(263063),
    u = l(976860),
    m = l(985018),
    x = l(291980);
function C(e) {
    let { directoryGuildName: t, guildToAdd: l, isExistingGuildFlow: s, onClose: C } = e;
    return (
        a()(null != l, "Missing guild in Hub add guild confirmation"),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(n.c, {
                    children: (0, i.jsxs)("div", {
                        className: x.Qs,
                        children: [
                            (0, i.jsx)(o.Ay, { guild: l, size: o.Ay.Sizes.XLARGE, active: !0 }),
                            (0, i.jsx)(c.D, {
                                className: x.DD,
                                variant: "heading-xl/semibold",
                                children: m.intl.string(m.t.CueiPY),
                            }),
                            (0, i.jsx)(d.E, {
                                color: "text-default",
                                variant: "text-md/normal",
                                children: s
                                    ? m.intl.formatToPlainString(m.t.R7Pqn5, { guildName: t })
                                    : m.intl.formatToPlainString(m.t.eIxPSv, { guildName: t }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(r.H, {
                    actionsFullWidth: !0,
                    actions: s
                        ? [{ text: m.intl.string(m.t["X0WK+6"]), variant: "primary", onClick: C }]
                        : [
                              { text: m.intl.string(m.t["X/VABv"]), variant: "secondary", onClick: C },
                              {
                                  text: m.intl.string(m.t.DymAQt),
                                  variant: "primary",
                                  onClick: () => {
                                      (0, u.uh)(l.id), C?.();
                                  },
                              },
                          ],
                }),
            ],
        })
    );
}
