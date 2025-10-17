n.d(t, { Z: () => a }), n(388685);
var r = n(647438),
    i = n(907331);
function a(e) {
    let { widgetType: t, onAction: n } = e,
        [a, l] = (0, r.useState)(!1),
        o = (0, r.useCallback)(
            (e) => {
                e &&
                    (n({
                        action: "VIEW_WIDGET",
                        widgetType: t,
                    }),
                    l(!0));
            },
            [n, t],
        );
    return (0, i.O)(o, void 0, !a);
}
