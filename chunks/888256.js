n.d(t, { Z: () => c });
var r = n(951288),
    i = n(481060),
    a = n(921801),
    o = n(726985),
    s = n(388032),
    l = n(543879);
function c(e) {
    let { currentUser: t, disabled: n, handleDisableAccount: c, handleDeleteAccount: u } = e,
        d = t.isClaimed();
    return (0, r.jsx)(a.F, {
        setting: o.s6.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, r.jsx)(i.gNt, {
            label: s.intl.string(s.t.ZKsIkp),
            description: d ? s.intl.string(s.t.TIh3Ym) : s.intl.string(s.t.czsGAw),
            children: (0, r.jsxs)(i.ButtonGroup, {
                size: "sm",
                className: l.buttonContainer,
                children: [
                    d
                        ? (0, r.jsx)(i.Button, {
                              variant: "critical-primary",
                              size: "sm",
                              text: s.intl.string(s.t.jf5GGR),
                              disabled: n,
                              onClick: c,
                          })
                        : null,
                    (0, r.jsx)(a.F, {
                        setting: o.s6.ACCOUNT_DELETE_ACCOUNT,
                        children: (0, r.jsx)(i.Button, {
                            variant: "critical-secondary",
                            size: "sm",
                            text: s.intl.string(s.t["8lQ2ra"]),
                            disabled: n,
                            onClick: u,
                        }),
                    }),
                ],
            }),
        }),
    });
}
