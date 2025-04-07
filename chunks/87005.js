n.d(t, { f: () => g }), n(388685);
var r = n(192379),
    i = n(243814),
    o = n(442837),
    l = n(384275),
    s = n(911969),
    a = n(10718),
    c = n(812236),
    u = n(148958),
    d = n(881998),
    _ = n(424602);
n(445392);
var p = n(783097),
    h = n(689079);
let f = {
        commandTypes: [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]
    },
    m = {
        placeholderCount: 0,
        limit: h.tn,
        includeFrecency: !0
    };
function g(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: s, includeAuthorizedAppsAndFetch: g } = e,
        { sectionDescriptors: b, loading: E } = a.wi({
            context: t,
            filters: f,
            options: m,
            allowFetch: s
        });
    return {
        loading: E,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: s, includeAuthorizedAppsAndFetch: a } = e,
                f = (0, o.e7)([d.Z], () => d.Z.getFetchState());
            r.useEffect(() => {
                a && f === d.M.NOT_FETCHED && l.Z.fetch();
            }, [a, f]);
            let m = (0, o.Wu)([d.Z], () => {
                    var e, t;
                    return a && null != (t = null == (e = d.Z.getApps()) ? void 0 : e.filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) ? t : [];
                }),
                g = t.filter((e) => e.id !== h.bi.FRECENCY && e.id !== h.bi.BUILT_IN),
                b = 'channel' in n && (0, _.aZ)(n.channel, 'useAppLauncherFrecents.useFrecentApps()'),
                E = (0, u.h)(g, m);
            return r.useMemo(() => (s ? E.filter((e) => null != e.application && (0, p.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter((e) => !b || e.id !== _.gu) : E.filter((e) => !b || e.id !== _.gu)), [s, E, b, n]);
        })({
            sectionDescriptors: b,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: g
        })
    };
}
