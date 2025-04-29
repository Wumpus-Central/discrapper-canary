n.d(t, {
    $H: () => eD,
    $J: () => e3,
    AV: () => ef,
    B2: () => tE,
    B3: () => tu,
    BM: () => e6,
    Bg: () => eE,
    Bz: () => e5,
    C1: () => to,
    C9: () => ti,
    Dr: () => eP,
    F9: () => tm,
    FE: () => ek,
    FI: () => t_,
    FX: () => em,
    Fs: () => ta,
    GN: () => e_,
    Gd: () => tf,
    Jg: () => eA,
    K: () => ev,
    KM: () => eL,
    Kr: () => eg,
    LM: () => eI,
    MM: () => tS,
    Mo: () => tT,
    Nj: () => eR,
    OG: () => tt,
    PM: () => eu,
    Qe: () => V,
    Rs: () => ec,
    Sf: () => tb,
    U3: () => $,
    V$: () => te,
    VB: () => th,
    Vl: () => eQ,
    WP: () => ee,
    Xh: () => es,
    Xv: () => ey,
    ZZ: () => Y,
    Zp: () => tp,
    _D: () => H,
    _j: () => tr,
    _p: () => tc,
    b7: () => ez,
    bA: () => tg,
    eE: () => tO,
    f$: () => tl,
    f2: () => ej,
    fY: () => e7,
    gI: () => e9,
    hF: () => tv,
    hQ: () => er,
    iQ: () => q,
    il: () => eK,
    lQ: () => K,
    o9: () => eM,
    oo: () => eN,
    pO: () => ew,
    q6: () => Q,
    q8: () => e2,
    qe: () => ty,
    t2: () => ed,
    u7: () => td,
    vQ: () => eO,
    vR: () => eS,
    xN: () => eb,
    xn: () => eh,
    yH: () => ts,
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
    u = n(742635),
    d = n(570140),
    f = n(230711),
    _ = n(782568);
n(597688);
var p = n(231757),
    h = n(706454),
    m = n(866960),
    g = n(572004),
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
    R = n(566078),
    P = n(312046),
    w = n(46140),
    D = n(981631),
    L = n(701488),
    x = n(388032);
function M(e, t, n) {
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
                M(e, t, n[t]);
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
function V(e) {
    try {
        return (0, o.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e || null == (t = e.config) ? void 0 : t.config_version, "'"), n), !1;
    }
}
let F = (e) => e.application_id === L.Ev || e.platform === D.M7m.XBOX,
    Z = (e) => e.platform === D.M7m.PS4 || e.platform === D.M7m.PS5;
function H(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = R.r.build(t.config).application.name.toLowerCase();
    return F(e) || Z(e) ? n === r : null != e.application_id && W(e.application_id, t);
}
function Y(e, t) {
    for (let [n, r] of e) if (H(t, r) && !z(r)) return r;
}
function W(e, t) {
    return null != R.r.build(t.config).application.ids.find((t) => t === e);
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
        .with({ config_version: 2 }, (e) => (0, P.Q)(e))
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
        cosponsorMetadata: (0, P.s)(e.cosponsor_metadata)
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
    return null != t && 'expiresAtPremium' in t && null != t.expiresAtPremium ? tn(t.expiresAtPremium) : null;
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
    v.Z.captureException(e, U(k({}, t), { tags: U(k({}, null == t ? void 0 : t.tags), { app_context: 'quests' }) }));
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
    return e.taskConfig.type === u.L.FIRST_PARTY && null != e.taskConfig.tasks[a.X.PLAY_ON_DESKTOP];
}
function eR(e) {
    let { quest: t } = e;
    return eC(t.config);
}
function eP(e) {
    let { quest: t } = e;
    return t.config.taskConfig.type === u.L.FIRST_PARTY && null != t.config.taskConfig.tasks[a.X.STREAM_ON_DESKTOP];
}
function ew(e) {
    return e.config.taskConfig.type === u.L.FIRST_PARTY && null != e.config.taskConfig.tasks[a.X.PLAY_ACTIVITY];
}
function eD(e) {
    return null != e && eR({ quest: e });
}
function eL(e) {
    let t = R.r.build(e.config).application.id;
    return ew(e) && t === w.Ts;
}
function ex(e, t) {
    return R.r.build(e.config).features.has(t);
}
function eM(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function ek(e, t) {
    let n = R.r.build(e.config).application.link;
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
                (0, _.Z)(n);
        }
    });
}
let ej = (e, t) => {
        (0, I._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId
        }),
            (0, g.JG)(ec(e));
    },
    eU = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eG = (e) => e5(e) || T.Z.isProgressingOnDesktop(e.id),
    eB = (e, t) => {
        var n, r, o, a;
        let s = null == (a = e.userStatus) || null == (o = a.progress) || null == (r = o[t.eventName]) || null == (n = r.heartbeat) ? void 0 : n.lastBeatAt;
        if (null == s || !eG(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / E.Z.Millis.SECOND, 2);
    },
    eV = (e, t) => {
        var n, r, i, o, a;
        let s = null == (r = e.userStatus) || null == (n = r.progress) ? void 0 : n[t.eventName],
            l = null != (a = null != (o = null == s ? void 0 : s.value) ? o : null == (i = e.userStatus) ? void 0 : i.streamProgressSeconds) ? a : 0;
        if (e2(e)) {
            let n = T.Z.getOptimisticProgress(e.id, t.eventName);
            return null == n || n < l ? l : n;
        }
        return l + eB(e, t);
    },
    eF = 0.99,
    eZ = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let o = Math.min(r * eF, eV(e, t));
        return Math.max((0, i.floor)(o, 2), 0);
    },
    eH = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: o = a.T.ALL } = e,
            s = r.config.taskConfig;
        if (s.type !== u.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(s.type, '!'));
        let l = null != i ? i : null == (t = Object.values(s.tasks).filter((e) => o.has(e.eventName))[0]) ? void 0 : t.eventName,
            c = null != (n = s.tasks[l]) ? n : s.tasks[a.X.STREAM_ON_DESKTOP];
        if (null == c) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let d = c.target,
            f = eZ(r, c);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / E.Z.Seconds.MINUTE),
            percentComplete: eU(d, f),
            taskType: l
        };
    },
    eY = (e) => (a.T.ALL.has(e) ? e : null),
    eW = (e) => {
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
            let t = eY(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return eH({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i
                });
        }
        return eH({
            quest: r,
            includeTaskTypes: i
        });
    },
    eK = (e, t) =>
        e.config.taskConfig.type !== u.L.FIRST_PARTY
            ? {
                  progressSeconds: 0,
                  targetSeconds: 1,
                  targetMinutes: 1,
                  percentComplete: 0,
                  taskType: a.X.STREAM_ON_DESKTOP
              }
            : e1(e)
              ? eW({
                    quest: e,
                    includeTaskTypes: null != t ? t : e5(e) ? a.T.CONSOLE : a.T.ALL
                })
              : e2(e)
                ? eH({
                      quest: e,
                      taskType: a.X.WATCH_VIDEO
                  })
                : eD(e)
                  ? eH({
                        quest: e,
                        taskType: a.X.PLAY_ON_DESKTOP
                    })
                  : ew(e)
                    ? eH({
                          quest: e,
                          taskType: a.X.PLAY_ACTIVITY
                      })
                    : eH({
                          quest: e,
                          taskType: a.X.STREAM_ON_DESKTOP
                      });
