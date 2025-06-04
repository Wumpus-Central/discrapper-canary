n.d(t, {
    $H: () => eD,
    $J: () => e8,
    AV: () => ef,
    B2: () => tv,
    B3: () => tp,
    BM: () => te,
    Bg: () => eE,
    Bz: () => e9,
    C1: () => tc,
    C9: () => tl,
    Dr: () => eR,
    F9: () => ty,
    FE: () => eM,
    FI: () => tg,
    FX: () => em,
    Fs: () => tu,
    GN: () => e_,
    Gd: () => tm,
    HJ: () => e6,
    Jg: () => eA,
    K: () => ev,
    KM: () => eL,
    Kr: () => eg,
    LM: () => eI,
    MM: () => tA,
    Mo: () => tN,
    Nj: () => eP,
    OG: () => to,
    PB: () => e4,
    PM: () => eu,
    Qe: () => F,
    Rs: () => ec,
    U3: () => $,
    V$: () => ti,
    VB: () => tb,
    Vl: () => eX,
    WP: () => ee,
    Xh: () => es,
    Xv: () => ey,
    ZZ: () => Y,
    Zp: () => tE,
    _D: () => H,
    _j: () => ts,
    _p: () => t_,
    b7: () => eq,
    bA: () => tO,
    f$: () => tf,
    f2: () => eU,
    fY: () => tn,
    gI: () => tr,
    hF: () => tS,
    hQ: () => er,
    iQ: () => q,
    il: () => ez,
    lQ: () => K,
    nc: () => ej,
    o9: () => ek,
    oo: () => eN,
    pO: () => ew,
    q6: () => Q,
    q8: () => e3,
    qe: () => tI,
    t2: () => ed,
    u7: () => th,
    vQ: () => eO,
    vR: () => eS,
    xN: () => eb,
    xn: () => eh,
    yH: () => td,
    yI: () => ei,
    ys: () => eT,
    zE: () => ep,
    zK: () => ex,
    zi: () => z
}),
    n(388685),
    n(314940),
    n(953529),
    n(415506),
    n(642613),
    n(784620),
    n(973216),
    n(539854);
var r = n(991998),
    i = n(392711),
    o = n(278074),
    a = n(754700),
    s = n(551910),
    l = n(34738),
    c = n(887003),
    u = n(570140),
    d = n(230711),
    f = n(782568);
n(597688);
var _ = n(231757),
    p = n(706454),
    h = n(866960),
    m = n(572004),
    g = n(585483),
    E = n(70956),
    b = n(630388),
    y = n(823379),
    O = n(49012),
    v = n(960048),
    I = n(617136),
    S = n(272008),
    T = n(569984),
    A = n(497505),
    N = n(184299);
n(306560);
var C = n(75137),
    P = n(566078),
    R = n(312046),
    w = n(46140),
    D = n(981631),
    L = n(701488),
    x = n(388032);
