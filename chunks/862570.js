"use strict";
n.d(t, { A: () => c });
var r = n(735438),
    i = n.n(r),
    s = n(954571),
    a = n(31408),
    o = n(652215);
function l(e) {
    switch (e) {
        case a.uD.CHAT_INPUT:
            return "chat_input";
        case a.uD.MENTION:
            return "mention";
        case a.uD.VOICE_USER:
            return "voice_user";
    }
}
function u(e) {
    switch (e) {
        case a.k.CHAT_INPUT:
            return "chat_input";
        case a.k.MEMBER_USER:
            return "member_user";
        case a.k.REACTION:
            return "reaction";
        case a.k.CALL_TILE:
            return "call_tile";
    }
}
function d(e, t) {
    return Object.entries(e)
        .filter((e) => {
            let [t, n] = e;
            return n;
        })
        .map((e) => {
            let [n] = e;
            return t(Number.parseInt(n));
        });
}
let c = i().throttle((e) => {
    let {
        enabled: t,
        combosEnabled: n,
        combosRequiredCount: r,
        screenshakeEnabled: i,
        shakeIntensity: a,
        screenshakeEnabledLocations: c,
        confettiEnabled: _,
        confettiSize: f,
        confettiCount: E,
        confettiEnabledLocations: h,
    } = e;
    s.default.track(o.HAw.POGGERMODE_SETTINGS_UPDATED, {
        enabled: t,
        combos_enabled: n,
        combos_required_count: r,
        screenshake_enabled: i,
        shake_intensity: a,
        screenshake_enabled_locations: d(c, l),
        confetti_enabled: _,
        confetti_size: f,
        confetti_count: E,
        confetti_enabled_locations: d(h, u),
    });
}, 5e3);
