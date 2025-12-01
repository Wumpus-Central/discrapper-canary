n.d(t, { S: () => x }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(666917),
    s = n(442837),
    c = n(681715),
    u = n(481060),
    d = n(447543),
    p = n(493773),
    h = n(341165),
    f = n(496675),
    m = n(415397),
    g = n(771027),
    b = n(981631),
    y = n(388032),
    C = n(108426),
    v = n(368736);
function _(e) {
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
let O = (e) => 1 - Math.pow(1 - e, 4);
function x(e) {
    let { channel: t, onClose: n } = e,
        l = r.useRef(null),
        [x, j] = r.useState(!1),
        E = r.useRef(null),
        S = r.useRef(null),
        [P, I] = r.useState(0),
        Z = (0, s.e7)([f.Z], () => f.Z.can(b.Plq.CREATE_INSTANT_INVITE, t), [t]),
        [T, N] = r.useState(null),
        [A, w] = r.useState(!1),
        M = r.useRef(null),
        { isHoveringOrFocusing: R } = (0, g.Tu)(null == T ? M : l),
        [L, D] = r.useState(!1),
        k = R || L,
        U = r.useCallback(() => {
            j(!1), null == n || n();
        }, [n]),
        F = (0, u.q_F)({
            from: { height: "0px" },
            to: { height: "".concat(32, "px") },
            reverse: A,
            config: {
                duration: 200,
                easing: O,
                clamp: !0,
            },
            onRest: () => {
                A && U();
            },
        }),
        B = r.useCallback(() => {
            w(!0);
        }, []),
        H = r.useCallback(
            () => (
                null != E.current && clearTimeout(E.current),
                (E.current = setTimeout(B, 10000)),
                I((e) => e + 1),
                () => {
                    null != E.current && clearTimeout(E.current);
                }
            ),
            [B],
        ),
        V = r.useCallback(
            () => (
                null != S.current && clearTimeout(S.current),
                (S.current = setTimeout(() => {
                    j(!1);
                }, 150)),
                () => {
                    null != S.current && clearTimeout(S.current);
                }
            ),
            [],
        );
    (0, p.ZP)(H),
        r.useEffect(() => {
            if (!k) {
                H(), V();
                return;
            }
            null != E.current && clearTimeout(E.current), null != S.current && clearTimeout(S.current), j(!0);
        }, [k, H, V]),
        r.useEffect(() => {
            !(async function () {
                var e, n, i;
                let r = null != (e = h.Z.getInvite(t.id, {})) ? e : null;
                if (null === r) {
                    if (!Z) return;
                    try {
                        await d.ZP.createInvite(t.id, {}, "VoiceInviteSuggestionsButton");
                    } catch (e) {
                        return;
                    }
                    r = null != (n = h.Z.getInvite(t.id, {})) ? n : null;
                }
                N(null != (i = null == r ? void 0 : r.code) ? i : null);
            })();
        }, [Z, t.id]);
    let G = r.useCallback(() => {
            j(!0);
        }, []),
        z = r.useCallback(() => {
            j(!1), D(!1);
        }, []);
    return null == T
        ? null
        : (0, i.jsx)(u.yRy, {
              targetElementRef: l,
              shouldShow: x,
              position: "right",
              align: "top",
              spacing: 8,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) =>
                  (0, i.jsx)(
                      m.B,
                      _(
                          {
                              channel: t,
                              inviteKey: T,
                              onHoverOrFocus: D,
                          },
                          e,
                      ),
                  ),
              onRequestOpen: G,
              onRequestClose: z,
              children: (e) => {
                  var t, n;
                  return (0, i.jsx)(o.animated.div, {
                      className: C.animation,
                      style: F,
                      children: (0, i.jsx)(
                          u.P3F,
                          ((t = _(
                              {
                                  innerRef: l,
                                  className: a()({ [C.clickable]: !A }, v.voiceUser, v.userSmall, v.clickable),
                                  "aria-disabled": A,
                                  "aria-label": y.intl.string(y.t.F3qiJr),
                              },
                              e,
                          )),
                          (n = n =
                              {
                                  children: (0, i.jsxs)("div", {
                                      className: a()(C.content, v.content),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: C.leading,
                                              style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                              children: [
                                                  (0, i.jsxs)(
                                                      "svg",
                                                      {
                                                          className: a()(C.timer, { [C.paused]: k }),
                                                          viewBox: "0 0 ".concat(24, " ").concat(24),
                                                          style: {
                                                              "--custom-voice-invite-suggestions-timer-duration": 10000,
                                                          },
                                                          children: [
                                                              (0, i.jsx)("circle", { className: C.progress }),
                                                              (0, i.jsx)("circle", { className: C.ring }),
                                                          ],
                                                      },
                                                      "voice-invite-suggestions-timer-".concat(P),
                                                  ),
                                                  (0, i.jsx)(u.oLu, {
                                                      size: "custom",
                                                      width: 14,
                                                      height: 14,
                                                      color: "currentColor",
                                                      className: a()(C.userIcon, C.icon),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(c.u, {
                                              text: y.intl.string(y.t["EE+P0H"]),
                                              overflowOnly: !0,
                                              children: (0, i.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  className: C.label,
                                                  lineClamp: 1,
                                                  children: y.intl.string(y.t["EE+P0H"]),
                                              }),
                                          }),
                                          R
                                              ? (0, i.jsx)(u.P3F, {
                                                    className: C.close,
                                                    onClick: B,
                                                    "aria-label": y.intl.string(y.t.cpT0Cq),
                                                    children: (0, i.jsx)(u.Dio, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: C.icon,
                                                    }),
                                                })
                                              : (0, i.jsx)(u.Fbu, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: C.icon,
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
