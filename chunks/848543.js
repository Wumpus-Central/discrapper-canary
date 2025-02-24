n.d(t, { Z: () => A }), n(47120);
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
    f = n(795318),
    g = n(540059),
    m = n(706140),
    b = n(221241),
    _ = n(294629),
    E = n(131951),
    O = n(459273),
    N = n(242291),
    v = n(792165),
    y = n(603074),
    I = n(981631),
    C = n(921944),
    S = n(388032),
    T = n(347363);
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
    var { channel: t, iconClassName: l, className: A, innerClassName: Z } = e,
        x = (function (e, t) {
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
    let L = (0, g.Q3)('SoundBoardRTCPanelButton'),
        { coloredIcons: w } = (0, b.Z)({ location: 'ConnectedRTCConnection' }),
        { mute: R, suppress: D } = (0, _.Z)(t),
        k = (0, a.e7)([E.Z], () => E.Z.isDeaf()),
        M = R || D || k,
        [U, G] = i.useState(!1),
        W = t.getGuildId(),
        V = (0, N.sR)({ isSoundboardButtonDisabled: M }),
        [B, H] = (0, m.cv)(V),
        { analyticsLocations: F } = (0, h.ZP)(p.Z.SOUNDBOARD_BUTTON);
    function z(e) {
        null != W &&
            (0, d.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, j(P({ guildId: W }, t), { onInteraction: (0, f.u)('SoundboardContextMenu', 'RTCConnection') }));
            });
    }
    let {
            Component: Y,
            play: K,
            events: { onMouseEnter: q, onMouseLeave: Q }
        } = (0, c.j)(),
        X = (e) =>
            (0, r.jsx)(u.yRy, {
                animation: u.yRy.Animation.FADE,
                shouldShow: U,
                position: 'top',
                onRequestClose: () => G(!1),
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, r.jsx)(y.Z, {
                        guildId: W,
                        channel: t,
                        onClose: n,
                        gridNotice:
                            B === s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                            (0, r.jsx)(v.o, {
                                onClose: n,
                                markAsDismissed: H
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(
                            u.zxk,
                            j(
                                P(
                                    j(P({}, e, t), {
                                        className: o()(A, {
                                            [T.buttonActive]: U && !w,
                                            [T.greyButtonActive]: U && w,
                                            [T.disabled]: M
                                        }),
                                        wrapperClassName: A,
                                        innerClassName: Z,
                                        disabled: M,
                                        onClick: () => {
                                            var t;
                                            null != B && B !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && H(C.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), G(!U), K();
                                        },
                                        onMouseEnter: (t) => {
                                            var n, r;
                                            null === (n = x.onMouseEnter) || void 0 === n || n.call(x, t), null == e || null === (r = e.onMouseEnter) || void 0 === r || r.call(e), q();
                                        },
                                        onMouseLeave: (t) => {
                                            var n, r;
                                            null === (n = x.onMouseLeave) || void 0 === n || n.call(x, t), null == e || null === (r = e.onMouseLeave) || void 0 === r || r.call(e), Q();
                                        },
                                        onContextMenu: z,
                                        fullWidth: !0,
                                        size: L ? u.zxk.Sizes.MEDIUM : u.zxk.Sizes.SMALL
                                    }),
                                    x
                                ),
                                {
                                    children: (0, r.jsx)(Y, {
                                        className: l,
                                        size: 'sm',
                                        color: w ? 'currentColor' : U ? 'white' : u.TVs.colors.INTERACTIVE_ACTIVE
                                    })
                                }
                            )
                        )
                    })
            }),
        J = i.useCallback(() => {
            M || G(!U);
        }, [M, U]);
    return (
        (0, O.yp)({
            event: I.CkL.TOGGLE_SOUNDBOARD,
            handler: J
        }),
        (0, r.jsx)(h.Gt, {
            value: F,
            children: (0, r.jsx)(u.ua7, {
                text: R ? S.NW.string(S.t['Ox4/zc']) : D ? S.NW.string(S.t['+YBKYG']) : k ? S.NW.string(S.t.X1lQlp) : S.NW.string(S.t['6EJvHh']),
                children: (e) => X(e)
            })
        })
    );
}
