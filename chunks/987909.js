n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(904245),
    o = n(541716),
    c = n(419922),
    d = n(665906),
    u = n(271383),
    m = n(496675),
    h = n(594174),
    _ = n(626135),
    p = n(709054),
    g = n(838440),
    f = n(981631),
    x = n(189390);
function E(e) {
    let { assets: t, currentUser: n, message: i } = e,
        l = (p.default.extractTimestamp(n.id) + p.default.extractTimestamp(i.id)) % t.length;
    return t[l];
}
function C(e) {
    let { currentUser: t, channel: n, message: a, buttonLabels: d, stickers: u, event: m, eventProperties: h } = e,
        [p, f] = l.useState(!1),
        C = l.useMemo(
            () =>
                E({
                    assets: u,
                    currentUser: t,
                    message: a
                }),
            [u, t, a]
        ),
        v = l.useMemo(
            () =>
                E({
                    assets: d,
                    currentUser: t,
                    message: a
                }),
            [d, t, a]
        ),
        I = l.useCallback(async () => {
            let { valid: e } = await (0, g.v)({
                type: o.Ie.FORM,
                content: '',
                channel: n
            });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: i } = e;
                    s.Z.sendGreetMessage(
                        t.id,
                        i.id,
                        s.Z.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0
                        })
                    );
                })({
                    channel: n,
                    message: a,
                    sticker: C
                }),
                (function (e) {
                    let { sticker: t, event: n, eventProperties: i } = e;
                    null != n &&
                        _.default.track(n, {
                            ...i,
                            sticker_id: t.id
                        });
                })({
                    sticker: C,
                    event: m,
                    eventProperties: h
                }));
        }, [n, a, C, m, h]);
    return (0, i.jsxs)(r.zxk, {
        className: x.CTAMessageButtonOuter,
        innerClassName: x.CTAMessageButton,
        color: r.Ttl.PRIMARY,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onClick: I,
        children: [
            (0, i.jsx)(c.ZP, {
                className: x.CTAMessageSticker,
                isInteracting: p,
                sticker: C,
                size: 28
            }),
            v
        ]
    });
}
function v(e) {
    let { channel: t, message: n, buttonLabels: l, stickers: r, event: s, eventProperties: o } = e,
        c = h.default.getCurrentUser(),
        _ = (function (e) {
            let { channel: t, message: n, currentUser: i } = e;
            return (0, a.e7)([m.Z, u.ZP], () => {
                var e;
                let l = t.guild_id;
                if (null == i || null == l) return !1;
                let a = (0, d.xl)(t),
                    r = m.Z.can(f.Plq.SEND_MESSAGES, t),
                    s = null === (e = u.ZP.getMember(l, i.id)) || void 0 === e ? void 0 : e.isPending,
                    o = n.author.bot;
                return r && !a && !s && !o;
            });
        })({
            channel: t,
            message: n,
            currentUser: c
        });
    return null != c && _
        ? (0, i.jsx)('div', {
              className: x.CTAMessage,
              children: (0, i.jsx)(C, {
                  currentUser: c,
                  channel: t,
                  message: n,
                  buttonLabels: l,
                  stickers: r,
                  event: s,
                  eventProperties: o
              })
          })
        : null;
}
