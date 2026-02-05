"use strict";
let r;
n.d(t, { Am: () => v, Ay: () => eb }), n(321073);
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
    p = n(646865),
    h = n(956518),
    m = n(878549),
    g = n(969151),
    E = n(847381),
    A = n(108959),
    I = n(360469),
    T = n(5867),
    y = n(652215);
let S = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        lastCheckedForBadgeableActivities: null,
        dateRangesForSurfaces: {},
    },
    v = [],
    C = [],
    b = "0",
    N = new Map(),
    R = new Map(),
    O = new Map(),
    D = new Map(),
    L = new Map();
function w(e, t) {
    return `${t}:${e}`;
}
let x = new Map(),
    P = new Set(),
    M = new Map(),
    k = new Map(),
    U = new Map(),
    G = new Map(),
    V = new Map(),
    F = new Map(),
    B = 216e5,
    j = new Map(),
    H = T.Gd.DISCONNECTED,
    Y = T.E8.RESIZABLE,
    W = I.M1.NORMAL;
function K(e) {
    return e ?? b;
}
function z(e) {
    let { location: t, applicationId: n, launchId: r, compositeInstanceId: i, participants: a, proxyTicket: s } = e,
        o = (0, h.Ay)(n);
    if (null == o) return;
    let u = (0, g.H)(t),
        c = null != u ? (O.get(u) ?? v) : v,
        d = null != c && 0 === c.length,
        _ = L.get(t.id) ?? v,
        f = _.find((e) => e.applicationId === n),
        p = a.map((e) => e.userId),
        E = l.default.getId(),
        A = p.some((e) => e === E),
        I = a.find((e) => e.userId === E)?.sessionId,
        T = a.some((e) => (0, m.S)(e)),
        y = N.get(n),
        S = x.get(w(u ?? null, n)),
        C = S?.launchParams,
        b = {
            applicationId: n,
            location: t,
            launchId: r,
            compositeInstanceId: i,
            url: o,
            userIds: new Set(p),
            participants: a,
            referrerId: y?.referrerId ?? C?.referrerId,
            customId: y?.customId ?? C?.customId,
            proxyTicket: s,
        };
    A && null != y && N.set(y.applicationId, { ...y, ...b, proxyTicket: b.proxyTicket ?? y.proxyTicket });
    let D = !T;
    null != y &&
    t.id === y.location.id &&
    n === y.applicationId &&
    ((!A && Array.from(y.userIds).some((e) => e === E)) || D)
        ? q(y)
        : A &&
          (null == y || y.applicationId !== n || y.location.id !== t.id) &&
          (I === l.default.getSessionId() &&
              ee({
                  applicationId: n,
                  launchId: r,
                  compositeInstanceId: i,
                  location: t,
                  participants: a,
                  isFirstActivityInChannel: d,
                  isStart: null == f,
                  referrerId: b.referrerId,
                  customId: b.customId,
                  inviterUserId: S?.inviterUserId,
                  proxyTicket: b.proxyTicket,
              }),
          em({ channelId: u ?? null, applicationId: n }));
    let P = _.filter((e) => e.applicationId !== n);
    if ((p.length > 0 && P.push(b), L.set(t.id, P), null != u)) {
        let e = (O.get(u) ?? []).filter((e) => e.applicationId !== n),
            r = K((0, g.D)(t)),
            i = (R.get(r) ?? []).filter((e) => e.applicationId !== n || e.location.id !== t.id);
        p.length > 0 && (e.push(b), i.push(b)), O.set(u, e), R.set(r, i);
    }
}
function $(e) {
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
function q(e) {
    N.delete(e.applicationId), _._.dispatch(y.jej.RELEASE_ACTIVITY_WEB_VIEW);
}
function Z(e) {
    let { guilds: t } = e;
    O.clear(), R.clear(), L.clear(), D.clear(), t.forEach((e) => $(e));
    let n = l.default.getId();
    for (let e of Array.from(N.values()))
        eC
            .getEmbeddedActivitiesForLocation(e.location)
            .some((t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || q(e);
}
function Q(e) {
    let { guild: t } = e;
    $(t);
}
function X(e) {
    let { channel: t } = e,
        n = O.get(t.id) ?? [];
    O.set(t.id, []);
    let r = K(t.guild_id),
        i = (R.get(r) ?? []).filter((e) => (0, g.H)(e.location) !== t.id);
    R.set(r, i),
        n.forEach((e) => {
            L.delete(e.location.id);
        }),
        D.set(t.id, []);
}
function J(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e,
        s = (0, g.H)(i),
        o = x.get(w(s ?? null, t));
    z({
        location: i,
        applicationId: t,
        launchId: n,
        compositeInstanceId: r,
        participants: a.map((e) => ({ userId: e.user_id, sessionId: e.session_id, nonce: e.nonce })),
        proxyTicket: o?.proxyTicket,
    });
}
function ee(e) {
    let {
            applicationId: t,
            launchId: n,
            compositeInstanceId: i,
            location: s,
            participants: o,
            isFirstActivityInChannel: f,
            isStart: m,
            referrerId: E,
            customId: I,
            inviterUserId: S,
            proxyTicket: v,
        } = e,
        C = (0, h.Ay)(t),
        b = l.default.getSessionId();
    if (null == C || null == b || N.get(t)?.location.id === s.id) return !1;
    let R = (0, g.H)(s),
        O = u.A.getChannel(R),
        D = O?.getGuildId();
    if (null == d.default.getCurrentUser() || (null == D && !O?.isPrivate())) return !1;
    r = s;
    let L = {
        applicationId: t,
        url: C,
        userIds: new Set(o.map((e) => e.userId)),
        participants: o,
        connectedSince: Date.now(),
        launchId: n,
        compositeInstanceId: i,
        location: s,
        referrerId: E,
        customId: I,
        proxyTicket: v,
    };
    N.set(t, L),
        _._.dispatch(y.jej.OPEN_EMBEDDED_ACTIVITY, {
            location: s,
            applicationId: t,
            isFirstActivityInChannel: f,
            isStart: m,
            participants: o,
            embeddedActivity: L,
            inviterUserId: S,
        }),
        (0, p.f)()
            ? ((H = T.Gd.ACTIVITY_POPOUT_WINDOW),
              a.h.wait(() => {
                  a.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
              }))
            : (H = R !== c.A.getChannelId() || (0, A.A)(R) ? T.Gd.PIP : T.Gd.PANEL),
        j.set(ey(s.id, t), Date.now());
}
function et(e) {
    let { applicationId: t } = e,
        n = N.get(t);
    N.delete(t), n?.location.id === r?.id && (r = void 0);
}
function en(e) {
    let { layout: t } = e;
    W = t;
}
function er(e) {
    let { activity: t } = e;
    if (null == t) return !1;
    let n = N.get(t.application_id ?? "");
    if (null == n) return !1;
    N.set(n.applicationId, { ...n });
}
function ei(e) {
    let { applicationId: t, config: n } = e,
        r = N.get(t);
    null != r && N.set(r.applicationId, { ...r, config: n });
}
function ea(e) {
    let { guildId: t } = e,
        n = K(t),
        r = k.get(n);
    k.set(n, { isFetching: !0, lastFetchTimestampMs: r?.lastFetchTimestampMs }),
        (S.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
}
function es(e) {
    let { guildId: t } = e,
        n = K(t),
        r = k.get(n);
    k.set(n, { isFetching: !1, lastFetchTimestampMs: r?.lastFetchTimestampMs });
}
function eo(e) {
    let { activities: t, now: n } = e,
        r = (0, E.A)((0, f.getOS)()),
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
    S.dateRangesForSurfaces = i;
}
function el(e) {
    let { guildId: t, activities: n } = e,
        r = K(t);
    M.set(r, n);
    let i = Date.now();
    eo({ activities: n, now: i }), k.set(r, { isFetching: !1, lastFetchTimestampMs: i });
}
function eu(e) {
    let { applicationId: t, componentId: n, commandOrigin: r, launchParams: i, channelId: a, inviterUserId: s } = e;
    x.set(w(a, t), { isLaunching: !0, componentId: n, inviterUserId: s, launchParams: i }),
        (Y = r === o.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? T.E8.NO_CHAT : T.E8.RESIZABLE);
}
function ec(e) {
    let { applicationId: t, channelId: n, proxyTicket: r } = e,
        i = w(n, t),
        a = x.get(i);
    null != a && x.set(i, { ...a, proxyTicket: r });
}
function ed(e) {
    let { applicationId: t, proxyTicket: n } = e,
        r = N.get(t);
    if (null == r) return !1;
    N.set(t, { ...r, proxyTicket: n });
}
function e_(e) {
    let { applicationId: t, refreshing: n } = e;
    n ? P.add(t) : P.delete(t);
}
function ef(e) {
    let { applicationId: t } = e;
    S.everLaunchedActivities.add(t);
}
function ep(e) {
    let { applicationId: t, channelId: n } = e;
    em({ applicationId: t, channelId: n }), P.delete(t);
}
function eh(e) {
    let { applicationId: t, channelId: n } = e;
    em({ applicationId: t, channelId: n }), P.delete(t);
}
function em(e) {
    let { applicationId: t, channelId: n } = e;
    x.delete(w(n, t));
}
function eg(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? U.delete(t) : U.set(t, n),
        null === r ? G.delete(t) : void 0 !== r && G.set(t, r),
        null === i ? V.delete(t) : void 0 !== i && V.set(t, i);
}
function eE(e) {
    let { activityPanelMode: t } = e;
    H = t;
}
function eA(e) {
    let { focusedActivityLayout: t } = e;
    Y = t;
}
function eI(e) {
    let { applicationId: t, layoutMode: n } = e;
    F.set(t, n);
}
function eT(e) {
    let { channelId: t } = e;
    if (null == r) return;
    let n = (0, g.H)(r);
    null != n && n !== t && H === T.Gd.PANEL && (H = T.Gd.PIP);
}
function ey(e, t) {
    return `${e}:${t}`;
}
function eS(e) {
    let { key: t } = e;
    t === y.MLl.ACTIVITY_POPOUT && (H = T.Gd.PIP);
}
class ev extends i.Ay.PersistedStore {
    static displayName = "EmbeddedActivitiesStore";
    static persistKey = "EmbeddedActivities";
    initialize(e) {
        this.waitFor(l.default, u.A, c.A, d.default);
        let t = new Set(e?.everLaunchedActivities ?? []);
        null != e && (S = { ...e, everLaunchedActivities: t });
    }
    getState() {
        return S;
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
        return null == e ? null : (Array.from(N.values()).find((t) => (0, g.H)(t.location) === e) ?? null);
    }
    getSelfEmbeddedActivityForLocation(e) {
        return null == e ? null : (Array.from(N.values()).find((t) => t.location.id === e.id) ?? null);
    }
    getSelfEmbeddedActivities() {
        return N;
    }
    getEmbeddedActivitiesForGuild(e) {
        return R.get(e) ?? v;
    }
    getEmbeddedActivitiesForChannel(e) {
        return O.get(e) ?? v;
    }
    getEmbeddedActivitiesForLocation(e) {
        return L.get(e.id) ?? v;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        return D.get(e) ?? v;
    }
    getEmbeddedActivitiesByChannel() {
        return O;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = j.get(ey(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return x.size > 0;
    }
    getShelfActivities(e) {
        let t = K(e);
        return M.get(t) ?? C;
    }
    getShelfFetchStatus(e) {
        let t = K(e);
        return k.get(t);
    }
    shouldFetchShelf(e) {
        let t = K(e),
            n = k.get(t) ?? { isFetching: !1 },
            r = Date.now() - (n?.lastFetchTimestampMs ?? 0) > B;
        return !n?.isFetching && r;
    }
    getOrientationLockStateForApp(e) {
        return U.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        return G.get(e) ?? this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        return V.get(e) ?? G.get(e) ?? this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return F.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != r) return (0, g.H)(r);
    }
    getConnectedActivityLocation() {
        return r;
    }
    getActivityPanelMode() {
        return H;
    }
    getFocusedLayout() {
        return Y;
    }
    getCurrentEmbeddedActivity() {
        let e = this.getConnectedActivityLocation();
        return this.getSelfEmbeddedActivityForLocation(e) ?? void 0;
    }
    isProxyTicketRefreshing(e) {
        return P.has(e);
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            l: for (let [r, i] of L)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break l;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return S.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return x.get(w(t ?? null, e));
    }
    getLaunchStates() {
        return x;
    }
    getActivityPopoutWindowLayout() {
        return W;
    }
}
let eC = new ev(a.h, {
        ACTIVITY_LAYOUT_MODE_UPDATE: eI,
        CONNECTION_OPEN_SUPPLEMENTAL: Z,
        GUILD_CREATE: Q,
        CHANNEL_DELETE: X,
        EMBEDDED_ACTIVITY_LAUNCH_START: eu,
        EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: ec,
        EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: ed,
        EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: e_,
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: ef,
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: ep,
        EMBEDDED_ACTIVITY_LAUNCH_CANCEL: eh,
        EMBEDDED_ACTIVITY_CLOSE: et,
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: en,
        EMBEDDED_ACTIVITY_UPDATE_V2: J,
        LOCAL_ACTIVITY_UPDATE: er,
        EMBEDDED_ACTIVITY_SET_CONFIG: ei,
        EMBEDDED_ACTIVITY_FETCH_SHELF: ea,
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: el,
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: es,
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eg,
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: eE,
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eA,
        CHANNEL_SELECT: eT,
        POPOUT_WINDOW_CLOSE: eS,
    }),
    eb = eC;
