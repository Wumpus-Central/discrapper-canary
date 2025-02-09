n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(846027),
    a = n(906732),
    o = n(313201),
    c = n(131951),
    d = n(36703),
    u = n(388032),
    h = n(365168);
let m = (0, o.hQ)(),
    g = (0, o.hQ)();
function x() {
    let { analyticsLocations: e } = (0, a.ZP)(),
        { inputVolume: t, outputVolume: n } = (0, s.cj)([c.Z], () => ({
            inputVolume: c.Z.getInputVolume(),
            outputVolume: c.Z.getOutputVolume()
        }));
    return (0, i.jsxs)('div', {
        className: h.volumes,
        children: [
            (0, i.jsx)('div', {
                className: h.column,
                children: (0, i.jsx)(l.xJW, {
                    title: u.intl.string(u.t.OX2Bnp),
                    titleId: m,
                    children: (0, i.jsx)(l.iRW, {
                        initialValue: (0, d.P)(t),
                        asValueChanges: (t) => r.Z.setInputVolume((0, d.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': m
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: h.column,
                children: (0, i.jsx)(l.xJW, {
                    title: u.intl.string(u.t.eATD2N),
                    titleId: g,
                    children: (0, i.jsx)(l.iRW, {
                        initialValue: (0, d.P)(n),
                        maxValue: 200,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: (t) => r.Z.setOutputVolume((0, d.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': g
                    })
                })
            })
        ]
    });
}
