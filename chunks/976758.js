n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(846027),
    l = n(906732),
    o = n(313201),
    c = n(131951),
    d = n(36703),
    u = n(388032),
    m = n(916431);
let g = (0, o.hQ)(),
    h = (0, o.hQ)();
function p() {
    let { analyticsLocations: e } = (0, l.ZP)(),
        { inputVolume: t, outputVolume: n } = (0, r.cj)([c.Z], () => ({
            inputVolume: c.Z.getInputVolume(),
            outputVolume: c.Z.getOutputVolume()
        }));
    return (0, i.jsxs)('div', {
        className: m.volumes,
        children: [
            (0, i.jsx)('div', {
                className: m.column,
                children: (0, i.jsx)(s.FormItem, {
                    title: u.intl.string(u.t.OX2Bnp),
                    titleId: g,
                    children: (0, i.jsx)(s.Slider, {
                        initialValue: (0, d.P)(t),
                        asValueChanges: (t) => a.Z.setInputVolume((0, d.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': g
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: m.column,
                children: (0, i.jsx)(s.FormItem, {
                    title: u.intl.string(u.t.eATD2N),
                    titleId: h,
                    children: (0, i.jsx)(s.Slider, {
                        initialValue: (0, d.P)(n),
                        maxValue: 200,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: (t) => a.Z.setOutputVolume((0, d.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': h
                    })
                })
            })
        ]
    });
}
