n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    a = n(846027),
    l = n(906732),
    o = n(600164),
    c = n(313201),
    d = n(131951),
    u = n(36703),
    m = n(388032),
    g = n(232186);
let h = (0, c.hQ)(),
    p = (0, c.hQ)();
function x() {
    let { analyticsLocations: e } = (0, l.ZP)(),
        { inputVolume: t, outputVolume: n } = (0, s.cj)([d.Z], () => ({
            inputVolume: d.Z.getInputVolume(),
            outputVolume: d.Z.getOutputVolume()
        }));
    return (0, i.jsxs)(o.Z, {
        className: 'volume',
        children: [
            (0, i.jsxs)(o.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(r.FormTitle, {
                        id: h,
                        tag: r.FormTitleTags.H5,
                        className: g.marginBottom4,
                        children: m.intl.string(m.t.OX2Bnp)
                    }),
                    (0, i.jsx)(r.Slider, {
                        initialValue: (0, u.P)(t),
                        asValueChanges: (t) => a.Z.setInputVolume((0, u.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': h
                    })
                ]
            }),
            (0, i.jsxs)(o.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(r.FormTitle, {
                        id: p,
                        tag: r.FormTitleTags.H5,
                        className: g.marginBottom4,
                        children: m.intl.string(m.t.eATD2N)
                    }),
                    (0, i.jsx)(r.Slider, {
                        initialValue: (0, u.P)(n),
                        maxValue: 200,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: (t) => a.Z.setOutputVolume((0, u.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': p
                    })
                ]
            })
        ]
    });
}
