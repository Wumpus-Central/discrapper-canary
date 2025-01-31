n.d(t, { f: () => x }), n(47120);
var i = n(192379),
    l = n(243814),
    a = n(442837),
    o = n(384275),
    s = n(911969),
    r = n(10718),
    c = n(812236),
    d = n(148958),
    u = n(881998);
n(445392);
var m = n(783097),
    p = n(689079);
let h = {
        commandTypes: [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]
    },
    v = {
        placeholderCount: 0,
        limit: p.tn,
        includeFrecency: !0
    };
function x(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: s, includeAuthorizedAppsAndFetch: x } = e,
        { sectionDescriptors: f, loading: N } = r.wi({
            context: t,
            filters: h,
            options: v,
            allowFetch: s
        });
    return {
        loading: N,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: s, includeAuthorizedAppsAndFetch: r } = e,
                h = (0, a.e7)([u.Z], () => u.Z.getFetchState());
            i.useEffect(() => {
                r && h === u.M.NOT_FETCHED && o.Z.fetch();
            }, [r, h]);
            let v = (0, a.Wu)([u.Z], () => {
                    var e, t;
                    return r && null !== (t = null === (e = u.Z.getApps()) || void 0 === e ? void 0 : e.filter((e) => e.scopes.includes(l.x.APPLICATIONS_COMMANDS))) && void 0 !== t ? t : [];
                }),
                x = t.filter((e) => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN),
                f = (0, d.h)(x, v);
            return i.useMemo(() => (s ? f.filter((e) => null != e.application && (0, m.ye)(e.application) && null != (0, c.Xu)(n, e.id)) : f), [f, n, s]);
        })({
            sectionDescriptors: f,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: x
        })
    };
}
