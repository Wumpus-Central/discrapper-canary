n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(594174),
    o = n(74538),
    a = n(878349),
    s = n(388032);
function c(e) {
    let { value: t, labelText: n, onChange: c, onShowUpsell: u } = e,
        d = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        p = o.ZP.canUseFancyVoiceChannelReactions(d),
        h = '';
    return (
        (h = p ? (t ? s.NW.string(s.t.CfapQU) : s.NW.string(s.t.GB2x0t)) : s.NW.string(s.t.fe05ND)),
        (0, r.jsx)(a.Z, {
            checked: t,
            onChange: c,
            labelText: n,
            tooltipText: h,
            iconAltText: s.NW.string(s.t.oF6B0N),
            canToggle: p,
            onClick: p ? () => {} : u
        })
    );
}
