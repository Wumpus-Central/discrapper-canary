var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(481060),
    u = r(835473),
    c = r(91896),
    d = r(823379),
    f = r(475413),
    p = r(254197),
    h = r(981631),
    _ = r(388032);
function m(e) {
    switch (e.length) {
        case 0:
            return;
        case 1:
            return e[0].name;
        case 2:
            return _.intl.formatToPlainString(_.t['G/lpQU'], {
                item1: e[0].name,
                item2: e[1].name
            });
        default:
            let n = e
                    .slice(0, -1)
                    .map((e) => {
                        let { name: n } = e;
                        return n;
                    })
                    .join(', '),
                r = e[e.length - 1];
            return _.intl.formatToPlainString(_.t.PIMwen, {
                items: n,
                last: r.name
            });
    }
}
let g = [];
function E(e) {
    let { userId: n, shouldShowTooltip: r } = e,
        i = (0, s.Wu)([c.Z], () => c.Z.getGameFriendsForUser(n)),
        [_, E] = o.useState(!1),
        v = o.useCallback(() => E(!0), []),
        y = o.useMemo(
            () =>
                _
                    ? i.map((e) => {
                          let { applicationId: n } = e;
                          return n;
                      })
                    : g,
            [_, i]
        ),
        b = (0, u.Z)(y, _),
        I = o.useMemo(() => b.filter(d.lm), [b]),
        T = o.useMemo(() => m(I), [I]);
    return (0, a.jsx)(f.oY, {
        tooltipText: (0, a.jsx)(p.k, { applications: I }),
        tooltipPosition: 'left',
        tooltipAlign: 'top',
        ariaLabel: T,
        shouldShowTooltip: r,
        icon: l.UserPlatformIcon,
        onMouseEnter: v,
        onClick: h.dG4
    });
}
n.Z = E;
