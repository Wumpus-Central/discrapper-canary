n.d(t, { b: () => i });
var r = n(473749),
    l = n(386239);
function i(e) {
    let [t, n] = (0, l.z)(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange),
        i = (0, r.useCallback)(() => {
            n(!0);
        }, [n]),
        o = (0, r.useCallback)(() => {
            n(!1);
        }, [n]),
        a = (0, r.useCallback)(() => {
            n(!t);
        }, [n, t]);
    return {
        isExpanded: t,
        setExpanded: n,
        expand: i,
        collapse: o,
        toggle: a,
    };
}
