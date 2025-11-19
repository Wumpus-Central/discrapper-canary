n.d(t, { S: () => _ }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(681715),
    c = n(481060),
    u = n(447543),
    d = n(493773),
    p = n(341165),
    h = n(496675),
    f = n(415397),
    m = n(771027),
    g = n(981631),
    b = n(388032),
    y = n(214669),
    C = n(867721);
function v(e) {
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
function _(e) {
    let { channel: t, onClose: n } = e,
        l = r.useRef(null),
        [_, x] = r.useState(!1),
        j = r.useRef(null),
        O = r.useRef(null),
        [E, S] = r.useState(0),
        P = (0, o.e7)([h.Z], () => h.Z.can(g.Plq.CREATE_INSTANT_INVITE, t), [t]),
        [I, Z] = r.useState(null),
        T = r.useRef(null),
        { isHoveringOrFocusing: N } = (0, m.Tu)(null == I ? T : l),
        [A, w] = r.useState(!1),
        M = N || A,
        R = r.useCallback(() => {
            x(!1), null == n || n();
        }, [n]),
        L = r.useCallback(
            () => (
                null != j.current && clearTimeout(j.current),
                (j.current = setTimeout(R, 10000)),
                S((e) => e + 1),
                () => {
                    null != j.current && clearTimeout(j.current);
                }
            ),
            [R],
        ),
        k = r.useCallback(
            () => (
                null != O.current && clearTimeout(O.current),
                (O.current = setTimeout(() => {
                    x(!1);
                }, 150)),
                () => {
                    null != O.current && clearTimeout(O.current);
                }
            ),
            [],
        );
    (0, d.ZP)(L),
        r.useEffect(() => {
            if (!M) {
                L(), k();
                return;
            }
            null != j.current && clearTimeout(j.current), null != O.current && clearTimeout(O.current), x(!0);
        }, [M, L, k]),
        r.useEffect(() => {
            !(async function () {
                var e, n, i;
                let r = null != (e = p.Z.getInvite(t.id, {})) ? e : null;
                if (null === r) {
                    if (!P) return;
                    try {
                        await u.ZP.createInvite(t.id, {}, "VoiceInviteSuggestionsButton");
                    } catch (e) {
                        return;
                    }
                    r = null != (n = p.Z.getInvite(t.id, {})) ? n : null;
                }
                Z(null != (i = null == r ? void 0 : r.code) ? i : null);
            })();
        }, [P, t.id]);
    let D = r.useCallback(() => {
            x(!0);
        }, []),
        U = r.useCallback(() => {
            x(!1), w(!1);
        }, []);
    return null == I
        ? null
        : (0, i.jsx)(c.yRy, {
              targetElementRef: l,
              shouldShow: _,
              position: "right",
              align: "top",
              spacing: 8,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) =>
                  (0, i.jsx)(
                      f.B,
                      v(
                          {
                              channel: t,
                              inviteKey: I,
                              onHoverOrFocus: w,
                          },
                          e,
                      ),
                  ),
              onRequestOpen: D,
              onRequestClose: U,
              children: (e) => {
                  var t, n;
                  return (0, i.jsx)(
                      c.P3F,
                      ((t = v(
                          {
                              innerRef: l,
                              className: a()(y.clickable, C.voiceUser, C.userSmall, C.clickable),
                              "aria-label": b.intl.string(b.t.F3qiJr),
                          },
                          e,
                      )),
                      (n = n =
                          {
                              children: (0, i.jsxs)("div", {
                                  className: a()(y.content, C.content),
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: y.leading,
                                          style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                          children: [
                                              (0, i.jsxs)(
                                                  "svg",
                                                  {
                                                      className: a()(y.timer, { [y.paused]: M }),
                                                      viewBox: "0 0 ".concat(24, " ").concat(24),
                                                      style: {
                                                          "--custom-voice-invite-suggestions-timer-duration": 10000,
                                                      },
                                                      children: [
                                                          (0, i.jsx)("circle", { className: y.progress }),
                                                          (0, i.jsx)("circle", { className: y.ring }),
                                                      ],
                                                  },
                                                  "voice-invite-suggestions-timer-".concat(E),
                                              ),
                                              (0, i.jsx)(c.oLu, {
                                                  size: "custom",
                                                  width: 14,
                                                  height: 14,
                                                  color: "currentColor",
                                                  className: a()(y.userIcon, y.icon),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(s.u, {
                                          text: b.intl.string(b.t["EE+P0H"]),
                                          overflowOnly: !0,
                                          children: (0, i.jsx)(c.Text, {
                                              variant: "text-sm/medium",
                                              className: y.label,
                                              lineClamp: 1,
                                              children: b.intl.string(b.t["EE+P0H"]),
                                          }),
                                      }),
                                      N
                                          ? (0, i.jsx)(c.P3F, {
                                                className: y.close,
                                                onClick: R,
                                                "aria-label": b.intl.string(b.t.cpT0Cq),
                                                children: (0, i.jsx)(c.Dio, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: y.icon,
                                                }),
                                            })
                                          : (0, i.jsx)(c.Fbu, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: y.icon,
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
                  );
              },
          });
}
