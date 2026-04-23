n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(265872),
    s = n(821609),
    r = n(112173),
    o = n(726293),
    c = n(60809),
    d = n(985018);
function u(e) {
    let t,
        { sortOrder: n, onSortOptionClick: u } = e,
        m = l.useRef(null);
    switch (n) {
        case c.Ug.POPULAR:
            t = d.intl.string(d.t.SzxiqK);
            break;
        case c.Ug.ALPHABETICAL:
            t = d.intl.string(d.t.m8xsti);
    }
    return (0, i.jsx)(a.Y, {
        targetElementRef: m,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o.A, { sortOrder: n, onSortOptionClick: u, closePopout: t });
        },
        position: "bottom",
        align: "left",
        children: (e) =>
            (0, i.jsx)(s.$, {
                ...e,
                buttonRef: m,
                size: "sm",
                variant: "secondary",
                "aria-label": d.intl.string(d.t.yeYaHf),
                icon: r.J,
                text: t,
            }),
    });
}
