n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(846027),
    l = n(906732),
    o = n(313201),
    c = n(131951),
    d = n(36703),
    u = n(388032),
    m = n(245095);
let g = (0, o.hQ)(),
    p = (0, o.hQ)();
function h() {
    let { analyticsLocations: e } = (0, l.ZP)(),
        { inputVolume: t, outputVolume: n } = (0, i.cj)([c.Z], () => ({
            inputVolume: c.Z.getInputVolume(),
            outputVolume: c.Z.getOutputVolume()
        }));
    return (0, r.jsxs)('div', {
        className: m.volumes,
        children: [
            (0, r.jsx)('div', {
                className: m.column,
                children: (0, r.jsx)(s.xJW, {
                    title: u.NW.string(u.t.OX2Bnp),
                    titleId: g,
                    children: (0, r.jsx)(s.iRW, {
                        initialValue: (0, d.P)(t),
                        asValueChanges: (t) => a.Z.setInputVolume((0, d.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': g
                    })
                })
            }),
            (0, r.jsx)('div', {
                className: m.column,
                children: (0, r.jsx)(s.xJW, {
                    title: u.NW.string(u.t.eATD2N),
                    titleId: p,
                    children: (0, r.jsx)(s.iRW, {
                        initialValue: (0, d.P)(n),
                        maxValue: 200,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: (t) => a.Z.setOutputVolume((0, d.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': p
                    })
                })
            })
        ]
    });
}
