n.d(t, {
    D$: () => D,
    N4: () => U,
    UI: () => P,
    Uu: () => N,
    _N: () => w,
    cS: () => L,
    cZ: () => G,
    e1: () => V,
    eQ: () => R,
    fw: () => C,
    uY: () => x,
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
    _ = n(542578),
    p = n(375954),
    h = n(496675),
    m = n(699516),
    g = n(70956),
    E = n(5192),
    b = n(489887),
    y = n(981631),
    v = n(388032);
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
function I(e) {
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
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
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
    return (0, l.e7)([h.Z], () => null != e && e.id !== c.V && !!y.TPd.POLLS.has(e.type) && (!!e.isPrivate() || (h.Z.can(y.Plq.SEND_MESSAGES, e) && h.Z.can(y.Plq.SEND_POLLS, e))));
}
function w() {
    return !1;
}
function D(e, t, n) {
    return 0 === e.length && null == t.find((e) => L(e, n));
}
function L(e, t) {
    if (t === a.C.IMAGE_ONLY_ANSWERS) return null != e.image;
    {
        var n;
        let t = null == (n = e.text) ? void 0 : n.trim();
        return null != t && t.length > 0;
    }
}
function x(e, t) {
    var n;
    let r = null == (n = e.text) ? void 0 : n.trim();
    return t === a.C.DEFAULT && null != e.image && (null == r || 0 === r.length);
}
function M(e) {
    return new Date(Date.now() + e * g.Z.Millis.HOUR).toISOString();
}
function k(e) {
    var t;
    if (null == e) return;
    let n =
            null == e || null == (t = e.answers)
                ? void 0
                : t.map((e, t) => {
                      var n, r;
                      let i = null == (n = e.poll_media) ? void 0 : n.emoji,
                          o = T(I({}, e.poll_media), {
                              emoji:
                                  null != i
                                      ? {
                                            id: i.id,
                                            name: null != (r = i.name) ? r : ''
                                        }
                                      : void 0
                          });
                      return T(I({}, e), {
                          answer_id: t + 1,
                          poll_media: o
                      });
                  }),
        r = (null == e ? void 0 : e.duration) != null ? M(e.duration) : '0';
    return T(I({}, e), {
        expiry: r,
        answers: n
    });
}
function j(e, t) {
    var n, r, i, o;
    let a = null != (o = null == (i = e.embeds[0]) || null == (r = i.fields) || null == (n = r.find((e) => 'poll_question_text' === e.rawName)) ? void 0 : n.rawValue) ? o : '';
    return null != t ? (0, s.aF)(a, t) : a;
}
function U(e) {
    let t = (0, d.ZH)(e),
        n = j(e, b.Dv);
    return v.NW.format(v.t.Vn97KS, {
        username: t.nick,
        title: n
    });
}
function G(e) {
    return e.reduce((e, t) => {
        var n, r;
        return e + (null != (r = null == (n = t.count_details) ? void 0 : n.vote) ? r : 0);
    }, 0);
}
function B(e, t) {
    let n = {
            id: t,
            name: '',
            animated: !1
        },
        r = e.getChannelId(),
        o = _.Z.getReactions(r, e.id, n, b.$J, u.O.VOTE),
        a = f.Z.getChannel(r),
        s = null == a || a.isPrivate() ? null : a.getGuildId();
    return i()(o)
        .reject((e) => m.Z.isBlockedOrIgnored(e.id))
        .take(b.$J)
        .map((e) => E.ZP.getName(s, null == a ? void 0 : a.id, e))
        .value();
}
function F(e, t) {
    let n = Math.max(0, t - e.length);
    if (1 === e.length)
        if (n > 0)
            return v.NW.formatToPlainString(v.t['SV/iZm'], {
                a: e[0],
                n: n.toLocaleString()
            });
        else return e[0];
    if (2 === e.length)
        if (n > 0)
            return v.NW.formatToPlainString(v.t.YBnZKy, {
                a: e[0],
                b: e[1],
                n: n.toLocaleString()
            });
        else
            return v.NW.formatToPlainString(v.t['O5+f5e'], {
                a: e[0],
                b: e[1]
            });
    return 3 !== e.length
        ? v.NW.formatToPlainString(v.t.yVX6kJ, { n: n.toLocaleString() })
        : n > 0
          ? v.NW.formatToPlainString(v.t['ThXp+P'], {
                a: e[0],
                b: e[1],
                c: e[2],
                n: n.toLocaleString()
            })
          : v.NW.formatToPlainString(v.t['0UzBMz'], {
                a: e[0],
                b: e[1],
                c: e[2]
            });
}
function V(e, t, n) {
    var r, i;
    let o = p.Z.getMessage(t, e);
    if (null == o) return '';
    let a = o.getReaction({
            id: n,
            name: '',
            animated: !1
        }),
        s = null != (i = null == a || null == (r = a.count_details) ? void 0 : r.vote) ? i : 0,
        l = B(o, n);
    return 0 === l.length ? '' : F(l, s);
}
