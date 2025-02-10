n.d(t, {
    $H: () => eA,
    $J: () => eW,
    AV: () => es,
    B3: () => e8,
    BM: () => eq,
    Bg: () => ed,
    Bz: () => ez,
    C1: () => e3,
    C9: () => e2,
    Dr: () => eb,
    FE: () => eO,
    FI: () => tt,
    Fs: () => e4,
    GN: () => eo,
    Gd: () => te,
    Jg: () => ev,
    K: () => eh,
    KM: () => eN,
    Kr: () => ec,
    LM: () => em,
    Nj: () => eT,
    OG: () => e0,
    PM: () => er,
    Qe: () => w,
    Rs: () => ei,
    U3: () => K,
    V$: () => e$,
    WP: () => z,
    Xh: () => et,
    Xv: () => e_,
    ZZ: () => G,
    Zp: () => tn,
    _D: () => U,
    _j: () => e1,
    _p: () => e7,
    b7: () => eF,
    dh: () => F,
    f$: () => e5,
    f2: () => eD,
    fY: () => eX,
    gI: () => eJ,
    hQ: () => X,
    iQ: () => j,
    il: () => eZ,
    lQ: () => Z,
    o9: () => eR,
    oo: () => ey,
    pO: () => eS,
    q6: () => H,
    q8: () => eY,
    si: () => ej,
    t2: () => ea,
    u7: () => e9,
    vQ: () => ep,
    vR: () => eg,
    xN: () => ef,
    xn: () => eu,
    yH: () => e6,
    yI: () => J,
    ys: () => eE,
    zE: () => el,
    zK: () => eC,
    zi: () => V
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
    T = n(272008),
    b = n(569984),
    S = n(497505),
    A = n(75137),
    N = n(566078),
    C = n(312046),
    R = n(46140),
    O = n(981631),
    D = n(701488),
    L = n(388032);
let x = 2592000000,
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
    for (let [n, i] of e) if (U(t, i) && !V(i)) return i;
}
function B(e, t) {
    return null != N.r.build(t.config).application.ids.find((t) => t === e);
}
function Z(e, t) {
    let n;
    for (let [i, r] of e)
        if (B(t, r) && !V(r)) {
            n = r;
            break;
        }
    return n;
}
function F(e, t) {
    return Array.from(e.values()).filter((e) => B(t, e) && !V(e) && eT({ quest: e }));
}
function V(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function j(e) {
    if (!V(e)) return !1;
    let t = Date.now() - x,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function H(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, C.Q)(e))
        .exhaustive();
}
function Y(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at
          };
}
function W(e) {
    let t = {};
    for (let [n, i] of Object.entries(e))
        t[n] = {
            eventName: i.event_name,
            value: i.value,
            updatedAt: i.updated_at,
            completedAt: i.completed_at,
            heartbeat: Y(i.heartbeat)
        };
    return t;
}
function K(e) {
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
        progress: W(e.progress)
    };
}
function z(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: H(e.config),
        userStatus: null == e.user_status ? null : K(e.user_status),
        targetedContent: e.targeted_content
    };
}
function q(e) {
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
function Q(e) {
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
        rewards: e.rewards.map(q),
        cosponsorMetadata: (0, C.s)(e.cosponsor_metadata)
    };
}
function X(e) {
    return {
        id: e.id,
        config: Q(e.config),
        userStatus: null == e.user_status ? null : K(e.user_status)
    };
}
function J(e) {
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
function $(e) {
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
                        rewardCode: J(t.reward.reward_code)
                    }
                }
            };
    }
}
function ee(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: $(e.tenant_metadata),
        consumed: e.consumed
    };
}
function et(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ee),
        errors: e.errors
    };
}
function en(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target
    };
}
let ei = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function er(e, t, n) {
    let i = t.get(n);
    if (null == i) return;
    let r = e.get(i.quest.id);
    if (null != r && !V(r)) return r;
}
let ea = (e) => {
    switch (e) {
        case S.y$.XBOX:
            return L.intl.string(L.t.G84UWV);
        case S.y$.PLAYSTATION:
            return L.intl.string(L.t['6IeKx8']);
        case S.y$.SWITCH:
            return L.intl.string(L.t['1pp0sr']);
        case S.y$.PC:
            return L.intl.string(L.t['YK+wUl']);
        case S.y$.CROSS_PLATFORM:
            return L.intl.string(L.t.UWVbzc);
    }
};
function es(e) {
    var t, n;
    let { quest: i, taskDetails: r, thirdPartyTaskDetails: a } = e;
    if ((null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return L.intl.string(L.t.BzFeTE);
    if ((null === (n = i.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = r,
            t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? L.intl.string(L.t.gvCR4O) : t >= 0.45 && t <= 0.55 ? L.intl.string(L.t.JNx8sL) : t > 0 ? L.intl.string(L.t.JMbfnZ) : L.intl.string(L.t['7e5k7O']);
    }
    return L.intl.formatToPlainString(L.t.EQa7oq, { questName: i.config.messages.questName });
}
function eo(e) {
    return Object.keys(R.a_).includes(S.jn[e]);
}
function el(e, t) {
    if (!eo(t)) return !1;
    let n = S.jn[t];
    return (0, g.yE)(e.dismissedQuestContent, R.a_[n]);
}
function eu(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === u.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === u.w.COLLECTIBLE ? t : null;
}
function ec(e) {
    let t = eu(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        r = new Date(t.expiresAt),
        a = (0, i.Z)(r, n),
        s = Math.floor(a / 30) + (a % 30 >= 25 ? 1 : 0);
    if (s >= 12) {
        let e = Math.floor(s / 12);
        return L.intl.formatToPlainString(L.t.PClsr6, { years: e });
    }
    if (s > 0) return L.intl.formatToPlainString(L.t.kridzM, { months: s });
    {
        let e = (0, i.Z)(r, n);
        if (!(e >= 7)) return L.intl.formatToPlainString(L.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return L.intl.formatToPlainString(L.t.EmoBDw, { weeks: t });
        }
    }
}
function ed(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === u.w.FRACTIONAL_PREMIUM);
}
function ef(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === u.w.VIRTUAL_CURRENCY);
}
function e_(e) {
    return null != eu(e);
}
function ep(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === u.w.IN_GAME);
}
function eh(e) {
    var t;
    return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === u.w.IN_GAME)) && void 0 !== t ? t : null;
}
function em(e) {
    var t;
    let n = e.rewardsConfig.rewards.find((e) => e.type === u.w.VIRTUAL_CURRENCY);
    return null !== (t = null == n ? void 0 : n.orbQuantity) && void 0 !== t ? t : null;
}
function eg(e, t) {
    return e.targetedContent.includes(t);
}
function eE(e, t) {
    y.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'quests'
        }
    });
}
function ev(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = G(e, n);
        if (null != t) return t;
    }
    return null;
}
function ey(e) {
    let {
            quest: { config: t }
        } = e,
        n = t.rewardsConfig;
    return n.assignmentMethod === o.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === u.w.REWARD_CODE);
}
function eI(e) {
    return e.taskConfig.type === c.L.FIRST_PARTY && null != e.taskConfig.tasks[s.X.PLAY_ON_DESKTOP];
}
function eT(e) {
    let { quest: t } = e;
    return eI(t.config);
}
function eb(e) {
    let { quest: t } = e;
    return t.config.taskConfig.type === c.L.FIRST_PARTY && null != t.config.taskConfig.tasks[s.X.STREAM_ON_DESKTOP];
}
function eS(e) {
    return e.config.taskConfig.type === c.L.FIRST_PARTY && null != e.config.taskConfig.tasks[s.X.PLAY_ACTIVITY];
}
function eA(e) {
    return null != e && eT({ quest: e });
}
function eN(e) {
    let t = N.r.build(e.config).application.id;
    return eS(e) && t === R.Ts;
}
function eC(e, t) {
    return N.r.build(e.config).features.has(t);
}
function eR(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let i = t.config.rewardsConfig.rewards[n];
    return i.type === u.w.REWARD_CODE ? i : null;
}
function eO(e, t) {
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
let eD = (e, t) => {
        (0, I._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId
        }),
            (0, h.JG)(ei(e));
    },
    eL = (e, t) => (e > 0 ? (0, r.floor)(Math.min(t / e, 1), 4) : 0),
    ex = (e) => ez(e) || b.Z.isProgressingOnDesktop(e.id),
    eP = (e, t) => {
        var n, i, a, s;
        let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (a = s.progress) || void 0 === a ? void 0 : null === (i = a[t.eventName]) || void 0 === i ? void 0 : null === (n = i.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == o || !ex(e)) return 0;
        let l = Date.now() - new Date(o).valueOf();
        return (0, r.floor)(l / m.Z.Millis.SECOND, 2);
    },
    ew = (e, t) => {
        var n, i, r, a, s;
        let o = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (n = i.progress) || void 0 === n ? void 0 : n[t.eventName],
            l = null !== (s = null !== (a = null == o ? void 0 : o.value) && void 0 !== a ? a : null === (r = e.userStatus) || void 0 === r ? void 0 : r.streamProgressSeconds) && void 0 !== s ? s : 0;
        if (eY(e)) {
            let n = b.Z.getOptimisticProgress(e.id, t.eventName);
            return null == n || n < l ? l : n;
        }
        return l + eP(e, t);
    },
    eM = 0.99,
    ek = (e, t) => {
        var n;
        let i = t.target;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return i;
        let a = Math.min(i * eM, ew(e, t));
        return Math.max((0, r.floor)(a, 2), 0);
    },
    eU = (e) => {
        var t, n;
        let { quest: i, taskType: r, includeTaskTypes: a = s.T.ALL } = e,
            o = i.config.taskConfig;
        if (o.type !== c.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(o.type, '!'));
        let l = null != r ? r : null === (t = Object.values(o.tasks).filter((e) => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
            u = null !== (n = o.tasks[l]) && void 0 !== n ? n : o.tasks[s.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error('No task with type '.concat(r, ' found for quest ').concat(i.id, '!'));
        let d = u.target,
            f = ek(i, u);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / m.Z.Seconds.MINUTE),
            percentComplete: eL(d, f),
            taskType: l
        };
    },
    eG = (e) => (s.T.ALL.has(e) ? e : null),
    eB = (e) => {
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
            let t = eG(e.eventName);
            if (null != t && (null == r ? void 0 : r.has(t)))
                return eU({
                    quest: i,
                    taskType: t,
                    includeTaskTypes: r
                });
        }
        return eU({
            quest: i,
            includeTaskTypes: r
        });
    },
    eZ = (e, t) =>
        e.config.taskConfig.type !== c.L.FIRST_PARTY
            ? {
                  progressSeconds: 0,
                  targetSeconds: 1,
                  targetMinutes: 1,
                  percentComplete: 0,
                  taskType: s.X.STREAM_ON_DESKTOP
              }
            : eH(e)
              ? eB({
                    quest: e,
                    includeTaskTypes: null != t ? t : ez(e) ? s.T.CONSOLE : s.T.ALL
                })
              : eY(e)
                ? eU({
                      quest: e,
                      taskType: s.X.WATCH_VIDEO
                  })
                : eA(e)
                  ? eU({
                        quest: e,
                        taskType: s.X.PLAY_ON_DESKTOP
                    })
                  : eS(e)
                    ? eU({
                          quest: e,
                          taskType: s.X.PLAY_ACTIVITY
                      })
                    : eU({
                          quest: e,
                          taskType: s.X.STREAM_ON_DESKTOP
                      });
