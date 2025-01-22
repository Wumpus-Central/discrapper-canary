t.d(n, {
    f: function () {
        return C;
    }
}),
    t(47120);
var i = t(192379),
    l = t(243814),
    a = t(442837),
    o = t(384275),
    r = t(911969),
    s = t(10718),
    c = t(812236),
    d = t(148958),
    u = t(881998);
t(445392);
var m = t(783097),
    p = t(689079);
let h = {
        commandTypes: [r.yU.CHAT, r.yU.PRIMARY_ENTRY_POINT]
    },
    f = {
        placeholderCount: 0,
        limit: p.tn,
        includeFrecency: !0
    };
function C(e) {
    let { channel: n, onlyActivityApps: t, allowCommandFetch: r, includeAuthorizedAppsAndFetch: C } = e,
        { sectionDescriptors: v, loading: _ } = s.wi({
            channel: n,
            filters: h,
            options: f,
            allowFetch: r
        });
    return {
        loading: _,
        frecentApps: (function (e) {
            let { sectionDescriptors: n, channel: t, onlyActivityApps: r, includeAuthorizedAppsAndFetch: s } = e,
                h = (0, a.e7)([u.Z], () => u.Z.getFetchState());
            i.useEffect(() => {
                s && h === u.M.NOT_FETCHED && o.Z.fetch();
            }, [s, h]);
            let f = (0, a.Wu)([u.Z], () => {
                    var e, n;
                    return s && null !== (n = null === (e = u.Z.getApps()) || void 0 === e ? void 0 : e.filter((e) => e.scopes.includes(l.x.APPLICATIONS_COMMANDS))) && void 0 !== n ? n : [];
                }),
                C = n.filter((e) => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN),
                v = (0, d.h)(C, f);
            return i.useMemo(() => (r ? v.filter((e) => null != e.application && (0, m.ye)(e.application) && null != (0, c.Xu)(t, e.id)) : v), [v, t, r]);
        })({
            sectionDescriptors: v,
            channel: n,
            onlyActivityApps: t,
            includeAuthorizedAppsAndFetch: C
        })
    };
}
