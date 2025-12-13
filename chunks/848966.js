n.d(t, { Z: () => _ });
var r = n(37258),
    i = n(652853),
    a = n(347328),
    o = n(540440),
    s = n(553375),
    l = n(365583),
    c = n(582546),
    u = n(888317),
    d = n(228168),
    f = n(671955),
    p = n(388032);
function _(e) {
    let { onAction: t } = e,
        { themeType: n } = (0, i.z)(),
        _ = (0, r.Z)({
            userId: e.user.id,
            tabSection: d.oh.ACTIVITY,
            label: p.intl.string(p.t.pD1L1u),
            onAction: () => (null == t ? void 0 : t({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" })),
        });
    return [
        n === f.l.POPOUT ? _ : null,
        (0, c.Z)(e),
        (0, s.ZP)(e),
        (0, s.uj)(e),
        (0, u.Z)(e),
        (0, l.Z)(e),
        (0, a.Z)(e),
        (0, o.B)(e),
    ].filter((e) => null != e);
}
