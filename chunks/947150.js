n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(846027),
    a = n(687058),
    s = n(131951),
    c = n(388032);
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        u = (0, a.Z)(),
        d = (0, l.e7)([s.Z], () => s.Z.getInputDeviceId()),
        p = null == (t = u[d]) ? void 0 : t.name,
        f = Object.values(u).map((t) => {
            let { id: n, disabled: l, name: a } = t;
            return (0, r.jsx)(
                i.k5B,
                {
                    id: 'input-'.concat(n),
                    group: 'input-devices',
                    disabled: l,
                    label: a,
                    checked: n === d,
                    action: () => o.Z.setInputDevice(n, { analyticsLocations: e })
                },
                'input-'.concat(n)
            );
        });
    return n
        ? (0, r.jsx)(i.sNh, {
              id: 'input-devices',
              label: c.NW.string(c.t.ElbIXF),
              subtext: p,
              children: f
          })
        : (0, r.jsx)(i.kSQ, {
              label: c.NW.string(c.t.ElbIXF),
              children: f
          });
}
