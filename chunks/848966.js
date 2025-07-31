n.d(t, { Z: () => f });
var r = n(37258),
    i = n(652853),
    a = n(347328),
    o = n(540440),
    s = n(553375),
    l = n(365583),
    c = n(582546),
    u = n(888317),
    d = n(228168),
    _ = n(388032);
function f(e) {
    let { onAction: t } = e,
        { themeType: n } = (0, i.z)(),
        f = (0, r.Z)({
            userId: e.user.id,
            section: d.oh.ACTIVITY,
            label: _.intl.string(_.t.pD1L1t),
            onAction: () => (null == t ? void 0 : t({ action: 'PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM' }))
        });
    return [n === d.lY.POPOUT ? f : null, (0, c.Z)(e), (0, s.ZP)(e), (0, s.uj)(e), (0, u.Z)(e), (0, l.Z)(e), (0, a.Z)(e), (0, o.B)(e)].filter((e) => null != e);
}
