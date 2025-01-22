r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651),
    a = r(481060),
    o = r(475413),
    s = r(388032);
function l(e) {
    let { isBlocked: n, onClick: r, size: l = a.ButtonSizes.SMALL } = e;
    return (0, i.jsx)(o.tG, {
        size: l,
        action: n ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
        text: s.intl.string(s.t['UJKH/v']),
        autoFocus: !0,
        fullWidth: !1,
        onClick: r
    });
}
