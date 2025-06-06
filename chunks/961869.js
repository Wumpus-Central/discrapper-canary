n.r(t), n.d(t, { getKrispModel: () => i });
var r = n(579806);
function i() {
    try {
        return r.Z.nativeModules.requireModule('discord_krisp').getNcModelFilename();
    } catch (e) {
        return Promise.resolve(null);
    }
}
