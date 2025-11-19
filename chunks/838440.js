n.d(t, { v: () => h }), n(388685), n(473749);
var r = n(570140),
    i = n(668781),
    a = n(673750),
    o = n(300429),
    s = n(594174),
    l = n(626135),
    c = n(760729),
    u = n(74538),
    d = n(981631),
    f = n(388032);
function _(e, t) {
    i.Z.show({
        title: f.intl.string(f.t.l8rYLt),
        body: f.intl.formatToPlainString(f.t.FfjF15, {
            currentLength: e,
            maxLength: t,
        }),
        confirmText: f.intl.string(f.t.BddRzS),
    }),
        l.default.track(d.rMx.OPEN_MODAL, {
            type: "Message Too Long Alert",
            message_content_length: e,
        });
}
function p(e) {
    var t;
    let {
        openWarningPopout: n,
        type: s,
        content: l,
        stickers: u,
        uploads: p,
        channel: h,
        restrictMentions: m,
        respectCooldown: g,
        userCanUsePremiumMessageLength: E,
        resolve: b,
    } = e;
    if (
        0 === l.length &&
        !(null == (t = s.submit) ? void 0 : t.allowEmptyMessage) &&
        (null == u || 0 === u.length) &&
        (null == p || 0 === p.length)
    )
        return void b({
            valid: !1,
            failureReason: d.zYc.EMPTY_MESSAGE,
        });
    let y = E ? d.en1 : d.J6R,
        O = !E;
    if (l.length > y) {
        O && null != h
            ? r.Z.dispatch({
                  type: "MESSAGE_LENGTH_UPSELL",
                  channel: h,
                  content: l,
              })
            : _(l.length, y),
            b({
                valid: !1,
                failureReason: d.zYc.MESSAGE_TOO_LONG,
            });
        return;
    }
    if (null != h) {
        if (null != h.getGuildId() && g && o.Z.getSlowmodeCooldownGuess(h.id) > 0)
            return void b({
                valid: !1,
                failureReason: d.zYc.SLOWMODE_COOLDOWN,
            });
        if (null != n)
            for (let { check: e, analyticsType: t, animation: r } of c.$) {
                let i = e(l, h, m);
                if (!1 !== i)
                    return void n({
                        analyticsType: t,
                        channel: h,
                        onCancel: () =>
                            b({
                                valid: !1,
                                failureReason: d.zYc.SHOUTING_CANCELLED,
                            }),
                        onConfirm: () => b({ valid: !0 }),
                        popoutText: i,
                        animation: r,
                    });
            }
    }
    if (a.ZP.isFull()) {
        i.Z.show({
            title: f.intl.string(f.t["7Q4eo2"]),
            body: f.intl.string(f.t.gi6XHp),
            confirmText: f.intl.string(f.t["Z4U1g/"]),
        }),
            b({
                valid: !1,
                failureReason: d.zYc.RATE_LIMITED,
            });
        return;
    }
    b({ valid: !0 });
}
function h(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: r,
            stickers: i,
            uploads: a,
            channel: o,
            restrictMentions: l = !0,
            respectCooldown: c = !0,
        } = e,
        d = u.ZP.canUseIncreasedMessageLength(s.default.getCurrentUser());
    return new Promise((e) =>
        p({
            openWarningPopout: t,
            type: n,
            content: r,
            stickers: i,
            uploads: a,
            channel: o,
            restrictMentions: l,
            respectCooldown: c,
            userCanUsePremiumMessageLength: d,
            resolve: e,
        }),
    );
}
