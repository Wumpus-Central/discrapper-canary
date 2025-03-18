n.d(t, { f: () => m }), n(47120);
var r = n(192379),
    i = n(243814),
    o = n(442837),
    l = n(384275),
    a = n(911969),
    s = n(10718),
    c = n(812236),
    u = n(148958),
    d = n(881998),
    _ = n(424602);
n(445392);
var p = n(783097),
    E = n(689079);
let f = {
        commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
    },
    h = {
        placeholderCount: 0,
        limit: E.tn,
        includeFrecency: !0
    };
function m(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: a, includeAuthorizedAppsAndFetch: m } = e,
        { sectionDescriptors: b, loading: O } = s.wi({
            context: t,
            filters: f,
            options: h,
            allowFetch: a
        });
    return {
        loading: O,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: a, includeAuthorizedAppsAndFetch: s } = e,
                f = (0, o.e7)([d.Z], () => d.Z.getFetchState());
            r.useEffect(() => {
                s && f === d.M.NOT_FETCHED && l.Z.fetch();
            }, [s, f]);
            let h = (0, o.Wu)([d.Z], () => {
                    var e, t;
                    return s && null !== (t = null === (e = d.Z.getApps()) || void 0 === e ? void 0 : e.filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) && void 0 !== t ? t : [];
                }),
                m = t.filter((e) => e.id !== E.bi.FRECENCY && e.id !== E.bi.BUILT_IN),
                b = 'channel' in n && (0, _.aZ)(n.channel, 'useAppLauncherFrecents.useFrecentApps()'),
                O = (0, u.h)(m, h);
            return r.useMemo(() => (a ? O.filter((e) => null != e.application && (0, p.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter((e) => !b || e.id !== _.gu) : O.filter((e) => !b || e.id !== _.gu)), [a, O, b, n]);
        })({
            sectionDescriptors: b,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: m
        })
    };
}
