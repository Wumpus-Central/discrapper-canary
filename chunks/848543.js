(n.d(t, { Z: () => j }), n(388685));
var r = n(255367),
    i = n(73800),
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
    m = n(706140),
    b = n(294629),
    _ = n(131951),
    O = n(459273),
    E = n(242291),
    y = n(792165),
    I = n(603074),
    v = n(981631),
    C = n(921944),
    S = n(388032),
    N = n(566177);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
function j(e) {
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['channel']);
    let j = i.useRef(null),
        { mute: A, suppress: Z } = (0, b.Z)(t),
        x = (0, o.e7)([_.Z], () => _.Z.isDeaf()),
        L = A || Z || x,
        [w, R] = i.useState(!1),
        D = t.getGuildId(),
        k = (0, E.sR)({ isSoundboardButtonDisabled: L }),
        [M, U] = (0, m.cv)(k),
        { analyticsLocations: G, parentAnalyticsLocation: B } = (0, h.ZP)(p.Z.SOUNDBOARD_BUTTON);
    function V(e) {
        null != D &&
            (0, d.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        P(
                            T(
                                {
                                    guildId: D,
                                    sourceAnalyticsLocations: G
                                },
                                t
                            ),
                            { onInteraction: (0, g.u)('SoundboardContextMenu', p.Z.RTC_PANEL) }
                        )
                    );
            });
    }
    let {
            Component: H,
            play: F,
            events: { onMouseEnter: z, onMouseLeave: W }
        } = (0, c.j)(),
        Y = (e) =>
            (0, r.jsx)(u.yRy, {
                targetElementRef: j,
                animation: u.yRy.Animation.FADE,
                shouldShow: w,
                position: 'top',
                onRequestClose: () => R(!1),
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, r.jsx)(I.Z, {
                        guildId: D,
                        channel: t,
                        onClose: n,
                        gridNotice:
                            M === s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                            (0, r.jsx)(y.o, {
                                onClose: n,
                                markAsDismissed: U
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, r.jsx)('div', {
                        ref: j,
                        children: (0, r.jsx)(
                            u.zxk,
                            P(
                                T(
                                    P(T({}, e, t), {
                                        className: a()(N.button, N.buttonColor, {
                                            [N.greyButtonActive]: w,
                                            [N.disabled]: L
                                        }),
                                        wrapperClassName: N.button,
                                        innerClassName: N.buttonContents,
                                        disabled: L,
                                        onClick: () => {
                                            var t;
                                            (null != M && M !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && U(C.L.UNKNOWN), null == e || null == (t = e.onClick) || t.call(e), R(!w), F(), (0, f.v)(B, f.d.SOUNDBOARD));
                                        },
                                        onMouseEnter: (t) => {
                                            var n, r;
                                            (null == (n = l.onMouseEnter) || n.call(l, t), null == e || null == (r = e.onMouseEnter) || r.call(e), z());
                                        },
                                        onMouseLeave: (t) => {
                                            var n, r;
                                            (null == (n = l.onMouseLeave) || n.call(l, t), null == e || null == (r = e.onMouseLeave) || r.call(e), W());
                                        },
                                        onContextMenu: V,
                                        fullWidth: !0,
                                        size: u.zxk.Sizes.MEDIUM
                                    }),
                                    l
                                ),
                                {
                                    children: (0, r.jsx)(H, {
                                        className: N.buttonIcon,
                                        size: 'sm',
                                        color: 'currentColor'
                                    })
                                }
                            )
                        )
                    })
            }),
        K = i.useCallback(() => {
            L || R(!w);
        }, [L, w]);
    return (
        (0, O.yp)({
            event: v.CkL.TOGGLE_SOUNDBOARD,
            handler: K
        }),
        (0, r.jsx)(h.Gt, {
            value: G,
            children: (0, r.jsx)(u.ua7, {
                targetElementRef: j,
                text: A ? S.intl.string(S.t['Ox4/zc']) : Z ? S.intl.string(S.t['+YBKYG']) : x ? S.intl.string(S.t.X1lQlp) : S.intl.string(S.t['6EJvHh']),
                children: (e) => Y(e)
            })
        })
    );
}
