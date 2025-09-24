n.d(t, { E: () => i });
var r = n(751823);
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: i } = r.L.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return { enabled: !i };
}
