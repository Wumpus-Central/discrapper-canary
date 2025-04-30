n.d(t, { Z: () => c }), n(953529);
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(921801),
    l = n(726985),
    a = n(388032),
    o = n(843120);
function c(e) {
    let { className: t, currentUser: n, handleDisableAccount: c, handleDeleteAccount: d } = e,
        u = n.isClaimed();
    return (0, i.jsx)(s.F, {
        setting: l.s6.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, i.jsxs)(r.hjN, {
            className: t,
            title: a.intl.string(a.t.ZKsIkp),
            children: [
                (0, i.jsx)(r.R94, {
                    className: o.description,
                    type: r.R94.Types.DESCRIPTION,
                    children: u ? a.intl.string(a.t.TIh3Ym) : a.intl.string(a.t.czsGAw)
                }),
                (0, i.jsxs)('div', {
                    className: o.buttonContainer,
                    children: [
                        u
                            ? (0, i.jsx)(r.zxk, {
                                  className: o.disableButton,
                                  look: r.iLD.FILLED,
                                  color: r.Ttl.RED,
                                  size: r.PhG.SMALL,
                                  onClick: c,
                                  children: a.intl.string(a.t.jf5GGR)
                              })
                            : null,
                        (0, i.jsx)(s.F, {
                            setting: l.s6.ACCOUNT_DELETE_ACCOUNT,
                            children: (0, i.jsx)(r.zxk, {
                                look: r.iLD.OUTLINED,
                                color: r.Ttl.RED,
                                size: r.PhG.SMALL,
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
