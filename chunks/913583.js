n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(481060),
    o = n(213609),
    s = n(388905),
    a = n(760213),
    c = n(388032),
    u = n(900804);
function d(e) {
    let { onDismiss: t } = e;
    return (
        (0, o.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
        }),
        (0, r.jsxs)(s.ZP, {
            className: u.chooseAccountAuthBox,
            children: [
                (0, r.jsx)(s.Dx, { children: c.intl.string(c.t["bVbB6+"]) }),
                (0, r.jsx)(l.Text, {
                    className: u.chooseAccountHelpText,
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: c.intl.string(c.t["0M5fNz"]),
                }),
                (0, r.jsx)(a.Z, {
                    actionText: c.intl.string(c.t["DSN+h4"]),
                    onAction: (e) => {
                        e === a.W.LOGIN_REQUIRED && t();
                    },
                }),
                (0, r.jsx)("div", {
                    className: u.actions,
                    children: (0, r.jsx)(l.Avr, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: c.intl.string(c.t["9g2mqa"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
