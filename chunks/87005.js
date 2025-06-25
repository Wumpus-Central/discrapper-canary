n.d(t, { f: () => C }), n(388685), n(539854);
var r = n(73800),
    i = n(243814),
    l = n(442837),
    a = n(384275),
    s = n(911969),
    o = n(10718),
    c = n(812236),
    d = n(148958),
    u = n(881998);
n(445392);
var m = n(783097),
    p = n(701488),
    f = n(689079);
let h = {
        commandTypes: [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]
    },
    g = {
        placeholderCount: 0,
        limit: f.tn,
        includeFrecency: !0
    };
function C(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: s, includeAuthorizedAppsAndFetch: C } = e,
        { sectionDescriptors: _, loading: b } = o.wi({
            context: t,
            filters: h,
            options: g,
            allowFetch: s
        });
    return {
        loading: b,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: s, includeAuthorizedAppsAndFetch: o } = e,
                h = (0, l.e7)([u.Z], () => u.Z.getFetchState());
            r.useEffect(() => {
                o && h === u.M.NOT_FETCHED && a.Z.fetch();
            }, [o, h]);
            let g = (0, l.Wu)([u.Z], () => {
                    var e, t;
                    return o && null != (t = null == (e = u.Z.getApps()) ? void 0 : e.filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) ? t : [];
                }),
                C = t.filter((e) => e.id !== f.bi.FRECENCY && e.id !== f.bi.BUILT_IN),
                _ = 'contextless' === n.type,
                b = r.useMemo(() => {
                    let e = [];
                    return _ && e.push(p.jT), e;
                }, [_]),
                v = (0, d.h)(C, g);
            return r.useMemo(() => (s ? v.filter((e) => null != e.application && (0, m.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter((e) => !b.includes(e.id)) : v.filter((e) => !b.includes(e.id))), [s, v, n, b]);
        })({
            sectionDescriptors: _,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: C
        })
    };
}
