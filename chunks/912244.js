n.d(t, {
    N: function () {
        return r;
    }
});
var i = n(520540);
function r(e) {
    let { enabled: t, eligibleToFetch: n } = i.g.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return {
        enabled: t,
        eligibleToFetch: n
    };
}
