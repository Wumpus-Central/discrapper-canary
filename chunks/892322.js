n.d(t, { Z: () => x });
var i = n(951288);
n(647438);
var l = n(512722),
    s = n.n(l),
    r = n(369585),
    a = n(103866),
    o = n(481060),
    c = n(565138),
    d = n(703656),
    u = n(388032),
    m = n(475608);
function x(e) {
    let { directoryGuildName: t, guildToAdd: n, isExistingGuildFlow: l, onClose: x } = e;
    return (
        s()(null != n, "Missing guild in Hub add guild confirmation"),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.f, {
                    children: (0, i.jsxs)("div", {
                        className: m.content,
                        children: [
                            (0, i.jsx)(c.Z, {
                                guild: n,
                                size: c.Z.Sizes.XLARGE,
                                active: !0,
                            }),
                            (0, i.jsx)(o.X6q, {
                                className: m.title,
                                variant: "heading-xl/semibold",
                                children: u.intl.string(u.t.CueiPT),
                            }),
                            (0, i.jsx)(o.Text, {
                                className: m.__invalid_subtitle,
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: l
                                    ? u.intl.formatToPlainString(u.t.R7Pqn5, { guildName: t })
                                    : u.intl.formatToPlainString(u.t.eIxPSk, { guildName: t }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(r.G, {
                    actionsFullWidth: !0,
                    actions: l
                        ? [
                              {
                                  text: u.intl.string(u.t["X0WK+/"]),
                                  variant: "primary",
                                  onClick: x,
                              },
                          ]
                        : [
                              {
                                  text: u.intl.string(u.t["X/VABg"]),
                                  variant: "secondary",
                                  onClick: x,
                              },
                              {
                                  text: u.intl.string(u.t.DymAQk),
                                  variant: "primary",
                                  onClick: () => {
                                      (0, d.XU)(n.id), null == x || x();
                                  },
                              },
                          ],
                }),
            ],
        })
    );
}
