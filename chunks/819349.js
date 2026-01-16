n.d(t, { S: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(81239),
    s = n(990547),
    c = n(442837),
    u = n(681715),
    d = n(481060),
    p = n(493773),
    f = n(100527),
    h = n(906732),
    g = n(213609),
    m = n(496675),
    b = n(626135),
    y = n(415397),
    v = n(771027),
    O = n(981631),
    j = n(388032),
    x = n(165343),
    C = n(960414);
function E(e) {
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
let S = (e) => 1 - Math.pow(1 - e, 4);
function _(e) {
    let { channel: t, onClose: n } = e,
        l = i.useRef(null),
        [_, I] = i.useState(!1),
        P = i.useRef(null),
        Z = i.useRef(null),
        [N, T] = i.useState(0),
        { analyticsLocations: A } = (0, h.ZP)(f.Z.VOICE_INVITE_SUGGESTIONS);
    (0, g.Z)({
        name: s.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: s.ImpressionTypes.VIEW,
        properties: {
            voice_channel_id: t.id,
            voice_guild_id: t.guild_id,
            location_stack: A,
        },
    });
    let w = (0, c.e7)([m.Z], () => m.Z.can(O.Plq.CREATE_INSTANT_INVITE, t), [t]),
        [R, D] = i.useState(!1),
        [M, k] = i.useState("unknown"),
        L = i.useRef(null),
        { isHoveringOrFocusing: U } = (0, v.Tu)(w ? l : L),
        [G, B] = i.useState(!1),
        F = U || G,
        H = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                b.default.track(O.rMx.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: A,
                }),
                    I(!1),
                    null == n || n();
            },
            [t, n, A],
        ),
        V = (0, d.q_F)({
            from: { height: "0px" },
            to: { height: "".concat(32, "px") },
            reverse: R,
            config: {
                duration: 200,
                easing: S,
                clamp: !0,
            },
            onRest: () => {
                R && H(M);
            },
        }),
        z = i.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
            D(!0), k(e);
        }, []),
        W = i.useCallback(
            () => (
                null != P.current && clearTimeout(P.current),
                (P.current = setTimeout(() => z("timeout"), 10000)),
                T((e) => e + 1),
                () => {
                    null != P.current && clearTimeout(P.current);
                }
            ),
            [z],
        ),
        K = i.useCallback(
            () => (
                null != Z.current && clearTimeout(Z.current),
                (Z.current = setTimeout(() => {
                    I(!1);
                }, 150)),
                () => {
                    null != Z.current && clearTimeout(Z.current);
                }
            ),
            [],
        );
    (0, p.ZP)(W),
        i.useEffect(() => {
            if (!F) {
                W(), K();
                return;
            }
            null != P.current && clearTimeout(P.current), null != Z.current && clearTimeout(Z.current), I(!0);
        }, [F, W, K]);
    let Y = i.useCallback(() => {
            I(!0);
        }, []),
        q = i.useCallback(() => {
            I(!1), B(!1);
        }, []);
    return w
        ? (0, r.jsx)(d.yRy, {
              targetElementRef: l,
              shouldShow: _,
              position: "right",
              align: "top",
              spacing: 8,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) =>
                  (0, r.jsx)(
                      y.B,
                      E(
                          {
                              channel: t,
                              onHoverOrFocus: B,
                          },
                          e,
                      ),
                  ),
              onRequestOpen: Y,
              onRequestClose: q,
              children: (e) => {
                  var t, n;
                  return (0, r.jsx)(o.animated.div, {
                      className: x.animation,
                      style: V,
                      children: (0, r.jsx)(
                          d.P3F,
                          ((t = E(
                              {
                                  innerRef: l,
                                  className: a()({ [x.clickable]: !R }, C.voiceUser, C.userSmall, C.clickable),
                                  "aria-disabled": R,
                                  "aria-label": j.intl.string(j.t.F3qiJr),
                              },
                              e,
                          )),
                          (n = n =
                              {
                                  children: (0, r.jsxs)("div", {
                                      className: a()(x.content, C.content),
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: x.leading,
                                              style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                              children: [
                                                  (0, r.jsxs)(
                                                      "svg",
                                                      {
                                                          className: a()(x.timer, { [x.paused]: F }),
                                                          viewBox: "0 0 ".concat(24, " ").concat(24),
                                                          style: {
                                                              "--custom-voice-invite-suggestions-timer-duration": 10000,
                                                          },
                                                          children: [
                                                              (0, r.jsx)("circle", { className: x.progress }),
                                                              (0, r.jsx)("circle", { className: x.ring }),
                                                          ],
                                                      },
                                                      "voice-invite-suggestions-timer-".concat(N),
                                                  ),
                                                  (0, r.jsx)(d.oLu, {
                                                      size: "custom",
                                                      width: 14,
                                                      height: 14,
                                                      color: "currentColor",
                                                      className: a()(x.userIcon, x.icon),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(u.u, {
                                              text: j.intl.string(j.t["EE+P0H"]),
                                              overflowOnly: !0,
                                              children: (0, r.jsx)(d.Text, {
                                                  variant: "text-sm/medium",
                                                  className: x.label,
                                                  lineClamp: 1,
                                                  children: j.intl.string(j.t["EE+P0H"]),
                                              }),
                                          }),
                                          U
                                              ? (0, r.jsx)(d.P3F, {
                                                    className: x.close,
                                                    onClick: () => z("user_explicit"),
                                                    "aria-label": j.intl.string(j.t.cpT0Cq),
                                                    children: (0, r.jsx)(d.Dio, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: x.icon,
                                                    }),
                                                })
                                              : (0, r.jsx)(d.Fbu, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: x.icon,
                                                }),
                                      ],
                                  }),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
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
