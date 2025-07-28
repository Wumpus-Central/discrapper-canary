(n.d(t, { Z: () => A }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(399606),
    s = n(704215),
    c = n(582019),
    u = n(755721),
    d = n(481060),
    p = n(239091),
    h = n(100527),
    f = n(906732),
    g = n(522651),
    m = n(795318),
    b = n(706140),
    _ = n(294629),
    O = n(131951),
    E = n(459273),
    y = n(242291),
    v = n(792165),
    I = n(603074),
    C = n(981631),
    S = n(921944),
    N = n(388032),
    T = n(566177);
function P(e) {
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['channel']);
    let A = i.useRef(null),
        { mute: x, suppress: Z } = (0, _.Z)(t),
        w = (0, o.e7)([O.Z], () => O.Z.isDeaf()),
        L = x || Z || w,
        [R, D] = i.useState(!1),
        k = t.getGuildId(),
        M = (0, y.sR)({ isSoundboardButtonDisabled: L }),
        [U, G] = (0, b.cv)(M),
        { analyticsLocations: V, parentAnalyticsLocation: B } = (0, f.ZP)(h.Z.SOUNDBOARD_BUTTON);
    function H(e) {
        null != k &&
            (0, p.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        j(
                            P(
                                {
                                    guildId: k,
                                    sourceAnalyticsLocations: V
                                },
                                t
                            ),
                            { onInteraction: (0, m.u)('SoundboardContextMenu', h.Z.RTC_PANEL) }
                        )
                    );
            });
    }
    let {
            Component: F,
            play: z,
            events: { onMouseEnter: W, onMouseLeave: Y }
        } = (0, c.j)(),
        K = (e) =>
            (0, r.jsx)(d.yRy, {
                targetElementRef: A,
                animation: d.yRy.Animation.FADE,
                shouldShow: R,
                position: 'top',
                onRequestClose: () => D(!1),
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, r.jsx)(I.Z, {
                        guildId: k,
                        channel: t,
                        onClose: n,
                        gridNotice:
                            U === s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                            (0, r.jsx)(v.o, {
                                onClose: n,
                                markAsDismissed: G
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, r.jsx)('div', {
                        ref: A,
                        children: (0, r.jsx)(
                            u.zx,
                            j(
                                P(
                                    j(P({}, e, t), {
                                        className: a()(T.button, T.buttonColor, {
                                            [T.greyButtonActive]: R,
                                            [T.disabled]: L
                                        }),
                                        wrapperClassName: T.button,
                                        innerClassName: T.buttonContents,
                                        disabled: L,
                                        onClick: () => {
                                            var t;
                                            (null != U && U !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && G(S.L.UNKNOWN), null == e || null == (t = e.onClick) || t.call(e), D(!R), z(), (0, g.v)(B, g.d.SOUNDBOARD));
                                        },
                                        onMouseEnter: (t) => {
                                            var n, r;
                                            (null == (n = l.onMouseEnter) || n.call(l, t), null == e || null == (r = e.onMouseEnter) || r.call(e), W());
                                        },
                                        onMouseLeave: (t) => {
                                            var n, r;
                                            (null == (n = l.onMouseLeave) || n.call(l, t), null == e || null == (r = e.onMouseLeave) || r.call(e), Y());
                                        },
                                        onContextMenu: H,
                                        fullWidth: !0,
                                        size: u.zx.Sizes.MEDIUM
                                    }),
                                    l
                                ),
                                {
                                    'data-migration-pending': !0,
                                    children: (0, r.jsx)(F, {
                                        className: T.buttonIcon,
                                        size: 'sm',
                                        color: 'currentColor'
                                    })
                                }
                            )
                        )
                    })
            }),
        q = i.useCallback(() => {
            L || D(!R);
        }, [L, R]);
    return (
        (0, E.yp)({
            event: C.CkL.TOGGLE_SOUNDBOARD,
            handler: q
        }),
        (0, r.jsx)(f.Gt, {
            value: V,
            children: (0, r.jsx)(d.ua7, {
                targetElementRef: A,
                text: x ? N.intl.string(N.t['Ox4/zc']) : Z ? N.intl.string(N.t['+YBKYG']) : w ? N.intl.string(N.t.X1lQlp) : N.intl.string(N.t['6EJvHh']),
                children: (e) => K(e)
            })
        })
    );
}
