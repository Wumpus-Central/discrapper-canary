"use strict";
n.d(t, { i: () => S }), n(64700);
var i = n(228366),
    r = n(157559),
    s = n(779185),
    a = n(101392),
    o = n(287809),
    l = n(174459),
    u = n(284009),
    c = n.n(u),
    d = n(451909),
    _ = n(963307),
    f = n(576705),
    h = n(652215);
let p = new RegExp(/@(:?everyone|here)/);
function E(e, t) {
    let n = 0;
    return t.isThread()
        ? (t.memberCount ?? 0)
        : (_.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
              ("@everyone" === e || t.id !== h.clD.OFFLINE) && (n += t.count);
          }),
          n);
}
let m = function (e, t) {
        let n = t.getGuildId();
        return c()(n, "isGuildChannel with null guildId"), E(e, t) > 30 && f.A.can(h.xBc.MENTION_EVERYONE, t);
    },
    g = function (e, t) {
        for (let n of d.Ay.parsePreprocessor(t, e)) {
            let e = (function e(t) {
                if ("string" == typeof t.content) {
                    if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
                    let e = t.content?.match(p);
                    if (null != e) {
                        let [t] = e;
                        return t;
                    }
                } else if (Array.isArray(t.content))
                    for (let n of t.content) {
                        let t = e(n);
                        if (null != t) return t;
                    }
                return null;
            })(n);
            if (null != e) return e;
        }
        return null;
    };
var A = n(375708);
let I = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let i = g(e, t);
            if (null == i || !m(i, t)) return !1;
            let r = E(i, t),
                s = Math.pow(10, Math.floor(Math.log10(r))),
                a = A.t["47E5Rz"];
            return (
                t.isForumPost() ? (a = A.t.sYW2cy) : t.isThread() && (a = A.t["2YaiQ1"]),
                {
                    body: A.intl.formatToPlainString(a, { role: i, count: (Math.trunc(r / s) * s).toLocaleString() }),
                    footer: A.intl.string(A.t.mVyrtu),
                }
            );
        },
        analyticsType: "@Everyone Warning",
        animation: {
            dark: () => n.e("80467").then(n.t.bind(n, 661022, 19)),
            light: () => n.e("92705").then(n.t.bind(n, 111992, 19)),
        },
    },
    { check: (e) => !!h.AKn.test(e) && { body: A.intl.string(A.t.sTwS1a) }, analyticsType: "API Token Warning" },
];
var T = n(927578);
function S(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: u,
            stickers: c,
            uploads: d,
            channel: _,
            restrictMentions: f = !0,
            respectCooldown: p = !0,
        } = e,
        E = T.Ay.canUseIncreasedMessageLength(o.default.getCurrentUser());
    return new Promise((e) =>
        (function (e) {
            let {
                openWarningPopout: t,
                type: n,
                content: o,
                stickers: u,
                uploads: c,
                channel: d,
                restrictMentions: _,
                respectCooldown: f,
                userCanUsePremiumMessageLength: p,
                resolve: E,
            } = e;
            if (
                0 === o.length &&
                !n.submit?.allowEmptyMessage &&
                (null == u || 0 === u.length) &&
                (null == c || 0 === c.length)
            )
                return void E({ valid: !1, failureReason: h.X8x.EMPTY_MESSAGE });
            let m = p ? h.CS1 : h.uvi;
            if (o.length > m) {
                if (p || null == d) {
                    var g;
                    (g = o.length),
                        r.A.show({
                            title: A.intl.string(A.t.l8rYLt),
                            body: A.intl.formatToPlainString(A.t.FfjF15, { currentLength: g, maxLength: m }),
                            confirmText: A.intl.string(A.t.BddRzS),
                        }),
                        l.default.track(h.HAw.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: g,
                        });
                } else i.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: d, content: o });
                E({ valid: !1, failureReason: h.X8x.MESSAGE_TOO_LONG });
                return;
            }
            if (null != d) {
                if (null != d.getGuildId() && f && a.A.getSlowmodeCooldownGuess(d.id) > 0)
                    return void E({ valid: !1, failureReason: h.X8x.SLOWMODE_COOLDOWN });
                if (null != t)
                    for (let { check: e, analyticsType: n, animation: i } of I) {
                        let r = e(o, d, _);
                        if (!1 !== r)
                            return void t({
                                analyticsType: n,
                                channel: d,
                                onCancel: () => E({ valid: !1, failureReason: h.X8x.SHOUTING_CANCELLED }),
                                onConfirm: () => E({ valid: !0 }),
                                popoutText: r,
                                animation: i,
                            });
                    }
            }
            if (s.Ay.isFull()) {
                r.A.show({
                    title: A.intl.string(A.t["7Q4eo2"]),
                    body: A.intl.string(A.t.gi6XHp),
                    confirmText: A.intl.string(A.t["Z4U1g/"]),
                }),
                    E({ valid: !1, failureReason: h.X8x.RATE_LIMITED });
                return;
            }
            E({ valid: !0 });
        })({
            openWarningPopout: t,
            type: n,
            content: u,
            stickers: c,
            uploads: d,
            channel: _,
            restrictMentions: f,
            respectCooldown: p,
            userCanUsePremiumMessageLength: E,
            resolve: e,
        }),
    );
}
