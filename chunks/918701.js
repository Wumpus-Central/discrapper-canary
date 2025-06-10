n.d(t, {
    $H: () => ew,
    $J: () => e5,
    AV: () => ed,
    B2: () => ty,
    B3: () => tf,
    BM: () => e7,
    Bg: () => eg,
    Bz: () => e8,
    C1: () => ts,
    C9: () => to,
    Dr: () => eR,
    F9: () => tE,
    FI: () => th,
    FX: () => eh,
    Fs: () => tl,
    GN: () => ef,
    Gd: () => tp,
    HJ: () => e4,
    Jg: () => eT,
    K: () => eO,
    KM: () => eD,
    Kr: () => em,
    LM: () => ev,
    MM: () => tS,
    Mo: () => tT,
    Nj: () => eC,
    OG: () => tr,
    PB: () => e2,
    PM: () => ec,
    Qe: () => B,
    Rs: () => el,
    U3: () => J,
    V$: () => tn,
    VB: () => tg,
    Vl: () => eq,
    WP: () => $,
    Xh: () => eo,
    Xv: () => eb,
    ZZ: () => H,
    Zp: () => tm,
    _D: () => Z,
    _j: () => ta,
    _p: () => td,
    b7: () => eK,
    bA: () => tb,
    f$: () => tu,
    f2: () => eM,
    fY: () => te,
    gI: () => tt,
    hF: () => tv,
    hQ: () => en,
    iQ: () => z,
    il: () => eW,
    lQ: () => W,
    nc: () => ek,
    o9: () => ex,
    oo: () => eA,
    pO: () => eP,
    q6: () => q,
    q8: () => e1,
    qe: () => tO,
    t2: () => eu,
    u7: () => t_,
    vQ: () => ey,
    vR: () => eI,
    xN: () => eE,
    xn: () => ep,
    yH: () => tc,
    yI: () => er,
    ys: () => eS,
    zE: () => e_,
    zK: () => eL,
    zi: () => K
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
    a = n(278074),
    o = n(754700),
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
    O = n(960048),
    v = n(617136),
    I = n(272008),
    S = n(569984),
    T = n(497505),
    A = n(184299);
n(306560);
var N = n(75137),
    C = n(566078),
    R = n(312046),
    P = n(46140),
    w = n(981631),
    D = n(701488),
    L = n(388032);
function x(e, t, n) {
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
function k(e) {
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
                x(e, t, n[t]);
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
function j(e, t) {
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
let U = 2592000000,
    G = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function B(e) {
    try {
        return (0, a.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e || null == (t = e.config) ? void 0 : t.config_version, "'"), n), !1;
    }
}
let F = (e) => e.application_id === D.Ev || e.platform === w.M7m.XBOX,
    V = (e) => e.platform === w.M7m.PS4 || e.platform === w.M7m.PS5;
function Z(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = C.r.build(t.config).application.name.toLowerCase();
    return F(e) || V(e) ? n === r : null != e.application_id && Y(e.application_id, t);
}
function H(e, t) {
    for (let [n, r] of e) if (Z(t, r) && !K(r)) return r;
}
function Y(e, t) {
    return null != C.r.build(t.config).application.ids.find((t) => t === e);
}
function W(e, t) {
    let n;
    for (let [r, i] of e)
        if (Y(t, i) && !K(i)) {
            n = i;
            break;
        }
    return n;
}
function K(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function z(e) {
    if (!K(e)) return !1;
    let t = Date.now() - U,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function q(e) {
    return (0, a.EQ)(e)
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
function Q(e) {
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
function J(e) {
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
        progress: Q(e.progress)
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
        cosponsorMetadata: (0, R.s)(e.cosponsor_metadata)
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
function ei(e) {
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
                        rewardCode: er(t.reward.reward_code)
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
function eo(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ea),
        errors: e.errors
    };
}
function es(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target
    };
}
let el = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function ec(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !K(i)) return i;
}
let eu = (e) => {
    switch (e) {
        case T.y$.XBOX:
            return L.intl.string(L.t.G84UWV);
        case T.y$.PLAYSTATION:
            return L.intl.string(L.t['6IeKx8']);
        case T.y$.SWITCH:
            return L.intl.string(L.t['1pp0sr']);
        case T.y$.PC:
            return L.intl.string(L.t['YK+wUl']);
        case T.y$.CROSS_PLATFORM:
            return L.intl.string(L.t.UWVbzc);
    }
};
function ed(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return L.intl.string(L.t.BzFeTE);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.percentComplete : e;
        return t >= 0.75 ? L.intl.string(L.t.gvCR4O) : t >= 0.45 && t <= 0.55 ? L.intl.string(L.t.JNx8sL) : t > 0 ? L.intl.string(L.t.JMbfnZ) : L.intl.string(L.t['7e5k7O']);
    }
    return L.intl.formatToPlainString(L.t.EQa7oq, { questName: r.config.messages.questName });
}
function ef(e) {
    return Object.keys(P.a_).includes(T.jn[e]);
}
function e_(e, t) {
    if (!ef(t)) return !1;
    let n = T.jn[t];
    return (0, b.yE)(e.dismissedQuestContent, P.a_[n]);
}
function ep(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function eh(e) {
    let t = ep(e);
    return null != t && 'expiresAtPremium' in t && null != t.expiresAtPremium ? ti(t.expiresAtPremium) : null;
}
function em(e) {
    let t = ep(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        o = Math.floor(a / 30) + +(a % 30 >= 25);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return L.intl.formatToPlainString(L.t.PClsr6, { years: e });
    }
    {
        if (o > 0) return L.intl.formatToPlainString(L.t.kridzM, { months: o });
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return L.intl.formatToPlainString(L.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return L.intl.formatToPlainString(L.t.EmoBDw, { weeks: t });
        }
    }
}
function eg(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eE(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eb(e) {
    return null != ep(e);
}
function ey(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function eO(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function ev(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eI(e, t) {
    return e.targetedContent.includes(t);
}
function eS(e, t) {
    O.Z.captureException(e, j(k({}, t), { tags: j(k({}, null == t ? void 0 : t.tags), { app_context: 'quests' }) }));
}
function eT(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = H(e, n);
        if (null != t) return t;
    }
    return null;
}
function eA(e) {
    let {
            quest: { config: t }
        } = e,
        n = t.rewardsConfig;
    return n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE);
}
function eN(e) {
    return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP];
}
function eC(e) {
    let { quest: t } = e;
    return eN(t.config);
}
function eR(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function eP(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function ew(e) {
    return null != e && eC({ quest: e });
}
function eD(e) {
    let t = C.r.build(e.config).application.id;
    return eP(e) && t === P.Ts;
}
function eL(e, t) {
    return C.r.build(e.config).features.has(t);
}
function ex(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function ek(e, t) {
    let n = C.r.build(e.config).application.link;
    (0, v._3)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId
    }),
        g.S.dispatch(w.CkL.QUEST_GAME_LINK_OPENED),
        (0, f.Z)(n);
}
let eM = (e, t) => {
        (0, v._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId
        }),
            (0, m.JG)(el(e));
    },
    ej = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eU = (e) => e8(e) || S.Z.isProgressingOnDesktop(e.id),
    eG = (e, t) => {
        var n, r, a, o;
        let s = null == (o = e.userStatus) || null == (a = o.progress) || null == (r = a[t.type]) || null == (n = r.heartbeat) ? void 0 : n.lastBeatAt;
        if (null == s || !eU(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / E.Z.Millis.SECOND, 2);
    },
    eB = (e, t) => {
        var n, r, i, a, o;
        let s = null == (r = e.userStatus) || null == (n = r.progress) ? void 0 : n[t.type],
            l = null != (o = null != (a = null == s ? void 0 : s.value) ? a : null == (i = e.userStatus) ? void 0 : i.streamProgressSeconds) ? o : 0;
        if (e1(e)) {
            let n = S.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + eG(e, t);
    },
    eF = 0.99,
    eV = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * eF, eB(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    eZ = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: a = o.T.ALL } = e,
            s = r.config.taskConfigV2,
            l = null != i ? i : null == (t = Object.values(s.tasks).filter((e) => a.has(e.type))[0]) ? void 0 : t.type,
            c = null != (n = s.tasks[l]) ? n : s.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == c) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let u = c.target,
            d = eV(r, c);
        return {
            progressSeconds: d,
            targetSeconds: u,
            targetMinutes: Math.ceil(u / E.Z.Seconds.MINUTE),
            percentComplete: ej(u, d),
            taskType: l
        };
    },
    eH = (e) => (o.T.ALL.has(e) ? e : null),
    eY = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = o.T.ALL } = e;
        for (let e of Object.values(null != (n = null == (t = r.userStatus) ? void 0 : t.progress) ? n : {})
            .sort((e, t) => {
                var n, r;
                let i = null == e || null == (n = e.heartbeat) ? void 0 : n.lastBeatAt,
                    a = null == t || null == (r = t.heartbeat) ? void 0 : r.lastBeatAt;
                return null != i && null != a ? (new Date(i).valueOf() > new Date(a).valueOf() ? -1 : 1) : null == i && null == a && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null ? (new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1) : null != i && null == a ? -1 : 1;
            })
            .filter(y.lm)) {
            let t = eH(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return eZ({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i
                });
        }
        return eZ({
            quest: r,
            includeTaskTypes: i
        });
    },
    eW = (e, t) => {
        if (eq(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP
            };
        if (e0(e))
            return eY({
                quest: e,
                includeTaskTypes: null != t ? t : e8(e) ? o.T.CONSOLE : o.T.ALL
            });
        if (e1(e))
            if (e3(e))
                return eZ({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE
                });
            else
                return eZ({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO
                });
        return ew(e)
            ? eZ({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP
              })
            : eP(e)
              ? eZ({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY
                })
              : eZ({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP
                });
    };
function eK(e) {
    var t, n, r, i;
    let a = C.r.build(e.config).defaultInGameTask;
    if (null == a) return null;
    let o = null != (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.eventName]) ? void 0 : t.value) ? i : 0,
        s = ej(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s
    };
}
let ez = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function eq(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function eX(e) {
    return eQ(e.targetSeconds - e.progressSeconds);
}
function eQ(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60))
    };
}
function eJ(e) {
    let t = eX(e);
    return e$(t.minutes, t.seconds);
}
function e$(e, t) {
    return ''.concat(String(e).padStart(2, '0'), ':').concat(String(t).padStart(2, '0'));
}
let e0 = ez([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    e1 = ez([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    e2 = ez([o.X.WATCH_VIDEO]),
    e3 = ez([o.X.WATCH_VIDEO_ON_MOBILE]),
    e4 = (e) => e3(e) && !e2(e);
function e5(e) {
    return e0(e);
}
let e6 = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function e8(e) {
    return null != e.userStatus && (e6(e.userStatus, o.X.PLAY_ON_XBOX) || e6(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function e7(e) {
    return !!e1(e) && (0, n(952265).nf)(t_(e.id));
}
function e9() {
    d.Z.open(w.oAB.CONNECTIONS);
}
function te(e, t) {
    let { platformType: n, quest: r } = e;
    (0, v._3)({
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
function tt(e, t) {
    let { quest: n } = e;
    (0, v._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    });
    let r = tf(n);
    if (1 === r.length) return (0, _.Z)({ platformType: r.at(0) });
    u.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, _.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function tn(e, t) {
    let { quest: n } = e;
    (0, v._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        e9();
}
function tr() {
    return window.location.pathname.startsWith(w.Z5c.QUEST_HOME);
}
function ti(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' };
    return null == e ? '' : new Date(e).toLocaleDateString(p.default.locale, t);
}
function ta(e) {
    return 'xbox' === e.connected_account_type ? w.ABu.XBOX : w.ABu.PLAYSTATION;
}
function to(e) {
    return ta(e) === w.ABu.XBOX ? L.t.mytEv7 : L.t.iDiwb2;
}
function ts(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eA({ quest: a }),
        u = null != s ? s : null == o ? void 0 : o.platform,
        d = c
            ? ex({
                  quest: a,
                  idx: null != (r = null == o ? void 0 : o.tier) ? r : null == (t = a.userStatus) ? void 0 : t.claimedTier
              })
            : null,
        f = null != (i = null == d || null == (n = d.messages) ? void 0 : n.redemptionInstructionsByPlatform) ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != u ? f[u] : void 0;
}
function tl(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? L.intl.formatToPlainString(L.t.Piihy8, { gamePublisher: n })
            : L.intl.formatToPlainString(L.t.DV47Gx, {
                  gamePublisher: n,
                  cosponsorName: i
              })
        : L.intl.formatToPlainString(L.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: r
          });
}
function tc(e) {
    let t = eC({ quest: e }) || eR({ quest: e }),
        n = e0(e),
        r = [];
    return t && r.push(P.cd.DESKTOP), n && r.push(P.cd.CONSOLE), r;
}
function tu(e) {
    var t;
    let n = null == (t = ep(e)) ? void 0 : t.expirationMode;
    return !!(0, N.U)() && !!n && G.has(n);
}
function td(e) {
    var t;
    return tu(e) && (null == (t = ep(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tf(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.X.PLAY_ON_XBOX:
                n.push(w.ABu.XBOX);
                break;
            case o.X.PLAY_ON_PLAYSTATION:
                n.push(w.ABu.PLAYSTATION);
        }
    return n;
}
function t_(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function tp(e) {
    let t = e1(e),
        n = eP(e);
    return t || n;
}
function th(e, t) {
    var n, r;
    K(e) || (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null || (null == (r = e.userStatus) ? void 0 : r.completedAt) != null || (0, I.cT)(e.id, t);
}
function tm(e) {
    return {
        [T.jn.QUEST_BAR]: T.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [T.jn.QUEST_BAR_V2]: T.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [T.jn.QUEST_BAR_MOBILE]: T.Ok.MOBILE_HOME_DOCK_AREA
    }[e];
}
function tg(e) {
    let t = tm(e);
    return null != t && P.v6.has(t);
}
let tE = (e) => (e.percentComplete > 0 ? L.intl.formatToPlainString(L.t['c59/Tk'], { remainTime: eJ(e) }) : L.intl.formatToPlainString(L.t.GNsKiY, { remainTime: eJ(e) }));
function tb(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function ty(e) {
    var t, n;
    let r = C.r.build(e).defaultWatchVideoTask;
    return null != (n = null != (t = null == r ? void 0 : r.messages.videoEndCtaButtonLabel) ? t : null == r ? void 0 : r.messages.videoEndCtaTitle) ? n : L.intl.string(L.t.iiTtpK);
}
function tO(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.Z,
        r = tm(e),
        i = null != r ? n.questToDeliverForPlacement.get(r) : void 0;
    return null != (t = null == i ? void 0 : i.adDecisionData) ? t : P.Jp;
}
function tv(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tI(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function tS(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        for (let e of tI(i))
            if (t.has(e)) {
                n.set(r, i);
                break;
            }
    return n;
}
function tT(e) {
    var t, n;
    let { questId: r, videoSessionId: i } = e,
        a = A.ZP.getState().getVideoProgress(r);
    if (null == a) return;
    let o = S.Z.getQuest(r);
    null != o && (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null && (null == (n = o.userStatus) ? void 0 : n.completedAt) == null && th(o, a.maxTimestampSec);
    let s = tb(a.maxTimestampSec, a.duration);
    (0, v.dA)({
        questId: r,
        event: w.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: s,
            video_timestamp_seconds: a.maxTimestampSec,
            video_session_id: i
        }
    }),
        (0, v.dA)({
            questId: r,
            event: w.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: s,
                video_session_id: i,
                network_connection_speed: h.Z.getEffectiveConnectionSpeed()
            }
        });
}
