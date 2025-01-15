n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(846027),
    s = n(687058),
    o = n(131951);
function c(e) {
    let t = (0, s.Z)(),
        n = (0, l.e7)([o.Z], () => o.Z.getInputDeviceId());
    return Object.values(t).map((t) => {
        let { id: l, disabled: s, name: o } = t;
        return (0, i.jsx)(
            a.MenuRadioItem,
            {
                id: 'input-'.concat(l),
                group: 'input-devices',
                disabled: s,
                label: o,
                checked: l === n,
                action: () => r.Z.setInputDevice(l, { analyticsLocations: e })
            },
            'input-'.concat(l)
        );
    });
}
