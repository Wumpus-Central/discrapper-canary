n.d(t, { Z: () => Z }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(399606),
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
    y = n(242291),
    I = n(792165),
    v = n(603074),
    C = n(981631),
    S = n(921944),
    T = n(388032),
    P = n(566177);
function j(e) {
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
function Z(e) {
    var { channel: t } = e,
        l = (function (e, t) {
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
        })(e, ['channel']);
    let Z = i.useRef(null),
        x = (0, m.Q3)('SoundBoardRTCPanelButton'),
        { coloredIconsEnabled: L } = (0, _.Z)({ location: 'ConnectedRTCConnection' }),
        { mute: w, suppress: R } = (0, E.Z)(t),
        D = (0, o.e7)([O.Z], () => O.Z.isDeaf()),
        k = w || R || D,
        [M, U] = i.useState(!1),
        G = t.getGuildId(),
        W = (0, y.sR)({ isSoundboardButtonDisabled: k }),
        [V, B] = (0, b.cv)(W),
        { analyticsLocations: H, parentAnalyticsLocation: F } = (0, h.ZP)(p.Z.SOUNDBOARD_BUTTON);
    function z(e) {
        null != G &&
            (0, d.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        A(
                            j(
                                {
                                    guildId: G,
                                    sourceAnalyticsLocations: H
                                },
                                t
                            ),
                            { onInteraction: (0, g.u)('SoundboardContextMenu', p.Z.RTC_PANEL) }
                        )
                    );
            });
    }
    let {
            Component: Y,
            play: K,
            events: { onMouseEnter: q, onMouseLeave: Q }
        } = (0, c.j)(),
        X = (e) =>
            (0, r.jsx)(u.yRy, {
                targetElementRef: Z,
                animation: u.yRy.Animation.FADE,
                shouldShow: M,
                position: 'top',
                onRequestClose: () => U(!1),
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, r.jsx)(v.Z, {
                        guildId: G,
                        channel: t,
                        onClose: n,
                        gridNotice:
                            V === s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                            (0, r.jsx)(I.o, {
                                onClose: n,
                                markAsDismissed: B
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, r.jsx)('div', {
                        ref: Z,
                        children: (0, r.jsx)(
                            u.zxk,
                            A(
                                j(
                                    A(j({}, e, t), {
                                        className: a()(P.button, P.buttonColor, {
                                            [P.buttonActive]: M && !L,
                                            [P.greyButtonActive]: M && L,
                                            [P.disabled]: k
                                        }),
                                        wrapperClassName: P.button,
                                        innerClassName: P.buttonContents,
                                        disabled: k,
                                        onClick: () => {
                                            var t;
                                            null != V && V !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && B(S.L.UNKNOWN), null == e || null == (t = e.onClick) || t.call(e), U(!M), K(), (0, f.v)(F, f.d.SOUNDBOARD);
                                        },
                                        onMouseEnter: (t) => {
                                            var n, r;
                                            null == (n = l.onMouseEnter) || n.call(l, t), null == e || null == (r = e.onMouseEnter) || r.call(e), q();
                                        },
                                        onMouseLeave: (t) => {
                                            var n, r;
                                            null == (n = l.onMouseLeave) || n.call(l, t), null == e || null == (r = e.onMouseLeave) || r.call(e), Q();
                                        },
                                        onContextMenu: z,
                                        fullWidth: !0,
                                        size: x ? u.zxk.Sizes.MEDIUM : u.zxk.Sizes.SMALL
                                    }),
                                    l
                                ),
                                {
                                    children: (0, r.jsx)(Y, {
                                        className: P.buttonIcon,
                                        size: 'sm',
                                        color: L ? 'currentColor' : M ? 'white' : u.TVs.colors.INTERACTIVE_ACTIVE
                                    })
                                }
                            )
                        )
                    })
            }),
        J = i.useCallback(() => {
            k || U(!M);
        }, [k, M]);
    return (
        (0, N.yp)({
            event: C.CkL.TOGGLE_SOUNDBOARD,
            handler: J
        }),
        (0, r.jsx)(h.Gt, {
            value: H,
            children: (0, r.jsx)(u.ua7, {
                targetElementRef: Z,
                text: w ? T.NW.string(T.t['Ox4/zc']) : R ? T.NW.string(T.t['+YBKYG']) : D ? T.NW.string(T.t.X1lQlp) : T.NW.string(T.t['6EJvHh']),
                children: (e) => X(e)
            })
        })
    );
}
