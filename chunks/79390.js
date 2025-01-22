r.d(n, {
    D$: function () {
        return L;
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
        return x;
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
    p = r(566006),
    h = r(739566),
    _ = r(592125),
    m = r(542578),
    g = r(375954),
    E = r(496675),
    v = r(699516),
    y = r(70956),
    b = r(5192),
    I = r(489887),
    T = r(981631),
    S = r(176505),
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
    return (0, f.e7)([E.Z], () => !!(null != e && e.id !== S.V && T.TPd.POLLS.has(e.type)) && (!!e.isPrivate() || (E.Z.can(T.Plq.SEND_MESSAGES, e) && E.Z.can(T.Plq.SEND_POLLS, e))));
}
function x() {
    return !1;
}
function L(e, n, r) {
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
    return new Date(Date.now() + e * y.Z.Millis.HOUR).toISOString();
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
    let n = (0, h.ZH)(e),
        r = U(e, I.Dv);
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
        a = m.Z.getReactions(i, e.id, r, I.$J, p.O.VOTE),
        o = _.Z.getChannel(i),
        s = null == o || o.isPrivate() ? null : o.getGuildId();
    return l()(a)
        .reject((e) => v.Z.isBlockedOrIgnored(e.id))
        .take(I.$J)
        .map((e) => b.ZP.getName(s, null == o ? void 0 : o.id, e))
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
    let o = g.Z.getMessage(n, e);
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