function ez(e) {
    var t, n, r, i;
    let o = R.r.build(e.config).defaultInGameTask;
    if (null == o) return null;
    let a = null != (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[o.eventName]) ? void 0 : t.value) ? i : 0,
        s = eU(o.target, a);
    return {
        title: o.title,
        description: o.description,
        target: o.target,
        progress: a,
        percentComplete: s
    };
}
let eq = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]);
function eQ(e) {
    return e.config.taskConfig.type === u.L.THIRD_PARTY;
}
function eX(e) {
    return eJ(e.targetSeconds - e.progressSeconds);
}
function eJ(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60))
    };
}
function e$(e) {
    let t = eX(e);
    return e0(t.minutes, t.seconds);
}
function e0(e, t) {
    return ''.concat(String(e).padStart(2, '0'), ':').concat(String(t).padStart(2, '0'));
}
let e1 = eq([a.X.PLAY_ON_XBOX, a.X.PLAY_ON_PLAYSTATION]),
    e2 = eq([a.X.WATCH_VIDEO]);
function e3(e) {
    return e1(e);
}
let e4 = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let o = new Date(i).valueOf();
    return !isNaN(o) && o > Date.now();
};
function e5(e) {
    return null != e.userStatus && (e4(e.userStatus, a.X.PLAY_ON_XBOX) || e4(e.userStatus, a.X.PLAY_ON_PLAYSTATION));
}
function e6(e) {
    return !!e2(e) && (0, n(952265).nf)(td(e.id));
}
function e8() {
    f.Z.open(D.oAB.CONNECTIONS);
}
function e7(e, t) {
    let { platformType: n, quest: r } = e;
    (0, I._3)({
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
function e9(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    });
    let r = tu(n);
    if (1 === r.length) return (0, p.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, p.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function te(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        e8();
}
function tt() {
    return window.location.pathname.startsWith(D.Z5c.QUEST_HOME);
}
function tn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' };
    return null == e ? '' : new Date(e).toLocaleDateString(h.default.locale, t);
}
function tr(e) {
    return 'xbox' === e.connected_account_type ? D.ABu.XBOX : D.ABu.PLAYSTATION;
}
function ti(e) {
    return tr(e) === D.ABu.XBOX ? x.t.mytEv7 : x.t.iDiwb2;
}
function to(e) {
    var t, n, r, i;
    let { quest: o, rewardCode: a, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eN({ quest: o }),
        u = null != s ? s : null == a ? void 0 : a.platform,
        d = c
            ? eM({
                  quest: o,
                  idx: null != (r = null == a ? void 0 : a.tier) ? r : null == (t = o.userStatus) ? void 0 : t.claimedTier
              })
            : null,
        f = null != (i = null == d || null == (n = d.messages) ? void 0 : n.redemptionInstructionsByPlatform) ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != u ? f[u] : void 0;
}
function ta(e) {
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
function ts(e) {
    let t = eR({ quest: e }) || eP({ quest: e }),
        n = e1(e),
        r = [];
    return t && r.push(w.cd.DESKTOP), n && r.push(w.cd.CONSOLE), r;
}
function tl(e) {
    var t;
    let n = null == (t = eh(e)) ? void 0 : t.expirationMode;
    return !!(0, C.U)() && !!n && B.has(n);
}
function tc(e) {
    var t;
    return tl(e) && (null == (t = eh(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tu(e) {
    let t = Object.keys(e.config.taskConfig.tasks),
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
function td(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function tf(e) {
    let t = e2(e),
        n = ew(e);
    return t || n;
}
function t_(e, t) {
    var n, r;
    z(e) || (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null || (null == (r = e.userStatus) ? void 0 : r.completedAt) != null || (0, S.cT)(e.id, t);
}
function tp(e) {
    return {
        [A.jn.QUEST_BAR]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [A.jn.QUEST_BAR_V2]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [A.jn.QUEST_BAR_MOBILE]: A.Ok.MOBILE_HOME_DOCK_AREA
    }[e];
}
function th(e) {
    let t = tp(e);
    return null != t && w.v6.has(t);
}
let tm = (e) => (e.percentComplete > 0 ? x.intl.formatToPlainString(x.t['c59/Tk'], { remainTime: e$(e) }) : x.intl.formatToPlainString(x.t.GNsKiY, { remainTime: e$(e) }));
function tg(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tE(e) {
    var t, n, r, i;
    return null != (i = null != (r = null == (t = e.videoMetadata) ? void 0 : t.messages.videoEndCtaButtonLabel) ? r : null == (n = e.videoMetadata) ? void 0 : n.messages.videoEndCtaTitle) ? i : x.intl.string(x.t.iiTtpK);
}
function tb(e) {
    return null != e
        ? {
              campaignId: e.campaign_id,
              adsetId: e.adset_id,
              adId: e.ad_id,
              creativeId: e.creative_id,
              creativeType: e.creative_type
          }
        : void 0;
}
function ty(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.Z,
        n = tp(e),
        r = null != n ? t.questToDeliverForPlacement.get(n) : void 0;
    return k({ decisionId: null == r ? void 0 : r.decisionId }, null == r ? void 0 : r.adIdentifiers);
}
function tO(e) {
    return null != e
        ? {
              ad_id: e.adId,
              adset_id: e.adsetId,
              campaign_id: e.campaignId,
              creative_id: e.creativeId,
              creative_type: e.creativeType,
              decision_id: e.decisionId
          }
        : {};
}
function tv(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tI(e) {
    return new Set(e.config.taskConfig.type === u.L.FIRST_PARTY ? Object.keys(e.config.taskConfig.tasks) : [a.X.ACHIEVEMENT_IN_ACTIVITY]);
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
        o = N.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let a = T.Z.getQuest(r);
    null != a && (null == (t = a.userStatus) ? void 0 : t.enrolledAt) != null && (null == (n = a.userStatus) ? void 0 : n.completedAt) == null && t_(a, o.maxTimestampSec);
    let s = tg(o.maxTimestampSec, o.duration);
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
                network_connection_speed: m.Z.getEffectiveConnectionSpeed()
            }
        });
}
