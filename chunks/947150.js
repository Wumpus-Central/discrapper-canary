n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(846027),
    s = n(687058),
    o = n(131951),
    c = n(388032);
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        u = (0, s.Z)(),
        d = (0, l.e7)([o.Z], () => o.Z.getInputDeviceId()),
        m = null === (t = u[d]) || void 0 === t ? void 0 : t.name,
        f = Object.values(u).map((t) => {
            let { id: n, disabled: l, name: s } = t;
            return (0, i.jsx)(
                a.k5B,
                {
                    id: 'input-'.concat(n),
                    group: 'input-devices',
                    disabled: l,
                    label: s,
                    checked: n === d,
                    action: () => r.Z.setInputDevice(n, { analyticsLocations: e })
                },
                'input-'.concat(n)
            );
        });
    return n
        ? (0, i.jsx)(a.sNh, {
              id: 'input-devices',
              label: c.intl.string(c.t.ElbIXF),
              subtext: m,
              children: f
          })
        : (0, i.jsx)(a.kSQ, {
              label: c.intl.string(c.t.ElbIXF),
              children: f
          });
}
