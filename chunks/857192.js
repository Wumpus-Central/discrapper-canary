r.r(n);
var i,
    a = r(789020);
var s = r(261470),
    o = r(213919),
    l = r(442837),
    u = r(544891),
    c = r(433517),
    d = r(570140),
    f = r(179658),
    _ = r(70956),
    h = r(960048),
    p = r(981631);
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
            r = new s.Z(5 * _.Z.Millis.SECOND, 1 * _.Z.Millis.MINUTE, !0),
            i = () => {
                u.tn
                    .put({
                        url: e,
                        headers: { Authorization: o.getToken() },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (e) => {
                            401 === e.status || 403 === e.status ? ((n = null), (0, f.y)({ sourceMapsEnabled: !1 })) : 200 !== e.status ? (n = setTimeout(i, r.fail())) : (r.succeed(), (n = setTimeout(i, e.body.sourceMapCookieTTLSeconds * _.Z.Millis.SECOND * 0.75)));
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
                              headers: { Authorization: o.getToken() },
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
    I = { ...v };
function T(e) {
    (I = {
        ...v,
        ...I,
        ...e
    }),
        g.set(I.sourceMapsEnabled),
        c.K.set(E, I);
}
function b(e) {
    let { settings: n } = e;
    T(n);
}
function y(e) {
    T(v);
}
function S(e) {
    var n;
    let r = ((null !== (n = e.user.flags) && void 0 !== n ? n : 0) & p.xW$.STAFF) === p.xW$.STAFF,
        i = r || null != e.user.personal_connection_id;
    r && g.set(I.sourceMapsEnabled), h.Z.setTags({ isStaff: i.toString() });
}
class A extends (i = l.ZP.Store) {
    initialize() {
        let e = c.K.get(E);
        null != e &&
            (I = {
                ...v,
                ...e
            });
    }
    get isTracingRequests() {
        return I.trace;
    }
    get isForcedCanary() {
        return I.canary;
    }
    get isLoggingGatewayEvents() {
        return I.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return I.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return I.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return I.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return I.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return I.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return I.sourceMapsEnabled;
    }
    get isAnalyticsDebuggerEnabled() {
        return I.analyticsDebuggerEnabled;
    }
    get isBugReporterEnabled() {
        return I.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return I.idleStatusIndicatorEnabled;
    }
    get onlyShowPreviewAppCollections() {
        return I.onlyShowPreviewAppCollections;
    }
    get disableAppCollectionsCache() {
        return I.disableAppCollectionsCache;
    }
    get isStreamInfoOverlayEnabled() {
        return I.isStreamInfoOverlayEnabled;
    }
    get preventPopoutClose() {
        return I.preventPopoutClose;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(I).map((e) => I[e]),
            Object.keys(I)
                .filter((e) => I[e])
                .join(',')
        );
    }
}
m(A, 'displayName', 'DeveloperOptionsStore'),
    (n.default = new A(d.Z, {
        LOGOUT: y,
        CONNECTION_OPEN: S,
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: b
    }));
