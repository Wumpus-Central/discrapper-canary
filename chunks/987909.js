n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(904245),
    s = n(541716),
    c = n(419922),
    u = n(665906),
    d = n(271383),
    m = n(496675),
    h = n(594174),
    f = n(626135),
    p = n(709054),
    _ = n(838440),
    g = n(981631),
    E = n(189390);
function C(e) {
    let { assets: t, currentUser: n, message: i } = e,
        r = (p.default.extractTimestamp(n.id) + p.default.extractTimestamp(i.id)) % t.length;
    return t[r];
}
function I(e) {
    let { currentUser: t, channel: n, message: l, buttonLabels: u, stickers: d, event: m, eventProperties: h } = e,
        [p, g] = r.useState(!1),
        I = r.useMemo(
            () =>
                C({
                    assets: d,
                    currentUser: t,
                    message: l
                }),
            [d, t, l]
        ),
        x = r.useMemo(
            () =>
                C({
                    assets: u,
                    currentUser: t,
                    message: l
                }),
            [u, t, l]
        ),
        N = r.useCallback(async () => {
            let { valid: e } = await (0, _.v)({
                type: s.Ie.FORM,
                content: '',
                channel: n
            });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: i } = e;
                    o.Z.sendGreetMessage(
                        t.id,
                        i.id,
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
                    sticker: I
                }),
                !(function (e) {
                    let { sticker: t, event: n, eventProperties: i } = e;
                    null != n &&
                        f.default.track(n, {
                            ...i,
                            sticker_id: t.id
                        });
                })({
                    sticker: I,
                    event: m,
                    eventProperties: h
                }));
        }, [n, l, I, m, h]);
    return (0, i.jsxs)(a.Button, {
        className: E.CTAMessageButtonOuter,
        innerClassName: E.CTAMessageButton,
        color: a.ButtonColors.PRIMARY,
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        onClick: N,
        children: [
            (0, i.jsx)(c.ZP, {
                className: E.CTAMessageSticker,
                isInteracting: p,
                sticker: I,
                size: 28
            }),
            x
        ]
    });
}
function x(e) {
    let { channel: t, message: n, buttonLabels: r, stickers: a, event: o, eventProperties: s } = e,
        c = h.default.getCurrentUser(),
        f = (function (e) {
            let { channel: t, message: n, currentUser: i } = e;
            return (0, l.e7)([m.Z, d.ZP], () => {
                var e;
                let r = t.guild_id;
                if (null == i || null == r) return !1;
                let l = (0, u.xl)(t),
                    a = m.Z.can(g.Plq.SEND_MESSAGES, t),
                    o = null === (e = d.ZP.getMember(r, i.id)) || void 0 === e ? void 0 : e.isPending,
                    s = n.author.bot;
                return a && !l && !o && !s;
            });
        })({
            channel: t,
            message: n,
            currentUser: c
        });
    return null != c && f
        ? (0, i.jsx)('div', {
              className: E.CTAMessage,
              children: (0, i.jsx)(I, {
                  currentUser: c,
                  channel: t,
                  message: n,
                  buttonLabels: r,
                  stickers: a,
                  event: o,
                  eventProperties: s
              })
          })
        : null;
}
