n.d(t, {
    D$: () => D,
    N4: () => U,
    UI: () => P,
    Uu: () => N,
    _N: () => w,
    cS: () => x,
    cZ: () => G,
    e1: () => F,
    eQ: () => R,
    fw: () => C,
    uY: () => L,
    x9: () => k
}),
    n(757143),
    n(301563),
    n(47120),
    n(566702);
var r = n(392711),
    i = n.n(r),
    o = n(772848),
    a = n(263568),
    s = n(468194),
    l = n(442837),
    c = n(333023),
    u = n(566006),
    d = n(739566),
    f = n(592125),
    p = n(542578),
    _ = n(375954),
    h = n(496675),
    m = n(699516),
    g = n(70956),
    E = n(5192),
    v = n(489887),
    b = n(981631),
    y = n(388032);
function O(e, t, n) {
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
function S(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N() {
    return {
        text: void 0,
        image: void 0,
        localCreationAnswerId: A()
    };
}
function A() {
    return (0, o.Z)();
}
function C(e) {
    let t = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
    return e.replace(t, '');
}
function R(e) {
    for (let t of e.reactions) if (null == t.me_vote) return !0;
    return !1;
}
function P(e) {
    return (0, l.e7)([h.Z], () => !!(null != e && e.id !== c.V && b.TPd.POLLS.has(e.type)) && (!!e.isPrivate() || (h.Z.can(b.Plq.SEND_MESSAGES, e) && h.Z.can(b.Plq.SEND_POLLS, e))));
}
function w() {
    return !1;
}
function D(e, t, n) {
    return 0 === e.length && null == t.find((e) => x(e, n));
}
function x(e, t) {
    if (t === a.C.IMAGE_ONLY_ANSWERS) return null != e.image;
    {
        var n;
        let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return null != t && t.length > 0;
    }
}
function L(e, t) {
    var n;
    let r = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
    return t === a.C.DEFAULT && null != e.image && (null == r || 0 === r.length);
}
function M(e) {
    return new Date(Date.now() + e * g.Z.Millis.HOUR).toISOString();
}
function k(e) {
    var t;
    if (null == e) return;
    let n =
            null == e
                ? void 0
                : null === (t = e.answers) || void 0 === t
                  ? void 0
                  : t.map((e, t) => {
                        var n, r;
                        let i = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
                            o = T(S({}, e.poll_media), {
                                emoji:
                                    null != i
                                        ? {
                                              id: i.id,
                                              name: null !== (r = i.name) && void 0 !== r ? r : ''
                                          }
                                        : void 0
                            });
                        return T(S({}, e), {
                            answer_id: t + 1,
                            poll_media: o
                        });
                    }),
        r = (null == e ? void 0 : e.duration) != null ? M(e.duration) : '0';
    return T(S({}, e), {
        expiry: r,
        answers: n
    });
}
function j(e, t) {
    var n, r, i, o;
    let a = null !== (o = null === (i = e.embeds[0]) || void 0 === i ? void 0 : null === (r = i.fields) || void 0 === r ? void 0 : null === (n = r.find((e) => 'poll_question_text' === e.rawName)) || void 0 === n ? void 0 : n.rawValue) && void 0 !== o ? o : '';
    return null != t ? (0, s.aF)(a, t) : a;
}
function U(e) {
    let t = (0, d.ZH)(e),
        n = j(e, v.Dv);
    return y.NW.format(y.t.Vn97KS, {
        username: t.nick,
        title: n
    });
}
function G(e) {
    return e.reduce((e, t) => {
        var n, r;
        return e + (null !== (r = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== r ? r : 0);
    }, 0);
}
function B(e, t) {
    let n = {
            id: t,
            name: '',
            animated: !1
        },
        r = e.getChannelId(),
        o = p.Z.getReactions(r, e.id, n, v.$J, u.O.VOTE),
        a = f.Z.getChannel(r),
        s = null == a || a.isPrivate() ? null : a.getGuildId();
    return i()(o)
        .reject((e) => m.Z.isBlockedOrIgnored(e.id))
        .take(v.$J)
        .map((e) => E.ZP.getName(s, null == a ? void 0 : a.id, e))
        .value();
}
function Z(e, t) {
    let n = Math.max(0, t - e.length);
    return 1 === e.length
        ? n > 0
            ? y.NW.formatToPlainString(y.t['SV/iZm'], {
                  a: e[0],
                  n: n.toLocaleString()
              })
            : e[0]
        : 2 === e.length
          ? n > 0
              ? y.NW.formatToPlainString(y.t.YBnZKy, {
                    a: e[0],
                    b: e[1],
                    n: n.toLocaleString()
                })
              : y.NW.formatToPlainString(y.t['O5+f5e'], {
                    a: e[0],
                    b: e[1]
                })
          : 3 !== e.length
            ? y.NW.formatToPlainString(y.t.yVX6kJ, { n: n.toLocaleString() })
            : n > 0
              ? y.NW.formatToPlainString(y.t['ThXp+P'], {
                    a: e[0],
                    b: e[1],
                    c: e[2],
                    n: n.toLocaleString()
                })
              : y.NW.formatToPlainString(y.t['0UzBMz'], {
                    a: e[0],
                    b: e[1],
                    c: e[2]
                });
}
function F(e, t, n) {
    var r, i;
    let o = _.Z.getMessage(t, e);
    if (null == o) return '';
    let a = o.getReaction({
            id: n,
            name: '',
            animated: !1
        }),
        s = null !== (i = null == a ? void 0 : null === (r = a.count_details) || void 0 === r ? void 0 : r.vote) && void 0 !== i ? i : 0,
        l = B(o, n);
    return 0 === l.length ? '' : Z(l, s);
}
