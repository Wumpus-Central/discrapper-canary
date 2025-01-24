r.d(n, {
    D: function () {
        return a;
    }
});
var i = r(471309);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { enabled: n, version: r } = i.Z.useExperiment({ location: 'experiment_hook' }, { autoTrackExposure: e });
    return {
        enabled: n,
        version: r
    };
}
