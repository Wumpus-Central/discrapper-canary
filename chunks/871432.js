a.r(n), a.d(n, { default: () => u });
var t = a(627968),
    r = a(64700),
    l = a(311907),
    i = a(214947),
    o = a(73153),
    _ = a(189252),
    c = a(994500),
    d = a(726079),
    s = a(985018);
function u() {
    let e = (0, l.bG)([c.A], () => c.A.getPendingCount() > 0);
    return (
        r.useEffect(() => {
            o.h.dispatch({ type: "FRIENDS_LIST_POPOUT_MOUNTED" });
        }, []),
        (0, t.jsx)(d.l, {
            popoutPosition: "bottom",
            popoutAlign: "left",
            children: (n, a, r, l) =>
                (0, t.jsx)(_.A, {
                    ...r,
                    ref: l,
                    onClick: n,
                    icon: i.$,
                    tooltip: s.intl.string(s.t.TdEu5X),
                    showBadge: e,
                    selected: a,
                }),
        })
    );
}
