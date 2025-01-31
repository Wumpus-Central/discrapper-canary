n.d(t, { Z: () => d }), n(653041);
var i = n(200651);
n(192379);
var r = n(998698),
    a = n(588468),
    s = n(877565),
    o = n(590921),
    l = n(388032);
let u = { results: { commandOptions: [] } };
function c(e) {
    return ''.concat(e.displayName, ':');
}
let d = {
    stores: [r.Z],
    focusMode: o.QZ.AUTO_WHEN_FILTERED,
    matches: (e, t, n, i, a) => !(i || null == r.Z.getActiveCommand(e.id) || null != r.Z.getActiveOption(e.id)),
    queryResults(e, t, n, i, a) {
        let s = r.Z.getActiveCommand(e.id);
        if ((null == s ? void 0 : s.options) == null) return u;
        let o = r.Z.getOptionStates(e.id),
            l = s.options.filter((e) => {
                var t;
                return e.displayName.startsWith(n) && !(null === (t = o[e.name]) || void 0 === t ? void 0 : t.hasValue);
            });
        return 0 === l.length ? u : { results: { commandOptions: l } };
    },
    renderResults(e) {
        let {
                results: { commandOptions: t },
                selectedIndex: n,
                query: r,
                onHover: o,
                onClick: u
            } = e,
            c = [],
            d = [];
        t.forEach((e) => {
            (e.required ? c : d).push(e);
        });
        let f =
                c.length > 0
                    ? (0, s.HI)({
                          query: r,
                          selectedIndex: n,
                          autocompletes: c,
                          onHover: o,
                          onClick: u,
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
                    ? (0, s.HI)({
                          query: r,
                          selectedIndex: n,
                          autocompletes: d,
                          onHover: o,
                          onClick: u,
                          titleWithQuery: l.t.pg0anJ,
                          titleWithoutQuery: c.length > 0 ? l.intl.string(l.t.TpDXm5) : l.intl.string(l.t['+1H47u']),
                          Component: a.ZP.Generic,
                          getProps: (e, t) => ({
                              key: t.toString(),
                              text: e.displayName,
                              description: e.displayDescription
                          }),
                          getQuery: (e) => e,
                          key: 'optional-options',
                          indexOffset: c.length
                      })
                    : null;
        return (0, i.jsxs)(i.Fragment, {
            children: [f, _]
        });
    },
    onSelect(e) {
        let {
                results: { commandOptions: t },
                index: n,
                options: i
            } = e,
            r = t[n];
        return i.insertText(c(r)), { type: o.z2.COMMAND_OPTION };
    }
};
