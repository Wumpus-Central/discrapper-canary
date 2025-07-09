n.d(t, { Z: () => x });
var i = n(255367);
n(73800);
var s = n(512722),
    l = n.n(s),
    a = n(755721),
    r = n(481060),
    o = n(600164),
    c = n(565138),
    d = n(703656),
    u = n(388032),
    m = n(377957);
function x(e) {
    let { directoryGuildName: t, guildToAdd: n, isExistingGuildFlow: s, onClose: x } = e;
    return (
        l()(null != n, 'Missing guild in Hub add guild confirmation'),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(r.xBx, {
                    direction: o.Z.Direction.VERTICAL,
                    className: m.header,
                    separator: !1,
                    children: [
                        null != x &&
                            (0, i.jsx)(r.olH, {
                                className: m.closeButton,
                                onClick: x
                            }),
                        (0, i.jsx)(c.Z, {
                            guild: n,
                            size: c.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, i.jsx)(r.X6q, {
                            className: m.title,
                            variant: 'heading-xl/semibold',
                            children: u.intl.string(u.t.CueiPT)
                        }),
                        (0, i.jsx)(r.Text, {
                            className: m.__invalid_subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: s ? u.intl.formatToPlainString(u.t.R7Pqn5, { guildName: t }) : u.intl.formatToPlainString(u.t.eIxPSk, { guildName: t })
                        })
                    ]
                }),
                (0, i.jsx)(r.mzw, {
                    className: m.buttonRow,
                    children: s
                        ? (0, i.jsx)(a.zx, {
                              className: m.addConfirmButton,
                              color: a.zx.Colors.BRAND,
                              onClick: x,
                              children: u.intl.string(u.t['X0WK+/'])
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.zx, {
                                      className: m.createSecondaryButton,
                                      color: a.zx.Colors.PRIMARY,
                                      onClick: x,
                                      children: u.intl.string(u.t['X/VABg'])
                                  }),
                                  (0, i.jsx)(a.zx, {
                                      className: m.createConfirmButton,
                                      color: a.zx.Colors.BRAND,
                                      onClick: () => {
                                          ((0, d.XU)(n.id), null == x || x());
                                      },
                                      children: u.intl.string(u.t.DymAQk)
                                  })
                              ]
                          })
                })
            ]
        })
    );
}
