n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(846027),
    o = n(687058),
    s = n(131951),
    c = n(388032);
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        u = (0, o.Z)(),
        d = (0, i.e7)([s.Z], () => s.Z.getInputDeviceId()),
        f = null == (t = u[d]) ? void 0 : t.name,
        p = Object.values(u).map((t) => {
            let { id: n, disabled: i, name: o } = t;
            return (0, r.jsx)(
                l.k5B,
                {
                    id: 'input-'.concat(n),
                    group: 'input-devices',
                    disabled: i,
                    label: o,
                    checked: n === d,
                    action: () => a.Z.setInputDevice(n, { analyticsLocations: e })
                },
                'input-'.concat(n)
            );
        });
    return n
        ? (0, r.jsx)(l.sNh, {
              id: 'input-devices',
              label: c.intl.string(c.t.ElbIXF),
              subtext: f,
              children: p
          })
        : (0, r.jsx)(l.kSQ, {
              label: c.intl.string(c.t.ElbIXF),
              children: p
          });
}
