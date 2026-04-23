"use strict";
n.d(t, { A: () => f, e: () => l });
var r,
    i = n(635377),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    l =
        (((r = {})[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED"),
        (r[(r.ERROR = 3)] = "ERROR"),
        r);
function u(e) {
    let { applicationId: t, guildId: n, page: r } = e;
    return `applicationId:${t} guildId:${n} page:${r}`;
}
let c = new (s())({ max: 20 }),
    d = {};
class _ extends a.Ay.Store {
    static displayName = "ApplicationDirectorySimilarApplicationsStore";
    getSimilarApplications(e) {
        let { applicationId: t, guildId: n, page: r } = e;
        if (null == t) return;
        let i = u({ applicationId: t, guildId: n, page: r });
        return c.get(i);
    }
    getFetchState(e) {
        let { applicationId: t, guildId: n, page: r } = e;
        if (null != t) return d[u({ applicationId: t, guildId: n, page: r })];
    }
}
let f = new _(o.h, {
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function (e) {
        let { applicationId: t, guildId: n, page: r } = e,
            i = u({ applicationId: t, guildId: n, page: r });
        d = { ...d, [i]: 1 };
    },
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function (e) {
        let { applicationId: t, guildId: n, similarApplications: r, loadId: i, page: s, totalPages: a } = e,
            o = u({ applicationId: t, guildId: n, page: s });
        c.set(o, { lastFetchTimeMs: Date.now(), applications: r, loadId: i, page: s, totalPages: a }),
            (d = { ...d, [o]: 2 });
    },
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function (e) {
        let { applicationId: t, guildId: n, page: r } = e,
            i = u({ applicationId: t, guildId: n, page: r });
        d = { ...d, [i]: 3 };
    },
});
