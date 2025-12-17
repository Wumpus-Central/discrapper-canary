n.d(t, { Z: () => f });
var i = n(54381);
n(473749);
var a = n(512722),
    l = n.n(a),
    r = n(793030),
    s = n(481060),
    o = n(565138),
    c = n(703656),
    d = n(388032),
    u = n(788175);
function f(e) {
    let { directoryGuildName: t, guildToAdd: n, isExistingGuildFlow: a, onClose: f } = e;
    return (
        l()(null != n, "Missing guild in Hub add guild confirmation"),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.fef, {
                    children: (0, i.jsxs)("div", {
                        className: u.content,
                        children: [
                            (0, i.jsx)(o.Z, {
                                guild: n,
                                size: o.Z.Sizes.XLARGE,
                                active: !0,
                            }),
                            (0, i.jsx)(s.Heading, {
                                className: u.title,
                                variant: "heading-xl/semibold",
                                children: d.intl.string(d.t.CueiPY),
                            }),
                            (0, i.jsx)(s.Text, {
                                color: "text-default",
                                variant: "text-md/normal",
                                children: a
                                    ? d.intl.formatToPlainString(d.t.R7Pqn5, { guildName: t })
                                    : d.intl.formatToPlainString(d.t.eIxPSv, { guildName: t }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(r.Go$, {
                    actionsFullWidth: !0,
                    actions: a
                        ? [
                              {
                                  text: d.intl.string(d.t["X0WK+6"]),
                                  variant: "primary",
                                  onClick: f,
                              },
                          ]
                        : [
                              {
                                  text: d.intl.string(d.t["X/VABv"]),
                                  variant: "secondary",
                                  onClick: f,
                              },
                              {
                                  text: d.intl.string(d.t.DymAQt),
                                  variant: "primary",
                                  onClick: () => {
                                      (0, c.XU)(n.id), null == f || f();
                                  },
                              },
                          ],
                }),
            ],
        })
    );
}
