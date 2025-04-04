n.r(t), n.d(t, { default: () => T }), n(789020);
var r,
    i = n(261470),
    o = n(213919),
    a = n(442837),
    s = n(544891),
    l = n(433517),
    c = n(570140),
    u = n(179658),
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = (() => {
        let e = ''.concat(location.protocol, '//').concat(location.host, '/__development/source_maps'),
            t = null,
            n = new i.Z(5 * d.Z.Millis.SECOND, +d.Z.Millis.MINUTE, !0),
            r = () => {
                s.tn
                    .put({
                        url: e,
                        headers: { Authorization: o.getToken() },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (e) => {
                            401 === e.status || 403 === e.status ? ((t = null), (0, u.y)({ sourceMapsEnabled: !1 })) : 200 !== e.status ? (t = setTimeout(r, n.fail())) : (n.succeed(), (t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * d.Z.Millis.SECOND * 0.75)));
                        },
                        () => {
                            t = setTimeout(r, n.fail());
                        }
                    );
            };
        return {
            set: (n) => {
                n !== (null != t) &&
                    (n
                        ? (t = setTimeout(r, 0))
                        : (clearTimeout(t),
                          (t = null),
                          s.tn.del({
                              url: e,
                              headers: { Authorization: o.getToken() },
                              oldFormErrors: !0,
                              rejectWithError: !0
                          })));
            }
        };
    })(),
    g = 'DeveloperOptionsStore',
    E = {
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
    b = h({}, E);
function y(e) {
    (b = h({}, E, b, e)), m.set(b.sourceMapsEnabled), l.K.set(g, b);
}
function v(e) {
    let { settings: t } = e;
    y(t);
}
function O(e) {
    y(E);
}
function I(e) {
    var t;
    let n = ((null != (t = e.user.flags) ? t : 0) & _.xW$.STAFF) === _.xW$.STAFF,
        r = n || null != e.user.personal_connection_id;
    n && m.set(b.sourceMapsEnabled), f.Z.setTags({ isStaff: r.toString() });
}
class S extends (r = a.ZP.Store) {
    initialize() {
        let e = l.K.get(g);
        null != e && (b = h({}, E, e));
    }
    get isTracingRequests() {
        return b.trace;
    }
    get isForcedCanary() {
        return b.canary;
    }
    get isLoggingGatewayEvents() {
        return b.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return b.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return b.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return b.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return b.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return b.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return b.sourceMapsEnabled;
    }
    get isAnalyticsDebuggerEnabled() {
        return b.analyticsDebuggerEnabled;
    }
    get isBugReporterEnabled() {
        return b.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return b.idleStatusIndicatorEnabled;
    }
    get onlyShowPreviewAppCollections() {
        return b.onlyShowPreviewAppCollections;
    }
    get disableAppCollectionsCache() {
        return b.disableAppCollectionsCache;
    }
    get isStreamInfoOverlayEnabled() {
        return b.isStreamInfoOverlayEnabled;
    }
    get preventPopoutClose() {
        return b.preventPopoutClose;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(b).map((e) => b[e]),
            Object.keys(b)
                .filter((e) => b[e])
                .join(',')
        );
    }
}
p(S, 'displayName', 'DeveloperOptionsStore');
let T = new S(c.Z, {
    LOGOUT: O,
    CONNECTION_OPEN: I,
    DEVELOPER_OPTIONS_UPDATE_SETTINGS: v
});
