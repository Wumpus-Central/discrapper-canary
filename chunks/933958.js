"use strict";
let i;
n.d(t, { Am: () => v, Ay: () => et }), n(321073);
var r = n(17928),
    s = n(228366),
    a = n(155718),
    o = n(392054),
    l = n(159993),
    u = n(495544),
    c = n(734057),
    d = n(309010),
    _ = n(287809),
    h = n(625494),
    f = n(723702),
    p = n(646865),
    E = n(240583),
    m = n(956518),
    g = n(878549),
    A = n(969151),
    I = n(847381),
    T = n(108959),
    S = n(360469),
    y = n(5867),
    C = n(652215);
let N = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        lastCheckedForBadgeableActivities: null,
        dateRangesForSurfaces: {},
    },
    v = [],
    R = [];
class O {
    items = [];
    cachedVisible = null;
    cachedHidden = null;
    upsert(e, t, n) {
        (this.items = this.items.filter((n) => n.applicationId !== e || n.location.id !== t)),
            null != n && this.items.push(n),
            this.invalidate();
    }
    removeWhere(e) {
        (this.items = this.items.filter((t) => !e(t))), this.invalidate();
    }
    clear() {
        (this.items = []), this.invalidate();
    }
    getItems(e) {
        let { enabled: t } = E.c.getConfig({ location: "embedded_activity_store" });
        if (!t || "all" === e) return this.items;
        switch (e) {
            case "visible":
                return (this.cachedVisible ??= this.items.filter((e) => !(0, l.Q)(e.contentClassification)));
            case "hidden":
                return (this.cachedHidden ??= this.items.filter((e) => (0, l.Q)(e.contentClassification)));
        }
    }
    invalidate() {
        (this.cachedVisible = null), (this.cachedHidden = null);
    }
}
let b = new Map(),
    D = new Map(),
    L = new Map(),
    w = new Map();
function M(e, t) {
    return `${t}:${e}`;
}
let P = new Map(),
    x = new Set(),
    k = new Map(),
    U = new Map(),
    G = new Map(),
    F = new Map(),
    V = new Map(),
    B = new Map(),
    j = new Map(),
    H = y.Gd.DISCONNECTED,
    Y = y.E8.RESIZABLE,
    W = S.M1.NORMAL;
