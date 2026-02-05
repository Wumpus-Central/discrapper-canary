"use strict";
n.d(t, { k: () => g }), n(321073);
var r = n(64700),
    i = n(179771),
    a = n(311907),
    s = n(824552),
    o = n(155718),
    l = n(842209),
    u = n(361926),
    c = n(768879),
    d = n(546183);
n(47325);
var _ = n(735991),
    f = n(360469),
    p = n(73510);
let h = { commandTypes: [o.kc.CHAT, o.kc.PRIMARY_ENTRY_POINT] },
    m = { placeholderCount: 0, limit: p.Hi, includeFrecency: !0 };
function g(e) {
    let { context: t, onlyActivityApps: n, allowCommandFetch: r, includeAuthorizedAppsAndFetch: i } = e,
        { sectionDescriptors: a, loading: s } = l.cu({ context: t, filters: h, options: m, allowFetch: r });
    return {
        loading: s,
        frecentApps: E({ sectionDescriptors: a, context: t, onlyActivityApps: n, includeAuthorizedAppsAndFetch: i }),
    };
}
function E(e) {
    let { sectionDescriptors: t, context: n, onlyActivityApps: o, includeAuthorizedAppsAndFetch: l } = e,
        h = (0, a.bG)([d.default], () => d.default.getFetchState());
    r.useEffect(() => {
        l && h === d.FetchState.NOT_FETCHED && s.A.fetch();
    }, [l, h]);
    let m = (0, a.yK)([d.default], () =>
            l ? d.default.getNewestTokens().filter((e) => e.scopes.includes(i.F.APPLICATIONS_COMMANDS)) : [],
        ),
        g = t.filter((e) => e.id !== p.Ik.FRECENCY && e.id !== p.Ik.BUILT_IN),
        E = "contextless" === n.type,
        A = r.useMemo(() => {
            let e = [];
            return E && e.push(f.gq), e;
        }, [E]),
        I = (0, c.I)(g, m);
    return r.useMemo(
        () =>
            o
                ? I.filter(
                      (e) => null != e.application && (0, _.Ag)(e.application) && null != (0, u.eI)(n, e.id),
                  ).filter((e) => !A.includes(e.id))
                : I.filter((e) => !A.includes(e.id)),
        [o, I, n, A],
    );
}
