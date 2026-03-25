"use strict";
n.d(t, {
    E3: () => K,
    EH: () => $,
    Gk: () => P,
    IY: () => Y,
    Jl: () => I,
    L5: () => D,
    Pe: () => B,
    Pp: () => M,
    Rt: () => W,
    TZ: () => k,
    XC: () => C,
    Y7: () => T,
    Zf: () => L,
    Zh: () => j,
    _B: () => y,
    _b: () => v,
    _o: () => V,
    av: () => H,
    bS: () => A,
    dX: () => w,
    lX: () => U,
    mt: () => S,
    nm: () => N,
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
    m = n(771650);
n(768570);
var E = n(652215),
    g = n(985018);
function A(e) {
    switch (e.type) {
        case E.I4_.GUILD:
            return e.guildId;
        case E.I4_.GUILD_CHANNEL:
        case E.I4_.CHANNEL:
        case E.I4_.THREAD:
            return e.channelId;
        case E.I4_.DMS:
            return e.type;
    }
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A;
    return e.type === E.I4_.DMS ? (t.getChannelId(E.ME) ?? null) : A(e);
}
function T(e) {
    switch (e.type) {
        case E.I4_.CHANNEL:
            return g.intl.string(g.t.Q0JJjv);
        case E.I4_.DMS:
            return g.intl.string(g.t.Br0xJA);
        case E.I4_.GUILD_CHANNEL:
        case E.I4_.GUILD:
        case E.I4_.THREAD:
            return g.intl.string(g.t.AXPbZr);
    }
}
function S(e) {
    switch (e.type) {
        case E.I4_.GUILD_CHANNEL:
        case E.I4_.GUILD:
        case E.I4_.THREAD:
            return e.guildId;
        case E.I4_.CHANNEL:
            let t = o.A.getChannel(e.channelId);
            return t?.guild_id ?? null;
        default:
            return null;
    }
}
function y(e) {
    return e.type === E.I4_.GUILD || e.type === E.I4_.GUILD_CHANNEL || e.type === E.I4_.THREAD;
}
function v(e) {
    switch (e.type) {
        case E.I4_.GUILD_CHANNEL:
        case E.I4_.CHANNEL:
        case E.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function N(e) {
    switch (e) {
        case E.BBH.MOST_RELEVANT:
            return { sort_by: "relevance", sort_order: "desc" };
        case E.BBH.OLDEST:
            return { sort_by: "timestamp", sort_order: "asc" };
        case E.BBH.NEWEST:
        default:
            return { sort_by: "timestamp", sort_order: "desc" };
    }
}
function C(e) {
    return null == e.sort_by || null == e.sort_order
        ? E.BBH.NEWEST
        : "relevance" === e.sort_by
          ? E.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? E.BBH.OLDEST
            : E.BBH.NEWEST;
}
function R(e) {
    switch (e) {
        case E.LWr.FILTER_FROM:
            return g.intl.string(g.t.E466pL);
        case E.LWr.FILTER_MENTIONS:
            return g.intl.string(g.t.BYvFWl);
        case E.LWr.FILTER_HAS:
            return g.intl.string(g.t.bhSYbc);
        case E.LWr.FILTER_BEFORE:
        case E.LWr.FILTER_ON:
        case E.LWr.FILTER_AFTER:
            return g.intl.string(g.t.Zbbc1E);
        case E.LWr.FILTER_IN:
            return g.intl.string(g.t["GpM+/7"]);
        case E.LWr.FILTER_LINK_FROM:
            return g.intl.string(g.t.FdDTni);
        case E.LWr.FILTER_FILE_TYPE:
            return g.intl.string(g.t.FXcAFe);
        case E.LWr.FILTER_FILE_NAME:
            return g.intl.string(g.t.uAbFDM);
        case E.LWr.FILTER_PINNED:
            return g.intl.string(g.t.UJxL3V);
        case E.LWr.FILTER_AUTHOR_TYPE:
            return g.intl.string(g.t.qCQzBl);
    }
}
let O = { [E.LWr.FILTER_BEFORE]: !0, [E.LWr.FILTER_AFTER]: !0, [E.LWr.FILTER_ON]: !0 };
function b(e) {
    let t = m.Ay[e],
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
        if (E.l90.test(n)) return;
        switch (n) {
            case E.LWr.ANSWER_BEFORE:
            case E.LWr.ANSWER_ON:
            case E.LWr.ANSWER_AFTER:
                let r = e.getData("start"),
                    i = e.getData("end");
                r && (t.min_id = f.default.fromTimestamp(r)), i && (t.max_id = f.default.fromTimestamp(i));
                return;
        }
        let s = b(n);
        null == t[s] && (t[s] = new Set());
        let a = t[s];
        switch (n) {
            case E.LWr.ANSWER_USERNAME_FROM:
            case E.LWr.ANSWER_USERNAME_MENTIONS:
                a.add(e.getData("userId"));
                break;
            case E.LWr.ANSWER_LINK_FROM:
            case E.LWr.ANSWER_FILE_TYPE:
            case E.LWr.ANSWER_FILE_NAME:
                a.add(e.getMatch(1));
                break;
            case E.LWr.ANSWER_IN:
                for (let t of e.getData("channelIds") ?? []) a.add(t);
                break;
            case E.LWr.ANSWER_HAS:
                a.add(e.getData("has"));
                break;
            case E.LWr.ANSWER_PINNED:
                a.add(e.getData("pinned"));
                break;
            case E.LWr.ANSWER_AUTHOR_TYPE:
                a.add(e.getData("author_type"));
                break;
            default:
                a.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        r instanceof Set && (t[n] = Array.from(r));
    return t.content && (delete t.contents, (t.content = t.content.join(" ").trim()), t.content || delete t.content), t;
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
    if (0 === t.length) return { type: E.o$q.EMPTY, filter: null, token: null };
    if (null == r) return { type: E.o$q.FILTER_ALL, filter: null, token: null };
    if ((0, m.If)(r.type)) {
        if (null == i || i.type === s.Ay.NON_TOKEN_TYPE) return { type: E.o$q.FILTER, filter: r.type, token: i };
        if (null != i && !E.T2E.test(i.type)) return { type: E.o$q.FILTER, filter: r.type, token: null };
    }
    return r.type === s.Ay.NON_TOKEN_TYPE && null != a && (0, m.If)(a.type)
        ? { type: E.o$q.FILTER, filter: a.type, token: r }
        : (r.type === s.Ay.NON_TOKEN_TYPE && (n = r), { type: E.o$q.FILTER_ALL, filter: null, token: n });
}
function k(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => `\\${t}`);
        return `"${t}"`;
    }
}
function U(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let G = new s.Ay(),
    F = new s.Ay();
function V(e) {
    return G.tokenize(e);
}
function B() {
    G.clearCache(), F.clearCache();
}
function H(e) {
    return null != e ? O[e] : null;
}
function j(e, t) {
    let n = E.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!E.T2E.test(t.type));
}
function Y() {
    (0, m.G0)(), G.reset(), i()(m.Ay).forOwn((e, t) => G.addRule({ type: t, ...e })), F.reset();
    let e = (0, m.gU)();
    i()(e).forOwn((e, t) => F.addRule({ type: t, ...e })), h.A.markSearchTokensRefreshed();
}
function W(e) {
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
function K(e) {
    if (e.isGroupDM()) return (0, a.m1)(e, _.default, c.A);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = _.default.getUser(t);
        return p.Ay.getUserTag(n);
    }
    let t = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return t?.name ?? e.name;
}
function $(e) {
    let t = F.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== E.LWr.FILTER_IN && e.type !== E.LWr.ANSWER_IN && n.push(e);
    });
    let r = "";
    return (
        n.forEach((e) => {
            r += e.getFullMatch();
        }),
        r.trim()
    );
}
