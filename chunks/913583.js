n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(990547),
    s = n(481060),
    l = n(213609),
    o = n(388905),
    a = n(760213),
    c = n(388032),
    d = n(422070);
function u(e) {
    let { onDismiss: t } = e;
    return (
        (0, l.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
        }),
        (0, i.jsxs)(o.ZP, {
            className: d.chooseAccountAuthBox,
            children: [
                (0, i.jsx)(o.Dx, { children: c.intl.string(c.t['bVbB6+']) }),
                (0, i.jsx)(s.Text, {
                    className: d.chooseAccountHelpText,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: c.intl.string(c.t['0M5fNz'])
                }),
                (0, i.jsx)(a.Z, {
                    actionText: c.intl.string(c.t['DSN+h4']),
                    onAction: (e) => {
                        e === a.W.LOGIN_REQUIRED && t();
                    }
                }),
                (0, i.jsx)('div', {
                    className: d.actions,
                    children: (0, i.jsx)(s.Button, {
                        className: d.__invalid_chooseAccountButton,
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.PRIMARY,
                        onClick: t,
                        size: s.Button.Sizes.MEDIUM,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: c.intl.string(c.t['9g2mqa'])
                        })
                    })
                })
            ]
        })
    );
}
