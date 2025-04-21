n.d(t, { Z: () => s });
var r = n(200651),
    i = n(481060),
    a = n(475413),
    o = n(388032);
function s(e) {
    let { isBlocked: t, onClick: n, size: s = i.PhG.SMALL } = e;
    return (0, r.jsx)(a.tG, {
        size: s,
        action: t ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
        text: o.intl.string(o.t['UJKH/v']),
        autoFocus: !0,
        fullWidth: !1,
        onClick: n
    });
}
