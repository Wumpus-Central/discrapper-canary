"use strict";
n.d(t, {
    E3: () => Y,
    EH: () => K,
    Gk: () => U,
    IY: () => j,
    Jl: () => m,
    L5: () => D,
    Pe: () => V,
    Pp: () => M,
    Rt: () => W,
    TZ: () => w,
    XC: () => O,
    Y7: () => g,
    Zf: () => v,
    Zh: () => H,
    _B: () => N,
    _b: () => C,
    _o: () => F,
    av: () => B,
    bS: () => T,
    dX: () => b,
    lX: () => G,
    mt: () => S,
    nm: () => R,
    sh: () => L,
    zZ: () => P,
}),
    n(321073);
var i = n(435558),
    r = n.n(i);
n(989349);
var a = n(988665),
    s = n(47167),
    l = n(734057),
    o = n(808728),
    d = n(517019),
    c = n(994500),
    u = n(309010),
    _ = n(287809),
    E = n(935208),
    A = n(427262),
    h = n(256796),
    I = n(304578);
n(768570);
var f = n(652215),
    p = n(375708);
function T(e) {
    switch (e.type) {
        case f.I4_.GUILD:
            return e.guildId;
        case f.I4_.GUILD_CHANNEL:
        case f.I4_.CHANNEL:
        case f.I4_.THREAD:
            return e.channelId;
        case f.I4_.DMS:
            return e.type;
    }
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Ay;
    return e.type === f.I4_.DMS ? (t.getChannelId(f.ME) ?? null) : T(e);
}
function g(e) {
    switch (e.type) {
        case f.I4_.CHANNEL:
            return p.intl.string(p.t.Q0JJjv);
        case f.I4_.DMS:
            return p.intl.string(p.t.Br0xJA);
        case f.I4_.GUILD_CHANNEL:
        case f.I4_.GUILD:
        case f.I4_.THREAD:
            return p.intl.string(p.t.AXPbZr);
    }
}
function S(e) {
    switch (e.type) {
        case f.I4_.GUILD_CHANNEL:
        case f.I4_.GUILD:
        case f.I4_.THREAD:
            return e.guildId;
        case f.I4_.CHANNEL:
            let t = l.A.getChannel(e.channelId);
            return t?.guild_id ?? null;
        default:
            return null;
    }
}
function N(e) {
    return e.type === f.I4_.GUILD || e.type === f.I4_.GUILD_CHANNEL || e.type === f.I4_.THREAD;
}
function C(e) {
    switch (e.type) {
        case f.I4_.GUILD_CHANNEL:
        case f.I4_.CHANNEL:
        case f.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function R(e) {
    switch (e) {
        case f.BBH.MOST_RELEVANT:
            return { sort_by: "relevance", sort_order: "desc" };
        case f.BBH.OLDEST:
            return { sort_by: "timestamp", sort_order: "asc" };
        case f.BBH.NEWEST:
        default:
            return { sort_by: "timestamp", sort_order: "desc" };
    }
}
function O(e) {
    return null == e.sort_by || null == e.sort_order
        ? f.BBH.NEWEST
        : "relevance" === e.sort_by
          ? f.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? f.BBH.OLDEST
            : f.BBH.NEWEST;
}
function L(e) {
    switch (e) {
        case f.LWr.FILTER_FROM:
            return p.intl.string(p.t.E466pL);
        case f.LWr.FILTER_MENTIONS:
            return p.intl.string(p.t.BYvFWl);
        case f.LWr.FILTER_HAS:
            return p.intl.string(p.t.bhSYbc);
        case f.LWr.FILTER_BEFORE:
        case f.LWr.FILTER_ON:
        case f.LWr.FILTER_AFTER:
            return p.intl.string(p.t.Zbbc1E);
        case f.LWr.FILTER_IN:
            return p.intl.string(p.t["GpM+/7"]);
        case f.LWr.FILTER_LINK_FROM:
            return p.intl.string(p.t.FdDTni);
        case f.LWr.FILTER_FILE_TYPE:
            return p.intl.string(p.t.FXcAFe);
        case f.LWr.FILTER_FILE_NAME:
            return p.intl.string(p.t.uAbFDM);
        case f.LWr.FILTER_PINNED:
            return p.intl.string(p.t.UJxL3V);
        case f.LWr.FILTER_AUTHOR_TYPE:
            return p.intl.string(p.t.qCQzBl);
    }
}
let y = { [f.LWr.FILTER_BEFORE]: !0, [f.LWr.FILTER_AFTER]: !0, [f.LWr.FILTER_ON]: !0 };
function D(e, t) {
    if (d.A.didAgree(t)) {
        let t = _.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function v(e) {
    let t = {};
    for (let [n, i] of (e.forEach((e) => {
        let n,
            i,
            { type: r } = e;
        if (f.l90.test(r)) return;
        switch (r) {
            case f.LWr.ANSWER_BEFORE:
            case f.LWr.ANSWER_ON:
            case f.LWr.ANSWER_AFTER:
                let a = e.getData("start"),
                    s = e.getData("end");
                a && (t.min_id = E.default.fromTimestamp(a)), s && (t.max_id = E.default.fromTimestamp(s));
                return;
        }
        let l = (null == (i = null != (n = I.Ay[r]) ? n.queryKey : null) && (i = "content"), i);
        null == t[l] && (t[l] = new Set());
        let o = t[l];
        switch (r) {
            case f.LWr.ANSWER_USERNAME_FROM:
            case f.LWr.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData("userId"));
                break;
            case f.LWr.ANSWER_LINK_FROM:
            case f.LWr.ANSWER_FILE_TYPE:
            case f.LWr.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case f.LWr.ANSWER_IN:
                for (let t of e.getData("channelIds") ?? []) o.add(t);
                break;
            case f.LWr.ANSWER_HAS:
                o.add(e.getData("has"));
                break;
            case f.LWr.ANSWER_PINNED:
                o.add(e.getData("pinned"));
                break;
            case f.LWr.ANSWER_AUTHOR_TYPE:
                o.add(e.getData("author_type"));
                break;
            default:
                o.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        i instanceof Set && (t[n] = Array.from(i));
    return t.content && (delete t.contents, (t.content = t.content.join(" ").trim()), t.content || delete t.content), t;
}
function b(e) {
    return e?.contents != null && e.contents.length > 0
        ? e?.contents?.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : e?.content;
}
function M(e) {
    return e
        .map((e) => (e.type === a.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function P(e, t, n) {
    let i,
        r,
        a = e.find((a, s) =>
            t >= a.start && t <= a.end && n >= a.start && n <= a.end
                ? (null != e[s + 1] && (r = e[s + 1]), !0)
                : ((i = a), !1),
        );
    return null == a ? null : { previousToken: i, currentToken: a, nextToken: r, focusOffset: t, anchorOffset: n };
}
function U(e, t) {
    let n,
        { currentToken: i, nextToken: r, previousToken: s } = (e = e ?? {});
    if (0 === t.length) return { type: f.o$q.EMPTY, filter: null, token: null };
    if (null == i) return { type: f.o$q.FILTER_ALL, filter: null, token: null };
    if ((0, I.If)(i.type)) {
        if (null == r || r.type === a.Ay.NON_TOKEN_TYPE) return { type: f.o$q.FILTER, filter: i.type, token: r };
        if (null != r && !f.T2E.test(r.type)) return { type: f.o$q.FILTER, filter: i.type, token: null };
    }
    return i.type === a.Ay.NON_TOKEN_TYPE && null != s && (0, I.If)(s.type)
        ? { type: f.o$q.FILTER, filter: s.type, token: i }
        : (i.type === a.Ay.NON_TOKEN_TYPE && (n = i), { type: f.o$q.FILTER_ALL, filter: null, token: n });
}
function w(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => `\\${t}`);
        return `"${t}"`;
    }
}
function G(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let x = new a.Ay(),
    k = new a.Ay();
function F(e) {
    return x.tokenize(e);
}
function V() {
    x.clearCache(), k.clearCache();
}
function B(e) {
    return null != e ? y[e] : null;
}
function H(e, t) {
    let n = f.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!f.T2E.test(t.type));
}
function j() {
    (0, I.nD)(), x.reset(), r()(I.Ay).forOwn((e, t) => x.addRule({ type: t, ...e })), k.reset();
    let e = (0, I.gU)();
    r()(e).forOwn((e, t) => k.addRule({ type: t, ...e })), h.A.markSearchTokensRefreshed();
}
function W(e) {
    let t = (0, s.m1)(e, _.default, c.A),
        n = !1;
    if (e.isDM()) {
        let n = e.getRecipientId(),
            i = _.default.getUser(n),
            r = A.Ay.getUserTag(i);
        if (null == r) return null;
        t = r;
    } else if (!e.isGroupDM()) {
        n = !e.isThread();
        let i = o.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        i?.name != null && (t = i.name);
    }
    return ((t = w(t)), n) ? `#${t}` : t;
}
function Y(e) {
    if (e.isGroupDM()) return (0, s.m1)(e, _.default, c.A);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = _.default.getUser(t);
        return A.Ay.getUserTag(n);
    }
    let t = o.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return t?.name ?? (0, s.m1)(e, _.default, c.A);
}
function K(e) {
    let t = k.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== f.LWr.FILTER_IN && e.type !== f.LWr.ANSWER_IN && n.push(e);
    });
    let i = "";
    return (
        n.forEach((e) => {
            i += e.getFullMatch();
        }),
        i.trim()
    );
}