function K(e) {
    return e ?? "0";
}
function $(e, t) {
    let n = e.get(t);
    return null == n && ((n = new O()), e.set(t, n)), n;
}
function z(e) {
    return { userId: e.user_id, sessionId: e.session_id, nonce: e.nonce };
}
function q(e) {
    var t;
    let n,
        {
            applicationId: r,
            launchId: a,
            compositeInstanceId: o,
            location: l,
            participants: f,
            contentClassification: E,
        } = {
            applicationId: e.application_id,
            launchId: e.launch_id,
            compositeInstanceId: e.composite_instance_id,
            location: e.location,
            participants: e.participants.map(z),
            contentClassification: e.content_classification,
        },
        I = (0, m.Ay)(r);
    if (null == I) return;
    let S = (0, A.H)(l),
        N = 0 === (null != S ? (L.get(S)?.getItems("all") ?? v) : v).length,
        R = (w.get(l.id)?.getItems("all") ?? v).find((e) => e.applicationId === r),
        O = f.map((e) => e.userId),
        x = u.default.getId(),
        k = O.some((e) => e === x),
        U = f.find((e) => e.userId === x)?.sessionId,
        G = f.some((e) => (0, g.S)(e)),
        F = b.get(r),
        V = P.get(M(S ?? null, r)),
        B = V?.launchParams,
        Y = {
            applicationId: r,
            location: l,
            launchId: a,
            compositeInstanceId: o,
            url: I,
            userIds: new Set(O),
            participants: f,
            contentClassification: E,
            referrerId: F?.referrerId ?? B?.referrerId,
            customId: F?.customId ?? B?.customId,
            proxyTicket: V?.proxyTicket,
        };
    k && null != F && b.set(F.applicationId, { ...F, ...Y, proxyTicket: Y.proxyTicket ?? F.proxyTicket }),
        null != F &&
        l.id === F.location.id &&
        r === F.applicationId &&
        ((!k && Array.from(F.userIds).some((e) => e === x)) || !G)
            ? X(F)
            : k &&
              (null == F || F.applicationId !== r || F.location.id !== l.id) &&
              (U === u.default.getSessionId() &&
                  (function (e) {
                      let {
                              applicationId: t,
                              launchId: n,
                              compositeInstanceId: r,
                              location: a,
                              participants: o,
                              isFirstActivityInChannel: l,
                              isStart: f,
                              referrerId: E,
                              customId: g,
                              inviterUserId: I,
                              proxyTicket: S,
                          } = e,
                          N = (0, m.Ay)(t),
                          v = u.default.getSessionId();
                      if (null == N || null == v || b.get(t)?.location.id === a.id) return;
                      let R = (0, A.H)(a),
                          O = c.A.getChannel(R),
                          D = O?.getGuildId();
                      if (null == _.default.getCurrentUser() || (null == D && !O?.isPrivate())) return;
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
                          referrerId: E,
                          customId: g,
                          proxyTicket: S,
                      };
                      b.set(t, L),
                          h._.dispatch(C.jej.OPEN_EMBEDDED_ACTIVITY, {
                              location: a,
                              applicationId: t,
                              isFirstActivityInChannel: l,
                              isStart: f,
                              participants: o,
                              embeddedActivity: L,
                              inviterUserId: I,
                          }),
                          (0, p.f)()
                              ? ((H = y.Gd.ACTIVITY_POPOUT_WINDOW),
                                s.h.wait(() => {
                                    s.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                }))
                              : (H = R !== d.A.getChannelId() || (0, T.A)(R) ? y.Gd.PIP : y.Gd.PANEL),
                          j.set(
                              (function (e, t) {
                                  return `${e}:${t}`;
                              })(a.id, t),
                              Date.now(),
                          );
                  })({
                      applicationId: r,
                      launchId: a,
                      compositeInstanceId: o,
                      location: l,
                      participants: f,
                      isFirstActivityInChannel: N,
                      isStart: null == R,
                      referrerId: Y.referrerId,
                      customId: Y.customId,
                      inviterUserId: V?.inviterUserId,
                      proxyTicket: Y.proxyTicket,
                  }),
              Q({ channelId: S ?? null, applicationId: r })),
        (t = O.length > 0 ? Y : null),
        $(w, l.id).upsert(r, l.id, t),
        null != (n = (0, A.H)(l)) && ($(L, n).upsert(r, l.id, t), $(D, K((0, A.D)(l))).upsert(r, l.id, t));
}
function Z(e) {
    e.activity_instances?.forEach((e) => {
        q(e);
    });
}
function X(e) {
    b.delete(e.applicationId), h._.dispatch(C.jej.RELEASE_ACTIVITY_WEB_VIEW);
}
function Q(e) {
    let { applicationId: t, channelId: n } = e;
    P.delete(M(n, t));
}
class J extends r.Ay.PersistedStore {
    static displayName = "EmbeddedActivitiesStore";
    static persistKey = "EmbeddedActivities";
    initialize(e) {
        this.waitFor(u.default, c.A, d.A, _.default);
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
        return null == e ? null : (Array.from(b.values()).find((t) => (0, A.H)(t.location) === e) ?? null);
    }
    getSelfEmbeddedActivityForLocation(e) {
        return null == e ? null : (Array.from(b.values()).find((t) => t.location.id === e.id) ?? null);
    }
    getSelfEmbeddedActivities() {
        return b;
    }
    getEmbeddedActivitiesForGuild(e) {
        return D.get(e)?.getItems("visible") ?? v;
    }
    getEmbeddedActivitiesForChannel(e) {
        return L.get(e)?.getItems("visible") ?? v;
    }
    getEmbeddedActivitiesForLocation(e) {
        return w.get(e.id)?.getItems("visible") ?? v;
    }
    getEmbeddedActivitiesForGuildIncludingHidden(e) {
        return D.get(e)?.getItems("all") ?? v;
    }
    getEmbeddedActivitiesForChannelIncludingHidden(e) {
        return L.get(e)?.getItems("all") ?? v;
    }
    getEmbeddedActivitiesForLocationIncludingHidden(e) {
        return w.get(e.id)?.getItems("all") ?? v;
    }
    getEmbeddedActivitiesByChannel() {
        let e = new Map();
        return (
            L.forEach((t, n) => {
                let i = t.getItems("visible");
                i.length > 0 && e.set(n, i);
            }),
            e
        );
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = j.get(`${e}:${t}`);
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return P.size > 0;
    }
    getShelfActivities(e) {
        let t = K(e);
        return k.get(t) ?? R;
    }
    getShelfFetchStatus(e) {
        let t = K(e);
        return U.get(t);
    }
    shouldFetchShelf(e) {
        let t = K(e),
            n = U.get(t) ?? { isFetching: !1 },
            i = Date.now() - (n?.lastFetchTimestampMs ?? 0) > 216e5;
        return !n?.isFetching && i;
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
        if (null != i) return (0, A.H)(i);
    }
    getConnectedActivityLocation() {
        return i;
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
        return x.has(e);
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            l: for (let [i, r] of w)
                for (let i of r.getItems("visible"))
                    if (i.applicationId === t && i.userIds.has(e)) {
                        n = i;
                        break l;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return N.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return P.get(M(t ?? null, e));
    }
    getLaunchStates() {
        return P;
    }
    getActivityPopoutWindowLayout() {
        return W;
    }
}
let ee = new J(s.h, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function (e) {
            let { applicationId: t, layoutMode: n } = e;
            B.set(t, n);
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t } = e;
            L.clear(), D.clear(), w.clear(), t.forEach((e) => Z(e));
            let n = u.default.getId();
            for (let e of Array.from(b.values()))
                ee
                    .getEmbeddedActivitiesForLocationIncludingHidden(e.location)
                    .some(
                        (t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n),
                    ) || X(e);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            Z(t);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e,
                n = L.get(t.id),
                i = n?.getItems("all") ?? v;
            L.delete(t.id);
            let r = K(t.guild_id),
                s = D.get(r);
            s?.removeWhere((e) => (0, A.H)(e.location) === t.id),
                i.forEach((e) => {
                    w.delete(e.location.id);
                });
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
            P.set(M(s, t), { isLaunching: !0, componentId: n, inviterUserId: a, launchParams: r }),
                (Y = i === o.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? y.E8.NO_CHAT : y.E8.RESIZABLE);
        },
        EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: function (e) {
            let { applicationId: t, channelId: n, proxyTicket: i } = e,
                r = M(n, t),
                s = P.get(r);
            null != s && P.set(r, { ...s, proxyTicket: i });
        },
        EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: function (e) {
            let { applicationId: t, proxyTicket: n } = e,
                i = b.get(t);
            if (null == i) return !1;
            b.set(t, { ...i, proxyTicket: n });
        },
        EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: function (e) {
            let { applicationId: t, refreshing: n } = e;
            n ? x.add(t) : x.delete(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function (e) {
            let { applicationId: t } = e;
            N.everLaunchedActivities.add(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: function (e) {
            let { applicationId: t, channelId: n } = e;
            Q({ applicationId: t, channelId: n }), x.delete(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_CANCEL: function (e) {
            let { applicationId: t, channelId: n } = e;
            Q({ applicationId: t, channelId: n }), x.delete(t);
        },
        EMBEDDED_ACTIVITY_CLOSE: function (e) {
            let { applicationId: t } = e,
                n = b.get(t);
            b.delete(t), n?.location.id === i?.id && (i = void 0);
        },
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function (e) {
            let { layout: t } = e;
            W = t;
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { instance: t } = e;
            q(t);
        },
        LOCAL_ACTIVITY_UPDATE: function (e) {
            let { activity: t } = e;
            if (null == t) return !1;
            let n = b.get(t.application_id ?? "");
            if (null == n) return !1;
            b.set(n.applicationId, { ...n });
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
            let { applicationId: t, config: n } = e,
                i = b.get(t);
            null != i && b.set(i.applicationId, { ...i, config: n });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
            let { guildId: t } = e,
                n = K(t),
                i = U.get(n);
            U.set(n, { isFetching: !0, lastFetchTimestampMs: i?.lastFetchTimestampMs }),
                (N.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
            let { guildId: t, activities: n } = e,
                i = K(t);
            k.set(i, n);
            let r = Date.now();
            !(function (e) {
                let { activities: t, now: n } = e,
                    i = (0, I.A)((0, f.getOS)()),
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
                U.set(i, { isFetching: !1, lastFetchTimestampMs: r });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
            let { guildId: t } = e,
                n = K(t),
                i = U.get(n);
            U.set(n, { isFetching: !1, lastFetchTimestampMs: i?.lastFetchTimestampMs });
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
            let { applicationId: t, lockState: n, pictureInPictureLockState: i, gridLockState: r } = e;
            null == n ? G.delete(t) : G.set(t, n),
                null === i ? F.delete(t) : void 0 !== i && F.set(t, i),
                null === r ? V.delete(t) : void 0 !== r && V.set(t, r);
        },
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: function (e) {
            let { activityPanelMode: t } = e;
            H = t;
        },
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function (e) {
            let { focusedActivityLayout: t } = e;
            Y = t;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == i) return;
            let n = (0, A.H)(i);
            null != n && n !== t && H === y.Gd.PANEL && (H = y.Gd.PIP);
        },
        POPOUT_WINDOW_CLOSE: function (e) {
            let { key: t } = e;
            t === C.MLl.ACTIVITY_POPOUT && (H = y.Gd.PIP);
        },
    }),
    et = ee;
