n.d(t, { Z: () => _ });
var r = n(37258),
    i = n(652853),
    o = n(347328),
    a = n(540440),
    s = n(553375),
    l = n(365583),
    c = n(582546),
    u = n(888317),
    d = n(228168),
    f = n(388032);
function _(e) {
    let { onAction: t } = e,
        { profileType: n } = (0, i.z)(),
        _ = (0, r.Z)({
            userId: e.user.id,
            section: d.oh.ACTIVITY,
            label: f.NW.string(f.t.pD1L1t),
            onAction: () => (null == t ? void 0 : t({ action: 'PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM' }))
        });
    return [n === d.y0.BITE_SIZE ? _ : null, (0, c.Z)(e), (0, s.ZP)(e), (0, s.uj)(e), (0, u.Z)(e), (0, l.Z)(e), (0, o.Z)(e), (0, a.B)(e)].filter((e) => null != e);
}
