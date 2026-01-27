function r(e, t) {
    if (e.score === t.score) {
        var n, r, i, a, o, s;
        let l =
                null != (n = null != (r = e.sortable) ? r : null == (o = e.comparator) ? void 0 : o.toLocaleLowerCase())
                    ? n
                    : "",
            c =
                null != (i = null != (a = e.sortable) ? a : null == (s = t.comparator) ? void 0 : s.toLocaleLowerCase())
                    ? i
                    : "";
        if (l < c) return -1;
        if (l > c) return 1;
    }
    return t.score - e.score;
}
n.d(t, {
    A: () => r,
});
