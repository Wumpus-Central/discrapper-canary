var i = r(653041);
var a = r(200651);
r(192379);
var o = r(998698),
    s = r(588468),
    l = r(877565),
    u = r(590921),
    c = r(388032);
let d = { results: { commandOptions: [] } },
    f = {
        stores: [o.Z],
        focusMode: u.QZ.AUTO_WHEN_FILTERED,
        matches: (e, n, r, i, a) => !(i || null == o.Z.getActiveCommand(e.id) || null != o.Z.getActiveOption(e.id)),
        queryResults(e, n, r, i, a) {
            let s = o.Z.getActiveCommand(e.id);
            if ((null == s ? void 0 : s.options) == null) return d;
            let l = o.Z.getOptionStates(e.id),
                u = s.options.filter((e) => {
                    var n;
                    return e.displayName.startsWith(r) && !(null === (n = l[e.name]) || void 0 === n ? void 0 : n.hasValue);
                });
            return 0 === u.length ? d : { results: { commandOptions: u } };
        },
        renderResults(e) {
            let {
                    results: { commandOptions: n },
                    selectedIndex: r,
                    query: i,
                    onHover: o,
                    onClick: u
                } = e,
                d = [],
                f = [];
            n.forEach((e) => {
                (e.required ? d : f).push(e);
            });
            let p =
                    d.length > 0
                        ? (0, l.HI)({
                              query: i,
                              selectedIndex: r,
                              autocompletes: d,
                              onHover: o,
                              onClick: u,
                              titleWithQuery: c.t['iO/jnJ'],
                              titleWithoutQuery: c.intl.string(c.t['7II2Gx']),
                              Component: s.ZP.Generic,
                              getProps: (e, n) => ({
                                  key: n.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription
                              }),
                              getQuery: (e) => e,
                              key: 'required-options'
                          })
                        : null,
                h =
                    f.length > 0
                        ? (0, l.HI)({
                              query: i,
                              selectedIndex: r,
                              autocompletes: f,
                              onHover: o,
                              onClick: u,
                              titleWithQuery: c.t.pg0anJ,
                              titleWithoutQuery: d.length > 0 ? c.intl.string(c.t.TpDXm5) : c.intl.string(c.t['+1H47u']),
                              Component: s.ZP.Generic,
                              getProps: (e, n) => ({
                                  key: n.toString(),
                                  text: e.displayName,
                                  description: e.displayDescription
                              }),
                              getQuery: (e) => e,
                              key: 'optional-options',
                              indexOffset: d.length
                          })
                        : null;
            return (0, a.jsxs)(a.Fragment, {
                children: [p, h]
            });
        },
        onSelect(e) {
            let {
                    results: { commandOptions: n },
                    index: r,
                    options: i
                } = e,
                a = n[r];
            return i.insertText(p(a)), { type: u.z2.COMMAND_OPTION };
        }
    };
function p(e) {
    return ''.concat(e.displayName, ':');
}
n.Z = f;
