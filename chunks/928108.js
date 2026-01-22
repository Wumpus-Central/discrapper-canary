n.d(t, {
    _: () => a,
    p: () => i,
});
var r = n(853066);

function i(e) {
    let { enabled: t } = r.R.getCurrentConfig({
        guildId: e,
        location: "988d4e_3",
    });
    return t;
}

function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = r.R.useExperiment(
            {
                guildId: e,
                location: "988d4e_4",
            },
            {
                autoTrackExposure: t,
            },
        );
    return n;
}
