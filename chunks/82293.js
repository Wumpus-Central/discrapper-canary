n.d(t, { A: () => u, e: () => l });
var i,
    r = n(635377),
    a = n.n(r),
    s = n(17928),
    _ = n(228366),
    l =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
function o(e) {
    let { applicationId: t, guildId: n, page: i } = e;
    return `applicationId:${t} guildId:${n} page:${i}`;
}
let E = new (a())({ max: 20 }),
    d = {};
class c extends s.Ay.Store {
    static displayName = "ApplicationDirectorySimilarApplicationsStore";
    getSimilarApplications(e) {
        let { applicationId: t, guildId: n, page: i } = e;
        if (null == t) return;
        let r = o({ applicationId: t, guildId: n, page: i });
        return E.get(r);
    }
    getFetchState(e) {
        let { applicationId: t, guildId: n, page: i } = e;
        if (null != t) return d[o({ applicationId: t, guildId: n, page: i })];
    }
}
let u = new c(_.h, {
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function (e) {
        let { applicationId: t, guildId: n, page: i } = e,
            r = o({ applicationId: t, guildId: n, page: i });
        d = { ...d, [r]: 1 };
    },
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function (e) {
        let { applicationId: t, guildId: n, similarApplications: i, loadId: r, page: a, totalPages: s } = e,
            _ = o({ applicationId: t, guildId: n, page: a });
        E.set(_, { lastFetchTimeMs: Date.now(), applications: i, loadId: r, page: a, totalPages: s }),
            (d = { ...d, [_]: 2 });
    },
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function (e) {
        let { applicationId: t, guildId: n, page: i } = e,
            r = o({ applicationId: t, guildId: n, page: i });
        d = { ...d, [r]: 3 };
    },
});
