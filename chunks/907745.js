l.r(t), l.d(t, { Search: () => _, default: () => G });
var n = l(477900),
    r = l(582128),
    s = l(64015),
    a = l.n(s),
    u = l(17928),
    c = l(192308),
    i = l(775602),
    d = l(138298),
    o = l(761640),
    A = l(734057),
    h = l(71393),
    f = l(309010),
    S = l(256796),
    g = l(517381),
    p = l(822382),
    b = l(408730),
    y = l(616252),
    C = l(753806),
    E = l(775427),
    M = l(145331),
    m = l(742788),
    k = l(921242),
    x = l(652215),
    O = l(375708);
let I = a()(C.A.fetchMessages, 500);
function _(e) {
    let { searchContext: t, className: l } = e,
        s = (0, p.bS)(t),
        a = (0, u.bG)([i.Ay], () => i.Ay.keyboardModeEnabled);
    r.useEffect(() => {
        S.A.initializeAutocomplete(t);
    }, [t]),
        r.useEffect(
            () => (
                d.A.setSelectedSearchContext(s),
                () => {
                    d.A.setSelectedSearchContext(null);
                }
            ),
            [s],
        );
    let { isSearching: C, hasResults: E } = (0, u.cf)([g.A], () => {
            let e = g.A.getTotalCount(s);
            return { hasResults: null != e && e > 0, isSearching: g.A.getIsFetching(s) };
        }),
        _ = (0, u.bG)([o.Ay, f.Ay, A.A], () => {
            let e = f.Ay.getCurrentlySelectedChannelId(),
                t = A.A.getChannel(e);
            return o.Ay.getSection(e, t?.isDM()) === x.YvQ.SEARCH;
        });
    r.useEffect(() => {
        b.A.setSidebarOpen(t, _);
    }, [t, _]);
    let G = (0, c.useHasModalOpen)(k.b);
    r.useEffect(() => {
        b.A.setFiltersModalOpen(t, G);
    }, [t, G]);
    let Q = r.useCallback(
            (e) => {
                let { queryString: l, query: n, searchEverywhere: r, searchQuerySource: s } = e;
                b.A.refreshQueryId(t),
                    (0, M.fd)({ searchContext: t, query: n, queryString: l, searchQuerySource: s }),
                    y.A.updateSearchMode(t, x.BBH.NEWEST),
                    I({ searchContext: t, searchQueryString: l, searchEverywhere: r, offset: 0 });
            },
            [t],
        ),
        R = (0, u.bG)([h.A, A.A], () => {
            let e = (0, p._B)(t) ? t.guildId : null;
            if (null != e) {
                let t = h.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let l = (0, p._b)(t);
            if (null != l) {
                let e = A.A.getChannel(l);
                return null == e ? null : (0, p.E3)(e);
            }
            return null;
        }),
        B = r.useMemo(
            () =>
                t.type === x.I4_.DMS
                    ? O.intl.string(O.t.m7OrlR)
                    : null != R
                      ? O.intl.formatToPlainString(O.t.LDZtFO, { name: R })
                      : O.intl.string(O.t["5h0QOP"]),
            [t.type, R],
        );
    return (0, n.jsx)(m.A, {
        className: l,
        searchContext: t,
        isSearching: C,
        hasResults: E,
        keyboardModeEnabled: a,
        onSearch: Q,
        placeholder: B,
    });
}
function G(e) {
    let { className: t, guildId: l, channelId: r } = e,
        s = (0, E.J)({ guildId: l, channelId: r });
    return null == s ? null : (0, n.jsx)(_, { className: t, searchContext: s });
}
