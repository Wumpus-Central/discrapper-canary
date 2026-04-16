"use strict";
n.d(t, { A: () => N });
var r = n(627968);
n(64700);
var i = n(735438),
    s = n.n(i),
    a = n(537652),
    o = n(155718),
    l = n(166862),
    u = n(861382),
    c = n(545152),
    d = n(580424),
    _ = n(248465),
    f = n(634788),
    p = n(374803),
    h = n(73510),
    m = n(985018),
    E = n(2717),
    g = n(911385);
let A = { results: { choices: [] } },
    I = { results: { choices: [], isLoading: !0 } },
    T = Array.from({ length: 5 }, () => ({ name: "", displayName: "", value: "" })),
    S = { results: { choices: [], isError: !0 } },
    y = s().debounce(c.A, h.$r, { leading: !0, trailing: !0 });
function v(e) {
    return e.displayName;
}
let N = {
    stores: [u.A, l.A],
    showEmpty: !0,
    matches(e, t, n, r, i) {
        let s = u.A.getActiveOption(e.id);
        return (
            i.commands !== p.Ze.DISABLED &&
            null != s &&
            (s.type === o.n4.BOOLEAN || !!s?.autocomplete || (s?.choices != null && s.choices.length > 0))
        );
    },
    queryResults(e, t, n, r, i) {
        let s = u.A.getActiveOption(e.id);
        if (null == s) return A;
        if (s.autocomplete) {
            if (
                (i &&
                    y({
                        command: u.A.getActiveCommand(e.id),
                        optionValues: r.getCommandOptionValues(),
                        context: { channel: e, guild: t, autocomplete: { name: s.name, query: n } },
                    }),
                l.A.getLastErrored(e.id))
            )
                return S;
            let a = l.A.getAutocompleteChoices(e.id, s.name, n);
            return null == a ? I : { results: { choices: a } };
        }
        return {
            results: _.Ay.queryChoiceResults({ query: n, choices: s.type === o.n4.BOOLEAN ? h.Ss : (s.choices ?? []) }),
        };
    },
    renderResults(e) {
        let {
            results: { choices: t, isLoading: n, isError: i },
            selectedIndex: s,
            query: o,
            onHover: l,
            onClick: u,
        } = e;
        return i
            ? (0, r.jsx)(a.A, { message: m.intl.string(m.t.rTAbPn), noResultsImageURL: g, className: E.k })
            : 0 !== t.length || n
              ? (0, f.GM)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: n ? T : t,
                    onHover: l,
                    onClick: u,
                    titleWithQuery: m.t.pg0anB,
                    titleWithoutQuery: m.intl.string(m.t["+1H47t"]),
                    Component: n ? d.Ay.Loading : d.Ay.Generic,
                    getProps: (e, t) => ({ key: t.toString(), text: e.displayName }),
                    getQuery: (e) => e,
                    key: "choice",
                })
              : (0, r.jsx)(a.A, { message: m.intl.string(m.t["41014u"]), noResultsImageURL: g, className: E.k });
    },
    onSelect(e) {
        let {
                results: { choices: t },
                index: n,
                options: r,
            } = e,
            i = t[n];
        return r.insertText(v(i)), { type: p.kc.CHOICE };
    },
};
