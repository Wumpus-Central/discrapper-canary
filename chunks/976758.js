n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(906732),
    l = n(131951),
    c = n(36703),
    u = n(388032),
    d = n(505433);
function f() {
    let { analyticsLocations: e } = (0, s.ZP)(),
        { inputVolume: t, outputVolume: n } = (0, i.cj)([l.Z], () => ({
            inputVolume: l.Z.getInputVolume(),
            outputVolume: l.Z.getOutputVolume(),
        }));
    return (0, r.jsxs)("div", {
        className: d.volumes,
        children: [
            (0, r.jsx)("div", {
                className: d.column,
                children: (0, r.jsx)(a.iRW, {
                    label: u.intl.string(u.t.OX2Bnr),
                    initialValue: (0, c.P)(t),
                    asValueChanges: (t) => o.Z.setInputVolume((0, c.A)(t), { analyticsLocations: e }),
                }),
            }),
            (0, r.jsx)("div", {
                className: d.column,
                children: (0, r.jsx)(a.iRW, {
                    label: u.intl.string(u.t.eATD2B),
                    initialValue: (0, c.P)(n),
                    maxValue: 200,
                    onValueRender: (e) => "".concat(e.toFixed(0), "%"),
                    asValueChanges: (t) => o.Z.setOutputVolume((0, c.A)(t), { analyticsLocations: e }),
                }),
            }),
        ],
    });
}
