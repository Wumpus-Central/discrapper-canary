n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(512969),
    a = n(442837),
    s = n(353926),
    o = n(314897),
    l = n(981631);
let u = (e) => {
        let { hasLoadedExperiments: t, token: n } = e;
        return null != n ? (0, i.jsx)(r.l_, { to: l.Z5c.APP }) : t ? (0, i.jsx)(r.l_, { to: l.Z5c.DEFAULT_LOGGED_OUT }) : null;
    },
    c = a.ZP.connectStores([s.Z, o.default], () => {
        let e = o.default.getToken();
        return {
            token: e,
            hasLoadedExperiments: null != e || s.Z.hasLoadedExperiments
        };
    })(u);
