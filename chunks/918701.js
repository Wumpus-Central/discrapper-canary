n.d(t, {
    $H: () => eR,
    $J: () => eX,
    AV: () => eu,
    Ah: () => ez,
    B3: () => tr,
    BM: () => e0,
    Bg: () => eh,
    Bz: () => e$,
    C1: () => e8,
    C9: () => e7,
    Dr: () => eA,
    FE: () => eL,
    FI: () => ta,
    Fs: () => e9,
    GN: () => ed,
    Gd: () => to,
    Jg: () => eI,
    K: () => ev,
    KM: () => eP,
    Kr: () => ep,
    LM: () => eb,
    Nj: () => eN,
    OG: () => e6,
    PM: () => el,
    Qe: () => U,
    Rs: () => es,
    U3: () => X,
    V$: () => e4,
    WP: () => J,
    Xh: () => eo,
    Xv: () => eg,
    ZZ: () => F,
    Zp: () => ts,
    _D: () => V,
    _j: () => e5,
    _p: () => tn,
    b7: () => eW,
    dh: () => W,
    f$: () => tt,
    f2: () => ex,
    fY: () => e2,
    gI: () => e3,
    hQ: () => et,
    iQ: () => K,
    il: () => eH,
    lQ: () => H,
    o9: () => eD,
    oo: () => eS,
    pO: () => eC,
    q6: () => z,
    q8: () => eQ,
    t2: () => ec,
    u7: () => ti,
    vQ: () => eE,
    vR: () => ey,
    xN: () => em,
    xn: () => e_,
    yH: () => te,
    yI: () => en,
    ys: () => eO,
    zE: () => ef,
    zK: () => ew,
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
var p = n(231757);
n(706454);
var h = n(572004),
    m = n(70956),
    g = n(630388),
    E = n(823379),
    v = n(49012),
    b = n(960048),
    y = n(617136),
    O = n(272008),
    I = n(569984),
    S = n(497505);
n(306560);
var T = n(75137),
    N = n(566078),
    A = n(312046),
    C = n(46140),
    R = n(981631),
    P = n(701488),
    w = n(388032);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = 2592000000,
    j = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function U(e) {
    try {
        return (0, o.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1;
    }
}
let G = (e) => e.application_id === P.Ev || e.platform === R.M7m.XBOX,
    B = (e) => e.platform === R.M7m.PS4 || e.platform === R.M7m.PS5;
function V(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = N.r.build(t.config).application.name.toLowerCase();
    return G(e) || B(e) ? n === r : null != e.application_id && Z(e.application_id, t);
}
function F(e, t) {
    for (let [n, r] of e) if (V(t, r) && !Y(r)) return r;
}
function Z(e, t) {
    return null != N.r.build(t.config).application.ids.find((t) => t === e);
}
function H(e, t) {
    let n;
    for (let [r, i] of e)
        if (Z(t, i) && !Y(i)) {
            n = i;
            break;
        }
    return n;
}
function W(e, t) {
    return Array.from(e.values()).filter((e) => Z(t, e) && !Y(e) && eN({ quest: e }));
}
function Y(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function K(e) {
    if (!Y(e)) return !1;
    let t = Date.now() - k,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function z(e) {
    return (0, o.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, A.Q)(e))
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
        cosponsorMetadata: (0, A.s)(e.cosponsor_metadata)
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
        case S.y$.XBOX:
            return w.NW.string(w.t.G84UWV);
        case S.y$.PLAYSTATION:
            return w.NW.string(w.t['6IeKx8']);
        case S.y$.SWITCH:
            return w.NW.string(w.t['1pp0sr']);
        case S.y$.PC:
            return w.NW.string(w.t['YK+wUl']);
        case S.y$.CROSS_PLATFORM:
            return w.NW.string(w.t.UWVbzc);
    }
};
function eu(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: o } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return w.NW.string(w.t.BzFeTE);
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != o ? o.completedRatio : e;
        return t >= 0.75 ? w.NW.string(w.t.gvCR4O) : t >= 0.45 && t <= 0.55 ? w.NW.string(w.t.JNx8sL) : t > 0 ? w.NW.string(w.t.JMbfnZ) : w.NW.string(w.t['7e5k7O']);
    }
    return w.NW.formatToPlainString(w.t.EQa7oq, { questName: r.config.messages.questName });
}
function ed(e) {
    return Object.keys(C.a_).includes(S.jn[e]);
}
function ef(e, t) {
    if (!ed(t)) return !1;
    let n = S.jn[t];
    return (0, g.yE)(e.dismissedQuestContent, C.a_[n]);
}
function e_(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function ep(e) {
    let t = e_(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        o = (0, r.Z)(i, n),
        a = Math.floor(o / 30) + +(o % 30 >= 25);
    if (a >= 12) {
        let e = Math.floor(a / 12);
        return w.NW.formatToPlainString(w.t.PClsr6, { years: e });
    }
    if (a > 0) return w.NW.formatToPlainString(w.t.kridzM, { months: a });
    {
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return w.NW.formatToPlainString(w.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return w.NW.formatToPlainString(w.t.EmoBDw, { weeks: t });
        }
    }
}
function eh(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function em(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eg(e) {
    return null != e_(e);
}
function eE(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function ev(e) {
    var t;
    return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) && void 0 !== t ? t : null;
}
function eb(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function ey(e, t) {
    return e.targetedContent.includes(t);
}
function eO(e, t) {
    b.Z.captureException(e, M(L({}, t), { tags: M(L({}, null == t ? void 0 : t.tags), { app_context: 'quests' }) }));
}
function eI(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = F(e, n);
        if (null != t) return t;
    }
    return null;
}
function eS(e) {
    let {
            quest: { config: t }
        } = e,
        n = t.rewardsConfig;
    return n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE);
}
function eT(e) {
    return e.taskConfig.type === u.L.FIRST_PARTY && null != e.taskConfig.tasks[a.X.PLAY_ON_DESKTOP];
}
function eN(e) {
    let { quest: t } = e;
    return eT(t.config);
}
function eA(e) {
    let { quest: t } = e;
    return t.config.taskConfig.type === u.L.FIRST_PARTY && null != t.config.taskConfig.tasks[a.X.STREAM_ON_DESKTOP];
}
function eC(e) {
    return e.config.taskConfig.type === u.L.FIRST_PARTY && null != e.config.taskConfig.tasks[a.X.PLAY_ACTIVITY];
}
function eR(e) {
    return null != e && eN({ quest: e });
}
function eP(e) {
    let t = N.r.build(e.config).application.id;
    return eC(e) && t === C.Ts;
}
function ew(e, t) {
    return N.r.build(e.config).features.has(t);
}
function eD(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function eL(e, t) {
    let n = N.r.build(e.config).application.link;
    (0, v.q)({
        href: n,
        onConfirm: () => {
            (0, y._3)({
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
let ex = (e, t) => {
        (0, y._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId
        }),
            (0, h.JG)(es(e));
    },
    eM = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    ek = (e) => e$(e) || I.Z.isProgressingOnDesktop(e.id),
    ej = (e, t) => {
        var n, r, o, a;
        let s = null === (a = e.userStatus) || void 0 === a ? void 0 : null === (o = a.progress) || void 0 === o ? void 0 : null === (r = o[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == s || !ek(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / m.Z.Millis.SECOND, 2);
    },
    eU = (e, t) => {
        var n, r, i, o, a;
        let s = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress) || void 0 === n ? void 0 : n[t.eventName],
            l = null !== (a = null !== (o = null == s ? void 0 : s.value) && void 0 !== o ? o : null === (i = e.userStatus) || void 0 === i ? void 0 : i.streamProgressSeconds) && void 0 !== a ? a : 0;
        if (eQ(e)) {
            let n = I.Z.getOptimisticProgress(e.id, t.eventName);
            return null == n || n < l ? l : n;
        }
        return l + ej(e, t);
    },
    eG = 0.99,
    eB = (e, t) => {
        var n;
        let r = t.target;
        if ((null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null) return r;
        let o = Math.min(r * eG, eU(e, t));
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
            f = eB(r, c);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / m.Z.Seconds.MINUTE),
            percentComplete: eM(d, f),
            taskType: l
        };
    },
    eF = (e) => (a.T.ALL.has(e) ? e : null),
    eZ = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = a.T.ALL } = e;
        for (let e of Object.values(null !== (n = null === (t = r.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {})
            .sort((e, t) => {
                var n, r;
                let i = null == e ? void 0 : null === (n = e.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt,
                    o = null == t ? void 0 : null === (r = t.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt;
                return null != i && null != o ? (new Date(i).valueOf() > new Date(o).valueOf() ? -1 : 1) : null == i && null == o && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null ? (new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1) : null != i && null == o ? -1 : 1;
            })
            .filter(E.lm)) {
            let t = eF(e.eventName);
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
    eH = (e, t) =>
        e.config.taskConfig.type !== u.L.FIRST_PARTY
            ? {
                  progressSeconds: 0,
                  targetSeconds: 1,
                  targetMinutes: 1,
                  percentComplete: 0,
                  taskType: a.X.STREAM_ON_DESKTOP
              }
            : eq(e)
              ? eZ({
                    quest: e,
                    includeTaskTypes: null != t ? t : e$(e) ? a.T.CONSOLE : a.T.ALL
                })
              : eQ(e)
                ? eV({
                      quest: e,
                      taskType: a.X.WATCH_VIDEO
                  })
                : eR(e)
                  ? eV({
                        quest: e,
                        taskType: a.X.PLAY_ON_DESKTOP
                    })
                  : eC(e)
                    ? eV({
                          quest: e,
                          taskType: a.X.PLAY_ACTIVITY
                      })
                    : eV({
                          quest: e,
                          taskType: a.X.STREAM_ON_DESKTOP
                      });
function eW(e) {
    var t, n, r, i;
    if (e.config.taskConfig.type !== u.L.THIRD_PARTY || 0 === Object.keys(e.config.taskConfig.tasks).length) return null;
    let o = Object.keys(e.config.taskConfig.tasks)[0],
        a = e.config.taskConfig.tasks[o],
        s = null !== (i = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress) || void 0 === n ? void 0 : null === (t = n[o]) || void 0 === t ? void 0 : t.value) && void 0 !== i ? i : 0,
        l = eM(a.target, s);
    return {
        title: a.title,
        description: a.description,
        target: a.target,
        progress: s,
        completedRatio: l
    };
}
let eY = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]);
function eK(e) {
    let t = e.targetSeconds - e.progressSeconds;
    return {
        minutes: Math.floor(t / 60),
        seconds: Math.floor(t % 60)
    };
}
function ez(e) {
    let t = eK(e);
    return ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0'));
}
let eq = eY([a.X.PLAY_ON_XBOX, a.X.PLAY_ON_PLAYSTATION]),
    eQ = eY([a.X.WATCH_VIDEO]);
function eX(e) {
    return eq(e);
}
let eJ = (e, t) => {
    var n, r;
    let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let o = new Date(i).valueOf();
    return !isNaN(o) && o > Date.now();
};
function e$(e) {
    return null != e.userStatus && (eJ(e.userStatus, a.X.PLAY_ON_XBOX) || eJ(e.userStatus, a.X.PLAY_ON_PLAYSTATION));
}
function e0(e) {
    return !!eQ(e) && (0, n(952265).nf)(ti(e.id));
}
function e1() {
    f.Z.open(R.oAB.CONNECTIONS);
}
function e2(e, t) {
    let { platformType: n, quest: r } = e;
    (0, y._3)({
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
function e3(e, t) {
    let { quest: n } = e;
    (0, y._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    });
    let r = tr(n);
    if (1 === r.length) return (0, p.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, p.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function e4(e, t) {
    let { quest: n } = e;
    (0, y._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        e1();
}
function e6() {
    return window.location.pathname.startsWith(R.Z5c.QUEST_HOME);
}
function e5(e) {
    return 'xbox' === e.connected_account_type ? R.ABu.XBOX : R.ABu.PLAYSTATION;
}
function e7(e) {
    return e5(e) === R.ABu.XBOX ? w.t.mytEv7 : w.t.iDiwb2;
}
function e8(e) {
    var t, n, r, i;
    let { quest: o, rewardCode: a, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eS({ quest: o }),
        u = null != s ? s : null == a ? void 0 : a.platform,
        d = c
            ? eD({
                  quest: o,
                  idx: null !== (r = null == a ? void 0 : a.tier) && void 0 !== r ? r : null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        f = null !== (i = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== i ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != u ? f[u] : void 0;
}
function e9(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? w.NW.formatToPlainString(w.t.Piihy8, { gamePublisher: n })
            : w.NW.formatToPlainString(w.t.DV47Gx, {
                  gamePublisher: n,
                  cosponsorName: i
              })
        : w.NW.formatToPlainString(w.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: r
          });
}
function te(e) {
    let t = eN({ quest: e }) || eA({ quest: e }),
        n = eq(e),
        r = [];
    return t && r.push(C.cd.DESKTOP), n && r.push(C.cd.CONSOLE), r;
}
function tt(e) {
    var t;
    let n = null === (t = e_(e)) || void 0 === t ? void 0 : t.expirationMode;
    return !!(0, T.U)() && !!n && j.has(n);
}
function tn(e) {
    var t;
    return tt(e) && (null === (t = e_(e)) || void 0 === t ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tr(e) {
    let t = Object.keys(e.config.taskConfig.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case a.X.PLAY_ON_XBOX:
                n.push(R.ABu.XBOX);
                break;
            case a.X.PLAY_ON_PLAYSTATION:
                n.push(R.ABu.PLAYSTATION);
        }
    return n;
}
function ti(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function to(e) {
    let t = eQ(e),
        n = eC(e);
    return t || n;
}
function ta(e, t) {
    var n, r;
    !Y(e) && (null === (n = e.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) == null && (0, O.cT)(e.id, t);
}
function ts(e) {
    return {
        [S.jn.QUEST_BAR]: S.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [S.jn.QUEST_BAR_V2]: S.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [S.jn.QUEST_BAR_MOBILE]: S.Ok.MOBILE_HOME_DOCK_AREA
    }[e];
}
