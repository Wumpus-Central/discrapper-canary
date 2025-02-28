n.d(t, { Z: () => Z }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(704215),
    c = n(582019),
    u = n(481060),
    d = n(239091),
    p = n(100527),
    h = n(906732),
    f = n(522651),
    g = n(795318),
    m = n(540059),
    b = n(706140),
    _ = n(221241),
    E = n(294629),
    O = n(131951),
    N = n(459273),
    v = n(242291),
    y = n(792165),
    I = n(603074),
    C = n(981631),
    S = n(921944),
    T = n(388032),
    P = n(963085);
function A(e) {
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
function j(e, t) {
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
function Z(e) {
    var { channel: t, iconClassName: l, className: Z, innerClassName: x } = e,
        L = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channel', 'iconClassName', 'className', 'innerClassName']);
    let w = (0, m.Q3)('SoundBoardRTCPanelButton'),
        { coloredIconsEnabled: R } = (0, _.Z)({ location: 'ConnectedRTCConnection' }),
        { mute: D, suppress: k } = (0, E.Z)(t),
        M = (0, a.e7)([O.Z], () => O.Z.isDeaf()),
        U = D || k || M,
        [G, W] = i.useState(!1),
        V = t.getGuildId(),
        B = (0, v.sR)({ isSoundboardButtonDisabled: U }),
        [H, F] = (0, b.cv)(B),
        { analyticsLocations: z, parentAnalyticsLocation: Y } = (0, h.ZP)(p.Z.SOUNDBOARD_BUTTON);
    function K(e) {
        null != V &&
            (0, d.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, j(A({ guildId: V }, t), { onInteraction: (0, g.u)('SoundboardContextMenu', 'RTCConnection') }));
            });
    }
    let {
            Component: q,
            play: Q,
            events: { onMouseEnter: X, onMouseLeave: J }
        } = (0, c.j)(),
        $ = (e) =>
            (0, r.jsx)(u.yRy, {
                animation: u.yRy.Animation.FADE,
                shouldShow: G,
                position: 'top',
                onRequestClose: () => W(!1),
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, r.jsx)(I.Z, {
                        guildId: V,
                        channel: t,
                        onClose: n,
                        gridNotice:
                            H === s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                            (0, r.jsx)(y.o, {
                                onClose: n,
                                markAsDismissed: F
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(
                            u.zxk,
                            j(
                                A(
                                    j(A({}, e, t), {
                                        className: o()(Z, {
                                            [P.buttonActive]: G && !R,
                                            [P.greyButtonActive]: G && R,
                                            [P.disabled]: U
                                        }),
                                        wrapperClassName: Z,
                                        innerClassName: x,
                                        disabled: U,
                                        onClick: () => {
                                            var t;
                                            null != H && H !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && F(S.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), W(!G), Q(), (0, f.v)(Y, f.d.SOUNDBOARD);
                                        },
                                        onMouseEnter: (t) => {
                                            var n, r;
                                            null === (n = L.onMouseEnter) || void 0 === n || n.call(L, t), null == e || null === (r = e.onMouseEnter) || void 0 === r || r.call(e), X();
                                        },
                                        onMouseLeave: (t) => {
                                            var n, r;
                                            null === (n = L.onMouseLeave) || void 0 === n || n.call(L, t), null == e || null === (r = e.onMouseLeave) || void 0 === r || r.call(e), J();
                                        },
                                        onContextMenu: K,
                                        fullWidth: !0,
                                        size: w ? u.zxk.Sizes.MEDIUM : u.zxk.Sizes.SMALL
                                    }),
                                    L
                                ),
                                {
                                    children: (0, r.jsx)(q, {
                                        className: l,
                                        size: 'sm',
                                        color: R ? 'currentColor' : G ? 'white' : u.TVs.colors.INTERACTIVE_ACTIVE
                                    })
                                }
                            )
                        )
                    })
            }),
        ee = i.useCallback(() => {
            U || W(!G);
        }, [U, G]);
    return (
        (0, N.yp)({
            event: C.CkL.TOGGLE_SOUNDBOARD,
            handler: ee
        }),
        (0, r.jsx)(h.Gt, {
            value: z,
            children: (0, r.jsx)(u.ua7, {
                text: D ? T.NW.string(T.t['Ox4/zc']) : k ? T.NW.string(T.t['+YBKYG']) : M ? T.NW.string(T.t.X1lQlp) : T.NW.string(T.t['6EJvHh']),
                children: (e) => $(e)
            })
        })
    );
}
