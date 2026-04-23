n.d(t, {
    E3: () => j,
    EH: () => K,
    Gk: () => G,
    IY: () => W,
    Jl: () => R,
    L5: () => b,
    Pe: () => H,
    Pp: () => M,
    Rt: () => Y,
    TZ: () => v,
    XC: () => D,
    Y7: () => f,
    Zf: () => U,
    Zh: () => x,
    _B: () => p,
    _b: () => m,
    _o: () => V,
    av: () => k,
    bS: () => O,
    dX: () => P,
    lX: () => B,
    mt: () => C,
    nm: () => L,
    sh: () => h,
    zZ: () => y,
}),
    n(321073);
var i = n(735438),
    r = n.n(i);
n(989349);
var a = n(988665),
    s = n(47167),
    _ = n(734057),
    l = n(808728),
    o = n(517019),
    E = n(994500),
    d = n(309010),
    c = n(287809),
    u = n(935208),
    I = n(427262),
    A = n(256796),
    T = n(304578);
n(768570);
var S = n(652215),
    N = n(985018);
function O(e) {
    switch (e.type) {
        case S.I4_.GUILD:
            return e.guildId;
        case S.I4_.GUILD_CHANNEL:
        case S.I4_.CHANNEL:
        case S.I4_.THREAD:
            return e.channelId;
        case S.I4_.DMS:
            return e.type;
    }
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A;
    return e.type === S.I4_.DMS ? (t.getChannelId(S.ME) ?? null) : O(e);
}
function f(e) {
    switch (e.type) {
        case S.I4_.CHANNEL:
            return N.intl.string(N.t.Q0JJjv);
        case S.I4_.DMS:
            return N.intl.string(N.t.Br0xJA);
        case S.I4_.GUILD_CHANNEL:
        case S.I4_.GUILD:
        case S.I4_.THREAD:
            return N.intl.string(N.t.AXPbZr);
    }
}
function C(e) {
    switch (e.type) {
        case S.I4_.GUILD_CHANNEL:
        case S.I4_.GUILD:
        case S.I4_.THREAD:
            return e.guildId;
        case S.I4_.CHANNEL:
            let t = _.A.getChannel(e.channelId);
            return t?.guild_id ?? null;
        default:
            return null;
    }
}
function p(e) {
    return e.type === S.I4_.GUILD || e.type === S.I4_.GUILD_CHANNEL || e.type === S.I4_.THREAD;
}
function m(e) {
    switch (e.type) {
        case S.I4_.GUILD_CHANNEL:
        case S.I4_.CHANNEL:
        case S.I4_.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function L(e) {
    switch (e) {
        case S.BBH.MOST_RELEVANT:
            return { sort_by: "relevance", sort_order: "desc" };
        case S.BBH.OLDEST:
            return { sort_by: "timestamp", sort_order: "asc" };
        case S.BBH.NEWEST:
        default:
            return { sort_by: "timestamp", sort_order: "desc" };
    }
}
function D(e) {
    return null == e.sort_by || null == e.sort_order
        ? S.BBH.NEWEST
        : "relevance" === e.sort_by
          ? S.BBH.MOST_RELEVANT
          : "asc" === e.sort_order
            ? S.BBH.OLDEST
            : S.BBH.NEWEST;
}
function h(e) {
    switch (e) {
        case S.LWr.FILTER_FROM:
            return N.intl.string(N.t.E466pL);
        case S.LWr.FILTER_MENTIONS:
            return N.intl.string(N.t.BYvFWl);
        case S.LWr.FILTER_HAS:
            return N.intl.string(N.t.bhSYbc);
        case S.LWr.FILTER_BEFORE:
        case S.LWr.FILTER_ON:
        case S.LWr.FILTER_AFTER:
            return N.intl.string(N.t.Zbbc1E);
        case S.LWr.FILTER_IN:
            return N.intl.string(N.t["GpM+/7"]);
        case S.LWr.FILTER_LINK_FROM:
            return N.intl.string(N.t.FdDTni);
        case S.LWr.FILTER_FILE_TYPE:
            return N.intl.string(N.t.FXcAFe);
        case S.LWr.FILTER_FILE_NAME:
            return N.intl.string(N.t.uAbFDM);
        case S.LWr.FILTER_PINNED:
            return N.intl.string(N.t.UJxL3V);
        case S.LWr.FILTER_AUTHOR_TYPE:
            return N.intl.string(N.t.qCQzBl);
    }
}
let g = { [S.LWr.FILTER_BEFORE]: !0, [S.LWr.FILTER_AFTER]: !0, [S.LWr.FILTER_ON]: !0 };
function b(e, t) {
    if (o.A.didAgree(t)) {
        let t = c.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function U(e) {
    let t = {};
    for (let [n, i] of (e.forEach((e) => {
        let n,
            i,
            { type: r } = e;
        if (S.l90.test(r)) return;
        switch (r) {
            case S.LWr.ANSWER_BEFORE:
            case S.LWr.ANSWER_ON:
            case S.LWr.ANSWER_AFTER:
                let a = e.getData("start"),
                    s = e.getData("end");
                a && (t.min_id = u.default.fromTimestamp(a)), s && (t.max_id = u.default.fromTimestamp(s));
                return;
        }
        let _ = (null == (i = null != (n = T.Ay[r]) ? n.queryKey : null) && (i = "content"), i);
        null == t[_] && (t[_] = new Set());
        let l = t[_];
        switch (r) {
            case S.LWr.ANSWER_USERNAME_FROM:
            case S.LWr.ANSWER_USERNAME_MENTIONS:
                l.add(e.getData("userId"));
                break;
            case S.LWr.ANSWER_LINK_FROM:
            case S.LWr.ANSWER_FILE_TYPE:
            case S.LWr.ANSWER_FILE_NAME:
                l.add(e.getMatch(1));
                break;
            case S.LWr.ANSWER_IN:
                for (let t of e.getData("channelIds") ?? []) l.add(t);
                break;
            case S.LWr.ANSWER_HAS:
                l.add(e.getData("has"));
                break;
            case S.LWr.ANSWER_PINNED:
                l.add(e.getData("pinned"));
                break;
            case S.LWr.ANSWER_AUTHOR_TYPE:
                l.add(e.getData("author_type"));
                break;
            default:
                l.add(e.getFullMatch().trim());
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
function M(e) {
    return e
        .map((e) => (e.type === a.Ay.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function y(e, t, n) {
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
        { currentToken: i, nextToken: r, previousToken: s } = (e = e ?? {});
    if (0 === t.length) return { type: S.o$q.EMPTY, filter: null, token: null };
    if (null == i) return { type: S.o$q.FILTER_ALL, filter: null, token: null };
    if ((0, T.If)(i.type)) {
        if (null == r || r.type === a.Ay.NON_TOKEN_TYPE) return { type: S.o$q.FILTER, filter: i.type, token: r };
        if (null != r && !S.T2E.test(r.type)) return { type: S.o$q.FILTER, filter: i.type, token: null };
    }
    return i.type === a.Ay.NON_TOKEN_TYPE && null != s && (0, T.If)(s.type)
        ? { type: S.o$q.FILTER, filter: s.type, token: i }
        : (i.type === a.Ay.NON_TOKEN_TYPE && (n = i), { type: S.o$q.FILTER_ALL, filter: null, token: n });
}
function v(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => `\\${t}`);
        return `"${t}"`;
    }
}
function B(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let w = new a.Ay(),
    F = new a.Ay();
function V(e) {
    return w.tokenize(e);
}
function H() {
    w.clearCache(), F.clearCache();
}
function k(e) {
    return null != e ? g[e] : null;
}
function x(e, t) {
    let n = S.l90.test(e.type);
    return (null != t || !n) && (null == t || !n || !!S.T2E.test(t.type));
}
function W() {
    (0, T.G0)(), w.reset(), r()(T.Ay).forOwn((e, t) => w.addRule({ type: t, ...e })), F.reset();
    let e = (0, T.gU)();
    r()(e).forOwn((e, t) => F.addRule({ type: t, ...e })), A.A.markSearchTokensRefreshed();
}
function Y(e) {
    let t = (0, s.m1)(e, c.default, E.A),
        n = !1;
    if (e.isDM()) {
        let n = e.getRecipientId(),
            i = c.default.getUser(n),
            r = I.Ay.getUserTag(i);
        if (null == r) return null;
        t = r;
    } else if (!e.isGroupDM()) {
        n = !e.isThread();
        let i = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        i?.name != null && (t = i.name);
    }
    return ((t = v(t)), n) ? `#${t}` : t;
}
function j(e) {
    if (e.isGroupDM()) return (0, s.m1)(e, c.default, E.A);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = c.default.getUser(t);
        return I.Ay.getUserTag(n);
    }
    let t = l.Ay.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return t?.name ?? (0, s.m1)(e, c.default, E.A);
}
function K(e) {
    let t = F.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== S.LWr.FILTER_IN && e.type !== S.LWr.ANSWER_IN && n.push(e);
    });
    let i = "";
    return (
        n.forEach((e) => {
            i += e.getFullMatch();
        }),
        i.trim()
    );
}
