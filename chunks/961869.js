(n.r(t),
    n.d(t, {
        getKrispModel: () => i,
        setKrispModelOverride: () => o,
        setKrispSuppressionLevel: () => a
    }));
var r = n(579806);
function i() {
    try {
        return r.Z.nativeModules.requireModule('discord_krisp').getNcModelFilename();
    } catch (e) {
        return Promise.resolve(null);
    }
}
function a(e) {
    try {
        var t, n;
        null == (t = (n = r.Z.nativeModules.requireModule('discord_krisp')).setSuppressionLevel) || t.call(n, e);
    } catch (e) {}
}
function o(e) {
    try {
        r.Z.nativeModules.requireModule('discord_krisp').setNcModel(e);
    } catch (e) {}
}
