r.d(t, { Z: () => l }), r(388685);
var n = r(647438),
    i = r(434650);
function l(e) {
    let { widgetType: t, onAction: r } = e,
        [l, o] = (0, n.useState)(!1),
        a = (0, n.useCallback)(
            (e) => {
                e &&
                    (r({
                        action: "VIEW_WIDGET",
                        widgetType: t,
                    }),
                    o(!0));
            },
            [r, t],
        );
    return (0, i.O)(a, void 0, !l);
}
