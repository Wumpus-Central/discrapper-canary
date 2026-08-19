"use strict";
n.d(t, { A: () => E, e: () => o });
var i,
    r = n(635377),
    a = n.n(r),
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
let c = new (a())({ max: 20 }),
    u = {};
class _ extends s.Ay.Store {
    static displayName = "ApplicationDirectorySimilarApplicationsStore";
    getSimilarApplications(e) {
        let { applicationId: t, guildId: n, page: i } = e;
        if (null == t) return;
        let r = d({ applicationId: t, guildId: n, page: i });
        return c.get(r);
    }
    getFetchState(e) {
        let { applicationId: t, guildId: n, page: i } = e;
        if (null != t) return u[d({ applicationId: t, guildId: n, page: i })];
    }
}
let E = new _(l.h, {
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function (e) {
        let { applicationId: t, guildId: n, page: i } = e,
            r = d({ applicationId: t, guildId: n, page: i });
        u = { ...u, [r]: 1 };
    },
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function (e) {
        let { applicationId: t, guildId: n, similarApplications: i, loadId: r, page: a, totalPages: s } = e,
            l = d({ applicationId: t, guildId: n, page: a });
        c.set(l, { lastFetchTimeMs: Date.now(), applications: i, loadId: r, page: a, totalPages: s }),
            (u = { ...u, [l]: 2 });
    },
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function (e) {
        let { applicationId: t, guildId: n, page: i } = e,
            r = d({ applicationId: t, guildId: n, page: i });
        u = { ...u, [r]: 3 };
    },
});
