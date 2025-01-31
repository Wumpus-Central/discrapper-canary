n.d(t, { Z: () => o });
var i = n(200651),
    r = n(481060),
    a = n(475413),
    s = n(388032);
function o(e) {
    let { isBlocked: t, onClick: n, size: o = r.PhG.SMALL } = e;
    return (0, i.jsx)(a.tG, {
        size: o,
        action: t ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
        text: s.intl.string(s.t['UJKH/v']),
        autoFocus: !0,
        fullWidth: !1,
        onClick: n
    });
}
