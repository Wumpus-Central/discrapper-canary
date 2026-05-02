n.d(t, { i: () => R }), n(64700);
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
                a = Math.pow(10, Math.floor(Math.log10(r))),
                i = T.t["47E5Rz"];
            return (
                t.isForumPost() ? (i = T.t.sYW2cy) : t.isThread() && (i = T.t["2YaiQ1"]),
                {
                    body: T.intl.formatToPlainString(i, { role: l, count: (Math.trunc(r / a) * a).toLocaleString() }),
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
var p = n(927578);
function R(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: u,
            stickers: c,
            uploads: d,
            channel: f,
            restrictMentions: h = !0,
            respectCooldown: m = !0,
        } = e,
        S = p.Ay.canUseIncreasedMessageLength(s.default.getCurrentUser());
    return new Promise((e) =>
        (function (e) {
            let {
                openWarningPopout: t,
                type: n,
                content: s,
                stickers: u,
                uploads: c,
                channel: d,
                restrictMentions: f,
                respectCooldown: h,
                userCanUsePremiumMessageLength: m,
                resolve: S,
            } = e;
            if (
                0 === s.length &&
                !n.submit?.allowEmptyMessage &&
                (null == u || 0 === u.length) &&
                (null == c || 0 === c.length)
            )
                return void S({ valid: !1, failureReason: A.X8x.EMPTY_MESSAGE });
            let g = m ? A.CS1 : A.uvi;
            if (s.length > g) {
                if (m || null == d) {
                    var x;
                    (x = s.length),
                        r.A.show({
                            title: T.intl.string(T.t.l8rYLt),
                            body: T.intl.formatToPlainString(T.t.FfjF15, { currentLength: x, maxLength: g }),
                            confirmText: T.intl.string(T.t.BddRzS),
                        }),
                        o.default.track(A.HAw.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: x,
                        });
                } else l.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: d, content: s });
                S({ valid: !1, failureReason: A.X8x.MESSAGE_TOO_LONG });
                return;
            }
            if (null != d) {
                if (null != d.getGuildId() && h && i.A.getSlowmodeCooldownGuess(d.id) > 0)
                    return void S({ valid: !1, failureReason: A.X8x.SLOWMODE_COOLDOWN });
                if (null != t)
                    for (let { check: e, analyticsType: n, animation: l } of E) {
                        let r = e(s, d, f);
                        if (!1 !== r)
                            return void t({
                                analyticsType: n,
                                channel: d,
                                onCancel: () => S({ valid: !1, failureReason: A.X8x.SHOUTING_CANCELLED }),
                                onConfirm: () => S({ valid: !0 }),
                                popoutText: r,
                                animation: l,
                            });
                    }
            }
            if (a.Ay.isFull()) {
                r.A.show({
                    title: T.intl.string(T.t["7Q4eo2"]),
                    body: T.intl.string(T.t.gi6XHp),
                    confirmText: T.intl.string(T.t["Z4U1g/"]),
                }),
                    S({ valid: !1, failureReason: A.X8x.RATE_LIMITED });
                return;
            }
            S({ valid: !0 });
        })({
            openWarningPopout: t,
            type: n,
            content: u,
            stickers: c,
            uploads: d,
            channel: f,
            restrictMentions: h,
            respectCooldown: m,
            userCanUsePremiumMessageLength: S,
            resolve: e,
        }),
    );
}
