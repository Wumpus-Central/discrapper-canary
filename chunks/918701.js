r.d(n, {
    $H: function () {
        return ex;
    },
    $J: function () {
        return e0;
    },
    AV: function () {
        return ep;
    },
    BM: function () {
        return e3;
    },
    Bg: function () {
        return eI;
    },
    Bz: function () {
        return e2;
    },
    C1: function () {
        return tt;
    },
    C9: function () {
        return te;
    },
    FE: function () {
        return eU;
    },
    FI: function () {
        return tl;
    },
    Fs: function () {
        return tn;
    },
    GN: function () {
        return em;
    },
    Gd: function () {
        return to;
    },
    Jg: function () {
        return eN;
    },
    K: function () {
        return ey;
    },
    KM: function () {
        return eP;
    },
    Kr: function () {
        return ev;
    },
    Nj: function () {
        return eO;
    },
    OG: function () {
        return e8;
    },
    PM: function () {
        return e_;
    },
    Qe: function () {
        return F;
    },
    Rs: function () {
        return ef;
    },
    U3: function () {
        return et;
    },
    UZ: function () {
        return ew;
    },
    V$: function () {
        return e7;
    },
    WP: function () {
        return en;
    },
    Xh: function () {
        return eu;
    },
    Xv: function () {
        return eT;
    },
    ZZ: function () {
        return Y;
    },
    _D: function () {
        return H;
    },
    _j: function () {
        return e9;
    },
    b7: function () {
        return eq;
    },
    dh: function () {
        return q;
    },
    f$: function () {
        return ti;
    },
    f2: function () {
        return eB;
    },
    fY: function () {
        return e6;
    },
    gI: function () {
        return e5;
    },
    hQ: function () {
        return ea;
    },
    iQ: function () {
        return X;
    },
    il: function () {
        return ez;
    },
    lQ: function () {
        return K;
    },
    o9: function () {
        return ek;
    },
    oo: function () {
        return eC;
    },
    pO: function () {
        return eL;
    },
    q6: function () {
        return J;
    },
    q8: function () {
        return e$;
    },
    si: function () {
        return eX;
    },
    t2: function () {
        return eh;
    },
    tF: function () {
        return z;
    },
    u7: function () {
        return ts;
    },
    vQ: function () {
        return eb;
    },
    vR: function () {
        return eS;
    },
    xn: function () {
        return eE;
    },
    yH: function () {
        return tr;
    },
    yI: function () {
        return es;
    },
    ys: function () {
        return eA;
    },
    zE: function () {
        return eg;
    },
    zK: function () {
        return eM;
    },
    zi: function () {
        return Q;
    }
});
var i = r(47120);
var a = r(627341);
var s = r(411104);
var o = r(571269);
var l = r(298267);
var u = r(653041);
var c = r(991998),
    d = r(392711);
var f = r(278074),
    _ = r(754700),
    h = r(551910),
    p = r(34738),
    m = r(887003),
    g = r(742635),
    E = r(570140),
    v = r(230711),
    I = r(782568);
r(597688);
var T = r(231757);
r(706454);
var b = r(572004),
    y = r(70956),
    S = r(630388),
    A = r(823379),
    N = r(49012),
    C = r(960048),
    R = r(617136),
    O = r(272008),
    D = r(569984),
    L = r(497505),
    x = r(75137),
    w = r(566078),
    P = r(312046),
    M = r(46140),
    k = r(981631),
    U = r(701488),
    B = r(388032);
let G = 2592000000,
    Z = new Set([p.n.PREMIUM_EXTENSION, p.n.PREMIUM_PERMANENT]);
function F(e) {
    try {
        return (0, f.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (r) {
        var n;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (n = e.config) || void 0 === n ? void 0 : n.config_version, "'"), r), !1;
    }
}
let V = (e) => e.application_id === U.Ev || e.platform === k.M7m.XBOX,
    j = (e) => e.platform === k.M7m.PS4 || e.platform === k.M7m.PS5;
