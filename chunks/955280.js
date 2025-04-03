a.d(t, { default: () => j });
var r = a(200651),
    n = a(192379),
    l = a(442837),
    i = a(481060),
    o = a(239091),
    s = a(765250),
    c = a(13245),
    u = a(355863),
    d = a(237997),
    p = a(610394),
    v = a(340101),
    g = a(501787),
    m = a(981631),
    y = a(388032);
let f = () => [
        {
            value: m.ipw.LARGE,
            name: y.NW.string(y.t.YcOxtr)
        },
        {
            value: m.ipw.SMALL,
            name: y.NW.string(y.t.BKIKq6)
        }
    ],
    b = () => [
        {
            value: m.wC$.ALWAYS,
            name: y.NW.string(y.t.nBmDra)
        },
        {
            value: m.wC$.ONLY_WHILE_SPEAKING,
            name: y.NW.string(y.t['2OvIZW'])
        },
        {
            value: m.wC$.NEVER,
            name: y.NW.string(y.t.ekjlPD)
        }
    ],
    O = () => [
        {
            value: m.OYC.ALWAYS,
            name: y.NW.string(y.t.nBmDra)
        },
        {
            value: m.OYC.ONLY_WHILE_SPEAKING,
            name: y.NW.string(y.t['2OvIZW'])
        }
    ];
function j(e) {
    var t, a;
    let { onSelect: j, onClose: W } = e,
        {
            avatarSizeMode: w,
            displayNameMode: S,
            displayUserMode: h
        } = (0, l.cj)([d.default], () => ({
            avatarSizeMode: d.default.getAvatarSizeMode(),
            displayNameMode: d.default.getDisplayNameMode(),
            displayUserMode: d.default.getDisplayUserMode()
        })),
        N = n.useRef(W);
    n.useEffect(() => {
        N.current = W;
    }),
        n.useEffect(() => () => N.current(), []);
    let k = (0, l.e7)([p.ZP, u.Z], () => {
            let e = p.ZP.getWidgetByType(m.Odu.VOICE_V3);
            if (null == e) return null;
            let t = u.Z.getWidget(e.id);
            return null != t && (0, v.Aw)(t) ? t : null;
        }),
        x = null != (a = null == k || null == (t = k.meta) ? void 0 : t.voiceStatesMaxShown) ? a : g.At;
    function P(e) {
        null != k && (e < 1 ? (0, s.zG)(k.id, { voiceStatesMaxShown: g.Og }) : (0, s.zG)(k.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    return (0, r.jsxs)(i.v2r, {
        navId: 'overlay-voice-widget-context-menu',
        onClose: o.Zy,
        'aria-label': y.NW.string(y.t.tPfVWl),
        onSelect: j,
        children: [
            (0, r.jsx)(i.kSQ, {
                label: y.NW.string(y.t.dnvZSk),
                children: f().map((e) =>
                    (0, r.jsx)(
                        i.k5B,
                        {
                            label: e.name,
                            checked: w === e.value,
                            id: 'avatar-size-mode-'.concat(e.value),
                            group: 'avatar-size-mode',
                            action: () => c.Z.setAvatarSizeMode(e.value)
                        },
                        e.value
                    )
                )
            }),
            (0, r.jsx)(i.kSQ, {
                label: y.NW.string(y.t.J0dpcH),
                children: b().map((e) =>
                    (0, r.jsx)(
                        i.k5B,
                        {
                            label: e.name,
                            checked: S === e.value,
                            id: 'display-name-mode-'.concat(e.value),
                            group: 'display-name-mode',
                            action: () => c.Z.setDisplayNameMode(e.value)
                        },
                        e.value
                    )
                )
            }),
            (0, r.jsx)(i.kSQ, {
                label: y.NW.string(y.t.swsWWF),
                children: O().map((e) =>
                    (0, r.jsx)(
                        i.k5B,
                        {
                            label: e.name,
                            checked: h === e.value,
                            id: 'display-user-mode-'.concat(e.value),
                            group: 'display-user-mode',
                            action: () => c.Z.setDisplayUserMode(e.value)
                        },
                        e.value
                    )
                )
            }),
            (0, r.jsx)(i.kSQ, {
                children: (0, r.jsx)(i.II_, {
                    id: 'voice-widget-max-users-displayed',
                    label: y.NW.string(y.t['X/Uyzc']),
                    control: (e, t) => {
                        var a, n;
                        return (0, r.jsx)(
                            i._wy,
                            ((a = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(a);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = a[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (n = n =
                                {
                                    ref: t,
                                    value: x,
                                    minValue: 0,
                                    maxValue: g.yC,
                                    onChange: P,
                                    renderValue: (e) => (e < 1 ? y.NW.string(y.t.nrUzFB) : ''.concat(Math.floor(e))),
                                    'aria-label': y.NW.string(y.t['X/Uyzc'])
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var a = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          a.push.apply(a, r);
                                      }
                                      return a;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            a)
                        );
                    }
                })
            })
        ]
    });
}
