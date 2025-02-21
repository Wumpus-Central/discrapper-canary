n.d(t, { Z: () => P }), n(47120);
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
    m = n(221241),
    g = n(82965),
    b = n(294629),
    _ = n(390322),
    C = n(871499),
    v = n(131951),
    y = n(459273),
    x = n(304388),
    j = n(981631),
    O = n(127379),
    N = n(388032);
function E(e) {
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
function P(e) {
    let { channel: t, themeable: P, whichPopoutIsOpen: I, setWhichPopoutIsOpen: S } = e,
        {
            Component: Z,
            events: { onMouseEnter: T, onMouseLeave: A }
        } = (0, a.j)(),
        w = t.getGuildId(),
        { mute: R, suppress: k } = (0, b.Z)(t),
        M = (0, l.e7)([v.Z], () => v.Z.isDeaf()),
        L = R || k || M,
        D = (0, d.sR)({ isSoundboardButtonDisabled: L }),
        [W, U] = (0, u.cv)(D),
        { mode: B } = (0, f.ZP)({ location: 'ActionBarSoundboardButton' }),
        F = (0, g.Z)({ location: 'ActionBarSoundboardButton' }),
        { coloredIcons: H, squareButtons: G } = (0, m.Z)({ location: 'ActionBarSoundboardButton' }),
        V = B === f.BK.GroupedButtonsRedMic || G ? 'green' : void 0;
    function z() {
        return R ? N.NW.string(N.t['Ox4/zc']) : k ? N.NW.string(N.t['+YBKYG']) : M ? N.NW.string(N.t.X1lQlp) : void 0;
    }
    function q(e) {
        null != w &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, E({ guildId: w }, t));
            });
    }
    H && (V = 'primaryDark');
    let Y = i.useRef(null),
        K = i.useCallback(() => {
            var e;
            null === (e = Y.current) || void 0 === e || e.hidePopout();
        }, []);
    return (
        (0, y.yp)({
            event: j.CkL.TOGGLE_SOUNDBOARD,
            handler: K
        }),
        (0, r.jsx)(x.Z, {
            ref: Y,
            isPopoutBlocked: null != I && I !== O.D.SOUNDBOARD,
            onPopoutClose: () => (null == S ? void 0 : S(void 0)),
            onPopoutOpen: () => (null == S ? void 0 : S(O.D.SOUNDBOARD)),
            align: F ? 'center' : 'left',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return L
                    ? null
                    : (0, r.jsx)(_.Z, {
                          children: (0, r.jsx)(h.Z, {
                              guildId: w,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  W === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, r.jsx)(p.o, {
                                      onClose: n,
                                      markAsDismissed: U
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      });
            },
            children: (e) => {
                var t, n;
                return F
                    ? (0, r.jsx)(
                          C.d,
                          ((t = E(
                              {
                                  themeable: P,
                                  label: z(),
                                  iconComponent: Z,
                                  disabled: L,
                                  onContextMenu: q
                              },
                              e
                          )),
                          (n = n =
                              {
                                  onMouseEnter: (t) => {
                                      e.onMouseEnter(t), T();
                                  },
                                  onMouseLeave: () => {
                                      e.onMouseLeave(), A();
                                  },
                                  color: e.isActive ? V : void 0,
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
                          C.Z,
                          E(
                              {
                                  themeable: P,
                                  label: z(),
                                  iconComponent: s.KY1,
                                  disabled: L,
                                  onContextMenu: q
                              },
                              e
                          )
                      );
            }
        })
    );
}
