n.d(t, { O: () => u });
var r = n(442837),
    i = n(544891),
    l = n(570140),
    a = n(960048),
    o = n(380221),
    s = n(981631);
let c = {
        async fetchUserApplicationIdentitiesWithProfiles(e, t) {
            l.Z.dispatch({
                type: "USER_APPLICATION_IDENTITY_FETCH_USER_START",
                userId: e,
            });
            try {
                let n = await i.tn.get({
                    url: s.ANM.USER_APPLICATION_IDENTITIES(e),
                    query: { with_profiles: !0 },
                    rejectWithError: !0,
                    signal: t,
                });
                l.Z.dispatch({
                    type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS",
                    userId: e,
                    identities: n.body.identities,
                });
            } catch (t) {
                throw (
                    (l.Z.dispatch({
                        type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE",
                        userId: e,
                    }),
                    a.Z.captureException(t),
                    t)
                );
            }
        },
    },
    u = (0, r.Kb)(o.Z, {
        queryId: (e) => s.McO.USER_APPLICATION_IDENTITIES(e),
        get: (e) => o.Z.getUserIdentities(e),
        load: (e, t) => c.fetchUserApplicationIdentitiesWithProfiles(t, e),
        useStateHook: r.e7,
    });
