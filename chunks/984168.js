n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(314734),
    l = n(388032),
    c = n(728384);
function u(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: i } = e,
        u = (e) => {
            n(e), i();
        };
    return (0, r.jsx)("div", {
        className: a()(s.Jh, c.container),
        children: (0, r.jsx)(o.v2r, {
            navId: "command-list-sort",
            "aria-label": l.intl.string(l.t.Ugo9ud),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, r.jsxs)(o.kSQ, {
                label: l.intl.string(l.t.yeYaHf),
                children: [
                    (0, r.jsx)(o.k5B, {
                        id: "sort-by-popular",
                        group: "sort-by",
                        label: l.intl.string(l.t.SzxiqK),
                        action: () => u(s.bS.POPULAR),
                        checked: t === s.bS.POPULAR,
                    }),
                    (0, r.jsx)(o.k5B, {
                        id: "sort-by-alphabetical",
                        group: "sort-by",
                        label: l.intl.string(l.t.m8xsti),
                        action: () => u(s.bS.ALPHABETICAL),
                        checked: t === s.bS.ALPHABETICAL,
                    }),
                ],
            }),
        }),
    });
}
