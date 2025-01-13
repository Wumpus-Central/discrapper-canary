n.d(t, {
    I4: function () {
        return a;
    },
    Sn: function () {
        return u;
    },
    U3: function () {
        return S;
    },
    Ui: function () {
        return _;
    },
    W4: function () {
        return E;
    },
    gq: function () {
        return N;
    },
    kZ: function () {
        return o;
    }
});
var i = n(544891),
    r = n(570140),
    l = n(555573),
    T = n(581364),
    I = n(981631);
function o() {
    r.Z.dispatch({ type: 'INTEGRATION_PERMISSION_SETTINGS_CLEAR' });
}
function E(e, t, n) {
    r.Z.dispatch({
        applicationId: e,
        commandId: t,
        permissions: n,
        type: 'INTEGRATION_PERMISSION_SETTINGS_EDIT'
    });
}
function u(e, t) {
    i.tn
        .get({
            url: I.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t),
            rejectWithError: !0
        })
        .then(
            (n) => {
                r.Z.dispatch({
                    type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS',
                    applicationId: t,
                    commands: n.body.application_commands,
                    guildId: e,
                    permissions: n.body.permissions
                });
            },
            () => {
                r.Z.dispatch({
                    type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE',
                    applicationId: t
                });
            }
        );
}
async function N(e, t, n) {
    let l = [];
    try {
        let r = await i.tn.get({
            url: I.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
            rejectWithError: !1
        });
        r.ok && (l = r.body.permissions);
    } catch (i) {
        if (404 !== i.status) {
            r.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE',
                applicationId: e,
                commandId: n,
                guildId: t
            });
            return;
        }
    }
    r.Z.dispatch({
        type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
        applicationId: e,
        commandId: n,
        guildId: t,
        permissions: l
    });
}
function a(e) {
    r.Z.dispatch({
        applicationId: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_INIT'
    });
}
function _(e) {
    r.Z.dispatch({
        commandId: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_RESET'
    });
}
async function S(e) {
    let { applicationId: t, commandId: n, defaultEveryoneValue: i, defaultEverywhereValue: I, guildId: o, permissions: E } = e,
        u =
            n === t
                ? (function (e, t, n, i) {
                      if (!n || !i) return t;
                      let r = {
                          [e]: n,
                          [(0, T.bD)(e)]: i
                      };
                      return t.filter((e) => {
                          let t = r[e.id];
                          return null == t || e.permission !== t;
                      });
                  })(o, E, i, I)
                : E,
        N = await l.dh(t, o, n, u);
    N.ok &&
        r.Z.dispatch({
            type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
            applicationId: t,
            commandId: n,
            guildId: o,
            permissions: N.body.permissions
        });
}
