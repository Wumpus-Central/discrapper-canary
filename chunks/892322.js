n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(512722),
    l = n.n(s),
    r = n(481060),
    a = n(600164),
    o = n(565138),
    c = n(703656),
    d = n(388032),
    u = n(377957);
function m(e) {
    let { directoryGuildName: t, guildToAdd: n, isExistingGuildFlow: s, onClose: m } = e;
    return (
        l()(null != n, 'Missing guild in Hub add guild confirmation'),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(r.xBx, {
                    direction: a.Z.Direction.VERTICAL,
                    className: u.header,
                    separator: !1,
                    children: [
                        null != m &&
                            (0, i.jsx)(r.olH, {
                                className: u.closeButton,
                                onClick: m
                            }),
                        (0, i.jsx)(o.Z, {
                            guild: n,
                            size: o.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, i.jsx)(r.X6q, {
                            className: u.title,
                            variant: 'heading-xl/semibold',
                            children: d.intl.string(d.t.CueiPT)
                        }),
                        (0, i.jsx)(r.Text, {
                            className: u.__invalid_subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: s ? d.intl.formatToPlainString(d.t.R7Pqn5, { guildName: t }) : d.intl.formatToPlainString(d.t.eIxPSk, { guildName: t })
                        })
                    ]
                }),
                (0, i.jsx)(r.mzw, {
                    className: u.buttonRow,
                    children: s
                        ? (0, i.jsx)(r.zxk, {
                              className: u.addConfirmButton,
                              color: r.zxk.Colors.BRAND,
                              onClick: m,
                              children: d.intl.string(d.t['X0WK+/'])
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(r.zxk, {
                                      className: u.createSecondaryButton,
                                      color: r.zxk.Colors.PRIMARY,
                                      onClick: m,
                                      children: d.intl.string(d.t['X/VABg'])
                                  }),
                                  (0, i.jsx)(r.zxk, {
                                      className: u.createConfirmButton,
                                      color: r.zxk.Colors.BRAND,
                                      onClick: () => {
                                          (0, c.XU)(n.id), null == m || m();
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
