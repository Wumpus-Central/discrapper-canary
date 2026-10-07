(n.d(t, {
    E3: () => K,
    EH: () => $,
    Gk: () => w,
    IY: () => W,
    Jl: () => S,
    L5: () => v,
    Pe: () => V,
    Pp: () => P,
    Rt: () => Y,
    TZ: () => G,
    VI: () => z,
    XC: () => L,
    Y7: () => N,
    Zf: () => b,
    Zh: () => j,
    _b: () => O,
    _o: () => B,
    av: () => H,
    bS: () => g,
    dX: () => M,
    lX: () => x,
    mt: () => C,
    nm: () => R,
    sh: () => y,
    zZ: () => U,
}),
    n(321073));
var i = n(435558),
    r = n.n(i);
n(536637);
var a = n(73153),
    s = n(988665),
    l = n(47167),
    o = n(734057),
    d = n(808728),
    c = n(517019),
    u = n(71393),
    _ = n(994500),
    E = n(309010),
    A = n(287809),
    h = n(935208),
    f = n(427262),
    I = n(902008),
    p = n(304578);
n(768570);
var T = n(652215),
    m = n(375708);
function g(e) {
    switch (e.type) {
        case T.I4_.GUILD:
            return e.guildId;
        case T.I4_.GUILD_CHANNEL:
        case T.I4_.CHANNEL:
        case T.I4_.THREAD:
            return e.channelId;
        case T.I4_.DMS:
            return e.type;
    }
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.Ay;
    return e.type === T.I4_.DMS ? (t.getChannelId(T.ME) ?? null) : g(e);
}
function N(e) {
    switch (e.type) {
        case T.I4_.CHANNEL:
            return m.intl.string(m.t.Q0JJjv);
        case T.I4_.DMS:
            return m.intl.string(m.t.Br0xJA);
        case T.I4_.GUILD_CHANNEL:
        case T.I4_.GUILD:
        case T.I4_.THREAD:
            return m.intl.string(m.t.AXPbZr);
    }
}
function C(e) {
    switch (e.type) {
        case T.I4_.GUILD_CHANNEL:
        case T.I4_.GUILD:
        case T.I4_.THREAD:
            return e.guildId;
        case T.I4_.CHANNEL:
            let t = o.A.getChannel(e.channelId);
            return t?.guild_id ?? null;
        default:
            return null;
    }
}
function O(e) {
    switch (e.type) {
        case T.I4_.GUILD_CHANNEL:
        case T.I4_.CHANNEL:
        case T.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function R(e) {
    switch (e) {
        case T.BBH.MOST_RELEVANT:
            return { sort_by: "relevance", sort_order: "desc" };
        case T.BBH.OLDEST:
            return { sort_by: "timestamp", sort_order: "asc" };
        case T.BBH.NEWEST:
        default:
            return { sort_by: "timestamp", sort_order: "desc" };
    }
}
function L(e) {
    return null == e.sort_by || null == e.sort_order
        ? T.BBH.NEWEST
        : "relevance" === e.sort_by
          ? T.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? T.BBH.OLDEST
            : T.BBH.NEWEST;
}
function y(e) {
    switch (e) {
        case T.LWr.FILTER_FROM:
            return m.intl.string(m.t.E466pL);
        case T.LWr.FILTER_MENTIONS:
            return m.intl.string(m.t.BYvFWl);
        case T.LWr.FILTER_HAS:
            return m.intl.string(m.t.bhSYbc);
        case T.LWr.FILTER_BEFORE:
        case T.LWr.FILTER_ON:
        case T.LWr.FILTER_AFTER:
            return m.intl.string(m.t.Zbbc1E);
        case T.LWr.FILTER_IN:
            return m.intl.string(m.t["GpM+/7"]);
        case T.LWr.FILTER_LINK_FROM:
            return m.intl.string(m.t.FdDTni);
        case T.LWr.FILTER_FILE_TYPE:
            return m.intl.string(m.t.FXcAFe);
        case T.LWr.FILTER_FILE_NAME:
            return m.intl.string(m.t.uAbFDM);
        case T.LWr.FILTER_PINNED:
            return m.intl.string(m.t.UJxL3V);
        case T.LWr.FILTER_AUTHOR_TYPE:
            return m.intl.string(m.t.qCQzBl);
    }
}
let D = { [T.LWr.FILTER_BEFORE]: !0, [T.LWr.FILTER_AFTER]: !0, [T.LWr.FILTER_ON]: !0 };
function v(e, t) {
    if (c.A.didAgree(t)) {
        let t = A.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function b(e) {
    let t = {};
    for (let [n, i] of (e.forEach((e) => {
        let n,
            i,
            { type: r } = e;
        if (T.l90.test(r)) return;
        switch (r) {
            case T.LWr.ANSWER_BEFORE:
            case T.LWr.ANSWER_ON:
            case T.LWr.ANSWER_AFTER:
                let a = e.getData("start"),
                    s = e.getData("end");
                (a && (t.min_id = h.default.fromTimestamp(a)), s && (t.max_id = h.default.fromTimestamp(s)));
                return;
        }
        let l = (null == (i = null != (n = p.Ay[r]) ? n.queryKey : null) && (i = "content"), i);
        null == t[l] && (t[l] = new Set());
        let o = t[l];
        switch (r) {
            case T.LWr.ANSWER_USERNAME_FROM:
            case T.LWr.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData("userId"));
                break;
            case T.LWr.ANSWER_LINK_FROM:
            case T.LWr.ANSWER_FILE_TYPE:
            case T.LWr.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case T.LWr.ANSWER_IN:
                for (let t of e.getData("channelIds") ?? []) o.add(t);
                break;
            case T.LWr.ANSWER_HAS:
                o.add(e.getData("has"));
                break;
            case T.LWr.ANSWER_PINNED:
                o.add(e.getData("pinned"));
                break;
            case T.LWr.ANSWER_AUTHOR_TYPE:
                o.add(e.getData("author_type"));
                break;
            default:
                o.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        i instanceof Set && (t[n] = Array.from(i));
    return (
        t.content && (delete t.contents, (t.content = t.content.join(" ").trim()), t.content || delete t.content), t
    );
}
function M(e) {
    return e?.contents != null && e.contents.length > 0
        ? e?.contents?.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : e?.content;
}
function P(e) {
    return e
        .map((e) => (e.type === s.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function U(e, t, n) {
    let i,
        r,
        a = e.find((a, s) =>
            t >= a.start && t <= a.end && n >= a.start && n <= a.end
                ? (null != e[s + 1] && (r = e[s + 1]), !0)
                : ((i = a), !1),
        );
    return null == a ? null : { previousToken: i, currentToken: a, nextToken: r, focusOffset: t, anchorOffset: n };
}
function w(e, t) {
    let n,
        { currentToken: i, nextToken: r, previousToken: a } = (e = e ?? {});
    if (0 === t.length) return { type: T.o$q.EMPTY, filter: null, token: null };
    if (null == i) return { type: T.o$q.FILTER_ALL, filter: null, token: null };
    if ((0, p.If)(i.type)) {
        if (null == r || r.type === s.Ay.NON_TOKEN_TYPE) return { type: T.o$q.FILTER, filter: i.type, token: r };
        if (null != r && !T.T2E.test(r.type)) return { type: T.o$q.FILTER, filter: i.type, token: null };
    }
    return i.type === s.Ay.NON_TOKEN_TYPE && null != a && (0, p.If)(a.type)
        ? { type: T.o$q.FILTER, filter: a.type, token: i }
        : (i.type === s.Ay.NON_TOKEN_TYPE && (n = i), { type: T.o$q.FILTER_ALL, filter: null, token: n });
}
function G(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => `\\${t}`);
        return `"${t}"`;
    }
}
function x(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let k = new s.Ay(),
    F = new s.Ay();
function B(e) {
    return k.tokenize(e);
}
function V() {
    (k.clearCache(), F.clearCache());
}
function H(e) {
    return null != e ? D[e] : null;
}
function j(e, t) {
    let n = T.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!T.T2E.test(t.type));
}
function W() {
    ((0, p.nD)(), k.reset(), r()(p.Ay).forOwn((e, t) => k.addRule({ type: t, ...e })), F.reset());
    let e = (0, p.gU)();
    (r()(e).forOwn((e, t) => F.addRule({ type: t, ...e })), a.h.dispatch({ type: "SEARCH_TOKENS_REFRESHED" }));
}
function Y(e) {
    let t = (0, l.m1)(e, A.default, _.A),
        n = !1;
    if (e.isDM()) {
        let n = e.getRecipientId(),
            i = A.default.getUser(n),
            r = f.Ay.getUserTag(i);
        if (null == r) return null;
        t = r;
    } else if (!e.isGroupDM()) {
        n = !e.isThread();
        let i = d.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        i?.name != null && (t = i.name);
    }
    return ((t = G(t)), n) ? `#${t}` : t;
}
function K(e) {
    if (e.isGroupDM()) return (0, l.m1)(e, A.default, _.A);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = A.default.getUser(t);
        return f.Ay.getUserTag(n);
    }
    let t = d.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return t?.name ?? (0, l.m1)(e, A.default, _.A);
}
function $(e) {
    let t = F.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== T.LWr.FILTER_IN && e.type !== T.LWr.ANSWER_IN && n.push(e);
    });
    let i = "";
    return (
        n.forEach((e) => {
            i += e.getFullMatch();
        }),
        i.trim()
    );
}
function z(e, t) {
    if (!(0, I._)(e) || !u.A.getGuild(e.guildId)?.features.has(T.GuildFeatures.DISCOVERABLE)) return null;
    let n = t.getSessionId(e),
        i = t.getQueryId(e);
    return null == n || null == i ? null : { search_session_id: n, search_query_id: i };
}
