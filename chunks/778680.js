n.d(t, { Z: () => c });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(751586),
    s = n(388032),
    l = n(473846);
function c(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: c, controls: u } = e,
        d = (0, o.Ui)(),
        f = 0 === n.length || n.length === d.length,
        _ = i.useMemo(() => (f ? "all" : 1 === n.length ? n[0] : "all"), [n, f]),
        p = (e) => {
            null == c || c(e);
        };
    return (0, r.jsxs)("div", {
        className: l.container,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-xl/semibold",
                color: "header-primary",
                children: s.intl.string(s.t.BDUDam),
            }),
            (0, r.jsx)("div", {
                className: l.controlsBarContainer,
                children: u,
            }),
            (0, r.jsxs)(a.njP, {
                type: "top",
                look: "brand",
                selectedItem: _,
                onItemSelect: p,
                children: [
                    (0, r.jsx)(a.njP.Item, {
                        id: "all",
                        children: s.intl.string(s.t.Y9DnPT),
                    }),
                    d.map((e) =>
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
                className: l.contentArea,
                children: (0, r.jsx)("div", {
                    className: l.content,
                    children: t,
                }),
            }),
        ],
    });
}
