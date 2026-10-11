(n.d(t, {
    Fl: () => c,
    HR: () => s,
    Hv: () => _,
    IU: () => E,
    RX: () => A,
    XE: () => d,
    Zh: () => o,
    c6: () => r,
    eq: () => a,
    q7: () => i,
    sq: () => l,
    tr: () => u,
}),
    n(938796));
let i = Object.freeze({
        APP_CHANNEL: 1,
        VOICE_CHANNEL: 2,
        PROFILE_WIDGET: 3,
        AUTOMOD: 4,
        BOT: 5,
        APPLICATION_COMMANDS: 6,
        OVERLAY: 7,
        ACTIVITY: 8,
    }),
    r = 2,
    a = 128,
    s = 400,
    l = 25,
    o = Object.freeze({ PUBLIC: 1, SHAREABLE: 2 });
function d(e) {
    return ((e.flags ?? 0) & o.PUBLIC) != 0;
}
function c(e) {
    return null != e.preview_application_id && e.preview_application_id === e.application_id;
}
function u(e) {
    return ((e.flags ?? 0) & o.SHAREABLE) != 0;
}
function _(e) {
    let t = e.supported_surfaces ?? [];
    return t.includes(i.APP_CHANNEL) || ("guild" === e.install_scope && 0 === t.length);
}
function E(e) {
    return null != e.flags;
}
function A(e) {
    return null != e.collaborator_role_ids;
}
