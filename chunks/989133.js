n.d(r, {
    A: () => t,
});

function t(e, r) {
    if (e.score === r.score) {
        var n, t, l, o, a, i;
        let s =
                null != (n = null != (t = e.sortable) ? t : null == (a = e.comparator) ? void 0 : a.toLocaleLowerCase())
                    ? n
                    : "",
            c =
                null != (l = null != (o = e.sortable) ? o : null == (i = r.comparator) ? void 0 : i.toLocaleLowerCase())
                    ? l
                    : "";
        if (s < c) return -1;
        if (s > c) return 1;
    }
    return r.score - e.score;
}
