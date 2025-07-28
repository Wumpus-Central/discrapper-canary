(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(159691),
    o = n(755721),
    s = n(904245),
    c = n(541716),
    u = n(419922),
    d = n(665906),
    p = n(223750),
    m = n(271383),
    f = n(496675),
    g = n(594174),
    _ = n(626135),
    h = n(709054),
    b = n(838440),
    E = n(981631),
    C = n(18485);
function x(e) {
    let { assets: t, currentUser: n, message: r } = e,
        i = (h.default.extractTimestamp(n.id) + h.default.extractTimestamp(r.id)) % t.length;
    return t[i];
}
function v(e) {
    let { currentUser: t, channel: n, message: l, buttonLabels: d, stickers: m, event: f, eventProperties: g } = e,
        h = (0, p.t)(),
        [E, v] = i.useState(!1),
        y = i.useMemo(
            () =>
                x({
                    assets: m,
                    currentUser: t,
                    message: l
                }),
            [m, t, l]
        ),
        O = i.useMemo(
            () =>
                x({
                    assets: d,
                    currentUser: t,
                    message: l
                }),
            [d, t, l]
        ),
        j = i.useCallback(async () => {
            let { valid: e } = await (0, b.v)({
                type: c.Ie.FORM,
                content: '',
                channel: n
            });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: r } = e;
                    s.Z.sendGreetMessage(
                        t.id,
                        r.id,
                        s.Z.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0
                        })
                    );
                })({
                    channel: n,
                    message: l,
                    sticker: y
                }),
                (function (e) {
                    var t, n;
                    let { sticker: r, event: i, eventProperties: l } = e;
                    null != i &&
                        _.default.track(
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
                    sticker: y,
                    event: f,
                    eventProperties: g
                }));
        }, [n, l, y, f, g]);
    return h
        ? (0, r.jsx)(a.zx, {
              variant: 'secondary',
              size: 'md',
              onClick: j,
              text: O
          })
        : (0, r.jsxs)(o.zx, {
              'data-migration-pending': !0,
              className: C.CTAMessageButtonOuter,
              innerClassName: C.CTAMessageButton,
              color: o.Tt.PRIMARY,
              onMouseEnter: () => v(!0),
              onMouseLeave: () => v(!1),
              onClick: j,
              children: [
                  (0, r.jsx)(u.Z, {
                      className: C.CTAMessageSticker,
                      isInteracting: E,
                      sticker: y,
                      size: 28
                  }),
                  O
              ]
          });
}
function y(e) {
    let { channel: t, message: n, buttonLabels: i, stickers: a, event: o, eventProperties: s } = e,
        c = g.default.getCurrentUser(),
        u = (function (e) {
            let { channel: t, message: n, currentUser: r } = e;
            return (0, l.e7)([f.Z, m.ZP], () => {
                var e;
                let i = t.guild_id;
                if (null == r || null == i) return !1;
                let l = (0, d.xl)(t),
                    a = f.Z.can(E.Plq.SEND_MESSAGES, t),
                    o = null == (e = m.ZP.getMember(i, r.id)) ? void 0 : e.isPending,
                    s = n.author.bot;
                return a && !l && !o && !s;
            });
        })({
            channel: t,
            message: n,
            currentUser: c
        });
    return null != c && u
        ? (0, r.jsx)('div', {
              className: C.CTAMessage,
              children: (0, r.jsx)(v, {
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
