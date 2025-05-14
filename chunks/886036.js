n.d(e, { Z: () => u });
var l = n(255367);
n(73800);
var i = n(481060),
    r = n(906732),
    c = n(278754),
    s = n(626135),
    a = n(981631),
    o = n(388032);
function u() {
    let t = (0, c.pR)(),
        { analyticsLocations: e } = (0, r.ZP)();
    return (0, l.jsx)(i.S89, {
        id: 'sticker-suggestions',
        label: o.intl.string(o.t.rIzKh4),
        checked: t,
        action: () => {
            s.default.track(a.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !t,
                location: { object: a.qAy.CONTEXT_MENU },
                location_stack: e
            }),
                (0, c.AW)(!t);
        }
    });
}
