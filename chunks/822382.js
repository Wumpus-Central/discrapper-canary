"use strict";
n.d(t, {
    E3: () => $,
    EH: () => q,
    Eq: () => z,
    Gk: () => P,
    IY: () => W,
    Jl: () => T,
    L5: () => D,
    Pe: () => H,
    Pp: () => M,
    Rt: () => K,
    TZ: () => k,
    XC: () => C,
    Zf: () => L,
    Zh: () => Y,
    _B: () => y,
    _b: () => v,
    _o: () => B,
    av: () => j,
    bS: () => I,
    dX: () => w,
    lX: () => G,
    mt: () => S,
    nm: () => N,
    rI: () => U,
    sh: () => R,
    zZ: () => x,
}),
    n(321073);
var r = n(735438),
    i = n.n(r);
n(989349);
var s = n(988665),
    a = n(47167),
    o = n(734057),
    l = n(808728),
    u = n(517019),
    c = n(994500),
    d = n(309010),
    _ = n(287809),
    f = n(661191),
    p = n(427262),
    h = n(256796),
    m = n(353271),
    E = n(771650);
n(768570);
var g = n(652215),
    A = n(985018);
function I(e) {
    switch (e.type) {
        case g.I4_.GUILD:
            return e.guildId;
        case g.I4_.GUILD_CHANNEL:
        case g.I4_.CHANNEL:
        case g.I4_.THREAD:
            return e.channelId;
        case g.I4_.DMS:
            return e.type;
        case g.I4_.FAVORITES:
            return g.YYv;
    }
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A;
    return e.type === g.I4_.DMS ? (t.getChannelId(g.ME) ?? null) : I(e);
}
function S(e) {
    switch (e.type) {
        case g.I4_.GUILD_CHANNEL:
        case g.I4_.GUILD:
        case g.I4_.THREAD:
            return e.guildId;
        case g.I4_.CHANNEL:
            let t = o.A.getChannel(e.channelId);
            return t?.guild_id ?? null;
        case g.I4_.FAVORITES:
            return g.YYv;
        default:
            return null;
    }
}
function y(e) {
    return e.type === g.I4_.GUILD || e.type === g.I4_.GUILD_CHANNEL || e.type === g.I4_.THREAD;
}
function v(e) {
    switch (e.type) {
        case g.I4_.GUILD_CHANNEL:
        case g.I4_.CHANNEL:
        case g.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function N(e) {
    switch (e) {
        case g.BBH.MOST_RELEVANT:
            return { sort_by: "relevance", sort_order: "desc" };
        case g.BBH.OLDEST:
            return { sort_by: "timestamp", sort_order: "asc" };
        case g.BBH.NEWEST:
        default:
            return { sort_by: "timestamp", sort_order: "desc" };
    }
}
function C(e) {
    return null == e.sort_by || null == e.sort_order
        ? g.BBH.NEWEST
        : "relevance" === e.sort_by
          ? g.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? g.BBH.OLDEST
            : g.BBH.NEWEST;
}
function R(e) {
    switch (e) {
        case g.LWr.FILTER_FROM:
            return A.intl.string(A.t.E466pL);
        case g.LWr.FILTER_MENTIONS:
            return A.intl.string(A.t.BYvFWl);
        case g.LWr.FILTER_HAS:
            return A.intl.string(A.t.bhSYbc);
        case g.LWr.FILTER_BEFORE:
        case g.LWr.FILTER_ON:
        case g.LWr.FILTER_AFTER:
            return A.intl.string(A.t.Zbbc1E);
        case g.LWr.FILTER_IN:
            return A.intl.string(A.t["GpM+/7"]);
        case g.LWr.FILTER_LINK_FROM:
            return A.intl.string(A.t.FdDTni);
        case g.LWr.FILTER_FILE_TYPE:
            return A.intl.string(A.t.FXcAFe);
        case g.LWr.FILTER_FILE_NAME:
            return A.intl.string(A.t.uAbFDM);
        case g.LWr.FILTER_PINNED:
            return A.intl.string(A.t.UJxL3V);
        case g.LWr.FILTER_AUTHOR_TYPE:
            return A.intl.string(A.t.qCQzBl);
    }
}
let O = { [g.LWr.FILTER_BEFORE]: !0, [g.LWr.FILTER_AFTER]: !0, [g.LWr.FILTER_ON]: !0 };
function b(e) {
    let t = E.Ay[e],
        n = null != t ? t.queryKey : null;
    return null == n && (n = "content"), n;
}
function D(e, t) {
    if (u.A.didAgree(t)) {
        let t = _.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function L(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (g.l90.test(n)) return;
        switch (n) {
            case g.LWr.ANSWER_BEFORE:
            case g.LWr.ANSWER_ON:
            case g.LWr.ANSWER_AFTER:
                let r = e.getData("start"),
                    i = e.getData("end");
                r && (t.min_id = f.default.fromTimestamp(r)), i && (t.max_id = f.default.fromTimestamp(i));
                return;
        }
        let s = b(n);
        null == t[s] && (t[s] = new Set());
        let a = t[s];
        switch (n) {
            case g.LWr.ANSWER_USERNAME_FROM:
            case g.LWr.ANSWER_USERNAME_MENTIONS:
                a.add(e.getData("userId"));
                break;
            case g.LWr.ANSWER_LINK_FROM:
            case g.LWr.ANSWER_FILE_TYPE:
            case g.LWr.ANSWER_FILE_NAME:
                a.add(e.getMatch(1));
                break;
            case g.LWr.ANSWER_IN:
                for (let t of e.getData("channelIds") ?? []) a.add(t);
                break;
            case g.LWr.ANSWER_HAS:
                a.add(e.getData("has"));
                break;
            case g.LWr.ANSWER_PINNED:
                a.add(e.getData("pinned"));
                break;
            case g.LWr.ANSWER_AUTHOR_TYPE:
                a.add(e.getData("author_type"));
                break;
            default:
                a.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        r instanceof Set && (t[n] = Array.from(r));
    if (t.content) {
        delete t.contents;
        let e = m.A.getCurrentConfig({ location: "getSearchQueryFromTokens" });
        if (e.enabled) {
            let n = [],
                r = e.brackets ? /(\[([^\]]+)\]|(?:\S+))/gu : e.quotes ? /("([^"]+)"|(?:\S+))/gu : /(\S+)/gu;
            for (let i of t.content) {
                let t = i.match(r);
                if (null != t)
                    for (let r of t) {
                        let t = e.brackets && r.startsWith("[") && r.endsWith("]"),
                            i = e.quotes && r.startsWith('"') && r.endsWith('"'),
                            s = r.includes("://"),
                            a = t || i || s ? 0 : 2;
                        n.push(`${a}|${r}`);
                    }
            }
            n.length > 0 && (t.contents = n), delete t.content;
        } else (t.content = t.content.join(" ").trim()), t.content || delete t.content;
    }
    return t;
}
function w(e) {
    return e?.contents != null && e.contents.length > 0
        ? e?.contents?.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : e?.content;
}
function M(e) {
    return e
        .map((e) => (e.type === s.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function x(e, t, n) {
    let r,
        i,
        s = e.find((s, a) =>
            t >= s.start && t <= s.end && n >= s.start && n <= s.end
                ? (null != e[a + 1] && (i = e[a + 1]), !0)
                : ((r = s), !1),
        );
    return null == s ? null : { previousToken: r, currentToken: s, nextToken: i, focusOffset: t, anchorOffset: n };
}
function P(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: a } = (e = e ?? {});
    if (0 === t.length) return { type: g.o$q.EMPTY, filter: null, token: null };
    if (null == r) return { type: g.o$q.FILTER_ALL, filter: null, token: null };
    if ((0, E.If)(r.type)) {
        if (null == i || i.type === s.Ay.NON_TOKEN_TYPE) return { type: g.o$q.FILTER, filter: r.type, token: i };
        if (null != i && !g.T2E.test(i.type)) return { type: g.o$q.FILTER, filter: r.type, token: null };
    }
    return r.type === s.Ay.NON_TOKEN_TYPE && null != a && (0, E.If)(a.type)
        ? { type: g.o$q.FILTER, filter: a.type, token: r }
        : (r.type === s.Ay.NON_TOKEN_TYPE && (n = r), { type: g.o$q.FILTER_ALL, filter: null, token: n });
}
function k(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => `\\${t}`);
        return `"${t}"`;
    }
}
function U(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function G(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let F = new s.Ay(),
    V = new s.Ay();
function B(e) {
    return F.tokenize(e);
}
function H() {
    F.clearCache(), V.clearCache();
}
function j(e) {
    return null != e ? O[e] : null;
}
function Y(e, t) {
    let n = g.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!g.T2E.test(t.type));
}
function W() {
    (0, E.G0)(), F.reset(), i()(E.Ay).forOwn((e, t) => F.addRule({ type: t, ...e })), V.reset();
    let e = (0, E.gU)();
    i()(e).forOwn((e, t) => V.addRule({ type: t, ...e })), h.A.markSearchTokensRefreshed();
}
function K(e) {
    let t = e.name,
        n = !1;
    if (e.isGroupDM()) t = (0, a.m1)(e, _.default, c.A);
    else if (e.isDM()) {
        let n = e.getRecipientId(),
            r = _.default.getUser(n),
            i = p.Ay.getUserTag(r);
        if (null == i) return null;
        t = i;
    } else {
        n = !e.isThread();
        let r = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        r?.name != null && (t = r.name);
    }
    return ((t = k(t)), n) ? `#${t}` : t;
}
function $(e) {
    if (e.isGroupDM()) return (0, a.m1)(e, _.default, c.A);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = _.default.getUser(t);
        return p.Ay.getUserTag(n);
    }
    let t = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return t?.name ?? e.name;
}
function z() {
    return _.default.getCurrentUser()?.isStaff() ?? !1;
}
function q(e) {
    let t = V.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== g.LWr.FILTER_IN && e.type !== g.LWr.ANSWER_IN && n.push(e);
    });
    let r = "";
    return (
        n.forEach((e) => {
            r += e.getFullMatch();
        }),
        r.trim()
    );
}
