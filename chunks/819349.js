n.d(t, { S: () => v }), n(388685);
var i = n(951288),
    r = n(647438),
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
    y = n(108426),
    C = n(368736);
function v(e) {
    let { channel: t, onClose: n } = e,
        l = r.useRef(null),
        [v, _] = r.useState(!1),
        x = r.useRef(null),
        j = r.useRef(null),
        [O, E] = r.useState(0),
        S = (0, o.e7)([h.Z], () => h.Z.can(g.Plq.CREATE_INSTANT_INVITE, t), [t]),
        [P, I] = r.useState(null),
        Z = r.useRef(null),
        { isHoveringOrFocusing: T } = (0, m.Tu)(null == P ? Z : l),
        [N, A] = r.useState(!1),
        w = T || N,
        M = r.useCallback(() => {
            _(!1), null == n || n();
        }, [n]),
        R = r.useCallback(
            () => (
                null != x.current && clearTimeout(x.current),
                (x.current = setTimeout(M, 10000)),
                E((e) => e + 1),
                () => {
                    null != x.current && clearTimeout(x.current);
                }
            ),
            [M],
        ),
        L = r.useCallback(
            () => (
                null != j.current && clearTimeout(j.current),
                (j.current = setTimeout(() => {
                    _(!1);
                }, 150)),
                () => {
                    null != j.current && clearTimeout(j.current);
                }
            ),
            [],
        );
    (0, d.ZP)(R),
        r.useEffect(() => {
            if (!w) {
                R(), L();
                return;
            }
            null != x.current && clearTimeout(x.current), null != j.current && clearTimeout(j.current), _(!0);
        }, [w, R, L]),
        r.useEffect(() => {
            !(async function () {
                var e, n, i;
                let r = null != (e = p.Z.getInvite(t.id, {})) ? e : null;
                if (null === r) {
                    if (!S) return;
                    try {
                        await u.ZP.createInvite(t.id, {}, "VoiceInviteSuggestionsButton");
                    } catch (e) {
                        return;
                    }
                    r = null != (n = p.Z.getInvite(t.id, {})) ? n : null;
                }
                I(null != (i = null == r ? void 0 : r.code) ? i : null);
            })();
        }, [S, t.id]);
    let D = r.useCallback(() => {
            _(!0);
        }, []),
        k = r.useCallback(() => {
            _(!1), A(!1);
        }, []);
    return null == P
        ? null
        : (0, i.jsx)(c.yRy, {
              targetElementRef: l,
              shouldShow: v,
              position: "right",
              align: "top",
              spacing: 8,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) =>
                  (0, i.jsx)(
                      f.B,
                      (function (e) {
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
                      })(
                          {
                              channel: t,
                              inviteKey: P,
                              onHoverOrFocus: A,
                          },
                          e,
                      ),
                  ),
              onRequestOpen: D,
              onRequestClose: k,
              children: (e) =>
                  (0, i.jsx)(c.P3F, {
                      innerRef: l,
                      className: a()(y.clickable, C.voiceUser, C.userSmall, C.clickable),
                      onClick: () => M(),
                      "aria-label": b.intl.string(b.t.F3qiJr),
                      "aria-expanded": e["aria-expanded"],
                      "aria-controls": e["aria-controls"],
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
                                              className: a()(y.timer, { [y.paused]: w }),
                                              viewBox: "0 0 ".concat(24, " ").concat(24),
                                              style: { "--custom-voice-invite-suggestions-timer-duration": 10000 },
                                              children: [
                                                  (0, i.jsx)("circle", { className: y.progress }),
                                                  (0, i.jsx)("circle", { className: y.ring }),
                                              ],
                                          },
                                          "voice-invite-suggestions-timer-".concat(O),
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
                                      variant: "text-md/normal",
                                      className: y.label,
                                      lineClamp: 1,
                                      children: b.intl.string(b.t["EE+P0H"]),
                                  }),
                              }),
                              T
                                  ? (0, i.jsx)(c.Dio, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: y.icon,
                                    })
                                  : (0, i.jsx)(c.Fbu, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: y.icon,
                                    }),
                          ],
                      }),
                  }),
          });
}
