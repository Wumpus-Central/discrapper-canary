n.d(t, { A: () => a });
var i = n(627968),
    l = n(993401),
    s = n(985018);
function a(e) {
    let { isBlocked: t, onClick: n, size: a = "sm" } = e;
    return (0, i.jsx)(l.FD, {
        size: a,
        action: t ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        text: s.intl.string(s.t["UJKH/l"]),
        variant: "primary",
        autoFocus: !0,
        fullWidth: !1,
        onClick: n,
    });
}
