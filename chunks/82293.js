"use strict";
n.d(t, { A: () => m, e: () => l });
var r = n(635377),
    i = n.n(r),
    a = n(311907),
    s = n(73153);
let o = 20;
var l = (function (e) {
    return (
        (e[(e.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.FETCHED = 2)] = "FETCHED"),
        (e[(e.ERROR = 3)] = "ERROR"),
        e
    );
})({});
function u(e) {
    let { applicationId: t, guildId: n, page: r } = e;
    return `applicationId:${t} guildId:${n} page:${r}`;
}
let c = new (i())({ max: o }),
    d = {};
function _(e) {
    let { applicationId: t, guildId: n, page: r } = e,
        i = u({ applicationId: t, guildId: n, page: r });
    d = { ...d, [i]: 1 };
}
function f(e) {
    let { applicationId: t, guildId: n, similarApplications: r, loadId: i, page: a, totalPages: s } = e,
        o = u({ applicationId: t, guildId: n, page: a });
    c.set(o, { lastFetchTimeMs: Date.now(), applications: r, loadId: i, page: a, totalPages: s }),
        (d = { ...d, [o]: 2 });
}
function p(e) {
    let { applicationId: t, guildId: n, page: r } = e,
        i = u({ applicationId: t, guildId: n, page: r });
    d = { ...d, [i]: 3 };
}
class h extends a.Ay.Store {
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
let m = new h(s.h, {
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: _,
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: f,
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: p,
});
