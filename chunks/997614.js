n.d(t, { Z: () => S }), n(47120);
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
    x = n(795318),
    j = n(304388),
    O = n(981631),
    E = n(127379),
    N = n(388032);
function I(e) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { channel: t, themeable: S, whichPopoutIsOpen: Z, setWhichPopoutIsOpen: T } = e,
        {
            Component: A,
            events: { onMouseEnter: w, onMouseLeave: R }
        } = (0, a.j)(),
        M = t.getGuildId(),
        { mute: k, suppress: L } = (0, b.Z)(t),
        D = (0, l.e7)([v.Z], () => v.Z.isDeaf()),
        W = k || L || D,
        U = (0, d.sR)({ isSoundboardButtonDisabled: W }),
        [B, F] = (0, u.cv)(U),
        { mode: H } = (0, f.ZP)({ location: 'ActionBarSoundboardButton' }),
        G = (0, g.Z)({ location: 'ActionBarSoundboardButton' }),
        { coloredIcons: V, squareButtons: z } = (0, m.Z)({ location: 'ActionBarSoundboardButton' }),
        q = H === f.BK.GroupedButtonsRedMic || z ? 'green' : void 0;
    function Y() {
        return k ? N.NW.string(N.t['Ox4/zc']) : L ? N.NW.string(N.t['+YBKYG']) : D ? N.NW.string(N.t.X1lQlp) : void 0;
    }
    function K(e) {
        null != M &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, P(I({ guildId: M }, t), { onInteraction: (0, x.u)('SoundboardContextMenu', 'ActionBarSoundboardButton') }));
            });
    }
    V && (q = 'primaryDark');
    let X = i.useRef(null),
        Q = i.useCallback(() => {
            var e;
            null === (e = X.current) || void 0 === e || e.hidePopout();
        }, []);
    return (
        (0, y.yp)({
            event: O.CkL.TOGGLE_SOUNDBOARD,
            handler: Q
        }),
        (0, r.jsx)(j.Z, {
            ref: X,
            isPopoutBlocked: null != Z && Z !== E.D.SOUNDBOARD,
            onPopoutClose: () => (null == T ? void 0 : T(void 0)),
            onPopoutOpen: () => (null == T ? void 0 : T(E.D.SOUNDBOARD)),
            align: G ? 'center' : 'left',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return W
                    ? null
                    : (0, r.jsx)(_.Z, {
                          children: (0, r.jsx)(h.Z, {
                              guildId: M,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  B === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, r.jsx)(p.o, {
                                      onClose: n,
                                      markAsDismissed: F
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      });
            },
            children: (e) =>
                G
                    ? (0, r.jsx)(
                          C.d,
                          P(
                              I(
                                  {
                                      themeable: S,
                                      label: Y(),
                                      iconComponent: A,
                                      disabled: W,
                                      onContextMenu: K
                                  },
                                  e
                              ),
                              {
                                  onMouseEnter: (t) => {
                                      e.onMouseEnter(t), w();
                                  },
                                  onMouseLeave: () => {
                                      e.onMouseLeave(), R();
                                  },
                                  color: e.isActive ? q : void 0,
                                  className: ''
                              }
                          )
                      )
                    : (0, r.jsx)(
                          C.Z,
                          I(
                              {
                                  themeable: S,
                                  label: Y(),
                                  iconComponent: s.KY1,
                                  disabled: W,
                                  onContextMenu: K
                              },
                              e
                          )
                      )
        })
    );
}
