n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(888369),
    o = n(181945),
    a = n(388032);
function c(e, t) {
    let n = e.id,
        c = (0, r.e7)([s.default], () => s.default.getGuildHasUnreadIgnoreMuted(n), [n]);
    return (0, i.jsx)(l.sNh, {
        id: 'mark-guild-read',
        label: a.intl.string(a.t.e6RscX),
        icon: void 0,
        action: () => (0, o.Z)([n], t.section),
        disabled: !c
    });
}
