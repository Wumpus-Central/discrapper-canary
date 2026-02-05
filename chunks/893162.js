r.d(t, { R: () => o }), r(321073);
var s = r(64700),
    n = r(311907),
    l = r(351906),
    a = r(822382),
    i = r(652215);
function o(e) {
    let t,
        r =
            ((t = (0, n.bG)([l.A], () => l.A.hidePersonalInformation)),
            s.useMemo(() => {
                let r = (0, a.Wg)(e),
                    s = [];
                return (
                    t || (s.push(i.LWr.FILTER_FROM), s.push(i.LWr.FILTER_MENTIONS)),
                    s.push(i.LWr.FILTER_HAS),
                    r && s.push(i.LWr.FILTER_IN),
                    s.push(i.LWr.FILTER_ON),
                    s.push(i.LWr.FILTER_BEFORE),
                    s.push(i.LWr.FILTER_AFTER),
                    s.push(i.LWr.FILTER_PINNED),
                    s.push(i.LWr.FILTER_AUTHOR_TYPE),
                    s
                );
            }, [t, e]));
    return s.useMemo(() => new Set(r), [r]);
}
