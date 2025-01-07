r.d(n, {
    $H: function () {
        return eO;
    },
    $J: function () {
        return eX;
    },
    AV: function () {
        return ef;
    },
    BM: function () {
        return e0;
    },
    Bg: function () {
        return eg;
    },
    Bz: function () {
        return e$;
    },
    C1: function () {
        return e8;
    },
    C9: function () {
        return e7;
    },
    FE: function () {
        return eP;
    },
    FI: function () {
        return ti;
    },
    Fs: function () {
        return e9;
    },
    GN: function () {
        return e_;
    },
    Gd: function () {
        return tr;
    },
    Jg: function () {
        return ey;
    },
    K: function () {
        return eI;
    },
    KM: function () {
        return eL;
    },
    Kr: function () {
        return em;
    },
    Nj: function () {
        return eN;
    },
    OG: function () {
        return e6;
    },
    PM: function () {
        return ec;
    },
    Qe: function () {
        return B;
    },
    Rs: function () {
        return eu;
    },
    U3: function () {
        return J;
    },
    UZ: function () {
        return eD;
    },
    V$: function () {
        return e4;
    },
    WP: function () {
        return $;
    },
    Xh: function () {
        return es;
    },
    Xv: function () {
        return eE;
    },
    ZZ: function () {
        return V;
    },
    _D: function () {
        return F;
    },
    _j: function () {
        return e5;
    },
    b7: function () {
        return eW;
    },
    dh: function () {
        return W;
    },
    f2: function () {
        return eM;
    },
    fY: function () {
        return e2;
    },
    gI: function () {
        return e3;
    },
    hQ: function () {
        return en;
    },
    iQ: function () {
        return z;
    },
    il: function () {
        return eY;
    },
    lQ: function () {
        return H;
    },
    o9: function () {
        return ew;
    },
    oo: function () {
        return eS;
    },
    pO: function () {
        return eR;
    },
    q6: function () {
        return q;
    },
    q8: function () {
        return eQ;
    },
    si: function () {
        return ez;
    },
    t2: function () {
        return ed;
    },
    tF: function () {
        return Y;
    },
    u7: function () {
        return tn;
    },
    vQ: function () {
        return ev;
    },
    vR: function () {
        return eT;
    },
    xn: function () {
        return ep;
    },
    yH: function () {
        return te;
    },
    yI: function () {
        return er;
    },
    ys: function () {
        return eb;
    },
    zE: function () {
        return eh;
    },
    zK: function () {
        return ex;
    },
    zi: function () {
        return K;
    }
});
var i = r(627341);
var a = r(47120);
var s = r(411104);
var o = r(571269);
var l = r(298267);
var u = r(653041);
var c = r(991998),
    d = r(392711);
var f = r(278074),
    _ = r(754700),
    h = r(551910),
    p = r(887003),
    m = r(742635),
    g = r(570140),
    E = r(230711),
    v = r(782568);
r(597688);
var I = r(231757);
r(706454);
var T = r(572004),
    b = r(70956),
    y = r(630388),
    S = r(823379),
    A = r(49012),
    N = r(960048),
    C = r(617136),
    R = r(272008),
    O = r(569984),
    D = r(497505),
    L = r(566078),
    x = r(312046),
    w = r(46140),
    P = r(981631),
    M = r(701488),
    k = r(388032);
let U = 2592000000;
function B(e) {
    try {
        return (0, f.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (r) {
        var n;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (n = e.config) || void 0 === n ? void 0 : n.config_version, "'"), r), !1;
    }
}
let G = (e) => e.application_id === M.Ev || e.platform === P.M7m.XBOX,
    Z = (e) => e.platform === P.M7m.PS4 || e.platform === P.M7m.PS5;
