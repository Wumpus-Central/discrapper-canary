n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(481060),
    s = n(213609),
    o = n(388905),
    a = n(760213),
    c = n(388032),
    u = n(122605);
function d(e) {
    let { onDismiss: t } = e;
    return (
        (0, s.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
        }),
        (0, r.jsxs)(o.ZP, {
            className: u.chooseAccountAuthBox,
            children: [
                (0, r.jsx)(o.Dx, { children: c.intl.string(c.t['bVbB6+']) }),
                (0, r.jsx)(l.Text, {
                    className: u.chooseAccountHelpText,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: c.intl.string(c.t['0M5fNz'])
                }),
                (0, r.jsx)(a.Z, {
                    actionText: c.intl.string(c.t['DSN+h4']),
                    onAction: (e) => {
                        e === a.W.LOGIN_REQUIRED && t();
                    }
                }),
                (0, r.jsx)('div', {
                    className: u.actions,
                    children: (0, r.jsx)(l.zxk, {
                        className: u.__invalid_chooseAccountButton,
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: t,
                        size: l.zxk.Sizes.MEDIUM,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: c.intl.string(c.t['9g2mqa'])
                        })
                    })
                })
            ]
        })
    );
}
