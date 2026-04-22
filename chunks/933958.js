"use strict";
let r;
n.d(t, { Am: () => N, Ay: () => Q }), n(321073);
var i = n(311907),
    s = n(73153),
    a = n(155718),
    o = n(392054),
    l = n(961350),
    u = n(734057),
    d = n(309010),
    c = n(287809),
    _ = n(203982),
    f = n(723702),
    E = n(646865),
    h = n(956518),
    p = n(878549),
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
    O = [],
    R = new Map(),
    v = new Map(),
    C = new Map(),
    b = new Map(),
    D = new Map();
function L(e, t) {
    return `${t}:${e}`;
}
let w = new Map(),
    M = new Set(),
    P = new Map(),
    U = new Map(),
    k = new Map(),
    x = new Map(),
    G = new Map(),
    V = new Map(),
    F = new Map(),
    B = T.Gd.DISCONNECTED,
    H = T.E8.RESIZABLE,
    Y = I.M1.NORMAL;
function W(e) {
    return e ?? "0";
}
function j(e) {
    let { location: t, applicationId: n, launchId: i, compositeInstanceId: a, participants: o, proxyTicket: f } = e,
        g = (0, h.Ay)(n);
    if (null == g) return;
    let I = (0, m.H)(t),
        y = null != I ? (C.get(I) ?? N) : N,
        O = null != y && 0 === y.length,
        b = D.get(t.id) ?? N,
        M = b.find((e) => e.applicationId === n),
        P = o.map((e) => e.userId),
        U = l.default.getId(),
        k = P.some((e) => e === U),
        x = o.find((e) => e.userId === U)?.sessionId,
        G = o.some((e) => (0, p.S)(e)),
        V = R.get(n),
        H = w.get(L(I ?? null, n)),
        Y = H?.launchParams,
        j = {
            applicationId: n,
            location: t,
            launchId: i,
            compositeInstanceId: a,
            url: g,
            userIds: new Set(P),
            participants: o,
            referrerId: V?.referrerId ?? Y?.referrerId,
            customId: V?.customId ?? Y?.customId,
            proxyTicket: f,
        };
    k && null != V && R.set(V.applicationId, { ...V, ...j, proxyTicket: j.proxyTicket ?? V.proxyTicket }),
        null != V &&
        t.id === V.location.id &&
        n === V.applicationId &&
        ((!k && Array.from(V.userIds).some((e) => e === U)) || !G)
            ? $(V)
            : k &&
              (null == V || V.applicationId !== n || V.location.id !== t.id) &&
              (x === l.default.getSessionId() &&
                  (function (e) {
                      let {
                              applicationId: t,
                              launchId: n,
                              compositeInstanceId: i,
                              location: a,
                              participants: o,
                              isFirstActivityInChannel: f,
                              isStart: p,
                              referrerId: g,
                              customId: I,
                              inviterUserId: y,
                              proxyTicket: N,
                          } = e,
                          O = (0, h.Ay)(t),
                          v = l.default.getSessionId();
                      if (null == O || null == v || R.get(t)?.location.id === a.id) return;
                      let C = (0, m.H)(a),
                          b = u.A.getChannel(C),
                          D = b?.getGuildId();
                      if (null == c.default.getCurrentUser() || (null == D && !b?.isPrivate())) return;
                      r = a;
                      let L = {
                          applicationId: t,
                          url: O,
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
                      R.set(t, L),
                          _._.dispatch(S.jej.OPEN_EMBEDDED_ACTIVITY, {
                              location: a,
                              applicationId: t,
                              isFirstActivityInChannel: f,
                              isStart: p,
                              participants: o,
                              embeddedActivity: L,
                              inviterUserId: y,
                          }),
                          (0, E.f)()
                              ? ((B = T.Gd.ACTIVITY_POPOUT_WINDOW),
                                s.h.wait(() => {
                                    s.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                }))
                              : (B = C !== d.A.getChannelId() || (0, A.A)(C) ? T.Gd.PIP : T.Gd.PANEL),
                          F.set(
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
                      isFirstActivityInChannel: O,
                      isStart: null == M,
                      referrerId: j.referrerId,
                      customId: j.customId,
                      inviterUserId: H?.inviterUserId,
                      proxyTicket: j.proxyTicket,
                  }),
              z({ channelId: I ?? null, applicationId: n }));
    let K = b.filter((e) => e.applicationId !== n);
    if ((P.length > 0 && K.push(j), D.set(t.id, K), null != I)) {
        let e = (C.get(I) ?? []).filter((e) => e.applicationId !== n),
            r = W((0, m.D)(t)),
            i = (v.get(r) ?? []).filter((e) => e.applicationId !== n || e.location.id !== t.id);
        P.length > 0 && (e.push(j), i.push(j)), C.set(I, e), v.set(r, i);
    }
}
function K(e) {
    let t = e.activity_instances;
    t?.forEach((e) => {
        let { location: t, application_id: n, launch_id: r, composite_instance_id: i, participants: s } = e;
        j({
            location: t,
            applicationId: n,
            launchId: r,
            compositeInstanceId: i,
            participants: s.map((e) => ({ userId: e.user_id, sessionId: e.session_id, nonce: e.nonce })),
        });
    });
}
function $(e) {
    R.delete(e.applicationId), _._.dispatch(S.jej.RELEASE_ACTIVITY_WEB_VIEW);
}
function z(e) {
    let { applicationId: t, channelId: n } = e;
    w.delete(L(n, t));
}
class q extends i.Ay.PersistedStore {
    static displayName = "EmbeddedActivitiesStore";
    static persistKey = "EmbeddedActivities";
    initialize(e) {
        this.waitFor(l.default, u.A, d.A, c.default);
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
        return null == e ? null : (Array.from(R.values()).find((t) => (0, m.H)(t.location) === e) ?? null);
    }
    getSelfEmbeddedActivityForLocation(e) {
        return null == e ? null : (Array.from(R.values()).find((t) => t.location.id === e.id) ?? null);
    }
    getSelfEmbeddedActivities() {
        return R;
    }
    getEmbeddedActivitiesForGuild(e) {
        return v.get(e) ?? N;
    }
    getEmbeddedActivitiesForChannel(e) {
        return C.get(e) ?? N;
    }
    getEmbeddedActivitiesForLocation(e) {
        return D.get(e.id) ?? N;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        return b.get(e) ?? N;
    }
    getEmbeddedActivitiesByChannel() {
        return C;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = F.get(`${e}:${t}`);
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return w.size > 0;
    }
    getShelfActivities(e) {
        let t = W(e);
        return P.get(t) ?? O;
    }
    getShelfFetchStatus(e) {
        let t = W(e);
        return U.get(t);
    }
    shouldFetchShelf(e) {
        let t = W(e),
            n = U.get(t) ?? { isFetching: !1 },
            r = Date.now() - (n?.lastFetchTimestampMs ?? 0) > 216e5;
        return !n?.isFetching && r;
    }
    getOrientationLockStateForApp(e) {
        return k.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        return x.get(e) ?? this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        return G.get(e) ?? x.get(e) ?? this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return V.get(e);
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
        return Y;
    }
}
let X = new q(s.h, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function (e) {
            let { applicationId: t, layoutMode: n } = e;
            V.set(t, n);
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t } = e;
            C.clear(), v.clear(), D.clear(), b.clear(), t.forEach((e) => K(e));
            let n = l.default.getId();
            for (let e of Array.from(R.values()))
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
                n = C.get(t.id) ?? [];
            C.set(t.id, []);
            let r = W(t.guild_id),
                i = (v.get(r) ?? []).filter((e) => (0, m.H)(e.location) !== t.id);
            v.set(r, i),
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
                r = R.get(t);
            if (null == r) return !1;
            R.set(t, { ...r, proxyTicket: n });
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
                n = R.get(t);
            R.delete(t), n?.location.id === r?.id && (r = void 0);
        },
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function (e) {
            let { layout: t } = e;
            Y = t;
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: s } = e,
                a = (0, m.H)(i),
                o = w.get(L(a ?? null, t));
            j({
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
            let n = R.get(t.application_id ?? "");
            if (null == n) return !1;
            R.set(n.applicationId, { ...n });
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
            let { applicationId: t, config: n } = e,
                r = R.get(t);
            null != r && R.set(r.applicationId, { ...r, config: n });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
            let { guildId: t } = e,
                n = W(t),
                r = U.get(n);
            U.set(n, { isFetching: !0, lastFetchTimestampMs: r?.lastFetchTimestampMs }),
                (y.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
            let { guildId: t, activities: n } = e,
                r = W(t);
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
                U.set(r, { isFetching: !1, lastFetchTimestampMs: i });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
            let { guildId: t } = e,
                n = W(t),
                r = U.get(n);
            U.set(n, { isFetching: !1, lastFetchTimestampMs: r?.lastFetchTimestampMs });
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
            let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
            null == n ? k.delete(t) : k.set(t, n),
                null === r ? x.delete(t) : void 0 !== r && x.set(t, r),
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
