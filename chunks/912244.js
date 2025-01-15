n.d(t, {
    N: function () {
        return s;
    }
});
var i = n(520540);
function s(e) {
    let { enabled: t, eligibleToFetch: n } = i.g.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return {
        enabled: t,
        eligibleToFetch: n
    };
}
