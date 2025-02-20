n.d(t, { f: () => v }), n(47120);
var i = n(192379),
    l = n(243814),
    r = n(442837),
    o = n(384275),
    a = n(911969),
    s = n(10718),
    c = n(812236),
    u = n(148958),
    d = n(881998);
n(445392);
var m = n(783097),
    p = n(689079);
let h = {
        commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
    },
    f = {
        placeholderCount: 0,
        limit: p.tn,
        includeFrecency: !0
    };
function v(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: a, includeAuthorizedAppsAndFetch: v } = e,
        { sectionDescriptors: N, loading: x } = s.wi({
            context: t,
            filters: h,
            options: f,
            allowFetch: a
        });
    return {
        loading: x,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: a, includeAuthorizedAppsAndFetch: s } = e,
                h = (0, r.e7)([d.Z], () => d.Z.getFetchState());
            i.useEffect(() => {
                s && h === d.M.NOT_FETCHED && o.Z.fetch();
            }, [s, h]);
            let f = (0, r.Wu)([d.Z], () => {
                    var e, t;
                    return s && null !== (t = null === (e = d.Z.getApps()) || void 0 === e ? void 0 : e.filter((e) => e.scopes.includes(l.x.APPLICATIONS_COMMANDS))) && void 0 !== t ? t : [];
                }),
                v = t.filter((e) => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN),
                N = (0, u.h)(v, f);
            return i.useMemo(() => (a ? N.filter((e) => null != e.application && (0, m.ye)(e.application) && null != (0, c.Xu)(n, e.id)) : N), [N, n, a]);
        })({
            sectionDescriptors: N,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: v
        })
    };
}
