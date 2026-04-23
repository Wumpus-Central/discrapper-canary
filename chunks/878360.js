n.d(t, { A: () => f });
var l = n(627968);
n(64700);
var r = n(735438),
    i = n.n(r),
    s = n(537652),
    o = n(155718),
    u = n(166862),
    a = n(861382),
    m = n(545152),
    c = n(580424),
    d = n(248465),
    p = n(634788),
    y = n(374803),
    A = n(73510),
    h = n(985018),
    g = n(2717),
    M = n(911385);
let I = { results: { choices: [] } },
    N = { results: { choices: [], isLoading: !0 } },
    E = Array.from({ length: 5 }, () => ({ name: "", displayName: "", value: "" })),
    S = { results: { choices: [], isError: !0 } },
    C = i().debounce(m.A, A.$r, { leading: !0, trailing: !0 }),
    f = {
        stores: [a.A, u.A],
        showEmpty: !0,
        matches(e, t, n, l, r) {
            let i = a.A.getActiveOption(e.id);
            return (
                r.commands !== y.Ze.DISABLED &&
                null != i &&
                (i.type === o.n4.BOOLEAN || !!i?.autocomplete || (i?.choices != null && i.choices.length > 0))
            );
        },
        queryResults(e, t, n, l, r) {
            let i = a.A.getActiveOption(e.id);
            if (null == i) return I;
            if (i.autocomplete) {
                if (
                    (r &&
                        C({
                            command: a.A.getActiveCommand(e.id),
                            optionValues: l.getCommandOptionValues(),
                            context: { channel: e, guild: t, autocomplete: { name: i.name, query: n } },
                        }),
                    u.A.getLastErrored(e.id))
                )
                    return S;
                let s = u.A.getAutocompleteChoices(e.id, i.name, n);
                return null == s ? N : { results: { choices: s } };
            }
            return {
                results: d.Ay.queryChoiceResults({
                    query: n,
                    choices: i.type === o.n4.BOOLEAN ? A.Ss : (i.choices ?? []),
                }),
            };
        },
        renderResults(e) {
            let {
                results: { choices: t, isLoading: n, isError: r },
                selectedIndex: i,
                query: o,
                onHover: u,
                onClick: a,
            } = e;
            return r
                ? (0, l.jsx)(s.A, { message: h.intl.string(h.t.rTAbPn), noResultsImageURL: M, className: g.k })
                : 0 !== t.length || n
                  ? (0, p.GM)({
                        query: o,
                        selectedIndex: i,
                        autocompletes: n ? E : t,
                        onHover: u,
                        onClick: a,
                        titleWithQuery: h.t.pg0anB,
                        titleWithoutQuery: h.intl.string(h.t["+1H47t"]),
                        Component: n ? c.Ay.Loading : c.Ay.Generic,
                        getProps: (e, t) => ({ key: t.toString(), text: e.displayName }),
                        getQuery: (e) => e,
                        key: "choice",
                    })
                  : (0, l.jsx)(s.A, { message: h.intl.string(h.t["41014u"]), noResultsImageURL: M, className: g.k });
        },
        onSelect(e) {
            let {
                    results: { choices: t },
                    index: n,
                    options: l,
                } = e,
                r = t[n];
            return l.insertText(r.displayName), { type: y.kc.CHOICE };
        },
    };
