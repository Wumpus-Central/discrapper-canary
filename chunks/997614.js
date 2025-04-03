n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(399606),
    o = n(704215),
    a = n(582019),
    s = n(481060),
    c = n(239091),
    u = n(906732),
    d = n(706140),
    p = n(242291),
    h = n(792165),
    f = n(603074),
    m = n(861254),
    g = n(221241),
    b = n(82965),
    _ = n(294629),
    C = n(390322),
    y = n(871499),
    x = n(131951),
    v = n(459273),
    j = n(522651),
    O = n(795318),
    E = n(304388),
    N = n(981631),
    I = n(127379),
    P = n(388032);
function S(e) {
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
function Z(e, t) {
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
function T(e) {
    let { channel: t, themeable: T, whichPopoutIsOpen: A, setWhichPopoutIsOpen: w } = e,
        { parentAnalyticsLocation: R } = (0, u.ZP)(),
        {
            Component: M,
            events: { onMouseEnter: k, onMouseLeave: L }
        } = (0, a.j)(),
        D = t.getGuildId(),
        { mute: W, suppress: U } = (0, _.Z)(t),
        B = (0, l.e7)([x.Z], () => x.Z.isDeaf()),
        H = W || U || B,
        F = (0, p.sR)({ isSoundboardButtonDisabled: H }),
        [G, V] = (0, d.cv)(F),
        { analyticsLocations: z } = (0, u.ZP)(),
        { mode: Y } = (0, m.ZP)({ location: 'ActionBarSoundboardButton' }),
        q = (0, b.Z)({ location: 'ActionBarSoundboardButton' }),
        { coloredIconsEnabled: K, squareButtonsEnabled: X } = (0, g.Z)({ location: 'ActionBarSoundboardButton' });
    function Q() {
        return W ? P.NW.string(P.t['Ox4/zc']) : U ? P.NW.string(P.t['+YBKYG']) : B ? P.NW.string(P.t.X1lQlp) : void 0;
    }
    function J(e) {
        null != D &&
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        Z(
                            S(
                                {
                                    guildId: D,
                                    sourceAnalyticsLocations: z
                                },
                                t
                            ),
                            { onInteraction: (0, O.u)('SoundboardContextMenu', R) }
                        )
                    );
            });
    }
    let $ = i.useRef(null),
        ee = i.useCallback(() => {
            var e;
            null == (e = $.current) || e.hidePopout();
        }, []);
    return (
        (0, v.yp)({
            event: N.CkL.TOGGLE_SOUNDBOARD,
            handler: ee
        }),
        (0, r.jsx)(E.Z, {
            ref: $,
            isPopoutBlocked: null != A && A !== I.D.SOUNDBOARD,
            onPopoutClose: () => (null == w ? void 0 : w(void 0)),
            onPopoutOpen: () => (null == w ? void 0 : w(I.D.SOUNDBOARD)),
            align: q ? 'center' : 'left',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return H
                    ? null
                    : (0, r.jsx)(C.Z, {
                          children: (0, r.jsx)(f.Z, {
                              guildId: D,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  G === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, r.jsx)(h.o, {
                                      onClose: n,
                                      markAsDismissed: V
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      });
            },
            children: (e) =>
                q
                    ? (0, r.jsx)(
                          y.d,
                          Z(
                              S(
                                  {
                                      themeable: T,
                                      label: Q(),
                                      iconComponent: M,
                                      disabled: H,
                                      onContextMenu: J
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      (0, j.v)(R, j.d.SOUNDBOARD), null == e || e.onClick(t);
                                  },
                                  onMouseEnter: (t) => {
                                      e.onMouseEnter(t), k();
                                  },
                                  onMouseLeave: () => {
                                      e.onMouseLeave(), L();
                                  },
                                  color: e.isActive ? (K ? 'primaryDark' : Y === m.BK.GroupedButtonsRedMic || X ? 'green' : void 0) : void 0,
                                  className: ''
                              }
                          )
                      )
                    : (0, r.jsx)(
                          y.Z,
                          Z(
                              S(
                                  {
                                      themeable: T,
                                      label: Q(),
                                      iconComponent: s.KY1,
                                      disabled: H,
                                      onContextMenu: J
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      (0, j.v)(R, j.d.SOUNDBOARD), null == e || e.onClick(t);
                                  }
                              }
                          )
                      )
        })
    );
}
