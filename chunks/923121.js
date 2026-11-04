n(321073);
var i = n(73153),
    l = n(157559),
    s = n(627784),
    r = n(403362),
    a = n(352821),
    o = n(107795),
    d = n(539916),
    c = n(792996);
async function u(e) {
    let t = a.A.getEditedConnections(),
        n = [];
    if (
        (t.forEach((e) => {
            let t = (0, d.Ii)(e);
            n.push(...t);
        }),
        n.length > 0)
    )
        throw (
            m(n),
            l.A.show({ title: c.intl.string(c.t.ISppXw), body: n.join("\n") }),
            Error("failed to validate connections")
        );
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT" });
    try {
        var u, g;
        (await (0, o.YN)(e, { connections: t }),
            (u = e),
            (g = t),
            i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS", guildId: u, connections: g }));
    } catch (i) {
        let { fieldName: e, error: t } = new s.LG(i).getAnyErrorMessageAndField() ?? {},
            n = [e, t].filter(r.Vq).join(": ");
        throw (m([n]), l.A.show({ title: c.intl.string(c.t.iLdiqY), body: n }), i);
    }
}
function m(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED", errors: e });
}
n.d(
    t,
    {},
    {
        Bq: function (e) {
            i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER", connections: e });
        },
        fH: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t || a.A.hasChanges() ? u(e) : Promise.resolve();
        },
        p2: function () {
            i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET" });
        },
        q3: u,
        sF: function (e) {
            i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD", connection: e });
        },
        yM: function (e, t) {
            i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE", index: e, updates: t });
        },
        zN: function (e) {
            i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE", index: e });
        },
    },
);
