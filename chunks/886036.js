n.d(e, { Z: () => u });
var r = n(255367);
n(73800);
var l = n(481060),
    c = n(906732),
    i = n(278754),
    s = n(626135),
    o = n(981631),
    a = n(388032);
function u() {
    let t = (0, i.pR)(),
        { analyticsLocations: e } = (0, c.ZP)();
    return (0, r.jsx)(l.S89, {
        id: 'sticker-suggestions',
        label: a.intl.string(a.t.rIzKh4),
        checked: t,
        action: () => {
            s.default.track(o.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !t,
                location: { object: o.qAy.CONTEXT_MENU },
                location_stack: e
            }),
                (0, i.AW)(!t);
        }
    });
}
