n.d(t, { X: () => a });
var l = n(544891),
    i = n(570140),
    r = n(987350),
    o = n(981631);
async function a(e) {
    let t = r.Z.getAllowedApplicationIds(e);
    if (null !== t) return Promise.resolve(t);
    if (r.Z.isFetching(e))
        return new Promise((t) => {
            let n = () => {
                let l = r.Z.getAllowedApplicationIds(e);
                null !== l && (r.Z.removeChangeListener(n), t(l));
            };
            r.Z.addChangeListener(n);
        });
    i.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START",
        guildId: e,
    });
    try {
        var n;
        let t = await l.tn.get({
            url: o.ANM.GUILD_ONBOARDING_ALLOWED_APPLICATIONS(e),
            rejectWithError: !1,
        });
        if (t.ok && (null == (n = t.body) ? void 0 : n.application_ids)) {
            let n = t.body.application_ids.map((e) => String(e));
            return (
                i.Z.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
                    guildId: e,
                    applicationIds: n,
                }),
                n
            );
        }
        return (
            i.Z.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
                guildId: e,
                applicationIds: [],
            }),
            []
        );
    } catch (t) {
        return (
            i.Z.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE",
                guildId: e,
            }),
            []
        );
    }
}