function k(e, t, n) {
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
function M(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = 2592000000,
    B = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function F(e) {
    try {
        return (0, o.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e || null == (t = e.config) ? void 0 : t.config_version, "'"), n), !1;
    }
}
let V = (e) => e.application_id === L.Ev || e.platform === D.M7m.XBOX,
    Z = (e) => e.platform === D.M7m.PS4 || e.platform === D.M7m.PS5;
function H(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = P.r.build(t.config).application.name.toLowerCase();
    return V(e) || Z(e) ? n === r : null != e.application_id && W(e.application_id, t);
}
function Y(e, t) {
    for (let [n, r] of e) if (H(t, r) && !z(r)) return r;
}
function W(e, t) {
    return null != P.r.build(t.config).application.ids.find((t) => t === e);
}
function K(e, t) {
    let n;
    for (let [r, i] of e)
        if (W(t, i) && !z(i)) {
            n = i;
            break;
        }
    return n;
}
function z(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function q(e) {
    if (!z(e)) return !1;
    let t = Date.now() - G,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function Q(e) {
    return (0, o.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, R.Q)(e))
        .exhaustive();
}
function X(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at
          };
}
function J(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: X(r.heartbeat)
        };
    return t;
}
function $(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        enrolledAt: e.enrolled_at,
        completedAt: e.completed_at,
        claimedAt: e.claimed_at,
        claimedTier: null != (t = e.claimed_tier) ? t : null,
        lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
        streamProgressSeconds: e.stream_progress_seconds,
        dismissedQuestContent: e.dismissed_quest_content,
        progress: J(e.progress)
    };
}
function ee(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: Q(e.config),
        userStatus: null == e.user_status ? null : $(e.user_status),
        targetedContent: e.targeted_content
    };
}
function et(e) {
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
function en(e) {
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
        rewards: e.rewards.map(et),
        cosponsorMetadata: (0, R.s)(e.cosponsor_metadata)
    };
}
function er(e) {
    return {
        id: e.id,
        config: en(e.config),
        userStatus: null == e.user_status ? null : $(e.user_status)
    };
}
function ei(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: null != (t = e.tier) ? t : null
    };
}
function eo(e) {
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
                        rewardCode: ei(t.reward.reward_code)
                    }
                }
            };
    }
}
function ea(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: eo(e.tenant_metadata),
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
function el(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target
    };
}
let ec = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function eu(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !z(i)) return i;
}
let ed = (e) => {
    switch (e) {
        case A.y$.XBOX:
            return x.intl.string(x.t.G84UWV);
        case A.y$.PLAYSTATION:
            return x.intl.string(x.t['6IeKx8']);
        case A.y$.SWITCH:
            return x.intl.string(x.t['1pp0sr']);
        case A.y$.PC:
            return x.intl.string(x.t['YK+wUl']);
        case A.y$.CROSS_PLATFORM:
            return x.intl.string(x.t.UWVbzc);
    }
};
function ef(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: o } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return x.intl.string(x.t.BzFeTE);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != o ? o.percentComplete : e;
        return t >= 0.75 ? x.intl.string(x.t.gvCR4O) : t >= 0.45 && t <= 0.55 ? x.intl.string(x.t.JNx8sL) : t > 0 ? x.intl.string(x.t.JMbfnZ) : x.intl.string(x.t['7e5k7O']);
    }
    return x.intl.formatToPlainString(x.t.EQa7oq, { questName: r.config.messages.questName });
}
function e_(e) {
    return Object.keys(w.a_).includes(A.jn[e]);
}
function ep(e, t) {
    if (!e_(t)) return !1;
    let n = A.jn[t];
    return (0, b.yE)(e.dismissedQuestContent, w.a_[n]);
}
function eh(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function em(e) {
    let t = eh(e);
    return null != t && 'expiresAtPremium' in t && null != t.expiresAtPremium ? ta(t.expiresAtPremium) : null;
}
function eg(e) {
    let t = eh(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        o = (0, r.Z)(i, n),
        a = Math.floor(o / 30) + +(o % 30 >= 25);
    if (a >= 12) {
        let e = Math.floor(a / 12);
        return x.intl.formatToPlainString(x.t.PClsr6, { years: e });
    }
    {
        if (a > 0) return x.intl.formatToPlainString(x.t.kridzM, { months: a });
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return x.intl.formatToPlainString(x.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return x.intl.formatToPlainString(x.t.EmoBDw, { weeks: t });
        }
    }
}
function eE(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eb(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function ey(e) {
    return null != eh(e);
}
function eO(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function ev(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function eI(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eS(e, t) {
    return e.targetedContent.includes(t);
}
function eT(e, t) {
    v.Z.captureException(e, U(M({}, t), { tags: U(M({}, null == t ? void 0 : t.tags), { app_context: 'quests' }) }));
}
function eA(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = Y(e, n);
        if (null != t) return t;
    }
    return null;
}
function eN(e) {
    let {
            quest: { config: t }
        } = e,
        n = t.rewardsConfig;
    return n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE);
}
function eC(e) {
    return null != e.taskConfigV2.tasks[a.X.PLAY_ON_DESKTOP];
}
function eP(e) {
    let { quest: t } = e;
    return eC(t.config);
}
function eR(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[a.X.STREAM_ON_DESKTOP];
}
function ew(e) {
    return null != e.config.taskConfigV2.tasks[a.X.PLAY_ACTIVITY];
}
function eD(e) {
    return null != e && eP({ quest: e });
}
function eL(e) {
    let t = P.r.build(e.config).application.id;
    return ew(e) && t === w.Ts;
}
function ex(e, t) {
    return P.r.build(e.config).features.has(t);
}
function ek(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function eM(e, t) {
    let n = P.r.build(e.config).application.link;
    (0, O.q)({
        href: n,
        onConfirm: () => {
            (0, I._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position,
                impressionId: t.impressionId
            }),
                g.S.dispatch(D.CkL.QUEST_GAME_LINK_OPENED),
                (0, f.Z)(n);
        }
    }),
        (0, I.dA)({
            questId: e.id,
            event: D.rMx.QUEST_THIRD_PARTY_LINK_CLICKED
        });
}
function ej(e, t) {
    let n = P.r.build(e.config).application.link;
    (0, I._3)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId
    }),
        g.S.dispatch(D.CkL.QUEST_GAME_LINK_OPENED),
        (0, f.Z)(n);
}
let eU = (e, t) => {
        (0, I._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId
        }),
            (0, m.JG)(ec(e));
    },
    eG = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eB = (e) => e9(e) || T.Z.isProgressingOnDesktop(e.id),
    eF = (e, t) => {
        var n, r, o, a;
        let s = null == (a = e.userStatus) || null == (o = a.progress) || null == (r = o[t.type]) || null == (n = r.heartbeat) ? void 0 : n.lastBeatAt;
        if (null == s || !eB(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / E.Z.Millis.SECOND, 2);
    },
    eV = (e, t) => {
        var n, r, i, o, a;
        let s = null == (r = e.userStatus) || null == (n = r.progress) ? void 0 : n[t.type],
            l = null != (a = null != (o = null == s ? void 0 : s.value) ? o : null == (i = e.userStatus) ? void 0 : i.streamProgressSeconds) ? a : 0;
        if (e3(e)) {
            let n = T.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + eF(e, t);
    },
    eZ = 0.99,
    eH = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let o = Math.min(r * eZ, eV(e, t));
        return Math.max((0, i.floor)(o, 2), 0);
    },
    eY = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: o = a.T.ALL } = e,
            s = r.config.taskConfigV2,
            l = null != i ? i : null == (t = Object.values(s.tasks).filter((e) => o.has(e.type))[0]) ? void 0 : t.type,
            c = null != (n = s.tasks[l]) ? n : s.tasks[a.X.STREAM_ON_DESKTOP];
        if (null == c) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let u = c.target,
            d = eH(r, c);
        return {
            progressSeconds: d,
            targetSeconds: u,
            targetMinutes: Math.ceil(u / E.Z.Seconds.MINUTE),
            percentComplete: eG(u, d),
            taskType: l
        };
    },
    eW = (e) => (a.T.ALL.has(e) ? e : null),
    eK = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = a.T.ALL } = e;
        for (let e of Object.values(null != (n = null == (t = r.userStatus) ? void 0 : t.progress) ? n : {})
            .sort((e, t) => {
                var n, r;
                let i = null == e || null == (n = e.heartbeat) ? void 0 : n.lastBeatAt,
                    o = null == t || null == (r = t.heartbeat) ? void 0 : r.lastBeatAt;
                return null != i && null != o ? (new Date(i).valueOf() > new Date(o).valueOf() ? -1 : 1) : null == i && null == o && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null ? (new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1) : null != i && null == o ? -1 : 1;
            })
            .filter(y.lm)) {
            let t = eW(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return eY({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i
                });
        }
        return eY({
            quest: r,
            includeTaskTypes: i
        });
    },
    ez = (e, t) => {
        if (eX(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: a.X.STREAM_ON_DESKTOP
            };
        if (e2(e))
            return eK({
                quest: e,
                includeTaskTypes: null != t ? t : e9(e) ? a.T.CONSOLE : a.T.ALL
            });
        if (e3(e))
            if (e5(e))
                return eY({
                    quest: e,
                    taskType: a.X.WATCH_VIDEO_ON_MOBILE
                });
            else
                return eY({
                    quest: e,
                    taskType: a.X.WATCH_VIDEO
                });
        return eD(e)
            ? eY({
                  quest: e,
                  taskType: a.X.PLAY_ON_DESKTOP
              })
            : ew(e)
              ? eY({
                    quest: e,
                    taskType: a.X.PLAY_ACTIVITY
                })
              : eY({
                    quest: e,
                    taskType: a.X.STREAM_ON_DESKTOP
                });
    };
function eq(e) {
    var t, n, r, i;
    let o = P.r.build(e.config).defaultInGameTask;
    if (null == o) return null;
    let a = null != (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[o.eventName]) ? void 0 : t.value) ? i : 0,
        s = eG(o.target, a);
    return {
        title: o.messages.taskTitle,
        description: o.messages.taskDescription,
        target: o.target,
        progress: a,
        percentComplete: s
    };
}
let eQ = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function eX(e) {
    return Array.from(a.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function eJ(e) {
    return e$(e.targetSeconds - e.progressSeconds);
}
function e$(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60))
    };
}
function e0(e) {
    let t = eJ(e);
    return e1(t.minutes, t.seconds);
}
function e1(e, t) {
    return ''.concat(String(e).padStart(2, '0'), ':').concat(String(t).padStart(2, '0'));
}
let e2 = eQ([a.X.PLAY_ON_XBOX, a.X.PLAY_ON_PLAYSTATION]),
    e3 = eQ([a.X.WATCH_VIDEO, a.X.WATCH_VIDEO_ON_MOBILE]),
    e4 = eQ([a.X.WATCH_VIDEO]),
    e5 = eQ([a.X.WATCH_VIDEO_ON_MOBILE]),
    e6 = (e) => e5(e) && !e4(e);
