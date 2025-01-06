t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    s = t(888369),
    r = t(181945),
    u = t(388032);
function o(e, n) {
    let t = e.id,
        o = (0, l.e7)([s.default], () => s.default.getGuildHasUnreadIgnoreMuted(t), [t]);
    return (0, i.jsx)(a.MenuItem, {
        id: 'mark-guild-read',
        label: u.intl.string(u.t.e6RscX),
        icon: void 0,
        action: () => (0, r.Z)([t], n.section),
        disabled: !o
    });
}
