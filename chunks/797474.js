n.d(t, { A: () => _ });
var i = n(439372),
    r = n(710195),
    a = n(723702);
let s = (0, n(945810).mj)({
    name: "2026-09-desktop-tti-update-check-deadline",
    kind: "user",
    defaultConfig: { deadline_ms: 0 },
    variations: { 1: { deadline_ms: 15e3 }, 2: { deadline_ms: 3e4 } },
});
function l(e) {
    let { location: t } = e;
    return s.getConfig({ location: t });
}
let o = !1,
    d = null;
async function c() {
    if (!(0, a.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let { deadline_ms: e } = l({ location: "updateSwitch" }),
        t = "DESKTOP_TTI_UPDATE_CHECK_DEADLINE_MS";
    (e !== (await window.DiscordNative.settings.get(t, 0)) && (await window.DiscordNative.settings.set(t, e)), (d = e));
}
class u extends i.A {
    stores = new Map().set(r.A, () => {
        if (o) {
            let { deadline_ms: e } = l({ location: "experimentStoreUpdate" });
            d !== e && c();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            o || window.DiscordNative?.settings?.set == null || ((0, a.isDesktop)() && ((o = !0), await c()));
        },
        LOGOUT: () => {
            ((o = !1), (d = null));
        },
    };
}
let _ = new u();
