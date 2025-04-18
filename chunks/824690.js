n.d(t, { Z: () => o }), n(388685);
var r = n(192379),
    i = n(695346),
    a = n(36703);
function o() {
    let [e, t] = r.useState(i.AY.getSetting());
    return {
        volume: e,
        onVolumeChange: r.useCallback((e) => {
            let n = (0, a.A)(e);
            t(n), i.AY.updateSetting(n);
        }, [])
    };
}
