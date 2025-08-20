n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(906732),
    l = n(313201),
    c = n(131951),
    u = n(36703),
    d = n(388032),
    f = n(505433);
let _ = (0, l.hQ)(),
    p = (0, l.hQ)();
function h() {
    let { analyticsLocations: e } = (0, s.ZP)(),
        { inputVolume: t, outputVolume: n } = (0, i.cj)([c.Z], () => ({
            inputVolume: c.Z.getInputVolume(),
            outputVolume: c.Z.getOutputVolume(),
        }));
    return (0, r.jsxs)("div", {
        className: f.volumes,
        children: [
            (0, r.jsx)("div", {
                className: f.column,
                children: (0, r.jsx)(a.xJW, {
                    title: d.intl.string(d.t.OX2Bnp),
                    titleId: _,
                    children: (0, r.jsx)(a.iRW, {
                        initialValue: (0, u.P)(t),
                        asValueChanges: (t) => o.Z.setInputVolume((0, u.A)(t), { analyticsLocations: e }),
                        "aria-labelledby": _,
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: f.column,
                children: (0, r.jsx)(a.xJW, {
                    title: d.intl.string(d.t.eATD2N),
                    titleId: p,
                    children: (0, r.jsx)(a.iRW, {
                        initialValue: (0, u.P)(n),
                        maxValue: 200,
                        onValueRender: (e) => "".concat(e.toFixed(0), "%"),
                        asValueChanges: (t) => o.Z.setOutputVolume((0, u.A)(t), { analyticsLocations: e }),
                        "aria-labelledby": p,
                    }),
                }),
            }),
        ],
    });
}
