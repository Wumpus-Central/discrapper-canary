n.d(t, { Z: () => _ }), n(47120);
var i = n(192379),
    r = n(128456),
    a = n(314897),
    s = n(492435),
    o = n(353926),
    l = n(980944),
    u = n(987338);
function c(e, t) {
    return 'guild' === e ? (0, s.gK)(t) : (0, s.Xz)(t);
}
function d(e, t, n) {
    return 'guild' === e ? o.Z.getGuildExperimentDescriptor(t, n.guildId) : o.Z.getUserExperimentDescriptor(t);
}
function f(e, t, n, i) {
    var r, a;
    return (null == i ? void 0 : i.aaMode) ? e.defaultConfig : null !== (a = null === (r = n.get(t)) || void 0 === r ? void 0 : r.config) && void 0 !== a ? a : e.defaultConfig;
}
function _(e) {
    (0, l.K)(e.id, e.label, e.commonTriggerPoint);
    let t = new Map();
    t.set(u.NZ.NOT_ELIGIBLE, {
        description: 'Not Eligible',
        config: e.defaultConfig
    }),
        t.set(u.NZ.CONTROL, {
            description: 'Control Bucket',
            config: e.defaultConfig
        }),
        e.treatments.forEach((e) => {
            t.set(e.id, {
                description: 'Treatment '.concat(e.id, ': ').concat(e.label),
                config: e.config
            });
        });
    let n = c(e.kind, {
        id: e.id,
        title: e.label,
        commonTriggerPoint: e.commonTriggerPoint,
        description: [...t.values()].map((e) => e.description),
        buckets: [...t.keys()]
    });
    function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (((t.exposureType = n ? u.a0.AUTO_FALLBACK : u.a0.AUTO), (t.excluded = !1), null == i)) {
            p(e, t);
            return;
        }
        h(e, t, i);
    }
    function p(t) {
        let i =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                          excluded: !1,
                          exposureType: u.a0.MANUAL
                      },
            r = d(e.kind, n.id, t);
        null != r && h(t, i, r);
    }
    function h(e, t, i) {
        if (null != i) {
            var r, o, l, c, d;
            let f = u.a0.MANUAL,
                _ = !1;
            (0, s.W9)(n.id, i, {
                location: null !== (r = null == e ? void 0 : e.location) && void 0 !== r ? r : 'unknown',
                analyticsLocations: null !== (o = null == t ? void 0 : t.analyticsLocations) && void 0 !== o ? o : [],
                fingerprint: null !== (c = null !== (l = null == t ? void 0 : t.fingerprint) && void 0 !== l ? l : a.default.getFingerprint()) && void 0 !== c ? c : void 0,
                excluded: (null == t ? void 0 : t.excluded) || _,
                exposureType: null !== (d = null == t ? void 0 : t.exposureType) && void 0 !== d ? d : f
            });
        }
    }
    function m(n, i) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = null != r.disable && r.disable,
            s = d(e.kind, e.id, n),
            l = null == s || a ? u.NZ.NOT_ELIGIBLE : s.bucket,
            c = null == s ? -1 : s.revision;
        function _() {
            let r = d(e.kind, e.id, n),
                s = null == r || a ? u.NZ.NOT_ELIGIBLE : r.bucket,
                o = null == r ? -1 : r.revision;
            (s !== l || c !== o) && (i(f(e, s, t, r), s, o), (l = s), (c = o));
        }
        return (
            i(f(e, l, t, s), l, c),
            o.Z.addReactChangeListener(_),
            () => {
                o.Z.removeReactChangeListener(_);
            }
        );
    }
    function g(t) {
        let n = d(e.kind, e.id, t);
        return !!(null == n ? void 0 : n.aaMode);
    }
    return {
        useExperiment: function (n) {
            var a, s, o;
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                c = null !== (a = l.disable) && void 0 !== a && a,
                p = !1 !== l.autoTrackExposure,
                h = d(e.kind, e.id, n),
                g = null == l.trackExposureOptions ? void 0 : (0, r.Z)(null !== (s = l.trackExposureOptions) && void 0 !== s ? s : {}),
                E = null !== (o = null == h ? void 0 : h.triggerDebuggingEnabled) && void 0 !== o && o,
                [[v, y, I], b] = (0, i.useState)(() => {
                    let n = null == h || c ? u.NZ.NOT_ELIGIBLE : h.bucket;
                    return [f(e, n, t, h), n, null == h ? -1 : h.revision];
                }),
                T = (0, r.Z)(n);
            return (
                (0, i.useEffect)(() => {
                    !c && (p || E) && null == e.commonTriggerPoint && _(T, g, !1 === p);
                }, [c, p, T, g, y, I, E]),
                (0, i.useEffect)(
                    () =>
                        m(
                            T,
                            (e, t, n) => {
                                b((i) => (i[0] === e && i[1] === t && i[2] === n ? i : [e, t, n]));
                            },
                            { disable: c }
                        ),
                    [c, T]
                ),
                v
            );
        },
        subscribe: m,
        trackExposure: p,
        getCurrentConfig: function (n) {
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                r = d(e.kind, e.id, n);
            if (null == r || i.disable) return f(e, u.NZ.NOT_ELIGIBLE, t, r);
            if ((!1 !== i.autoTrackExposure || r.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
                let e = !1 === i.autoTrackExposure;
                _(n, i.trackExposureOptions, e, r);
            }
            return f(e, r.bucket, t, r);
        },
        definition: e,
        isAAMode: g
    };
}
