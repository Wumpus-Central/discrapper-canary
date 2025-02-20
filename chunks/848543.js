n.d(t, { Z: () => P }), n(47120);
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
    m = n(294629),
    b = n(131951),
    _ = n(459273),
    E = n(242291),
    O = n(792165),
    N = n(603074),
    v = n(981631),
    y = n(921944),
    I = n(388032),
    C = n(347363);
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
function T(e, t) {
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
function P(e) {
    var { channel: t, iconClassName: l, className: P, innerClassName: j } = e,
        A = (function (e, t) {
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
    let Z = (0, f.Q3)('SoundBoardRTCPanelButton'),
        { mute: x, suppress: L } = (0, m.Z)(t),
        w = (0, a.e7)([b.Z], () => b.Z.isDeaf()),
        R = x || L || w,
        [D, k] = i.useState(!1),
        M = t.getGuildId(),
        U = (0, E.sR)({ isSoundboardButtonDisabled: R }),
        [G, W] = (0, g.cv)(U),
        { analyticsLocations: V } = (0, h.ZP)(p.Z.SOUNDBOARD_BUTTON);
    function B(e) {
        null != M &&
            (0, d.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, S({ guildId: M }, t));
            });
    }
    let {
            Component: H,
            play: F,
            events: { onMouseEnter: z, onMouseLeave: Y }
        } = (0, c.j)(),
        K = (e) =>
            (0, r.jsx)(u.yRy, {
                animation: u.yRy.Animation.FADE,
                shouldShow: D,
                position: 'top',
                onRequestClose: () => k(!1),
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, r.jsx)(N.Z, {
                        guildId: M,
                        channel: t,
                        onClose: n,
                        gridNotice:
                            G === s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                            (0, r.jsx)(O.o, {
                                onClose: n,
                                markAsDismissed: W
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(
                            u.zxk,
                            T(
                                S(
                                    T(S({}, e, t), {
                                        className: o()(P, {
                                            [C.buttonActive]: D,
                                            [C.disabled]: R
                                        }),
                                        wrapperClassName: P,
                                        innerClassName: j,
                                        disabled: R,
                                        onClick: () => {
                                            var t;
                                            null != G && G !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && W(y.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), k(!D), F();
                                        },
                                        onMouseEnter: (t) => {
                                            var n, r;
                                            null === (n = A.onMouseEnter) || void 0 === n || n.call(A, t), null == e || null === (r = e.onMouseEnter) || void 0 === r || r.call(e), z();
                                        },
                                        onMouseLeave: (t) => {
                                            var n, r;
                                            null === (n = A.onMouseLeave) || void 0 === n || n.call(A, t), null == e || null === (r = e.onMouseLeave) || void 0 === r || r.call(e), Y();
                                        },
                                        onContextMenu: B,
                                        fullWidth: !0,
                                        size: Z ? u.zxk.Sizes.MEDIUM : u.zxk.Sizes.SMALL
                                    }),
                                    A
                                ),
                                {
                                    children: (0, r.jsx)(H, {
                                        className: l,
                                        size: 'sm',
                                        color: D ? 'white' : u.TVs.colors.INTERACTIVE_ACTIVE
                                    })
                                }
                            )
                        )
                    })
            }),
        q = i.useCallback(() => {
            R || k(!D);
        }, [R, D]);
    return (
        (0, _.yp)({
            event: v.CkL.TOGGLE_SOUNDBOARD,
            handler: q
        }),
        (0, r.jsx)(h.Gt, {
            value: V,
            children: (0, r.jsx)(u.ua7, {
                text: x ? I.NW.string(I.t['Ox4/zc']) : L ? I.NW.string(I.t['+YBKYG']) : w ? I.NW.string(I.t.X1lQlp) : I.NW.string(I.t['6EJvHh']),
                children: (e) => K(e)
            })
        })
    );
}
