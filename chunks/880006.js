"use strict";
n.d(t, { A: () => h });
var i = n(64700),
    r = n(859141),
    s = n.n(r),
    a = {};
function o(e, t) {
    void 0 === t && (t = s());
    var n = (0, i.useRef)(a),
        r = n.current;
    return (
        (0, i.useEffect)(function () {
            n.current = r;
        }),
        (n.current !== a && t(e, n.current)) || (r = e),
        r
    );
}
var l = n(495544),
    u = n(102609),
    c = n(736056),
    d = n(688151);
function _(e, t, n) {
    return "guild" === e ? c.A.getGuildExperimentDescriptor(t, n.guildId) : c.A.getUserExperimentDescriptor(t);
}
function f(e, t, n, i) {
    return i?.aaMode ? e.defaultConfig : (n.get(t)?.config ?? e.defaultConfig);
}
function h(e) {
    var t, n;
    e.id, e.label, e.commonTriggerPoint;
    let r = new Map();
    r.set(d.RE.NOT_ELIGIBLE, { description: "Not Eligible", config: e.defaultConfig }),
        r.set(d.RE.CONTROL, { description: "Control Bucket", config: e.defaultConfig }),
        e.treatments.forEach((e) => {
            r.set(e.id, { description: `Treatment ${e.id}: ${e.label}`, config: e.config });
        });
    let s =
        ((t = e.kind),
        (n = {
            id: e.id,
            title: e.label,
            commonTriggerPoint: e.commonTriggerPoint,
            description: [...r.values()].map((e) => e.description),
            buckets: [...r.keys()],
        }),
        "guild" === t ? (0, u.Ut)(n) : (0, u.wh)(n));
    function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        ((t.exposureType = n ? d.vf.AUTO_FALLBACK : d.vf.AUTO), (t.excluded = !1), null == i) ? h(e, t) : p(e, t, i);
    }
    function h(t) {
        let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { excluded: !1, exposureType: d.vf.MANUAL },
            i = _(e.kind, s.id, t);
        null != i && p(t, n, i);
    }
    function p(e, t, n) {
        if (null != n) {
            let i = d.vf.MANUAL;
            (0, u.LQ)(s.id, n, {
                location: e?.location ?? "unknown",
                analyticsLocations: t?.analyticsLocations ?? [],
                fingerprint: t?.fingerprint ?? l.default.getFingerprint() ?? void 0,
                excluded: t?.excluded || !1,
                exposureType: t?.exposureType ?? i,
            });
        }
    }
    function E(t, n) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            s = null != i.disable && i.disable,
            a = _(e.kind, e.id, t),
            o = null == a || s ? d.RE.NOT_ELIGIBLE : a.bucket,
            l = null == a ? -1 : a.revision;
        function u() {
            let i = _(e.kind, e.id, t),
                a = null == i || s ? d.RE.NOT_ELIGIBLE : i.bucket,
                u = null == i ? -1 : i.revision;
            (a !== o || l !== u) && (n(f(e, a, r, i), a, u), (o = a), (l = u));
        }
        return (
            n(f(e, o, r, a), o, l),
            c.A.addReactChangeListener(u),
            () => {
                c.A.removeReactChangeListener(u);
            }
        );
    }
    return {
        useExperiment: function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                s = n.disable ?? !1,
                l = !1 !== n.autoTrackExposure,
                u = _(e.kind, e.id, t),
                c = null == n.trackExposureOptions ? void 0 : o(n.trackExposureOptions ?? {}),
                h = u?.triggerDebuggingEnabled ?? !1,
                [[p, m, g], A] = (0, i.useState)(() => {
                    let t = null == u || s ? d.RE.NOT_ELIGIBLE : u.bucket;
                    return [f(e, t, r, u), t, null == u ? -1 : u.revision];
                }),
                I = o(t);
            return (
                (0, i.useEffect)(() => {
                    !s && (l || h) && null == e.commonTriggerPoint && a(I, c, !1 === l);
                }, [s, l, I, c, m, g, h]),
                (0, i.useEffect)(
                    () =>
                        E(
                            I,
                            (e, t, n) => {
                                A((i) => (i[0] === e && i[1] === t && i[2] === n ? i : [e, t, n]));
                            },
                            { disable: s },
                        ),
                    [s, I],
                ),
                p
            );
        },
        subscribe: E,
        trackExposure: h,
        getCurrentConfig: function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoTrackExposure: !0 },
                i = _(e.kind, e.id, t);
            if (null == i || n.disable) return f(e, d.RE.NOT_ELIGIBLE, r, i);
            if ((!1 !== n.autoTrackExposure || i.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
                let e = !1 === n.autoTrackExposure;
                a(t, n.trackExposureOptions, e, i);
            }
            return f(e, i.bucket, r, i);
        },
        definition: e,
        isAAMode: function (t) {
            let n = _(e.kind, e.id, t);
            return !!n?.aaMode;
        },
    };
}
