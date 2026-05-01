"use strict";
n.d(t, { A: () => f, e: () => l });
var i,
    r = n(635377),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
function u(e) {
    let { applicationId: t, guildId: n, page: i } = e;
    return `applicationId:${t} guildId:${n} page:${i}`;
}
let c = new (s())({ max: 20 }),
    d = {};
class _ extends a.Ay.Store {
    static displayName = "ApplicationDirectorySimilarApplicationsStore";
    getSimilarApplications(e) {
        let { applicationId: t, guildId: n, page: i } = e;
        if (null == t) return;
        let r = u({ applicationId: t, guildId: n, page: i });
        return c.get(r);
    }
    getFetchState(e) {
        let { applicationId: t, guildId: n, page: i } = e;
        if (null != t) return d[u({ applicationId: t, guildId: n, page: i })];
    }
}
let f = new _(o.h, {
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function (e) {
        let { applicationId: t, guildId: n, page: i } = e,
            r = u({ applicationId: t, guildId: n, page: i });
        d = { ...d, [r]: 1 };
    },
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function (e) {
        let { applicationId: t, guildId: n, similarApplications: i, loadId: r, page: s, totalPages: a } = e,
            o = u({ applicationId: t, guildId: n, page: s });
        c.set(o, { lastFetchTimeMs: Date.now(), applications: i, loadId: r, page: s, totalPages: a }),
            (d = { ...d, [o]: 2 });
    },
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function (e) {
        let { applicationId: t, guildId: n, page: i } = e,
            r = u({ applicationId: t, guildId: n, page: i });
        d = { ...d, [r]: 3 };
    },
});
