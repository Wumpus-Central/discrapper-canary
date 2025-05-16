n.d(t, { f: () => v }), n(388685), n(539854);
var r = n(73800),
    i = n(243814),
    a = n(442837),
    o = n(384275),
    l = n(911969),
    s = n(10718),
    c = n(812236),
    d = n(148958),
    u = n(881998);
n(445392);
var _ = n(783097),
    m = n(701488),
    f = n(689079);
let p = {
        commandTypes: [l.yU.CHAT, l.yU.PRIMARY_ENTRY_POINT]
    },
    g = {
        placeholderCount: 0,
        limit: f.tn,
        includeFrecency: !0
    };
function v(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: l, includeAuthorizedAppsAndFetch: v } = e,
        { sectionDescriptors: h, loading: b } = s.wi({
            context: t,
            filters: p,
            options: g,
            allowFetch: l
        });
    return {
        loading: b,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: l, includeAuthorizedAppsAndFetch: s } = e,
                p = (0, a.e7)([u.Z], () => u.Z.getFetchState());
            r.useEffect(() => {
                s && p === u.M.NOT_FETCHED && o.Z.fetch();
            }, [s, p]);
            let g = (0, a.Wu)([u.Z], () => {
                    var e, t;
                    return s && null != (t = null == (e = u.Z.getApps()) ? void 0 : e.filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) ? t : [];
                }),
                v = t.filter((e) => e.id !== f.bi.FRECENCY && e.id !== f.bi.BUILT_IN),
                h = 'contextless' === n.type,
                b = r.useMemo(() => {
                    let e = [];
                    return h && e.push(m.jT), e;
                }, [h]),
                y = (0, d.h)(v, g);
            return r.useMemo(() => (l ? y.filter((e) => null != e.application && (0, _.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter((e) => !b.includes(e.id)) : y.filter((e) => !b.includes(e.id))), [l, y, n, b]);
        })({
            sectionDescriptors: h,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: v
        })
    };
}
