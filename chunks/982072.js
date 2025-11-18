n.d(t, { Z: () => l }), n(388685);
var r = n(473749),
    i = n(907331),
    a = n(931847);
function l(e) {
    let { widget: t, onAction: n } = e,
        [l, o] = (0, r.useState)(!1),
        c = (0, r.useCallback)(
            (e) => {
                e &&
                    (n({
                        action: "VIEW_WIDGET",
                        widgetType: t.type,
                        applicationId: t instanceof a.q ? t.applicationId : void 0,
                    }),
                    o(!0));
            },
            [n, t],
        );
    return (0, i.O)(c, void 0, !l);
}
