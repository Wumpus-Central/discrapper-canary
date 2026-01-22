n.d(t, {
    A: () => i,
});
var r = n(64700);

function i(e) {
    let t = null == e ? void 0 : e.getBoundingClientRect(),
        n = null == t ? void 0 : t.left,
        i = null == t ? void 0 : t.top;
    return (0, r.useMemo)(
        () =>
            null != n && null != i
                ? {
                      x: n,
                      y: i,
                  }
                : null,
        [n, i],
    );
}
