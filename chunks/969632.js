n.d(t, {
    $m: () => V,
    G8: () => L,
    Gh: () => N,
    I7: () => R,
    Il: () => M,
    Kj: () => C,
    ND: () => P,
    VD: () => D,
    Wn: () => w,
    YP: () => I,
    aw: () => k,
}),
    n(747238),
    n(812715),
    n(896048),
    n(733351);
var r = n(735438),
    i = n.n(r),
    a = n(835245),
    s = n(23339),
    o = n(311907),
    l = n(695870),
    c = n(505527),
    u = n(763754),
    d = n(734057),
    f = n(956703),
    p = n(320501),
    _ = n(576705),
    h = n(994500),
    m = n(927813),
    g = n(562153),
    E = n(412136),
    b = n(652215),
    y = n(985018);

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

function A(e) {
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

function v(e, t) {
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

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function I() {
    return {
        text: void 0,
        image: void 0,
        localCreationAnswerId: T(),
    };
}

function T() {
    return (0, a.A)();
}

function C(e) {
    let t = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
    return e.replace(t, "");
}

function N(e) {
    for (let t of e.reactions) if (null == t.me_vote) return !0;
    return !1;
}

function R(e) {
    return (0, o.bG)(
        [_.A],
        () =>
            null != e &&
            e.id !== l.E &&
            !!b.kvI.POLLS.has(e.type) &&
            (!!e.isPrivate() || (_.A.can(b.xBc.SEND_MESSAGES, e) && _.A.can(b.xBc.SEND_POLLS, e))),
    );
}

function w(e, t) {
    return 0 === e.length && null == t.find((e) => P(e));
}

function P(e) {
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
    return new Date(Date.now() + e * m.A.Millis.HOUR).toISOString();
}

function L(e) {
    var t;
    if (null == e) return;
    let n =
            null == e || null == (t = e.answers)
                ? void 0
                : t.map((e, t) => {
                      var n, r;
                      let i = null == (r = e.poll_media) ? void 0 : r.emoji,
                          a = S(A({}, e.poll_media), {
                              emoji:
                                  null != i
                                      ? {
                                            id: i.id,
                                            name: null != (n = i.name) ? n : "",
                                        }
                                      : void 0,
                          });
                      return S(A({}, e), {
                          answer_id: t + 1,
                          poll_media: a,
                      });
                  }),
        r = (null == e ? void 0 : e.duration) != null ? x(e.duration) : "0";
    return S(A({}, e), {
        expiry: r,
        answers: n,
    });
}

function j(e, t) {
    var n, r, i, a;
    let o =
        null !=
        (n =
            null == (a = e.embeds[0]) ||
            null == (i = a.fields) ||
            null == (r = i.find((e) => "poll_question_text" === e.rawName))
                ? void 0
                : r.rawValue)
            ? n
            : "";
    return null != t ? (0, s.EJ)(o, t) : o;
}

function M(e) {
    let t = (0, u.p_)(e),
        n = j(e, E.TU);
    return y.intl.format(y.t.Vn97Ka, {
        username: t.nick,
        title: n,
    });
}

function k(e) {
    return e.reduce((e, t) => {
        var n, r;
        return e + (null != (n = null == (r = t.count_details) ? void 0 : r.vote) ? n : 0);
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
        s = f.A.getReactions(a, e.id, r, E.kx, c.v.VOTE),
        o = d.A.getChannel(a),
        l = null == o || o.isPrivate() ? null : o.getGuildId();
    return i()(Array.from(null != (n = null == s ? void 0 : s.values()) ? n : []))
        .reject((e) => h.A.isBlockedOrIgnored(e.id))
        .take(E.kx)
        .map((e) => g.Ay.getName(l, null == o ? void 0 : o.id, e))
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
        ? y.intl.formatToPlainString(y.t.yVX6kE, {
              n: n,
          })
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

function V(e, t, n) {
    var r, i;
    let a = p.A.getMessage(t, e);
    if (null == a) return "";
    let s = a.getReaction({
            id: n,
            name: "",
            animated: !1,
        }),
        o = null != (r = null == s || null == (i = s.count_details) ? void 0 : i.vote) ? r : 0,
        l = U(a, n);
    return 0 === l.length ? "" : G(l, o);
}
