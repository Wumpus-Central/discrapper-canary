n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(990547),
    s = n(481060),
    l = n(213609),
    a = n(388905),
    o = n(760213),
    c = n(388032),
    u = n(367100);
function d(e) {
    let { onDismiss: t } = e;
    return (
        (0, l.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
        }),
        (0, r.jsxs)(a.ZP, {
            className: u.chooseAccountAuthBox,
            children: [
                (0, r.jsx)(a.Dx, { children: c.intl.string(c.t.bVbB63) }),
                (0, r.jsx)(s.Text, {
                    className: u.chooseAccountHelpText,
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: c.intl.string(c.t["0M5fN7"]),
                }),
                (0, r.jsx)(o.Z, {
                    actionText: c.intl.string(c.t["DSN+hw"]),
                    onAction: (e) => {
                        e === o.W.LOGIN_REQUIRED && t();
                    },
                }),
                (0, r.jsx)("div", {
                    className: u.actions,
                    children: (0, r.jsx)(s.Avr, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: c.intl.string(c.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
