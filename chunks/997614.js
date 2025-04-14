n.d(t, { Z: () => w }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(399606),
    o = n(704215),
    a = n(582019),
    s = n(930295),
    c = n(481060),
    u = n(239091),
    d = n(906732),
    p = n(706140),
    h = n(242291),
    f = n(792165),
    m = n(603074),
    g = n(861254),
    b = n(221241),
    y = n(82965),
    _ = n(294629),
    C = n(390322),
    x = n(871499),
    v = n(131951),
    j = n(574254),
    O = n(459273),
    E = n(522651),
    N = n(795318),
    I = n(304388),
    P = n(981631),
    S = n(127379),
    Z = n(388032);
function T(e) {
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
function A(e, t) {
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
function w(e) {
    let { channel: t, themeable: w, whichPopoutIsOpen: R, setWhichPopoutIsOpen: k } = e,
        { parentAnalyticsLocation: M } = (0, d.ZP)(),
        {
            Component: L,
            events: { onMouseEnter: D, onMouseLeave: W }
        } = (0, a.j)(),
        U = t.getGuildId(),
        { mute: B, suppress: G } = (0, _.Z)(t),
        F = (0, l.e7)([v.Z], () => v.Z.isDeaf()),
        H = B || G || F,
        V = (0, h.sR)({ isSoundboardButtonDisabled: H }),
        [z, Y] = (0, p.cv)(V),
        { analyticsLocations: q } = (0, d.ZP)(),
        { mode: K } = (0, g.ZP)({ location: 'ActionBarSoundboardButton' }),
        X = (0, y.Z)({ location: 'ActionBarSoundboardButton' }),
        { coloredIconsEnabled: Q, squareButtonsEnabled: J } = (0, b.Z)({ location: 'ActionBarSoundboardButton' });
    function $() {
        return B ? Z.NW.string(Z.t['Ox4/zc']) : G ? Z.NW.string(Z.t['+YBKYG']) : F ? Z.NW.string(Z.t.X1lQlp) : void 0;
    }
    function ee(e) {
        null != U &&
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        A(
                            T(
                                {
                                    guildId: U,
                                    sourceAnalyticsLocations: q
                                },
                                t
                            ),
                            { onInteraction: (0, N.u)('SoundboardContextMenu', M) }
                        )
                    );
            });
    }
    let et = i.useRef(null),
        en = i.useCallback(() => {
            var e;
            null == (e = et.current) || e.hidePopout();
        }, []);
    return (
        (0, O.yp)({
            event: P.CkL.TOGGLE_SOUNDBOARD,
            handler: en
        }),
        (0, r.jsx)(I.Z, {
            ref: et,
            isPopoutBlocked: null != R && R !== S.D.SOUNDBOARD,
            onRequestClose: () => {
                if (j.Z.isOpen()) return s.F;
            },
            onPopoutClose: () => (null == k ? void 0 : k(void 0)),
            onPopoutOpen: () => (null == k ? void 0 : k(S.D.SOUNDBOARD)),
            align: X ? 'center' : 'left',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return H
                    ? null
                    : (0, r.jsx)(C.Z, {
                          children: (0, r.jsx)(m.Z, {
                              guildId: U,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  z === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, r.jsx)(f.o, {
                                      onClose: n,
                                      markAsDismissed: Y
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      });
            },
            children: (e) =>
                X
                    ? (0, r.jsx)(
                          x.d,
                          A(
                              T(
                                  {
                                      themeable: w,
                                      label: $(),
                                      iconComponent: L,
                                      disabled: H,
                                      onContextMenu: ee
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      (0, E.v)(M, E.d.SOUNDBOARD), null == e || e.onClick(t);
                                  },
                                  onMouseEnter: (t) => {
                                      e.onMouseEnter(t), D();
                                  },
                                  onMouseLeave: () => {
                                      e.onMouseLeave(), W();
                                  },
                                  color: e.isActive ? (Q ? 'primaryDark' : K === g.BK.GroupedButtonsRedMic || J ? 'green' : void 0) : void 0,
                                  className: ''
                              }
                          )
                      )
                    : (0, r.jsx)(
                          x.Z,
                          A(
                              T(
                                  {
                                      themeable: w,
                                      label: $(),
                                      iconComponent: c.KY1,
                                      disabled: H,
                                      onContextMenu: ee
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      (0, E.v)(M, E.d.SOUNDBOARD), null == e || e.onClick(t);
                                  }
                              }
                          )
                      )
        })
    );
}
