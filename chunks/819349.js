n.d(t, { S: () => _ }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(620792),
    s = n(990547),
    c = n(442837),
    u = n(681715),
    d = n(481060),
    p = n(493773),
    f = n(100527),
    h = n(906732),
    m = n(213609),
    g = n(496675),
    b = n(626135),
    y = n(415397),
    C = n(771027),
    v = n(981631),
    x = n(388032),
    O = n(165343),
    E = n(960414);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let S = (e) => 1 - Math.pow(1 - e, 4);
function _(e) {
    let { channel: t, onClose: n } = e,
        l = r.useRef(null),
        [_, P] = r.useState(!1),
        I = r.useRef(null),
        Z = r.useRef(null),
        [T, N] = r.useState(0),
        { analyticsLocations: A } = (0, h.ZP)(f.Z.VOICE_INVITE_SUGGESTIONS);
    (0, m.Z)({
        name: s.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: s.ImpressionTypes.VIEW,
        properties: {
            voice_channel_id: t.id,
            voice_guild_id: t.guild_id,
            location_stack: A,
        },
    });
    let w = (0, c.e7)([g.Z], () => g.Z.can(v.Plq.CREATE_INSTANT_INVITE, t), [t]),
        [M, R] = r.useState(!1),
        [D, k] = r.useState("unknown"),
        L = r.useRef(null),
        { isHoveringOrFocusing: U } = (0, C.Tu)(w ? l : L),
        [V, H] = r.useState(!1),
        F = U || V,
        B = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                b.default.track(v.rMx.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: A,
                }),
                    P(!1),
                    null == n || n();
            },
            [t, n, A],
        ),
        G = (0, d.q_F)({
            from: { height: "0px" },
            to: { height: "".concat(32, "px") },
            reverse: M,
            config: {
                duration: 200,
                easing: S,
                clamp: !0,
            },
            onRest: () => {
                M && B(D);
            },
        }),
        W = r.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
            R(!0), k(e);
        }, []),
        z = r.useCallback(
            () => (
                null != I.current && clearTimeout(I.current),
                (I.current = setTimeout(() => W("timeout"), 10000)),
                N((e) => e + 1),
                () => {
                    null != I.current && clearTimeout(I.current);
                }
            ),
            [W],
        ),
        q = r.useCallback(
            () => (
                null != Z.current && clearTimeout(Z.current),
                (Z.current = setTimeout(() => {
                    P(!1);
                }, 150)),
                () => {
                    null != Z.current && clearTimeout(Z.current);
                }
            ),
            [],
        );
    (0, p.ZP)(z),
        r.useEffect(() => {
            if (!F) {
                z(), q();
                return;
            }
            null != I.current && clearTimeout(I.current), null != Z.current && clearTimeout(Z.current), P(!0);
        }, [F, z, q]);
    let K = r.useCallback(() => {
            P(!0);
        }, []),
        Y = r.useCallback(() => {
            P(!1), H(!1);
        }, []);
    return w
        ? (0, i.jsx)(d.yRy, {
              targetElementRef: l,
              shouldShow: _,
              position: "right",
              align: "top",
              spacing: 8,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) =>
                  (0, i.jsx)(
                      y.B,
                      j(
                          {
                              channel: t,
                              onHoverOrFocus: H,
                          },
                          e,
                      ),
                  ),
              onRequestOpen: K,
              onRequestClose: Y,
              children: (e) => {
                  var t, n;
                  return (0, i.jsx)(o.animated.div, {
                      className: O.animation,
                      style: G,
                      children: (0, i.jsx)(
                          d.P3F,
                          ((t = j(
                              {
                                  innerRef: l,
                                  className: a()({ [O.clickable]: !M }, E.voiceUser, E.userSmall, E.clickable),
                                  "aria-disabled": M,
                                  "aria-label": x.intl.string(x.t.F3qiJr),
                              },
                              e,
                          )),
                          (n = n =
                              {
                                  children: (0, i.jsxs)("div", {
                                      className: a()(O.content, E.content),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: O.leading,
                                              style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                              children: [
                                                  (0, i.jsxs)(
                                                      "svg",
                                                      {
                                                          className: a()(O.timer, { [O.paused]: F }),
                                                          viewBox: "0 0 ".concat(24, " ").concat(24),
                                                          style: {
                                                              "--custom-voice-invite-suggestions-timer-duration": 10000,
                                                          },
                                                          children: [
                                                              (0, i.jsx)("circle", { className: O.progress }),
                                                              (0, i.jsx)("circle", { className: O.ring }),
                                                          ],
                                                      },
                                                      "voice-invite-suggestions-timer-".concat(T),
                                                  ),
                                                  (0, i.jsx)(d.oLu, {
                                                      size: "custom",
                                                      width: 14,
                                                      height: 14,
                                                      color: "currentColor",
                                                      className: a()(O.userIcon, O.icon),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(u.u, {
                                              text: x.intl.string(x.t["EE+P0H"]),
                                              overflowOnly: !0,
                                              children: (0, i.jsx)(d.Text, {
                                                  variant: "text-sm/medium",
                                                  className: O.label,
                                                  lineClamp: 1,
                                                  children: x.intl.string(x.t["EE+P0H"]),
                                              }),
                                          }),
                                          U
                                              ? (0, i.jsx)(d.P3F, {
                                                    className: O.close,
                                                    onClick: () => W("user_explicit"),
                                                    "aria-label": x.intl.string(x.t.cpT0Cq),
                                                    children: (0, i.jsx)(d.Dio, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: O.icon,
                                                    }),
                                                })
                                              : (0, i.jsx)(d.Fbu, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: O.icon,
                                                }),
                                      ],
                                  }),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t),
                      ),
                  });
              },
          })
        : null;
}
