n.d(t, {
    E3: () => W,
    EH: () => K,
    Gk: () => y,
    IY: () => j,
    Jl: () => f,
    L5: () => b,
    Pe: () => F,
    Pp: () => U,
    Rt: () => Y,
    TZ: () => G,
    XC: () => g,
    Y7: () => p,
    Zf: () => M,
    Zh: () => H,
    _B: () => O,
    _b: () => C,
    _o: () => B,
    av: () => k,
    bS: () => N,
    dX: () => P,
    lX: () => w,
    mt: () => m,
    nm: () => R,
    sh: () => L,
    zZ: () => v,
}),
    n(321073);
var i = n(735438),
    a = n.n(i);
n(989349);
var r = n(988665),
    s = n(47167),
    l = n(734057),
    o = n(808728),
    d = n(517019),
    c = n(994500),
    _ = n(309010),
    E = n(287809),
    u = n(935208),
    A = n(427262),
    I = n(256796),
    T = n(304578);
n(768570);
var h = n(652215),
    S = n(985018);
function N(e) {
    switch (e.type) {
        case h.I4_.GUILD:
            return e.guildId;
        case h.I4_.GUILD_CHANNEL:
        case h.I4_.CHANNEL:
        case h.I4_.THREAD:
            return e.channelId;
        case h.I4_.DMS:
            return e.type;
    }
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.A;
    return e.type === h.I4_.DMS ? (t.getChannelId(h.ME) ?? null) : N(e);
}
function p(e) {
    switch (e.type) {
        case h.I4_.CHANNEL:
            return S.intl.string(S.t.Q0JJjv);
        case h.I4_.DMS:
            return S.intl.string(S.t.Br0xJA);
        case h.I4_.GUILD_CHANNEL:
        case h.I4_.GUILD:
        case h.I4_.THREAD:
            return S.intl.string(S.t.AXPbZr);
    }
}
function m(e) {
    switch (e.type) {
        case h.I4_.GUILD_CHANNEL:
        case h.I4_.GUILD:
        case h.I4_.THREAD:
            return e.guildId;
        case h.I4_.CHANNEL:
            let t = l.A.getChannel(e.channelId);
            return t?.guild_id ?? null;
        default:
            return null;
    }
}
function O(e) {
    return e.type === h.I4_.GUILD || e.type === h.I4_.GUILD_CHANNEL || e.type === h.I4_.THREAD;
}
function C(e) {
    switch (e.type) {
        case h.I4_.GUILD_CHANNEL:
        case h.I4_.CHANNEL:
        case h.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function R(e) {
    switch (e) {
        case h.BBH.MOST_RELEVANT:
            return { sort_by: "relevance", sort_order: "desc" };
        case h.BBH.OLDEST:
            return { sort_by: "timestamp", sort_order: "asc" };
        case h.BBH.NEWEST:
        default:
            return { sort_by: "timestamp", sort_order: "desc" };
    }
}
function g(e) {
    return null == e.sort_by || null == e.sort_order
        ? h.BBH.NEWEST
        : "relevance" === e.sort_by
          ? h.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? h.BBH.OLDEST
            : h.BBH.NEWEST;
}
function L(e) {
    switch (e) {
        case h.LWr.FILTER_FROM:
            return S.intl.string(S.t.E466pL);
        case h.LWr.FILTER_MENTIONS:
            return S.intl.string(S.t.BYvFWl);
        case h.LWr.FILTER_HAS:
            return S.intl.string(S.t.bhSYbc);
        case h.LWr.FILTER_BEFORE:
        case h.LWr.FILTER_ON:
        case h.LWr.FILTER_AFTER:
            return S.intl.string(S.t.Zbbc1E);
        case h.LWr.FILTER_IN:
            return S.intl.string(S.t["GpM+/7"]);
        case h.LWr.FILTER_LINK_FROM:
            return S.intl.string(S.t.FdDTni);
        case h.LWr.FILTER_FILE_TYPE:
            return S.intl.string(S.t.FXcAFe);
        case h.LWr.FILTER_FILE_NAME:
            return S.intl.string(S.t.uAbFDM);
        case h.LWr.FILTER_PINNED:
            return S.intl.string(S.t.UJxL3V);
        case h.LWr.FILTER_AUTHOR_TYPE:
            return S.intl.string(S.t.qCQzBl);
    }
}
let D = { [h.LWr.FILTER_BEFORE]: !0, [h.LWr.FILTER_AFTER]: !0, [h.LWr.FILTER_ON]: !0 };
function b(e, t) {
    if (d.A.didAgree(t)) {
        let t = E.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function M(e) {
    let t = {};
    for (let [n, i] of (e.forEach((e) => {
        let n,
            i,
            { type: a } = e;
        if (h.l90.test(a)) return;
        switch (a) {
            case h.LWr.ANSWER_BEFORE:
            case h.LWr.ANSWER_ON:
            case h.LWr.ANSWER_AFTER:
                let r = e.getData("start"),
                    s = e.getData("end");
                r && (t.min_id = u.default.fromTimestamp(r)), s && (t.max_id = u.default.fromTimestamp(s));
                return;
        }
        let l = (null == (i = null != (n = T.Ay[a]) ? n.queryKey : null) && (i = "content"), i);
        null == t[l] && (t[l] = new Set());
        let o = t[l];
        switch (a) {
            case h.LWr.ANSWER_USERNAME_FROM:
            case h.LWr.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData("userId"));
                break;
            case h.LWr.ANSWER_LINK_FROM:
            case h.LWr.ANSWER_FILE_TYPE:
            case h.LWr.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case h.LWr.ANSWER_IN:
                for (let t of e.getData("channelIds") ?? []) o.add(t);
                break;
            case h.LWr.ANSWER_HAS:
                o.add(e.getData("has"));
                break;
            case h.LWr.ANSWER_PINNED:
                o.add(e.getData("pinned"));
                break;
            case h.LWr.ANSWER_AUTHOR_TYPE:
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
function P(e) {
    return e?.contents != null && e.contents.length > 0
        ? e?.contents?.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : e?.content;
}
function U(e) {
    return e
        .map((e) => (e.type === r.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function v(e, t, n) {
    let i,
        a,
        r = e.find((r, s) =>
            t >= r.start && t <= r.end && n >= r.start && n <= r.end
                ? (null != e[s + 1] && (a = e[s + 1]), !0)
                : ((i = r), !1),
        );
    return null == r ? null : { previousToken: i, currentToken: r, nextToken: a, focusOffset: t, anchorOffset: n };
}
function y(e, t) {
    let n,
        { currentToken: i, nextToken: a, previousToken: s } = (e = e ?? {});
    if (0 === t.length) return { type: h.o$q.EMPTY, filter: null, token: null };
    if (null == i) return { type: h.o$q.FILTER_ALL, filter: null, token: null };
    if ((0, T.If)(i.type)) {
        if (null == a || a.type === r.Ay.NON_TOKEN_TYPE) return { type: h.o$q.FILTER, filter: i.type, token: a };
        if (null != a && !h.T2E.test(a.type)) return { type: h.o$q.FILTER, filter: i.type, token: null };
    }
    return i.type === r.Ay.NON_TOKEN_TYPE && null != s && (0, T.If)(s.type)
        ? { type: h.o$q.FILTER, filter: s.type, token: i }
        : (i.type === r.Ay.NON_TOKEN_TYPE && (n = i), { type: h.o$q.FILTER_ALL, filter: null, token: n });
}
function G(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => `\\${t}`);
        return `"${t}"`;
    }
}
function w(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let x = new r.Ay(),
    V = new r.Ay();
function B(e) {
    return x.tokenize(e);
}
function F() {
    x.clearCache(), V.clearCache();
}
function k(e) {
    return null != e ? D[e] : null;
}
function H(e, t) {
    let n = h.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!h.T2E.test(t.type));
}
function j() {
    (0, T.G0)(), x.reset(), a()(T.Ay).forOwn((e, t) => x.addRule({ type: t, ...e })), V.reset();
    let e = (0, T.gU)();
    a()(e).forOwn((e, t) => V.addRule({ type: t, ...e })), I.A.markSearchTokensRefreshed();
}
function Y(e) {
    let t = (0, s.m1)(e, E.default, c.A),
        n = !1;
    if (e.isDM()) {
        let n = e.getRecipientId(),
            i = E.default.getUser(n),
            a = A.Ay.getUserTag(i);
        if (null == a) return null;
        t = a;
    } else if (!e.isGroupDM()) {
        n = !e.isThread();
        let i = o.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        i?.name != null && (t = i.name);
    }
    return ((t = G(t)), n) ? `#${t}` : t;
}
function W(e) {
    if (e.isGroupDM()) return (0, s.m1)(e, E.default, c.A);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = E.default.getUser(t);
        return A.Ay.getUserTag(n);
    }
    let t = o.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return t?.name ?? (0, s.m1)(e, E.default, c.A);
}
function K(e) {
    let t = V.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== h.LWr.FILTER_IN && e.type !== h.LWr.ANSWER_IN && n.push(e);
    });
    let i = "";
    return (
        n.forEach((e) => {
            i += e.getFullMatch();
        }),
        i.trim()
    );
}
