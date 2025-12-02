n.r(t), n.d(t, { default: () => T }), n(997841);
var r,
    i = n(261470),
    a = n(213919),
    o = n(442837),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = (() => {
        let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
            t = null,
            n = new i.Z(5 * d.Z.Millis.SECOND, +d.Z.Millis.MINUTE, !0),
            r = () => {
                s.tn
                    .put({
                        url: e,
                        headers: { Authorization: a.getToken() },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(
                        (e) => {
                            401 === e.status || 403 === e.status
                                ? ((t = null), (0, u.y)({ sourceMapsEnabled: !1 }))
                                : 200 !== e.status
                                  ? (t = setTimeout(r, n.fail()))
                                  : (n.succeed(),
                                    (t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * d.Z.Millis.SECOND * 0.75)));
                        },
                        () => {
                            t = setTimeout(r, n.fail());
                        },
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
                              headers: { Authorization: a.getToken() },
                              oldFormErrors: !0,
                              rejectWithError: !0,
                          })));
            },
        };
    })(),
    g = "DeveloperOptionsStore",
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
        preventPopoutClose: !1,
        logKeyboardMismatches: !1,
        alertStartupMetrics: !1,
        personaForceFaeFail: !1,
        personaForceIdVerificationFail: !1,
    },
    b = m({}, E);
function y(e) {
    (b = m({}, E, b, e)), h.set(b.sourceMapsEnabled), l.K.set(g, b);
}
function O(e) {
    let { settings: t } = e;
    y(t);
}
function v(e) {
    y(E);
}
function S(e) {
    var t;
    let n = ((null != (t = e.user.flags) ? t : 0) & p.xW$.STAFF) === p.xW$.STAFF,
        r = n || null != e.user.personal_connection_id;
    n && h.set(b.sourceMapsEnabled), f.Z.setTags({ isStaff: r.toString() });
}
class I extends (r = o.ZP.Store) {
    initialize() {
        let e = l.K.get(g);
        null != e && (b = m({}, E, e));
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
    get logKeyboardMismatches() {
        return b.logKeyboardMismatches;
    }
    get alertStartupMetrics() {
        return b.alertStartupMetrics;
    }
    get personaForceFaeFail() {
        return b.personaForceFaeFail;
    }
    get personaForceIdVerificationFail() {
        return b.personaForceIdVerificationFail;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(b).map((e) => b[e]),
            Object.keys(b)
                .filter((e) => b[e])
                .join(",")
        );
    }
}
_(I, "displayName", "DeveloperOptionsStore");
let T = new I(c.Z, {
    LOGOUT: v,
    CONNECTION_OPEN: S,
    DEVELOPER_OPTIONS_UPDATE_SETTINGS: O,
});
