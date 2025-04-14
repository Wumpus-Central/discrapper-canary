n.d(t, { f: () => g }), n(388685), n(539854);
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
var h = n(783097),
    f = n(701488),
    _ = n(689079);
let m = {
        commandTypes: [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]
    },
    b = {
        placeholderCount: 0,
        limit: _.tn,
        includeFrecency: !0
    };
function g(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: s, includeAuthorizedAppsAndFetch: g } = e,
        { sectionDescriptors: E, loading: O } = a.wi({
            context: t,
            filters: m,
            options: b,
            allowFetch: s
        });
    return {
        loading: O,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: s, includeAuthorizedAppsAndFetch: a } = e,
                m = (0, o.e7)([d.Z], () => d.Z.getFetchState());
            r.useEffect(() => {
                a && m === d.M.NOT_FETCHED && l.Z.fetch();
            }, [a, m]);
            let b = (0, o.Wu)([d.Z], () => {
                    var e, t;
                    return a && null != (t = null == (e = d.Z.getApps()) ? void 0 : e.filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) ? t : [];
                }),
                g = t.filter((e) => e.id !== _.bi.FRECENCY && e.id !== _.bi.BUILT_IN),
                E = 'channel' in n && (0, p.aZ)(n.channel, 'useAppLauncherFrecents.useFrecentApps()'),
                O = 'contextless' === n.type,
                y = r.useMemo(() => {
                    let e = [];
                    return O && e.push(f.jT), E && e.push(p.gu), e;
                }, [E, O]),
                C = (0, u.h)(g, b);
            return r.useMemo(() => (s ? C.filter((e) => null != e.application && (0, h.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter((e) => !y.includes(e.id)) : C.filter((e) => !y.includes(e.id))), [s, C, n, y]);
        })({
            sectionDescriptors: E,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: g
        })
    };
}
