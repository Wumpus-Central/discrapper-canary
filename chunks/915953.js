n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(791498),
    r = n(244242);
function o(e) {
    let { node: t } = e,
        {
            setValue: n,
            getInitialValue: o,
            minValue: c,
            maxValue: d,
            useDefaultValue: u,
            useTitle: _,
            useSubtitle: m,
            useHintText: A,
            useDisabled: g,
            useExternalValue: h,
            onValueRender: x,
            asValueChanges: p,
            markers: E,
            onMarkerRender: C,
            stickToMarkers: T,
            fieldLayout: S,
        } = t,
        [I] = s.useState(() => o()),
        f = h?.(),
        N = _(),
        b = m?.(),
        j = A?.(),
        v = g?.(),
        O = u?.(),
        R = (0, l.q)(t);
    return (0, i.jsxs)(r.L, {
        children: [
            (0, i.jsx)(a.Apm, {
                label: N,
                description: b,
                disabled: v,
                initialValue: I,
                value: f,
                minValue: c,
                maxValue: d,
                defaultValue: O,
                onValueRender: x,
                asValueChanges: p,
                onValueChange: (e) => {
                    R(), n?.(e);
                },
                orientation: "horizontal",
                markers: E,
                onMarkerRender: C,
                stickToMarkers: T,
                layout: S,
            }),
            null != j && (0, i.jsx)(a.Text, { variant: "text-xs/normal", color: "text-muted", children: j }),
        ],
    });
}
