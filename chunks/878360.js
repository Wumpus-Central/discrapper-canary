n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(735438),
    a = n.n(i),
    s = n(537652),
    o = n(155718),
    l = n(166862),
    c = n(861382),
    u = n(545152),
    d = n(580424),
    f = n(248465),
    p = n(634788),
    _ = n(374803),
    h = n(73510),
    m = n(985018),
    g = n(570330),
    E = n(911385);
let b = { results: { choices: [] } },
    y = {
        results: {
            choices: [],
            isLoading: !0,
        },
    },
    O = Array.from({ length: 5 }, () => ({
        name: "",
        displayName: "",
        value: "",
    })),
    A = {
        results: {
            choices: [],
            isError: !0,
        },
    },
    v = a().debounce(u.A, h.$r, {
        leading: !0,
        trailing: !0,
    });
function S(e) {
    return e.displayName;
}
let I = {
    stores: [c.A, l.A],
    showEmpty: !0,
    matches(e, t, n, r, i) {
        let a = c.A.getActiveOption(e.id);
        return (
            i.commands !== _.Ze.DISABLED &&
            null != a &&
            (a.type === o.n4.BOOLEAN ||
                !!(null == a ? void 0 : a.autocomplete) ||
                ((null == a ? void 0 : a.choices) != null && a.choices.length > 0))
        );
    },
    queryResults(e, t, n, r, i) {
        var a;
        let s = c.A.getActiveOption(e.id);
        if (null == s) return b;
        if (s.autocomplete) {
            if (
                (i &&
                    v({
                        command: c.A.getActiveCommand(e.id),
                        optionValues: r.getCommandOptionValues(),
                        context: {
                            channel: e,
                            guild: t,
                            autocomplete: {
                                name: s.name,
                                query: n,
                            },
                        },
                    }),
                l.A.getLastErrored(e.id))
            )
                return A;
            let a = l.A.getAutocompleteChoices(e.id, s.name, n);
            return null == a ? y : { results: { choices: a } };
        }
        return {
            results: f.Ay.queryChoiceResults({
                query: n,
                choices: s.type === o.n4.BOOLEAN ? h.Ss : null != (a = s.choices) ? a : [],
            }),
        };
    },
    renderResults(e) {
        let {
            results: { choices: t, isLoading: n, isError: i },
            selectedIndex: a,
            query: o,
            onHover: l,
            onClick: c,
        } = e;
        return i
            ? (0, r.jsx)(s.A, {
                  message: m.intl.string(m.t.rTAbPn),
                  noResultsImageURL: E,
                  className: g.k,
              })
            : 0 !== t.length || n
              ? (0, p.GM)({
                    query: o,
                    selectedIndex: a,
                    autocompletes: n ? O : t,
                    onHover: l,
                    onClick: c,
                    titleWithQuery: m.t.pg0anB,
                    titleWithoutQuery: m.intl.string(m.t["+1H47t"]),
                    Component: n ? d.Ay.Loading : d.Ay.Generic,
                    getProps: (e, t) => ({
                        key: t.toString(),
                        text: e.displayName,
                    }),
                    getQuery: (e) => e,
                    key: "choice",
                })
              : (0, r.jsx)(s.A, {
                    message: m.intl.string(m.t["41014u"]),
                    noResultsImageURL: E,
                    className: g.k,
                });
    },
    onSelect(e) {
        let {
                results: { choices: t },
                index: n,
                options: r,
            } = e,
            i = t[n];
        return r.insertText(S(i)), { type: _.kc.CHOICE };
    },
};
