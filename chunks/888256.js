n.d(t, { Z: () => c }), n(953529);
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(921801),
    l = n(726985),
    a = n(388032),
    o = n(843120);
function c(e) {
    let { className: t, currentUser: n, disabled: c, handleDisableAccount: d, handleDeleteAccount: u } = e,
        m = n.isClaimed();
    return (0, i.jsx)(s.F, {
        setting: l.s6.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, i.jsxs)(r.hjN, {
            className: t,
            title: a.intl.string(a.t.ZKsIkp),
            children: [
                (0, i.jsx)(r.R94, {
                    className: o.description,
                    type: r.R94.Types.DESCRIPTION,
                    children: m ? a.intl.string(a.t.TIh3Ym) : a.intl.string(a.t.czsGAw)
                }),
                (0, i.jsxs)('div', {
                    className: o.buttonContainer,
                    children: [
                        m
                            ? (0, i.jsx)(r.zxk, {
                                  className: o.disableButton,
                                  look: r.iLD.FILLED,
                                  color: r.Ttl.RED,
                                  size: r.PhG.SMALL,
                                  disabled: c,
                                  onClick: d,
                                  children: a.intl.string(a.t.jf5GGR)
                              })
                            : null,
                        (0, i.jsx)(s.F, {
                            setting: l.s6.ACCOUNT_DELETE_ACCOUNT,
                            children: (0, i.jsx)(r.zxk, {
                                look: r.iLD.OUTLINED,
                                color: r.Ttl.RED,
                                size: r.PhG.SMALL,
                                disabled: c,
                                onClick: u,
                                children: a.intl.string(a.t['8lQ2ra'])
                            })
                        })
                    ]
                })
            ]
        })
    });
}
