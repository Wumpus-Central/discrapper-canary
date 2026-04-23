"use strict";
n.d(t, { i: () => S }), n(64700);
var i = n(228366),
    r = n(157559),
    s = n(884384),
    a = n(101392),
    o = n(287809),
    l = n(954571),
    d = n(284009),
    _ = n.n(d),
    u = n(451909),
    c = n(963307),
    E = n(576705),
    h = n(652215);
let m = new RegExp(/@(:?everyone|here)/);
function f(e, t) {
    let n = 0;
    return t.isThread()
        ? (t.memberCount ?? 0)
        : (c.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
              ("@everyone" === e || t.id !== h.clD.OFFLINE) && (n += t.count);
          }),
          n);
}
let g = function (e, t) {
        let n = t.getGuildId();
        return _()(n, "isGuildChannel with null guildId"), f(e, t) > 30 && E.A.can(h.xBc.MENTION_EVERYONE, t);
    },
    p = function (e, t) {
        for (let n of u.Ay.parsePreprocessor(t, e)) {
            let e = (function e(t) {
                if ("string" == typeof t.content) {
                    if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
                    let e = t.content?.match(m);
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
var A = n(985018);
let I = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let i = p(e, t);
            if (null == i || !g(i, t)) return !1;
            let r = f(i, t),
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
            content: d,
            stickers: _,
            uploads: u,
            channel: c,
            restrictMentions: E = !0,
            respectCooldown: m = !0,
        } = e,
        f = T.Ay.canUseIncreasedMessageLength(o.default.getCurrentUser());
    return new Promise((e) =>
        (function (e) {
            let {
                openWarningPopout: t,
                type: n,
                content: o,
                stickers: d,
                uploads: _,
                channel: u,
                restrictMentions: c,
                respectCooldown: E,
                userCanUsePremiumMessageLength: m,
                resolve: f,
            } = e;
            if (
                0 === o.length &&
                !n.submit?.allowEmptyMessage &&
                (null == d || 0 === d.length) &&
                (null == _ || 0 === _.length)
            )
                return void f({ valid: !1, failureReason: h.X8x.EMPTY_MESSAGE });
            let g = m ? h.CS1 : h.uvi;
            if (o.length > g) {
                if (m || null == u) {
                    var p;
                    (p = o.length),
                        r.A.show({
                            title: A.intl.string(A.t.l8rYLt),
                            body: A.intl.formatToPlainString(A.t.FfjF15, { currentLength: p, maxLength: g }),
                            confirmText: A.intl.string(A.t.BddRzS),
                        }),
                        l.default.track(h.HAw.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: p,
                        });
                } else i.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: u, content: o });
                f({ valid: !1, failureReason: h.X8x.MESSAGE_TOO_LONG });
                return;
            }
            if (null != u) {
                if (null != u.getGuildId() && E && a.A.getSlowmodeCooldownGuess(u.id) > 0)
                    return void f({ valid: !1, failureReason: h.X8x.SLOWMODE_COOLDOWN });
                if (null != t)
                    for (let { check: e, analyticsType: n, animation: i } of I) {
                        let r = e(o, u, c);
                        if (!1 !== r)
                            return void t({
                                analyticsType: n,
                                channel: u,
                                onCancel: () => f({ valid: !1, failureReason: h.X8x.SHOUTING_CANCELLED }),
                                onConfirm: () => f({ valid: !0 }),
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
                    f({ valid: !1, failureReason: h.X8x.RATE_LIMITED });
                return;
            }
            f({ valid: !0 });
        })({
            openWarningPopout: t,
            type: n,
            content: d,
            stickers: _,
            uploads: u,
            channel: c,
            restrictMentions: E,
            respectCooldown: m,
            userCanUsePremiumMessageLength: f,
            resolve: e,
        }),
    );
}
