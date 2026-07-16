"use strict";
let i;
n.d(t, { Am: () => O, Ay: () => et }), n(321073);
var r = n(17928),
    a = n(228366),
    s = n(155718),
    l = n(392054),
    o = n(159993),
    d = n(280450),
    c = n(734057),
    u = n(309010),
    _ = n(287809),
    E = n(625494),
    A = n(723702),
    h = n(646865),
    I = n(240583),
    f = n(956518),
    p = n(878549),
    T = n(969151),
    m = n(847381),
    g = n(108959),
    S = n(360469),
    N = n(5867),
    C = n(652215);
let R = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        lastCheckedForBadgeableActivities: null,
        dateRangesForSurfaces: {},
    },
    O = [],
    L = [];
class y {
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
        let { enabled: t } = I.c.getConfig({ location: "embedded_activity_store" });
        if (!t || "all" === e) return this.items;
        switch (e) {
            case "visible":
                return (this.cachedVisible ??= this.items.filter((e) => !(0, o.Q)(e.contentClassification)));
            case "hidden":
                return (this.cachedHidden ??= this.items.filter((e) => (0, o.Q)(e.contentClassification)));
        }
    }
    invalidate() {
        (this.cachedVisible = null), (this.cachedHidden = null);
    }
}
let D = new Map(),
    v = new Map(),
    b = new Map(),
    M = new Map();
function P(e, t) {
    return `${t}:${e}`;
}
let U = new Map(),
    w = new Set(),
    G = new Map(),
    x = new Map(),
    k = new Map(),
    F = new Map(),
    V = new Map(),
    B = new Map(),
    H = new Map(),
    j = N.Gd.DISCONNECTED,
    W = N.E8.RESIZABLE,
    Y = S.M1.NORMAL;
