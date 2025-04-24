n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(846027),
    a = n(906732),
    o = n(313201),
    c = n(131951),
    d = n(36703),
    u = n(388032),
    m = n(245095);
let p = (0, o.hQ)(),
    g = (0, o.hQ)();
function h() {
    let { analyticsLocations: e } = (0, a.ZP)(),
        { inputVolume: t, outputVolume: n } = (0, r.cj)([c.Z], () => ({
            inputVolume: c.Z.getInputVolume(),
            outputVolume: c.Z.getOutputVolume()
        }));
    return (0, i.jsxs)('div', {
        className: m.volumes,
        children: [
            (0, i.jsx)('div', {
                className: m.column,
                children: (0, i.jsx)(s.xJW, {
                    title: u.intl.string(u.t.OX2Bnp),
                    titleId: p,
                    children: (0, i.jsx)(s.iRW, {
                        initialValue: (0, d.P)(t),
                        asValueChanges: (t) => l.Z.setInputVolume((0, d.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': p
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: m.column,
                children: (0, i.jsx)(s.xJW, {
                    title: u.intl.string(u.t.eATD2N),
                    titleId: g,
                    children: (0, i.jsx)(s.iRW, {
                        initialValue: (0, d.P)(n),
                        maxValue: 200,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: (t) => l.Z.setOutputVolume((0, d.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': g
                    })
                })
            })
        ]
    });
}