function eF(e) {
    var t, n, i, r;
    if (e.config.taskConfig.type !== c.L.THIRD_PARTY || 0 === Object.keys(e.config.taskConfig.tasks).length) return null;
    let a = Object.keys(e.config.taskConfig.tasks)[0],
        s = e.config.taskConfig.tasks[a],
        o = null !== (r = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (n = i.progress) || void 0 === n ? void 0 : null === (t = n[a]) || void 0 === t ? void 0 : t.value) && void 0 !== r ? r : 0,
        l = eL(s.target, o);
    return {
        title: s.title,
        description: s.description,
        target: s.target,
        progress: o,
        completedRatio: l
    };
}
let eV = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]);
function ej(e) {
    let t = e.targetSeconds - e.progressSeconds;
    return {
        minutes: Math.floor(t / 60),
        seconds: Math.floor(t % 60)
    };
}
let eH = eV([s.X.PLAY_ON_XBOX, s.X.PLAY_ON_PLAYSTATION]),
    eY = eV([s.X.WATCH_VIDEO]);
function eW(e) {
    return eH(e);
}
let eK = (e, t) => {
    var n, i;
    let r = null == e ? void 0 : null === (i = e.progress[t]) || void 0 === i ? void 0 : null === (n = i.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
    if (null == r) return !1;
    let a = new Date(r).valueOf();
    return !isNaN(a) && a > Date.now();
};
function ez(e) {
    return null != e.userStatus && (eK(e.userStatus, s.X.PLAY_ON_XBOX) || eK(e.userStatus, s.X.PLAY_ON_PLAYSTATION));
}
function eq(e) {
    return !!eY(e) && (0, n(952265).nf)(e9(e.id));
}
function eQ() {
    f.Z.open(O.oAB.CONNECTIONS);
}
function eX(e, t) {
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
function eJ(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    });
    let i = e8(n);
    if (1 === i.length) return (0, p.Z)({ platformType: i.at(0) });
    d.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, p.Z)({ platformType: e }),
        includedPlatformTypes: new Set(i)
    });
}
function e$(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        eQ();
}
function e0() {
    return window.location.pathname.startsWith(O.Z5c.QUEST_HOME);
}
function e1(e) {
    return 'xbox' === e.connected_account_type ? O.ABu.XBOX : O.ABu.PLAYSTATION;
}
function e2(e) {
    return e1(e) === O.ABu.XBOX ? L.t.mytEv7 : L.t.iDiwb2;
}
function e3(e) {
    var t, n, i, r;
    let { quest: a, rewardCode: s, selectedPlatformType: o, sharedQuestFields: l } = e,
        u = ey({ quest: a }),
        c = null != o ? o : null == s ? void 0 : s.platform,
        d = u
            ? eR({
                  quest: a,
                  idx: null !== (i = null == s ? void 0 : s.tier) && void 0 !== i ? i : null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        f = null !== (r = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== r ? r : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != c ? f[c] : void 0;
}
function e4(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: i, cosponsorName: r } = e;
    return t
        ? null == r
            ? L.intl.formatToPlainString(L.t.Piihy8, { gamePublisher: n })
            : L.intl.formatToPlainString(L.t.DV47Gx, {
                  gamePublisher: n,
                  cosponsorName: r
              })
        : L.intl.formatToPlainString(L.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: i
          });
}
function e6(e) {
    let t = eT({ quest: e }) || eb({ quest: e }),
        n = eH(e),
        i = [];
    return t && i.push(R.cd.DESKTOP), n && i.push(R.cd.CONSOLE), i;
}
function e5(e) {
    var t;
    let n = null === (t = eu(e)) || void 0 === t ? void 0 : t.expirationMode;
    return !!(0, A.U)() && !!n && P.has(n);
}
function e7(e) {
    var t;
    return e5(e) && (null === (t = eu(e)) || void 0 === t ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function e8(e) {
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
function e9(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function te(e) {
    let t = eY(e),
        n = eS(e);
    return t || n;
}
function tt(e, t) {
    var n, i;
    !V(e) && (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null === (i = e.userStatus) || void 0 === i ? void 0 : i.completedAt) == null && (0, T.cT)(e.id, t);
}
function tn(e) {
    return {
        [S.jn.QUEST_BAR]: S.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [S.jn.QUEST_BAR_V2]: S.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [S.jn.QUEST_BAR_MOBILE]: S.Ok.MOBILE_HOME_DOCK_AREA
    }[e];
}
