n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    s = n.n(l),
    a = n(481060),
    o = n(600164),
    r = n(565138),
    c = n(703656),
    d = n(388032),
    u = n(941007);
function m(e) {
    let { directoryGuildName: t, guildToAdd: n, isExistingGuildFlow: l, onClose: m } = e;
    return (
        s()(null != n, 'Missing guild in Hub add guild confirmation'),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.ModalHeader, {
                    direction: o.Z.Direction.VERTICAL,
                    className: u.header,
                    separator: !1,
                    children: [
                        null != m &&
                            (0, i.jsx)(a.ModalCloseButton, {
                                className: u.closeButton,
                                onClick: m
                            }),
                        (0, i.jsx)(r.Z, {
                            guild: n,
                            size: r.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, i.jsx)(a.Heading, {
                            className: u.title,
                            variant: 'heading-xl/semibold',
                            children: d.intl.string(d.t.CueiPT)
                        }),
                        (0, i.jsx)(a.Text, {
                            className: u.__invalid_subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: l ? d.intl.formatToPlainString(d.t.R7Pqn5, { guildName: t }) : d.intl.formatToPlainString(d.t.eIxPSk, { guildName: t })
                        })
                    ]
                }),
                (0, i.jsx)(a.ModalFooter, {
                    className: u.buttonRow,
                    children: l
                        ? (0, i.jsx)(a.Button, {
                              className: u.addConfirmButton,
                              color: a.Button.Colors.BRAND,
                              onClick: m,
                              children: d.intl.string(d.t['X0WK+/'])
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.Button, {
                                      className: u.createSecondaryButton,
                                      color: a.Button.Colors.PRIMARY,
                                      onClick: m,
                                      children: d.intl.string(d.t['X/VABg'])
                                  }),
                                  (0, i.jsx)(a.Button, {
                                      className: u.createConfirmButton,
                                      color: a.Button.Colors.BRAND,
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
