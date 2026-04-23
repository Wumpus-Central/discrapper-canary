n.d(t, { Bq: () => h, fH: () => E, p2: () => x, q3: () => _, sF: () => u, yM: () => g, zN: () => m }), n(321073);
var i = n(228366),
    l = n(157559),
    s = n(845584),
    a = n(403362),
    r = n(352821),
    o = n(107795),
    d = n(539916),
    c = n(985018);
function u(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD", connection: e });
}
function m(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE", index: e });
}
function g(e, t) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE", index: e, updates: t });
}
function h(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER", connections: e });
}
function x() {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET" });
}
async function _(e) {
    let t = r.A.getEditedConnections(),
        n = [];
    if (
        (t.forEach((e) => {
            let t = (0, d.Ii)(e);
            n.push(...t);
        }),
        n.length > 0)
    )
        throw (
            (p(n),
            l.A.show({ title: c.intl.string(c.t.ISppXw), body: n.join("\n") }),
            Error("failed to validate connections"))
        );
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT" });
    try {
        var u, m;
        await (0, o.YN)(e, { connections: t }),
            (u = e),
            (m = t),
            i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS", guildId: u, connections: m });
    } catch (i) {
        let { fieldName: e, error: t } = new s.LG(i).getAnyErrorMessageAndField() ?? {},
            n = [e, t].filter(a.Vq).join(": ");
        throw (p([n]), l.A.show({ title: c.intl.string(c.t.iLdiqY), body: n }), i);
    }
}
function p(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED", errors: e });
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t || r.A.hasChanges() ? _(e) : Promise.resolve();
}
