n.d(t, { A: () => l });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(244242);
function l(e) {
    let { node: t } = e,
        {
            setValue: n,
            getInitialValue: l,
            minValue: o,
            maxValue: c,
            useDefaultValue: d,
            useTitle: u,
            useSubtitle: _,
            useHintText: m,
            useDisabled: A,
            onValueRender: g,
            asValueChanges: E,
            markers: h,
            onMarkerRender: p,
            stickToMarkers: C,
            fieldLayout: x,
        } = t,
        [T] = s.useState(() => l()),
        I = u(),
        S = _?.(),
        f = m?.(),
        N = A?.(),
        b = d?.();
    return (0, i.jsxs)(a.L, {
        children: [
            (0, i.jsx)(r.Apm, {
                label: I,
                description: S,
                disabled: N,
                initialValue: T,
                minValue: o,
                maxValue: c,
                defaultValue: b,
                onValueRender: g,
                asValueChanges: E,
                onValueChange: n,
                orientation: "horizontal",
                markers: h,
                onMarkerRender: p,
                stickToMarkers: C,
                layout: x,
            }),
            null != f && (0, i.jsx)(r.Text, { variant: "text-xs/normal", color: "text-muted", children: f }),
        ],
    });
}
