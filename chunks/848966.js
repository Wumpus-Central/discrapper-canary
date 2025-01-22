r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(37258),
    a = r(652853),
    o = r(347328),
    s = r(540440),
    l = r(553375),
    u = r(365583),
    c = r(582546),
    d = r(888317),
    f = r(228168),
    p = r(388032);
function h(e) {
    let { onAction: n } = e,
        { profileType: r } = (0, a.z)(),
        h = (0, i.Z)({
            userId: e.user.id,
            section: f.oh.ACTIVITY,
            label: p.intl.string(p.t.pD1L1t),
            onAction: () => (null == n ? void 0 : n({ action: 'PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM' }))
        });
    return [r === f.y0.BITE_SIZE ? h : null, (0, c.Z)(e), (0, l.ZP)(e), (0, l.uj)(e), (0, d.Z)(e), (0, u.Z)(e), (0, o.Z)(e), (0, s.B)(e)].filter((e) => null != e);
}
