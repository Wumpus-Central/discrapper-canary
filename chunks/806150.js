n.d(t, { i: () => v }), n(64700);
var l = n(228366),
    r = n(157559),
    a = n(884384),
    i = n(101392),
    s = n(287809),
    o = n(954571),
    u = n(284009),
    c = n.n(u),
    d = n(451909),
    h = n(963307),
    f = n(576705),
    A = n(652215);
let m = new RegExp(/@(:?everyone|here)/);
function S(e, t) {
    let n = 0;
    return t.isThread()
        ? (t.memberCount ?? 0)
        : (h.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
              ("@everyone" === e || t.id !== A.clD.OFFLINE) && (n += t.count);
          }),
          n);
}
let x = function (e, t) {
        let n = t.getGuildId();
        return c()(n, "isGuildChannel with null guildId"), S(e, t) > 30 && f.A.can(A.xBc.MENTION_EVERYONE, t);
    },
    T = function (e, t) {
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
var g = n(985018);
let E = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let l = T(e, t);
            if (null == l || !x(l, t)) return !1;
            let r = S(l, t),
                a = Math.pow(10, Math.floor(Math.log10(r))),
                i = g.t["47E5Rz"];
            return (
                t.isForumPost() ? (i = g.t.sYW2cy) : t.isThread() && (i = g.t["2YaiQ1"]),
                {
                    body: g.intl.formatToPlainString(i, { role: l, count: (Math.trunc(r / a) * a).toLocaleString() }),
                    footer: g.intl.string(g.t.mVyrtu),
                }
            );
        },
        analyticsType: "@Everyone Warning",
        animation: {
            dark: () => n.e("80467").then(n.t.bind(n, 661022, 19)),
            light: () => n.e("92705").then(n.t.bind(n, 111992, 19)),
        },
    },
    { check: (e) => !!A.AKn.test(e) && { body: g.intl.string(g.t.sTwS1a) }, analyticsType: "API Token Warning" },
];
var p = n(927578);
function v(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: u,
            stickers: c,
            uploads: d,
            channel: h,
            restrictMentions: f = !0,
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
                restrictMentions: h,
                respectCooldown: f,
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
            let x = m ? A.CS1 : A.uvi;
            if (s.length > x) {
                if (m || null == d) {
                    var T;
                    (T = s.length),
                        r.A.show({
                            title: g.intl.string(g.t.l8rYLt),
                            body: g.intl.formatToPlainString(g.t.FfjF15, { currentLength: T, maxLength: x }),
                            confirmText: g.intl.string(g.t.BddRzS),
                        }),
                        o.default.track(A.HAw.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: T,
                        });
                } else l.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: d, content: s });
                S({ valid: !1, failureReason: A.X8x.MESSAGE_TOO_LONG });
                return;
            }
            if (null != d) {
                if (null != d.getGuildId() && f && i.A.getSlowmodeCooldownGuess(d.id) > 0)
                    return void S({ valid: !1, failureReason: A.X8x.SLOWMODE_COOLDOWN });
                if (null != t)
                    for (let { check: e, analyticsType: n, animation: l } of E) {
                        let r = e(s, d, h);
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
                    title: g.intl.string(g.t["7Q4eo2"]),
                    body: g.intl.string(g.t.gi6XHp),
                    confirmText: g.intl.string(g.t["Z4U1g/"]),
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
            channel: h,
            restrictMentions: f,
            respectCooldown: m,
            userCanUsePremiumMessageLength: S,
            resolve: e,
        }),
    );
}
