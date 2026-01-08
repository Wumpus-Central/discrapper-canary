n.r(t),
    n.d(t, {
        AnalyticsActionHandlers: () => c.X,
        ImpressionGroups: () => u.A,
        ImpressionNames: () => d.z,
        ImpressionTypes: () => u.n,
        NetworkActionNames: () => d.a,
        analyticsTrackingStoreMaker: () => c.l,
        encodeProperties: () => l.Z,
        extendSuperProperties: () => f.fb,
        getCampaignParams: () => f.fU,
        getDevice: () => f._v,
        getOS: () => f.Ij,
        getSuperProperties: () => f.SL,
        getSuperPropertiesBase64: () => f.pJ,
        isThrottled: () => m,
        trackMaker: () => h,
    }),
    n(388685);
var r = n(348327),
    i = n.n(r),
    a = n(512722),
    o = n.n(a),
    s = n(979675),
    l = n(947486),
    c = n(699407),
    u = n(20281),
    d = n(525769),
    f = n(753859);
let p = {},
    _ = {};
function m(e) {
    return null != p[e] && p[e] > Date.now();
}
let h = (e) => {
    let { analyticEventConfigs: t, dispatcher: r, TRACK_ACTION_NAME: a } = e,
        l = (0, s.$)(r, a);
    return function (e, r) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let s = null != r ? r : {},
            c = t[e];
        if ("function" == typeof c) {
            var u;
            c = null != (u = c(s)) ? u : null;
        }
        if (null != c)
            if ("throttlePeriod" in c) {
                let t = [e, ...c.throttleKeys(s)].join("_");
                if (m(t) || ("number" == typeof c.throttlePercent && Math.random() > c.throttlePercent))
                    return Promise.resolve();
                if (c.deduplicate) {
                    let e = _[t];
                    if (i()(e, s)) return Promise.resolve();
                    _[t] = s;
                }
                p[t] = Date.now() + c.throttlePeriod;
            } else if ("throttlePercent" in c) {
                if (Math.random() > c.throttlePercent) return Promise.resolve();
            } else o()(!1, "Unsupported analytics event config: ".concat(c));
        return l(e, r, a);
    };
};
