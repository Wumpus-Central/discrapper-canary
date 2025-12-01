n.d(t, { Z: () => m });
var i = n(54381);
n(473749);
var l = n(512722),
    r = n.n(l),
    s = n(793030),
    a = n(481060),
    o = n(565138),
    c = n(703656),
    d = n(388032),
    u = n(475608);
function m(e) {
    let { directoryGuildName: t, guildToAdd: n, isExistingGuildFlow: l, onClose: m } = e;
    return (
        r()(null != n, "Missing guild in Hub add guild confirmation"),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.fef, {
                    children: (0, i.jsxs)("div", {
                        className: u.content,
                        children: [
                            (0, i.jsx)(o.Z, {
                                guild: n,
                                size: o.Z.Sizes.XLARGE,
                                active: !0,
                            }),
                            (0, i.jsx)(a.Heading, {
                                className: u.title,
                                variant: "heading-xl/semibold",
                                children: d.intl.string(d.t.CueiPY),
                            }),
                            (0, i.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: l
                                    ? d.intl.formatToPlainString(d.t.R7Pqn5, { guildName: t })
                                    : d.intl.formatToPlainString(d.t.eIxPSv, { guildName: t }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(s.Go$, {
                    actionsFullWidth: !0,
                    actions: l
                        ? [
                              {
                                  text: d.intl.string(d.t["X0WK+6"]),
                                  variant: "primary",
                                  onClick: m,
                              },
                          ]
                        : [
                              {
                                  text: d.intl.string(d.t["X/VABv"]),
                                  variant: "secondary",
                                  onClick: m,
                              },
                              {
                                  text: d.intl.string(d.t.DymAQt),
                                  variant: "primary",
                                  onClick: () => {
                                      (0, c.XU)(n.id), null == m || m();
                                  },
                              },
                          ],
                }),
            ],
        })
    );
}
