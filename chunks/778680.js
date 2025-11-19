n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(751586),
    s = n(388032),
    o = n(473846);
function c(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: c, controls: u } = e,
        d = (0, a.Ui)(),
        p = 0 === n.length || n.length === d.length,
        f = i.useMemo(() => (p ? "all" : 1 === n.length ? n[0] : "all"), [n, p]);
    return (0, r.jsxs)("div", {
        className: o.container,
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "header-primary",
                children: s.intl.string(s.t.BDUDau),
            }),
            (0, r.jsx)("div", {
                className: o.controlsBarContainer,
                children: u,
            }),
            (0, r.jsxs)(l.njP, {
                type: "top",
                look: "brand",
                selectedItem: f,
                onItemSelect: (e) => {
                    null == c || c(e);
                },
                children: [
                    (0, r.jsx)(l.njP.Item, {
                        id: "all",
                        children: s.intl.string(s.t.Y9DnPa),
                    }),
                    d.map((e) =>
                        (0, r.jsx)(
                            l.njP.Item,
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
                className: o.contentArea,
                children: (0, r.jsx)("div", {
                    className: o.content,
                    children: t,
                }),
            }),
        ],
    });
}
