a.d(t, { default: () => j });
var n = a(200651),
    l = a(192379),
    r = a(442837),
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
            name: y.intl.string(y.t.YcOxtr)
        },
        {
            value: m.ipw.SMALL,
            name: y.intl.string(y.t.BKIKq6)
        }
    ],
    b = () => [
        {
            value: m.wC$.ALWAYS,
            name: y.intl.string(y.t.nBmDra)
        },
        {
            value: m.wC$.ONLY_WHILE_SPEAKING,
            name: y.intl.string(y.t['2OvIZW'])
        },
        {
            value: m.wC$.NEVER,
            name: y.intl.string(y.t.ekjlPD)
        }
    ],
    O = () => [
        {
            value: m.OYC.ALWAYS,
            name: y.intl.string(y.t.nBmDra)
        },
        {
            value: m.OYC.ONLY_WHILE_SPEAKING,
            name: y.intl.string(y.t['2OvIZW'])
        }
    ];
function j(e) {
    var t, a;
    let { onSelect: j, onClose: w } = e,
        {
            avatarSizeMode: S,
            displayNameMode: h,
            displayUserMode: k
        } = (0, r.cj)([d.default], () => ({
            avatarSizeMode: d.default.getAvatarSizeMode(),
            displayNameMode: d.default.getDisplayNameMode(),
            displayUserMode: d.default.getDisplayUserMode()
        })),
        x = l.useRef(w);
    l.useEffect(() => {
        x.current = w;
    }),
        l.useEffect(() => () => x.current(), []);
    let P = (0, r.e7)([p.ZP, u.Z], () => {
            let e = p.ZP.getWidgetByType(m.Odu.VOICE_V3);
            if (null == e) return null;
            let t = u.Z.getWidget(e.id);
            return null != t && (0, v.Aw)(t) ? t : null;
        }),
        M = null != (a = null == P || null == (t = P.meta) ? void 0 : t.voiceStatesMaxShown) ? a : g.At;
    function A(e) {
        null != P && (e < 1 ? (0, s.zG)(P.id, { voiceStatesMaxShown: g.Og }) : (0, s.zG)(P.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    return (0, n.jsxs)(i.v2r, {
        navId: 'overlay-voice-widget-context-menu',
        onClose: o.Zy,
        'aria-label': y.intl.string(y.t.tPfVWl),
        onSelect: j,
        children: [
            (0, n.jsx)(i.kSQ, {
                label: y.intl.string(y.t.dnvZSk),
                children: f().map((e) =>
                    (0, n.jsx)(
                        i.k5B,
                        {
                            label: e.name,
                            checked: S === e.value,
                            id: 'avatar-size-mode-'.concat(e.value),
                            group: 'avatar-size-mode',
                            action: () => c.Z.setAvatarSizeMode(e.value)
                        },
                        e.value
                    )
                )
            }),
            (0, n.jsx)(i.kSQ, {
                label: y.intl.string(y.t.J0dpcH),
                children: b().map((e) =>
                    (0, n.jsx)(
                        i.k5B,
                        {
                            label: e.name,
                            checked: h === e.value,
                            id: 'display-name-mode-'.concat(e.value),
                            group: 'display-name-mode',
                            action: () => c.Z.setDisplayNameMode(e.value)
                        },
                        e.value
                    )
                )
            }),
            (0, n.jsx)(i.kSQ, {
                label: y.intl.string(y.t.swsWWF),
                children: O().map((e) =>
                    (0, n.jsx)(
                        i.k5B,
                        {
                            label: e.name,
                            checked: k === e.value,
                            id: 'display-user-mode-'.concat(e.value),
                            group: 'display-user-mode',
                            action: () => c.Z.setDisplayUserMode(e.value)
                        },
                        e.value
                    )
                )
            }),
            (0, n.jsx)(i.kSQ, {
                children: (0, n.jsx)(i.II_, {
                    id: 'voice-widget-max-users-displayed',
                    label: y.intl.string(y.t['X/Uyzc']),
                    control: (e, t) => {
                        var a, l;
                        return (0, n.jsx)(
                            i._wy,
                            ((a = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(a);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = a[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (l = l =
                                {
                                    ref: t,
                                    value: M,
                                    minValue: 0,
                                    maxValue: g.yC,
                                    onChange: A,
                                    renderValue: (e) => (e < 1 ? y.intl.string(y.t.nrUzFB) : ''.concat(Math.floor(e))),
                                    'aria-label': y.intl.string(y.t['X/Uyzc'])
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var a = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          a.push.apply(a, n);
                                      }
                                      return a;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            a)
                        );
                    }
                })
            })
        ]
    });
}
