n.d(t, { Z: () => c }), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(921801),
    a = n(726985),
    l = n(388032),
    o = n(843120);
function c(e) {
    let { className: t, currentUser: n, handleDisableAccount: c, handleDeleteAccount: d } = e,
        u = n.isClaimed();
    return (0, r.jsx)(s.F, {
        setting: a.s6.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, r.jsxs)(i.hjN, {
            className: t,
            title: l.NW.string(l.t.ZKsIkp),
            children: [
                (0, r.jsx)(i.R94, {
                    className: o.description,
                    type: i.R94.Types.DESCRIPTION,
                    children: u ? l.NW.string(l.t.TIh3Ym) : l.NW.string(l.t.czsGAw)
                }),
                (0, r.jsxs)('div', {
                    className: o.buttonContainer,
                    children: [
                        u
                            ? (0, r.jsx)(i.zxk, {
                                  className: o.disableButton,
                                  look: i.iLD.FILLED,
                                  color: i.Ttl.RED,
                                  size: i.PhG.SMALL,
                                  onClick: c,
                                  children: l.NW.string(l.t.jf5GGR)
                              })
                            : null,
                        (0, r.jsx)(s.F, {
                            setting: a.s6.ACCOUNT_DELETE_ACCOUNT,
                            children: (0, r.jsx)(i.zxk, {
                                look: i.iLD.OUTLINED,
                                color: i.Ttl.RED,
                                size: i.PhG.SMALL,
                                onClick: d,
                                children: l.NW.string(l.t['8lQ2ra'])
                            })
                        })
                    ]
                })
            ]
        })
    });
}
