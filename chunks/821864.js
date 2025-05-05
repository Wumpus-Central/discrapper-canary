n.d(t, {
    I4: () => f,
    Sn: () => u,
    U3: () => p,
    Ui: () => _,
    W4: () => c,
    gq: () => d,
    kZ: () => l
});
var r = n(544891),
    i = n(570140),
    o = n(555573),
    a = n(581364),
    s = n(981631);
function l() {
    i.Z.dispatch({ type: 'INTEGRATION_PERMISSION_SETTINGS_CLEAR' });
}
function c(e, t, n) {
    i.Z.dispatch({
        applicationId: e,
        commandId: t,
        permissions: n,
        type: 'INTEGRATION_PERMISSION_SETTINGS_EDIT'
    });
}
function u(e, t) {
    r.tn
        .get({
            url: s.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t),
            rejectWithError: !0
        })
        .then(
            (n) => {
                i.Z.dispatch({
                    type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS',
                    applicationId: t,
                    commands: n.body.application_commands,
                    guildId: e,
                    permissions: n.body.permissions
                });
            },
            () => {
                i.Z.dispatch({
                    type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE',
                    applicationId: t
                });
            }
        );
}
async function d(e, t, n) {
    let o = [];
    try {
        let i = await r.tn.get({
            url: s.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
            rejectWithError: !1
        });
        i.ok && (o = i.body.permissions);
    } catch (r) {
        if (404 !== r.status)
            return void i.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE',
                applicationId: e,
                commandId: n,
                guildId: t
            });
    }
    i.Z.dispatch({
        type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
        applicationId: e,
        commandId: n,
        guildId: t,
        permissions: o
    });
}
function f(e) {
    i.Z.dispatch({
        applicationId: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_INIT'
    });
}
function _(e) {
    i.Z.dispatch({
        commandId: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_RESET'
    });
}
async function p(e) {
    let { applicationId: t, commandId: n, defaultEveryoneValue: r, defaultEverywhereValue: a, guildId: s, permissions: l } = e,
        c = n === t ? h(s, l, r, a) : l,
        u = await o.dh(t, s, n, c);
    u.ok &&
        i.Z.dispatch({
            type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
            applicationId: t,
            commandId: n,
            guildId: s,
            permissions: u.body.permissions
        });
}
function h(e, t, n, r) {
    if (!n || !r) return t;
    let i = {
        [e]: n,
        [(0, a.bD)(e)]: r
    };
    return t.filter((e) => {
        let t = i[e.id];
        return null == t || e.permission !== t;
    });
}
