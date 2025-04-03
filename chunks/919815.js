n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(888369),
    a = n(181945),
    o = n(388032);
function c(e, t) {
    let n = e.id,
        c = (0, r.e7)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(n), [n]);
    return (0, i.jsx)(s.sNh, {
        id: 'mark-guild-read',
        label: o.NW.string(o.t.e6RscX),
        icon: void 0,
        action: () => (0, a.Z)([n], t.section),
        disabled: !c
    });
}
