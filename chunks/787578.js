t(321073);
var n = t(91871),
    a = t.n(n),
    i = t(649852),
    l = t.n(i);
t(621466);
let o = /[\u0300-\u036f]/g,
    s = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(o, "").normalize("NFC"),
    c =
        null == String.prototype.normalize
            ? (e) => e
            : function (e) {
                  let r = t(209034),
                      n = "";
                  return (
                      [...e.normalize("NFD")].forEach((e) => {
                          n += r[e] ?? e;
                      }),
                      n.normalize("NFD").toLocaleLowerCase()
                  );
              };
function f(e, r) {
    if (e.score === r.score) {
        let t = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
            n = e.sortable ?? r.comparator?.toLocaleLowerCase() ?? "";
        if (t < n) return -1;
        if (t > n) return 1;
    }
    return r.score - e.score;
}
let u = Object.freeze({
        UPDATE_USERS: "UPDATE_USERS",
        USER_RESULTS: "USER_RESULTS",
        QUERY_SET: "QUERY_SET",
        QUERY_CLEAR: "QUERY_CLEAR",
        REQUEST_DEBUG_STATE: "REQUEST_DEBUG_STATE",
        DEBUG_STATE: "DEBUG_STATE",
    }),
    p = new Map(),
    E = new Map(),
    d = new Set(),
    m = l()(
        () => {
            0 !== d.size &&
                (d.forEach((e) => {
                    let r = E.get(e);
                    null != r && S(e, r);
                }),
                d.clear());
        },
        100,
        { leading: !0, trailing: !0 },
    );
function S(e, r) {
    let { query: t, limit: n, filters: i, blacklist: l, whitelist: o, boosters: u, boosterFallback: E } = r,
        d = null != i && i.strict ? (i.guild ?? null) : null,
        m = RegExp(`^${t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")}`, "i"),
        S = RegExp(t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), "i"),
        g = [];
    if ("" === t) return h(t, g, e);
    let v = t.toLocaleLowerCase(),
        U = c(v);
    (p.forEach((e, r) => {
        let n;
        if (
            !(function (e, r, t, n, a) {
                if (null != n && n.indexOf(e) >= 0) return !1;
                if (null != a && a.indexOf(e) >= 0) return !0;
                if (null != t) {
                    let { friends: e, staff: n, guild: a, provisional: i } = t;
                    return (
                        (null == i || r.isProvisional === i) &&
                        ((!0 === e && !0 === r.isFriend) ||
                            (!0 === n && !0 === r.isStaff) ||
                            (null != a && a in r.nicknames))
                    );
                }
                return !0;
            })(r, e, i, l, o)
        )
            return;
        let { username: f } = e;
        if (r === t) {
            var p;
            n = { id: r, username: f, comparator: r, score: ((p = u[r]), 10 * (p ?? E)) };
        } else {
            let t = [e.username, e.friendNickname, e.globalName].filter((e) => null != e);
            if (null != d) {
                let r = e.nicknames[d];
                null != r && t.push(r);
            } else t.push(...Object.values(e.nicknames).filter((e) => null != e));
            t.forEach((e) => {
                var t, i, l, o;
                let p,
                    d = s(e.toLocaleLowerCase());
                (m.test(e)
                    ? (p = { comparator: e, score: ((t = u[r]), 10 * (t ?? E)) })
                    : S.test(e)
                      ? (p = { comparator: e, score: ((i = u[r]), 5 * (i ?? E)) })
                      : a()(v, d)
                        ? (p = { comparator: e, score: ((l = u[r]), +(l ?? E)) })
                        : a()(U, c(d)) && (p = { comparator: e, score: ((o = u[r]), +(o ?? E)) }),
                    null != p && (null == n || n.score < p.score) && (n = { ...p, id: r, username: f }));
            });
        }
        null != n && g.push(n);
    }),
        g.sort(f),
        g.length > n && (g.length = n),
        h(t, g, e));
}
function h(e, r, t) {
    let n = { type: u.USER_RESULTS, uuid: t, payload: { query: e, results: r } };
    self.postMessage(n);
}
self.addEventListener("message", (e) => {
    let { data: r } = e;
    if (null == r || null == r.type) throw Error("Invalid data");
    switch (r.type) {
        case u.UPDATE_USERS:
            return (function (e) {
                let { payload: r } = e,
                    t = !1,
                    n = new Set();
                (r.forEach((e) => {
                    let r = p.get(e.id) ?? null,
                        a =
                            null == r
                                ? e
                                : {
                                      id: e.id,
                                      username: e.username ?? r.username,
                                      isFriend: e.isFriend ?? r.isFriend,
                                      isStaff: e.isStaff ?? r.isStaff,
                                      isBot: e.isBot ?? r.isBot,
                                      isProvisional: e.isProvisional ?? r.isProvisional,
                                      friendNickname: e.friendNickname ?? r.friendNickname,
                                      globalName: e.globalName ?? r.globalName,
                                      nicknames: { ...r.nicknames, ...e.nicknames },
                                  };
                    (p.set(e.id, a),
                        E.size > 0 &&
                            ((a.isFriend !== r?.isFriend ||
                                a.friendNickname !== r?.friendNickname ||
                                a.isStaff !== r?.isStaff) &&
                                (t = !0),
                            Object.keys(a.nicknames).forEach((e) => {
                                n.add(e);
                            })));
                }),
                    E.forEach((e, r) => {
                        let { filters: a } = e;
                        (null == a || a.friends === t || a.staff === t || n.has(a.guild)) && d.add(r);
                    }),
                    m());
            })(r);
        case u.QUERY_SET:
            return (function (e) {
                let { uuid: r, payload: t } = e;
                (E.set(r, t), S(r, t));
            })(r);
        case u.QUERY_CLEAR:
            return (function (e) {
                let { uuid: r } = e;
                (E.delete(r), d.delete(r), 0 === d.size && m.cancel());
            })(r);
        case u.REQUEST_DEBUG_STATE:
            return (function (e) {
                let { uuid: r } = e,
                    t = { type: u.DEBUG_STATE, uuid: r, payload: { users: JSON.stringify(Object.fromEntries(p)) } };
                self.postMessage(t);
            })(r);
    }
});
