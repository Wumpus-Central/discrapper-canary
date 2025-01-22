r.d(n, {
    v: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(481060),
    s = r(570140),
    l = r(468026),
    u = r(673750),
    c = r(300429),
    d = r(594174),
    f = r(626135),
    p = r(760729),
    h = r(74538),
    _ = r(981631),
    m = r(388032);
function g(e, n) {
    (0, o.openModal)((r) =>
        (0, a.jsx)(l.default, {
            title: m.intl.string(m.t.l8rYLi),
            body: m.intl.formatToPlainString(m.t.FfjF19, {
                currentLength: e,
                maxLength: n
            }),
            confirmText: m.intl.string(m.t.BddRzc),
            ...r
        })
    ),
        f.default.track(_.rMx.OPEN_MODAL, {
            type: 'Message Too Long Alert',
            message_content_length: e
        });
}
function E(e) {
    var n;
    let { openWarningPopout: r, type: i, content: d, stickers: f, uploads: h, channel: E, restrictMentions: v, respectCooldown: y, userCanUsePremiumMessageLength: b, resolve: I } = e;
    if (0 === d.length && !(null === (n = i.submit) || void 0 === n ? void 0 : n.allowEmptyMessage) && (null == f || 0 === f.length) && (null == h || 0 === h.length)) {
        I({
            valid: !1,
            failureReason: _.zYc.EMPTY_MESSAGE
        });
        return;
    }
    let T = b ? _.en1 : _.J6R,
        S = !b;
    if (d.length > T) {
        S && null != E
            ? s.Z.dispatch({
                  type: 'MESSAGE_LENGTH_UPSELL',
                  channel: E,
                  content: d
              })
            : g(d.length, T),
            I({
                valid: !1,
                failureReason: _.zYc.MESSAGE_TOO_LONG
            });
        return;
    }
    if (null != E) {
        if (null != E.getGuildId() && y && c.Z.getSlowmodeCooldownGuess(E.id) > 0) {
            I({
                valid: !1,
                failureReason: _.zYc.SLOWMODE_COOLDOWN
            });
            return;
        }
        if (null != r)
            for (let { check: e, analyticsType: n, animation: i } of p.$) {
                let a = e(d, E, v);
                if (!1 !== a) {
                    r({
                        analyticsType: n,
                        channel: E,
                        onCancel: () =>
                            I({
                                valid: !1,
                                failureReason: _.zYc.SHOUTING_CANCELLED
                            }),
                        onConfirm: () => I({ valid: !0 }),
                        popoutText: a,
                        animation: i
                    });
                    return;
                }
            }
    }
    if (u.ZP.isFull()) {
        (0, o.openModal)(
            (e) =>
                (0, a.jsx)(l.default, {
                    title: m.intl.string(m.t['7Q4eo6']),
                    body: m.intl.string(m.t.gi6XHh),
                    confirmText: m.intl.string(m.t.Z4U1g4),
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
function v(e) {
    let { openWarningPopout: n, type: r, content: i, stickers: a, uploads: o, channel: s, restrictMentions: l = !0, respectCooldown: u = !0 } = e,
        c = h.ZP.canUseIncreasedMessageLength(d.default.getCurrentUser());
    return new Promise((e) =>
        E({
            openWarningPopout: n,
            type: r,
            content: i,
            stickers: a,
            uploads: o,
            channel: s,
            restrictMentions: l,
            respectCooldown: u,
            userCanUsePremiumMessageLength: c,
            resolve: e
        })
    );
}
