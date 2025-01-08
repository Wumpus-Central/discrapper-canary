n.r(t),
    n.d(t, {
        default: function () {
            return I;
        }
    });
var i = n(200651),
    r = n(192379),
    l = n(512969),
    a = n(608787),
    s = n(442837),
    o = n(765717),
    c = n(353926),
    d = n(926061),
    u = n(215256),
    h = n(8991),
    m = n(314897),
    p = n(272242),
    g = n(981631);
let f = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('73503'), n.e('6380'), n.e('72181'), n.e('56630'), n.e('66711'), n.e('86282'), n.e('65840'), n.e('21628'), n.e('18101'), n.e('24207'), n.e('77803'), n.e('9005'), n.e('64676'), n.e('28958'), n.e('6618')]).then(n.bind(n, 753450)),
            webpackId: 753450
        })
    ),
    _ = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('6380'), n.e('56630'), n.e('65840'), n.e('18101'), n.e('24207'), n.e('9005'), n.e('28958'), n.e('43704')]).then(n.bind(n, 74438)),
            webpackId: 74438
        })
    ),
    E = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('6380'), n.e('56630'), n.e('65840'), n.e('18101'), n.e('24207'), n.e('28958'), n.e('64121')]).then(n.bind(n, 675869)),
            webpackId: 675869
        })
    );
function I() {
    let e = (0, s.e7)([c.Z], () => c.Z.hasLoadedExperiments),
        t = (0, s.e7)([m.default], () => m.default.isAuthenticated()),
        n = (0, d.YP)({ location: 'ApplicationDirectoryRoutes' }) && e,
        a = (0, u.M)({ location: 'ApplicationDirectoryRoutes' }) && e;
    r.useEffect(() => {
        e && !t && u.f.trackExposure({ location: 'ApplicationDirectoryRoutes' });
    }, [t, e]);
    let I = (t && n) || (!t && a);
    return e
        ? I
            ? (0, i.jsx)(l.AW, {
                  path: g.Z5c.APPLICATION_DIRECTORY,
                  component: h.E
              })
            : (0, i.jsxs)(l.rs, {
                  children: [
                      (0, i.jsx)(o.Z, {
                          path: g.Z5c.APPLICATION_DIRECTORY,
                          exact: !0,
                          component: _
                      }),
                      (0, i.jsx)(o.Z, {
                          path: g.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          component: E
                      }),
                      (0, i.jsx)(l.l_, {
                          path: g.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', p.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED),
                          to: g.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', p.ApplicationDirectoryProfileSections.STORE)
                      }),
                      (0, i.jsx)(o.Z, {
                          path: g.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section?'),
                          component: f
                      })
                  ]
              })
        : null;
}
