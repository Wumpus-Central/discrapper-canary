r.d(n, {
    d: function () {
        return o;
    }
});
var i = r(192379),
    a = r(239700);
function o(e) {
    let [n, r] = (0, a.zk)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
        o = (0, i.useCallback)(() => {
            r(!0);
        }, [r]),
        s = (0, i.useCallback)(() => {
            r(!1);
        }, [r]),
        l = (0, i.useCallback)(() => {
            r(!n);
        }, [r, n]);
    return {
        isOpen: n,
        setOpen: r,
        open: o,
        close: s,
        toggle: l
    };
}
