r.d(n, {
    D$: function () {
        return x;
    },
    N4: function () {
        return B;
    },
    UI: function () {
        return D;
    },
    Uu: function () {
        return C;
    },
    _N: function () {
        return L;
    },
    cS: function () {
        return w;
    },
    cZ: function () {
        return G;
    },
    e1: function () {
        return V;
    },
    eQ: function () {
        return O;
    },
    fw: function () {
        return R;
    },
    uY: function () {
        return P;
    },
    x9: function () {
        return k;
    }
});
var i = r(757143);
var a = r(47120);
var o = r(724458);
var s = r(392711),
    l = r.n(s),
    u = r(772848),
    c = r(263568),
    d = r(468194),
    f = r(442837),
    p = r(333023),
    h = r(566006),
    _ = r(739566),
    m = r(592125),
    g = r(542578),
    E = r(375954),
    v = r(496675),
    y = r(699516),
    b = r(70956),
    I = r(5192),
    T = r(489887),
    S = r(981631),
    A = r(388032);
function C() {
    return {
        text: void 0,
        image: void 0,
        localCreationAnswerId: N()
    };
}
function N() {
    return (0, u.Z)();
}
function R(e) {
    let n = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
    return e.replace(n, '');
}
function O(e) {
    for (let n of e.reactions) if (null == n.me_vote) return !0;
    return !1;
}
function D(e) {
    return (0, f.e7)([v.Z], () => !!(null != e && e.id !== p.V && S.TPd.POLLS.has(e.type)) && (!!e.isPrivate() || (v.Z.can(S.Plq.SEND_MESSAGES, e) && v.Z.can(S.Plq.SEND_POLLS, e))));
}
function L() {
    return !1;
}
function x(e, n, r) {
    return 0 === e.length && null == n.find((e) => w(e, r));
}
function w(e, n) {
    if (n === c.C.IMAGE_ONLY_ANSWERS) return null != e.image;
    {
        var r;
        let n = null === (r = e.text) || void 0 === r ? void 0 : r.trim();
        return null != n && n.length > 0;
    }
}
function P(e, n) {
    var r;
    let i = null === (r = e.text) || void 0 === r ? void 0 : r.trim();
    return n === c.C.DEFAULT && null != e.image && (null == i || 0 === i.length);
}
function M(e) {
    return new Date(Date.now() + e * b.Z.Millis.HOUR).toISOString();
}
function k(e) {
    var n;
    if (null == e) return;
    let r =
            null == e
                ? void 0
                : null === (n = e.answers) || void 0 === n
                  ? void 0
                  : n.map((e, n) => {
                        var r, i;
                        let a = null === (r = e.poll_media) || void 0 === r ? void 0 : r.emoji,
                            o = {
                                ...e.poll_media,
                                emoji:
                                    null != a
                                        ? {
                                              id: a.id,
                                              name: null !== (i = a.name) && void 0 !== i ? i : ''
                                          }
                                        : void 0
                            };
                        return {
                            ...e,
                            answer_id: n + 1,
                            poll_media: o
                        };
                    }),
        i = (null == e ? void 0 : e.duration) != null ? M(e.duration) : '0';
    return {
        ...e,
        expiry: i,
        answers: r
    };
}
function U(e, n) {
    var r, i, a, o;
    let s = null !== (o = null === (a = e.embeds[0]) || void 0 === a ? void 0 : null === (i = a.fields) || void 0 === i ? void 0 : null === (r = i.find((e) => 'poll_question_text' === e.rawName)) || void 0 === r ? void 0 : r.rawValue) && void 0 !== o ? o : '';
    return null != n ? (0, d.aF)(s, n) : s;
}
function B(e) {
    let n = (0, _.ZH)(e),
        r = U(e, T.Dv);
    return A.intl.format(A.t.Vn97KS, {
        username: n.nick,
        title: r
    });
}
function G(e) {
    return e.reduce((e, n) => {
        var r, i;
        return e + (null !== (i = null === (r = n.count_details) || void 0 === r ? void 0 : r.vote) && void 0 !== i ? i : 0);
    }, 0);
}
function Z(e, n) {
    let r = {
            id: n,
            name: '',
            animated: !1
        },
        i = e.getChannelId(),
        a = g.Z.getReactions(i, e.id, r, T.$J, h.O.VOTE),
        o = m.Z.getChannel(i),
        s = null == o || o.isPrivate() ? null : o.getGuildId();
    return l()(a)
        .reject((e) => y.Z.isBlockedOrIgnored(e.id))
        .take(T.$J)
        .map((e) => I.ZP.getName(s, null == o ? void 0 : o.id, e))
        .value();
}
function F(e, n) {
    let r = Math.max(0, n - e.length);
    if (1 === e.length)
        return r > 0
            ? A.intl.formatToPlainString(A.t['SV/iZm'], {
                  a: e[0],
                  n: r.toLocaleString()
              })
            : e[0];
    if (2 === e.length)
        return r > 0
            ? A.intl.formatToPlainString(A.t.YBnZKy, {
                  a: e[0],
                  b: e[1],
                  n: r.toLocaleString()
              })
            : A.intl.formatToPlainString(A.t['O5+f5e'], {
                  a: e[0],
                  b: e[1]
              });
    if (3 !== e.length) return A.intl.formatToPlainString(A.t.yVX6kJ, { n: r.toLocaleString() });
    else
        return r > 0
            ? A.intl.formatToPlainString(A.t['ThXp+P'], {
                  a: e[0],
                  b: e[1],
                  c: e[2],
                  n: r.toLocaleString()
              })
            : A.intl.formatToPlainString(A.t['0UzBMz'], {
                  a: e[0],
                  b: e[1],
                  c: e[2]
              });
}
function V(e, n, r) {
    var i, a;
    let o = E.Z.getMessage(n, e);
    if (null == o) return '';
    let s = o.getReaction({
            id: r,
            name: '',
            animated: !1
        }),
        l = null !== (a = null == s ? void 0 : null === (i = s.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== a ? a : 0,
        u = Z(o, r);
    return 0 === u.length ? '' : F(u, l);
}
