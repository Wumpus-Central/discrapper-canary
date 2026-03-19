r.d(t, { A: () => s }), r(321073);
var n = r(64700);
function s(e) {
    let { autocompletes: t, mode: r } = e;
    return n.useCallback(
        (e) => {
            let { getAutocompleteRowItem: n, getAutocompleteGroupItem: s } = e,
                l = 0,
                a = [],
                i = [];
            for (let e of t) {
                let t = [],
                    { group: o, results: c } = e;
                if (e.results.length > 0) {
                    for (let e of c) {
                        let s = n({ result: e, modeType: r.type, group: o });
                        t.push(s);
                    }
                    l += c.length;
                    let e = s({ group: o, rows: t });
                    a.push(e), i.push(...t);
                }
            }
            return { autocompleteCount: l, autocompleteGroups: a, allAutocompleteRows: i };
        },
        [t, r.type],
    );
}
