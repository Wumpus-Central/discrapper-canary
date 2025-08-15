n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(843611),
    a = n(442837),
    o = n(353926),
    s = n(314897),
    l = n(981631);
let c = (e) => {
        let { hasLoadedExperiments: t, token: n } = e;
        return null != n
            ? (0, r.jsx)(i.l_, { to: l.Z5c.APP })
            : t
              ? (0, r.jsx)(i.l_, { to: l.Z5c.DEFAULT_LOGGED_OUT })
              : null;
    },
    u = a.ZP.connectStores([o.Z, s.default], () => {
        let e = s.default.getToken();
        return {
            token: e,
            hasLoadedExperiments: null != e || o.Z.hasLoadedExperiments,
        };
    })(c);
