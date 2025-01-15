n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(921801),
    a = n(726985),
    l = n(388032),
    o = n(614650);
function c(e) {
    let { className: t, currentUser: n, handleDisableAccount: c, handleDeleteAccount: d } = e,
        u = n.isClaimed();
    return (0, i.jsx)(r.F, {
        setting: a.s6.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, i.jsxs)(s.FormSection, {
            className: t,
            title: l.intl.string(l.t.ZKsIkp),
            children: [
                (0, i.jsx)(s.FormText, {
                    className: o.description,
                    type: s.FormText.Types.DESCRIPTION,
                    children: u ? l.intl.string(l.t.TIh3Ym) : l.intl.string(l.t.czsGAw)
                }),
                (0, i.jsxs)('div', {
                    className: o.buttonContainer,
                    children: [
                        u
                            ? (0, i.jsx)(s.Button, {
                                  className: o.disableButton,
                                  look: s.ButtonLooks.FILLED,
                                  color: s.ButtonColors.RED,
                                  size: s.ButtonSizes.SMALL,
                                  onClick: c,
                                  children: l.intl.string(l.t.jf5GGR)
                              })
                            : null,
                        (0, i.jsx)(r.F, {
                            setting: a.s6.ACCOUNT_DELETE_ACCOUNT,
                            children: (0, i.jsx)(s.Button, {
                                look: s.ButtonLooks.OUTLINED,
                                color: s.ButtonColors.RED,
                                size: s.ButtonSizes.SMALL,
                                onClick: d,
                                children: l.intl.string(l.t['8lQ2ra'])
                            })
                        })
                    ]
                })
            ]
        })
    });
}
