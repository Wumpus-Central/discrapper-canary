n.d(t, { Z: () => A }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(399606),
    s = n(704215),
    c = n(582019),
    u = n(28664),
    d = n(755721),
    p = n(481060),
    f = n(239091),
    h = n(100527),
    g = n(906732),
    m = n(522651),
    b = n(795318),
    _ = n(706140),
    E = n(294629),
    O = n(131951),
    v = n(459273),
    y = n(242291),
    I = n(792165),
    C = n(603074),
    S = n(981631),
    N = n(921944),
    T = n(388032),
    P = n(890332);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["channel"]);
    let A = i.useRef(null),
        { mute: Z, suppress: w } = (0, E.Z)(t),
        L = (0, o.e7)([O.Z], () => O.Z.isDeaf()),
        R = Z || w || L,
        [D, M] = i.useState(!1),
        k = t.getGuildId(),
        U = (0, y.sR)({ isSoundboardButtonDisabled: R }),
        [G, B] = (0, _.cv)(U),
        { analyticsLocations: H, parentAnalyticsLocation: V } = (0, g.ZP)(h.Z.SOUNDBOARD_BUTTON);
    function F(e) {
        null != k &&
            (0, f.jW)(e, async () => {
                let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        x(
                            j(
                                {
                                    guildId: k,
                                    sourceAnalyticsLocations: H,
                                },
                                t,
                            ),
                            { onInteraction: (0, b.u)("SoundboardContextMenu", h.Z.RTC_PANEL) },
                        ),
                    );
            });
    }
    let {
            Component: z,
            play: W,
            events: { onMouseEnter: Y, onMouseLeave: q },
        } = (0, c.j)(),
        K = i.useCallback(() => {
            R || M(!D);
        }, [R, D]);
    return (
        (0, v.yp)({
            event: S.CkL.TOGGLE_SOUNDBOARD,
            handler: K,
        }),
        (0, r.jsx)(g.Gt, {
            value: H,
            children: (0, r.jsx)(u.u, {
                targetElementRef: A,
                text: Z
                    ? T.intl.string(T.t["Ox4/zc"])
                    : w
                      ? T.intl.string(T.t["+YBKYG"])
                      : L
                        ? T.intl.string(T.t.X1lQlp)
                        : T.intl.string(T.t["6EJvHh"]),
                asContainer: !0,
                children: (0, r.jsx)(p.yRy, {
                    targetElementRef: A,
                    animation: p.yRy.Animation.FADE,
                    shouldShow: D,
                    position: "top",
                    onRequestClose: () => M(!1),
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, r.jsx)(C.Z, {
                            guildId: k,
                            channel: t,
                            onClose: n,
                            gridNotice:
                                G === s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                (0, r.jsx)(I.o, {
                                    onClose: n,
                                    markAsDismissed: B,
                                }),
                            analyticsSource: "rtc panel",
                        });
                    },
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: A,
                            children: (0, r.jsx)(
                                d.zx,
                                x(
                                    j(
                                        x(j({}, e), {
                                            className: a()(P.button, P.buttonColor, {
                                                [P.greyButtonActive]: D,
                                                [P.disabled]: R,
                                            }),
                                            wrapperClassName: P.button,
                                            innerClassName: P.buttonContents,
                                            disabled: R,
                                            onClick: () => {
                                                null != G &&
                                                    G !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                                    B(N.L.UNKNOWN),
                                                    M(!D),
                                                    W(),
                                                    (0, m.v)(V, m.d.SOUNDBOARD);
                                            },
                                            onMouseEnter: (e) => {
                                                var t;
                                                null == (t = l.onMouseEnter) || t.call(l, e), Y();
                                            },
                                            onMouseLeave: (e) => {
                                                var t;
                                                null == (t = l.onMouseLeave) || t.call(l, e), q();
                                            },
                                            onContextMenu: F,
                                            fullWidth: !0,
                                            size: d.zx.Sizes.MEDIUM,
                                        }),
                                        l,
                                    ),
                                    {
                                        children: (0, r.jsx)(z, {
                                            className: P.buttonIcon,
                                            size: "sm",
                                            color: "currentColor",
                                        }),
                                    },
                                ),
                            ),
                        }),
                }),
            }),
        })
    );
}
