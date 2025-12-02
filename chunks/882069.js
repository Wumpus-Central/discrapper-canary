n.d(t, { b: () => a });
var r = n(473749),
    i = n(386239);
function a(e) {
    let [t, n] = (0, i.z)(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange),
        a = (0, r.useCallback)(() => {
            n(!0);
        }, [n]),
        o = (0, r.useCallback)(() => {
            n(!1);
        }, [n]),
        s = (0, r.useCallback)(() => {
            n(!t);
        }, [n, t]);
    return {
        isExpanded: t,
        setExpanded: n,
        expand: a,
        collapse: o,
        toggle: s,
    };
}
