n.d(t, { Z: () => u });
var i = n(951288);
n(647438);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(314734),
    s = n(388032),
    c = n(515188);
function u(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: l } = e,
        u = (e) => {
            n(e), l();
        };
    return (0, i.jsx)("div", {
        className: r()(o.Jh, c.container),
        children: (0, i.jsx)(a.v2r, {
            navId: "command-list-sort",
            "aria-label": s.intl.string(s.t.Ugo9ud),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, i.jsxs)(a.kSQ, {
                label: s.intl.string(s.t.yeYaHf),
                children: [
                    (0, i.jsx)(a.k5B, {
                        id: "sort-by-popular",
                        group: "sort-by",
                        label: s.intl.string(s.t.SzxiqK),
                        action: () => u(o.bS.POPULAR),
                        checked: t === o.bS.POPULAR,
                    }),
                    (0, i.jsx)(a.k5B, {
                        id: "sort-by-alphabetical",
                        group: "sort-by",
                        label: s.intl.string(s.t.m8xsti),
                        action: () => u(o.bS.ALPHABETICAL),
                        checked: t === o.bS.ALPHABETICAL,
                    }),
                ],
            }),
        }),
    });
}
