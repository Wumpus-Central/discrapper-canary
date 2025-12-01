n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(921801),
    s = n(996073),
    l = n(526761),
    c = n(726985),
    u = n(388032),
    d = n(543879);
function f(e) {
    let { currentUser: t, disabled: n, handleDisableAccount: f, handleDeleteAccount: p } = e,
        _ = t.isClaimed(),
        m = i.useRef(null);
    return (
        (0, s.Z)(m, l.KQ.AccountScrollPositions.DISABLE_ACCOUNT),
        (0, r.jsx)(o.F, {
            setting: c.s6.ACCOUNT_DISABLE_ACCOUNT,
            children: (0, r.jsx)("div", {
                ref: m,
                children: (0, r.jsx)(a.gNt, {
                    label: u.intl.string(u.t.ZKsIks),
                    description: _ ? u.intl.string(u.t.TIh3Yj) : u.intl.string(u.t.czsGA8),
                    children: (0, r.jsxs)(a.ButtonGroup, {
                        size: "sm",
                        className: d.buttonContainer,
                        children: [
                            _
                                ? (0, r.jsx)(a.Button, {
                                      variant: "critical-primary",
                                      size: "sm",
                                      text: u.intl.string(u.t.jf5GGb),
                                      disabled: n,
                                      onClick: f,
                                  })
                                : null,
                            (0, r.jsx)(o.F, {
                                setting: c.s6.ACCOUNT_DELETE_ACCOUNT,
                                children: (0, r.jsx)(a.Button, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: u.intl.string(u.t["8lQ2rR"]),
                                    disabled: n,
                                    onClick: p,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