function H(e, n) {
    if (null == e) return !1;
    let r = e.name.toLowerCase(),
        i = w.r.build(n.config).application.name.toLowerCase();
    return V(e) || j(e) ? r === i : null != e.application_id && W(e.application_id, n);
}
function Y(e, n) {
    for (let [r, i] of e) if (H(n, i) && !Q(i)) return i;
}
function W(e, n) {
    return null != w.r.build(n.config).application.ids.find((n) => n === e);
}
function K(e, n) {
    let r;
    for (let [i, a] of e)
        if (W(n, a) && !Q(a)) {
            r = a;
            break;
        }
    return r;
}
function z(e, n) {
    let r = K(e, n.applicationId);
    if (null != r) return r;
    for (let [n, r] of e) if (!Q(r) && eP(r)) return r;
}
function q(e, n) {
    return Array.from(e.values()).filter((e) => W(n, e) && !Q(e) && eO({ quest: e }));
}
function Q(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function X(e) {
    if (!Q(e)) return !1;
    let n = Date.now() - G,
        r = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(r <= n) && !0;
}
function J(e) {
    return (0, f.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, P.Q)(e))
        .exhaustive();
}
function $(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at
          };
}
function ee(e) {
    let n = {};
    for (let [r, i] of Object.entries(e))
        n[r] = {
            eventName: i.event_name,
            value: i.value,
            updatedAt: i.updated_at,
            completedAt: i.completed_at,
            heartbeat: $(i.heartbeat)
        };
    return n;
}
function et(e) {
    var n;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        enrolledAt: e.enrolled_at,
        completedAt: e.completed_at,
        claimedAt: e.claimed_at,
        claimedTier: null !== (n = e.claimed_tier) && void 0 !== n ? n : null,
        lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
        streamProgressSeconds: e.stream_progress_seconds,
        dismissedQuestContent: e.dismissed_quest_content,
        progress: ee(e.progress)
    };
}
function en(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: J(e.config),
        userStatus: null == e.user_status ? null : et(e.user_status),
        targetedContent: e.targeted_content
    };
}
function er(e) {
    return {
        skuId: e.sku_id,
        type: e.type,
        name: e.name,
        nameWithArticle: e.name_with_article,
        asset: e.asset,
        assetVideo: e.asset_video,
        collectibleProduct: e.collectible_product
    };
}
function ei(e) {
    return {
        id: e.id,
        startsAt: e.starts_at,
        expiresAt: e.expires_at,
        features: e.features,
        messages: {
            questName: e.messages.quest_name,
            gamePublisher: e.messages.game_publisher,
            gameTitle: e.messages.game_title
        },
        assets: {
            hero: e.assets.hero,
            heroVideo: e.assets.hero_video,
            questBarHero: e.assets.quest_bar_hero,
            questBarHeroVideo: e.assets.quest_bar_hero_video,
            gameTile: e.assets.game_tile,
            logotype: e.assets.logotype
        },
        colors: {
            primary: e.colors.primary,
            secondary: e.colors.secondary
        },
        rewards: e.rewards.map(er),
        cosponsorMetadata: (0, P.s)(e.cosponsor_metadata)
    };
}
function ea(e) {
    return {
        id: e.id,
        config: ei(e.config),
        userStatus: null == e.user_status ? null : et(e.user_status)
    };
}
function es(e) {
    var n;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: null !== (n = e.tier) && void 0 !== n ? n : null
    };
}
function eo(e) {
    if ((null == e ? void 0 : e.quest_rewards) == null) return null;
    let n = e.quest_rewards;
    switch (n.reward.tag) {
        case m.w.IN_GAME:
            return { questRewards: { reward: { tag: n.reward.tag } } };
        case m.w.REWARD_CODE:
            return {
                questRewards: {
                    reward: {
                        tag: n.reward.tag,
                        rewardCode: es(n.reward.reward_code)
                    }
                }
            };
    }
}
function el(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: eo(e.tenant_metadata),
        consumed: e.consumed
    };
}
function eu(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(el),
        errors: e.errors
    };
}
function ec(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target
    };
}
function ed(e) {
    let n = {};
    for (let [r, i] of Object.entries(e.tasks)) n[r] = ec(i);
    return {
        tasks: n,
        joinOperator: e.join_operator
    };
}
let ef = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function e_(e, n, r) {
    let i = n.get(r);
    if (null == i) return;
    let a = e.get(i.id);
    if (null != a && !Q(a)) return a;
}
let eh = (e) => {
    switch (e) {
        case L.y$.XBOX:
            return B.intl.string(B.t.G84UWV);
        case L.y$.PLAYSTATION:
            return B.intl.string(B.t['6IeKx8']);
        case L.y$.SWITCH:
            return B.intl.string(B.t['1pp0sr']);
        case L.y$.PC:
            return B.intl.string(B.t['YK+wUl']);
        case L.y$.CROSS_PLATFORM:
            return B.intl.string(B.t.UWVbzc);
    }
};
function ep(e) {
    var n, r;
    let { quest: i, taskDetails: a, thirdPartyTaskDetails: s } = e;
    if ((null === (n = i.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return B.intl.string(B.t.BzFeTE);
    if ((null === (r = i.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null) {
        let { percentComplete: e } = a,
            n = null != s ? s.completedRatio : e;
        return n >= 0.75 ? B.intl.string(B.t.gvCR4O) : n >= 0.45 && n <= 0.55 ? B.intl.string(B.t.JNx8sL) : n > 0 ? B.intl.string(B.t.JMbfnZ) : B.intl.string(B.t['7e5k7O']);
    }
    return B.intl.formatToPlainString(B.t.EQa7oq, { questName: i.config.messages.questName });
}
function em(e) {
    return Object.keys(M.a_).includes(L.jn[e]);
}
function eg(e, n) {
    if (!em(n)) return !1;
    let r = L.jn[n];
    return (0, S.yE)(e.dismissedQuestContent, M.a_[r]);
}
function eE(e) {
    let n = e.rewardsConfig.rewards.find((e) => e.type === m.w.COLLECTIBLE);
    return (null == n ? void 0 : n.type) === m.w.COLLECTIBLE ? n : null;
}
function ev(e) {
    let n = eE(e);
    if (null == n || !('expiresAt' in n) || null == n.expiresAt) return null;
    let r = new Date(e.expiresAt),
        i = new Date(n.expiresAt),
        a = (0, c.Z)(i, r),
        s = Math.floor(a / 30) + (a % 30 >= 25 ? 1 : 0);
    if (s >= 12) {
        let e = Math.floor(s / 12);
        return B.intl.formatToPlainString(B.t.PClsr6, { years: e });
    }
    if (s > 0) return B.intl.formatToPlainString(B.t.kridzM, { months: s });
    {
        let e = (0, c.Z)(i, r);
        if (!(e >= 7)) return B.intl.formatToPlainString(B.t.k2UNz8, { days: e });
        {
            let n = Math.ceil(e / 7);
            return B.intl.formatToPlainString(B.t.EmoBDw, { weeks: n });
        }
    }
}
function eI(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === m.w.FRACTIONAL_PREMIUM);
}
function eT(e) {
    return null != eE(e);
}
function eb(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === m.w.IN_GAME);
}
function ey(e) {
    var n;
    return null !== (n = e.rewardsConfig.rewards.find((e) => e.type === m.w.IN_GAME)) && void 0 !== n ? n : null;
}
function eS(e, n) {
    return e.targetedContent.includes(n);
}
function eA(e, n) {
    C.Z.captureException(e, {
        ...n,
        tags: {
            ...(null == n ? void 0 : n.tags),
            app_context: 'quests'
        }
    });
}
function eN(e, n) {
    if (null == n || null == e) return null;
    for (let r of n) {
        let n = Y(e, r);
        if (null != n) return n;
    }
    return null;
}
function eC(e) {
    let {
            quest: { config: n }
        } = e,
        r = n.rewardsConfig;
    return r.assignmentMethod === h.j.TIERED && r.rewards.length > 0 && r.rewards.every((e) => e.type === m.w.REWARD_CODE);
}
function eR(e) {
    return e.taskConfig.type === g.L.FIRST_PARTY && null != e.taskConfig.tasks[_.X.PLAY_ON_DESKTOP];
}
function eO(e) {
    let { quest: n } = e;
    return eR(n.config);
}
function eD(e) {
    let { quest: n } = e;
    return n.config.taskConfig.type === g.L.FIRST_PARTY && null != n.config.taskConfig.tasks[_.X.STREAM_ON_DESKTOP];
}
function eL(e) {
    return e.config.taskConfig.type === g.L.FIRST_PARTY && null != e.config.taskConfig.tasks[_.X.PLAY_ACTIVITY];
}
function ex(e) {
    return null != e && eO({ quest: e });
}
function ew(e, n) {
    return w.r.build(n.config).application.id === e;
}
function eP(e) {
    let n = w.r.build(e.config).application.id;
    return eL(e) && n === M.Ts;
}
function eM(e, n) {
    return w.r.build(e.config).features.has(n);
}
function ek(e) {
    let { quest: n, idx: r } = e;
    if (null == r) return null;
    let i = n.config.rewardsConfig.rewards[r];
    return i.type === m.w.REWARD_CODE ? i : null;
}
function eU(e, n) {
    let r = w.r.build(e.config).application.link;
    (0, N.q)({
        href: r,
        onConfirm: () => {
            (0, R._3)({
                questId: e.id,
                questContent: n.content,
                questContentCTA: n.ctaContent,
                questContentPosition: n.position
            }),
                (0, I.Z)(r);
        }
    });
}
let eB = (e, n) => {
        (0, R._3)({
            questId: e,
            questContent: n.content,
            questContentCTA: n.ctaContent,
            questContentPosition: n.position
        }),
            (0, b.JG)(ef(e));
    },
    eG = (e, n) => (e > 0 ? (0, d.floor)(Math.min(n / e, 1), 4) : 0),
    eZ = (e) => e2(e) || D.Z.isProgressingOnDesktop(e.id),
    eF = (e, n) => {
        var r, i, a, s;
        let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (a = s.progress) || void 0 === a ? void 0 : null === (i = a[n.eventName]) || void 0 === i ? void 0 : null === (r = i.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt;
        if (null == o || !eZ(e)) return 0;
        let l = Date.now() - new Date(o).valueOf();
        return (0, d.floor)(l / y.Z.Millis.SECOND, 2);
    },
    eV = (e, n) => {
        var r, i, a, s, o;
        let l = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : r[n.eventName],
            u = null !== (o = null !== (s = null == l ? void 0 : l.value) && void 0 !== s ? s : null === (a = e.userStatus) || void 0 === a ? void 0 : a.streamProgressSeconds) && void 0 !== o ? o : 0;
        if (e$(e)) {
            let r = D.Z.getOptimisticProgress(e.id, n.eventName);
            return null == r || r < u ? u : r;
        }
        return u + eF(e, n);
    },
    ej = 0.99,
    eH = (e, n) => {
        var r;
        let i = n.target;
        if ((null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null) return i;
        let a = Math.min(i * ej, eV(e, n));
        return Math.max((0, d.floor)(a, 2), 0);
    },
    eY = (e) => {
        var n, r;
        let { quest: i, taskType: a, includeTaskTypes: s = _.T.ALL } = e,
            o = i.config.taskConfig;
        if (o.type !== g.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(o.type, '!'));
        let l = null != a ? a : null === (n = Object.values(o.tasks).filter((e) => s.has(e.eventName))[0]) || void 0 === n ? void 0 : n.eventName,
            u = null !== (r = o.tasks[l]) && void 0 !== r ? r : o.tasks[_.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error('No task with type '.concat(a, ' found for quest ').concat(i.id, '!'));
        let c = u.target,
            d = eH(i, u);
        return {
            progressSeconds: d,
            targetSeconds: c,
            targetMinutes: Math.round(c / y.Z.Seconds.MINUTE),
            percentComplete: eG(c, d),
            taskType: l
        };
    },
    eW = (e) => (_.T.ALL.has(e) ? e : null),
    eK = (e) => {
        var n, r;
        let { quest: i, includeTaskTypes: a = _.T.ALL } = e;
        for (let e of Object.values(null !== (r = null === (n = i.userStatus) || void 0 === n ? void 0 : n.progress) && void 0 !== r ? r : {})
            .sort((e, n) => {
                var r, i;
                let a = null == e ? void 0 : null === (r = e.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt,
                    s = null == n ? void 0 : null === (i = n.heartbeat) || void 0 === i ? void 0 : i.lastBeatAt;
                if (null != a && null != s) return new Date(a).valueOf() > new Date(s).valueOf() ? -1 : 1;
                if (null == a && null == s && (null == e ? void 0 : e.updatedAt) != null && (null == n ? void 0 : n.updatedAt) != null) return new Date(e.updatedAt).valueOf() > new Date(n.updatedAt).valueOf() ? -1 : 1;
                if (null != a && null == s) return -1;
                else return 1;
            })
            .filter(A.lm)) {
            let n = eW(e.eventName);
            if (null != n) {
                if (null == a ? void 0 : a.has(n))
                    return eY({
                        quest: i,
                        taskType: n,
                        includeTaskTypes: a
                    });
            }
        }
        return eY({
            quest: i,
            includeTaskTypes: a
        });
    },
    ez = (e, n) => {
        if (e.config.taskConfig.type !== g.L.FIRST_PARTY)
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: _.X.STREAM_ON_DESKTOP
            };
        if (eJ(e))
            return eK({
                quest: e,
                includeTaskTypes: null != n ? n : e2(e) ? _.T.CONSOLE : _.T.ALL
            });
        if (e$(e))
            return eY({
                quest: e,
                taskType: _.X.WATCH_VIDEO
            });
        if (ex(e))
            return eY({
                quest: e,
                taskType: _.X.PLAY_ON_DESKTOP
            });
        if (eL(e))
            return eY({
                quest: e,
                taskType: _.X.PLAY_ACTIVITY
            });
        else
            return eY({
                quest: e,
                taskType: _.X.STREAM_ON_DESKTOP
            });
    };
function eq(e) {
    var n, r, i, a;
    if (e.config.taskConfig.type !== g.L.THIRD_PARTY || 0 === Object.keys(e.config.taskConfig.tasks).length) return null;
    let s = Object.keys(e.config.taskConfig.tasks)[0],
        o = e.config.taskConfig.tasks[s],
        l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
        u = eG(o.target, l);
    return {
        title: o.title,
        description: o.description,
        target: o.target,
        progress: l,
        completedRatio: u
    };
}
let eQ = (e) => (n) => e.some((e) => null != n.config.taskConfig.tasks[e]);
function eX(e) {
    let n = e.targetSeconds - e.progressSeconds;
    return {
        minutes: Math.floor(n / 60),
        seconds: Math.floor(n % 60)
    };
}
let eJ = eQ([_.X.PLAY_ON_XBOX, _.X.PLAY_ON_PLAYSTATION]),
    e$ = eQ([_.X.WATCH_VIDEO]);
function e0(e) {
    return eJ(e);
}
let e1 = (e, n) => {
    var r, i;
    let a = null == e ? void 0 : null === (i = e.progress[n]) || void 0 === i ? void 0 : null === (r = i.heartbeat) || void 0 === r ? void 0 : r.expiresAt;
    if (null == a) return !1;
    let s = new Date(a).valueOf();
    return !isNaN(s) && s > Date.now();
};
function e2(e) {
    return null != e.userStatus && (e1(e.userStatus, _.X.PLAY_ON_XBOX) || e1(e.userStatus, _.X.PLAY_ON_PLAYSTATION));
}
function e3(e) {
    return !!e$(e) && (0, r(952265).nf)(ts(e.id));
}
function e4() {
    v.Z.open(k.oAB.CONNECTIONS);
}
function e6(e, n) {
    let { platformType: r, quest: i } = e;
    (0, R._3)({
        questId: i.id,
        questContent: n.content,
        questContentCTA: n.ctaContent
    }),
        (0, T.Z)({
            platformType: r,
            location: n.ctaContent
        });
}
function e5(e, n) {
    let { quest: r } = e;
    (0, R._3)({
        questId: r.id,
        questContent: n.content,
        questContentPosition: n.position,
        questContentRowIndex: n.rowIndex,
        questContentCTA: n.ctaContent
    });
    let i = ta(r);
    if (1 === i.length) return (0, T.Z)({ platformType: i.at(0) });
    E.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, T.Z)({ platformType: e }),
        includedPlatformTypes: new Set(i)
    });
}
function e7(e, n) {
    let { quest: r } = e;
    (0, R._3)({
        questId: r.id,
        questContent: n.content,
        questContentPosition: n.position,
        questContentCTA: n.ctaContent
    }),
        e4();
}
function e8() {
    return window.location.pathname.startsWith(k.Z5c.QUEST_HOME);
}
function e9(e) {
    return 'xbox' === e.connected_account_type ? k.ABu.XBOX : k.ABu.PLAYSTATION;
}
function te(e) {
    return e9(e) === k.ABu.XBOX ? B.t.mytEv7 : B.t.iDiwb2;
}
function tt(e) {
    var n, r, i, a;
    let { quest: s, rewardCode: o, selectedPlatformType: l, sharedQuestFields: u } = e,
        c = eC({ quest: s }),
        d = null != l ? l : null == o ? void 0 : o.platform,
        f = c
            ? ek({
                  quest: s,
                  idx: null !== (i = null == o ? void 0 : o.tier) && void 0 !== i ? i : null === (n = s.userStatus) || void 0 === n ? void 0 : n.claimedTier
              })
            : null,
        _ = null !== (a = null == f ? void 0 : null === (r = f.messages) || void 0 === r ? void 0 : r.redemptionInstructionsByPlatform) && void 0 !== a ? a : u.defaultRewardRedemptionInstructionsByPlatform;
    return null != d ? _[d] : void 0;
}
function tn(e) {
    let { isTargetedDisclosure: n, gamePublisher: r, gameTitle: i, cosponsorName: a } = e;
    return n
        ? null == a
            ? B.intl.formatToPlainString(B.t.Piihy8, { gamePublisher: r })
            : B.intl.formatToPlainString(B.t.DV47Gx, {
                  gamePublisher: r,
                  cosponsorName: a
              })
        : B.intl.formatToPlainString(B.t.tOWwxM, {
              gamePublisher: r,
              gameTitle: i
          });
}
function tr(e) {
    let n = eO({ quest: e }) || eD({ quest: e }),
        r = eJ(e),
        i = [];
    return n && i.push(M.cd.DESKTOP), r && i.push(M.cd.CONSOLE), i;
}
function ti(e) {
    var n;
    let r = null === (n = eE(e)) || void 0 === n ? void 0 : n.expirationMode;
    return !!(0, x.U)() && !!r && Z.has(r);
}
function ta(e) {
    let n = Object.keys(e.config.taskConfig.tasks),
        r = [];
    for (let e of n)
        switch (e) {
            case _.X.PLAY_ON_XBOX:
                r.push(k.ABu.XBOX);
                break;
            case _.X.PLAY_ON_PLAYSTATION:
                r.push(k.ABu.PLAYSTATION);
        }
    return r;
}
function ts(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function to(e) {
    let n = e$(e),
        r = eL(e);
    return n || r;
}
function tl(e, n) {
    var r, i;
    if (!Q(e) && (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null && (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) == null) (0, O.cT)(e.id, n);
}
