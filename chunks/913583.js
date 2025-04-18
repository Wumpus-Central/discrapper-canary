n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(990547),
    s = n(481060),
    o = n(213609),
    l = n(388905),
    a = n(760213),
    c = n(388032),
    u = n(122605);
function d(e) {
    let { onDismiss: t } = e;
    return (
        (0, o.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
        }),
        (0, r.jsxs)(l.ZP, {
            className: u.chooseAccountAuthBox,
            children: [
                (0, r.jsx)(l.Dx, { children: c.NW.string(c.t['bVbB6+']) }),
                (0, r.jsx)(s.Text, {
                    className: u.chooseAccountHelpText,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: c.NW.string(c.t['0M5fNz'])
                }),
                (0, r.jsx)(a.Z, {
                    actionText: c.NW.string(c.t['DSN+h4']),
                    onAction: (e) => {
                        e === a.W.LOGIN_REQUIRED && t();
                    }
                }),
                (0, r.jsx)('div', {
                    className: u.actions,
                    children: (0, r.jsx)(s.zxk, {
                        className: u.__invalid_chooseAccountButton,
                        look: s.zxk.Looks.LINK,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: t,
                        size: s.zxk.Sizes.MEDIUM,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: c.NW.string(c.t['9g2mqa'])
                        })
                    })
                })
            ]
        })
    );
}
