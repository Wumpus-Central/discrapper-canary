i.d(t, { Z: () => m });
var n = i(200651);
i(192379);
var s = i(512722),
    l = i.n(s),
    a = i(481060),
    r = i(600164),
    o = i(565138),
    c = i(703656),
    d = i(388032),
    u = i(977932);
function m(e) {
    let { directoryGuildName: t, guildToAdd: i, isExistingGuildFlow: s, onClose: m } = e;
    return (
        l()(null != i, 'Missing guild in Hub add guild confirmation'),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(a.xBx, {
                    direction: r.Z.Direction.VERTICAL,
                    className: u.header,
                    separator: !1,
                    children: [
                        null != m &&
                            (0, n.jsx)(a.olH, {
                                className: u.closeButton,
                                onClick: m
                            }),
                        (0, n.jsx)(o.Z, {
                            guild: i,
                            size: o.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, n.jsx)(a.X6q, {
                            className: u.title,
                            variant: 'heading-xl/semibold',
                            children: d.intl.string(d.t.CueiPT)
                        }),
                        (0, n.jsx)(a.Text, {
                            className: u.__invalid_subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: s ? d.intl.formatToPlainString(d.t.R7Pqn5, { guildName: t }) : d.intl.formatToPlainString(d.t.eIxPSk, { guildName: t })
                        })
                    ]
                }),
                (0, n.jsx)(a.mzw, {
                    className: u.buttonRow,
                    children: s
                        ? (0, n.jsx)(a.zxk, {
                              className: u.addConfirmButton,
                              color: a.zxk.Colors.BRAND,
                              onClick: m,
                              children: d.intl.string(d.t['X0WK+/'])
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(a.zxk, {
                                      className: u.createSecondaryButton,
                                      color: a.zxk.Colors.PRIMARY,
                                      onClick: m,
                                      children: d.intl.string(d.t['X/VABg'])
                                  }),
                                  (0, n.jsx)(a.zxk, {
                                      className: u.createConfirmButton,
                                      color: a.zxk.Colors.BRAND,
                                      onClick: () => {
                                          (0, c.XU)(i.id), null == m || m();
                                      },
                                      children: d.intl.string(d.t.DymAQk)
                                  })
                              ]
                          })
                })
            ]
        })
    );
}
