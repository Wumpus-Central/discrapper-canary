n.d(t, { A: () => o }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(244242);
function o(e) {
    let { node: t } = e,
        {
            setValue: n,
            getInitialValue: o,
            minValue: l,
            maxValue: c,
            useDefaultValue: u,
            useTitle: d,
            useSubtitle: f,
            useHintText: p,
            useDisabled: _,
            onValueRender: h,
            asValueChanges: m,
            markers: g,
            onMarkerRender: E,
            stickToMarkers: b,
            fieldLayout: y,
        } = t,
        [O] = i.useState(() => o()),
        A = d(),
        v = null == f ? void 0 : f(),
        S = null == p ? void 0 : p(),
        I = null == _ ? void 0 : _(),
        T = null == u ? void 0 : u();
    return (0, r.jsxs)(s.L, {
        children: [
            (0, r.jsx)(a.Apm, {
                label: A,
                description: v,
                disabled: I,
                initialValue: O,
                minValue: l,
                maxValue: c,
                defaultValue: T,
                onValueRender: h,
                asValueChanges: m,
                onValueChange: n,
                orientation: "horizontal",
                markers: g,
                onMarkerRender: E,
                stickToMarkers: b,
                layout: y,
            }),
            null != S &&
                (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: S,
                }),
        ],
    });
}
