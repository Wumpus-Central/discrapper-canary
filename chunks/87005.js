n.d(t, { f: () => g }), n(388685), n(539854);
var r = n(647438),
    i = n(243814),
    a = n(442837),
    o = n(384275),
    s = n(911969),
    l = n(10718),
    c = n(812236),
    u = n(148958),
    d = n(881998);
n(445392);
var f = n(783097),
    _ = n(701488),
    p = n(689079);
let h = {
        commandTypes: [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT],
    },
    m = {
        placeholderCount: 0,
        limit: p.tn,
        includeFrecency: !0,
    };
function g(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: r, includeAuthorizedAppsAndFetch: i } = e,
        { sectionDescriptors: a, loading: o } = l.wi({
            context: t,
            filters: h,
            options: m,
            allowFetch: r,
        });
    return {
        loading: o,
        frecentApps: E({
            sectionDescriptors: a,
            context: t,
            onlyActivityApps: n,
            includeAuthorizedAppsAndFetch: i,
        }),
    };
}
function E(e) {
    let { sectionDescriptors: t, context: n, onlyActivityApps: s, includeAuthorizedAppsAndFetch: l } = e,
        h = (0, a.e7)([d.default], () => d.default.getFetchState());
    r.useEffect(() => {
        l && h === d.FetchState.NOT_FETCHED && o.Z.fetch();
    }, [l, h]);
    let m = (0, a.Wu)([d.default], () =>
            l ? d.default.getNewestTokens().filter((e) => e.scopes.includes(i.x.APPLICATIONS_COMMANDS)) : [],
        ),
        g = t.filter((e) => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN),
        E = "contextless" === n.type,
        b = r.useMemo(() => {
            let e = [];
            return E && e.push(_.jT), e;
        }, [E]),
        y = (0, u.h)(g, m);
    return r.useMemo(
        () =>
            s
                ? y
                      .filter((e) => null != e.application && (0, f.ye)(e.application) && null != (0, c.Xu)(n, e.id))
                      .filter((e) => !b.includes(e.id))
                : y.filter((e) => !b.includes(e.id)),
        [s, y, n, b],
    );
}
