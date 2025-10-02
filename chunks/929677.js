n.d(t, { O: () => u });
var r = n(442837),
    i = n(544891),
    a = n(570140),
    o = n(960048),
    s = n(380221),
    l = n(981631);
let c = {
        async fetchUserApplicationIdentitiesWithProfiles(e, t) {
            a.Z.dispatch({
                type: "USER_APPLICATION_IDENTITY_FETCH_USER_START",
                userId: e,
            });
            try {
                let n = await i.tn.get({
                    url: l.ANM.USER_APPLICATION_IDENTITIES(e),
                    query: { with_profiles: !0 },
                    rejectWithError: !0,
                    signal: t,
                });
                a.Z.dispatch({
                    type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS",
                    userId: e,
                    identities: n.body.identities,
                });
            } catch (t) {
                throw (
                    (a.Z.dispatch({
                        type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE",
                        userId: e,
                    }),
                    o.Z.captureException(t),
                    t)
                );
            }
        },
    },
    u = (0, r.Kb)(s.Z, {
        getQueryId: l.McO.USER_APPLICATION_IDENTITIES,
        get: (e) => s.Z.getUserIdentities(e),
        load: (e) => c.fetchUserApplicationIdentitiesWithProfiles(e),
    });
