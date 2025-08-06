n.d(t, { Z: () => c });
var r = n(255367),
    i = n(442837),
    o = n(481060),
    a = n(695346),
    s = n(699516),
    l = n(388032);
function c(e) {
    let { userId: t, onClick: n } = e;
    if (!(0, i.e7)([s.Z], () => s.Z.isIgnored(t))) return null;
    let c = () => {
        (a.Rt.updateSetting(!0), n());
    };
    return (0, r.jsx)(o.Avr, {
        onClick: c,
        variant: 'primary',
        size: 'sm',
        textVariant: 'text-sm/medium',
        text: l.intl.string(l.t.QbcRCA)
    });
}
