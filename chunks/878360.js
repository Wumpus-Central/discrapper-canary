"use strict";
n.d(t, { A: () => C });
var r = n(627968);
n(64700);
var i = n(735438),
    a = n.n(i),
    s = n(537652),
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
    g = n(570330),
    E = n(911385);
let A = { results: { choices: [] } },
    I = { results: { choices: [], isLoading: !0 } },
    T = Array.from({ length: 5 }, () => ({ name: "", displayName: "", value: "" })),
    y = { results: { choices: [], isError: !0 } },
    S = a().debounce(c.A, h.$r, { leading: !0, trailing: !0 });
function v(e) {
    return e.displayName;
}
let C = {
    stores: [u.A, l.A],
    showEmpty: !0,
    matches(e, t, n, r, i) {
        let a = u.A.getActiveOption(e.id);
        return (
            i.commands !== p.Ze.DISABLED &&
            null != a &&
            (a.type === o.n4.BOOLEAN || !!a?.autocomplete || (a?.choices != null && a.choices.length > 0))
        );
    },
    queryResults(e, t, n, r, i) {
        let a = u.A.getActiveOption(e.id);
        if (null == a) return A;
        if (a.autocomplete) {
            if (
                (i &&
                    S({
                        command: u.A.getActiveCommand(e.id),
                        optionValues: r.getCommandOptionValues(),
                        context: { channel: e, guild: t, autocomplete: { name: a.name, query: n } },
                    }),
                l.A.getLastErrored(e.id))
            )
                return y;
            let s = l.A.getAutocompleteChoices(e.id, a.name, n);
            return null == s ? I : { results: { choices: s } };
        }
        return {
            results: _.Ay.queryChoiceResults({ query: n, choices: a.type === o.n4.BOOLEAN ? h.Ss : (a.choices ?? []) }),
        };
    },
    renderResults(e) {
        let {
            results: { choices: t, isLoading: n, isError: i },
            selectedIndex: a,
            query: o,
            onHover: l,
            onClick: u,
        } = e;
        return i
            ? (0, r.jsx)(s.A, { message: m.intl.string(m.t.rTAbPn), noResultsImageURL: E, className: g.k })
            : 0 !== t.length || n
              ? (0, f.GM)({
                    query: o,
                    selectedIndex: a,
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
              : (0, r.jsx)(s.A, { message: m.intl.string(m.t["41014u"]), noResultsImageURL: E, className: g.k });
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
