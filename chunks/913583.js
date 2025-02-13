n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(990547),
    l = n(481060),
    a = n(213609),
    o = n(388905),
    s = n(760213),
    c = n(388032),
    d = n(224299);
function u(e) {
    let { onDismiss: t } = e;
    return (
        (0, a.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
        }),
        (0, i.jsxs)(o.ZP, {
            className: d.chooseAccountAuthBox,
            children: [
                (0, i.jsx)(o.Dx, { children: c.intl.string(c.t['bVbB6+']) }),
                (0, i.jsx)(l.Text, {
                    className: d.chooseAccountHelpText,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: c.intl.string(c.t['0M5fNz'])
                }),
                (0, i.jsx)(s.Z, {
                    actionText: c.intl.string(c.t['DSN+h4']),
                    onAction: (e) => {
                        e === s.W.LOGIN_REQUIRED && t();
                    }
                }),
                (0, i.jsx)('div', {
                    className: d.actions,
                    children: (0, i.jsx)(l.zxk, {
                        className: d.__invalid_chooseAccountButton,
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: t,
                        size: l.zxk.Sizes.MEDIUM,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: c.intl.string(c.t['9g2mqa'])
                        })
                    })
                })
            ]
        })
    );
}
