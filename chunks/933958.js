"use strict";
let r;
n.d(t, { Am: () => N, Ay: () => Q }), n(321073);
var i = n(311907),
    s = n(73153),
    a = n(155718),
    o = n(392054),
    l = n(961350),
    u = n(734057),
    c = n(309010),
    d = n(287809),
    _ = n(203982),
    f = n(723702),
    p = n(646865),
    h = n(956518),
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
    N = [],
    v = [],
    C = new Map(),
    O = new Map(),
    R = new Map(),
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
    H = T.E8.RESIZABLE,
    j = I.M1.NORMAL;
function Y(e) {
    return e ?? "0";
}
function W(e) {
    let { location: t, applicationId: n, launchId: i, compositeInstanceId: a, participants: o, proxyTicket: f } = e,
        g = (0, h.Ay)(n);
    if (null == g) return;
    let I = (0, m.H)(t),
        y = null != I ? (R.get(I) ?? N) : N,
        v = null != y && 0 === y.length,
        b = D.get(t.id) ?? N,
        M = b.find((e) => e.applicationId === n),
        P = o.map((e) => e.userId),
        x = l.default.getId(),
        k = P.some((e) => e === x),
        U = o.find((e) => e.userId === x)?.sessionId,
        G = o.some((e) => (0, E.S)(e)),
        F = C.get(n),
        H = w.get(L(I ?? null, n)),
        j = H?.launchParams,
        W = {
            applicationId: n,
            location: t,
            launchId: i,
            compositeInstanceId: a,
            url: g,
            userIds: new Set(P),
            participants: o,
            referrerId: F?.referrerId ?? j?.referrerId,
            customId: F?.customId ?? j?.customId,
            proxyTicket: f,
        };
    k && null != F && C.set(F.applicationId, { ...F, ...W, proxyTicket: W.proxyTicket ?? F.proxyTicket }),
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
                              compositeInstanceId: i,
                              location: a,
                              participants: o,
                              isFirstActivityInChannel: f,
                              isStart: E,
                              referrerId: g,
                              customId: I,
                              inviterUserId: y,
                              proxyTicket: N,
                          } = e,
                          v = (0, h.Ay)(t),
                          O = l.default.getSessionId();
                      if (null == v || null == O || C.get(t)?.location.id === a.id) return;
                      let R = (0, m.H)(a),
                          b = u.A.getChannel(R),
                          D = b?.getGuildId();
                      if (null == d.default.getCurrentUser() || (null == D && !b?.isPrivate())) return;
                      r = a;
                      let L = {
                          applicationId: t,
                          url: v,
                          userIds: new Set(o.map((e) => e.userId)),
                          participants: o,
                          connectedSince: Date.now(),
                          launchId: n,
                          compositeInstanceId: i,
                          location: a,
                          referrerId: g,
                          customId: I,
                          proxyTicket: N,
                      };
                      C.set(t, L),
                          _._.dispatch(S.jej.OPEN_EMBEDDED_ACTIVITY, {
                              location: a,
                              applicationId: t,
                              isFirstActivityInChannel: f,
                              isStart: E,
                              participants: o,
                              embeddedActivity: L,
                              inviterUserId: y,
                          }),
                          (0, p.f)()
                              ? ((B = T.Gd.ACTIVITY_POPOUT_WINDOW),
                                s.h.wait(() => {
                                    s.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                }))
                              : (B = R !== c.A.getChannelId() || (0, A.A)(R) ? T.Gd.PIP : T.Gd.PANEL),
                          V.set(
                              (function (e, t) {
                                  return `${e}:${t}`;
                              })(a.id, t),
                              Date.now(),
                          );
                  })({
                      applicationId: n,
                      launchId: i,
                      compositeInstanceId: a,
                      location: t,
                      participants: o,
                      isFirstActivityInChannel: v,
                      isStart: null == M,
                      referrerId: W.referrerId,
                      customId: W.customId,
                      inviterUserId: H?.inviterUserId,
                      proxyTicket: W.proxyTicket,
                  }),
              z({ channelId: I ?? null, applicationId: n }));
    let K = b.filter((e) => e.applicationId !== n);
    if ((P.length > 0 && K.push(W), D.set(t.id, K), null != I)) {
        let e = (R.get(I) ?? []).filter((e) => e.applicationId !== n),
            r = Y((0, m.D)(t)),
            i = (O.get(r) ?? []).filter((e) => e.applicationId !== n || e.location.id !== t.id);
        P.length > 0 && (e.push(W), i.push(W)), R.set(I, e), O.set(r, i);
    }
}
function K(e) {
    let t = e.activity_instances;
    t?.forEach((e) => {
        let { location: t, application_id: n, launch_id: r, composite_instance_id: i, participants: s } = e;
        W({
            location: t,
            applicationId: n,
            launchId: r,
            compositeInstanceId: i,
            participants: s.map((e) => ({ userId: e.user_id, sessionId: e.session_id, nonce: e.nonce })),
        });
    });
}
function $(e) {
    C.delete(e.applicationId), _._.dispatch(S.jej.RELEASE_ACTIVITY_WEB_VIEW);
}
function z(e) {
    let { applicationId: t, channelId: n } = e;
    w.delete(L(n, t));
}
class q extends i.Ay.PersistedStore {
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
        return null == e ? null : (Array.from(C.values()).find((t) => (0, m.H)(t.location) === e) ?? null);
    }
    getSelfEmbeddedActivityForLocation(e) {
        return null == e ? null : (Array.from(C.values()).find((t) => t.location.id === e.id) ?? null);
    }
    getSelfEmbeddedActivities() {
        return C;
    }
    getEmbeddedActivitiesForGuild(e) {
        return O.get(e) ?? N;
    }
    getEmbeddedActivitiesForChannel(e) {
        return R.get(e) ?? N;
    }
    getEmbeddedActivitiesForLocation(e) {
        return D.get(e.id) ?? N;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        return b.get(e) ?? N;
    }
    getEmbeddedActivitiesByChannel() {
        return R;
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
        return P.get(t) ?? v;
    }
    getShelfFetchStatus(e) {
        let t = Y(e);
        return x.get(t);
    }
    shouldFetchShelf(e) {
        let t = Y(e),
            n = x.get(t) ?? { isFetching: !1 },
            r = Date.now() - (n?.lastFetchTimestampMs ?? 0) > 216e5;
        return !n?.isFetching && r;
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
        if (null != r) return (0, m.H)(r);
    }
    getConnectedActivityLocation() {
        return r;
    }
    getActivityPanelMode() {
        return B;
    }
    getFocusedLayout() {
        return H;
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
            l: for (let [r, i] of D)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
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
        return j;
    }
}
let X = new q(s.h, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function (e) {
            let { applicationId: t, layoutMode: n } = e;
            F.set(t, n);
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t } = e;
            R.clear(), O.clear(), D.clear(), b.clear(), t.forEach((e) => K(e));
            let n = l.default.getId();
            for (let e of Array.from(C.values()))
                X.getEmbeddedActivitiesForLocation(e.location).some(
                    (t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n),
                ) || $(e);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            K(t);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e,
                n = R.get(t.id) ?? [];
            R.set(t.id, []);
            let r = Y(t.guild_id),
                i = (O.get(r) ?? []).filter((e) => (0, m.H)(e.location) !== t.id);
            O.set(r, i),
                n.forEach((e) => {
                    D.delete(e.location.id);
                }),
                b.set(t.id, []);
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
            let {
                applicationId: t,
                componentId: n,
                commandOrigin: r,
                launchParams: i,
                channelId: s,
                inviterUserId: a,
            } = e;
            w.set(L(s, t), { isLaunching: !0, componentId: n, inviterUserId: a, launchParams: i }),
                (H = r === o.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? T.E8.NO_CHAT : T.E8.RESIZABLE);
        },
        EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: function (e) {
            let { applicationId: t, channelId: n, proxyTicket: r } = e,
                i = L(n, t),
                s = w.get(i);
            null != s && w.set(i, { ...s, proxyTicket: r });
        },
        EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: function (e) {
            let { applicationId: t, proxyTicket: n } = e,
                r = C.get(t);
            if (null == r) return !1;
            C.set(t, { ...r, proxyTicket: n });
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
                n = C.get(t);
            C.delete(t), n?.location.id === r?.id && (r = void 0);
        },
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function (e) {
            let { layout: t } = e;
            j = t;
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: s } = e,
                a = (0, m.H)(i),
                o = w.get(L(a ?? null, t));
            W({
                location: i,
                applicationId: t,
                launchId: n,
                compositeInstanceId: r,
                participants: s.map((e) => ({ userId: e.user_id, sessionId: e.session_id, nonce: e.nonce })),
                proxyTicket: o?.proxyTicket,
            });
        },
        LOCAL_ACTIVITY_UPDATE: function (e) {
            let { activity: t } = e;
            if (null == t) return !1;
            let n = C.get(t.application_id ?? "");
            if (null == n) return !1;
            C.set(n.applicationId, { ...n });
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
            let { applicationId: t, config: n } = e,
                r = C.get(t);
            null != r && C.set(r.applicationId, { ...r, config: n });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
            let { guildId: t } = e,
                n = Y(t),
                r = x.get(n);
            x.set(n, { isFetching: !0, lastFetchTimestampMs: r?.lastFetchTimestampMs }),
                (y.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
            let { guildId: t, activities: n } = e,
                r = Y(t);
            P.set(r, n);
            let i = Date.now();
            !(function (e) {
                let { activities: t, now: n } = e,
                    r = (0, g.A)((0, f.getOS)()),
                    i = t.reduce((e, t) => {
                        let i = t.client_platform_config[r];
                        if (null == i.label_from || null == i.label_until) return e;
                        let s = { fromDate: i.label_from, untilDate: i.label_until },
                            o = new Date(i.label_from).getTime(),
                            l = new Date(i.label_until).getTime();
                        return (
                            o > n ||
                                l < n ||
                                Object.values(a.YI)
                                    .filter((e) => !i.omit_badge_from_surfaces.includes(e))
                                    .forEach((t) => {
                                        let n = e[t];
                                        (null == n || new Date(n.fromDate).getTime() < o) && (e[t] = s);
                                    }),
                            e
                        );
                    }, {});
                y.dateRangesForSurfaces = i;
            })({ activities: n, now: i }),
                x.set(r, { isFetching: !1, lastFetchTimestampMs: i });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
            let { guildId: t } = e,
                n = Y(t),
                r = x.get(n);
            x.set(n, { isFetching: !1, lastFetchTimestampMs: r?.lastFetchTimestampMs });
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
            let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
            null == n ? k.delete(t) : k.set(t, n),
                null === r ? U.delete(t) : void 0 !== r && U.set(t, r),
                null === i ? G.delete(t) : void 0 !== i && G.set(t, i);
        },
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: function (e) {
            let { activityPanelMode: t } = e;
            B = t;
        },
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function (e) {
            let { focusedActivityLayout: t } = e;
            H = t;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == r) return;
            let n = (0, m.H)(r);
            null != n && n !== t && B === T.Gd.PANEL && (B = T.Gd.PIP);
        },
        POPOUT_WINDOW_CLOSE: function (e) {
            let { key: t } = e;
            t === S.MLl.ACTIVITY_POPOUT && (B = T.Gd.PIP);
        },
    }),
    Q = X;
