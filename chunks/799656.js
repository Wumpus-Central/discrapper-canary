n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(512969),
    o = n(442837),
    a = n(353926),
    s = n(314897),
    l = n(981631);
let c = (e) => {
        let { hasLoadedExperiments: t, token: n } = e;
        return null != n ? (0, r.jsx)(i.l_, { to: l.Z5c.APP }) : t ? (0, r.jsx)(i.l_, { to: l.Z5c.DEFAULT_LOGGED_OUT }) : null;
    },
    u = o.ZP.connectStores([a.Z, s.default], () => {
        let e = s.default.getToken();
        return {
            token: e,
            hasLoadedExperiments: null != e || a.Z.hasLoadedExperiments
        };
    })(c);
