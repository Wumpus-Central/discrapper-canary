c.r(e),
    c.d(e, {
        default: function () {
            return L;
        }
    });
var o = c(200651),
    a = c(192379),
    i = c(512969),
    I = c(608787),
    n = c(442837),
    _ = c(765717),
    O = c(353926),
    l = c(926061),
    p = c(215256),
    P = c(8991),
    R = c(314897),
    E = c(272242),
    r = c(981631);
let A = a.lazy(() =>
        (0, I.wE)({
            createPromise: () => Promise.all([c.e('73503'), c.e('6380'), c.e('72181'), c.e('56630'), c.e('66711'), c.e('86282'), c.e('65840'), c.e('21628'), c.e('18101'), c.e('24207'), c.e('77803'), c.e('9005'), c.e('64676'), c.e('28958'), c.e('6618')]).then(c.bind(c, 753450)),
            webpackId: 753450
        })
    ),
    s = a.lazy(() =>
        (0, I.wE)({
            createPromise: () => Promise.all([c.e('6380'), c.e('56630'), c.e('65840'), c.e('18101'), c.e('24207'), c.e('9005'), c.e('28958'), c.e('43704')]).then(c.bind(c, 74438)),
            webpackId: 74438
        })
    ),
    C = a.lazy(() =>
        (0, I.wE)({
            createPromise: () => Promise.all([c.e('6380'), c.e('56630'), c.e('65840'), c.e('18101'), c.e('24207'), c.e('28958'), c.e('64121')]).then(c.bind(c, 675869)),
            webpackId: 675869
        })
    );
function L() {
    let t = (0, n.e7)([O.Z], () => O.Z.hasLoadedExperiments),
        e = (0, n.e7)([R.default], () => R.default.isAuthenticated()),
        c = (0, l.YP)({ location: 'ApplicationDirectoryRoutes' }) && t,
        I = (0, p.M)({ location: 'ApplicationDirectoryRoutes' }) && t;
    a.useEffect(() => {
        t && !e && p.f.trackExposure({ location: 'ApplicationDirectoryRoutes' });
    }, [e, t]);
    let L = (e && c) || (!e && I);
    return t
        ? L
            ? (0, o.jsx)(i.AW, {
                  path: r.Z5c.APPLICATION_DIRECTORY,
                  component: P.E
              })
            : (0, o.jsxs)(i.rs, {
                  children: [
                      (0, o.jsx)(_.Z, {
                          path: r.Z5c.APPLICATION_DIRECTORY,
                          exact: !0,
                          component: s
                      }),
                      (0, o.jsx)(_.Z, {
                          path: r.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          component: C
                      }),
                      (0, o.jsx)(i.l_, {
                          path: r.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', E.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED),
                          to: r.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', E.ApplicationDirectoryProfileSections.STORE)
                      }),
                      (0, o.jsx)(_.Z, {
                          path: r.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section?'),
                          component: A
                      })
                  ]
              })
        : null;
}
