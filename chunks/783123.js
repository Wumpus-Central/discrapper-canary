var e = s(477900),
    n = s(993401),
    a = s(792996);
s.d(
    i,
    {},
    {
        A: function (t) {
            let { isBlocked: i, onClick: s, size: r = "sm" } = t;
            return (0, e.jsx)(n.FD, {
                size: r,
                action: i ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                text: a.intl.string(a.t["UJKH/l"]),
                variant: "primary",
                fullWidth: !1,
                onClick: s,
            });
        },
    },
);
