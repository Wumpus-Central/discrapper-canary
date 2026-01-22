n.d(t, {
    A: () => O,
    e: () => p,
});
var r,
    i = n(635377),
    a = n.n(i),
    s = n(311907),
    o = n(73153);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = 20;
var p = (function (e) {
    return (
        (e[(e.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.FETCHED = 2)] = "FETCHED"),
        (e[(e.ERROR = 3)] = "ERROR"),
        e
    );
})({});
function _(e) {
    let { applicationId: t, guildId: n, page: r } = e;
    return "applicationId:".concat(t, " guildId:").concat(n, " page:").concat(r);
}
let h = new (a())({ max: f }),
    m = {};
function g(e) {
    let { applicationId: t, guildId: n, page: r } = e,
        i = _({
            applicationId: t,
            guildId: n,
            page: r,
        });
    m = d(c({}, m), { [i]: 1 });
}
function E(e) {
    let { applicationId: t, guildId: n, similarApplications: r, loadId: i, page: a, totalPages: s } = e,
        o = _({
            applicationId: t,
            guildId: n,
            page: a,
        });
    h.set(o, {
        lastFetchTimeMs: Date.now(),
        applications: r,
        loadId: i,
        page: a,
        totalPages: s,
    }),
        (m = d(c({}, m), { [o]: 2 }));
}
function b(e) {
    let { applicationId: t, guildId: n, page: r } = e,
        i = _({
            applicationId: t,
            guildId: n,
            page: r,
        });
    m = d(c({}, m), { [i]: 3 });
}
class y extends (r = s.Ay.Store) {
    getSimilarApplications(e) {
        let { applicationId: t, guildId: n, page: r } = e;
        if (null == t) return;
        let i = _({
            applicationId: t,
            guildId: n,
            page: r,
        });
        return h.get(i);
    }
    getFetchState(e) {
        let { applicationId: t, guildId: n, page: r } = e;
        if (null != t)
            return m[
                _({
                    applicationId: t,
                    guildId: n,
                    page: r,
                })
            ];
    }
}
l(y, "displayName", "ApplicationDirectorySimilarApplicationsStore");
let O = new y(o.h, {
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: g,
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: E,
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: b,
});
