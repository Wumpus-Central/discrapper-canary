n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(904245),
    s = n(541716),
    c = n(419922),
    d = n(665906),
    u = n(271383),
    p = n(496675),
    m = n(594174),
    f = n(626135),
    h = n(709054),
    g = n(838440),
    _ = n(981631),
    b = n(526168);
function v(e) {
    let { assets: t, currentUser: n, message: r } = e,
        i = (h.default.extractTimestamp(n.id) + h.default.extractTimestamp(r.id)) % t.length;
    return t[i];
}
function y(e) {
    let { currentUser: t, channel: n, message: a, buttonLabels: d, stickers: u, event: p, eventProperties: m } = e,
        [h, _] = i.useState(!1),
        y = i.useMemo(
            () =>
                v({
                    assets: u,
                    currentUser: t,
                    message: a
                }),
            [u, t, a]
        ),
        x = i.useMemo(
            () =>
                v({
                    assets: d,
                    currentUser: t,
                    message: a
                }),
            [d, t, a]
        ),
        O = i.useCallback(async () => {
            let { valid: e } = await (0, g.v)({
                type: s.Ie.FORM,
                content: '',
                channel: n
            });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: r } = e;
                    l.Z.sendGreetMessage(
                        t.id,
                        r.id,
                        l.Z.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0
                        })
                    );
                })({
                    channel: n,
                    message: a,
                    sticker: y
                }),
                (function (e) {
                    let { sticker: t, event: n, eventProperties: r } = e;
                    if (null != n) {
                        var i, a;
                        f.default.track(
                            n,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, r)),
                            (a = a = { sticker_id: t.id }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            i)
                        );
                    }
                })({
                    sticker: y,
                    event: p,
                    eventProperties: m
                }));
        }, [n, a, y, p, m]);
    return (0, r.jsxs)(o.zxk, {
        className: b.CTAMessageButtonOuter,
        innerClassName: b.CTAMessageButton,
        color: o.Ttl.PRIMARY,
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        onClick: O,
        children: [
            (0, r.jsx)(c.ZP, {
                className: b.CTAMessageSticker,
                isInteracting: h,
                sticker: y,
                size: 28
            }),
            x
        ]
    });
}
function x(e) {
    let { channel: t, message: n, buttonLabels: i, stickers: o, event: l, eventProperties: s } = e,
        c = m.default.getCurrentUser(),
        f = (function (e) {
            let { channel: t, message: n, currentUser: r } = e;
            return (0, a.e7)([p.Z, u.ZP], () => {
                var e;
                let i = t.guild_id;
                if (null == r || null == i) return !1;
                let a = (0, d.xl)(t),
                    o = p.Z.can(_.Plq.SEND_MESSAGES, t),
                    l = null === (e = u.ZP.getMember(i, r.id)) || void 0 === e ? void 0 : e.isPending,
                    s = n.author.bot;
                return o && !a && !l && !s;
            });
        })({
            channel: t,
            message: n,
            currentUser: c
        });
    return null != c && f
        ? (0, r.jsx)('div', {
              className: b.CTAMessage,
              children: (0, r.jsx)(y, {
                  currentUser: c,
                  channel: t,
                  message: n,
                  buttonLabels: i,
                  stickers: o,
                  event: l,
                  eventProperties: s
              })
          })
        : null;
}
