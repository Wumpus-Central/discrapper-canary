n.d(t, { v: () => g }), n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    s = n(468026),
    o = n(673750),
    l = n(300429),
    u = n(594174),
    c = n(626135),
    d = n(760729),
    f = n(74538),
    _ = n(981631),
    p = n(388032);
function h(e, t) {
    (0, r.h7j)((n) =>
        (0, i.jsx)(s.default, {
            title: p.intl.string(p.t.l8rYLi),
            body: p.intl.formatToPlainString(p.t.FfjF19, {
                currentLength: e,
                maxLength: t
            }),
            confirmText: p.intl.string(p.t.BddRzc),
            ...n
        })
    ),
        c.default.track(_.rMx.OPEN_MODAL, {
            type: 'Message Too Long Alert',
            message_content_length: e
        });
}
function m(e) {
    var t;
    let { openWarningPopout: n, type: u, content: c, stickers: f, uploads: m, channel: g, restrictMentions: E, respectCooldown: v, userCanUsePremiumMessageLength: y, resolve: I } = e;
    if (0 === c.length && !(null === (t = u.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == f || 0 === f.length) && (null == m || 0 === m.length)) {
        I({
            valid: !1,
            failureReason: _.zYc.EMPTY_MESSAGE
        });
        return;
    }
    let b = y ? _.en1 : _.J6R,
        T = !y;
    if (c.length > b) {
        T && null != g
            ? a.Z.dispatch({
                  type: 'MESSAGE_LENGTH_UPSELL',
                  channel: g,
                  content: c
              })
            : h(c.length, b),
            I({
                valid: !1,
                failureReason: _.zYc.MESSAGE_TOO_LONG
            });
        return;
    }
    if (null != g) {
        if (null != g.getGuildId() && v && l.Z.getSlowmodeCooldownGuess(g.id) > 0) {
            I({
                valid: !1,
                failureReason: _.zYc.SLOWMODE_COOLDOWN
            });
            return;
        }
        if (null != n)
            for (let { check: e, analyticsType: t, animation: i } of d.$) {
                let r = e(c, g, E);
                if (!1 !== r) {
                    n({
                        analyticsType: t,
                        channel: g,
                        onCancel: () =>
                            I({
                                valid: !1,
                                failureReason: _.zYc.SHOUTING_CANCELLED
                            }),
                        onConfirm: () => I({ valid: !0 }),
                        popoutText: r,
                        animation: i
                    });
                    return;
                }
            }
    }
    if (o.ZP.isFull()) {
        (0, r.h7j)(
            (e) =>
                (0, i.jsx)(s.default, {
                    title: p.intl.string(p.t['7Q4eo6']),
                    body: p.intl.string(p.t.gi6XHh),
                    confirmText: p.intl.string(p.t.Z4U1g4),
                    ...e
                }),
            { onCloseRequest: _.dG4 }
        ),
            I({
                valid: !1,
                failureReason: _.zYc.RATE_LIMITED
            });
        return;
    }
    I({ valid: !0 });
}
function g(e) {
    let { openWarningPopout: t, type: n, content: i, stickers: r, uploads: a, channel: s, restrictMentions: o = !0, respectCooldown: l = !0 } = e,
        c = f.ZP.canUseIncreasedMessageLength(u.default.getCurrentUser());
    return new Promise((e) =>
        m({
            openWarningPopout: t,
            type: n,
            content: i,
            stickers: r,
            uploads: a,
            channel: s,
            restrictMentions: o,
            respectCooldown: l,
            userCanUsePremiumMessageLength: c,
            resolve: e
        })
    );
}
