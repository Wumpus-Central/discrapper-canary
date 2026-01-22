n.d(t, { A: () => i }), n(321073), n(896048);
var r = n(64700);
function i(e) {
    let { autocompletes: t, mode: n } = e;
    return r.useCallback(
        (e) => {
            let { filterFn: r, getAutocompleteRowItem: i, getAutocompleteGroupItem: a } = e,
                s = 0,
                o = [],
                l = [];
            for (let e of t) {
                let t = [],
                    { group: c, results: u } = e;
                if (r(e)) {
                    for (let e of u) {
                        let r = i({
                            result: e,
                            modeType: n.type,
                            group: c,
                        });
                        t.push(r);
                    }
                    s += u.length;
                    let e = a({
                        group: c,
                        rows: t,
                    });
                    o.push(e), l.push(...t);
                }
            }
            return {
                autocompleteCount: s,
                autocompleteGroups: o,
                allAutocompleteRows: l,
            };
        },
        [t, n.type],
    );
}
