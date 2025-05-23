n.d(t, { Z: () => A }), n(388685);
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
    m = n(540059),
    b = n(706140),
    _ = n(294629),
    E = n(131951),
    O = n(459273),
    y = n(242291),
    I = n(792165),
    v = n(603074),
    C = n(981631),
    S = n(921944),
    N = n(388032),
    T = n(495301);
function P(e) {
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
function A(e) {
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
    let A = i.useRef(null),
        Z = (0, m.Q3)('SoundBoardRTCPanelButton'),
        { mute: x, suppress: L } = (0, _.Z)(t),
        w = (0, o.e7)([E.Z], () => E.Z.isDeaf()),
        R = x || L || w,
        [D, k] = i.useState(!1),
        M = t.getGuildId(),
        U = (0, y.sR)({ isSoundboardButtonDisabled: R }),
        [G, B] = (0, b.cv)(U),
        { analyticsLocations: V, parentAnalyticsLocation: H } = (0, h.ZP)(p.Z.SOUNDBOARD_BUTTON);
    function F(e) {
        null != M &&
            (0, d.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        j(
                            P(
                                {
                                    guildId: M,
                                    sourceAnalyticsLocations: V
                                },
                                t
                            ),
                            { onInteraction: (0, g.u)('SoundboardContextMenu', p.Z.RTC_PANEL) }
                        )
                    );
            });
    }
    let {
            Component: z,
            play: W,
            events: { onMouseEnter: Y, onMouseLeave: K }
        } = (0, c.j)(),
        q = (e) =>
            (0, r.jsx)(u.yRy, {
                targetElementRef: A,
                animation: u.yRy.Animation.FADE,
                shouldShow: D,
                position: 'top',
                onRequestClose: () => k(!1),
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, r.jsx)(v.Z, {
                        guildId: M,
                        channel: t,
                        onClose: n,
                        gridNotice:
                            G === s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                            (0, r.jsx)(I.o, {
                                onClose: n,
                                markAsDismissed: B
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, r.jsx)('div', {
                        ref: A,
                        children: (0, r.jsx)(
                            u.zxk,
                            j(
                                P(
                                    j(P({}, e, t), {
                                        className: a()(T.button, T.buttonColor, {
                                            [T.greyButtonActive]: D,
                                            [T.disabled]: R
                                        }),
                                        wrapperClassName: T.button,
                                        innerClassName: T.buttonContents,
                                        disabled: R,
                                        onClick: () => {
                                            var t;
                                            null != G && G !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && B(S.L.UNKNOWN), null == e || null == (t = e.onClick) || t.call(e), k(!D), W(), (0, f.v)(H, f.d.SOUNDBOARD);
                                        },
                                        onMouseEnter: (t) => {
                                            var n, r;
                                            null == (n = l.onMouseEnter) || n.call(l, t), null == e || null == (r = e.onMouseEnter) || r.call(e), Y();
                                        },
                                        onMouseLeave: (t) => {
                                            var n, r;
                                            null == (n = l.onMouseLeave) || n.call(l, t), null == e || null == (r = e.onMouseLeave) || r.call(e), K();
                                        },
                                        onContextMenu: F,
                                        fullWidth: !0,
                                        size: Z ? u.zxk.Sizes.MEDIUM : u.zxk.Sizes.SMALL
                                    }),
                                    l
                                ),
                                {
                                    children: (0, r.jsx)(z, {
                                        className: T.buttonIcon,
                                        size: 'sm',
                                        color: 'currentColor'
                                    })
                                }
                            )
                        )
                    })
            }),
        X = i.useCallback(() => {
            R || k(!D);
        }, [R, D]);
    return (
        (0, O.yp)({
            event: C.CkL.TOGGLE_SOUNDBOARD,
            handler: X
        }),
        (0, r.jsx)(h.Gt, {
            value: V,
            children: (0, r.jsx)(u.ua7, {
                targetElementRef: A,
                text: x ? N.intl.string(N.t['Ox4/zc']) : L ? N.intl.string(N.t['+YBKYG']) : w ? N.intl.string(N.t.X1lQlp) : N.intl.string(N.t['6EJvHh']),
                children: (e) => q(e)
            })
        })
    );
}
