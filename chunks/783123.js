s.d(i, { A: () => n });
var a = s(627968),
    e = s(993401),
    r = s(375708);
function n(t) {
    let { isBlocked: i, onClick: s, size: n = "sm" } = t;
    return (0, a.jsx)(e.FD, {
        size: n,
        action: i ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        text: r.intl.string(r.t["UJKH/l"]),
        variant: "primary",
        autoFocus: !0,
        fullWidth: !1,
        onClick: s,
    });
}
