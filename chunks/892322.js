n.d(t, { Z: () => m });
var s = n(200651);
n(192379);
var i = n(512722),
    r = n.n(i),
    l = n(481060),
    a = n(600164),
    o = n(565138),
    c = n(703656),
    d = n(388032),
    u = n(377957);
function m(e) {
    let { directoryGuildName: t, guildToAdd: n, isExistingGuildFlow: i, onClose: m } = e;
    return (
        r()(null != n, 'Missing guild in Hub add guild confirmation'),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(l.xBx, {
                    direction: a.Z.Direction.VERTICAL,
                    className: u.header,
                    separator: !1,
                    children: [
                        null != m &&
                            (0, s.jsx)(l.olH, {
                                className: u.closeButton,
                                onClick: m
                            }),
                        (0, s.jsx)(o.Z, {
                            guild: n,
                            size: o.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, s.jsx)(l.X6q, {
                            className: u.title,
                            variant: 'heading-xl/semibold',
                            children: d.NW.string(d.t.CueiPT)
                        }),
                        (0, s.jsx)(l.Text, {
                            className: u.__invalid_subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: i ? d.NW.formatToPlainString(d.t.R7Pqn5, { guildName: t }) : d.NW.formatToPlainString(d.t.eIxPSk, { guildName: t })
                        })
                    ]
                }),
                (0, s.jsx)(l.mzw, {
                    className: u.buttonRow,
                    children: i
                        ? (0, s.jsx)(l.zxk, {
                              className: u.addConfirmButton,
                              color: l.zxk.Colors.BRAND,
                              onClick: m,
                              children: d.NW.string(d.t['X0WK+/'])
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(l.zxk, {
                                      className: u.createSecondaryButton,
                                      color: l.zxk.Colors.PRIMARY,
                                      onClick: m,
                                      children: d.NW.string(d.t['X/VABg'])
                                  }),
                                  (0, s.jsx)(l.zxk, {
                                      className: u.createConfirmButton,
                                      color: l.zxk.Colors.BRAND,
                                      onClick: () => {
                                          (0, c.XU)(n.id), null == m || m();
                                      },
                                      children: d.NW.string(d.t.DymAQk)
                                  })
                              ]
                          })
                })
            ]
        })
    );
}
