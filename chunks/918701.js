n.d(t, {
    $H: () => eP,
    $J: () => eJ,
    AV: () => eu,
    B3: () => to,
    BM: () => e1,
    Bg: () => em,
    Bz: () => e0,
    C1: () => te,
    C9: () => e9,
    Dr: () => eC,
    F9: () => tu,
    FE: () => ex,
    FI: () => tl,
    FX: () => ep,
    Fs: () => tt,
    GN: () => ed,
    Gd: () => ts,
    Jg: () => eS,
    K: () => ev,
    KM: () => ew,
    Kr: () => eh,
    LM: () => ey,
    Nj: () => eA,
    OG: () => e5,
    PM: () => el,
    Qe: () => G,
    Rs: () => es,
    U3: () => X,
    V$: () => e6,
    WP: () => J,
    Xh: () => eo,
    Xv: () => eE,
    ZZ: () => Z,
    Zp: () => tc,
    _D: () => V,
    _j: () => e8,
    _p: () => ti,
    b7: () => eY,
    bA: () => td,
    f$: () => tr,
    f2: () => eM,
    fY: () => e3,
    gI: () => e4,
    hQ: () => et,
    iQ: () => K,
    il: () => eW,
    lQ: () => W,
    o9: () => eL,
    oo: () => eT,
    pO: () => eR,
    q6: () => z,
    q8: () => eX,
    t2: () => ec,
    u7: () => ta,
    vQ: () => eb,
    vR: () => eO,
    xN: () => eg,
    xn: () => e_,
    yH: () => tn,
    yI: () => en,
    ys: () => eI,
    zE: () => ef,
    zK: () => eD,
    zi: () => Y
}),
    n(47120),
    n(627341),
    n(266796),
    n(411104),
    n(230036),
    n(571269),
    n(298267),
    n(653041);
var r = n(991998),
    i = n(392711),
    o = n(278074),
    a = n(754700),
    s = n(551910),
    l = n(34738),
    c = n(887003),
    u = n(742635),
    d = n(570140),
    f = n(230711),
    _ = n(782568);
n(597688);
var p = n(231757),
    h = n(706454),
    m = n(572004),
    g = n(70956),
    E = n(630388),
    b = n(823379),
    v = n(49012),
    y = n(960048),
    O = n(617136),
    I = n(272008),
    S = n(569984),
    T = n(497505);
