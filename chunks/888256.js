n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(921801),
    a = n(726985),
    l = n(388032),
    o = n(614650);
function c(e) {
    let { className: t, currentUser: n, handleDisableAccount: c, handleDeleteAccount: d } = e,
        u = n.isClaimed();
    return (0, i.jsx)(s.F, {
        setting: a.s6.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, i.jsxs)(r.FormSection, {
            className: t,
            title: l.intl.string(l.t.ZKsIkp),
            children: [
                (0, i.jsx)(r.FormText, {
                    className: o.description,
                    type: r.FormText.Types.DESCRIPTION,
                    children: u ? l.intl.string(l.t.TIh3Ym) : l.intl.string(l.t.czsGAw)
                }),
                (0, i.jsxs)('div', {
                    className: o.buttonContainer,
                    children: [
                        u
                            ? (0, i.jsx)(r.Button, {
                                  className: o.disableButton,
                                  look: r.ButtonLooks.FILLED,
                                  color: r.ButtonColors.RED,
                                  size: r.ButtonSizes.SMALL,
                                  onClick: c,
                                  children: l.intl.string(l.t.jf5GGR)
                              })
                            : null,
                        (0, i.jsx)(s.F, {
                            setting: a.s6.ACCOUNT_DELETE_ACCOUNT,
                            children: (0, i.jsx)(r.Button, {
                                look: r.ButtonLooks.OUTLINED,
                                color: r.ButtonColors.RED,
                                size: r.ButtonSizes.SMALL,
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
