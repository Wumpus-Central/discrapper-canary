n.d(t, { k: () => f }), n(321073);
var l = n(64700),
    i = n(179771),
    a = n(311907),
    s = n(824552),
    r = n(155718),
    o = n(842209),
    c = n(361926),
    d = n(768879),
    u = n(546183);
n(47325);
var m = n(735991),
    p = n(360469),
    _ = n(73510);
let A = { commandTypes: [r.kc.CHAT, r.kc.PRIMARY_ENTRY_POINT] },
    h = { placeholderCount: 0, limit: _.Hi, includeFrecency: !0 };
function f(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: r, includeAuthorizedAppsAndFetch: f } = e,
        { sectionDescriptors: x, loading: C } = o.cu({ context: t, filters: A, options: h, allowFetch: r });
    return {
        loading: C,
        frecentApps: (function (e) {
            let { sectionDescriptors: t, context: n, onlyActivityApps: r, includeAuthorizedAppsAndFetch: o } = e,
                A = (0, a.bG)([u.default], () => u.default.getFetchState());
            l.useEffect(() => {
                o && A === u.FetchState.NOT_FETCHED && s.A.fetch();
            }, [o, A]);
            let h = (0, a.yK)([u.default], () =>
                    o ? u.default.getNewestTokens().filter((e) => e.scopes.includes(i.F.APPLICATIONS_COMMANDS)) : [],
                ),
                f = t.filter((e) => e.id !== _.Ik.FRECENCY && e.id !== _.Ik.BUILT_IN),
                x = "contextless" === n.type,
                C = l.useMemo(() => {
                    let e = [];
                    return x && e.push(p.gq), e;
                }, [x]),
                N = (0, d.I)(f, h);
            return l.useMemo(
                () =>
                    r
                        ? N.filter(
                              (e) => null != e.application && (0, m.Ag)(e.application) && null != (0, c.eI)(n, e.id),
                          ).filter((e) => !C.includes(e.id))
                        : N.filter((e) => !C.includes(e.id)),
                [r, N, n, C],
            );
        })({ sectionDescriptors: x, context: t, onlyActivityApps: n, includeAuthorizedAppsAndFetch: f }),
    };
}
