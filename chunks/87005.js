n.d(t, { f: () => b }), n(388685), n(539854);
var r = n(73800),
    i = n(243814),
    l = n(442837),
    a = n(384275),
    o = n(911969),
    s = n(10718),
    c = n(812236),
    u = n(148958),
    d = n(881998);
n(445392);
var m = n(783097),
    p = n(701488),
    f = n(689079);
let h = {
        commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT]
    },
    g = {
        placeholderCount: 0,
        limit: f.tn,
        includeFrecency: !0
    };
function b(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: o, includeAuthorizedAppsAndFetch: b } = e,
        { sectionDescriptors: v, loading: _ } = s.wi({
            context: t,
            filters: h,
            options: g,
            allowFetch: o
        });
    return {
        loading: _,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: o, includeAuthorizedAppsAndFetch: s } = e,
                h = (0, l.e7)([d.Z], () => d.Z.getFetchState());
            r.useEffect(() => {
                s && h === d.M.NOT_FETCHED && a.Z.fetch();
            }, [s, h]);
            let g = (0, l.Wu)([d.Z], () => {
                    var e, t;
                    return s && null != (t = null == (e = d.Z.getApps()) ? void 0 : e.filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) ? t : [];
                }),
                b = t.filter((e) => e.id !== f.bi.FRECENCY && e.id !== f.bi.BUILT_IN),
                v = 'contextless' === n.type,
                _ = r.useMemo(() => {
                    let e = [];
                    return v && e.push(p.jT), e;
                }, [v]),
                C = (0, u.h)(b, g);
            return r.useMemo(() => (o ? C.filter((e) => null != e.application && (0, m.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter((e) => !_.includes(e.id)) : C.filter((e) => !_.includes(e.id))), [o, C, n, _]);
        })({
            sectionDescriptors: v,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: b
        })
    };
}
