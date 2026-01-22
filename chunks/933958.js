let r;
n.d(t, {
    Am: () => R,
    Ay: () => eP,
}),
    n(896048),
    n(321073);
var i,
    a = n(311907),
    s = n(73153),
    o = n(155718),
    l = n(392054),
    c = n(961350),
    u = n(734057),
    d = n(309010),
    f = n(287809),
    p = n(203982),
    _ = n(723702),
    h = n(646865),
    m = n(956518),
    g = n(878549),
    E = n(969151),
    b = n(847381),
    y = n(108959),
    O = n(360469),
    A = n(5867),
    v = n(652215);

function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}

function T(e, t) {
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

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = {
        everLaunchedActivities: new Set(),
        seenNewActivities: {},
        seenUpdatedActivities: {},
        lastCheckedForBadgeableActivities: null,
        dateRangesForSurfaces: {},
    },
    R = [],
    w = [],
    P = "0",
    D = new Map(),
    x = new Map(),
    L = new Map(),
    j = new Map(),
    M = new Map();

function k(e, t) {
    return "".concat(t, ":").concat(e);
}
let U = new Map(),
    G = new Set(),
    V = new Map(),
    F = new Map(),
    B = new Map(),
    H = new Map(),
    Y = new Map(),
    W = new Map(),
    K = 216e5,
    z = new Map(),
    q = A.Gd.DISCONNECTED,
    X = A.E8.RESIZABLE,
    Z = O.M1.NORMAL;

function Q(e) {
    return null != e ? e : P;
}

function $(e) {
    var t, n, r, i, a, s, o, l;
    let { location: u, applicationId: d, launchId: f, compositeInstanceId: p, participants: _, proxyTicket: h } = e,
        b = (0, m.Ay)(d);
    if (null == b) return;
    let y = (0, E.H)(u),
        O = null != y && null != (t = L.get(y)) ? t : R,
        A = null != O && 0 === O.length,
        v = null != (n = M.get(u.id)) ? n : R,
        S = v.find((e) => e.applicationId === d),
        T = _.map((e) => e.userId),
        N = c.default.getId(),
        w = T.some((e) => e === N),
        P = null == (a = _.find((e) => e.userId === N)) ? void 0 : a.sessionId,
        j = _.some((e) => (0, g.S)(e)),
        G = D.get(d),
        V = U.get(k(null != y ? y : null, d)),
        F = null == V ? void 0 : V.launchParams,
        B = {
            applicationId: d,
            location: u,
            launchId: f,
            compositeInstanceId: p,
            url: b,
            userIds: new Set(T),
            participants: _,
            referrerId: null != (r = null == G ? void 0 : G.referrerId) ? r : null == F ? void 0 : F.referrerId,
            customId: null != (i = null == G ? void 0 : G.customId) ? i : null == F ? void 0 : F.customId,
            proxyTicket: h,
        };
    w &&
        null != G &&
        D.set(
            G.applicationId,
            C(I({}, G, B), {
                proxyTicket: null != (s = B.proxyTicket) ? s : G.proxyTicket,
            }),
        );
    let H = !j;
    null != G &&
    u.id === G.location.id &&
    d === G.applicationId &&
    ((!w && Array.from(G.userIds).some((e) => e === N)) || H)
        ? ee(G)
        : w &&
          (null == G || G.applicationId !== d || G.location.id !== u.id) &&
          (P === c.default.getSessionId() &&
              ea({
                  applicationId: d,
                  launchId: f,
                  compositeInstanceId: p,
                  location: u,
                  participants: _,
                  isFirstActivityInChannel: A,
                  isStart: null == S,
                  referrerId: B.referrerId,
                  customId: B.customId,
                  inviterUserId: null == V ? void 0 : V.inviterUserId,
                  proxyTicket: B.proxyTicket,
              }),
          eO({
              channelId: null != y ? y : null,
              applicationId: d,
          }));
    let Y = v.filter((e) => e.applicationId !== d);
    if ((T.length > 0 && Y.push(B), M.set(u.id, Y), null != y)) {
        let e = (null != (o = L.get(y)) ? o : []).filter((e) => e.applicationId !== d),
            t = Q((0, E.D)(u)),
            n = (null != (l = x.get(t)) ? l : []).filter((e) => e.applicationId !== d || e.location.id !== u.id);
        T.length > 0 && (e.push(B), n.push(B)), L.set(y, e), x.set(t, n);
    }
}

function J(e) {
    let t = e.activity_instances;
    null == t ||
        t.forEach((e) => {
            let { location: t, application_id: n, launch_id: r, composite_instance_id: i, participants: a } = e;
            $({
                location: t,
                applicationId: n,
                launchId: r,
                compositeInstanceId: i,
                participants: a.map((e) => ({
                    userId: e.user_id,
                    sessionId: e.session_id,
                    nonce: e.nonce,
                })),
            });
        });
}

function ee(e) {
    D.delete(e.applicationId), p._.dispatch(v.jej.RELEASE_ACTIVITY_WEB_VIEW);
}

function et(e) {
    let { guilds: t } = e;
    L.clear(), x.clear(), M.clear(), j.clear(), t.forEach((e) => J(e));
    let n = c.default.getId();
    for (let e of Array.from(D.values()))
        ew
            .getEmbeddedActivitiesForLocation(e.location)
            .some((t) => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || ee(e);
}

function en(e) {
    let { guild: t } = e;
    J(t);
}

function er(e) {
    var t, n;
    let { channel: r } = e,
        i = null != (t = L.get(r.id)) ? t : [];
    L.set(r.id, []);
    let a = Q(r.guild_id),
        s = (null != (n = x.get(a)) ? n : []).filter((e) => (0, E.H)(e.location) !== r.id);
    x.set(a, s),
        i.forEach((e) => {
            M.delete(e.location.id);
        }),
        j.set(r.id, []);
}

function ei(e) {
    let { applicationId: t, launchId: n, compositeInstanceId: r, location: i, participants: a } = e,
        s = (0, E.H)(i),
        o = U.get(k(null != s ? s : null, t));
    $({
        location: i,
        applicationId: t,
        launchId: n,
        compositeInstanceId: r,
        participants: a.map((e) => ({
            userId: e.user_id,
            sessionId: e.session_id,
            nonce: e.nonce,
        })),
        proxyTicket: null == o ? void 0 : o.proxyTicket,
    });
}

function ea(e) {
    var t, n;
    let {
            applicationId: i,
            launchId: a,
            compositeInstanceId: o,
            location: l,
            participants: _,
            isFirstActivityInChannel: g,
            isStart: b,
            referrerId: O,
            customId: S,
            inviterUserId: I,
            proxyTicket: T,
        } = e,
        C = (0, m.Ay)(i),
        N = c.default.getSessionId();
    if (null == C || null == N || (null == (n = D.get(i)) ? void 0 : n.location.id) === l.id) return !1;
    let R = (0, E.H)(l),
        w = u.A.getChannel(R),
        P = null == w ? void 0 : w.getGuildId();
    if (null == f.default.getCurrentUser() || (null == P && !(null != (t = null == w ? void 0 : w.isPrivate()) && t)))
        return !1;
    r = l;
    let x = {
        applicationId: i,
        url: C,
        userIds: new Set(_.map((e) => e.userId)),
        participants: _,
        connectedSince: Date.now(),
        launchId: a,
        compositeInstanceId: o,
        location: l,
        referrerId: O,
        customId: S,
        proxyTicket: T,
    };
    D.set(i, x),
        p._.dispatch(v.jej.OPEN_EMBEDDED_ACTIVITY, {
            location: l,
            applicationId: i,
            isFirstActivityInChannel: g,
            isStart: b,
            participants: _,
            embeddedActivity: x,
            inviterUserId: I,
        }),
        (0, h.f)()
            ? ((q = A.Gd.ACTIVITY_POPOUT_WINDOW),
              s.h.wait(() => {
                  s.h.dispatch({
                      type: "ACTIVITY_POPOUT_WINDOW_OPEN",
                  });
              }))
            : (q = R !== d.A.getChannelId() || (0, y.A)(R) ? A.Gd.PIP : A.Gd.PANEL),
        z.set(eC(l.id, i), Date.now());
}

function es(e) {
    let { applicationId: t } = e,
        n = D.get(t);
    D.delete(t), (null == n ? void 0 : n.location.id) === (null == r ? void 0 : r.id) && (r = void 0);
}

function eo(e) {
    let { layout: t } = e;
    Z = t;
}

function el(e) {
    var t;
    let { activity: n } = e;
    if (null == n) return !1;
    let r = D.get(null != (t = n.application_id) ? t : "");
    if (null == r) return !1;
    D.set(r.applicationId, I({}, r));
}

function ec(e) {
    let { applicationId: t, config: n } = e,
        r = D.get(t);
    null != r &&
        D.set(
            r.applicationId,
            C(I({}, r), {
                config: n,
            }),
        );
}

function eu(e) {
    let { guildId: t } = e,
        n = Q(t),
        r = F.get(n);
    F.set(n, {
        isFetching: !0,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs,
    }),
        (N.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString());
}

function ed(e) {
    let { guildId: t } = e,
        n = Q(t),
        r = F.get(n);
    F.set(n, {
        isFetching: !1,
        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs,
    });
}

function ef(e) {
    let { activities: t, now: n } = e,
        r = (0, b.A)((0, _.getOS)()),
        i = t.reduce((e, t) => {
            let i = t.client_platform_config[r];
            if (null == i.label_from || null == i.label_until) return e;
            let a = {
                    fromDate: i.label_from,
                    untilDate: i.label_until,
                },
                s = new Date(i.label_from).getTime(),
                l = new Date(i.label_until).getTime();
            return (
                s > n ||
                    l < n ||
                    Object.values(o.YI)
                        .filter((e) => !i.omit_badge_from_surfaces.includes(e))
                        .forEach((t) => {
                            let n = e[t];
                            (null == n || new Date(n.fromDate).getTime() < s) && (e[t] = a);
                        }),
                e
            );
        }, {});
    N.dateRangesForSurfaces = i;
}

function ep(e) {
    let { guildId: t, activities: n } = e,
        r = Q(t);
    V.set(r, n);
    let i = Date.now();
    ef({
        activities: n,
        now: i,
    }),
        F.set(r, {
            isFetching: !1,
            lastFetchTimestampMs: i,
        });
}

function e_(e) {
    let { applicationId: t, componentId: n, commandOrigin: r, launchParams: i, channelId: a, inviterUserId: s } = e;
    U.set(k(a, t), {
        isLaunching: !0,
        componentId: n,
        inviterUserId: s,
        launchParams: i,
    }),
        (X = r === l.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? A.E8.NO_CHAT : A.E8.RESIZABLE);
}

function eh(e) {
    let { applicationId: t, channelId: n, proxyTicket: r } = e,
        i = k(n, t),
        a = U.get(i);
    null != a &&
        U.set(
            i,
            C(I({}, a), {
                proxyTicket: r,
            }),
        );
}

function em(e) {
    let { applicationId: t, proxyTicket: n } = e,
        r = D.get(t);
    if (null == r) return !1;
    D.set(
        t,
        C(I({}, r), {
            proxyTicket: n,
        }),
    );
}

function eg(e) {
    let { applicationId: t, refreshing: n } = e;
    n ? G.add(t) : G.delete(t);
}

function eE(e) {
    let { applicationId: t } = e;
    N.everLaunchedActivities.add(t);
}

function eb(e) {
    let { applicationId: t, channelId: n } = e;
    eO({
        applicationId: t,
        channelId: n,
    }),
        G.delete(t);
}

function ey(e) {
    let { applicationId: t, channelId: n } = e;
    eO({
        applicationId: t,
        channelId: n,
    }),
        G.delete(t);
}

function eO(e) {
    let { applicationId: t, channelId: n } = e;
    U.delete(k(n, t));
}

function eA(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r, gridLockState: i } = e;
    null == n ? B.delete(t) : B.set(t, n),
        null === r ? H.delete(t) : void 0 !== r && H.set(t, r),
        null === i ? Y.delete(t) : void 0 !== i && Y.set(t, i);
}

function ev(e) {
    let { activityPanelMode: t } = e;
    q = t;
}

function eS(e) {
    let { focusedActivityLayout: t } = e;
    X = t;
}

function eI(e) {
    let { applicationId: t, layoutMode: n } = e;
    W.set(t, n);
}

function eT(e) {
    let { channelId: t } = e;
    if (null == r) return;
    let n = (0, E.H)(r);
    null != n && n !== t && q === A.Gd.PANEL && (q = A.Gd.PIP);
}

function eC(e, t) {
    return "".concat(e, ":").concat(t);
}

function eN(e) {
    let { key: t } = e;
    t === v.MLl.ACTIVITY_POPOUT && (q = A.Gd.PIP);
}
class eR extends (i = a.Ay.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(c.default, u.A, d.A, f.default);
        let n = new Set(null != (t = null == e ? void 0 : e.everLaunchedActivities) ? t : []);
        null != e &&
            (N = C(I({}, e), {
                everLaunchedActivities: n,
            }));
    }
    getState() {
        return N;
    }
    getSelfEmbeddedActivityForChannel(e) {
        var t;
        return null == e
            ? null
            : null != (t = Array.from(D.values()).find((t) => (0, E.H)(t.location) === e))
              ? t
              : null;
    }
    getSelfEmbeddedActivityForLocation(e) {
        var t;
        return null == e ? null : null != (t = Array.from(D.values()).find((t) => t.location.id === e.id)) ? t : null;
    }
    getSelfEmbeddedActivities() {
        return D;
    }
    getEmbeddedActivitiesForGuild(e) {
        var t;
        return null != (t = x.get(e)) ? t : R;
    }
    getEmbeddedActivitiesForChannel(e) {
        var t;
        return null != (t = L.get(e)) ? t : R;
    }
    getEmbeddedActivitiesForLocation(e) {
        var t;
        return null != (t = M.get(e.id)) ? t : R;
    }
    getEmbeddedActivitiesForStartingChannel(e) {
        var t;
        return null != (t = j.get(e)) ? t : R;
    }
    getEmbeddedActivitiesByChannel() {
        return L;
    }
    getEmbeddedActivityDurationMs(e, t) {
        let n = z.get(eC(e, t));
        return null == n ? null : Date.now() - n;
    }
    isLaunchingActivity() {
        return U.size > 0;
    }
    getShelfActivities(e) {
        var t;
        let n = Q(e);
        return null != (t = V.get(n)) ? t : w;
    }
    getShelfFetchStatus(e) {
        let t = Q(e);
        return F.get(t);
    }
    shouldFetchShelf(e) {
        var t, n;
        let r = Q(e),
            i =
                null != (t = F.get(r))
                    ? t
                    : {
                          isFetching: !1,
                      },
            a = Date.now() - (null != (n = null == i ? void 0 : i.lastFetchTimestampMs) ? n : 0) > K;
        return !(null == i ? void 0 : i.isFetching) && a;
    }
    getOrientationLockStateForApp(e) {
        return B.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        var t;
        return null != (t = H.get(e)) ? t : this.getOrientationLockStateForApp(e);
    }
    getGridOrientationLockStateForApp(e) {
        var t, n;
        return null != (t = null != (n = Y.get(e)) ? n : H.get(e)) ? t : this.getOrientationLockStateForApp(e);
    }
    getLayoutModeForApp(e) {
        return W.get(e);
    }
    getConnectedActivityChannelId() {
        if (null != r) return (0, E.H)(r);
    }
    getConnectedActivityLocation() {
        return r;
    }
    getActivityPanelMode() {
        return q;
    }
    getFocusedLayout() {
        return X;
    }
    getCurrentEmbeddedActivity() {
        var e;
        let t = this.getConnectedActivityLocation();
        return null != (e = this.getSelfEmbeddedActivityForLocation(t)) ? e : void 0;
    }
    isProxyTicketRefreshing(e) {
        return G.has(e);
    }
    getEmbeddedActivityForUserId(e, t) {
        let n;
        if (void 0 !== t) {
            l: for (let [r, i] of M)
                for (let r of i)
                    if (r.applicationId === t && r.userIds.has(e)) {
                        n = r;
                        break l;
                    }
            return n;
        }
    }
    hasActivityEverBeenLaunched(e) {
        return N.everLaunchedActivities.has(e);
    }
    getLaunchState(e, t) {
        if (null != e) return U.get(k(null != t ? t : null, e));
    }
    getLaunchStates() {
        return U;
    }
    getActivityPopoutWindowLayout() {
        return Z;
    }
}
S(eR, "displayName", "EmbeddedActivitiesStore"),
    S(eR, "persistKey", "EmbeddedActivities"),
    S(eR, "migrations", [
        (e) =>
            C(I({}, e), {
                seenFeaturedActivities: [],
                shouldShowNewActivityIndicator: !1,
            }),
        (e) => (delete e.seenFeaturedActivities, I({}, e)),
        (e) => (delete e.seenActivities, I({}, e)),
        (e) => (
            delete e.currentFreeActivity,
            delete e.lastFreeActivityRotationTimestampMs,
            delete e.freePeriodActivities,
            delete e.shouldShowFreeActivityIndicator,
            I({}, e)
        ),
        (e) =>
            C(I({}, e), {
                seenNewActivities: {},
                seenUpdatedActivities: {},
            }),
        (e) => {
            var t;
            let n = new Set(null != (t = e.everLaunchedActivities) ? t : []);
            return C(I({}, e), {
                everLaunchedActivities: n,
            });
        },
        (e) => (delete e.usersHavePlayedByApp, I({}, e)),
        (e) => (
            (e.surfacesToShowNewActivityIndicator = new Set()),
            e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(o.YI.VOICE_LAUNCHER),
            delete e.shouldShowNewActivityIndicator,
            I({}, e)
        ),
        (e) =>
            C(I({}, e), {
                lastCheckedForBadgeableActivities: null,
            }),
        (e) => (
            delete e.surfacesToShowNewActivityIndicator,
            C(I({}, e), {
                dateRangesForSurfaces: {},
            })
        ),
    ]);
let ew = new eR(s.h, {
        ACTIVITY_LAYOUT_MODE_UPDATE: eI,
        CONNECTION_OPEN_SUPPLEMENTAL: et,
        GUILD_CREATE: en,
        CHANNEL_DELETE: er,
        EMBEDDED_ACTIVITY_LAUNCH_START: e_,
        EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: eh,
        EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: em,
        EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: eg,
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eE,
        EMBEDDED_ACTIVITY_LAUNCH_FAIL: eb,
        EMBEDDED_ACTIVITY_LAUNCH_CANCEL: ey,
        EMBEDDED_ACTIVITY_CLOSE: es,
        EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: eo,
        EMBEDDED_ACTIVITY_UPDATE_V2: ei,
        LOCAL_ACTIVITY_UPDATE: el,
        EMBEDDED_ACTIVITY_SET_CONFIG: ec,
        EMBEDDED_ACTIVITY_FETCH_SHELF: eu,
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: ep,
        EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: ed,
        EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eA,
        EMBEDDED_ACTIVITY_SET_PANEL_MODE: ev,
        EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eS,
        CHANNEL_SELECT: eT,
        POPOUT_WINDOW_CLOSE: eN,
    }),
    eP = ew;
