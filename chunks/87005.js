n.d(t, { f: () => b }), n(47120);
var r = n(192379),
    i = n(243814),
    o = n(442837),
    l = n(384275),
    s = n(911969),
    a = n(10718),
    c = n(812236),
    u = n(148958),
    d = n(881998),
    p = n(424602);
n(445392);
var _ = n(783097),
    f = n(689079);
let h = {
        commandTypes: [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]
    },
    m = {
        placeholderCount: 0,
        limit: f.tn,
        includeFrecency: !0
    };
function b(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: s, includeAuthorizedAppsAndFetch: b } = e,
        { sectionDescriptors: g, loading: E } = a.wi({
            context: t,
            filters: h,
            options: m,
            allowFetch: s
        });
    return {
        loading: E,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: s, includeAuthorizedAppsAndFetch: a } = e,
                h = (0, o.e7)([d.Z], () => d.Z.getFetchState());
            r.useEffect(() => {
                a && h === d.M.NOT_FETCHED && l.Z.fetch();
            }, [a, h]);
            let m = (0, o.Wu)([d.Z], () => {
                    var e, t;
                    return a && null != (t = null == (e = d.Z.getApps()) ? void 0 : e.filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) ? t : [];
                }),
                b = t.filter((e) => e.id !== f.bi.FRECENCY && e.id !== f.bi.BUILT_IN),
                g = 'channel' in n && (0, p.aZ)(n.channel, 'useAppLauncherFrecents.useFrecentApps()'),
                E = (0, u.h)(b, m);
            return r.useMemo(() => (s ? E.filter((e) => null != e.application && (0, _.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter((e) => !g || e.id !== p.gu) : E.filter((e) => !g || e.id !== p.gu)), [s, E, g, n]);
        })({
            sectionDescriptors: g,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: b
        })
    };
}
