s.d(i, { A: () => n });
var e = s(477900),
    a = s(993401),
    r = s(375708);
function n(t) {
    let { isBlocked: i, onClick: s, size: n = "sm" } = t;
    return (0, e.jsx)(a.FD, {
        size: n,
        action: i ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        text: r.intl.string(r.t["UJKH/l"]),
        variant: "primary",
        fullWidth: !1,
        onClick: s,
    });
}
