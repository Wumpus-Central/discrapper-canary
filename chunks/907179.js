n.d(t, { Z: () => o });
var r = n(54381),
    i = n(732380),
    a = n(388032);
function o(e) {
    let { isBlocked: t, onClick: n, size: o = "sm" } = e;
    return (0, r.jsx)(i.O1, {
        size: o,
        action: t ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        text: a.intl.string(a.t["UJKH/l"]),
        variant: "primary",
        autoFocus: !0,
        fullWidth: !1,
        onClick: n,
    });
}
