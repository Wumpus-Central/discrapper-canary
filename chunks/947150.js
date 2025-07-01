n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(846027),
    a = n(72897),
    s = n(131951),
    c = n(388032);
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        u = (0, a.zX)({ location: 'useInputAudioDeviceItems' }),
        d = (0, i.e7)([s.Z], s.Z.getInputDeviceId),
        p =
            null ==
            (t = u.find((e) => {
                let { id: t } = e;
                return t === d;
            }))
                ? void 0
                : t.name,
        f = u.map((t) => {
            let { id: n, disabled: i, name: a } = t;
            return (0, r.jsx)(
                l.k5B,
                {
                    id: 'input-'.concat(n),
                    group: 'input-devices',
                    disabled: i,
                    label: a,
                    checked: n === d,
                    action: () => o.Z.setInputDevice(n, { analyticsLocations: e })
                },
                'input-'.concat(n)
            );
        });
    return n
        ? (0, r.jsx)(l.sNh, {
              id: 'input-devices',
              label: c.intl.string(c.t.ElbIXF),
              subtext: p,
              children: f
          })
        : (0, r.jsx)(l.kSQ, {
              label: c.intl.string(c.t.ElbIXF),
              children: f
          });
}
