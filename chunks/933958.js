"use strict";
let i;
n.d(t, { Am: () => C, Ay: () => Z }), n(321073);
var r = n(17928),
    s = n(228366),
    a = n(155718),
    o = n(392054),
    l = n(495544),
    d = n(734057),
    _ = n(309010),
    u = n(287809),
    c = n(625494),
    E = n(723702),
    h = n(646865),
    m = n(956518),
    f = n(878549),
    g = n(969151),
    p = n(847381),
    A = n(108959),
    I = n(360469),
    T = n(5867),
    S = n(652215);
let N = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        lastCheckedForBadgeableActivities: null,
        dateRangesForSurfaces: {},
    },
    C = [],
    R = [],
    O = new Map(),
    y = new Map(),
    v = new Map(),
    D = new Map(),
    L = new Map();
function b(e, t) {
    return `${t}:${e}`;
}
let w = new Map(),
    P = new Set(),
    k = new Map(),
    M = new Map(),
    U = new Map(),
    x = new Map(),
    G = new Map(),
    V = new Map(),
    F = new Map(),
    B = T.Gd.DISCONNECTED,
    H = T.E8.RESIZABLE,
    j = I.M1.NORMAL;
function W(e) {
    return e ?? "0";
}
function Y(e) {
    let { location: t, applicationId: n, launchId: r, compositeInstanceId: a, participants: o, proxyTicket: E } = e,
        p = (0, m.Ay)(n);
    if (null == p) return;
    let I = (0, g.H)(t),
        N = null != I ? (v.get(I) ?? C) : C,
        R = null != N && 0 === N.length,
        D = L.get(t.id) ?? C,
        P = D.find((e) => e.applicationId === n),
        k = o.map((e) => e.userId),
        M = l.default.getId(),
        U = k.some((e) => e === M),
        x = o.find((e) => e.userId === M)?.sessionId,
        G = o.some((e) => (0, f.S)(e)),
        V = O.get(n),
        H = w.get(b(I ?? null, n)),
        j = H?.launchParams,
        Y = {
            applicationId: n,
            location: t,
            launchId: r,
            compositeInstanceId: a,
            url: p,
            userIds: new Set(k),
            participants: o,
            referrerId: V?.referrerId ?? j?.referrerId,
            customId: V?.customId ?? j?.customId,
            proxyTicket: E,
        };
    U && null != V && O.set(V.applicationId, { ...V, ...Y, proxyTicket: Y.proxyTicket ?? V.proxyTicket }),
        null != V &&
        t.id === V.location.id &&
        n === V.applicationId &&
        ((!U && Array.from(V.userIds).some((e) => e === M)) || !G)
            ? z(V)
            : U &&
              (null == V || V.applicationId !== n || V.location.id !== t.id) &&
              (x === l.default.getSessionId() &&
                  (function (e) {
                      let {
                              applicationId: t,
                              launchId: n,
                              compositeInstanceId: r,
                              location: a,
                              participants: o,
                              isFirstActivityInChannel: E,
                              isStart: f,
                              referrerId: p,
                              customId: I,
                              inviterUserId: N,
                              proxyTicket: C,
                          } = e,
                          R = (0, m.Ay)(t),
                          y = l.default.getSessionId();
                      if (null == R || null == y || O.get(t)?.location.id === a.id) return;
                      let v = (0, g.H)(a),
                          D = d.A.getChannel(v),
                          L = D?.getGuildId();
                      if (null == u.default.getCurrentUser() || (null == L && !D?.isPrivate())) return;
                      i = a;
                      let b = {
                          applicationId: t,
                          url: R,
                          userIds: new Set(o.map((e) => e.userId)),
                          participants: o,
                          connectedSince: Date.now(),
                          launchId: n,
                          compositeInstanceId: r,
                          location: a,
                          referrerId: p,
                          customId: I,
                          proxyTicket: C,
                      };
                      O.set(t, b),
                          c._.dispatch(S.jej.OPEN_EMBEDDED_ACTIVITY, {
                              location: a,
                              applicationId: t,
                              isFirstActivityInChannel: E,
                              isStart: f,
                              participants: o,
                              embeddedActivity: b,
                              inviterUserId: N,
                          }),
                          (0, h.f)()
                              ? ((B = T.Gd.ACTIVITY_POPOUT_WINDOW),
                                s.h.wait(() => {
                                    s.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                }))
                              : (B = v !== _.A.getChannelId() || (0, A.A)(v) ? T.Gd.PIP : T.Gd.PANEL),
                          F.set(
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
                      isFirstActivityInChannel: R,
                      isStart: null == P,
                      referrerId: Y.referrerId,
                      customId: Y.customId,
                      inviterUserId: H?.inviterUserId,
                      proxyTicket: Y.proxyTicket,
                  }),
              $({ channelId: I ?? null, applicationId: n }));
    let K = D.filter((e) => e.applicationId !== n);
    if ((k.length > 0 && K.push(Y), L.set(t.id, K), null != I)) {
        let e = (v.get(I) ?? []).filter((e) => e.applicationId !== n),
            i = W((0, g.D)(t)),
            r = (y.get(i) ?? []).filter((e) => e.applicationId !== n || e.location.id !== t.id);
        k.length > 0 && (e.push(Y), r.push(Y)), v.set(I, e), y.set(i, r);
    }
}
function K(e) {
    let t = e.activity_instances;
    t?.forEach((e) => {
        let { location: t, application_id: n, launch_id: i, composite_instance_id: r, participants: s } = e;
        Y({
            location: t,
            applicationId: n,
            launchId: i,
            compositeInstanceId: r,
            participants: s.map((e) => ({ userId: e.user_id, sessionId: e.session_id, nonce: e.nonce })),
        });
    });
}
function z(e) {
    O.delete(e.applicationId), c._.dispatch(S.jej.RELEASE_ACTIVITY_WEB_VIEW);
}
function $(e) {
    let { applicationId: t, channelId: n } = e;
    w.delete(b(n, t));
}
class q extends r.Ay.PersistedStore {
    static displayName = "EmbeddedActivitiesStore";
    static persistKey = "EmbeddedActivities";
    initialize(e) {
        this.waitFor(l.default, d.A, _.A, u.default);
        let t = new Set(e?.everLaunchedActivities ?? []);
        null != e && (N = { ...e, everLaunchedActivities: t });
    }
    getState() {
        return N;
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
        return null == e ? null : (Array.from(O.values()).find((t) => (0, g.H)(t.location) === e) ?? null);
    }
    getSelfEmbeddedActivityForLocation(e) {
        return null == e ? null : (Array.from(O.values()).find((t) => t.location.id === e.id) ?? null);
    }
    getSelfEmbeddedActivities() {
        return O;
    }
    getEmbeddedActivitiesForGuild(e) {
        return y.get(e) ?? C;
    }
    getEmbeddedActivitiesForChannel(e) {
        return v.get(e) ?? C;
    }
    getEmbeddedActivitiesForLocation(e) {
        return L.get(e.id) ?? C;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        return D.get(e) ?? C;
    }
    getEmbeddedActivitiesByChannel() {
        return v;
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
        return k.get(t) ?? R;
    }
    getShelfFetchStatus(e) {
        let t = W(e);
        return M.get(t);
    }
    shouldFetchShelf(e) {
        let t = W(e),
            n = M.get(t) ?? { isFetching: !1 },
            i = Date.now() - (n?.lastFetchTimestampMs ?? 0) > 216e5;
        return !n?.isFetching && i;
    }
    getOrientationLockStateForApp(e) {
        return U.get(e);
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
        if (null != i) return (0, g.H)(i);
    }
    getConnectedActivityLocation() {
        return i;
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
        return P.has(e);
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            e: for (let [i, r] of L)
                for (let i of r)
                    if (i.applicationId === t && i.userIds.has(e)) {
                        n = i;
                        break e;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return N.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return w.get(b(t ?? null, e));
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
            V.set(t, n);
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t } = e;
            v.clear(), y.clear(), L.clear(), D.clear(), t.forEach((e) => K(e));
            let n = l.default.getId();
            for (let e of Array.from(O.values()))
                X.getEmbeddedActivitiesForLocation(e.location).some(
                    (t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n),
                ) || z(e);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            K(t);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e,
                n = v.get(t.id) ?? [];
            v.set(t.id, []);
            let i = W(t.guild_id),
                r = (y.get(i) ?? []).filter((e) => (0, g.H)(e.location) !== t.id);
            y.set(i, r),
                n.forEach((e) => {
                    L.delete(e.location.id);
                }),
                D.set(t.id, []);
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
            w.set(b(s, t), { isLaunching: !0, componentId: n, inviterUserId: a, launchParams: r }),
                (H = i === o.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? T.E8.NO_CHAT : T.E8.RESIZABLE);
        },
        EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: function (e) {
            let { applicationId: t, channelId: n, proxyTicket: i } = e,
                r = b(n, t),
                s = w.get(r);
            null != s && w.set(r, { ...s, proxyTicket: i });
        },
        EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: function (e) {
            let { applicationId: t, proxyTicket: n } = e,
                i = O.get(t);
            if (null == i) return !1;
            O.set(t, { ...i, proxyTicket: n });
        },
        EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: function (e) {
            let { applicationId: t, refreshing: n } = e;
            n ? P.add(t) : P.delete(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function (e) {
            let { applicationId: t } = e;
            N.everLaunchedActivities.add(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: function (e) {
            let { applicationId: t, channelId: n } = e;
            $({ applicationId: t, channelId: n }), P.delete(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_CANCEL: function (e) {
            let { applicationId: t, channelId: n } = e;
            $({ applicationId: t, channelId: n }), P.delete(t);
        },
        EMBEDDED_ACTIVITY_CLOSE: function (e) {
            let { applicationId: t } = e,
                n = O.get(t);
            O.delete(t), n?.location.id === i?.id && (i = void 0);
        },
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function (e) {
            let { layout: t } = e;
            j = t;
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { applicationId: t, launchId: n, compositeInstanceId: i, location: r, participants: s } = e,
                a = (0, g.H)(r),
                o = w.get(b(a ?? null, t));
            Y({
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
            let n = O.get(t.application_id ?? "");
            if (null == n) return !1;
            O.set(n.applicationId, { ...n });
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
            let { applicationId: t, config: n } = e,
                i = O.get(t);
            null != i && O.set(i.applicationId, { ...i, config: n });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
            let { guildId: t } = e,
                n = W(t),
                i = M.get(n);
            M.set(n, { isFetching: !0, lastFetchTimestampMs: i?.lastFetchTimestampMs }),
                (N.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
            let { guildId: t, activities: n } = e,
                i = W(t);
            k.set(i, n);
            let r = Date.now();
            !(function (e) {
                let { activities: t, now: n } = e,
                    i = (0, p.A)((0, E.getOS)()),
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
                N.dateRangesForSurfaces = r;
            })({ activities: n, now: r }),
                M.set(i, { isFetching: !1, lastFetchTimestampMs: r });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
            let { guildId: t } = e,
                n = W(t),
                i = M.get(n);
            M.set(n, { isFetching: !1, lastFetchTimestampMs: i?.lastFetchTimestampMs });
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
            let { applicationId: t, lockState: n, pictureInPictureLockState: i, gridLockState: r } = e;
            null == n ? U.delete(t) : U.set(t, n),
                null === i ? x.delete(t) : void 0 !== i && x.set(t, i),
                null === r ? G.delete(t) : void 0 !== r && G.set(t, r);
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
            if (null == i) return;
            let n = (0, g.H)(i);
            null != n && n !== t && B === T.Gd.PANEL && (B = T.Gd.PIP);
        },
        POPOUT_WINDOW_CLOSE: function (e) {
            let { key: t } = e;
            t === S.MLl.ACTIVITY_POPOUT && (B = T.Gd.PIP);
        },
    }),
    Z = X;