function F(e, n) {
    if (null == e) return !1;
    let r = e.name.toLowerCase(),
        i = L.r.build(n.config).application.name.toLowerCase();
    return G(e) || Z(e) ? r === i : null != e.application_id && j(e.application_id, n);
}
function V(e, n) {
    for (let [r, i] of e) if (F(n, i) && !K(i)) return i;
}
function j(e, n) {
    return null != L.r.build(n.config).application.ids.find((n) => n === e);
}
function H(e, n) {
    let r;
    for (let [i, a] of e)
        if (j(n, a) && !K(a)) {
            r = a;
            break;
        }
    return r;
}
function Y(e, n) {
    let r = H(e, n.applicationId);
    if (null != r) return r;
    for (let [n, r] of e) if (!K(r) && eL(r)) return r;
}
function W(e, n) {
    return Array.from(e.values()).filter((e) => j(n, e) && !K(e) && eN({ quest: e }));
}
function K(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function z(e) {
    if (!K(e)) return !1;
    let n = Date.now() - U,
        r = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(r <= n) && !0;
}
function q(e) {
    return (0, f.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, x.Q)(e))
        .exhaustive();
}
function Q(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at
          };
}
function X(e) {
    let n = {};
    for (let [r, i] of Object.entries(e))
        n[r] = {
            eventName: i.event_name,
            value: i.value,
            updatedAt: i.updated_at,
            completedAt: i.completed_at,
            heartbeat: Q(i.heartbeat)
        };
    return n;
}
function J(e) {
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
        progress: X(e.progress)
    };
}
function $(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: q(e.config),
        userStatus: null == e.user_status ? null : J(e.user_status),
        targetedContent: e.targeted_content
    };
}
function ee(e) {
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
function et(e) {
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
        rewards: e.rewards.map(ee),
        cosponsorMetadata: (0, x.s)(e.cosponsor_metadata)
    };
}
function en(e) {
    return {
        id: e.id,
        config: et(e.config),
        userStatus: null == e.user_status ? null : J(e.user_status)
    };
}
function er(e) {
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
function ei(e) {
    if ((null == e ? void 0 : e.quest_rewards) == null) return null;
    let n = e.quest_rewards;
    switch (n.reward.tag) {
        case p.w.IN_GAME:
            return { questRewards: { reward: { tag: n.reward.tag } } };
        case p.w.REWARD_CODE:
            return {
                questRewards: {
                    reward: {
                        tag: n.reward.tag,
                        rewardCode: er(n.reward.reward_code)
                    }
                }
            };
    }
}
function ea(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: ei(e.tenant_metadata),
        consumed: e.consumed
    };
}
function es(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ea),
        errors: e.errors
    };
}
function eo(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target
    };
}
function el(e) {
    let n = {};
    for (let [r, i] of Object.entries(e.tasks)) n[r] = eo(i);
    return {
        tasks: n,
        joinOperator: e.join_operator
    };
}
let eu = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function ec(e, n, r) {
    let i = n.get(r);
    if (null == i) return;
    let a = e.get(i.id);
    if (null != a && !K(a)) return a;
}
let ed = (e) => {
    switch (e) {
        case D.y$.XBOX:
            return k.intl.string(k.t.G84UWV);
        case D.y$.PLAYSTATION:
            return k.intl.string(k.t['6IeKx8']);
        case D.y$.SWITCH:
            return k.intl.string(k.t['1pp0sr']);
        case D.y$.PC:
            return k.intl.string(k.t['YK+wUl']);
        case D.y$.CROSS_PLATFORM:
            return k.intl.string(k.t.UWVbzc);
    }
};
function ef(e) {
    var n, r;
    let { quest: i, taskDetails: a, thirdPartyTaskDetails: s } = e;
    if ((null === (n = i.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return k.intl.string(k.t.BzFeTE);
    if ((null === (r = i.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null) {
        let { percentComplete: e } = a,
            n = null != s ? s.completedRatio : e;
        return n >= 0.75 ? k.intl.string(k.t.gvCR4O) : n >= 0.45 && n <= 0.55 ? k.intl.string(k.t.JNx8sL) : n > 0 ? k.intl.string(k.t.JMbfnZ) : k.intl.string(k.t['7e5k7O']);
    }
    return k.intl.formatToPlainString(k.t.EQa7oq, { questName: i.config.messages.questName });
}
function e_(e) {
    return Object.keys(w.a_).includes(D.jn[e]);
}
function eh(e, n) {
    if (!e_(n)) return !1;
    let r = D.jn[n];
    return (0, y.yE)(e.dismissedQuestContent, w.a_[r]);
}
function ep(e) {
    let n = e.rewardsConfig.rewards.find((e) => e.type === p.w.COLLECTIBLE);
    return (null == n ? void 0 : n.type) === p.w.COLLECTIBLE ? n : null;
}
function em(e) {
    let n = ep(e);
    if (null == n || !('expiresAt' in n) || null == n.expiresAt) return null;
    let r = new Date(e.expiresAt),
        i = new Date(n.expiresAt),
        a = (0, c.Z)(i, r),
        s = Math.floor(a / 30) + (a % 30 >= 25 ? 1 : 0);
    if (s >= 12) {
        let e = Math.floor(s / 12);
        return k.intl.formatToPlainString(k.t.PClsr6, { years: e });
    }
    if (s > 0) return k.intl.formatToPlainString(k.t.kridzM, { months: s });
    {
        let e = (0, c.Z)(i, r);
        if (!(e >= 7)) return k.intl.formatToPlainString(k.t.k2UNz8, { days: e });
        {
            let n = Math.ceil(e / 7);
            return k.intl.formatToPlainString(k.t.EmoBDw, { weeks: n });
        }
    }
}
function eg(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === p.w.FRACTIONAL_PREMIUM);
}
function eE(e) {
    return null != ep(e);
}
function ev(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === p.w.IN_GAME);
}
function eI(e) {
    var n;
    return null !== (n = e.rewardsConfig.rewards.find((e) => e.type === p.w.IN_GAME)) && void 0 !== n ? n : null;
}
function eT(e, n) {
    return e.targetedContent.includes(n);
}
function eb(e, n) {
    N.Z.captureException(e, {
        ...n,
        tags: {
            ...(null == n ? void 0 : n.tags),
            app_context: 'quests'
        }
    });
}
function ey(e, n) {
    if (null == n || null == e) return null;
    for (let r of n) {
        let n = V(e, r);
        if (null != n) return n;
    }
    return null;
}
function eS(e) {
    let {
            quest: { config: n }
        } = e,
        r = n.rewardsConfig;
    return r.assignmentMethod === h.j.TIERED && r.rewards.length > 0 && r.rewards.every((e) => e.type === p.w.REWARD_CODE);
}
function eA(e) {
    return e.taskConfig.type === m.L.FIRST_PARTY && null != e.taskConfig.tasks[_.X.PLAY_ON_DESKTOP];
}
function eN(e) {
    let { quest: n } = e;
    return eA(n.config);
}
function eC(e) {
    let { quest: n } = e;
    return n.config.taskConfig.type === m.L.FIRST_PARTY && null != n.config.taskConfig.tasks[_.X.STREAM_ON_DESKTOP];
}
function eR(e) {
    return e.config.taskConfig.type === m.L.FIRST_PARTY && null != e.config.taskConfig.tasks[_.X.PLAY_ACTIVITY];
}
function eO(e) {
    return null != e && eN({ quest: e });
}
function eD(e, n) {
    return L.r.build(n.config).application.id === e;
}
function eL(e) {
    let n = L.r.build(e.config).application.id;
    return eR(e) && n === w.Ts;
}
function ex(e, n) {
    return L.r.build(e.config).features.has(n);
}
function ew(e) {
    let { quest: n, idx: r } = e;
    if (null == r) return null;
    let i = n.config.rewardsConfig.rewards[r];
    return i.type === p.w.REWARD_CODE ? i : null;
}
function eP(e, n) {
    let r = L.r.build(e.config).application.link;
    (0, A.q)({
        href: r,
        onConfirm: () => {
            (0, C._3)({
                questId: e.id,
                questContent: n.content,
                questContentCTA: n.ctaContent,
                questContentPosition: n.position
            }),
                (0, v.Z)(r);
        }
    });
}
let eM = (e, n) => {
        (0, C._3)({
            questId: e,
            questContent: n.content,
            questContentCTA: n.ctaContent,
            questContentPosition: n.position
        }),
            (0, T.JG)(eu(e));
    },
    ek = (e, n) => (e > 0 ? (0, d.floor)(Math.min(n / e, 1), 4) : 0),
    eU = (e) => e$(e) || O.Z.isProgressingOnDesktop(e.id),
    eB = (e, n) => {
        var r, i, a, s;
        let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (a = s.progress) || void 0 === a ? void 0 : null === (i = a[n.eventName]) || void 0 === i ? void 0 : null === (r = i.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt;
        if (null == o || !eU(e)) return 0;
        let l = Date.now() - new Date(o).valueOf();
        return (0, d.floor)(l / b.Z.Millis.SECOND, 2);
    },
    eG = (e, n) => {
        var r, i, a, s, o;
        let l = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : r[n.eventName],
            u = null !== (o = null !== (s = null == l ? void 0 : l.value) && void 0 !== s ? s : null === (a = e.userStatus) || void 0 === a ? void 0 : a.streamProgressSeconds) && void 0 !== o ? o : 0;
        if (eQ(e)) {
            let r = O.Z.getOptimisticProgress(e.id, n.eventName);
            return null == r || r < u ? u : r;
        }
        return u + eB(e, n);
    },
    eZ = 0.99,
    eF = (e, n) => {
        var r;
        let i = n.target;
        if ((null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null) return i;
        let a = Math.min(i * eZ, eG(e, n));
        return Math.max((0, d.floor)(a, 2), 0);
    },
    eV = (e) => {
        var n, r;
        let { quest: i, taskType: a, includeTaskTypes: s = _.T.ALL } = e,
            o = i.config.taskConfig;
        if (o.type !== m.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(o.type, '!'));
        let l = null != a ? a : null === (n = Object.values(o.tasks).filter((e) => s.has(e.eventName))[0]) || void 0 === n ? void 0 : n.eventName,
            u = null !== (r = o.tasks[l]) && void 0 !== r ? r : o.tasks[_.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error('No task with type '.concat(a, ' found for quest ').concat(i.id, '!'));
        let c = u.target,
            d = eF(i, u);
        return {
            progressSeconds: d,
            targetSeconds: c,
            targetMinutes: Math.round(c / b.Z.Seconds.MINUTE),
            percentComplete: ek(c, d),
            taskType: l
        };
    },
    ej = (e) => (_.T.ALL.has(e) ? e : null),
    eH = (e) => {
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
            .filter(S.lm)) {
            let n = ej(e.eventName);
            if (null != n) {
                if (null == a ? void 0 : a.has(n))
                    return eV({
                        quest: i,
                        taskType: n,
                        includeTaskTypes: a
                    });
            }
        }
        return eV({
            quest: i,
            includeTaskTypes: a
        });
    },
    eY = (e, n) => {
        if (e.config.taskConfig.type !== m.L.FIRST_PARTY)
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: _.X.STREAM_ON_DESKTOP
            };
        if (eq(e))
            return eH({
                quest: e,
                includeTaskTypes: null != n ? n : e$(e) ? _.T.CONSOLE : _.T.ALL
            });
        if (eQ(e))
            return eV({
                quest: e,
                taskType: _.X.WATCH_VIDEO
            });
        if (eO(e))
            return eV({
                quest: e,
                taskType: _.X.PLAY_ON_DESKTOP
            });
        if (eR(e))
            return eV({
                quest: e,
                taskType: _.X.PLAY_ACTIVITY
            });
        else
            return eV({
                quest: e,
                taskType: _.X.STREAM_ON_DESKTOP
            });
    };
function eW(e) {
    var n, r, i, a;
    if (e.config.taskConfig.type !== m.L.THIRD_PARTY || 0 === Object.keys(e.config.taskConfig.tasks).length) return null;
    let s = Object.keys(e.config.taskConfig.tasks)[0],
        o = e.config.taskConfig.tasks[s],
        l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
        u = ek(o.target, l);
    return {
        title: o.title,
        description: o.description,
        target: o.target,
        progress: l,
        completedRatio: u
    };
}
let eK = (e) => (n) => e.some((e) => null != n.config.taskConfig.tasks[e]);
function ez(e) {
    let n = e.targetSeconds - e.progressSeconds;
    return {
        minutes: Math.floor(n / 60),
        seconds: Math.floor(n % 60)
    };
}
let eq = eK([_.X.PLAY_ON_XBOX, _.X.PLAY_ON_PLAYSTATION]),
    eQ = eK([_.X.WATCH_VIDEO]);
function eX(e) {
    return eq(e);
}
let eJ = (e, n) => {
    var r, i;
    let a = null == e ? void 0 : null === (i = e.progress[n]) || void 0 === i ? void 0 : null === (r = i.heartbeat) || void 0 === r ? void 0 : r.expiresAt;
    if (null == a) return !1;
    let s = new Date(a).valueOf();
    return !isNaN(s) && s > Date.now();
};
function e$(e) {
    return null != e.userStatus && (eJ(e.userStatus, _.X.PLAY_ON_XBOX) || eJ(e.userStatus, _.X.PLAY_ON_PLAYSTATION));
}
function e0(e) {
    return !!eQ(e) && (0, r(952265).nf)(tn(e.id));
}
function e1() {
    E.Z.open(P.oAB.CONNECTIONS);
}
function e2(e, n) {
    let { platformType: r, quest: i } = e;
    (0, C._3)({
        questId: i.id,
        questContent: n.content,
        questContentCTA: n.ctaContent
    }),
        (0, I.Z)({
            platformType: r,
            location: n.ctaContent
        });
}
function e3(e, n) {
    let { quest: r } = e;
    (0, C._3)({
        questId: r.id,
        questContent: n.content,
        questContentPosition: n.position,
        questContentRowIndex: n.rowIndex,
        questContentCTA: n.ctaContent
    });
    let i = tt(r);
    if (1 === i.length) return (0, I.Z)({ platformType: i.at(0) });
    g.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, I.Z)({ platformType: e }),
        includedPlatformTypes: new Set(i)
    });
}
function e4(e, n) {
    let { quest: r } = e;
    (0, C._3)({
        questId: r.id,
        questContent: n.content,
        questContentPosition: n.position,
        questContentCTA: n.ctaContent
    }),
        e1();
}
function e6() {
    return window.location.pathname.startsWith(P.Z5c.QUEST_HOME);
}
function e5(e) {
    return 'xbox' === e.connected_account_type ? P.ABu.XBOX : P.ABu.PLAYSTATION;
}
function e7(e) {
    return e5(e) === P.ABu.XBOX ? k.t.mytEv7 : k.t.iDiwb2;
}
function e8(e) {
    var n, r, i, a;
    let { quest: s, rewardCode: o, selectedPlatformType: l, sharedQuestFields: u } = e,
        c = eS({ quest: s }),
        d = null != l ? l : null == o ? void 0 : o.platform,
        f = c
            ? ew({
                  quest: s,
                  idx: null !== (i = null == o ? void 0 : o.tier) && void 0 !== i ? i : null === (n = s.userStatus) || void 0 === n ? void 0 : n.claimedTier
              })
            : null,
        _ = null !== (a = null == f ? void 0 : null === (r = f.messages) || void 0 === r ? void 0 : r.redemptionInstructionsByPlatform) && void 0 !== a ? a : u.defaultRewardRedemptionInstructionsByPlatform;
    return null != d ? _[d] : void 0;
}
function e9(e) {
    let { isTargetedDisclosure: n, gamePublisher: r, gameTitle: i, cosponsorName: a } = e;
    return n
        ? null == a
            ? k.intl.formatToPlainString(k.t.Piihy8, { gamePublisher: r })
            : k.intl.formatToPlainString(k.t.DV47Gx, {
                  gamePublisher: r,
                  cosponsorName: a
              })
        : k.intl.formatToPlainString(k.t.tOWwxM, {
              gamePublisher: r,
              gameTitle: i
          });
}
function te(e) {
    let n = eN({ quest: e }) || eC({ quest: e }),
        r = eq(e),
        i = [];
    return n && i.push(w.cd.DESKTOP), r && i.push(w.cd.CONSOLE), i;
}
function tt(e) {
    let n = Object.keys(e.config.taskConfig.tasks),
        r = [];
    for (let e of n)
        switch (e) {
            case _.X.PLAY_ON_XBOX:
                r.push(P.ABu.XBOX);
                break;
            case _.X.PLAY_ON_PLAYSTATION:
                r.push(P.ABu.PLAYSTATION);
        }
    return r;
}
function tn(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function tr(e) {
    let n = eQ(e),
        r = eR(e);
    return n || r;
}
function ti(e, n) {
    var r, i;
    if (!K(e) && (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null && (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) == null) (0, R.cT)(e.id, n);
}
