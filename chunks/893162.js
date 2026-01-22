n.d(t, {
    R: () => c,
}),
    n(321073),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(351906),
    s = n(822382),
    o = n(652215);

function l(e) {
    let t = (0, i.bG)([a.A], () => a.A.hidePersonalInformation);
    return r.useMemo(() => {
        let n = (0, s.Wg)(e),
            r = [];
        return (
            t || (r.push(o.LWr.FILTER_FROM), r.push(o.LWr.FILTER_MENTIONS)),
            r.push(o.LWr.FILTER_HAS),
            n && r.push(o.LWr.FILTER_IN),
            r.push(o.LWr.FILTER_ON),
            r.push(o.LWr.FILTER_BEFORE),
            r.push(o.LWr.FILTER_AFTER),
            r.push(o.LWr.FILTER_PINNED),
            r.push(o.LWr.FILTER_AUTHOR_TYPE),
            r
        );
    }, [t, e]);
}

function c(e) {
    let t = l(e);
    return r.useMemo(() => new Set(t), [t]);
}
