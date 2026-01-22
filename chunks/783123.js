n.d(t, {
    A: () => s,
});
var r = n(627968),
    i = n(993401),
    a = n(985018);

function s(e) {
    let { isBlocked: t, onClick: n, size: s = "sm" } = e;
    return (0, r.jsx)(i.FD, {
        size: s,
        action: t ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        text: a.intl.string(a.t["UJKH/l"]),
        variant: "primary",
        autoFocus: !0,
        fullWidth: !1,
        onClick: n,
    });
}
