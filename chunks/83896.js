n.d(t, { I: () => v });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(399606),
    s = n(481060),
    c = n(287734),
    u = n(496675),
    d = n(19780),
    p = n(944486),
    h = n(626135),
    f = n(906605),
    m = n(833858),
    g = n(866071),
    b = n(223135),
    _ = n(981631),
    y = n(388032),
    C = n(10359),
    x = n(254477);
function v(e) {
    let { hangStatusActivity: t, channel: l, setPopoutRef: v } = e,
        O = i.useRef(null),
        j = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId() === l.id),
        E = (0, o.e7)([u.Z], () => u.Z.can(_.Plq.CONNECT, l)),
        S = (null == t ? void 0 : t.emoji) == null || (0, g.K)(t.emoji, l),
        I = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId());
    i.useEffect(() => {
        null == v || v(null == O ? void 0 : O.current);
    }, [O, v]),
        i.useEffect(() => {
            h.default.track(_.rMx.VIEW_HANG_STATUS, {
                source: "HangStatusPopout",
                guild_id: l.guild_id,
                channel_id: l.id,
            });
        }, [l.guild_id, l.id]);
    let P = i.useCallback(() => {
            !j &&
                E &&
                (c.default.selectVoiceChannel(l.id),
                h.default.track(_.rMx.HANG_STATUS_CTA_CLICKED, {
                    source: "HangStatusPopout",
                    guild_id: l.guild_id,
                    channel_id: l.id,
                }));
        }, [j, E, l.guild_id, l.id]),
        Z = i.useCallback(() => {
            if (!j || !S) return;
            let e = t.state;
            e === _.tNA.CUSTOM
                ? (0, s.ZDy)(async () => {
                      let { default: e } = await n.e("1631").then(n.bind(n, 333541));
                      return (n) => {
                          var i, l;
                          return (0, r.jsx)(
                              e,
                              ((i = (function (e) {
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
                              })({}, n)),
                              (l = l =
                                  {
                                      startingText: t.details,
                                      startingEmoji: t.emoji,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i),
                          );
                      };
                  })
                : (0, f.Zx)(e, !0),
                h.default.track(_.rMx.SWIPE_HANG_STATUS, {
                    guild_id: l.guild_id,
                    channel_id: l.id,
                    media_session_id: I,
                });
        }, [j, S, t, I, l.guild_id, l.id]);
    return (0, r.jsxs)("div", {
        ref: O,
        className: a()(x.popover, C.container),
        children: [
            (0, r.jsx)(b.Z, {
                className: C.icon,
                hangStatusActivity: t,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: C.statusText,
                children: (0, m.O8)(t),
            }),
            j
                ? S &&
                  (0, r.jsx)(s.zxk, {
                      size: "sm",
                      variant: "secondary",
                      text: y.intl.string(y.t["0eHzpq"]),
                      onClick: Z,
                  })
                : E &&
                  (0, r.jsx)(s.zxk, {
                      size: "sm",
                      variant: "secondary",
                      text: y.intl.string(y.t["B/dHXF"]),
                      onClick: P,
                  }),
        ],
    });
}
