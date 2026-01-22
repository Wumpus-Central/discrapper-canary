n.d(t, {
    E3: () => Q,
    EH: () => J,
    Eq: () => $,
    Gk: () => U,
    IY: () => q,
    Jl: () => S,
    L5: () => x,
    Pe: () => W,
    Pp: () => M,
    Rt: () => Z,
    TZ: () => G,
    Wg: () => X,
    XC: () => R,
    Zf: () => L,
    Zh: () => z,
    _B: () => T,
    _b: () => C,
    _o: () => Y,
    av: () => K,
    bS: () => v,
    dX: () => j,
    lX: () => F,
    mt: () => I,
    nm: () => N,
    rI: () => V,
    sh: () => w,
    zZ: () => k,
}),
    n(747238),
    n(896048),
    n(733351),
    n(591487),
    n(727858),
    n(321073),
    n(812715),
    n(866193);
var r = n(735438),
    i = n.n(r);
n(989349);
var a = n(988665),
    s = n(47167),
    o = n(734057),
    l = n(808728),
    c = n(517019),
    u = n(994500),
    d = n(309010),
    f = n(351906),
    p = n(287809),
    _ = n(661191),
    h = n(427262),
    m = n(256796),
    g = n(353271),
    E = n(771650);
n(768570);
var b = n(652215),
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
function v(e) {
    switch (e.type) {
        case b.I4_.GUILD:
            return e.guildId;
        case b.I4_.GUILD_CHANNEL:
        case b.I4_.CHANNEL:
        case b.I4_.THREAD:
            return e.channelId;
        case b.I4_.DMS:
            return e.type;
        case b.I4_.FAVORITES:
            return b.YYv;
    }
}
function S(e) {
    if (e.type === b.I4_.DMS) {
        var t;
        return null != (t = d.A.getChannelId(b.ME)) ? t : null;
    }
    return v(e);
}
function I(e) {
    switch (e.type) {
        case b.I4_.GUILD_CHANNEL:
        case b.I4_.GUILD:
        case b.I4_.THREAD:
            return e.guildId;
        case b.I4_.CHANNEL:
            var t;
            let n = o.A.getChannel(e.channelId);
            return null != (t = null == n ? void 0 : n.guild_id) ? t : null;
        case b.I4_.FAVORITES:
            return b.YYv;
        default:
            return null;
    }
}
function T(e) {
    return e.type === b.I4_.GUILD || e.type === b.I4_.GUILD_CHANNEL || e.type === b.I4_.THREAD;
}
function C(e) {
    switch (e.type) {
        case b.I4_.GUILD_CHANNEL:
        case b.I4_.CHANNEL:
        case b.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function N(e) {
    switch (e) {
        case b.BBH.MOST_RELEVANT:
            return {
                sort_by: "relevance",
                sort_order: "desc",
            };
        case b.BBH.OLDEST:
            return {
                sort_by: "timestamp",
                sort_order: "asc",
            };
        case b.BBH.NEWEST:
        default:
            return {
                sort_by: "timestamp",
                sort_order: "desc",
            };
    }
}
function R(e) {
    return null == e.sort_by || null == e.sort_order
        ? b.BBH.NEWEST
        : "relevance" === e.sort_by
          ? b.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? b.BBH.OLDEST
            : b.BBH.NEWEST;
}
function w(e) {
    switch (e) {
        case b.LWr.FILTER_FROM:
            return y.intl.string(y.t.E466pL);
        case b.LWr.FILTER_MENTIONS:
            return y.intl.string(y.t.BYvFWl);
        case b.LWr.FILTER_HAS:
            return y.intl.string(y.t.bhSYbc);
        case b.LWr.FILTER_BEFORE:
        case b.LWr.FILTER_ON:
        case b.LWr.FILTER_AFTER:
            return y.intl.string(y.t.Zbbc1E);
        case b.LWr.FILTER_IN:
            return y.intl.string(y.t["GpM+/7"]);
        case b.LWr.FILTER_FILE_TYPE:
            return y.intl.string(y.t.FXcAFe);
        case b.LWr.FILTER_FILE_NAME:
            return y.intl.string(y.t.uAbFDM);
        case b.LWr.FILTER_PINNED:
            return y.intl.string(y.t.UJxL3V);
        case b.LWr.FILTER_AUTHOR_TYPE:
            return y.intl.string(y.t.qCQzBl);
    }
}
let P = {
    [b.LWr.FILTER_BEFORE]: !0,
    [b.LWr.FILTER_AFTER]: !0,
    [b.LWr.FILTER_ON]: !0,
};
function D(e) {
    let t = E.Ay[e],
        n = null != t ? t.queryKey : null;
    return null == n && (n = "content"), n;
}
function x(e, t) {
    if (c.A.didAgree(t)) {
        let t = p.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function L(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (b.l90.test(n)) return;
        switch (n) {
            case b.LWr.ANSWER_BEFORE:
            case b.LWr.ANSWER_ON:
            case b.LWr.ANSWER_AFTER:
                let r = e.getData("start"),
                    i = e.getData("end");
                r && (t.min_id = _.default.fromTimestamp(r)), i && (t.max_id = _.default.fromTimestamp(i));
                return;
        }
        let a = D(n);
        null == t[a] && (t[a] = new Set());
        let s = t[a];
        switch (n) {
            case b.LWr.ANSWER_USERNAME_FROM:
            case b.LWr.ANSWER_USERNAME_MENTIONS:
                s.add(e.getData("userId"));
                break;
            case b.LWr.ANSWER_FILE_TYPE:
            case b.LWr.ANSWER_FILE_NAME:
                s.add(e.getMatch(1));
                break;
            case b.LWr.ANSWER_IN:
                var o;
                for (let t of null != (o = e.getData("channelIds")) ? o : []) s.add(t);
                break;
            case b.LWr.ANSWER_HAS:
                s.add(e.getData("has"));
                break;
            case b.LWr.ANSWER_PINNED:
                s.add(e.getData("pinned"));
                break;
            case b.LWr.ANSWER_AUTHOR_TYPE:
                s.add(e.getData("author_type"));
                break;
            default:
                s.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        r instanceof Set && (t[n] = Array.from(r));
    if (t.content) {
        delete t.contents;
        let e = g.A.getCurrentConfig({ location: "getSearchQueryFromTokens" });
        if (e.enabled) {
            let n = [],
                r = e.brackets
                    ? RegExp("(\\[([^\\]]+)\\]|(?:\\S+))", "gu")
                    : e.quotes
                      ? RegExp('("([^"]+)"|(?:\\S+))', "gu")
                      : RegExp("(\\S+)", "gu");
            for (let i of t.content) {
                let t = i.match(r);
                if (null != t)
                    for (let r of t) {
                        let t = e.brackets && r.startsWith("[") && r.endsWith("]"),
                            i = e.quotes && r.startsWith('"') && r.endsWith('"'),
                            a = r.includes("://"),
                            s = t || i || a ? 0 : 2;
                        n.push("".concat(s, "|").concat(r));
                    }
            }
            n.length > 0 && (t.contents = n), delete t.content;
        } else (t.content = t.content.join(" ").trim()), t.content || delete t.content;
    }
    return t;
}
function j(e) {
    var t;
    return (null == e ? void 0 : e.contents) != null && e.contents.length > 0
        ? null == e || null == (t = e.contents)
            ? void 0
            : t.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : null == e
          ? void 0
          : e.content;
}
function M(e) {
    return e
        .map((e) => (e.type === a.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function k(e, t, n) {
    let r,
        i,
        a = e.find((a, s) =>
            t >= a.start && t <= a.end && n >= a.start && n <= a.end
                ? (null != e[s + 1] && (i = e[s + 1]), !0)
                : ((r = a), !1),
        );
    return null == a
        ? null
        : {
              previousToken: r,
              currentToken: a,
              nextToken: i,
              focusOffset: t,
              anchorOffset: n,
          };
}
function U(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: s } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: b.o$q.EMPTY,
            filter: null,
            token: null,
        };
    if (null == r)
        return {
            type: b.o$q.FILTER_ALL,
            filter: null,
            token: null,
        };
    if ((0, E.If)(r.type)) {
        if (null == i || i.type === a.Ay.NON_TOKEN_TYPE)
            return {
                type: b.o$q.FILTER,
                filter: r.type,
                token: i,
            };
        if (null != i && !b.T2E.test(i.type))
            return {
                type: b.o$q.FILTER,
                filter: r.type,
                token: null,
            };
    }
    return r.type === a.Ay.NON_TOKEN_TYPE && null != s && (0, E.If)(s.type)
        ? {
              type: b.o$q.FILTER,
              filter: s.type,
              token: r,
          }
        : (r.type === a.Ay.NON_TOKEN_TYPE && (n = r),
          {
              type: b.o$q.FILTER_ALL,
              filter: null,
              token: n,
          });
}
function G(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => "\\".concat(t));
        return '"'.concat(t, '"');
    }
}
function V(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function F(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let B = new a.Ay(),
    H = new a.Ay();
function Y(e) {
    return B.tokenize(e);
}
function W() {
    B.clearCache(), H.clearCache();
}
function K(e) {
    return null != e ? P[e] : null;
}
function z(e, t) {
    let n = b.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!b.T2E.test(t.type));
}
function q() {
    (0, E.G0)(), B.reset(), i()(E.Ay).forOwn((e, t) => B.addRule(A({ type: t }, e))), H.reset();
    let e = (0, E.gU)();
    i()(e).forOwn((e, t) => H.addRule(A({ type: t }, e))), m.A.markSearchTokensRefreshed();
}
function X(e) {
    return !!T(e) || (e.type === b.I4_.DMS && !f.A.hidePersonalInformation);
}
function Z(e) {
    let t = e.name,
        n = !1;
    if (e.isGroupDM()) t = (0, s.m1)(e, p.default, u.A);
    else if (e.isDM()) {
        let n = e.getRecipientId(),
            r = p.default.getUser(n),
            i = h.Ay.getUserTag(r);
        if (null == i) return null;
        t = i;
    } else {
        n = !e.isThread();
        let r = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        (null == r ? void 0 : r.name) != null && (t = r.name);
    }
    return ((t = G(t)), n) ? "#".concat(t) : t;
}
function Q(e) {
    var t;
    if (e.isGroupDM()) return (0, s.m1)(e, p.default, u.A);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = p.default.getUser(t);
        return h.Ay.getUserTag(n);
    }
    let n = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return null != (t = null == n ? void 0 : n.name) ? t : e.name;
}
function $() {
    var e, t;
    return null != (e = null == (t = p.default.getCurrentUser()) ? void 0 : t.isStaff()) && e;
}
function J(e) {
    let t = H.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== b.LWr.FILTER_IN && e.type !== b.LWr.ANSWER_IN && n.push(e);
    });
    let r = "";
    return (
        n.forEach((e) => {
            r += e.getFullMatch();
        }),
        r.trim()
    );
}
