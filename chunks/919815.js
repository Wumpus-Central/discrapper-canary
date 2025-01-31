n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    s = n(481060),
    a = n(888369),
    r = n(181945),
    d = n(388032);
function u(e, t) {
    let n = e.id,
        u = (0, l.e7)([a.default], () => a.default.getGuildHasUnreadIgnoreMuted(n), [n]);
    return (0, i.jsx)(s.sNh, {
        id: 'mark-guild-read',
        label: d.intl.string(d.t.e6RscX),
        icon: void 0,
        action: () => (0, r.Z)([n], t.section),
        disabled: !u
    });
}
