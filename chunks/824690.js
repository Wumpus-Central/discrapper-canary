n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    r = n(695346),
    a = n(36703);
function s() {
    let [e, t] = i.useState(r.AY.getSetting());
    return {
        volume: e,
        onVolumeChange: i.useCallback((e) => {
            let n = (0, a.A)(e);
            t(n), r.AY.updateSetting(n);
        }, [])
    };
}
