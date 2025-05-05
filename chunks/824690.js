n.d(t, { Z: () => a }), n(388685);
var r = n(73800),
    i = n(695346),
    o = n(36703);
function a() {
    let [e, t] = r.useState(i.AY.getSetting());
    return {
        volume: e,
        onVolumeChange: r.useCallback((e) => {
            let n = (0, o.A)(e);
            t(n), i.AY.updateSetting(n);
        }, [])
    };
}
