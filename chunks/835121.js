r.d(t, { A: () => n }), r(321073);
var s = r(64700);
function n(e) {
    let { autocompletes: t, mode: r } = e;
    return s.useCallback(
        (e) => {
            let { filterFn: s, getAutocompleteRowItem: n, getAutocompleteGroupItem: l } = e,
                a = 0,
                i = [],
                o = [];
            for (let e of t) {
                let t = [],
                    { group: u, results: c } = e;
                if (s(e)) {
                    for (let e of c) {
                        let s = n({ result: e, modeType: r.type, group: u });
                        t.push(s);
                    }
                    a += c.length;
                    let e = l({ group: u, rows: t });
                    i.push(e), o.push(...t);
                }
            }
            return { autocompleteCount: a, autocompleteGroups: i, allAutocompleteRows: o };
        },
        [t, r.type],
    );
}
