n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(475179),
    r = n(871499),
    s = n(354459),
    o = n(388032);
function c(e) {
    let { channelId: t, isHorizontal: n, ...c } = e;
    return (0, i.jsx)(r.Z, {
        onClick: function () {
            a.Z.selectParticipant(t, s.dF.AUTO);
        },
        label: o.intl.string(o.t.np22FR),
        iconComponent: n ? l.dRJ : l.SVt,
        tooltipPosition: 'bottom',
        ...c
    });
}
