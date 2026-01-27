r.d(t, {
    R: () => o,
}),
    r(321073),
    r(896048);
var n = r(64700),
    l = r(311907),
    s = r(351906),
    a = r(822382),
    i = r(652215);

function o(e) {
    let t,
        r =
            ((t = (0, l.bG)([s.A], () => s.A.hidePersonalInformation)),
            n.useMemo(() => {
                let r = (0, a.Wg)(e),
                    n = [];
                return (
                    t || (n.push(i.LWr.FILTER_FROM), n.push(i.LWr.FILTER_MENTIONS)),
                    n.push(i.LWr.FILTER_HAS),
                    r && n.push(i.LWr.FILTER_IN),
                    n.push(i.LWr.FILTER_ON),
                    n.push(i.LWr.FILTER_BEFORE),
                    n.push(i.LWr.FILTER_AFTER),
                    n.push(i.LWr.FILTER_PINNED),
                    n.push(i.LWr.FILTER_AUTHOR_TYPE),
                    n
                );
            }, [t, e]));
    return n.useMemo(() => new Set(r), [r]);
}
