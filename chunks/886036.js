n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var c = n(481060),
    l = n(906732),
    i = n(278754),
    s = n(626135),
    o = n(981631),
    a = n(388032);
function u() {
    let e = (0, i.pR)(),
        { analyticsLocations: t } = (0, l.ZP)();
    return (0, r.jsx)(c.S89, {
        id: 'sticker-suggestions',
        label: a.NW.string(a.t.rIzKh4),
        checked: e,
        action: () => {
            s.default.track(o.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !e,
                location: { object: o.qAy.CONTEXT_MENU },
                location_stack: t
            }),
                (0, i.AW)(!e);
        }
    });
}
