(n.d(t, { Z: () => c }), n(953529));
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(921801),
    a = n(726985),
    l = n(388032),
    o = n(843120);
function c(e) {
    let { className: t, currentUser: n, disabled: c, handleDisableAccount: d, handleDeleteAccount: u } = e,
        m = n.isClaimed();
    return (0, i.jsx)(s.F, {
        setting: a.s6.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, i.jsxs)(r.hjN, {
            className: t,
            title: l.intl.string(l.t.ZKsIkp),
            children: [
                (0, i.jsx)(r.R94, {
                    className: o.description,
                    type: r.R94.Types.DESCRIPTION,
                    children: m ? l.intl.string(l.t.TIh3Ym) : l.intl.string(l.t.czsGAw)
                }),
                (0, i.jsxs)(r.hE2, {
                    size: 'sm',
                    className: o.buttonContainer,
                    children: [
                        m
                            ? (0, i.jsx)(r.zxk, {
                                  variant: 'critical-primary',
                                  size: 'sm',
                                  text: l.intl.string(l.t.jf5GGR),
                                  disabled: c,
                                  onClick: d
                              })
                            : null,
                        (0, i.jsx)(s.F, {
                            setting: a.s6.ACCOUNT_DELETE_ACCOUNT,
                            children: (0, i.jsx)(r.zxk, {
                                variant: 'critical-secondary',
                                size: 'sm',
                                text: l.intl.string(l.t['8lQ2ra']),
                                disabled: c,
                                onClick: u
                            })
                        })
                    ]
                })
            ]
        })
    });
}
