n.d(t, { S: () => I }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(467721),
    s = n(990547),
    c = n(442837),
    u = n(681715),
    d = n(481060),
    p = n(447543),
    h = n(493773),
    f = n(100527),
    m = n(906732),
    g = n(213609),
    b = n(341165),
    C = n(496675),
    y = n(626135),
    _ = n(415397),
    v = n(771027),
    O = n(981631),
    x = n(388032),
    E = n(108426),
    j = n(368736);
function S(e) {
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
let P = (e) => 1 - Math.pow(1 - e, 4);
function I(e) {
    let { channel: t, onClose: n } = e,
        l = r.useRef(null),
        [I, Z] = r.useState(!1),
        T = r.useRef(null),
        N = r.useRef(null),
        [A, w] = r.useState(0),
        { analyticsLocations: M } = (0, m.ZP)(f.Z.VOICE_INVITE_SUGGESTIONS);
    (0, g.Z)({
        name: s.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: s.ImpressionTypes.VIEW,
        properties: {
            voice_channel_id: t.id,
            voice_guild_id: t.guild_id,
            location_stack: M,
        },
    });
    let R = (0, c.e7)([C.Z], () => C.Z.can(O.Plq.CREATE_INSTANT_INVITE, t), [t]),
        [L, D] = r.useState(null),
        [k, U] = r.useState(!1),
        [V, F] = r.useState("unknown"),
        B = r.useRef(null),
        { isHoveringOrFocusing: H } = (0, v.Tu)(null == L ? B : l),
        [G, W] = r.useState(!1),
        z = H || G,
        q = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                y.default.track(O.rMx.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: M,
                }),
                    Z(!1),
                    null == n || n();
            },
            [t, n, M],
        ),
        K = (0, d.q_F)({
            from: { height: "0px" },
            to: { height: "".concat(32, "px") },
            reverse: k,
            config: {
                duration: 200,
                easing: P,
                clamp: !0,
            },
            onRest: () => {
                k && q(V);
            },
        }),
        Y = r.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
            U(!0), F(e);
        }, []),
        X = r.useCallback(
            () => (
                null != T.current && clearTimeout(T.current),
                (T.current = setTimeout(() => Y("timeout"), 10000)),
                w((e) => e + 1),
                () => {
                    null != T.current && clearTimeout(T.current);
                }
            ),
            [Y],
        ),
        J = r.useCallback(
            () => (
                null != N.current && clearTimeout(N.current),
                (N.current = setTimeout(() => {
                    Z(!1);
                }, 150)),
                () => {
                    null != N.current && clearTimeout(N.current);
                }
            ),
            [],
        );
    (0, h.ZP)(X),
        r.useEffect(() => {
            if (!z) {
                X(), J();
                return;
            }
            null != T.current && clearTimeout(T.current), null != N.current && clearTimeout(N.current), Z(!0);
        }, [z, X, J]),
        r.useEffect(() => {
            !(async function () {
                var e, n, i;
                let r = null != (e = b.Z.getInvite(t.id, {})) ? e : null;
                if (null === r) {
                    if (!R) return;
                    try {
                        await p.ZP.createInvite(t.id, {}, "VoiceInviteSuggestionsButton");
                    } catch (e) {
                        return;
                    }
                    r = null != (n = b.Z.getInvite(t.id, {})) ? n : null;
                }
                D(null != (i = null == r ? void 0 : r.code) ? i : null);
            })();
        }, [R, t.id]);
    let Q = r.useCallback(() => {
            Z(!0);
        }, []),
        $ = r.useCallback(() => {
            Z(!1), W(!1);
        }, []);
    return null == L
        ? null
        : (0, i.jsx)(d.yRy, {
              targetElementRef: l,
              shouldShow: I,
              position: "right",
              align: "top",
              spacing: 8,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) =>
                  (0, i.jsx)(
                      _.B,
                      S(
                          {
                              channel: t,
                              inviteKey: L,
                              onHoverOrFocus: W,
                          },
                          e,
                      ),
                  ),
              onRequestOpen: Q,
              onRequestClose: $,
              children: (e) => {
                  var t, n;
                  return (0, i.jsx)(o.animated.div, {
                      className: E.animation,
                      style: K,
                      children: (0, i.jsx)(
                          d.P3F,
                          ((t = S(
                              {
                                  innerRef: l,
                                  className: a()({ [E.clickable]: !k }, j.voiceUser, j.userSmall, j.clickable),
                                  "aria-disabled": k,
                                  "aria-label": x.intl.string(x.t.F3qiJr),
                              },
                              e,
                          )),
                          (n = n =
                              {
                                  children: (0, i.jsxs)("div", {
                                      className: a()(E.content, j.content),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: E.leading,
                                              style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                              children: [
                                                  (0, i.jsxs)(
                                                      "svg",
                                                      {
                                                          className: a()(E.timer, { [E.paused]: z }),
                                                          viewBox: "0 0 ".concat(24, " ").concat(24),
                                                          style: {
                                                              "--custom-voice-invite-suggestions-timer-duration": 10000,
                                                          },
                                                          children: [
                                                              (0, i.jsx)("circle", { className: E.progress }),
                                                              (0, i.jsx)("circle", { className: E.ring }),
                                                          ],
                                                      },
                                                      "voice-invite-suggestions-timer-".concat(A),
                                                  ),
                                                  (0, i.jsx)(d.oLu, {
                                                      size: "custom",
                                                      width: 14,
                                                      height: 14,
                                                      color: "currentColor",
                                                      className: a()(E.userIcon, E.icon),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(u.u, {
                                              text: x.intl.string(x.t["EE+P0H"]),
                                              overflowOnly: !0,
                                              children: (0, i.jsx)(d.Text, {
                                                  variant: "text-sm/medium",
                                                  className: E.label,
                                                  lineClamp: 1,
                                                  children: x.intl.string(x.t["EE+P0H"]),
                                              }),
                                          }),
                                          H
                                              ? (0, i.jsx)(d.P3F, {
                                                    className: E.close,
                                                    onClick: () => Y("user_explicit"),
                                                    "aria-label": x.intl.string(x.t.cpT0Cq),
                                                    children: (0, i.jsx)(d.Dio, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: E.icon,
                                                    }),
                                                })
                                              : (0, i.jsx)(d.Fbu, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: E.icon,
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
          });
}
