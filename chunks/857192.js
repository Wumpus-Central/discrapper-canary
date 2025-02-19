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
    p = n(981631);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
    v = h({}, E);
function b(e) {
    (v = h({}, E, v, e)), m.set(v.sourceMapsEnabled), l.K.set(g, v);
}
function y(e) {
    let { settings: t } = e;
    b(t);
}
function O(e) {
    b(E);
}
function S(e) {
    var t;
    let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & p.xW$.STAFF) === p.xW$.STAFF,
        r = n || null != e.user.personal_connection_id;
    n && m.set(v.sourceMapsEnabled), f.Z.setTags({ isStaff: r.toString() });
}
class I extends (r = a.ZP.Store) {
    initialize() {
        let e = l.K.get(g);
        null != e && (v = h({}, E, e));
    }
    get isTracingRequests() {
        return v.trace;
    }
    get isForcedCanary() {
        return v.canary;
    }
    get isLoggingGatewayEvents() {
        return v.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return v.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return v.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return v.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return v.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return v.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return v.sourceMapsEnabled;
    }
    get isAnalyticsDebuggerEnabled() {
        return v.analyticsDebuggerEnabled;
    }
    get isBugReporterEnabled() {
        return v.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return v.idleStatusIndicatorEnabled;
    }
    get onlyShowPreviewAppCollections() {
        return v.onlyShowPreviewAppCollections;
    }
    get disableAppCollectionsCache() {
        return v.disableAppCollectionsCache;
    }
    get isStreamInfoOverlayEnabled() {
        return v.isStreamInfoOverlayEnabled;
    }
    get preventPopoutClose() {
        return v.preventPopoutClose;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(v).map((e) => v[e]),
            Object.keys(v)
                .filter((e) => v[e])
                .join(',')
        );
    }
}
_(I, 'displayName', 'DeveloperOptionsStore');
let T = new I(c.Z, {
    LOGOUT: O,
    CONNECTION_OPEN: S,
    DEVELOPER_OPTIONS_UPDATE_SETTINGS: y
});
