n.d(t, { N: () => i });
var r = n(520540);
function i(e) {
    let { enabled: t, eligibleToFetch: n } = r.g.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return {
        enabled: t,
        eligibleToFetch: n
    };
}
