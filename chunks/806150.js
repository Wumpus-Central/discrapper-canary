(n.d(t, { i: () => R }), n(582128));
var l = n(228366),
    i = n(157559),
    a = n(779185),
    r = n(101392),
    s = n(287809),
    o = n(174459),
    u = n(284009),
    c = n.n(u),
    d = n(451909),
    f = n(963307),
    A = n(576705),
    S = n(652215);
let h = new RegExp(/@(:?everyone|here)/);
function T(e, t) {
    let n = 0;
    return t.isThread()
        ? (t.memberCount ?? 0)
        : (f.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
              ("@everyone" === e || t.id !== S.clD.OFFLINE) && (n += t.count);
          }),
          n);
}
let m = function (e, t) {
        let n = t.getGuildId();
        return (c()(null != n, "isGuildChannel with null guildId"), T(e, t) > 30 && A.A.can(S.xBc.MENTION_EVERYONE, t));
    },
    g = function (e, t) {
        for (let n of d.Ay.parsePreprocessor(t, e)) {
            let e = (function e(t) {
                if ("string" == typeof t.content) {
                    if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
                    let e = t.content?.match(h);
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
let E = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let l = g(e, t);
            if (null == l || !m(l, t)) return !1;
            let i = T(l, t),
                a = Math.pow(10, Math.floor(Math.log10(i))),
                r = x.t["47E5Rz"];
            return (
                t.isForumPost() ? (r = x.t.sYW2cy) : t.isThread() && (r = x.t["2YaiQ1"]),
                {
                    body: x.intl.formatToPlainString(r, { role: l, count: (Math.trunc(i / a) * a).toLocaleString() }),
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
    { check: (e) => !!S.AKn.test(e) && { body: x.intl.string(x.t.sTwS1a) }, analyticsType: "API Token Warning" },
];
var p = n(158045);
function R(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: u,
            channel: c,
            restrictMentions: d = !0,
            respectCooldown: f = !0,
            hasStickers: A = !1,
            hasAttachments: h = !1,
            hasComponents: T = !1,
        } = e,
        m = p.Ay.canUseIncreasedMessageLength(s.default.getCurrentUser());
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
                hasStickers: A,
                hasAttachments: h,
                hasComponents: T,
                resolve: m,
            } = e;
            if (0 === s.length && !n.submit?.allowEmptyMessage && !A && !h && !T)
                return void m({ valid: !1, failureReason: S.X8x.EMPTY_MESSAGE });
            let g = f ? S.CS1 : S.uvi;
            if (s.length > g) {
                if (f || null == u) {
                    var p;
                    ((p = s.length),
                        i.A.show({
                            title: x.intl.string(x.t.l8rYLt),
                            body: x.intl.formatToPlainString(x.t.FfjF15, { currentLength: p, maxLength: g }),
                            confirmText: x.intl.string(x.t.BddRzS),
                        }),
                        o.default.track(S.HAw.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: p,
                        }));
                } else l.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: u, content: s });
                m({ valid: !1, failureReason: S.X8x.MESSAGE_TOO_LONG });
                return;
            }
            if (null != u) {
                if (null != u.getGuildId() && d && r.A.getSlowmodeCooldownGuess(u.id) > 0)
                    return void m({ valid: !1, failureReason: S.X8x.SLOWMODE_COOLDOWN });
                if (null != t)
                    for (let { check: e, analyticsType: n, animation: l } of E) {
                        let i = e(s, u, c);
                        if (!1 !== i)
                            return void t({
                                analyticsType: n,
                                channel: u,
                                onCancel: () => m({ valid: !1, failureReason: S.X8x.SHOUTING_CANCELLED }),
                                onConfirm: () => m({ valid: !0 }),
                                popoutText: i,
                                animation: l,
                            });
                    }
            }
            if (a.Ay.isFull()) {
                (i.A.show({
                    title: x.intl.string(x.t["7Q4eo2"]),
                    body: x.intl.string(x.t.gi6XHp),
                    confirmText: x.intl.string(x.t["Z4U1g/"]),
                }),
                    m({ valid: !1, failureReason: S.X8x.RATE_LIMITED }));
                return;
            }
            m({ valid: !0 });
        })({
            openWarningPopout: t,
            type: n,
            content: u,
            channel: c,
            restrictMentions: d,
            respectCooldown: f,
            userCanUsePremiumMessageLength: m,
            hasStickers: A,
            hasAttachments: h,
            hasComponents: T,
            resolve: e,
        }),
    );
}