n(306560);
var N = n(75137),
    A = n(566078),
    C = n(312046),
    R = n(46140),
    P = n(981631),
    w = n(701488),
    D = n(388032);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = 2592000000,
    U = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function G(e) {
    try {
        return (0, o.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1;
    }
}
let B = (e) => e.application_id === w.Ev || e.platform === P.M7m.XBOX,
    F = (e) => e.platform === P.M7m.PS4 || e.platform === P.M7m.PS5;
function V(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = A.r.build(t.config).application.name.toLowerCase();
    return B(e) || F(e) ? n === r : null != e.application_id && H(e.application_id, t);
}
function Z(e, t) {
    for (let [n, r] of e) if (V(t, r) && !Y(r)) return r;
}
function H(e, t) {
    return null != A.r.build(t.config).application.ids.find((t) => t === e);
}
function W(e, t) {
    let n;
    for (let [r, i] of e)
        if (H(t, i) && !Y(i)) {
            n = i;
            break;
        }
    return n;
}
function Y(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function K(e) {
    if (!Y(e)) return !1;
    let t = Date.now() - j,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function z(e) {
    return (0, o.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, C.Q)(e))
        .exhaustive();
}
function q(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at
          };
}
function Q(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: q(r.heartbeat)
        };
    return t;
}
function X(e) {
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
        progress: Q(e.progress)
    };
}
function J(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: z(e.config),
        userStatus: null == e.user_status ? null : X(e.user_status),
        targetedContent: e.targeted_content
    };
}
function $(e) {
    return e.type === c.w.VIRTUAL_CURRENCY
        ? {
              skuId: e.sku_id,
              type: e.type,
              name: e.name,
              nameWithArticle: e.name_with_article,
              collectibleProduct: e.collectible_product,
              orbQuantity: e.orb_quantity
          }
        : {
              skuId: e.sku_id,
              type: e.type,
              name: e.name,
              nameWithArticle: e.name_with_article,
              asset: e.asset,
              assetVideo: e.asset_video,
              collectibleProduct: e.collectible_product
          };
}
function ee(e) {
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
        rewards: e.rewards.map($),
        cosponsorMetadata: (0, C.s)(e.cosponsor_metadata)
    };
}
function et(e) {
    return {
        id: e.id,
        config: ee(e.config),
        userStatus: null == e.user_status ? null : X(e.user_status)
    };
}
function en(e) {
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
function er(e) {
    if ((null == e ? void 0 : e.quest_rewards) == null) return null;
    let t = e.quest_rewards;
    switch (t.reward.tag) {
        case c.w.IN_GAME:
            return { questRewards: { reward: { tag: t.reward.tag } } };
        case c.w.REWARD_CODE:
            return {
                questRewards: {
                    reward: {
                        tag: t.reward.tag,
                        rewardCode: en(t.reward.reward_code)
                    }
                }
            };
    }
}
function ei(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: er(e.tenant_metadata),
        consumed: e.consumed
    };
}
function eo(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ei),
        errors: e.errors
    };
}
function ea(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target
    };
}
let es = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function el(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !Y(i)) return i;
}
let ec = (e) => {
    switch (e) {
        case T.y$.XBOX:
            return D.NW.string(D.t.G84UWV);
        case T.y$.PLAYSTATION:
            return D.NW.string(D.t['6IeKx8']);
        case T.y$.SWITCH:
            return D.NW.string(D.t['1pp0sr']);
        case T.y$.PC:
            return D.NW.string(D.t['YK+wUl']);
        case T.y$.CROSS_PLATFORM:
            return D.NW.string(D.t.UWVbzc);
    }
};
function eu(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: o } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return D.NW.string(D.t.BzFeTE);
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != o ? o.completedRatio : e;
        return t >= 0.75 ? D.NW.string(D.t.gvCR4O) : t >= 0.45 && t <= 0.55 ? D.NW.string(D.t.JNx8sL) : t > 0 ? D.NW.string(D.t.JMbfnZ) : D.NW.string(D.t['7e5k7O']);
    }
    return D.NW.formatToPlainString(D.t.EQa7oq, { questName: r.config.messages.questName });
}
function ed(e) {
    return Object.keys(R.a_).includes(T.jn[e]);
}
function ef(e, t) {
    if (!ed(t)) return !1;
    let n = T.jn[t];
    return (0, E.yE)(e.dismissedQuestContent, R.a_[n]);
}
function e_(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function ep(e) {
    let t = e_(e);
    return null != t && 'expiresAtPremium' in t && null != t.expiresAtPremium ? e7(t.expiresAtPremium) : null;
}
function eh(e) {
    let t = e_(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        o = (0, r.Z)(i, n),
        a = Math.floor(o / 30) + +(o % 30 >= 25);
    if (a >= 12) {
        let e = Math.floor(a / 12);
        return D.NW.formatToPlainString(D.t.PClsr6, { years: e });
    }
    if (a > 0) return D.NW.formatToPlainString(D.t.kridzM, { months: a });
    {
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return D.NW.formatToPlainString(D.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return D.NW.formatToPlainString(D.t.EmoBDw, { weeks: t });
        }
    }
}
function em(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eg(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eE(e) {
    return null != e_(e);
}
function eb(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function ev(e) {
    var t;
    return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) && void 0 !== t ? t : null;
}
function ey(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eO(e, t) {
    return e.targetedContent.includes(t);
}
function eI(e, t) {
    y.Z.captureException(e, k(x({}, t), { tags: k(x({}, null == t ? void 0 : t.tags), { app_context: 'quests' }) }));
}
function eS(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = Z(e, n);
        if (null != t) return t;
    }
    return null;
}
function eT(e) {
    let {
            quest: { config: t }
        } = e,
        n = t.rewardsConfig;
    return n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE);
}
function eN(e) {
    return e.taskConfig.type === u.L.FIRST_PARTY && null != e.taskConfig.tasks[a.X.PLAY_ON_DESKTOP];
}
function eA(e) {
    let { quest: t } = e;
    return eN(t.config);
}
function eC(e) {
    let { quest: t } = e;
    return t.config.taskConfig.type === u.L.FIRST_PARTY && null != t.config.taskConfig.tasks[a.X.STREAM_ON_DESKTOP];
}
function eR(e) {
    return e.config.taskConfig.type === u.L.FIRST_PARTY && null != e.config.taskConfig.tasks[a.X.PLAY_ACTIVITY];
}
function eP(e) {
    return null != e && eA({ quest: e });
}
function ew(e) {
    let t = A.r.build(e.config).application.id;
    return eR(e) && t === R.Ts;
}
function eD(e, t) {
    return A.r.build(e.config).features.has(t);
}
function eL(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function ex(e, t) {
    let n = A.r.build(e.config).application.link;
    (0, v.q)({
        href: n,
        onConfirm: () => {
            (0, O._3)({
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
let eM = (e, t) => {
        (0, O._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId
        }),
            (0, m.JG)(es(e));
    },
    ek = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    ej = (e) => e0(e) || S.Z.isProgressingOnDesktop(e.id),
    eU = (e, t) => {
        var n, r, o, a;
        let s = null === (a = e.userStatus) || void 0 === a ? void 0 : null === (o = a.progress) || void 0 === o ? void 0 : null === (r = o[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == s || !ej(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / g.Z.Millis.SECOND, 2);
    },
    eG = (e, t) => {
        var n, r, i, o, a;
        let s = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress) || void 0 === n ? void 0 : n[t.eventName],
            l = null !== (a = null !== (o = null == s ? void 0 : s.value) && void 0 !== o ? o : null === (i = e.userStatus) || void 0 === i ? void 0 : i.streamProgressSeconds) && void 0 !== a ? a : 0;
        if (eX(e)) {
            let n = S.Z.getOptimisticProgress(e.id, t.eventName);
            return null == n || n < l ? l : n;
        }
        return l + eU(e, t);
    },
    eB = 0.99,
    eF = (e, t) => {
        var n;
        let r = t.target;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return r;
        let o = Math.min(r * eB, eG(e, t));
        return Math.max((0, i.floor)(o, 2), 0);
    },
    eV = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: o = a.T.ALL } = e,
            s = r.config.taskConfig;
        if (s.type !== u.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(s.type, '!'));
        let l = null != i ? i : null === (t = Object.values(s.tasks).filter((e) => o.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
            c = null !== (n = s.tasks[l]) && void 0 !== n ? n : s.tasks[a.X.STREAM_ON_DESKTOP];
        if (null == c) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let d = c.target,
            f = eF(r, c);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / g.Z.Seconds.MINUTE),
            percentComplete: ek(d, f),
            taskType: l
        };
    },
    eZ = (e) => (a.T.ALL.has(e) ? e : null),
    eH = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = a.T.ALL } = e;
        for (let e of Object.values(null !== (n = null === (t = r.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {})
            .sort((e, t) => {
                var n, r;
                let i = null == e ? void 0 : null === (n = e.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt,
                    o = null == t ? void 0 : null === (r = t.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt;
                return null != i && null != o ? (new Date(i).valueOf() > new Date(o).valueOf() ? -1 : 1) : null == i && null == o && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null ? (new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1) : null != i && null == o ? -1 : 1;
            })
            .filter(b.lm)) {
            let t = eZ(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return eV({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i
                });
        }
        return eV({
            quest: r,
            includeTaskTypes: i
        });
    },
    eW = (e, t) =>
        e.config.taskConfig.type !== u.L.FIRST_PARTY
            ? {
                  progressSeconds: 0,
                  targetSeconds: 1,
                  targetMinutes: 1,
                  percentComplete: 0,
                  taskType: a.X.STREAM_ON_DESKTOP
              }
            : eQ(e)
              ? eH({
                    quest: e,
                    includeTaskTypes: null != t ? t : e0(e) ? a.T.CONSOLE : a.T.ALL
                })
              : eX(e)
                ? eV({
                      quest: e,
                      taskType: a.X.WATCH_VIDEO
                  })
                : eP(e)
                  ? eV({
                        quest: e,
                        taskType: a.X.PLAY_ON_DESKTOP
                    })
                  : eR(e)
                    ? eV({
                          quest: e,
                          taskType: a.X.PLAY_ACTIVITY
                      })
                    : eV({
                          quest: e,
                          taskType: a.X.STREAM_ON_DESKTOP
                      });
function eY(e) {
    var t, n, r, i;
    if (e.config.taskConfig.type !== u.L.THIRD_PARTY || 0 === Object.keys(e.config.taskConfig.tasks).length) return null;
    let o = Object.keys(e.config.taskConfig.tasks)[0],
        a = e.config.taskConfig.tasks[o],
        s = null !== (i = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress) || void 0 === n ? void 0 : null === (t = n[o]) || void 0 === t ? void 0 : t.value) && void 0 !== i ? i : 0,
        l = ek(a.target, s);
    return {
        title: a.title,
        description: a.description,
        target: a.target,
        progress: s,
        completedRatio: l
    };
}
let eK = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]);
function ez(e) {
    let t = e.targetSeconds - e.progressSeconds;
    return {
        minutes: Math.floor(t / 60),
        seconds: Math.floor(t % 60)
    };
}
function eq(e) {
    let t = ez(e);
    return ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0'));
}
let eQ = eK([a.X.PLAY_ON_XBOX, a.X.PLAY_ON_PLAYSTATION]),
    eX = eK([a.X.WATCH_VIDEO]);
function eJ(e) {
    return eQ(e);
}
let e$ = (e, t) => {
    var n, r;
    let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let o = new Date(i).valueOf();
    return !isNaN(o) && o > Date.now();
};
function e0(e) {
    return null != e.userStatus && (e$(e.userStatus, a.X.PLAY_ON_XBOX) || e$(e.userStatus, a.X.PLAY_ON_PLAYSTATION));
}
function e1(e) {
    return !!eX(e) && (0, n(952265).nf)(ta(e.id));
}
function e2() {
    f.Z.open(P.oAB.CONNECTIONS);
}
function e3(e, t) {
    let { platformType: n, quest: r } = e;
    (0, O._3)({
        questId: r.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        (0, p.Z)({
            platformType: n,
            location: t.ctaContent
        });
}
function e4(e, t) {
    let { quest: n } = e;
    (0, O._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    });
    let r = to(n);
    if (1 === r.length) return (0, p.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, p.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function e6(e, t) {
    let { quest: n } = e;
    (0, O._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        e2();
}
function e5() {
    return window.location.pathname.startsWith(P.Z5c.QUEST_HOME);
}
function e7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' };
    return null == e ? '' : new Date(e).toLocaleDateString(h.default.locale, t);
}
function e8(e) {
    return 'xbox' === e.connected_account_type ? P.ABu.XBOX : P.ABu.PLAYSTATION;
}
function e9(e) {
    return e8(e) === P.ABu.XBOX ? D.t.mytEv7 : D.t.iDiwb2;
}
function te(e) {
    var t, n, r, i;
    let { quest: o, rewardCode: a, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eT({ quest: o }),
        u = null != s ? s : null == a ? void 0 : a.platform,
        d = c
            ? eL({
                  quest: o,
                  idx: null !== (r = null == a ? void 0 : a.tier) && void 0 !== r ? r : null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        f = null !== (i = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== i ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != u ? f[u] : void 0;
}
function tt(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? D.NW.formatToPlainString(D.t.Piihy8, { gamePublisher: n })
            : D.NW.formatToPlainString(D.t.DV47Gx, {
                  gamePublisher: n,
                  cosponsorName: i
              })
        : D.NW.formatToPlainString(D.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: r
          });
}
function tn(e) {
    let t = eA({ quest: e }) || eC({ quest: e }),
        n = eQ(e),
        r = [];
    return t && r.push(R.cd.DESKTOP), n && r.push(R.cd.CONSOLE), r;
}
function tr(e) {
    var t;
    let n = null === (t = e_(e)) || void 0 === t ? void 0 : t.expirationMode;
    return !!(0, N.U)() && !!n && U.has(n);
}
function ti(e) {
    var t;
    return tr(e) && (null === (t = e_(e)) || void 0 === t ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function to(e) {
    let t = Object.keys(e.config.taskConfig.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case a.X.PLAY_ON_XBOX:
                n.push(P.ABu.XBOX);
                break;
            case a.X.PLAY_ON_PLAYSTATION:
                n.push(P.ABu.PLAYSTATION);
        }
    return n;
}
function ta(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function ts(e) {
    let t = eX(e),
        n = eR(e);
    return t || n;
}
function tl(e, t) {
    var n, r;
    !Y(e) && (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) == null && (0, I.cT)(e.id, t);
}
function tc(e) {
    return {
        [T.jn.QUEST_BAR]: T.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [T.jn.QUEST_BAR_V2]: T.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [T.jn.QUEST_BAR_MOBILE]: T.Ok.MOBILE_HOME_DOCK_AREA
    }[e];
}
let tu = (e) => (e.percentComplete > 0 ? D.NW.formatToPlainString(D.t['c59/Tk'], { remainTime: eq(e) }) : D.NW.formatToPlainString(D.t.GNsKiY, { remainTime: eq(e) }));
function td(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
