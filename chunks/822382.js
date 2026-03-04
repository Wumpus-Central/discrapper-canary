"use strict";
n.d(t, {
    E3: () => q,
    EH: () => X,
    Eq: () => Z,
    Gk: () => k,
    IY: () => K,
    Jl: () => S,
    L5: () => L,
    Pe: () => j,
    Pp: () => x,
    Rt: () => z,
    TZ: () => U,
    Wg: () => $,
    XC: () => R,
    Zf: () => w,
    Zh: () => W,
    _B: () => v,
    _b: () => N,
    _o: () => H,
    av: () => Y,
    bS: () => T,
    dX: () => M,
    lX: () => F,
    mt: () => y,
    nm: () => C,
    rI: () => G,
    sh: () => O,
    zZ: () => P,
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
    _ = n(351906),
    f = n(287809),
    p = n(661191),
    h = n(427262),
    m = n(256796),
    E = n(353271),
    g = n(771650);
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
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A;
    return e.type === A.I4_.DMS ? (t.getChannelId(A.ME) ?? null) : T(e);
}
function y(e) {
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
function N(e) {
    switch (e.type) {
        case A.I4_.GUILD_CHANNEL:
        case A.I4_.CHANNEL:
        case A.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function C(e) {
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
function R(e) {
    return null == e.sort_by || null == e.sort_order
        ? A.BBH.NEWEST
        : "relevance" === e.sort_by
          ? A.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? A.BBH.OLDEST
            : A.BBH.NEWEST;
}
function O(e) {
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
        case A.LWr.FILTER_LINK_FROM:
            return I.intl.string(I.t.FdDTni);
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
let b = { [A.LWr.FILTER_BEFORE]: !0, [A.LWr.FILTER_AFTER]: !0, [A.LWr.FILTER_ON]: !0 };
function D(e) {
    let t = g.Ay[e],
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
        let s = D(n);
        null == t[s] && (t[s] = new Set());
        let a = t[s];
        switch (n) {
            case A.LWr.ANSWER_USERNAME_FROM:
            case A.LWr.ANSWER_USERNAME_MENTIONS:
                a.add(e.getData("userId"));
                break;
            case A.LWr.ANSWER_LINK_FROM:
            case A.LWr.ANSWER_FILE_TYPE:
            case A.LWr.ANSWER_FILE_NAME:
                a.add(e.getMatch(1));
                break;
            case A.LWr.ANSWER_IN:
                for (let t of e.getData("channelIds") ?? []) a.add(t);
                break;
            case A.LWr.ANSWER_HAS:
                a.add(e.getData("has"));
                break;
            case A.LWr.ANSWER_PINNED:
                a.add(e.getData("pinned"));
                break;
            case A.LWr.ANSWER_AUTHOR_TYPE:
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
        let e = E.A.getCurrentConfig({ location: "getSearchQueryFromTokens" });
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
function M(e) {
    return e?.contents != null && e.contents.length > 0
        ? e?.contents?.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : e?.content;
}
function x(e) {
    return e
        .map((e) => (e.type === s.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function P(e, t, n) {
    let r,
        i,
        s = e.find((s, a) =>
            t >= s.start && t <= s.end && n >= s.start && n <= s.end
                ? (null != e[a + 1] && (i = e[a + 1]), !0)
                : ((r = s), !1),
        );
    return null == s ? null : { previousToken: r, currentToken: s, nextToken: i, focusOffset: t, anchorOffset: n };
}
function k(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: a } = (e = e ?? {});
    if (0 === t.length) return { type: A.o$q.EMPTY, filter: null, token: null };
    if (null == r) return { type: A.o$q.FILTER_ALL, filter: null, token: null };
    if ((0, g.If)(r.type)) {
        if (null == i || i.type === s.Ay.NON_TOKEN_TYPE) return { type: A.o$q.FILTER, filter: r.type, token: i };
        if (null != i && !A.T2E.test(i.type)) return { type: A.o$q.FILTER, filter: r.type, token: null };
    }
    return r.type === s.Ay.NON_TOKEN_TYPE && null != a && (0, g.If)(a.type)
        ? { type: A.o$q.FILTER, filter: a.type, token: r }
        : (r.type === s.Ay.NON_TOKEN_TYPE && (n = r), { type: A.o$q.FILTER_ALL, filter: null, token: n });
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
function F(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let V = new s.Ay(),
    B = new s.Ay();
function H(e) {
    return V.tokenize(e);
}
function j() {
    V.clearCache(), B.clearCache();
}
function Y(e) {
    return null != e ? b[e] : null;
}
function W(e, t) {
    let n = A.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!A.T2E.test(t.type));
}
function K() {
    (0, g.G0)(), V.reset(), i()(g.Ay).forOwn((e, t) => V.addRule({ type: t, ...e })), B.reset();
    let e = (0, g.gU)();
    i()(e).forOwn((e, t) => B.addRule({ type: t, ...e })), m.A.markSearchTokensRefreshed();
}
function $(e) {
    return !!v(e) || (e.type === A.I4_.DMS && !_.A.hidePersonalInformation);
}
function z(e) {
    let t = e.name,
        n = !1;
    if (e.isGroupDM()) t = (0, a.m1)(e, f.default, c.A);
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
    if (e.isGroupDM()) return (0, a.m1)(e, f.default, c.A);
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
function X(e) {
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
