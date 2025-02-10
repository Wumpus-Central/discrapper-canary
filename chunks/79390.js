n.d(t, {
    D$: () => R,
    N4: () => w,
    UI: () => N,
    Uu: () => T,
    _N: () => C,
    cS: () => O,
    cZ: () => M,
    e1: () => G,
    eQ: () => A,
    fw: () => S,
    uY: () => D,
    x9: () => x
}),
    n(757143),
    n(47120),
    n(724458);
var i = n(392711),
    r = n.n(i),
    a = n(772848),
    s = n(263568),
    o = n(468194),
    l = n(442837),
    u = n(333023),
    c = n(566006),
    d = n(739566),
    f = n(592125),
    _ = n(542578),
    p = n(375954),
    h = n(496675),
    m = n(699516),
    g = n(70956),
    E = n(5192),
    v = n(489887),
    y = n(981631),
    I = n(388032);
function T() {
    return {
        text: void 0,
        image: void 0,
        localCreationAnswerId: b()
    };
}
function b() {
    return (0, a.Z)();
}
function S(e) {
    let t = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
    return e.replace(t, '');
}
function A(e) {
    for (let t of e.reactions) if (null == t.me_vote) return !0;
    return !1;
}
function N(e) {
    return (0, l.e7)([h.Z], () => !!(null != e && e.id !== u.V && y.TPd.POLLS.has(e.type)) && (!!e.isPrivate() || (h.Z.can(y.Plq.SEND_MESSAGES, e) && h.Z.can(y.Plq.SEND_POLLS, e))));
}
function C() {
    return !1;
}
function R(e, t, n) {
    return 0 === e.length && null == t.find((e) => O(e, n));
}
function O(e, t) {
    if (t === s.C.IMAGE_ONLY_ANSWERS) return null != e.image;
    {
        var n;
        let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return null != t && t.length > 0;
    }
}
function D(e, t) {
    var n;
    let i = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
    return t === s.C.DEFAULT && null != e.image && (null == i || 0 === i.length);
}
function L(e) {
    return new Date(Date.now() + e * g.Z.Millis.HOUR).toISOString();
}
function x(e) {
    var t;
    if (null == e) return;
    let n =
            null == e
                ? void 0
                : null === (t = e.answers) || void 0 === t
                  ? void 0
                  : t.map((e, t) => {
                        var n, i;
                        let r = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
                            a = {
                                ...e.poll_media,
                                emoji:
                                    null != r
                                        ? {
                                              id: r.id,
                                              name: null !== (i = r.name) && void 0 !== i ? i : ''
                                          }
                                        : void 0
                            };
                        return {
                            ...e,
                            answer_id: t + 1,
                            poll_media: a
                        };
                    }),
        i = (null == e ? void 0 : e.duration) != null ? L(e.duration) : '0';
    return {
        ...e,
        expiry: i,
        answers: n
    };
}
function P(e, t) {
    var n, i, r, a;
    let s = null !== (a = null === (r = e.embeds[0]) || void 0 === r ? void 0 : null === (i = r.fields) || void 0 === i ? void 0 : null === (n = i.find((e) => 'poll_question_text' === e.rawName)) || void 0 === n ? void 0 : n.rawValue) && void 0 !== a ? a : '';
    return null != t ? (0, o.aF)(s, t) : s;
}
function w(e) {
    let t = (0, d.ZH)(e),
        n = P(e, v.Dv);
    return I.intl.format(I.t.Vn97KS, {
        username: t.nick,
        title: n
    });
}
function M(e) {
    return e.reduce((e, t) => {
        var n, i;
        return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0);
    }, 0);
}
function k(e, t) {
    let n = {
            id: t,
            name: '',
            animated: !1
        },
        i = e.getChannelId(),
        a = _.Z.getReactions(i, e.id, n, v.$J, c.O.VOTE),
        s = f.Z.getChannel(i),
        o = null == s || s.isPrivate() ? null : s.getGuildId();
    return r()(a)
        .reject((e) => m.Z.isBlockedOrIgnored(e.id))
        .take(v.$J)
        .map((e) => E.ZP.getName(o, null == s ? void 0 : s.id, e))
        .value();
}
function U(e, t) {
    let n = Math.max(0, t - e.length);
    return 1 === e.length
        ? n > 0
            ? I.intl.formatToPlainString(I.t['SV/iZm'], {
                  a: e[0],
                  n: n.toLocaleString()
              })
            : e[0]
        : 2 === e.length
          ? n > 0
              ? I.intl.formatToPlainString(I.t.YBnZKy, {
                    a: e[0],
                    b: e[1],
                    n: n.toLocaleString()
                })
              : I.intl.formatToPlainString(I.t['O5+f5e'], {
                    a: e[0],
                    b: e[1]
                })
          : 3 !== e.length
            ? I.intl.formatToPlainString(I.t.yVX6kJ, { n: n.toLocaleString() })
            : n > 0
              ? I.intl.formatToPlainString(I.t['ThXp+P'], {
                    a: e[0],
                    b: e[1],
                    c: e[2],
                    n: n.toLocaleString()
                })
              : I.intl.formatToPlainString(I.t['0UzBMz'], {
                    a: e[0],
                    b: e[1],
                    c: e[2]
                });
}
function G(e, t, n) {
    var i, r;
    let a = p.Z.getMessage(t, e);
    if (null == a) return '';
    let s = a.getReaction({
            id: n,
            name: '',
            animated: !1
        }),
        o = null !== (r = null == s ? void 0 : null === (i = s.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== r ? r : 0,
        l = k(a, n);
    return 0 === l.length ? '' : U(l, o);
}
