n.d(t, { f: () => b }), n(388685), n(539854);
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
    h = n(701488),
    f = n(689079);
let m = {
        commandTypes: [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]
    },
    g = {
        placeholderCount: 0,
        limit: f.tn,
        includeFrecency: !0
    };
function b(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: s, includeAuthorizedAppsAndFetch: b } = e,
        { sectionDescriptors: E, loading: C } = a.wi({
            context: t,
            filters: m,
            options: g,
            allowFetch: s
        });
    return {
        loading: C,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: s, includeAuthorizedAppsAndFetch: a } = e,
                m = (0, o.e7)([d.Z], () => d.Z.getFetchState());
            r.useEffect(() => {
                a && m === d.M.NOT_FETCHED && l.Z.fetch();
            }, [a, m]);
            let g = (0, o.Wu)([d.Z], () => {
                    var e, t;
                    return a && null != (t = null == (e = d.Z.getApps()) ? void 0 : e.filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) ? t : [];
                }),
                b = t.filter((e) => e.id !== f.bi.FRECENCY && e.id !== f.bi.BUILT_IN),
                E = 'channel' in n && (0, p.aZ)(n.channel, 'useAppLauncherFrecents.useFrecentApps()'),
                C = 'contextless' === n.type,
                O = r.useMemo(() => {
                    let e = [];
                    return C && e.push(h.jT), E && e.push(p.gu), e;
                }, [E, C]),
                y = (0, u.h)(b, g);
            return r.useMemo(() => (s ? y.filter((e) => null != e.application && (0, _.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter((e) => !O.includes(e.id)) : y.filter((e) => !O.includes(e.id))), [s, y, n, O]);
        })({
            sectionDescriptors: E,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: b
        })
    };
}
