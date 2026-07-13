n.d(t, { i: () => R }), n(64700);
var l = n(228366),
    r = n(157559),
    i = n(779185),
    a = n(101392),
    s = n(287809),
    o = n(174459),
    u = n(284009),
    c = n.n(u),
    d = n(451909),
    f = n(963307),
    h = n(576705),
    A = n(652215);
let m = new RegExp(/@(:?everyone|here)/);
function S(e, t) {
    let n = 0;
    return t.isThread()
        ? (t.memberCount ?? 0)
        : (f.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
              ("@everyone" === e || t.id !== A.clD.OFFLINE) && (n += t.count);
          }),
          n);
}
let g = function (e, t) {
        let n = t.getGuildId();
        return c()(n, "isGuildChannel with null guildId"), S(e, t) > 30 && h.A.can(A.xBc.MENTION_EVERYONE, t);
    },
    x = function (e, t) {
        for (let n of d.Ay.parsePreprocessor(t, e)) {
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
var T = n(375708);
let E = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let l = x(e, t);
            if (null == l || !g(l, t)) return !1;
            let r = S(l, t),
                i = Math.pow(10, Math.floor(Math.log10(r))),
                a = T.t["47E5Rz"];
            return (
                t.isForumPost() ? (a = T.t.sYW2cy) : t.isThread() && (a = T.t["2YaiQ1"]),
                {
                    body: T.intl.formatToPlainString(a, { role: l, count: (Math.trunc(r / i) * i).toLocaleString() }),
                    footer: T.intl.string(T.t.mVyrtu),
                }
            );
        },
        analyticsType: "@Everyone Warning",
        animation: {
            dark: () => n.e("80467").then(n.t.bind(n, 661022, 19)),
            light: () => n.e("92705").then(n.t.bind(n, 111992, 19)),
        },
    },
    { check: (e) => !!A.AKn.test(e) && { body: T.intl.string(T.t.sTwS1a) }, analyticsType: "API Token Warning" },
];
var p = n(428262);
function R(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: u,
            channel: c,
            restrictMentions: d = !0,
            respectCooldown: f = !0,
            hasStickers: h = !1,
            hasAttachments: m = !1,
            hasComponents: S = !1,
        } = e,
        g = p.Ay.canUseIncreasedMessageLength(s.default.getCurrentUser());
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
                hasAttachments: m,
                hasComponents: S,
                resolve: g,
            } = e;
            if (0 === s.length && !n.submit?.allowEmptyMessage && !h && !m && !S)
                return void g({ valid: !1, failureReason: A.X8x.EMPTY_MESSAGE });
            let x = f ? A.CS1 : A.uvi;
            if (s.length > x) {
                if (f || null == u) {
                    var p;
                    (p = s.length),
                        r.A.show({
                            title: T.intl.string(T.t.l8rYLt),
                            body: T.intl.formatToPlainString(T.t.FfjF15, { currentLength: p, maxLength: x }),
                            confirmText: T.intl.string(T.t.BddRzS),
                        }),
                        o.default.track(A.HAw.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: p,
                        });
                } else l.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: u, content: s });
                g({ valid: !1, failureReason: A.X8x.MESSAGE_TOO_LONG });
                return;
            }
            if (null != u) {
                if (null != u.getGuildId() && d && a.A.getSlowmodeCooldownGuess(u.id) > 0)
                    return void g({ valid: !1, failureReason: A.X8x.SLOWMODE_COOLDOWN });
                if (null != t)
                    for (let { check: e, analyticsType: n, animation: l } of E) {
                        let r = e(s, u, c);
                        if (!1 !== r)
                            return void t({
                                analyticsType: n,
                                channel: u,
                                onCancel: () => g({ valid: !1, failureReason: A.X8x.SHOUTING_CANCELLED }),
                                onConfirm: () => g({ valid: !0 }),
                                popoutText: r,
                                animation: l,
                            });
                    }
            }
            if (i.Ay.isFull()) {
                r.A.show({
                    title: T.intl.string(T.t["7Q4eo2"]),
                    body: T.intl.string(T.t.gi6XHp),
                    confirmText: T.intl.string(T.t["Z4U1g/"]),
                }),
                    g({ valid: !1, failureReason: A.X8x.RATE_LIMITED });
                return;
            }
            g({ valid: !0 });
        })({
            openWarningPopout: t,
            type: n,
            content: u,
            channel: c,
            restrictMentions: d,
            respectCooldown: f,
            userCanUsePremiumMessageLength: g,
            hasStickers: h,
            hasAttachments: m,
            hasComponents: S,
            resolve: e,
        }),
    );
}
