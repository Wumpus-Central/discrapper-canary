"use strict";
n.d(t, {
    E3: () => q,
    EH: () => Q,
    Eq: () => Z,
    Gk: () => k,
    IY: () => K,
    Jl: () => y,
    L5: () => L,
    Pe: () => H,
    Pp: () => P,
    Rt: () => $,
    TZ: () => U,
    Wg: () => z,
    XC: () => N,
    Zf: () => w,
    Zh: () => W,
    _B: () => v,
    _b: () => C,
    _o: () => j,
    av: () => Y,
    bS: () => T,
    dX: () => x,
    lX: () => V,
    mt: () => S,
    nm: () => b,
    rI: () => G,
    sh: () => R,
    zZ: () => M,
}),
    n(321073);
var r = n(735438),
    i = n.n(r);
n(989349);
var a = n(988665),
    s = n(47167),
    o = n(734057),
    l = n(808728),
    u = n(517019),
    c = n(994500),
    d = n(309010),
    _ = n(351906),
    f = n(287809),
    p = n(661191),
    h = n(427262),
    m = n(256796),
    g = n(353271),
    E = n(771650);
n(768570);
var A = n(652215),
    I = n(985018);
function T(e) {
    switch (e.type) {
        case A.I4_.GUILD:
            return e.guildId;
        case A.I4_.GUILD_CHANNEL:
        case A.I4_.CHANNEL:
        case A.I4_.THREAD:
            return e.channelId;
        case A.I4_.DMS:
            return e.type;
        case A.I4_.FAVORITES:
            return A.YYv;
    }
}
function y(e) {
    return e.type === A.I4_.DMS ? (d.A.getChannelId(A.ME) ?? null) : T(e);
}
function S(e) {
    switch (e.type) {
        case A.I4_.GUILD_CHANNEL:
        case A.I4_.GUILD:
        case A.I4_.THREAD:
            return e.guildId;
        case A.I4_.CHANNEL:
            let t = o.A.getChannel(e.channelId);
            return t?.guild_id ?? null;
        case A.I4_.FAVORITES:
            return A.YYv;
        default:
            return null;
    }
}
function v(e) {
    return e.type === A.I4_.GUILD || e.type === A.I4_.GUILD_CHANNEL || e.type === A.I4_.THREAD;
}
function C(e) {
    switch (e.type) {
        case A.I4_.GUILD_CHANNEL:
        case A.I4_.CHANNEL:
        case A.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function b(e) {
    switch (e) {
        case A.BBH.MOST_RELEVANT:
            return { sort_by: "relevance", sort_order: "desc" };
        case A.BBH.OLDEST:
            return { sort_by: "timestamp", sort_order: "asc" };
        case A.BBH.NEWEST:
        default:
            return { sort_by: "timestamp", sort_order: "desc" };
    }
}
function N(e) {
    return null == e.sort_by || null == e.sort_order
        ? A.BBH.NEWEST
        : "relevance" === e.sort_by
          ? A.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? A.BBH.OLDEST
            : A.BBH.NEWEST;
}
function R(e) {
    switch (e) {
        case A.LWr.FILTER_FROM:
            return I.intl.string(I.t.E466pL);
        case A.LWr.FILTER_MENTIONS:
            return I.intl.string(I.t.BYvFWl);
        case A.LWr.FILTER_HAS:
            return I.intl.string(I.t.bhSYbc);
        case A.LWr.FILTER_BEFORE:
        case A.LWr.FILTER_ON:
        case A.LWr.FILTER_AFTER:
            return I.intl.string(I.t.Zbbc1E);
        case A.LWr.FILTER_IN:
            return I.intl.string(I.t["GpM+/7"]);
        case A.LWr.FILTER_FILE_TYPE:
            return I.intl.string(I.t.FXcAFe);
        case A.LWr.FILTER_FILE_NAME:
            return I.intl.string(I.t.uAbFDM);
        case A.LWr.FILTER_PINNED:
            return I.intl.string(I.t.UJxL3V);
        case A.LWr.FILTER_AUTHOR_TYPE:
            return I.intl.string(I.t.qCQzBl);
    }
}
let O = { [A.LWr.FILTER_BEFORE]: !0, [A.LWr.FILTER_AFTER]: !0, [A.LWr.FILTER_ON]: !0 };
function D(e) {
    let t = E.Ay[e],
        n = null != t ? t.queryKey : null;
    return null == n && (n = "content"), n;
}
function L(e, t) {
    if (u.A.didAgree(t)) {
        let t = f.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function w(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (A.l90.test(n)) return;
        switch (n) {
            case A.LWr.ANSWER_BEFORE:
            case A.LWr.ANSWER_ON:
            case A.LWr.ANSWER_AFTER:
                let r = e.getData("start"),
                    i = e.getData("end");
                r && (t.min_id = p.default.fromTimestamp(r)), i && (t.max_id = p.default.fromTimestamp(i));
                return;
        }
        let a = D(n);
        null == t[a] && (t[a] = new Set());
        let s = t[a];
        switch (n) {
            case A.LWr.ANSWER_USERNAME_FROM:
            case A.LWr.ANSWER_USERNAME_MENTIONS:
                s.add(e.getData("userId"));
                break;
            case A.LWr.ANSWER_FILE_TYPE:
            case A.LWr.ANSWER_FILE_NAME:
                s.add(e.getMatch(1));
                break;
            case A.LWr.ANSWER_IN:
                for (let t of e.getData("channelIds") ?? []) s.add(t);
                break;
            case A.LWr.ANSWER_HAS:
                s.add(e.getData("has"));
                break;
            case A.LWr.ANSWER_PINNED:
                s.add(e.getData("pinned"));
                break;
            case A.LWr.ANSWER_AUTHOR_TYPE:
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
                r = e.brackets ? /(\[([^\]]+)\]|(?:\S+))/gu : e.quotes ? /("([^"]+)"|(?:\S+))/gu : /(\S+)/gu;
            for (let i of t.content) {
                let t = i.match(r);
                if (null != t)
                    for (let r of t) {
                        let t = e.brackets && r.startsWith("[") && r.endsWith("]"),
                            i = e.quotes && r.startsWith('"') && r.endsWith('"'),
                            a = r.includes("://"),
                            s = t || i || a ? 0 : 2;
                        n.push(`${s}|${r}`);
                    }
            }
            n.length > 0 && (t.contents = n), delete t.content;
        } else (t.content = t.content.join(" ").trim()), t.content || delete t.content;
    }
    return t;
}
function x(e) {
    return e?.contents != null && e.contents.length > 0
        ? e?.contents?.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : e?.content;
}
function P(e) {
    return e
        .map((e) => (e.type === a.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function M(e, t, n) {
    let r,
        i,
        a = e.find((a, s) =>
            t >= a.start && t <= a.end && n >= a.start && n <= a.end
                ? (null != e[s + 1] && (i = e[s + 1]), !0)
                : ((r = a), !1),
        );
    return null == a ? null : { previousToken: r, currentToken: a, nextToken: i, focusOffset: t, anchorOffset: n };
}
function k(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: s } = (e = e ?? {});
    if (0 === t.length) return { type: A.o$q.EMPTY, filter: null, token: null };
    if (null == r) return { type: A.o$q.FILTER_ALL, filter: null, token: null };
    if ((0, E.If)(r.type)) {
        if (null == i || i.type === a.Ay.NON_TOKEN_TYPE) return { type: A.o$q.FILTER, filter: r.type, token: i };
        if (null != i && !A.T2E.test(i.type)) return { type: A.o$q.FILTER, filter: r.type, token: null };
    }
    return r.type === a.Ay.NON_TOKEN_TYPE && null != s && (0, E.If)(s.type)
        ? { type: A.o$q.FILTER, filter: s.type, token: r }
        : (r.type === a.Ay.NON_TOKEN_TYPE && (n = r), { type: A.o$q.FILTER_ALL, filter: null, token: n });
}
function U(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => `\\${t}`);
        return `"${t}"`;
    }
}
function G(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function V(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let F = new a.Ay(),
    B = new a.Ay();
function j(e) {
    return F.tokenize(e);
}
function H() {
    F.clearCache(), B.clearCache();
}
function Y(e) {
    return null != e ? O[e] : null;
}
function W(e, t) {
    let n = A.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!A.T2E.test(t.type));
}
function K() {
    (0, E.G0)(), F.reset(), i()(E.Ay).forOwn((e, t) => F.addRule({ type: t, ...e })), B.reset();
    let e = (0, E.gU)();
    i()(e).forOwn((e, t) => B.addRule({ type: t, ...e })), m.A.markSearchTokensRefreshed();
}
function z(e) {
    return !!v(e) || (e.type === A.I4_.DMS && !_.A.hidePersonalInformation);
}
function $(e) {
    let t = e.name,
        n = !1;
    if (e.isGroupDM()) t = (0, s.m1)(e, f.default, c.A);
    else if (e.isDM()) {
        let n = e.getRecipientId(),
            r = f.default.getUser(n),
            i = h.Ay.getUserTag(r);
        if (null == i) return null;
        t = i;
    } else {
        n = !e.isThread();
        let r = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        r?.name != null && (t = r.name);
    }
    return ((t = U(t)), n) ? `#${t}` : t;
}
function q(e) {
    if (e.isGroupDM()) return (0, s.m1)(e, f.default, c.A);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = f.default.getUser(t);
        return h.Ay.getUserTag(n);
    }
    let t = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return t?.name ?? e.name;
}
function Z() {
    return f.default.getCurrentUser()?.isStaff() ?? !1;
}
function Q(e) {
    let t = B.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== A.LWr.FILTER_IN && e.type !== A.LWr.ANSWER_IN && n.push(e);
    });
    let r = "";
    return (
        n.forEach((e) => {
            r += e.getFullMatch();
        }),
        r.trim()
    );
}
