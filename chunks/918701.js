n.d(t, {
    $H: () => eN,
    $J: () => ez,
    AV: () => eo,
    B3: () => te,
    BM: () => eX,
    Bg: () => ef,
    Bz: () => eQ,
    C1: () => e6,
    C9: () => e4,
    Dr: () => eS,
    FE: () => ex,
    FI: () => ti,
    Fs: () => e5,
    GN: () => el,
    Gd: () => tn,
    Jg: () => ey,
    K: () => em,
    KM: () => eR,
    Kr: () => ed,
    LM: () => eg,
    Nj: () => eT,
    OG: () => e2,
    PM: () => ea,
    Qe: () => w,
    Rs: () => er,
    U3: () => z,
    UZ: () => eC,
    V$: () => e1,
    WP: () => q,
    Xh: () => en,
    Xv: () => ep,
    ZZ: () => G,
    Zp: () => tr,
    _D: () => U,
    _j: () => e3,
    _p: () => e9,
    b7: () => ej,
    dh: () => V,
    f$: () => e8,
    f2: () => eL,
    fY: () => e$,
    gI: () => e0,
    hQ: () => J,
    iQ: () => H,
    il: () => eV,
    lQ: () => Z,
    o9: () => eD,
    oo: () => eI,
    pO: () => eA,
    q6: () => Y,
    q8: () => eK,
    si: () => eY,
    t2: () => es,
    tF: () => F,
    u7: () => tt,
    vQ: () => eh,
    vR: () => eE,
    xN: () => e_,
    xn: () => ec,
    yH: () => e7,
    yI: () => $,
    ys: () => ev,
    zE: () => eu,
    zK: () => eO,
    zi: () => j
}),
    n(47120),
    n(627341),
    n(411104),
    n(571269),
    n(298267),
    n(653041);
var i = n(991998),
    r = n(392711),
    a = n(278074),
    s = n(754700),
    o = n(551910),
    l = n(34738),
    u = n(887003),
    c = n(742635),
    d = n(570140),
    f = n(230711),
    _ = n(782568);
n(597688);
var p = n(231757);
n(706454);
var h = n(572004),
    m = n(70956),
    g = n(630388),
    E = n(823379),
    v = n(49012),
    y = n(960048),
    I = n(617136),
    b = n(272008),
    T = n(569984),
    S = n(497505),
    A = n(75137),
    N = n(566078),
    C = n(312046),
    R = n(46140),
    O = n(981631),
    D = n(701488),
    x = n(388032);
