n.d(t, { Z: () => j }), n(47120);
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
    f = n(540059),
    g = n(706140),
    m = n(221241),
    b = n(294629),
    _ = n(131951),
    E = n(459273),
    O = n(242291),
    N = n(792165),
    v = n(603074),
    y = n(981631),
    I = n(921944),
    C = n(388032),
    S = n(347363);
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
    var { channel: t, iconClassName: l, className: j, innerClassName: A } = e,
        Z = (function (e, t) {
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
    let x = (0, f.Q3)('SoundBoardRTCPanelButton'),
        { coloredIcons: L } = (0, m.Z)({ location: 'ConnectedRTCConnection' }),
        { mute: w, suppress: R } = (0, b.Z)(t),
        D = (0, a.e7)([_.Z], () => _.Z.isDeaf()),
        k = w || R || D,
        [M, U] = i.useState(!1),
        G = t.getGuildId(),
        W = (0, O.sR)({ isSoundboardButtonDisabled: k }),
        [V, B] = (0, g.cv)(W),
        { analyticsLocations: H } = (0, h.ZP)(p.Z.SOUNDBOARD_BUTTON);
    function F(e) {
        null != G &&
            (0, d.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, T({ guildId: G }, t));
            });
    }
    let {
            Component: z,
            play: Y,
            events: { onMouseEnter: K, onMouseLeave: q }
        } = (0, c.j)(),
        X = (e) =>
            (0, r.jsx)(u.yRy, {
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
                            (0, r.jsx)(N.o, {
                                onClose: n,
                                markAsDismissed: B
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(
                            u.zxk,
                            P(
                                T(
                                    P(T({}, e, t), {
                                        className: o()(j, {
                                            [S.buttonActive]: M && !L,
                                            [S.greyButtonActive]: M && L,
                                            [S.disabled]: k
                                        }),
                                        wrapperClassName: j,
                                        innerClassName: A,
                                        disabled: k,
                                        onClick: () => {
                                            var t;
                                            null != V && V !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && B(I.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), U(!M), Y();
                                        },
                                        onMouseEnter: (t) => {
                                            var n, r;
                                            null === (n = Z.onMouseEnter) || void 0 === n || n.call(Z, t), null == e || null === (r = e.onMouseEnter) || void 0 === r || r.call(e), K();
                                        },
                                        onMouseLeave: (t) => {
                                            var n, r;
                                            null === (n = Z.onMouseLeave) || void 0 === n || n.call(Z, t), null == e || null === (r = e.onMouseLeave) || void 0 === r || r.call(e), q();
                                        },
                                        onContextMenu: F,
                                        fullWidth: !0,
                                        size: x ? u.zxk.Sizes.MEDIUM : u.zxk.Sizes.SMALL
                                    }),
                                    Z
                                ),
                                {
                                    children: (0, r.jsx)(z, {
                                        className: l,
                                        size: 'sm',
                                        color: L ? 'currentColor' : M ? 'white' : u.TVs.colors.INTERACTIVE_ACTIVE
                                    })
                                }
                            )
                        )
                    })
            }),
        Q = i.useCallback(() => {
            k || U(!M);
        }, [k, M]);
    return (
        (0, E.yp)({
            event: y.CkL.TOGGLE_SOUNDBOARD,
            handler: Q
        }),
        (0, r.jsx)(h.Gt, {
            value: H,
            children: (0, r.jsx)(u.ua7, {
                text: w ? C.NW.string(C.t['Ox4/zc']) : R ? C.NW.string(C.t['+YBKYG']) : D ? C.NW.string(C.t.X1lQlp) : C.NW.string(C.t['6EJvHh']),
                children: (e) => X(e)
            })
        })
    );
}
