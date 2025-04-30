n.d(t, { Z: () => d }), n(539854);
var r = n(255367);
n(73800);
var i = n(998698),
    a = n(588468),
    o = n(877565),
    s = n(590921),
    l = n(388032);
let c = { results: { commandOptions: [] } };
function u(e) {
    return ''.concat(e.displayName, ':');
}
let d = {
    stores: [i.Z],
    focusMode: s.QZ.AUTO_WHEN_FILTERED,
    matches: (e, t, n, r, a) => !(r || null == i.Z.getActiveCommand(e.id) || null != i.Z.getActiveOption(e.id)),
    queryResults(e, t, n, r, a) {
        let o = i.Z.getActiveCommand(e.id);
        if ((null == o ? void 0 : o.options) == null) return c;
        let s = i.Z.getOptionStates(e.id),
            l = o.options.filter((e) => {
                var t;
                return e.displayName.startsWith(n) && !(null == (t = s[e.name]) ? void 0 : t.hasValue);
            });
        return 0 === l.length ? c : { results: { commandOptions: l } };
    },
    renderResults(e) {
        let {
                results: { commandOptions: t },
                selectedIndex: n,
                query: i,
                onHover: s,
                onClick: c
            } = e,
            u = [],
            d = [];
        t.forEach((e) => {
            (e.required ? u : d).push(e);
        });
        let f =
                u.length > 0
                    ? (0, o.HI)({
                          query: i,
                          selectedIndex: n,
                          autocompletes: u,
                          onHover: s,
                          onClick: c,
                          titleWithQuery: l.t['iO/jnJ'],
                          titleWithoutQuery: l.intl.string(l.t['7II2Gx']),
                          Component: a.ZP.Generic,
                          getProps: (e, t) => ({
                              key: t.toString(),
                              text: e.displayName,
                              description: e.displayDescription
                          }),
                          getQuery: (e) => e,
                          key: 'required-options'
                      })
                    : null,
            _ =
                d.length > 0
                    ? (0, o.HI)({
                          query: i,
                          selectedIndex: n,
                          autocompletes: d,
                          onHover: s,
                          onClick: c,
                          titleWithQuery: l.t.pg0anJ,
                          titleWithoutQuery: u.length > 0 ? l.intl.string(l.t.TpDXm5) : l.intl.string(l.t['+1H47u']),
                          Component: a.ZP.Generic,
                          getProps: (e, t) => ({
                              key: t.toString(),
                              text: e.displayName,
                              description: e.displayDescription
                          }),
                          getQuery: (e) => e,
                          key: 'optional-options',
                          indexOffset: u.length
                      })
                    : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [f, _]
        });
    },
    onSelect(e) {
        let {
                results: { commandOptions: t },
                index: n,
                options: r
            } = e,
            i = t[n];
        return r.insertText(u(i)), { type: s.z2.COMMAND_OPTION };
    }
};
