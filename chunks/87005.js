n.d(t, { f: () => y }), n(388685), n(539854);
var r = n(73800),
    i = n(243814),
    l = n(442837),
    o = n(384275),
    s = n(911969),
    a = n(10718),
    c = n(812236),
    u = n(148958),
    d = n(881998),
    h = n(424602);
n(445392);
var p = n(783097),
    f = n(701488),
    g = n(689079);
let m = {
        commandTypes: [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]
    },
    b = {
        placeholderCount: 0,
        limit: g.tn,
        includeFrecency: !0
    };
function y(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: s, includeAuthorizedAppsAndFetch: y } = e,
        { sectionDescriptors: _, loading: v } = a.wi({
            context: t,
            filters: m,
            options: b,
            allowFetch: s
        });
    return {
        loading: v,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: s, includeAuthorizedAppsAndFetch: a } = e,
                m = (0, l.e7)([d.Z], () => d.Z.getFetchState());
            r.useEffect(() => {
                a && m === d.M.NOT_FETCHED && o.Z.fetch();
            }, [a, m]);
            let b = (0, l.Wu)([d.Z], () => {
                    var e, t;
                    return a && null != (t = null == (e = d.Z.getApps()) ? void 0 : e.filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) ? t : [];
                }),
                y = t.filter((e) => e.id !== g.bi.FRECENCY && e.id !== g.bi.BUILT_IN),
                _ = 'channel' in n && (0, h.aZ)(n.channel, 'useAppLauncherFrecents.useFrecentApps()'),
                v = 'contextless' === n.type,
                O = r.useMemo(() => {
                    let e = [];
                    return v && e.push(f.jT), _ && e.push(h.gu), e;
                }, [_, v]),
                C = (0, u.h)(y, b);
            return r.useMemo(() => (s ? C.filter((e) => null != e.application && (0, p.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter((e) => !O.includes(e.id)) : C.filter((e) => !O.includes(e.id))), [s, C, n, O]);
        })({
            sectionDescriptors: _,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: y
        })
    };
}
