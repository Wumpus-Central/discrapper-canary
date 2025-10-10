r.d(t, { Z: () => a }), r(388685);
var n = r(647438),
    i = r(907331);
function a(e) {
    let { widgetType: t, onAction: r } = e,
        [a, o] = (0, n.useState)(!1),
        l = (0, n.useCallback)(
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
    return (0, i.O)(l, void 0, !a);
}
