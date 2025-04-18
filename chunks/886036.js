n.d(e, { Z: () => u });
var l = n(200651);
n(192379);
var r = n(481060),
    c = n(906732),
    i = n(278754),
    s = n(626135),
    a = n(981631),
    o = n(388032);
function u() {
    let t = (0, i.pR)(),
        { analyticsLocations: e } = (0, c.ZP)();
    return (0, l.jsx)(r.S89, {
        id: 'sticker-suggestions',
        label: o.NW.string(o.t.rIzKh4),
        checked: t,
        action: () => {
            s.default.track(a.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !t,
                location: { object: a.qAy.CONTEXT_MENU },
                location_stack: e
            }),
                (0, i.AW)(!t);
        }
    });
}
