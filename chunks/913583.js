n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(990547),
    s = n(481060),
    a = n(213609),
    l = n(388905),
    o = n(760213),
    c = n(388032),
    u = n(167601);
function d(e) {
    let { onDismiss: t } = e;
    return (
        (0, a.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
        }),
        (0, r.jsxs)(l.ZP, {
            className: u.chooseAccountAuthBox,
            children: [
                (0, r.jsx)(l.Dx, { children: c.intl.string(c.t.bVbB63) }),
                (0, r.jsx)(s.Text, {
                    className: u.chooseAccountHelpText,
                    variant: "text-md/normal",
                    color: "text-default",
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
