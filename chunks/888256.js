n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var s = n(481060),
    l = n(921801),
    r = n(726985),
    a = n(388032),
    o = n(306617);
function c(e) {
    let { className: t, currentUser: n, handleDisableAccount: c, handleDeleteAccount: d } = e,
        u = n.isClaimed();
    return (0, i.jsx)(l.F, {
        setting: r.s6.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, i.jsxs)(s.hjN, {
            className: t,
            title: a.intl.string(a.t.ZKsIkp),
            children: [
                (0, i.jsx)(s.R94, {
                    className: o.description,
                    type: s.R94.Types.DESCRIPTION,
                    children: u ? a.intl.string(a.t.TIh3Ym) : a.intl.string(a.t.czsGAw)
                }),
                (0, i.jsxs)('div', {
                    className: o.buttonContainer,
                    children: [
                        u
                            ? (0, i.jsx)(s.zxk, {
                                  className: o.disableButton,
                                  look: s.iLD.FILLED,
                                  color: s.Ttl.RED,
                                  size: s.PhG.SMALL,
                                  onClick: c,
                                  children: a.intl.string(a.t.jf5GGR)
                              })
                            : null,
                        (0, i.jsx)(l.F, {
                            setting: r.s6.ACCOUNT_DELETE_ACCOUNT,
                            children: (0, i.jsx)(s.zxk, {
                                look: s.iLD.OUTLINED,
                                color: s.Ttl.RED,
                                size: s.PhG.SMALL,
                                onClick: d,
                                children: a.intl.string(a.t['8lQ2ra'])
                            })
                        })
                    ]
                })
            ]
        })
    });
}
