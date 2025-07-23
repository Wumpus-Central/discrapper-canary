(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(755721),
    o = n(904245),
    s = n(541716),
    c = n(419922),
    u = n(665906),
    d = n(271383),
    p = n(496675),
    m = n(594174),
    f = n(626135),
    g = n(709054),
    h = n(838440),
    _ = n(981631),
    b = n(18485);
function E(e) {
    let { assets: t, currentUser: n, message: r } = e,
        i = (g.default.extractTimestamp(n.id) + g.default.extractTimestamp(r.id)) % t.length;
    return t[i];
}
function x(e) {
    let { currentUser: t, channel: n, message: l, buttonLabels: u, stickers: d, event: p, eventProperties: m } = e,
        [g, _] = i.useState(!1),
        x = i.useMemo(
            () =>
                E({
                    assets: d,
                    currentUser: t,
                    message: l
                }),
            [d, t, l]
        ),
        y = i.useMemo(
            () =>
                E({
                    assets: u,
                    currentUser: t,
                    message: l
                }),
            [u, t, l]
        ),
        v = i.useCallback(async () => {
            let { valid: e } = await (0, h.v)({
                type: s.Ie.FORM,
                content: '',
                channel: n
            });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: r } = e;
                    o.Z.sendGreetMessage(
                        t.id,
                        r.id,
                        o.Z.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0
                        })
                    );
                })({
                    channel: n,
                    message: l,
                    sticker: x
                }),
                (function (e) {
                    var t, n;
                    let { sticker: r, event: i, eventProperties: l } = e;
                    null != i &&
                        f.default.track(
                            i,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({}, l)),
                            (n = n = { sticker_id: r.id }),
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
                            t)
                        );
                })({
                    sticker: x,
                    event: p,
                    eventProperties: m
                }));
        }, [n, l, x, p, m]);
    return (0, r.jsxs)(a.zx, {
        className: b.CTAMessageButtonOuter,
        innerClassName: b.CTAMessageButton,
        color: a.Tt.PRIMARY,
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        onClick: v,
        children: [
            (0, r.jsx)(c.Z, {
                className: b.CTAMessageSticker,
                isInteracting: g,
                sticker: x,
                size: 28
            }),
            y
        ]
    });
}
function y(e) {
    let { channel: t, message: n, buttonLabels: i, stickers: a, event: o, eventProperties: s } = e,
        c = m.default.getCurrentUser(),
        f = (function (e) {
            let { channel: t, message: n, currentUser: r } = e;
            return (0, l.e7)([p.Z, d.ZP], () => {
                var e;
                let i = t.guild_id;
                if (null == r || null == i) return !1;
                let l = (0, u.xl)(t),
                    a = p.Z.can(_.Plq.SEND_MESSAGES, t),
                    o = null == (e = d.ZP.getMember(i, r.id)) ? void 0 : e.isPending,
                    s = n.author.bot;
                return a && !l && !o && !s;
            });
        })({
            channel: t,
            message: n,
            currentUser: c
        });
    return null != c && f
        ? (0, r.jsx)('div', {
              className: b.CTAMessage,
              children: (0, r.jsx)(x, {
                  currentUser: c,
                  channel: t,
                  message: n,
                  buttonLabels: i,
                  stickers: a,
                  event: o,
                  eventProperties: s
              })
          })
        : null;
}
