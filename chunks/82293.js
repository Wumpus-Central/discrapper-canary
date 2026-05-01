n.d(t, { A: () => u, e: () => o });
var i,
    a = n(635377),
    r = n.n(a),
    s = n(17928),
    l = n(228366),
    o =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
function d(e) {
    let { applicationId: t, guildId: n, page: i } = e;
    return `applicationId:${t} guildId:${n} page:${i}`;
}
let c = new (r())({ max: 20 }),
    _ = {};
class E extends s.Ay.Store {
    static displayName = "ApplicationDirectorySimilarApplicationsStore";
    getSimilarApplications(e) {
        let { applicationId: t, guildId: n, page: i } = e;
        if (null == t) return;
        let a = d({ applicationId: t, guildId: n, page: i });
        return c.get(a);
    }
    getFetchState(e) {
        let { applicationId: t, guildId: n, page: i } = e;
        if (null != t) return _[d({ applicationId: t, guildId: n, page: i })];
    }
}
let u = new E(l.h, {
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function (e) {
        let { applicationId: t, guildId: n, page: i } = e,
            a = d({ applicationId: t, guildId: n, page: i });
        _ = { ..._, [a]: 1 };
    },
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function (e) {
        let { applicationId: t, guildId: n, similarApplications: i, loadId: a, page: r, totalPages: s } = e,
            l = d({ applicationId: t, guildId: n, page: r });
        c.set(l, { lastFetchTimeMs: Date.now(), applications: i, loadId: a, page: r, totalPages: s }),
            (_ = { ..._, [l]: 2 });
    },
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function (e) {
        let { applicationId: t, guildId: n, page: i } = e,
            a = d({ applicationId: t, guildId: n, page: i });
        _ = { ..._, [a]: 3 };
    },
});
