r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(695346),
    s = r(36703);
function l() {
    let [e, n] = a.useState(o.AY.getSetting());
    return {
        volume: e,
        onVolumeChange: a.useCallback((e) => {
            let r = (0, s.A)(e);
            n(r), o.AY.updateSetting(r);
        }, [])
    };
}
