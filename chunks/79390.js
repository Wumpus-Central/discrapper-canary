n.d(t, {
    D$: () => R,
    N4: () => M,
    UI: () => P,
    Uu: () => T,
    cS: () => w,
    cZ: () => k,
    e1: () => Z,
    eQ: () => N,
    fw: () => A,
    uY: () => D,
    x9: () => L,
}),
    n(704826),
    n(35282),
    n(388685),
    n(781311);
var r = n(392711),
    i = n.n(r),
    a = n(772848),
    o = n(468194),
    s = n(442837),
    l = n(333023),
    c = n(566006),
    u = n(739566),
    d = n(592125),
    f = n(542578),
    p = n(375954),
    _ = n(496675),
    m = n(699516),
    h = n(70956),
    g = n(5192),
    E = n(489887),
    b = n(981631),
    y = n(388032);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function I(e, t) {
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
function T() {
    return {
        text: void 0,
        image: void 0,
        localCreationAnswerId: C(),
    };
}
function C() {
    return (0, a.Z)();
}
function A(e) {
    let t = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
    return e.replace(t, "");
}
function N(e) {
    for (let t of e.reactions) if (null == t.me_vote) return !0;
    return !1;
}
function P(e) {
    return (0, s.e7)(
        [_.Z],
        () =>
            null != e &&
            e.id !== l.V &&
            !!b.TPd.POLLS.has(e.type) &&
            (!!e.isPrivate() || (_.Z.can(b.Plq.SEND_MESSAGES, e) && _.Z.can(b.Plq.SEND_POLLS, e))),
    );
}
function R(e, t) {
    return 0 === e.length && null == t.find((e) => w(e));
}
function w(e) {
    var t;
    let n = null == (t = e.text) ? void 0 : t.trim();
    return null != n && n.length > 0;
}
function D(e) {
    var t;
    let n = null == (t = e.text) ? void 0 : t.trim();
    return null != e.image && (null == n || 0 === n.length);
}
function x(e) {
    return new Date(Date.now() + e * h.Z.Millis.HOUR).toISOString();
}
function L(e) {
    var t;
    if (null == e) return;
    let n =
            null == e || null == (t = e.answers)
                ? void 0
                : t.map((e, t) => {
                      var n, r;
                      let i = null == (n = e.poll_media) ? void 0 : n.emoji,
                          a = I(v({}, e.poll_media), {
                              emoji:
                                  null != i
                                      ? {
                                            id: i.id,
                                            name: null != (r = i.name) ? r : "",
                                        }
                                      : void 0,
                          });
                      return I(v({}, e), {
                          answer_id: t + 1,
                          poll_media: a,
                      });
                  }),
        r = (null == e ? void 0 : e.duration) != null ? x(e.duration) : "0";
    return I(v({}, e), {
        expiry: r,
        answers: n,
    });
}
function j(e, t) {
    var n, r, i, a;
    let s =
        null !=
        (a =
            null == (i = e.embeds[0]) ||
            null == (r = i.fields) ||
            null == (n = r.find((e) => "poll_question_text" === e.rawName))
                ? void 0
                : n.rawValue)
            ? a
            : "";
    return null != t ? (0, o.aF)(s, t) : s;
}
function M(e) {
    let t = (0, u.ZH)(e),
        n = j(e, E.Dv);
    return y.intl.format(y.t.Vn97Ka, {
        username: t.nick,
        title: n,
    });
}
function k(e) {
    return e.reduce((e, t) => {
        var n, r;
        return e + (null != (r = null == (n = t.count_details) ? void 0 : n.vote) ? r : 0);
    }, 0);
}
function U(e, t) {
    var n;
    let r = {
            id: t,
            name: "",
            animated: !1,
        },
        a = e.getChannelId(),
        o = f.Z.getReactions(a, e.id, r, E.$J, c.O.VOTE),
        s = d.Z.getChannel(a),
        l = null == s || s.isPrivate() ? null : s.getGuildId();
    return i()(Array.from(null != (n = null == o ? void 0 : o.values()) ? n : []))
        .reject((e) => m.Z.isBlockedOrIgnored(e.id))
        .take(E.$J)
        .map((e) => g.ZP.getName(l, null == s ? void 0 : s.id, e))
        .value();
}
function G(e, t) {
    let n = Math.max(0, t - e.length);
    if (1 === e.length)
        if (n > 0)
            return y.intl.formatToPlainString(y.t["SV/iZn"], {
                a: e[0],
                n: n,
            });
        else return e[0];
    if (2 === e.length)
        if (n > 0)
            return y.intl.formatToPlainString(y.t.YBnZK0, {
                a: e[0],
                b: e[1],
                n: n,
            });
        else
            return y.intl.formatToPlainString(y.t["O5+f5c"], {
                a: e[0],
                b: e[1],
            });
    return 3 !== e.length
        ? y.intl.formatToPlainString(y.t.yVX6kE, { n: n })
        : n > 0
          ? y.intl.formatToPlainString(y.t["ThXp+N"], {
                a: e[0],
                b: e[1],
                c: e[2],
                n: n,
            })
          : y.intl.formatToPlainString(y.t["0UzBM3"], {
                a: e[0],
                b: e[1],
                c: e[2],
            });
}
function Z(e, t, n) {
    var r, i;
    let a = p.Z.getMessage(t, e);
    if (null == a) return "";
    let o = a.getReaction({
            id: n,
            name: "",
            animated: !1,
        }),
        s = null != (i = null == o || null == (r = o.count_details) ? void 0 : r.vote) ? i : 0,
        l = U(a, n);
    return 0 === l.length ? "" : G(l, s);
}
