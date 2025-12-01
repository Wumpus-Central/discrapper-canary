n.d(t, { Z: () => p }), n(388685), n(953529);
var r = n(473749),
    i = n(232616),
    a = n(314897),
    o = n(492435),
    s = n(353926),
    l = n(980944),
    c = n(987338);
function u(e, t) {
    return "guild" === e ? (0, o.gK)(t) : (0, o.Xz)(t);
}
function d(e, t, n) {
    return "guild" === e ? s.Z.getGuildExperimentDescriptor(t, n.guildId) : s.Z.getUserExperimentDescriptor(t);
}
function f(e, t, n, r) {
    var i, a;
    return (null == r ? void 0 : r.aaMode)
        ? e.defaultConfig
        : null != (a = null == (i = n.get(t)) ? void 0 : i.config)
          ? a
          : e.defaultConfig;
}
function p(e) {
    (0, l.K)(e.id, e.label, e.commonTriggerPoint);
    let t = new Map();
    t.set(c.NZ.NOT_ELIGIBLE, {
        description: "Not Eligible",
        config: e.defaultConfig,
    }),
        t.set(c.NZ.CONTROL, {
            description: "Control Bucket",
            config: e.defaultConfig,
        }),
        e.treatments.forEach((e) => {
            t.set(e.id, {
                description: "Treatment ".concat(e.id, ": ").concat(e.label),
                config: e.config,
            });
        });
    let n = u(e.kind, {
        id: e.id,
        title: e.label,
        commonTriggerPoint: e.commonTriggerPoint,
        description: [...t.values()].map((e) => e.description),
        buckets: [...t.keys()],
    });
    function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (((t.exposureType = n ? c.a0.AUTO_FALLBACK : c.a0.AUTO), (t.excluded = !1), null == r)) return void _(e, t);
        m(e, t, r);
    }
    function _(t) {
        let r =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          excluded: !1,
                          exposureType: c.a0.MANUAL,
                      },
            i = d(e.kind, n.id, t);
        null != i && m(t, r, i);
    }
    function m(e, t, r) {
        if (null != r) {
            var i, s, l, u, d;
            let f = c.a0.MANUAL,
                p = !1;
            (0, o.W9)(n.id, r, {
                location: null != (i = null == e ? void 0 : e.location) ? i : "unknown",
                analyticsLocations: null != (s = null == t ? void 0 : t.analyticsLocations) ? s : [],
                fingerprint:
                    null != (u = null != (l = null == t ? void 0 : t.fingerprint) ? l : a.default.getFingerprint())
                        ? u
                        : void 0,
                excluded: (null == t ? void 0 : t.excluded) || p,
                exposureType: null != (d = null == t ? void 0 : t.exposureType) ? d : f,
            });
        }
    }
    function h(n, r) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = null != i.disable && i.disable,
            o = d(e.kind, e.id, n),
            l = null == o || a ? c.NZ.NOT_ELIGIBLE : o.bucket,
            u = null == o ? -1 : o.revision;
        function p() {
            let i = d(e.kind, e.id, n),
                o = null == i || a ? c.NZ.NOT_ELIGIBLE : i.bucket,
                s = null == i ? -1 : i.revision;
            (o !== l || u !== s) && (r(f(e, o, t, i), o, s), (l = o), (u = s));
        }
        return (
            r(f(e, l, t, o), l, u),
            s.Z.addReactChangeListener(p),
            () => {
                s.Z.removeReactChangeListener(p);
            }
        );
    }
    function g(t) {
        let n = d(e.kind, e.id, t);
        return !!(null == n ? void 0 : n.aaMode);
    }
    return {
        useExperiment: function (n) {
            var a, o, s;
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                u = null != (a = l.disable) && a,
                _ = !1 !== l.autoTrackExposure,
                m = d(e.kind, e.id, n),
                g = null == l.trackExposureOptions ? void 0 : (0, i.Z)(null != (o = l.trackExposureOptions) ? o : {}),
                E = null != (s = null == m ? void 0 : m.triggerDebuggingEnabled) && s,
                [[b, y, O], v] = (0, r.useState)(() => {
                    let n = null == m || u ? c.NZ.NOT_ELIGIBLE : m.bucket;
                    return [f(e, n, t, m), n, null == m ? -1 : m.revision];
                }),
                S = (0, i.Z)(n);
            return (
                (0, r.useEffect)(() => {
                    !u && (_ || E) && null == e.commonTriggerPoint && p(S, g, !1 === _);
                }, [u, _, S, g, y, O, E]),
                (0, r.useEffect)(
                    () =>
                        h(
                            S,
                            (e, t, n) => {
                                v((r) => (r[0] === e && r[1] === t && r[2] === n ? r : [e, t, n]));
                            },
                            { disable: u },
                        ),
                    [u, S],
                ),
                b
            );
        },
        subscribe: h,
        trackExposure: _,
        getCurrentConfig: function (n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                i = d(e.kind, e.id, n);
            if (null == i || r.disable) return f(e, c.NZ.NOT_ELIGIBLE, t, i);
            if ((!1 !== r.autoTrackExposure || i.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
                let e = !1 === r.autoTrackExposure;
                p(n, r.trackExposureOptions, e, i);
            }
            return f(e, i.bucket, t, i);
        },
        definition: e,
        isAAMode: g,
    };
}
