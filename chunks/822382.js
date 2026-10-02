(n.d(t, {
    E3: () => $,
    EH: () => z,
    Gk: () => G,
    IY: () => Y,
    Jl: () => N,
    L5: () => b,
    Pe: () => H,
    Pp: () => U,
    Rt: () => K,
    TZ: () => x,
    VI: () => X,
    XC: () => y,
    Y7: () => C,
    Zf: () => M,
    Zh: () => W,
    _b: () => R,
    _o: () => V,
    av: () => j,
    bS: () => S,
    dX: () => P,
    lX: () => k,
    mt: () => O,
    nm: () => L,
    sh: () => D,
    zZ: () => w,
}),
    n(321073));
var i = n(435558),
    r = n.n(i);
n(536637);
var a = n(73153),
    s = n(988665),
    l = n(47167),
    o = n(734057),
    d = n(153488),
    c = n(808728),
    u = n(517019),
    _ = n(71393),
    E = n(994500),
    A = n(309010),
    h = n(287809),
    I = n(935208),
    f = n(427262),
    p = n(902008),
    T = n(304578);
n(768570);
var m = n(652215),
    g = n(375708);
function S(e) {
    switch (e.type) {
        case m.I4_.GUILD:
            return e.guildId;
        case m.I4_.GUILD_CHANNEL:
        case m.I4_.CHANNEL:
        case m.I4_.THREAD:
            return e.channelId;
        case m.I4_.DMS:
            return e.type;
    }
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.Ay;
    return e.type === m.I4_.DMS ? (t.getChannelId(m.ME) ?? null) : S(e);
}
function C(e) {
    switch (e.type) {
        case m.I4_.CHANNEL:
            return g.intl.string(g.t.Q0JJjv);
        case m.I4_.DMS:
            return g.intl.string(g.t.Br0xJA);
        case m.I4_.GUILD_CHANNEL:
        case m.I4_.GUILD:
        case m.I4_.THREAD:
            return g.intl.string(g.t.AXPbZr);
    }
}
function O(e) {
    switch (e.type) {
        case m.I4_.GUILD_CHANNEL:
        case m.I4_.GUILD:
        case m.I4_.THREAD:
            return e.guildId;
        case m.I4_.CHANNEL:
            let t = o.A.getChannel(e.channelId);
            return t?.guild_id ?? null;
        default:
            return null;
    }
}
function R(e) {
    switch (e.type) {
        case m.I4_.GUILD_CHANNEL:
        case m.I4_.CHANNEL:
        case m.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function L(e) {
    switch (e) {
        case m.BBH.MOST_RELEVANT:
            return { sort_by: "relevance", sort_order: "desc" };
        case m.BBH.OLDEST:
            return { sort_by: "timestamp", sort_order: "asc" };
        case m.BBH.NEWEST:
        default:
            return { sort_by: "timestamp", sort_order: "desc" };
    }
}
function y(e) {
    return null == e.sort_by || null == e.sort_order
        ? m.BBH.NEWEST
        : "relevance" === e.sort_by
          ? m.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? m.BBH.OLDEST
            : m.BBH.NEWEST;
}
function D(e) {
    switch (e) {
        case m.LWr.FILTER_FROM:
            return g.intl.string(g.t.E466pL);
        case m.LWr.FILTER_MENTIONS:
            return g.intl.string(g.t.BYvFWl);
        case m.LWr.FILTER_HAS:
            return g.intl.string(g.t.bhSYbc);
        case m.LWr.FILTER_BEFORE:
        case m.LWr.FILTER_ON:
        case m.LWr.FILTER_AFTER:
            return g.intl.string(g.t.Zbbc1E);
        case m.LWr.FILTER_IN:
            return g.intl.string(g.t["GpM+/7"]);
        case m.LWr.FILTER_LINK_FROM:
            return g.intl.string(g.t.FdDTni);
        case m.LWr.FILTER_FILE_TYPE:
            return g.intl.string(g.t.FXcAFe);
        case m.LWr.FILTER_FILE_NAME:
            return g.intl.string(g.t.uAbFDM);
        case m.LWr.FILTER_PINNED:
            return g.intl.string(g.t.UJxL3V);
        case m.LWr.FILTER_AUTHOR_TYPE:
            return g.intl.string(g.t.qCQzBl);
    }
}
let v = { [m.LWr.FILTER_BEFORE]: !0, [m.LWr.FILTER_AFTER]: !0, [m.LWr.FILTER_ON]: !0 };
function b(e, t) {
    if (u.A.didAgree(t)) {
        let t = h.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function M(e) {
    let t = {};
    for (let [n, i] of (e.forEach((e) => {
        let n,
            i,
            { type: r } = e;
        if (m.l90.test(r)) return;
        switch (r) {
            case m.LWr.ANSWER_BEFORE:
            case m.LWr.ANSWER_ON:
            case m.LWr.ANSWER_AFTER:
                let a = e.getData("start"),
                    s = e.getData("end");
                (a && (t.min_id = I.default.fromTimestamp(a)), s && (t.max_id = I.default.fromTimestamp(s)));
                return;
        }
        let l = (null == (i = null != (n = T.Ay[r]) ? n.queryKey : null) && (i = "content"), i);
        null == t[l] && (t[l] = new Set());
        let o = t[l];
        switch (r) {
            case m.LWr.ANSWER_USERNAME_FROM:
            case m.LWr.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData("userId"));
                break;
            case m.LWr.ANSWER_LINK_FROM:
            case m.LWr.ANSWER_FILE_TYPE:
            case m.LWr.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case m.LWr.ANSWER_IN:
                for (let t of e.getData("channelIds") ?? []) o.add(t);
                break;
            case m.LWr.ANSWER_HAS:
                o.add(e.getData("has"));
                break;
            case m.LWr.ANSWER_PINNED:
                o.add(e.getData("pinned"));
                break;
            case m.LWr.ANSWER_AUTHOR_TYPE:
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
function P(e) {
    return e?.contents != null && e.contents.length > 0
        ? e?.contents?.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : e?.content;
}
function U(e) {
    return e
        .map((e) => (e.type === s.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function w(e, t, n) {
    let i,
        r,
        a = e.find((a, s) =>
            t >= a.start && t <= a.end && n >= a.start && n <= a.end
                ? (null != e[s + 1] && (r = e[s + 1]), !0)
                : ((i = a), !1),
        );
    return null == a ? null : { previousToken: i, currentToken: a, nextToken: r, focusOffset: t, anchorOffset: n };
}
function G(e, t) {
    let n,
        { currentToken: i, nextToken: r, previousToken: a } = (e = e ?? {});
    if (0 === t.length) return { type: m.o$q.EMPTY, filter: null, token: null };
    if (null == i) return { type: m.o$q.FILTER_ALL, filter: null, token: null };
    if ((0, T.If)(i.type)) {
        if (null == r || r.type === s.Ay.NON_TOKEN_TYPE) return { type: m.o$q.FILTER, filter: i.type, token: r };
        if (null != r && !m.T2E.test(r.type)) return { type: m.o$q.FILTER, filter: i.type, token: null };
    }
    return i.type === s.Ay.NON_TOKEN_TYPE && null != a && (0, T.If)(a.type)
        ? { type: m.o$q.FILTER, filter: a.type, token: i }
        : (i.type === s.Ay.NON_TOKEN_TYPE && (n = i), { type: m.o$q.FILTER_ALL, filter: null, token: n });
}
function x(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => `\\${t}`);
        return `"${t}"`;
    }
}
function k(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let F = new s.Ay(),
    B = new s.Ay();
function V(e) {
    return F.tokenize(e);
}
function H() {
    (F.clearCache(), B.clearCache());
}
function j(e) {
    return null != e ? v[e] : null;
}
function W(e, t) {
    let n = m.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!m.T2E.test(t.type));
}
function Y() {
    ((0, T.nD)(), F.reset(), r()(T.Ay).forOwn((e, t) => F.addRule({ type: t, ...e })), B.reset());
    let e = (0, T.gU)();
    (r()(e).forOwn((e, t) => B.addRule({ type: t, ...e })), a.h.dispatch({ type: "SEARCH_TOKENS_REFRESHED" }));
}
function K(e) {
    let t = (0, l.m1)(e, h.default, E.A),
        n = !1;
    if (e.isDM()) {
        let n = e.getRecipientId(),
            i = h.default.getUser(n),
            r = f.Ay.getUserTag(i);
        if (null == r) return null;
        t = r;
    } else if (!e.isGroupDM()) {
        n = !e.isThread();
        let i = c.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        i?.name != null && (t = i.name);
    }
    return ((t = x(t)), n) ? `#${t}` : t;
}
function $(e) {
    if (e.isGroupDM()) return (0, l.m1)(e, h.default, E.A);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = h.default.getUser(t);
        return f.Ay.getUserTag(n);
    }
    let t = c.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return t?.name ?? (0, l.m1)(e, h.default, E.A);
}
function z(e) {
    let t = B.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== m.LWr.FILTER_IN && e.type !== m.LWr.ANSWER_IN && n.push(e);
    });
    let i = "";
    return (
        n.forEach((e) => {
            i += e.getFullMatch();
        }),
        i.trim()
    );
}
function X(e, t) {
    if (
        !(0, p._)(e) ||
        !d.A.hasConsented(m.YAq.USAGE_STATISTICS) ||
        !_.A.getGuild(e.guildId)?.features.has(m.GuildFeatures.DISCOVERABLE)
    )
        return null;
    let n = t.getSessionId(e),
        i = t.getQueryId(e);
    return null == n || null == i ? null : { search_session_id: n, search_query_id: i };
}
