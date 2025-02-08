n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(846027),
    a = n(906732),
    o = n(313201),
    c = n(131951),
    d = n(36703),
    u = n(388032),
    m = n(916431);
let g = (0, o.hQ)(),
    h = (0, o.hQ)();
function x() {
    let { analyticsLocations: e } = (0, a.ZP)(),
        { inputVolume: t, outputVolume: n } = (0, s.cj)([c.Z], () => ({
            inputVolume: c.Z.getInputVolume(),
            outputVolume: c.Z.getOutputVolume()
        }));
    return (0, i.jsxs)('div', {
        className: m.volumes,
        children: [
            (0, i.jsx)('div', {
                className: m.column,
                children: (0, i.jsx)(r.xJW, {
                    title: u.intl.string(u.t.OX2Bnp),
                    titleId: g,
                    children: (0, i.jsx)(r.iRW, {
                        initialValue: (0, d.P)(t),
                        asValueChanges: (t) => l.Z.setInputVolume((0, d.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': g
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: m.column,
                children: (0, i.jsx)(r.xJW, {
                    title: u.intl.string(u.t.eATD2N),
                    titleId: h,
                    children: (0, i.jsx)(r.iRW, {
                        initialValue: (0, d.P)(n),
                        maxValue: 200,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: (t) => l.Z.setOutputVolume((0, d.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': h
                    })
                })
            })
        ]
    });
}
