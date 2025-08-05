(n.d(t, {
    I6: () => c,
    V9: () => _,
    Z6: () => h,
    jp: () => m,
    r5: () => f,
    vT: () => l,
    vh: () => u,
    yU: () => p
}),
    n(388685),
    n(997841),
    n(415506));
var r = n(73800),
    i = n(467319),
    a = n(676317),
    o = n(273504),
    s = n(388032),
    l = (function (e) {
        return ((e.NEW = 'new'), (e.RECOMMENDED = 'recommended'), (e.BETA = 'beta'), (e.ALPHA = 'alpha'), e);
    })({});
let c = {
    [o.fX.SPAM_LINK]: {
        getDefaultRuleName: () => s.intl.string(s.t.ffR2cH),
        type: o.fX.SPAM_LINK,
        eventType: o.q4.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set()
    },
    [o.fX.KEYWORD]: {
        getDefaultRuleName: () => s.intl.string(s.t.ffR2cH),
        type: o.fX.KEYWORD,
        eventType: o.q4.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL, o.jj.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
    },
    [o.fX.ML_SPAM]: {
        getDefaultRuleName: () => s.intl.string(s.t['puF/Oj']),
        type: o.fX.ML_SPAM,
        eventType: o.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
    },
    [o.fX.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => s.intl.string(s.t.LnGhZm),
        type: o.fX.DEFAULT_KEYWORD_LIST,
        eventType: o.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
    },
    [o.fX.MENTION_SPAM]: {
        getDefaultRuleName: () => s.intl.string(s.t.pX7i6u),
        type: o.fX.MENTION_SPAM,
        eventType: o.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL, o.jj.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
    },
    [o.fX.USER_PROFILE]: {
        getDefaultRuleName: () => s.intl.string(s.t.q1L2v7),
        type: o.fX.USER_PROFILE,
        eventType: o.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.jj.QUARANTINE_USER, o.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.jj.QUARANTINE_USER])
    },
    [o.fX.SERVER_POLICY]: {
        getDefaultRuleName: () => s.intl.string(s.t.ZQr92N),
        type: o.fX.SERVER_POLICY,
        eventType: o.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.jj.FLAG_TO_CHANNEL]),
        flags: new Set(['alpha']),
        defaultActionTypes: new Set()
    }
};
var u = (function (e) {
    return ((e.MEMBERS = 'members'), (e.CONTENT = 'content'), e);
})({});
let d = {
        members: [c[o.fX.USER_PROFILE]],
        content: [c[o.fX.SERVER_POLICY], c[o.fX.MENTION_SPAM], c[o.fX.ML_SPAM], c[o.fX.DEFAULT_KEYWORD_LIST], c[o.fX.KEYWORD]]
    },
    f = (e, t) => c[e].flags.has(t);
function _(e) {
    return Array.from(c[e].availableActionTypes);
}
function p(e, t) {
    let { id: n, eventType: r, triggerType: i, actions: a } = e,
        o = c[i];
    if (t.filter((e) => n !== e.id && e.triggerType === i).length > o.perGuildMaxCount) throw Error('You have exceeded the maximum number of rules of type '.concat(i));
    if (a.some((e) => !o.availableActionTypes.has(e.type))) throw Error('You have provided an action that is not available for this trigger type');
    if (r !== o.eventType) throw Error('You have provided an event type that is not available for this trigger type');
}
function h(e) {
    let t = (0, a.oA)(e);
    return r.useMemo(() => {
        let e = {
            members: [],
            content: []
        };
        return Object.keys(d).reduce((e, n) => {
            let r = d[n].filter((e) => e.type !== o.fX.SERVER_POLICY && (e.type !== o.fX.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map((e) => e.type);
            return ((e[n] = r), e);
        }, e);
    }, [t]);
}
function m(e, t) {
    let n = (0, i.H)(t);
    switch (e) {
        case o.fX.DEFAULT_KEYWORD_LIST:
            return {
                allowList: [],
                presets: []
            };
        case o.fX.USER_PROFILE:
        case o.fX.KEYWORD:
            return {
                keywordFilter: [],
                regexPatterns: [],
                allowList: []
            };
        case o.fX.MENTION_SPAM:
            return {
                mentionTotalLimit: o.Ic,
                mentionRaidProtectionEnabled: n
            };
        case o.fX.ML_SPAM:
        case o.fX.SERVER_POLICY:
        default:
            return;
    }
}
