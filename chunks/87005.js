n.d(t, { f: () => v }), n(388685), n(539854);
var r = n(73800),
    i = n(243814),
    a = n(442837),
    o = n(384275),
    l = n(911969),
    s = n(10718),
    c = n(812236),
    d = n(148958),
    u = n(881998),
    _ = n(424602);
n(445392);
var m = n(783097),
    f = n(701488),
    p = n(689079);
let g = {
        commandTypes: [l.yU.CHAT, l.yU.PRIMARY_ENTRY_POINT]
    },
    h = {
        placeholderCount: 0,
        limit: p.tn,
        includeFrecency: !0
    };
function v(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: l, includeAuthorizedAppsAndFetch: v } = e,
        { sectionDescriptors: b, loading: y } = s.wi({
            context: t,
            filters: g,
            options: h,
            allowFetch: l
        });
    return {
        loading: y,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: l, includeAuthorizedAppsAndFetch: s } = e,
                g = (0, a.e7)([u.Z], () => u.Z.getFetchState());
            r.useEffect(() => {
                s && g === u.M.NOT_FETCHED && o.Z.fetch();
            }, [s, g]);
            let h = (0, a.Wu)([u.Z], () => {
                    var e, t;
                    return s && null != (t = null == (e = u.Z.getApps()) ? void 0 : e.filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) ? t : [];
                }),
                v = t.filter((e) => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN),
                b = 'channel' in n && (0, _.aZ)(n.channel, 'useAppLauncherFrecents.useFrecentApps()'),
                y = 'contextless' === n.type,
                j = r.useMemo(() => {
                    let e = [];
                    return y && e.push(f.jT), b && e.push(_.gu), e;
                }, [b, y]),
                x = (0, d.h)(v, h);
            return r.useMemo(() => (l ? x.filter((e) => null != e.application && (0, m.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter((e) => !j.includes(e.id)) : x.filter((e) => !j.includes(e.id))), [l, x, n, j]);
        })({
            sectionDescriptors: b,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: v
        })
    };
}