function e8(e) {
    return e2(e);
}
let e7 = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let o = new Date(i).valueOf();
    return !isNaN(o) && o > Date.now();
};
function e9(e) {
    return null != e.userStatus && (e7(e.userStatus, a.X.PLAY_ON_XBOX) || e7(e.userStatus, a.X.PLAY_ON_PLAYSTATION));
}
function te(e) {
    return !!e3(e) && (0, n(952265).nf)(th(e.id));
}
function tt() {
    d.Z.open(D.oAB.CONNECTIONS);
}
function tn(e, t) {
    let { platformType: n, quest: r } = e;
    (0, I._3)({
        questId: r.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        (0, _.Z)({
            platformType: n,
            location: t.ctaContent
        });
}
function tr(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    });
    let r = tp(n);
    if (1 === r.length) return (0, _.Z)({ platformType: r.at(0) });
    u.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, _.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function ti(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        tt();
}
function to() {
    return window.location.pathname.startsWith(D.Z5c.QUEST_HOME);
}
function ta(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' };
    return null == e ? '' : new Date(e).toLocaleDateString(p.default.locale, t);
}
function ts(e) {
    return 'xbox' === e.connected_account_type ? D.ABu.XBOX : D.ABu.PLAYSTATION;
}
function tl(e) {
    return ts(e) === D.ABu.XBOX ? x.t.mytEv7 : x.t.iDiwb2;
}
function tc(e) {
    var t, n, r, i;
    let { quest: o, rewardCode: a, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eN({ quest: o }),
        u = null != s ? s : null == a ? void 0 : a.platform,
        d = c
            ? ek({
                  quest: o,
                  idx: null != (r = null == a ? void 0 : a.tier) ? r : null == (t = o.userStatus) ? void 0 : t.claimedTier
              })
            : null,
        f = null != (i = null == d || null == (n = d.messages) ? void 0 : n.redemptionInstructionsByPlatform) ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != u ? f[u] : void 0;
}
function tu(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? x.intl.formatToPlainString(x.t.Piihy8, { gamePublisher: n })
            : x.intl.formatToPlainString(x.t.DV47Gx, {
                  gamePublisher: n,
                  cosponsorName: i
              })
        : x.intl.formatToPlainString(x.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: r
          });
}
function td(e) {
    let t = eP({ quest: e }) || eR({ quest: e }),
        n = e2(e),
        r = [];
    return t && r.push(w.cd.DESKTOP), n && r.push(w.cd.CONSOLE), r;
}
function tf(e) {
    var t;
    let n = null == (t = eh(e)) ? void 0 : t.expirationMode;
    return !!(0, C.U)() && !!n && B.has(n);
}
function t_(e) {
    var t;
    return tf(e) && (null == (t = eh(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tp(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case a.X.PLAY_ON_XBOX:
                n.push(D.ABu.XBOX);
                break;
            case a.X.PLAY_ON_PLAYSTATION:
                n.push(D.ABu.PLAYSTATION);
        }
    return n;
}
function th(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function tm(e) {
    let t = e3(e),
        n = ew(e);
    return t || n;
}
function tg(e, t) {
    var n, r;
    z(e) || (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null || (null == (r = e.userStatus) ? void 0 : r.completedAt) != null || (0, S.cT)(e.id, t);
}
function tE(e) {
    return {
        [A.jn.QUEST_BAR]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [A.jn.QUEST_BAR_V2]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [A.jn.QUEST_BAR_MOBILE]: A.Ok.MOBILE_HOME_DOCK_AREA
    }[e];
}
function tb(e) {
    let t = tE(e);
    return null != t && w.v6.has(t);
}
let ty = (e) => (e.percentComplete > 0 ? x.intl.formatToPlainString(x.t['c59/Tk'], { remainTime: e0(e) }) : x.intl.formatToPlainString(x.t.GNsKiY, { remainTime: e0(e) }));
function tO(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tv(e) {
    var t, n;
    let r = P.r.build(e).defaultWatchVideoTask;
    return null != (n = null != (t = null == r ? void 0 : r.messages.videoEndCtaButtonLabel) ? t : null == r ? void 0 : r.messages.videoEndCtaTitle) ? n : x.intl.string(x.t.iiTtpK);
}
function tI(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.Z,
        r = tE(e),
        i = null != r ? n.questToDeliverForPlacement.get(r) : void 0;
    return null != (t = null == i ? void 0 : i.adDecisionData) ? t : w.Jp;
}
function tS(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tT(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function tA(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        for (let e of tT(i))
            if (t.has(e)) {
                n.set(r, i);
                break;
            }
    return n;
}
function tN(e) {
    var t, n;
    let { questId: r, videoSessionId: i } = e,
        o = N.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let a = T.Z.getQuest(r);
    null != a && (null == (t = a.userStatus) ? void 0 : t.enrolledAt) != null && (null == (n = a.userStatus) ? void 0 : n.completedAt) == null && tg(a, o.maxTimestampSec);
    let s = tO(o.maxTimestampSec, o.duration);
    (0, I.dA)({
        questId: r,
        event: D.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: s,
            video_timestamp_seconds: o.maxTimestampSec,
            video_session_id: i
        }
    }),
        (0, I.dA)({
            questId: r,
            event: D.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: s,
                video_session_id: i,
                network_connection_speed: h.Z.getEffectiveConnectionSpeed()
            }
        });
}
