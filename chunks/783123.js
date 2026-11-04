var a = s(477900),
    e = s(993401),
    r = s(792996);
s.d(
    i,
    {},
    {
        A: function (t) {
            let { isBlocked: i, onClick: s, size: n = "sm" } = t;
            return (0, a.jsx)(e.FD, {
                size: n,
                action: i ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                text: r.intl.string(r.t["UJKH/l"]),
                variant: "primary",
                fullWidth: !1,
                onClick: s,
            });
        },
    },
);
