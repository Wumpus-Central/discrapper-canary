n.d(t, { Z: () => c });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(751586),
    o = n(388032),
    s = n(473846);
function c(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: c, controls: u } = e,
        d = (0, a.Ui)(),
        p = 0 === n.length || n.length === d.length,
        f = i.useMemo(() => (p ? "all" : 1 === n.length ? n[0] : "all"), [n, p]);
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "header-primary",
                children: o.intl.string(o.t.BDUDam),
            }),
            (0, r.jsx)("div", {
                className: s.controlsBarContainer,
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
                        children: o.intl.string(o.t.Y9DnPT),
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
                className: s.contentArea,
                children: (0, r.jsx)("div", {
                    className: s.content,
                    children: t,
                }),
            }),
        ],
    });
}
