n.d(t, { D: () => r });
var i = n(471309);
function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { enabled: t, version: n } = i.Z.useExperiment({ location: 'experiment_hook' }, { autoTrackExposure: e });
    return {
        enabled: t,
        version: n
    };
}
