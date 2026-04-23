"use strict";
n.d(t, {
    E3: () => W,
    EH: () => K,
    Gk: () => P,
    IY: () => j,
    Jl: () => I,
    L5: () => b,
    Pe: () => V,
    Pp: () => w,
    Rt: () => Y,
    TZ: () => x,
    XC: () => C,
    Y7: () => T,
    Zf: () => D,
    Zh: () => H,
    _B: () => y,
    _b: () => N,
    _o: () => F,
    av: () => B,
    bS: () => A,
    dX: () => L,
    lX: () => k,
    mt: () => S,
    nm: () => v,
    sh: () => O,
    zZ: () => M,
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
    E = n(771650);
n(768570);
var m = n(652215),
    g = n(985018);
function A(e) {
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
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A;
    return e.type === m.I4_.DMS ? (t.getChannelId(m.ME) ?? null) : A(e);
}
function T(e) {
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
function S(e) {
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
function y(e) {
    return e.type === m.I4_.GUILD || e.type === m.I4_.GUILD_CHANNEL || e.type === m.I4_.THREAD;
}
function N(e) {
    switch (e.type) {
        case m.I4_.GUILD_CHANNEL:
        case m.I4_.CHANNEL:
        case m.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function v(e) {
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
function C(e) {
    return null == e.sort_by || null == e.sort_order
        ? m.BBH.NEWEST
        : "relevance" === e.sort_by
          ? m.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? m.BBH.OLDEST
            : m.BBH.NEWEST;
}
function O(e) {
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
let R = { [m.LWr.FILTER_BEFORE]: !0, [m.LWr.FILTER_AFTER]: !0, [m.LWr.FILTER_ON]: !0 };
function b(e, t) {
    if (u.A.didAgree(t)) {
        let t = _.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function D(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let n,
            r,
            { type: i } = e;
        if (m.l90.test(i)) return;
        switch (i) {
            case m.LWr.ANSWER_BEFORE:
            case m.LWr.ANSWER_ON:
            case m.LWr.ANSWER_AFTER:
                let s = e.getData("start"),
                    a = e.getData("end");
                s && (t.min_id = f.default.fromTimestamp(s)), a && (t.max_id = f.default.fromTimestamp(a));
                return;
        }
        let o = (null == (r = null != (n = E.Ay[i]) ? n.queryKey : null) && (r = "content"), r);
        null == t[o] && (t[o] = new Set());
        let l = t[o];
        switch (i) {
            case m.LWr.ANSWER_USERNAME_FROM:
            case m.LWr.ANSWER_USERNAME_MENTIONS:
                l.add(e.getData("userId"));
                break;
            case m.LWr.ANSWER_LINK_FROM:
            case m.LWr.ANSWER_FILE_TYPE:
            case m.LWr.ANSWER_FILE_NAME:
                l.add(e.getMatch(1));
                break;
            case m.LWr.ANSWER_IN:
                for (let t of e.getData("channelIds") ?? []) l.add(t);
                break;
            case m.LWr.ANSWER_HAS:
                l.add(e.getData("has"));
                break;
            case m.LWr.ANSWER_PINNED:
                l.add(e.getData("pinned"));
                break;
            case m.LWr.ANSWER_AUTHOR_TYPE:
                l.add(e.getData("author_type"));
                break;
            default:
                l.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        r instanceof Set && (t[n] = Array.from(r));
    return t.content && (delete t.contents, (t.content = t.content.join(" ").trim()), t.content || delete t.content), t;
}
function L(e) {
    return e?.contents != null && e.contents.length > 0
        ? e?.contents?.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : e?.content;
}
function w(e) {
    return e
        .map((e) => (e.type === s.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function M(e, t, n) {
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
    if (0 === t.length) return { type: m.o$q.EMPTY, filter: null, token: null };
    if (null == r) return { type: m.o$q.FILTER_ALL, filter: null, token: null };
    if ((0, E.If)(r.type)) {
        if (null == i || i.type === s.Ay.NON_TOKEN_TYPE) return { type: m.o$q.FILTER, filter: r.type, token: i };
        if (null != i && !m.T2E.test(i.type)) return { type: m.o$q.FILTER, filter: r.type, token: null };
    }
    return r.type === s.Ay.NON_TOKEN_TYPE && null != a && (0, E.If)(a.type)
        ? { type: m.o$q.FILTER, filter: a.type, token: r }
        : (r.type === s.Ay.NON_TOKEN_TYPE && (n = r), { type: m.o$q.FILTER_ALL, filter: null, token: n });
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
let U = new s.Ay(),
    G = new s.Ay();
function F(e) {
    return U.tokenize(e);
}
function V() {
    U.clearCache(), G.clearCache();
}
function B(e) {
    return null != e ? R[e] : null;
}
function H(e, t) {
    let n = m.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!m.T2E.test(t.type));
}
function j() {
    (0, E.G0)(), U.reset(), i()(E.Ay).forOwn((e, t) => U.addRule({ type: t, ...e })), G.reset();
    let e = (0, E.gU)();
    i()(e).forOwn((e, t) => G.addRule({ type: t, ...e })), h.A.markSearchTokensRefreshed();
}
function Y(e) {
    let t = (0, a.m1)(e, _.default, c.A),
        n = !1;
    if (e.isDM()) {
        let n = e.getRecipientId(),
            r = _.default.getUser(n),
            i = p.Ay.getUserTag(r);
        if (null == i) return null;
        t = i;
    } else if (!e.isGroupDM()) {
        n = !e.isThread();
        let r = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        r?.name != null && (t = r.name);
    }
    return ((t = x(t)), n) ? `#${t}` : t;
}
function W(e) {
    if (e.isGroupDM()) return (0, a.m1)(e, _.default, c.A);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = _.default.getUser(t);
        return p.Ay.getUserTag(n);
    }
    let t = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return t?.name ?? (0, a.m1)(e, _.default, c.A);
}
function K(e) {
    let t = G.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== m.LWr.FILTER_IN && e.type !== m.LWr.ANSWER_IN && n.push(e);
    });
    let r = "";
    return (
        n.forEach((e) => {
            r += e.getFullMatch();
        }),
        r.trim()
    );
}
