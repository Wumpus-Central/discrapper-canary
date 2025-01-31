n.r(t), n.d(t, { default: () => S }), n(789020);
var i,
    r = n(261470),
    a = n(213919),
    s = n(442837),
    o = n(544891),
    l = n(433517),
    u = n(570140),
    c = n(179658),
    d = n(70956),
    f = n(960048),
    _ = n(981631);
function p(e, t, n) {
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
let h = (() => {
        let e = ''.concat(location.protocol, '//').concat(location.host, '/__development/source_maps'),
            t = null,
            n = new r.Z(5 * d.Z.Millis.SECOND, 1 * d.Z.Millis.MINUTE, !0),
            i = () => {
                o.tn
                    .put({
                        url: e,
                        headers: { Authorization: a.getToken() },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (e) => {
                            401 === e.status || 403 === e.status ? ((t = null), (0, c.y)({ sourceMapsEnabled: !1 })) : 200 !== e.status ? (t = setTimeout(i, n.fail())) : (n.succeed(), (t = setTimeout(i, e.body.sourceMapCookieTTLSeconds * d.Z.Millis.SECOND * 0.75)));
                        },
                        () => {
                            t = setTimeout(i, n.fail());
                        }
                    );
            };
        return {
            set: (n) => {
                n !== (null != t) &&
                    (n
                        ? (t = setTimeout(i, 0))
                        : (clearTimeout(t),
                          (t = null),
                          o.tn.del({
                              url: e,
                              headers: { Authorization: a.getToken() },
                              oldFormErrors: !0,
                              rejectWithError: !0
                          })));
            }
        };
    })(),
    m = 'DeveloperOptionsStore',
    g = {
        trace: !1,
        canary: !1,
        logGatewayEvents: !1,
        logOverlayEvents: !1,
        logAnalyticsEvents: !1,
        sourceMapsEnabled: !1,
        axeEnabled: !1,
        cssDebuggingEnabled: !1,
        layoutDebuggingEnabled: !1,
        analyticsDebuggerEnabled: !1,
        bugReporterEnabled: !0,
        idleStatusIndicatorEnabled: !1,
        onlyShowPreviewAppCollections: !1,
        disableAppCollectionsCache: !1,
        isStreamInfoOverlayEnabled: !1,
        preventPopoutClose: !1
    },
    E = { ...g };
function v(e) {
    (E = {
        ...g,
        ...E,
        ...e
    }),
        h.set(E.sourceMapsEnabled),
        l.K.set(m, E);
}
function y(e) {
    let { settings: t } = e;
    v(t);
}
function I(e) {
    v(g);
}
function b(e) {
    var t;
    let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & _.xW$.STAFF) === _.xW$.STAFF,
        i = n || null != e.user.personal_connection_id;
    n && h.set(E.sourceMapsEnabled), f.Z.setTags({ isStaff: i.toString() });
}
class T extends (i = s.ZP.Store) {
    initialize() {
        let e = l.K.get(m);
        null != e &&
            (E = {
                ...g,
                ...e
            });
    }
    get isTracingRequests() {
        return E.trace;
    }
    get isForcedCanary() {
        return E.canary;
    }
    get isLoggingGatewayEvents() {
        return E.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return E.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return E.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return E.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return E.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return E.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return E.sourceMapsEnabled;
    }
    get isAnalyticsDebuggerEnabled() {
        return E.analyticsDebuggerEnabled;
    }
    get isBugReporterEnabled() {
        return E.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return E.idleStatusIndicatorEnabled;
    }
    get onlyShowPreviewAppCollections() {
        return E.onlyShowPreviewAppCollections;
    }
    get disableAppCollectionsCache() {
        return E.disableAppCollectionsCache;
    }
    get isStreamInfoOverlayEnabled() {
        return E.isStreamInfoOverlayEnabled;
    }
    get preventPopoutClose() {
        return E.preventPopoutClose;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(E).map((e) => E[e]),
            Object.keys(E)
                .filter((e) => E[e])
                .join(',')
        );
    }
}
p(T, 'displayName', 'DeveloperOptionsStore');
let S = new T(u.Z, {
    LOGOUT: I,
    CONNECTION_OPEN: b,
    DEVELOPER_OPTIONS_UPDATE_SETTINGS: y
});
