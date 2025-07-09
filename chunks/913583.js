n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(755721),
    s = n(481060),
    a = n(213609),
    o = n(388905),
    c = n(760213),
    u = n(388032),
    d = n(122605);
function h(e) {
    let { onDismiss: t } = e;
    return (
        (0, a.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
        }),
        (0, r.jsxs)(o.ZP, {
            className: d.chooseAccountAuthBox,
            children: [
                (0, r.jsx)(o.Dx, { children: u.intl.string(u.t['bVbB6+']) }),
                (0, r.jsx)(s.Text, {
                    className: d.chooseAccountHelpText,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: u.intl.string(u.t['0M5fNz'])
                }),
                (0, r.jsx)(c.Z, {
                    actionText: u.intl.string(u.t['DSN+h4']),
                    onAction: (e) => {
                        e === c.W.LOGIN_REQUIRED && t();
                    }
                }),
                (0, r.jsx)('div', {
                    className: d.actions,
                    children: (0, r.jsx)(l.zx, {
                        className: d.__invalid_chooseAccountButton,
                        look: l.zx.Looks.LINK,
                        color: l.zx.Colors.PRIMARY,
                        onClick: t,
                        size: l.zx.Sizes.MEDIUM,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: u.intl.string(u.t['9g2mqa'])
                        })
                    })
                })
            ]
        })
    );
}
