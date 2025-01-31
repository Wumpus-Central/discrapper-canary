n.d(e, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(481060),
    c = n(906732),
    s = n(278754),
    a = n(626135),
    r = n(981631),
    o = n(388032);
function u() {
    let t = (0, s.pR)(),
        { analyticsLocations: e } = (0, c.ZP)();
    return (0, l.jsx)(i.S89, {
        id: 'sticker-suggestions',
        label: o.intl.string(o.t.rIzKh4),
        checked: t,
        action: () => {
            a.default.track(r.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !t,
                location: { object: r.qAy.CONTEXT_MENU },
                location_stack: e
            }),
                (0, s.AW)(!t);
        }
    });
}