function K(e) {
    return e ?? "0";
}
function $(e, t) {
    let n = e.get(t);
    return null == n && ((n = new y()), e.set(t, n)), n;
}
function z(e) {
    return { userId: e.user_id, sessionId: e.session_id, nonce: e.nonce };
}
function q(e) {
    var t;
    let n,
        {
            applicationId: r,
            launchId: s,
            compositeInstanceId: l,
            location: o,
            participants: A,
            contentClassification: I,
        } = {
            applicationId: e.application_id,
            launchId: e.launch_id,
            compositeInstanceId: e.composite_instance_id,
            location: e.location,
            participants: e.participants.map(z),
            contentClassification: e.content_classification,
        },
        m = (0, f.Ay)(r);
    if (null == m) return;
    let S = (0, T.H)(o),
        R = 0 === (null != S ? (b.get(S)?.getItems("all") ?? O) : O).length,
        L = (M.get(o.id)?.getItems("all") ?? O).find((e) => e.applicationId === r),
        y = A.map((e) => e.userId),
        w = d.default.getId(),
        G = y.some((e) => e === w),
        x = A.find((e) => e.userId === w)?.sessionId,
        k = A.some((e) => (0, p.S)(e)),
        F = D.get(r),
        V = U.get(P(S ?? null, r)),
        B = V?.launchParams,
        W = {
            applicationId: r,
            location: o,
            launchId: s,
            compositeInstanceId: l,
            url: m,
            userIds: new Set(y),
            participants: A,
            contentClassification: I,
            referrerId: F?.referrerId ?? B?.referrerId,
            customId: F?.customId ?? B?.customId,
            proxyTicket: V?.proxyTicket,
        };
    G && null != F && D.set(F.applicationId, { ...F, ...W, proxyTicket: W.proxyTicket ?? F.proxyTicket }),
        null != F &&
        o.id === F.location.id &&
        r === F.applicationId &&
        ((!G && Array.from(F.userIds).some((e) => e === w)) || !k)
            ? X(F)
            : G &&
              (null == F || F.applicationId !== r || F.location.id !== o.id) &&
              (x === d.default.getSessionId() &&
                  (function (e) {
                      let {
                              applicationId: t,
                              launchId: n,
                              compositeInstanceId: r,
                              location: s,
                              participants: l,
                              isFirstActivityInChannel: o,
                              isStart: A,
                              referrerId: I,
                              customId: p,
                              inviterUserId: m,
                              proxyTicket: S,
                          } = e,
                          R = (0, f.Ay)(t),
                          O = d.default.getSessionId();
                      if (null == R || null == O || D.get(t)?.location.id === s.id) return;
                      let L = (0, T.H)(s),
                          y = c.A.getChannel(L),
                          v = y?.getGuildId();
                      if (null == _.default.getCurrentUser() || (null == v && !y?.isPrivate())) return;
                      i = s;
                      let b = {
                          applicationId: t,
                          url: R,
                          userIds: new Set(l.map((e) => e.userId)),
                          participants: l,
                          connectedSince: Date.now(),
                          launchId: n,
                          compositeInstanceId: r,
                          location: s,
                          referrerId: I,
                          customId: p,
                          proxyTicket: S,
                      };
                      D.set(t, b),
                          E._.dispatch(C.jej.OPEN_EMBEDDED_ACTIVITY, {
                              location: s,
                              applicationId: t,
                              isFirstActivityInChannel: o,
                              isStart: A,
                              participants: l,
                              embeddedActivity: b,
                              inviterUserId: m,
                          }),
                          (0, h.f)()
                              ? ((j = N.Gd.ACTIVITY_POPOUT_WINDOW),
                                a.h.wait(() => {
                                    a.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                }))
                              : (j = L !== u.Ay.getChannelId() || (0, g.A)(L) ? N.Gd.PIP : N.Gd.PANEL),
                          H.set(
                              (function (e, t) {
                                  return `${e}:${t}`;
                              })(s.id, t),
                              Date.now(),
                          );
                  })({
                      applicationId: r,
                      launchId: s,
                      compositeInstanceId: l,
                      location: o,
                      participants: A,
                      isFirstActivityInChannel: R,
                      isStart: null == L,
                      referrerId: W.referrerId,
                      customId: W.customId,
                      inviterUserId: V?.inviterUserId,
                      proxyTicket: W.proxyTicket,
                  }),
              Q({ channelId: S ?? null, applicationId: r })),
        (t = y.length > 0 ? W : null),
        $(M, o.id).upsert(r, o.id, t),
        null != (n = (0, T.H)(o)) && ($(b, n).upsert(r, o.id, t), $(v, K((0, T.D)(o))).upsert(r, o.id, t));
}
function Z(e) {
    e.activity_instances?.forEach((e) => {
        q(e);
    });
}
function X(e) {
    D.delete(e.applicationId), E._.dispatch(C.jej.RELEASE_ACTIVITY_WEB_VIEW);
}
function Q(e) {
    let { applicationId: t, channelId: n } = e;
    U.delete(P(n, t));
}
class J extends r.Ay.PersistedStore {
    static displayName = "EmbeddedActivitiesStore";
    static persistKey = "EmbeddedActivities";
    initialize(e) {
        this.waitFor(d.default, c.A, u.Ay, _.default);
        let t = new Set(e?.everLaunchedActivities ?? []);
        null != e && (R = { ...e, everLaunchedActivities: t });
    }
    getState() {
        return R;
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
        return null == e ? null : (Array.from(D.values()).find((t) => (0, T.H)(t.location) === e) ?? null);
    }
    getSelfEmbeddedActivityForLocation(e) {
        return null == e ? null : (Array.from(D.values()).find((t) => t.location.id === e.id) ?? null);
    }
    getSelfEmbeddedActivities() {
        return D;
    }
    getEmbeddedActivitiesForGuild(e) {
        return v.get(e)?.getItems("visible") ?? O;
    }
    getEmbeddedActivitiesForChannel(e) {
        return b.get(e)?.getItems("visible") ?? O;
    }
    getEmbeddedActivitiesForLocation(e) {
        return M.get(e.id)?.getItems("visible") ?? O;
    }
    getEmbeddedActivitiesForGuildIncludingHidden(e) {
        return v.get(e)?.getItems("all") ?? O;
    }
    getEmbeddedActivitiesForChannelIncludingHidden(e) {
        return b.get(e)?.getItems("all") ?? O;
    }
    getEmbeddedActivitiesForLocationIncludingHidden(e) {
        return M.get(e.id)?.getItems("all") ?? O;
    }
    getEmbeddedActivitiesByChannel() {
        let e = new Map();
        return (
            b.forEach((t, n) => {
                let i = t.getItems("visible");
                i.length > 0 && e.set(n, i);
            }),
            e
        );
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = H.get(`${e}:${t}`);
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return U.size > 0;
    }
    getShelfActivities(e) {
        let t = K(e);
        return G.get(t) ?? L;
    }
    getShelfFetchStatus(e) {
        let t = K(e);
        return x.get(t);
    }
    shouldFetchShelf(e) {
        let t = K(e),
            n = x.get(t) ?? { isFetching: !1 },
            i = Date.now() - (n?.lastFetchTimestampMs ?? 0) > 216e5;
        return !n?.isFetching && i;
    }
    getOrientationLockStateForApp(e) {
        return k.get(e);
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
        if (null != i) return (0, T.H)(i);
    }
    getConnectedActivityLocation() {
        return i;
    }
    getActivityPanelMode() {
        return j;
    }
    getFocusedLayout() {
        return W;
    }
    getCurrentEmbeddedActivity() {
        let e = this.getConnectedActivityLocation();
        return this.getSelfEmbeddedActivityForLocation(e) ?? void 0;
    }
    isProxyTicketRefreshing(e) {
        return w.has(e);
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            e: for (let [i, r] of M)
                for (let i of r.getItems("visible"))
                    if (i.applicationId === t && i.userIds.has(e)) {
                        n = i;
                        break e;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return R.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return U.get(P(t ?? null, e));
    }
    getLaunchStates() {
        return U;
    }
    getActivityPopoutWindowLayout() {
        return Y;
    }
}
let ee = new J(a.h, {
        ACTIVITY_LAYOUT_MODE_UPDATE: function (e) {
            let { applicationId: t, layoutMode: n } = e;
            B.set(t, n);
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t } = e;
            b.clear(), v.clear(), M.clear(), t.forEach((e) => Z(e));
            let n = d.default.getId();
            for (let e of Array.from(D.values()))
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
                n = b.get(t.id),
                i = n?.getItems("all") ?? O;
            b.delete(t.id);
            let r = K(t.guild_id),
                a = v.get(r);
            a?.removeWhere((e) => (0, T.H)(e.location) === t.id),
                i.forEach((e) => {
                    M.delete(e.location.id);
                });
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
            let {
                applicationId: t,
                componentId: n,
                commandOrigin: i,
                launchParams: r,
                channelId: a,
                inviterUserId: s,
            } = e;
            U.set(P(a, t), { isLaunching: !0, componentId: n, inviterUserId: s, launchParams: r }),
                (W = i === l.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? N.E8.NO_CHAT : N.E8.RESIZABLE);
        },
        EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: function (e) {
            let { applicationId: t, channelId: n, proxyTicket: i } = e,
                r = P(n, t),
                a = U.get(r);
            null != a && U.set(r, { ...a, proxyTicket: i });
        },
        EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: function (e) {
            let { applicationId: t, proxyTicket: n } = e,
                i = D.get(t);
            if (null == i) return !1;
            D.set(t, { ...i, proxyTicket: n });
        },
        EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: function (e) {
            let { applicationId: t, refreshing: n } = e;
            n ? w.add(t) : w.delete(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function (e) {
            let { applicationId: t } = e;
            R.everLaunchedActivities.add(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: function (e) {
            let { applicationId: t, channelId: n } = e;
            Q({ applicationId: t, channelId: n }), w.delete(t);
        },
        EMBEDDED_ACTIVITY_LAUNCH_CANCEL: function (e) {
            let { applicationId: t, channelId: n } = e;
            Q({ applicationId: t, channelId: n }), w.delete(t);
        },
        EMBEDDED_ACTIVITY_CLOSE: function (e) {
            let { applicationId: t } = e,
                n = D.get(t);
            D.delete(t), n?.location.id === i?.id && (i = void 0);
        },
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function (e) {
            let { layout: t } = e;
            Y = t;
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { instance: t } = e;
            q(t);
        },
        LOCAL_ACTIVITY_UPDATE: function (e) {
            let { activity: t } = e;
            if (null == t) return !1;
            let n = D.get(t.application_id ?? "");
            if (null == n) return !1;
            D.set(n.applicationId, { ...n });
        },
        EMBEDDED_ACTIVITY_SET_CONFIG: function (e) {
            let { applicationId: t, config: n } = e,
                i = D.get(t);
            null != i && D.set(i.applicationId, { ...i, config: n });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF: function (e) {
            let { guildId: t } = e,
                n = K(t),
                i = x.get(n);
            x.set(n, { isFetching: !0, lastFetchTimestampMs: i?.lastFetchTimestampMs }),
                (R.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function (e) {
            let { guildId: t, activities: n } = e,
                i = K(t);
            G.set(i, n);
            let r = Date.now();
            !(function (e) {
                let { activities: t, now: n } = e,
                    i = (0, m.A)((0, A.getOS)()),
                    r = t.reduce((e, t) => {
                        let r = t.client_platform_config[i];
                        if (null == r.label_from || null == r.label_until) return e;
                        let a = { fromDate: r.label_from, untilDate: r.label_until },
                            l = new Date(r.label_from).getTime(),
                            o = new Date(r.label_until).getTime();
                        return (
                            l > n ||
                                o < n ||
                                Object.values(s.YI)
                                    .filter((e) => !r.omit_badge_from_surfaces.includes(e))
                                    .forEach((t) => {
                                        let n = e[t];
                                        (null == n || new Date(n.fromDate).getTime() < l) && (e[t] = a);
                                    }),
                            e
                        );
                    }, {});
                R.dateRangesForSurfaces = r;
            })({ activities: n, now: r }),
                x.set(i, { isFetching: !1, lastFetchTimestampMs: r });
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function (e) {
            let { guildId: t } = e,
                n = K(t),
                i = x.get(n);
            x.set(n, { isFetching: !1, lastFetchTimestampMs: i?.lastFetchTimestampMs });
        },
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function (e) {
            let { applicationId: t, lockState: n, pictureInPictureLockState: i, gridLockState: r } = e;
            null == n ? k.delete(t) : k.set(t, n),
                null === i ? F.delete(t) : void 0 !== i && F.set(t, i),
                null === r ? V.delete(t) : void 0 !== r && V.set(t, r);
        },
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: function (e) {
            let { activityPanelMode: t } = e;
            j = t;
        },
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function (e) {
            let { focusedActivityLayout: t } = e;
            W = t;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == i) return;
            let n = (0, T.H)(i);
            null != n && n !== t && j === N.Gd.PANEL && (j = N.Gd.PIP);
        },
        POPOUT_WINDOW_CLOSE: function (e) {
            let { key: t } = e;
            t === C.MLl.ACTIVITY_POPOUT && (j = N.Gd.PIP);
        },
    }),
    et = ee;
