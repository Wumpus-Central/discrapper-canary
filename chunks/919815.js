n.d(t, { Z: () => o });
var i = n(951288);
n(647438);
var r = n(442837),
    s = n(481060),
    l = n(888369),
    a = n(181945),
    c = n(388032);
function o(e, t) {
    let n = e.id,
        o = (0, r.e7)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(n), [n]);
    return (0, i.jsx)(s.sNh, {
        id: "mark-guild-read",
        label: c.intl.string(c.t.e6RscS),
        icon: void 0,
        action: () => (0, a.Z)([n], t.section),
        disabled: !o,
    });
}
