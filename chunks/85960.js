n.d(t, {
    I6: () => c,
    V9: () => _,
    Z6: () => h,
    jp: () => m,
    r5: () => f,
    vT: () => l,
    vh: () => u,
    yU: () => p,
}),
    n(388685),
    n(997841),
    n(415506);
var r = n(73800),
    i = n(467319),
    o = n(676317),
    a = n(273504),
    s = n(388032),
    l = (function (e) {
        return (e.NEW = "new"), (e.RECOMMENDED = "recommended"), (e.BETA = "beta"), (e.ALPHA = "alpha"), e;
    })({});
let c = {
    [a.fX.SPAM_LINK]: {
        getDefaultRuleName: () => s.intl.string(s.t.ffR2cH),
        type: a.fX.SPAM_LINK,
        eventType: a.q4.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set(),
    },
    [a.fX.KEYWORD]: {
        getDefaultRuleName: () => s.intl.string(s.t.ffR2cH),
        type: a.fX.KEYWORD,
        eventType: a.q4.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([a.jj.BLOCK_MESSAGE, a.jj.FLAG_TO_CHANNEL, a.jj.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([a.jj.BLOCK_MESSAGE]),
    },
    [a.fX.ML_SPAM]: {
        getDefaultRuleName: () => s.intl.string(s.t["puF/Oj"]),
        type: a.fX.ML_SPAM,
        eventType: a.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([a.jj.BLOCK_MESSAGE, a.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([a.jj.BLOCK_MESSAGE]),
    },
    [a.fX.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => s.intl.string(s.t.LnGhZm),
        type: a.fX.DEFAULT_KEYWORD_LIST,
        eventType: a.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([a.jj.BLOCK_MESSAGE, a.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([a.jj.BLOCK_MESSAGE]),
    },
    [a.fX.MENTION_SPAM]: {
        getDefaultRuleName: () => s.intl.string(s.t.pX7i6u),
        type: a.fX.MENTION_SPAM,
        eventType: a.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([a.jj.BLOCK_MESSAGE, a.jj.FLAG_TO_CHANNEL, a.jj.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([a.jj.BLOCK_MESSAGE]),
    },
    [a.fX.USER_PROFILE]: {
        getDefaultRuleName: () => s.intl.string(s.t.q1L2v7),
        type: a.fX.USER_PROFILE,
        eventType: a.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([a.jj.QUARANTINE_USER, a.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([a.jj.QUARANTINE_USER]),
    },
    [a.fX.SERVER_POLICY]: {
        getDefaultRuleName: () => s.intl.string(s.t.ZQr92N),
        type: a.fX.SERVER_POLICY,
        eventType: a.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([a.jj.FLAG_TO_CHANNEL]),
        flags: new Set(["alpha"]),
        defaultActionTypes: new Set(),
    },
};
var u = (function (e) {
    return (e.MEMBERS = "members"), (e.CONTENT = "content"), e;
})({});
let d = {
        members: [c[a.fX.USER_PROFILE]],
        content: [
            c[a.fX.SERVER_POLICY],
            c[a.fX.MENTION_SPAM],
            c[a.fX.ML_SPAM],
            c[a.fX.DEFAULT_KEYWORD_LIST],
            c[a.fX.KEYWORD],
        ],
    },
    f = (e, t) => c[e].flags.has(t);
function _(e) {
    return Array.from(c[e].availableActionTypes);
}
function p(e, t) {
    let { id: n, eventType: r, triggerType: i, actions: o } = e,
        a = c[i];
    if (t.filter((e) => n !== e.id && e.triggerType === i).length > a.perGuildMaxCount)
        throw Error("You have exceeded the maximum number of rules of type ".concat(i));
    if (o.some((e) => !a.availableActionTypes.has(e.type)))
        throw Error("You have provided an action that is not available for this trigger type");
    if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type");
}
function h(e) {
    let t = (0, o.oA)(e);
    return r.useMemo(() => {
        let e = {
            members: [],
            content: [],
        };
        return Object.keys(d).reduce((e, n) => {
            let r = d[n]
                .filter(
                    (e) =>
                        e.type !== a.fX.SERVER_POLICY &&
                        (e.type !== a.fX.USER_PROFILE || !!t) &&
                        e.perGuildMaxCount > 0,
                )
                .map((e) => e.type);
            return (e[n] = r), e;
        }, e);
    }, [t]);
}
function m(e, t) {
    let n = (0, i.H)(t);
    switch (e) {
        case a.fX.DEFAULT_KEYWORD_LIST:
            return {
                allowList: [],
                presets: [],
            };
        case a.fX.USER_PROFILE:
        case a.fX.KEYWORD:
            return {
                keywordFilter: [],
                regexPatterns: [],
                allowList: [],
            };
        case a.fX.MENTION_SPAM:
            return {
                mentionTotalLimit: a.Ic,
                mentionRaidProtectionEnabled: n,
            };
        case a.fX.ML_SPAM:
        case a.fX.SERVER_POLICY:
        default:
            return;
    }
}
