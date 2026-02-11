"use strict";
let r;
n.d(t, { Am: () => C, Ay: () => eN }), n(321073);
var i = n(311907),
    a = n(73153),
    s = n(155718),
    o = n(392054),
    l = n(961350),
    u = n(734057),
    c = n(309010),
    d = n(287809),
    _ = n(203982),
    f = n(723702),
    h = n(646865),
    p = n(956518),
    g = n(878549),
    E = n(969151),
    A = n(847381),
    I = n(108959),
    T = n(360469),
    y = n(5867),
    S = n(652215);
let v = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        lastCheckedForBadgeableActivities: null,
        dateRangesForSurfaces: {},
    },
    C = [],
    b = [],
    N = "0",
    R = new Map(),
    O = new Map(),
    D = new Map(),
    L = new Map(),
    w = new Map();
function x(e, t) {
    return `${t}:${e}`;
}
let P = new Map(),
    M = new Set(),
    k = new Map(),
    U = new Map(),
    G = new Map(),
    F = new Map(),
    V = new Map(),
    B = new Map(),
    j = 216e5,
    H = new Map(),
    Y = y.Gd.DISCONNECTED,
    W = y.E8.RESIZABLE,
    K = T.M1.NORMAL;
function $(e) {
    return e ?? N;
}
function z(e) {
    let { location: t, applicationId: n, launchId: r, compositeInstanceId: i, participants: a, proxyTicket: s } = e,
        o = (0, p.Ay)(n);
    if (null == o) return;
    let u = (0, E.H)(t),
        c = null != u ? (D.get(u) ?? C) : C,
        d = null != c && 0 === c.length,
        _ = w.get(t.id) ?? C,
        f = _.find((e) => e.applicationId === n),
        h = a.map((e) => e.userId),
        A = l.default.getId(),
        I = h.some((e) => e === A),
        T = a.find((e) => e.userId === A)?.sessionId,
        y = a.some((e) => (0, g.S)(e)),
        S = R.get(n),
        v = P.get(x(u ?? null, n)),
        b = v?.launchParams,
        N = {
            applicationId: n,
            location: t,
            launchId: r,
            compositeInstanceId: i,
            url: o,
            userIds: new Set(h),
            participants: a,
            referrerId: S?.referrerId ?? b?.referrerId,
            customId: S?.customId ?? b?.customId,
            proxyTicket: s,
        };
    I && null != S && R.set(S.applicationId, { ...S, ...N, proxyTicket: N.proxyTicket ?? S.proxyTicket });
    let L = !y;
    null != S &&
    t.id === S.location.id &&
    n === S.applicationId &&
    ((!I && Array.from(S.userIds).some((e) => e === A)) || L)
        ? X(S)
        : I &&
          (null == S || S.applicationId !== n || S.location.id !== t.id) &&
          (T === l.default.getSessionId() &&
              et({
                  applicationId: n,
                  launchId: r,
                  compositeInstanceId: i,
                  location: t,
                  participants: a,
                  isFirstActivityInChannel: d,
                  isStart: null == f,
                  referrerId: N.referrerId,
                  customId: N.customId,
                  inviterUserId: v?.inviterUserId,
                  proxyTicket: N.proxyTicket,
              }),
          eg({ channelId: u ?? null, applicationId: n }));
    let M = _.filter((e) => e.applicationId !== n);
    if ((h.length > 0 && M.push(N), w.set(t.id, M), null != u)) {
        let e = (D.get(u) ?? []).filter((e) => e.applicationId !== n),
            r = $((0, E.D)(t)),
            i = (O.get(r) ?? []).filter((e) => e.applicationId !== n || e.location.id !== t.id);
        h.length > 0 && (e.push(N), i.push(N)), D.set(u, e), O.set(r, i);
    }
}
function q(e) {
    let t = e.activity_instances;
    t?.forEach((e) => {
        let { location: t, application_id: n, launch_id: r, composite_instance_id: i, participants: a } = e;
        z({
            location: t,
            applicationId: n,
            launchId: r,
            compositeInstanceId: i,
            participants: a.map((e) => ({ userId: e.user_id, sessionId: e.session_id, nonce: e.nonce })),
        });
    });
}
function X(e) {
    R.delete(e.applicationId), _._.dispatch(S.jej.RELEASE_ACTIVITY_WEB_VIEW);
}
function Z(e) {
    let { guilds: t } = e;
    D.clear(), O.clear(), w.clear(), L.clear(), t.forEach((e) => q(e));
    let n = l.default.getId();
    for (let e of Array.from(R.values()))
        eb
            .getEmbeddedActivitiesForLocation(e.location)
            .some((t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || X(e);
}
function Q(e) {
    let { guild: t } = e;
    q(t);
}
function J(e) {
    let { channel: t } = e,
        n = D.get(t.id) ?? [];
    D.set(t.id, []);
    let r = $(t.guild_id),
        i = (O.get(r) ?? []).filter((e) => (0, E.H)(e.location) !== t.id);
    O.set(r, i),
        n.forEach((e) => {
            w.delete(e.location.id);
        }),
        L.set(t.id, []);
}
function ee(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e,
        s = (0, E.H)(i),
        o = P.get(x(s ?? null, t));
    z({
        location: i,
        applicationId: t,
        launchId: n,
        compositeInstanceId: r,
        participants: a.map((e) => ({ userId: e.user_id, sessionId: e.session_id, nonce: e.nonce })),
        proxyTicket: o?.proxyTicket,
    });
}
function et(e) {
    let {
            applicationId: t,
            launchId: n,
            compositeInstanceId: i,
            location: s,
            participants: o,
            isFirstActivityInChannel: f,
            isStart: g,
            referrerId: A,
            customId: T,
            inviterUserId: v,
            proxyTicket: C,
        } = e,
        b = (0, p.Ay)(t),
        N = l.default.getSessionId();
    if (null == b || null == N || R.get(t)?.location.id === s.id) return !1;
    let O = (0, E.H)(s),
        D = u.A.getChannel(O),
        L = D?.getGuildId();
    if (null == d.default.getCurrentUser() || (null == L && !D?.isPrivate())) return !1;
    r = s;
    let w = {
        applicationId: t,
        url: b,
        userIds: new Set(o.map((e) => e.userId)),
        participants: o,
        connectedSince: Date.now(),
        launchId: n,
        compositeInstanceId: i,
        location: s,
        referrerId: A,
        customId: T,
        proxyTicket: C,
    };
    R.set(t, w),
        _._.dispatch(S.jej.OPEN_EMBEDDED_ACTIVITY, {
            location: s,
            applicationId: t,
            isFirstActivityInChannel: f,
            isStart: g,
            participants: o,
            embeddedActivity: w,
            inviterUserId: v,
        }),
        (0, h.f)()
            ? ((Y = y.Gd.ACTIVITY_POPOUT_WINDOW),
              a.h.wait(() => {
                  a.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
              }))
            : (Y = O !== c.A.getChannelId() || (0, I.A)(O) ? y.Gd.PIP : y.Gd.PANEL),
        H.set(eS(s.id, t), Date.now());
}
function en(e) {
    let { applicationId: t } = e,
        n = R.get(t);
    R.delete(t), n?.location.id === r?.id && (r = void 0);
}
function er(e) {
    let { layout: t } = e;
    K = t;
}
function ei(e) {
    let { activity: t } = e;
    if (null == t) return !1;
    let n = R.get(t.application_id ?? "");
    if (null == n) return !1;
    R.set(n.applicationId, { ...n });
}
function ea(e) {
    let { applicationId: t, config: n } = e,
        r = R.get(t);
    null != r && R.set(r.applicationId, { ...r, config: n });
}
function es(e) {
    let { guildId: t } = e,
        n = $(t),
        r = U.get(n);
    U.set(n, { isFetching: !0, lastFetchTimestampMs: r?.lastFetchTimestampMs }),
        (v.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
}
function eo(e) {
    let { guildId: t } = e,
        n = $(t),
        r = U.get(n);
    U.set(n, { isFetching: !1, lastFetchTimestampMs: r?.lastFetchTimestampMs });
}
function el(e) {
    let { activities: t, now: n } = e,
        r = (0, A.A)((0, f.getOS)()),
        i = t.reduce((e, t) => {
            let i = t.client_platform_config[r];
            if (null == i.label_from || null == i.label_until) return e;
            let a = { fromDate: i.label_from, untilDate: i.label_until },
                o = new Date(i.label_from).getTime(),
                l = new Date(i.label_until).getTime();
            return (
                o > n ||
                    l < n ||
                    Object.values(s.YI)
                        .filter((e) => !i.omit_badge_from_surfaces.includes(e))
                        .forEach((t) => {
                            let n = e[t];
                            (null == n || new Date(n.fromDate).getTime() < o) && (e[t] = a);
                        }),
                e
            );
        }, {});
    v.dateRangesForSurfaces = i;
}
function eu(e) {
    let { guildId: t, activities: n } = e,
        r = $(t);
    k.set(r, n);
    let i = Date.now();
    el({ activities: n, now: i }), U.set(r, { isFetching: !1, lastFetchTimestampMs: i });
}
function ec(e) {
    let { applicationId: t, componentId: n, commandOrigin: r, launchParams: i, channelId: a, inviterUserId: s } = e;
    P.set(x(a, t), { isLaunching: !0, componentId: n, inviterUserId: s, launchParams: i }),
        (W = r === o.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? y.E8.NO_CHAT : y.E8.RESIZABLE);
}
function ed(e) {
    let { applicationId: t, channelId: n, proxyTicket: r } = e,
        i = x(n, t),
        a = P.get(i);
    null != a && P.set(i, { ...a, proxyTicket: r });
}
function e_(e) {
    let { applicationId: t, proxyTicket: n } = e,
        r = R.get(t);
    if (null == r) return !1;
    R.set(t, { ...r, proxyTicket: n });
}
function ef(e) {
    let { applicationId: t, refreshing: n } = e;
    n ? M.add(t) : M.delete(t);
}
function eh(e) {
    let { applicationId: t } = e;
    v.everLaunchedActivities.add(t);
}
function ep(e) {
    let { applicationId: t, channelId: n } = e;
    eg({ applicationId: t, channelId: n }), M.delete(t);
}
function em(e) {
    let { applicationId: t, channelId: n } = e;
    eg({ applicationId: t, channelId: n }), M.delete(t);
}
function eg(e) {
    let { applicationId: t, channelId: n } = e;
    P.delete(x(n, t));
}
function eE(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? G.delete(t) : G.set(t, n),
        null === r ? F.delete(t) : void 0 !== r && F.set(t, r),
        null === i ? V.delete(t) : void 0 !== i && V.set(t, i);
}
function eA(e) {
    let { activityPanelMode: t } = e;
    Y = t;
}
function eI(e) {
    let { focusedActivityLayout: t } = e;
    W = t;
}
function eT(e) {
    let { applicationId: t, layoutMode: n } = e;
    B.set(t, n);
}
function ey(e) {
    let { channelId: t } = e;
    if (null == r) return;
    let n = (0, E.H)(r);
    null != n && n !== t && Y === y.Gd.PANEL && (Y = y.Gd.PIP);
}
function eS(e, t) {
    return `${e}:${t}`;
}
function ev(e) {
    let { key: t } = e;
    t === S.MLl.ACTIVITY_POPOUT && (Y = y.Gd.PIP);
}
class eC extends i.Ay.PersistedStore {
    static displayName = "EmbeddedActivitiesStore";
    static persistKey = "EmbeddedActivities";
    initialize(e) {
        this.waitFor(l.default, u.A, c.A, d.default);
        let t = new Set(e?.everLaunchedActivities ?? []);
        null != e && (v = { ...e, everLaunchedActivities: t });
    }
    getState() {
        return v;
    }
    static migrations = [
        (e) => ({ ...e, seenFeaturedActivities: [], shouldShowNewActivityIndicator: !1 }),
        (e) => (delete e.seenFeaturedActivities, { ...e }),
        (e) => (delete e.seenActivities, { ...e }),
        (e) => (
            delete e.currentFreeActivity,
            delete e.lastFreeActivityRotationTimestampMs,
            delete e.freePeriodActivities,
            delete e.shouldShowFreeActivityIndicator,
            { ...e }
        ),
        (e) => ({ ...e, seenNewActivities: {}, seenUpdatedActivities: {} }),
        (e) => {
            let t = new Set(e.everLaunchedActivities ?? []);
            return { ...e, everLaunchedActivities: t };
        },
        (e) => (delete e.usersHavePlayedByApp, { ...e }),
        (e) => (
            (e.surfacesToShowNewActivityIndicator = new Set()),
            e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(s.YI.VOICE_LAUNCHER),
            delete e.shouldShowNewActivityIndicator,
            { ...e }
        ),
        (e) => ({ ...e, lastCheckedForBadgeableActivities: null }),
        (e) => (delete e.surfacesToShowNewActivityIndicator, { ...e, dateRangesForSurfaces: {} }),
    ];
    getSelfEmbeddedActivityForChannel(e) {
        return null == e ? null : (Array.from(R.values()).find((t) => (0, E.H)(t.location) === e) ?? null);
    }
    getSelfEmbeddedActivityForLocation(e) {
        return null == e ? null : (Array.from(R.values()).find((t) => t.location.id === e.id) ?? null);
    }
    getSelfEmbeddedActivities() {
        return R;
    }
    getEmbeddedActivitiesForGuild(e) {
        return O.get(e) ?? C;
    }
    getEmbeddedActivitiesForChannel(e) {
        return D.get(e) ?? C;
    }
    getEmbeddedActivitiesForLocation(e) {
        return w.get(e.id) ?? C;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        return L.get(e) ?? C;
    }
    getEmbeddedActivitiesByChannel() {
        return D;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = H.get(eS(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return P.size > 0;
    }
    getShelfActivities(e) {
        let t = $(e);
        return k.get(t) ?? b;
    }
    getShelfFetchStatus(e) {
        let t = $(e);
        return U.get(t);
    }
    shouldFetchShelf(e) {
        let t = $(e),
            n = U.get(t) ?? { isFetching: !1 },
            r = Date.now() - (n?.lastFetchTimestampMs ?? 0) > j;
        return !n?.isFetching && r;
    }
    getOrientationLockStateForApp(e) {
        return G.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        return F.get(e) ?? this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        return V.get(e) ?? F.get(e) ?? this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return B.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != r) return (0, E.H)(r);
    }
    getConnectedActivityLocation() {
        return r;
    }
    getActivityPanelMode() {
        return Y;
    }
    getFocusedLayout() {
        return W;
    }
    getCurrentEmbeddedActivity() {
        let e = this.getConnectedActivityLocation();
        return this.getSelfEmbeddedActivityForLocation(e) ?? void 0;
    }
    isProxyTicketRefreshing(e) {
        return M.has(e);
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            l: for (let [r, i] of w)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break l;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return v.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return P.get(x(t ?? null, e));
    }
    getLaunchStates() {
        return P;
    }
    getActivityPopoutWindowLayout() {
        return K;
    }
}
let eb = new eC(a.h, {
        ACTIVITY_LAYOUT_MODE_UPDATE: eT,
        CONNECTION_OPEN_SUPPLEMENTAL: Z,
        GUILD_CREATE: Q,
        CHANNEL_DELETE: J,
        EMBEDDED_ACTIVITY_LAUNCH_START: ec,
        EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: ed,
        EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: e_,
        EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: ef,
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eh,
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: ep,
        EMBEDDED_ACTIVITY_LAUNCH_CANCEL: em,
        EMBEDDED_ACTIVITY_CLOSE: en,
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: er,
        EMBEDDED_ACTIVITY_UPDATE_V2: ee,
        LOCAL_ACTIVITY_UPDATE: ei,
        EMBEDDED_ACTIVITY_SET_CONFIG: ea,
        EMBEDDED_ACTIVITY_FETCH_SHELF: es,
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: eu,
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: eo,
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eE,
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: eA,
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eI,
        CHANNEL_SELECT: ey,
        POPOUT_WINDOW_CLOSE: ev,
    }),
    eN = eb;
