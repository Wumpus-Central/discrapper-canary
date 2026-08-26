n.d(t, { i: () => R }), n(582128);
var l = n(228366),
    r = n(157559),
    a = n(779185),
    i = n(101392),
    s = n(287809),
    o = n(174459),
    u = n(284009),
    c = n.n(u),
    d = n(451909),
    f = n(963307),
    h = n(576705),
    m = n(652215);
let A = new RegExp(/@(:?everyone|here)/);
function T(e, t) {
    let n = 0;
    return t.isThread()
        ? (t.memberCount ?? 0)
        : (f.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
              ("@everyone" === e || t.id !== m.clD.OFFLINE) && (n += t.count);
          }),
          n);
}
let S = function (e, t) {
        let n = t.getGuildId();
        return c()(null != n, "isGuildChannel with null guildId"), T(e, t) > 30 && h.A.can(m.xBc.MENTION_EVERYONE, t);
    },
    g = function (e, t) {
        for (let n of d.Ay.parsePreprocessor(t, e)) {
            let e = (function e(t) {
                if ("string" == typeof t.content) {
                    if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
                    let e = t.content?.match(A);
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
var x = n(375708);
let p = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let l = g(e, t);
            if (null == l || !S(l, t)) return !1;
            let r = T(l, t),
                a = Math.pow(10, Math.floor(Math.log10(r))),
                i = x.t["47E5Rz"];
            return (
                t.isForumPost() ? (i = x.t.sYW2cy) : t.isThread() && (i = x.t["2YaiQ1"]),
                {
                    body: x.intl.formatToPlainString(i, { role: l, count: (Math.trunc(r / a) * a).toLocaleString() }),
                    footer: x.intl.string(x.t.mVyrtu),
                }
            );
        },
        analyticsType: "@Everyone Warning",
        animation: {
            dark: () => n.e("480467").then(n.t.bind(n, 661022, 19)),
            light: () => n.e("892705").then(n.t.bind(n, 111992, 19)),
        },
    },
    { check: (e) => !!m.AKn.test(e) && { body: x.intl.string(x.t.sTwS1a) }, analyticsType: "API Token Warning" },
];
var E = n(158045);
function R(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: u,
            channel: c,
            restrictMentions: d = !0,
            respectCooldown: f = !0,
            hasStickers: h = !1,
            hasAttachments: A = !1,
            hasComponents: T = !1,
        } = e,
        S = E.Ay.canUseIncreasedMessageLength(s.default.getCurrentUser());
    return new Promise((e) =>
        (function (e) {
            let {
                openWarningPopout: t,
                type: n,
                content: s,
                channel: u,
                restrictMentions: c,
                respectCooldown: d,
                userCanUsePremiumMessageLength: f,
                hasStickers: h,
                hasAttachments: A,
                hasComponents: T,
                resolve: S,
            } = e;
            if (0 === s.length && !n.submit?.allowEmptyMessage && !h && !A && !T)
                return void S({ valid: !1, failureReason: m.X8x.EMPTY_MESSAGE });
            let g = f ? m.CS1 : m.uvi;
            if (s.length > g) {
                if (f || null == u) {
                    var E;
                    (E = s.length),
                        r.A.show({
                            title: x.intl.string(x.t.l8rYLt),
                            body: x.intl.formatToPlainString(x.t.FfjF15, { currentLength: E, maxLength: g }),
                            confirmText: x.intl.string(x.t.BddRzS),
                        }),
                        o.default.track(m.HAw.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: E,
                        });
                } else l.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: u, content: s });
                S({ valid: !1, failureReason: m.X8x.MESSAGE_TOO_LONG });
                return;
            }
            if (null != u) {
                if (null != u.getGuildId() && d && i.A.getSlowmodeCooldownGuess(u.id) > 0)
                    return void S({ valid: !1, failureReason: m.X8x.SLOWMODE_COOLDOWN });
                if (null != t)
                    for (let { check: e, analyticsType: n, animation: l } of p) {
                        let r = e(s, u, c);
                        if (!1 !== r)
                            return void t({
                                analyticsType: n,
                                channel: u,
                                onCancel: () => S({ valid: !1, failureReason: m.X8x.SHOUTING_CANCELLED }),
                                onConfirm: () => S({ valid: !0 }),
                                popoutText: r,
                                animation: l,
                            });
                    }
            }
            if (a.Ay.isFull()) {
                r.A.show({
                    title: x.intl.string(x.t["7Q4eo2"]),
                    body: x.intl.string(x.t.gi6XHp),
                    confirmText: x.intl.string(x.t["Z4U1g/"]),
                }),
                    S({ valid: !1, failureReason: m.X8x.RATE_LIMITED });
                return;
            }
            S({ valid: !0 });
        })({
            openWarningPopout: t,
            type: n,
            content: u,
            channel: c,
            restrictMentions: d,
            respectCooldown: f,
            userCanUsePremiumMessageLength: S,
            hasStickers: h,
            hasAttachments: A,
            hasComponents: T,
            resolve: e,
        }),
    );
}
