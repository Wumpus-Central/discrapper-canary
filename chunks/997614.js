n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(399606),
    o = n(704215),
    a = n(582019),
    s = n(481060),
    c = n(239091),
    u = n(706140),
    d = n(242291),
    p = n(792165),
    h = n(603074),
    f = n(861254),
    m = n(82965),
    g = n(294629),
    b = n(390322),
    _ = n(871499),
    C = n(131951),
    v = n(459273),
    y = n(304388),
    x = n(981631),
    j = n(127379),
    O = n(388032);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
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
}
function E(e) {
    let { channel: t, themeable: E, whichPopoutIsOpen: P, setWhichPopoutIsOpen: I } = e,
        {
            Component: S,
            events: { onMouseEnter: Z, onMouseLeave: T }
        } = (0, a.j)(),
        A = t.getGuildId(),
        { mute: w, suppress: R } = (0, g.Z)(t),
        k = (0, l.e7)([C.Z], () => C.Z.isDeaf()),
        M = w || R || k,
        L = (0, d.sR)({ isSoundboardButtonDisabled: M }),
        [D, W] = (0, u.cv)(L),
        { mode: U } = (0, f.ZP)({ location: 'ActionBarSoundboardButton' }),
        B = (0, m.Z)({ location: 'ActionBarSoundboardButton' }),
        F = U === f.BK.GroupedButtonsRedMic ? 'green' : void 0;
    function H() {
        return w ? O.NW.string(O.t['Ox4/zc']) : R ? O.NW.string(O.t['+YBKYG']) : k ? O.NW.string(O.t.X1lQlp) : void 0;
    }
    function G(e) {
        null != A &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, N({ guildId: A }, t));
            });
    }
    let V = i.useRef(null),
        z = i.useCallback(() => {
            var e;
            null === (e = V.current) || void 0 === e || e.hidePopout();
        }, []);
    return (
        (0, v.yp)({
            event: x.CkL.TOGGLE_SOUNDBOARD,
            handler: z
        }),
        (0, r.jsx)(y.Z, {
            ref: V,
            isPopoutBlocked: null != P && P !== j.D.SOUNDBOARD,
            onPopoutClose: () => (null == I ? void 0 : I(void 0)),
            onPopoutOpen: () => (null == I ? void 0 : I(j.D.SOUNDBOARD)),
            align: B ? 'center' : 'left',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return M
                    ? null
                    : (0, r.jsx)(b.Z, {
                          children: (0, r.jsx)(h.Z, {
                              guildId: A,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  D === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, r.jsx)(p.o, {
                                      onClose: n,
                                      markAsDismissed: W
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      });
            },
            children: (e) => {
                var t, n;
                return B
                    ? (0, r.jsx)(
                          _.d,
                          ((t = N(
                              {
                                  themeable: E,
                                  label: H(),
                                  iconComponent: S,
                                  disabled: M,
                                  onContextMenu: G
                              },
                              e
                          )),
                          (n = n =
                              {
                                  onMouseEnter: (t) => {
                                      e.onMouseEnter(t), Z();
                                  },
                                  onMouseLeave: () => {
                                      e.onMouseLeave(), T();
                                  },
                                  color: e.isActive ? F : void 0,
                                  className: ''
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t)
                      )
                    : (0, r.jsx)(
                          _.Z,
                          N(
                              {
                                  themeable: E,
                                  label: H(),
                                  iconComponent: s.KY1,
                                  disabled: M,
                                  onContextMenu: G
                              },
                              e
                          )
                      );
            }
        })
    );
}
