r.r(n);
var i,
    a = r(789020);
var o = r(261470),
    s = r(213919),
    l = r(442837),
    u = r(544891),
    c = r(433517),
    d = r(570140),
    f = r(179658),
    p = r(70956),
    h = r(960048),
    _ = r(981631);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = (() => {
        let e = ''.concat(location.protocol, '//').concat(location.host, '/__development/source_maps'),
            n = null,
            r = new o.Z(5 * p.Z.Millis.SECOND, 1 * p.Z.Millis.MINUTE, !0),
            i = () => {
                u.tn
                    .put({
                        url: e,
                        headers: { Authorization: s.getToken() },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (e) => {
                            401 === e.status || 403 === e.status ? ((n = null), (0, f.y)({ sourceMapsEnabled: !1 })) : 200 !== e.status ? (n = setTimeout(i, r.fail())) : (r.succeed(), (n = setTimeout(i, e.body.sourceMapCookieTTLSeconds * p.Z.Millis.SECOND * 0.75)));
                        },
                        () => {
                            n = setTimeout(i, r.fail());
                        }
                    );
            };
        return {
            set: (r) => {
                if (r !== (null != n))
                    r
                        ? (n = setTimeout(i, 0))
                        : (clearTimeout(n),
                          (n = null),
                          u.tn.del({
                              url: e,
                              headers: { Authorization: s.getToken() },
                              oldFormErrors: !0,
                              rejectWithError: !0
                          }));
            }
        };
    })(),
    E = 'DeveloperOptionsStore',
    v = {
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
    y = { ...v };
function b(e) {
    (y = {
        ...v,
        ...y,
        ...e
    }),
        g.set(y.sourceMapsEnabled),
        c.K.set(E, y);
}
function I(e) {
    let { settings: n } = e;
    b(n);
}
function T(e) {
    b(v);
}
function S(e) {
    var n;
    let r = ((null !== (n = e.user.flags) && void 0 !== n ? n : 0) & _.xW$.STAFF) === _.xW$.STAFF,
        i = r || null != e.user.personal_connection_id;
    r && g.set(y.sourceMapsEnabled), h.Z.setTags({ isStaff: i.toString() });
}
class A extends (i = l.ZP.Store) {
    initialize() {
        let e = c.K.get(E);
        null != e &&
            (y = {
                ...v,
                ...e
            });
    }
    get isTracingRequests() {
        return y.trace;
    }
    get isForcedCanary() {
        return y.canary;
    }
    get isLoggingGatewayEvents() {
        return y.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return y.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return y.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return y.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return y.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return y.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return y.sourceMapsEnabled;
    }
    get isAnalyticsDebuggerEnabled() {
        return y.analyticsDebuggerEnabled;
    }
    get isBugReporterEnabled() {
        return y.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return y.idleStatusIndicatorEnabled;
    }
    get onlyShowPreviewAppCollections() {
        return y.onlyShowPreviewAppCollections;
    }
    get disableAppCollectionsCache() {
        return y.disableAppCollectionsCache;
    }
    get isStreamInfoOverlayEnabled() {
        return y.isStreamInfoOverlayEnabled;
    }
    get preventPopoutClose() {
        return y.preventPopoutClose;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(y).map((e) => y[e]),
            Object.keys(y)
                .filter((e) => y[e])
                .join(',')
        );
    }
}
m(A, 'displayName', 'DeveloperOptionsStore'),
    (n.default = new A(d.Z, {
        LOGOUT: T,
        CONNECTION_OPEN: S,
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: I
    }));