let L = 2592000000,
    P = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function w(e) {
    try {
        return (0, a.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1;
    }
}
let M = (e) => e.application_id === D.Ev || e.platform === O.M7m.XBOX,
    k = (e) => e.platform === O.M7m.PS4 || e.platform === O.M7m.PS5;
function U(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        i = N.r.build(t.config).application.name.toLowerCase();
    return M(e) || k(e) ? n === i : null != e.application_id && B(e.application_id, t);
}
function G(e, t) {
    for (let [n, i] of e) if (U(t, i) && !j(i)) return i;
}
function B(e, t) {
    return null != N.r.build(t.config).application.ids.find((t) => t === e);
}
function Z(e, t) {
    let n;
    for (let [i, r] of e)
        if (B(t, r) && !j(r)) {
            n = r;
            break;
        }
    return n;
}
function F(e, t) {
    let n = Z(e, t.applicationId);
    if (null != n) return n;
    for (let [t, n] of e) if (!j(n) && eR(n)) return n;
}
function V(e, t) {
    return Array.from(e.values()).filter((e) => B(t, e) && !j(e) && eT({ quest: e }));
}
function j(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function H(e) {
    if (!j(e)) return !1;
    let t = Date.now() - L,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function Y(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, C.Q)(e))
        .exhaustive();
}
function W(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at
          };
}
function K(e) {
    let t = {};
    for (let [n, i] of Object.entries(e))
        t[n] = {
            eventName: i.event_name,
            value: i.value,
            updatedAt: i.updated_at,
            completedAt: i.completed_at,
            heartbeat: W(i.heartbeat)
        };
    return t;
}
function z(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        enrolledAt: e.enrolled_at,
        completedAt: e.completed_at,
        claimedAt: e.claimed_at,
        claimedTier: null !== (t = e.claimed_tier) && void 0 !== t ? t : null,
        lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
        streamProgressSeconds: e.stream_progress_seconds,
        dismissedQuestContent: e.dismissed_quest_content,
        progress: K(e.progress)
    };
}
function q(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: Y(e.config),
        userStatus: null == e.user_status ? null : z(e.user_status),
        targetedContent: e.targeted_content
    };
}
function Q(e) {
    return {
        skuId: e.sku_id,
        type: e.type,
        name: e.name,
        nameWithArticle: e.name_with_article,
        asset: e.asset,
        assetVideo: e.asset_video,
        collectibleProduct: e.collectible_product,
        orbQuantity: e.orb_quantity
    };
}
function X(e) {
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
        rewards: e.rewards.map(Q),
        cosponsorMetadata: (0, C.s)(e.cosponsor_metadata)
    };
}
function J(e) {
    return {
        id: e.id,
        config: X(e.config),
        userStatus: null == e.user_status ? null : z(e.user_status)
    };
}
function $(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: null !== (t = e.tier) && void 0 !== t ? t : null
    };
}
function ee(e) {
    if ((null == e ? void 0 : e.quest_rewards) == null) return null;
    let t = e.quest_rewards;
    switch (t.reward.tag) {
        case u.w.IN_GAME:
            return { questRewards: { reward: { tag: t.reward.tag } } };
        case u.w.REWARD_CODE:
            return {
                questRewards: {
                    reward: {
                        tag: t.reward.tag,
                        rewardCode: $(t.reward.reward_code)
                    }
                }
            };
    }
}
function et(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: ee(e.tenant_metadata),
        consumed: e.consumed
    };
}
function en(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(et),
        errors: e.errors
    };
}
function ei(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target
    };
}
let er = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function ea(e, t, n) {
    let i = t.get(n);
    if (null == i) return;
    let r = e.get(i.quest.id);
    if (null != r && !j(r)) return r;
}
let es = (e) => {
    switch (e) {
        case S.y$.XBOX:
            return x.intl.string(x.t.G84UWV);
        case S.y$.PLAYSTATION:
            return x.intl.string(x.t['6IeKx8']);
        case S.y$.SWITCH:
            return x.intl.string(x.t['1pp0sr']);
        case S.y$.PC:
            return x.intl.string(x.t['YK+wUl']);
        case S.y$.CROSS_PLATFORM:
            return x.intl.string(x.t.UWVbzc);
    }
};
function eo(e) {
    var t, n;
    let { quest: i, taskDetails: r, thirdPartyTaskDetails: a } = e;
    if ((null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return x.intl.string(x.t.BzFeTE);
    if ((null === (n = i.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = r,
            t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? x.intl.string(x.t.gvCR4O) : t >= 0.45 && t <= 0.55 ? x.intl.string(x.t.JNx8sL) : t > 0 ? x.intl.string(x.t.JMbfnZ) : x.intl.string(x.t['7e5k7O']);
    }
    return x.intl.formatToPlainString(x.t.EQa7oq, { questName: i.config.messages.questName });
}
function el(e) {
    return Object.keys(R.a_).includes(S.jn[e]);
}
function eu(e, t) {
    if (!el(t)) return !1;
    let n = S.jn[t];
    return (0, g.yE)(e.dismissedQuestContent, R.a_[n]);
}
function ec(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === u.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === u.w.COLLECTIBLE ? t : null;
}
function ed(e) {
    let t = ec(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        r = new Date(t.expiresAt),
        a = (0, i.Z)(r, n),
        s = Math.floor(a / 30) + (a % 30 >= 25 ? 1 : 0);
    if (s >= 12) {
        let e = Math.floor(s / 12);
        return x.intl.formatToPlainString(x.t.PClsr6, { years: e });
    }
    if (s > 0) return x.intl.formatToPlainString(x.t.kridzM, { months: s });
    {
        let e = (0, i.Z)(r, n);
        if (!(e >= 7)) return x.intl.formatToPlainString(x.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return x.intl.formatToPlainString(x.t.EmoBDw, { weeks: t });
        }
    }
}
function ef(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === u.w.FRACTIONAL_PREMIUM);
}
function e_(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === u.w.VIRTUAL_CURRENCY);
}
function ep(e) {
    return null != ec(e);
}
function eh(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === u.w.IN_GAME);
}
function em(e) {
    var t;
    return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === u.w.IN_GAME)) && void 0 !== t ? t : null;
}
function eg(e) {
    var t;
    let n = e.rewardsConfig.rewards.find((e) => e.type === u.w.VIRTUAL_CURRENCY);
    return null !== (t = null == n ? void 0 : n.orbQuantity) && void 0 !== t ? t : null;
}
function eE(e, t) {
    return e.targetedContent.includes(t);
}
function ev(e, t) {
    y.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'quests'
        }
    });
}
function ey(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = G(e, n);
        if (null != t) return t;
    }
    return null;
}
function eI(e) {
    let {
            quest: { config: t }
        } = e,
        n = t.rewardsConfig;
    return n.assignmentMethod === o.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === u.w.REWARD_CODE);
}
function eb(e) {
    return e.taskConfig.type === c.L.FIRST_PARTY && null != e.taskConfig.tasks[s.X.PLAY_ON_DESKTOP];
}
function eT(e) {
    let { quest: t } = e;
    return eb(t.config);
}
function eS(e) {
    let { quest: t } = e;
    return t.config.taskConfig.type === c.L.FIRST_PARTY && null != t.config.taskConfig.tasks[s.X.STREAM_ON_DESKTOP];
}
function eA(e) {
    return e.config.taskConfig.type === c.L.FIRST_PARTY && null != e.config.taskConfig.tasks[s.X.PLAY_ACTIVITY];
}
function eN(e) {
    return null != e && eT({ quest: e });
}
function eC(e, t) {
    return N.r.build(t.config).application.id === e;
}
function eR(e) {
    let t = N.r.build(e.config).application.id;
    return eA(e) && t === R.Ts;
}
function eO(e, t) {
    return N.r.build(e.config).features.has(t);
}
function eD(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let i = t.config.rewardsConfig.rewards[n];
    return i.type === u.w.REWARD_CODE ? i : null;
}
function ex(e, t) {
    let n = N.r.build(e.config).application.link;
    (0, v.q)({
        href: n,
        onConfirm: () => {
            (0, I._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position,
                impressionId: t.impressionId
            }),
                (0, _.Z)(n);
        }
    });
}
let eL = (e, t) => {
        (0, I._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId
        }),
            (0, h.JG)(er(e));
    },
    eP = (e, t) => (e > 0 ? (0, r.floor)(Math.min(t / e, 1), 4) : 0),
    ew = (e) => eQ(e) || T.Z.isProgressingOnDesktop(e.id),
    eM = (e, t) => {
        var n, i, a, s;
        let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (a = s.progress) || void 0 === a ? void 0 : null === (i = a[t.eventName]) || void 0 === i ? void 0 : null === (n = i.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == o || !ew(e)) return 0;
        let l = Date.now() - new Date(o).valueOf();
        return (0, r.floor)(l / m.Z.Millis.SECOND, 2);
    },
    ek = (e, t) => {
        var n, i, r, a, s;
        let o = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (n = i.progress) || void 0 === n ? void 0 : n[t.eventName],
            l = null !== (s = null !== (a = null == o ? void 0 : o.value) && void 0 !== a ? a : null === (r = e.userStatus) || void 0 === r ? void 0 : r.streamProgressSeconds) && void 0 !== s ? s : 0;
        if (eK(e)) {
            let n = T.Z.getOptimisticProgress(e.id, t.eventName);
            return null == n || n < l ? l : n;
        }
        return l + eM(e, t);
    },
    eU = 0.99,
    eG = (e, t) => {
        var n;
        let i = t.target;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return i;
        let a = Math.min(i * eU, ek(e, t));
        return Math.max((0, r.floor)(a, 2), 0);
    },
    eB = (e) => {
        var t, n;
        let { quest: i, taskType: r, includeTaskTypes: a = s.T.ALL } = e,
            o = i.config.taskConfig;
        if (o.type !== c.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(o.type, '!'));
        let l = null != r ? r : null === (t = Object.values(o.tasks).filter((e) => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
            u = null !== (n = o.tasks[l]) && void 0 !== n ? n : o.tasks[s.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error('No task with type '.concat(r, ' found for quest ').concat(i.id, '!'));
        let d = u.target,
            f = eG(i, u);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.round(d / m.Z.Seconds.MINUTE),
            percentComplete: eP(d, f),
            taskType: l
        };
    },
    eZ = (e) => (s.T.ALL.has(e) ? e : null),
    eF = (e) => {
        var t, n;
        let { quest: i, includeTaskTypes: r = s.T.ALL } = e;
        for (let e of Object.values(null !== (n = null === (t = i.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {})
            .sort((e, t) => {
                var n, i;
                let r = null == e ? void 0 : null === (n = e.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt,
                    a = null == t ? void 0 : null === (i = t.heartbeat) || void 0 === i ? void 0 : i.lastBeatAt;
                return null != r && null != a ? (new Date(r).valueOf() > new Date(a).valueOf() ? -1 : 1) : null == r && null == a && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null ? (new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1) : null != r && null == a ? -1 : 1;
            })
            .filter(E.lm)) {
            let t = eZ(e.eventName);
            if (null != t && (null == r ? void 0 : r.has(t)))
                return eB({
                    quest: i,
                    taskType: t,
                    includeTaskTypes: r
                });
        }
        return eB({
            quest: i,
            includeTaskTypes: r
        });
    },
    eV = (e, t) =>
        e.config.taskConfig.type !== c.L.FIRST_PARTY
            ? {
                  progressSeconds: 0,
                  targetSeconds: 1,
                  targetMinutes: 1,
                  percentComplete: 0,
                  taskType: s.X.STREAM_ON_DESKTOP
              }
            : eW(e)
              ? eF({
                    quest: e,
                    includeTaskTypes: null != t ? t : eQ(e) ? s.T.CONSOLE : s.T.ALL
                })
              : eK(e)
                ? eB({
                      quest: e,
                      taskType: s.X.WATCH_VIDEO
                  })
                : eN(e)
                  ? eB({
                        quest: e,
                        taskType: s.X.PLAY_ON_DESKTOP
                    })
                  : eA(e)
                    ? eB({
                          quest: e,
                          taskType: s.X.PLAY_ACTIVITY
                      })
                    : eB({
                          quest: e,
                          taskType: s.X.STREAM_ON_DESKTOP
                      });
function ej(e) {
    var t, n, i, r;
    if (e.config.taskConfig.type !== c.L.THIRD_PARTY || 0 === Object.keys(e.config.taskConfig.tasks).length) return null;
    let a = Object.keys(e.config.taskConfig.tasks)[0],
        s = e.config.taskConfig.tasks[a],
        o = null !== (r = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (n = i.progress) || void 0 === n ? void 0 : null === (t = n[a]) || void 0 === t ? void 0 : t.value) && void 0 !== r ? r : 0,
        l = eP(s.target, o);
    return {
        title: s.title,
        description: s.description,
        target: s.target,
        progress: o,
        completedRatio: l
    };
}
let eH = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]);
function eY(e) {
    let t = e.targetSeconds - e.progressSeconds;
    return {
        minutes: Math.floor(t / 60),
        seconds: Math.floor(t % 60)
    };
}
let eW = eH([s.X.PLAY_ON_XBOX, s.X.PLAY_ON_PLAYSTATION]),
    eK = eH([s.X.WATCH_VIDEO]);
function ez(e) {
    return eW(e);
}
let eq = (e, t) => {
    var n, i;
    let r = null == e ? void 0 : null === (i = e.progress[t]) || void 0 === i ? void 0 : null === (n = i.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
    if (null == r) return !1;
    let a = new Date(r).valueOf();
    return !isNaN(a) && a > Date.now();
};
function eQ(e) {
    return null != e.userStatus && (eq(e.userStatus, s.X.PLAY_ON_XBOX) || eq(e.userStatus, s.X.PLAY_ON_PLAYSTATION));
}
function eX(e) {
    return !!eK(e) && (0, n(952265).nf)(tt(e.id));
}
function eJ() {
    f.Z.open(O.oAB.CONNECTIONS);
}
function e$(e, t) {
    let { platformType: n, quest: i } = e;
    (0, I._3)({
        questId: i.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        (0, p.Z)({
            platformType: n,
            location: t.ctaContent
        });
}
function e0(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    });
    let i = te(n);
    if (1 === i.length) return (0, p.Z)({ platformType: i.at(0) });
    d.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, p.Z)({ platformType: e }),
        includedPlatformTypes: new Set(i)
    });
}
function e1(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        eJ();
}
function e2() {
    return window.location.pathname.startsWith(O.Z5c.QUEST_HOME);
}
function e3(e) {
    return 'xbox' === e.connected_account_type ? O.ABu.XBOX : O.ABu.PLAYSTATION;
}
function e4(e) {
    return e3(e) === O.ABu.XBOX ? x.t.mytEv7 : x.t.iDiwb2;
}
function e6(e) {
    var t, n, i, r;
    let { quest: a, rewardCode: s, selectedPlatformType: o, sharedQuestFields: l } = e,
        u = eI({ quest: a }),
        c = null != o ? o : null == s ? void 0 : s.platform,
        d = u
            ? eD({
                  quest: a,
                  idx: null !== (i = null == s ? void 0 : s.tier) && void 0 !== i ? i : null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        f = null !== (r = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== r ? r : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != c ? f[c] : void 0;
}
function e5(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: i, cosponsorName: r } = e;
    return t
        ? null == r
            ? x.intl.formatToPlainString(x.t.Piihy8, { gamePublisher: n })
            : x.intl.formatToPlainString(x.t.DV47Gx, {
                  gamePublisher: n,
                  cosponsorName: r
              })
        : x.intl.formatToPlainString(x.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: i
          });
}
function e7(e) {
    let t = eT({ quest: e }) || eS({ quest: e }),
        n = eW(e),
        i = [];
    return t && i.push(R.cd.DESKTOP), n && i.push(R.cd.CONSOLE), i;
}
function e8(e) {
    var t;
    let n = null === (t = ec(e)) || void 0 === t ? void 0 : t.expirationMode;
    return !!(0, A.U)() && !!n && P.has(n);
}
function e9(e) {
    var t;
    return e8(e) && (null === (t = ec(e)) || void 0 === t ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function te(e) {
    let t = Object.keys(e.config.taskConfig.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case s.X.PLAY_ON_XBOX:
                n.push(O.ABu.XBOX);
                break;
            case s.X.PLAY_ON_PLAYSTATION:
                n.push(O.ABu.PLAYSTATION);
        }
    return n;
}
function tt(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function tn(e) {
    let t = eK(e),
        n = eA(e);
    return t || n;
}
function ti(e, t) {
    var n, i;
    !j(e) && (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) == null && (0, b.cT)(e.id, t);
}
function tr(e) {
    return {
        [S.jn.QUEST_BAR]: S.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [S.jn.QUEST_BAR_V2]: S.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [S.jn.QUEST_BAR_MOBILE]: S.Ok.MOBILE_HOME_DOCK_AREA
    }[e];
}
