n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(26151),
    r = n(871499),
    s = n(388032);
function o(e) {
    let { channel: t, ...n } = e;
    return (0, i.jsx)(r.d, {
        ...n,
        iconComponent: l.Dio,
        label: s.intl.string(s.t.WAI6xs),
        onClick: () => a.Z.stopRinging(t.id)
    });
}
