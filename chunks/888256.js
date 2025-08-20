n.d(t, { Z: () => c }), n(953529);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(921801),
    o = n(726985),
    s = n(388032),
    l = n(543879);
function c(e) {
    let { className: t, currentUser: n, disabled: c, handleDisableAccount: u, handleDeleteAccount: d } = e,
        f = n.isClaimed();
    return (0, r.jsx)(a.F, {
        setting: o.s6.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, r.jsxs)(i.hjN, {
            className: t,
            title: s.intl.string(s.t.ZKsIkp),
            children: [
                (0, r.jsx)(i.R94, {
                    className: l.description,
                    type: i.R94.Types.DESCRIPTION,
                    children: f ? s.intl.string(s.t.TIh3Ym) : s.intl.string(s.t.czsGAw),
                }),
                (0, r.jsxs)(i.hE2, {
                    size: "sm",
                    className: l.buttonContainer,
                    children: [
                        f
                            ? (0, r.jsx)(i.zxk, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  text: s.intl.string(s.t.jf5GGR),
                                  disabled: c,
                                  onClick: u,
                              })
                            : null,
                        (0, r.jsx)(a.F, {
                            setting: o.s6.ACCOUNT_DELETE_ACCOUNT,
                            children: (0, r.jsx)(i.zxk, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: s.intl.string(s.t["8lQ2ra"]),
                                disabled: c,
                                onClick: d,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
