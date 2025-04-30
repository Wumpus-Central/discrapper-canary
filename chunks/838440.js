n.d(t, { v: () => b }), n(388685);
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(570140),
    o = n(468026),
    s = n(673750),
    l = n(300429),
    c = n(594174),
    u = n(626135),
    d = n(760729),
    f = n(74538),
    _ = n(981631),
    p = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    (0, i.h7j)((n) =>
        (0, r.jsx)(
            o.default,
            m(
                {
                    title: p.intl.string(p.t.l8rYLi),
                    body: p.intl.formatToPlainString(p.t.FfjF19, {
                        currentLength: e,
                        maxLength: t
                    }),
                    confirmText: p.intl.string(p.t.BddRzc)
                },
                n
            )
        )
    ),
        u.default.track(_.rMx.OPEN_MODAL, {
            type: 'Message Too Long Alert',
            message_content_length: e
        });
}
function E(e) {
    var t;
    let { openWarningPopout: n, type: c, content: u, stickers: f, uploads: h, channel: E, restrictMentions: b, respectCooldown: y, userCanUsePremiumMessageLength: O, resolve: v } = e;
    if (0 === u.length && !(null == (t = c.submit) ? void 0 : t.allowEmptyMessage) && (null == f || 0 === f.length) && (null == h || 0 === h.length))
        return void v({
            valid: !1,
            failureReason: _.zYc.EMPTY_MESSAGE
        });
    let I = O ? _.en1 : _.J6R,
        S = !O;
    if (u.length > I) {
        S && null != E
            ? a.Z.dispatch({
                  type: 'MESSAGE_LENGTH_UPSELL',
                  channel: E,
                  content: u
              })
            : g(u.length, I),
            v({
                valid: !1,
                failureReason: _.zYc.MESSAGE_TOO_LONG
            });
        return;
    }
    if (null != E) {
        if (null != E.getGuildId() && y && l.Z.getSlowmodeCooldownGuess(E.id) > 0)
            return void v({
                valid: !1,
                failureReason: _.zYc.SLOWMODE_COOLDOWN
            });
        if (null != n)
            for (let { check: e, analyticsType: t, animation: r } of d.$) {
                let i = e(u, E, b);
                if (!1 !== i)
                    return void n({
                        analyticsType: t,
                        channel: E,
                        onCancel: () =>
                            v({
                                valid: !1,
                                failureReason: _.zYc.SHOUTING_CANCELLED
                            }),
                        onConfirm: () => v({ valid: !0 }),
                        popoutText: i,
                        animation: r
                    });
            }
    }
    if (s.ZP.isFull()) {
        (0, i.h7j)(
            (e) =>
                (0, r.jsx)(
                    o.default,
                    m(
                        {
                            title: p.intl.string(p.t['7Q4eo6']),
                            body: p.intl.string(p.t.gi6XHh),
                            confirmText: p.intl.string(p.t.Z4U1g4)
                        },
                        e
                    )
                ),
            { onCloseRequest: _.dG4 }
        ),
            v({
                valid: !1,
                failureReason: _.zYc.RATE_LIMITED
            });
        return;
    }
    v({ valid: !0 });
}
function b(e) {
    let { openWarningPopout: t, type: n, content: r, stickers: i, uploads: a, channel: o, restrictMentions: s = !0, respectCooldown: l = !0 } = e,
        u = f.ZP.canUseIncreasedMessageLength(c.default.getCurrentUser());
    return new Promise((e) =>
        E({
            openWarningPopout: t,
            type: n,
            content: r,
            stickers: i,
            uploads: a,
            channel: o,
            restrictMentions: s,
            respectCooldown: l,
            userCanUsePremiumMessageLength: u,
            resolve: e
        })
    );
}
