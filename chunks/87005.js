n.d(t, { f: () => y }), n(388685), n(539854);
var r = n(73800),
    o = n(243814),
    l = n(442837),
    i = n(384275),
    c = n(911969),
    a = n(10718),
    u = n(812236),
    s = n(148958),
    p = n(881998);
n(445392);
var d = n(783097),
    f = n(701488),
    O = n(689079);
let b = {
        commandTypes: [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]
    },
    m = {
        placeholderCount: 0,
        limit: O.tn,
        includeFrecency: !0
    };
function y(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: c, includeAuthorizedAppsAndFetch: y } = e,
        { sectionDescriptors: g, loading: j } = a.wi({
            context: t,
            filters: b,
            options: m,
            allowFetch: c
        });
    return {
        loading: j,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: c, includeAuthorizedAppsAndFetch: a } = e,
                b = (0, l.e7)([p.Z], () => p.Z.getFetchState());
            r.useEffect(() => {
                a && b === p.M.NOT_FETCHED && i.Z.fetch();
            }, [a, b]);
            let m = (0, l.Wu)([p.Z], () => {
                    var e, t;
                    return a && null != (t = null == (e = p.Z.getApps()) ? void 0 : e.filter((e) => e.scopes.includes(o.x.APPLICATIONS_COMMANDS))) ? t : [];
                }),
                y = t.filter((e) => e.id !== O.bi.FRECENCY && e.id !== O.bi.BUILT_IN),
                g = 'contextless' === n.type,
                j = r.useMemo(() => {
                    let e = [];
                    return g && e.push(f.jT), e;
                }, [g]),
                h = (0, s.h)(y, m);
            return r.useMemo(() => (c ? h.filter((e) => null != e.application && (0, d.ye)(e.application) && null != (0, u.Xu)(n, e.id)).filter((e) => !j.includes(e.id)) : h.filter((e) => !j.includes(e.id))), [c, h, n, j]);
        })({
            sectionDescriptors: g,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: y
        })
    };
}
