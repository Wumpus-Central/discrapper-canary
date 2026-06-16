"use strict";
let i;
n.d(t, { Am: () => C, Ay: () => X }), n(321073);
var r = n(17928),
    s = n(228366),
    a = n(155718),
    o = n(392054),
    l = n(495544),
    u = n(734057),
    c = n(309010),
    d = n(287809),
    _ = n(625494),
    h = n(723702),
    f = n(646865),
    p = n(956518),
    E = n(878549),
    m = n(969151),
    g = n(847381),
    A = n(108959),
    I = n(360469),
    T = n(5867),
    S = n(652215);
let y = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        lastCheckedForBadgeableActivities: null,
        dateRangesForSurfaces: {},
    },
    C = [],
    N = [],
    v = new Map(),
    R = new Map(),
    O = new Map(),
    b = new Map(),
    D = new Map();
function L(e, t) {
    return `${t}:${e}`;
}
let w = new Map(),
    M = new Set(),
    P = new Map(),
    x = new Map(),
    k = new Map(),
    U = new Map(),
    G = new Map(),
    F = new Map(),
    V = new Map(),
    B = T.Gd.DISCONNECTED,
    j = T.E8.RESIZABLE,
    H = I.M1.NORMAL;
function Y(e) {
    return e ?? "0";
}
function W(e) {
    let { location: t, applicationId: n, launchId: r, compositeInstanceId: a, participants: o, proxyTicket: h } = e,
        g = (0, p.Ay)(n);
    if (null == g) return;
    let I = (0, m.H)(t),
        y = null != I ? (O.get(I) ?? C) : C,
        N = null != y && 0 === y.length,
        b = D.get(t.id) ?? C,
        M = b.find((e) => e.applicationId === n),
        P = o.map((e) => e.userId),
        x = l.default.getId(),
        k = P.some((e) => e === x),
        U = o.find((e) => e.userId === x)?.sessionId,
        G = o.some((e) => (0, E.S)(e)),
        F = v.get(n),
        j = w.get(L(I ?? null, n)),
        H = j?.launchParams,
        W = {
            applicationId: n,
            location: t,
            launchId: r,
            compositeInstanceId: a,
            url: g,
            userIds: new Set(P),
            participants: o,
            referrerId: F?.referrerId ?? H?.referrerId,
            customId: F?.customId ?? H?.customId,
            proxyTicket: h,
        };
    k && null != F && v.set(F.applicationId, { ...F, ...W, proxyTicket: W.proxyTicket ?? F.proxyTicket }),
        null != F &&
        t.id === F.location.id &&
        n === F.applicationId &&
        ((!k && Array.from(F.userIds).some((e) => e === x)) || !G)
            ? $(F)
            : k &&
              (null == F || F.applicationId !== n || F.location.id !== t.id) &&
              (U === l.default.getSessionId() &&
                  (function (e) {
                      let {
                              applicationId: t,
                              launchId: n,
                              compositeInstanceId: r,
                              location: a,
                              participants: o,
                              isFirstActivityInChannel: h,
                              isStart: E,
                              referrerId: g,
                              customId: I,
                              inviterUserId: y,
                              proxyTicket: C,
                          } = e,
                          N = (0, p.Ay)(t),
                          R = l.default.getSessionId();
                      if (null == N || null == R || v.get(t)?.location.id === a.id) return;
                      let O = (0, m.H)(a),
                          b = u.A.getChannel(O),
                          D = b?.getGuildId();
                      if (null == d.default.getCurrentUser() || (null == D && !b?.isPrivate())) return;
                      i = a;
                      let L = {
                          applicationId: t,
                          url: N,
                          userIds: new Set(o.map((e) => e.userId)),
                          participants: o,
                          connectedSince: Date.now(),
                          launchId: n,
                          compositeInstanceId: r,
                          location: a,
                          referrerId: g,
                          customId: I,
                          proxyTicket: C,
                      };
                      v.set(t, L),
                          _._.dispatch(S.jej.OPEN_EMBEDDED_ACTIVITY, {
                              location: a,
                              applicationId: t,
                              isFirstActivityInChannel: h,
                              isStart: E,
                              participants: o,
                              embeddedActivity: L,
                              inviterUserId: y,
                          }),
                          (0, f.f)()
                              ? ((B = T.Gd.ACTIVITY_POPOUT_WINDOW),
                                s.h.wait(() => {
                                    s.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                }))
                              : (B = O !== c.A.getChannelId() || (0, A.A)(O) ? T.Gd.PIP : T.Gd.PANEL),
                          V.set(
                              (function (e, t) {
                                  return `${e}:${t}`;
                              })(a.id, t),
                              Date.now(),
                          );
                  })({
                      applicationId: n,
                      launchId: r,
                      compositeInstanceId: a,
                      location: t,
                      participants: o,
                      isFirstActivityInChannel: N,
                      isStart: null == M,
                      referrerId: W.referrerId,
                      customId: W.customId,
                      inviterUserId: j?.inviterUserId,
                      proxyTicket: W.proxyTicket,
                  }),
              z({ channelId: I ?? null, applicationId: n }));
    let K = b.filter((e) => e.applicationId !== n);
    if ((P.length > 0 && K.push(W), D.set(t.id, K), null != I)) {
        let e = (O.get(I) ?? []).filter((e) => e.applicationId !== n),
            i = Y((0, m.D)(t)),
            r = (R.get(i) ?? []).filter((e) => e.applicationId !== n || e.location.id !== t.id);
        P.length > 0 && (e.push(W), r.push(W)), O.set(I, e), R.set(i, r);
    }
}
function K(e) {
    let t = e.activity_instances;
    t?.forEach((e) => {
        let { location: t, application_id: n, launch_id: i, composite_instance_id: r, participants: s } = e;
        W({
            location: t,
            applicationId: n,
            launchId: i,
            compositeInstanceId: r,
            participants: s.map((e) => ({ userId: e.user_id, sessionId: e.session_id, nonce: e.nonce })),
        });
    });
}
function $(e) {
    v.delete(e.applicationId), _._.dispatch(S.jej.RELEASE_ACTIVITY_WEB_VIEW);
}
function z(e) {
    let { applicationId: t, channelId: n } = e;
    w.delete(L(n, t));
}
class q extends r.Ay.PersistedStore {
    static displayName = "EmbeddedActivitiesStore";
    static persistKey = "EmbeddedActivities";
    initialize(e) {
        this.waitFor(l.default, u.A, c.A, d.default);
        let t = new Set(e?.everLaunchedActivities ?? []);
        null != e && (y = { ...e, everLaunchedActivities: t });
    }
    getState() {
        return y;
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
            e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(a.YI.VOICE_LAUNCHER),
            delete e.shouldShowNewActivityIndicator,
            { ...e }
        ),
        (e) => ({ ...e, lastCheckedForBadgeableActivities: null }),
        (e) => (delete e.surfacesToShowNewActivityIndicator, { ...e, dateRangesForSurfaces: {} }),
    ];
    getSelfEmbeddedActivityForChannel(e) {
        return null == e ? null : (Array.from(v.values()).find((t) => (0, m.H)(t.location) === e) ?? null);
    }
    getSelfEmbeddedActivityForLocation(e) {
        return null == e ? null : (Array.from(v.values()).find((t) => t.location.id === e.id) ?? null);
    }
    getSelfEmbeddedActivities() {
        return v;
    }
    getEmbeddedActivitiesForGuild(e) {
        return R.get(e) ?? C;
    }
    getEmbeddedActivitiesForChannel(e) {
        return O.get(e) ?? C;
    }
    getEmbeddedActivitiesForLocation(e) {
        return D.get(e.id) ?? C;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        return b.get(e) ?? C;
    }
    getEmbeddedActivitiesByChannel() {
        return O;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = V.get(`${e}:${t}`);
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return w.size > 0;
    }
    getShelfActivities(e) {
        let t = Y(e);
        return P.get(t) ?? N;
    }
    getShelfFetchStatus(e) {
        let t = Y(e);
        return x.get(t);
    }
    shouldFetchShelf(e) {
        let t = Y(e),
            n = x.get(t) ?? { isFetching: !1 },
            i = Date.now() - (n?.lastFetchTimestampMs ?? 0) > 216e5;
        return !n?.isFetching && i;
    }
    getOrientationLockStateForApp(e) {
        return k.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        return U.get(e) ?? this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        return G.get(e) ?? U.get(e) ?? this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return F.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != i) return (0, m.H)(i);
    }
    getConnectedActivityLocation() {
        return i;
    }
    getActivityPanelMode() {
        return B;
    }
    getFocusedLayout() {
        return j;
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
            l: for (let [i, r] of D)
                for (let i of r)
                    if (i.applicationId === t && i.userIds.has(e)) {
                        n = i;
                        break l;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return y.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return w.get(L(t ?? null, e));
    }
    getLaunchStates() {
        return w;
    }
    getActivityPopoutWindowLayout() {
        return H;
    }
}
let Z = new q(s.h, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function (e) {
            let { applicationId: t, layoutMode: n } = e;
            F.set(t, n);
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t } = e;
            O.clear(), R.clear(), D.clear(), b.clear(), t.forEach((e) => K(e));
            let n = l.default.getId();
            for (let e of Array.from(v.values()))
                Z.getEmbeddedActivitiesForLocation(e.location).some(
                    (t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n),
                ) || $(e);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            K(t);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e,
                n = O.get(t.id) ?? [];
            O.set(t.id, []);
            let i = Y(t.guild_id),
                r = (R.get(i) ?? []).filter((e) => (0, m.H)(e.location) !== t.id);
            R.set(i, r),
                n.forEach((e) => {
                    D.delete(e.location.id);
                }),
                b.set(t.id, []);
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
            let {
                applicationId: t,
                componentId: n,
                commandOrigin: i,
                launchParams: r,
                channelId: s,
                inviterUserId: a,
            } = e;
            w.set(L(s, t), { isLaunching: !0, componentId: n, inviterUserId: a, launchParams: r }),
                (j = i === o.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? T.E8.NO_CHAT : T.E8.RESIZABLE);
        },
        EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: function (e) {
            let { applicationId: t, channelId: n, proxyTicket: i } = e,
                r = L(n, t),
                s = w.get(r);
            null != s && w.set(r, { ...s, proxyTicket: i });
        },
        EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: function (e) {
            let { applicationId: t, proxyTicket: n } = e,
                i = v.get(t);
            if (null == i) return !1;
            v.set(t, { ...i, proxyTicket: n });
        },
        EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: function (e) {
            let { applicationId: t, refreshing: n } = e;
            n ? M.add(t) : M.delete(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function (e) {
            let { applicationId: t } = e;
            y.everLaunchedActivities.add(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: function (e) {
            let { applicationId: t, channelId: n } = e;
            z({ applicationId: t, channelId: n }), M.delete(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_CANCEL: function (e) {
            let { applicationId: t, channelId: n } = e;
            z({ applicationId: t, channelId: n }), M.delete(t);
        },
        EMBEDDED_ACTIVITY_CLOSE: function (e) {
            let { applicationId: t } = e,
                n = v.get(t);
            v.delete(t), n?.location.id === i?.id && (i = void 0);
        },
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function (e) {
            let { layout: t } = e;
            H = t;
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { applicationId: t, launchId: n, compositeInstanceId: i, location: r, participants: s } = e,
                a = (0, m.H)(r),
                o = w.get(L(a ?? null, t));
            W({
                location: r,
                applicationId: t,
                launchId: n,
                compositeInstanceId: i,
                participants: s.map((e) => ({ userId: e.user_id, sessionId: e.session_id, nonce: e.nonce })),
                proxyTicket: o?.proxyTicket,
            });
        },
        LOCAL_ACTIVITY_UPDATE: function (e) {
            let { activity: t } = e;
            if (null == t) return !1;
            let n = v.get(t.application_id ?? "");
            if (null == n) return !1;
            v.set(n.applicationId, { ...n });
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
            let { applicationId: t, config: n } = e,
                i = v.get(t);
            null != i && v.set(i.applicationId, { ...i, config: n });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
            let { guildId: t } = e,
                n = Y(t),
                i = x.get(n);
            x.set(n, { isFetching: !0, lastFetchTimestampMs: i?.lastFetchTimestampMs }),
                (y.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
            let { guildId: t, activities: n } = e,
                i = Y(t);
            P.set(i, n);
            let r = Date.now();
            !(function (e) {
                let { activities: t, now: n } = e,
                    i = (0, g.A)((0, h.getOS)()),
                    r = t.reduce((e, t) => {
                        let r = t.client_platform_config[i];
                        if (null == r.label_from || null == r.label_until) return e;
                        let s = { fromDate: r.label_from, untilDate: r.label_until },
                            o = new Date(r.label_from).getTime(),
                            l = new Date(r.label_until).getTime();
                        return (
                            o > n ||
                                l < n ||
                                Object.values(a.YI)
                                    .filter((e) => !r.omit_badge_from_surfaces.includes(e))
                                    .forEach((t) => {
                                        let n = e[t];
                                        (null == n || new Date(n.fromDate).getTime() < o) && (e[t] = s);
                                    }),
                            e
                        );
                    }, {});
                y.dateRangesForSurfaces = r;
            })({ activities: n, now: r }),
                x.set(i, { isFetching: !1, lastFetchTimestampMs: r });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
            let { guildId: t } = e,
                n = Y(t),
                i = x.get(n);
            x.set(n, { isFetching: !1, lastFetchTimestampMs: i?.lastFetchTimestampMs });
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
            let { applicationId: t, lockState: n, pictureInPictureLockState: i, gridLockState: r } = e;
            null == n ? k.delete(t) : k.set(t, n),
                null === i ? U.delete(t) : void 0 !== i && U.set(t, i),
                null === r ? G.delete(t) : void 0 !== r && G.set(t, r);
        },
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: function (e) {
            let { activityPanelMode: t } = e;
            B = t;
        },
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function (e) {
            let { focusedActivityLayout: t } = e;
            j = t;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == i) return;
            let n = (0, m.H)(i);
            null != n && n !== t && B === T.Gd.PANEL && (B = T.Gd.PIP);
        },
        POPOUT_WINDOW_CLOSE: function (e) {
            let { key: t } = e;
            t === S.MLl.ACTIVITY_POPOUT && (B = T.Gd.PIP);
        },
    }),
    X = Z;
