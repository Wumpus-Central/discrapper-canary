var n = i(855986),
    l = i(71393),
    r = i(927813),
    a = i(669610),
    d = i(988912),
    o = i(652215);
let u = 5 * r.A.Seconds.MINUTE,
    A = 15 * r.A.Seconds.SECOND,
    g = (0, n.UT)(d.A, {
        getQueryId: o.fic.GAME_ORGANIZATION,
        get: (e) => d.A.getGameOrganizationByGuildId(e),
        load: (e) => {
            let t = l.A.getGuild(e);
            return null == t || null == t.linkedGameOrganization ? Promise.resolve(void 0) : (0, a.G)(e);
        },
        getIsLoading: (e) => d.A.isLoadingForGuild(e),
        getError: (e) => d.A.getErrorForGuild(e),
        staleAfter: u,
        failureStaleAfter: A,
    });
i.d(t, {}, { c: g });
