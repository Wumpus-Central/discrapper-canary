n.d(t, { Z: () => l });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(751586),
    s = n(473846);
function l(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: l, controls: c } = e,
        u = 0 === n.length || n.length === o.Tl.length,
        d = i.useMemo(() => (u ? "all" : 1 === n.length ? n[0] : "all"), [n, u]),
        f = (e) => {
            null == l || l(e);
        };
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-xl/semibold",
                color: "header-primary",
                children: "Quest Preview Tool",
            }),
            (0, r.jsx)("div", {
                className: s.controlsBarContainer,
                children: c,
            }),
            (0, r.jsxs)(a.njP, {
                type: "top",
                look: "brand",
                selectedItem: d,
                onItemSelect: f,
                children: [
                    (0, r.jsx)(a.njP.Item, {
                        id: "all",
                        children: "All Sections",
                    }),
                    o.Tl.map((e) =>
                        (0, r.jsx)(
                            a.njP.Item,
                            {
                                id: e.value,
                                children: e.label,
                            },
                            e.value,
                        ),
                    ),
                ],
            }),
            (0, r.jsx)("div", {
                className: s.contentArea,
                children: (0, r.jsx)("div", {
                    className: s.content,
                    children: t,
                }),
            }),
        ],
    });
}
