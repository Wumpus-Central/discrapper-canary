"use strict";
n.d(t, { A: () => d });
var r = n(439372),
    i = n(217222),
    s = n(723702),
    a = n(845470);
let o = !1,
    l = null;
async function u() {
    if (
        (0, s.isWindows)() &&
        window.DiscordNative?.settings?.set != null &&
        (window.DiscordNative.nativeModules.getUpdaterVersion?.() ?? 0) >= 4
    ) {
        let { enabled: e } = (0, a.V)({ location: "updateSwitch" });
        await window.DiscordNative.settings.set("USE_RUST_BSPATCH", e), (l = e);
    }
}
class c extends r.A {
    stores = new Map().set(i.A, () => {
        if (o) {
            let { enabled: e } = (0, a.V)({ location: "experimentStoreUpdate" });
            l !== e && u();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            o || window.DiscordNative?.settings?.set == null || ((0, s.isWindows)() && ((o = !0), await u()));
        },
        LOGOUT: () => {
            (o = !1), (l = null);
        },
    };
}
let d = new c();
