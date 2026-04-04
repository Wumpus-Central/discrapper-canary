n.d(t, { V: () => o });
var i = n(311907),
    s = n(926919),
    l = n(419954),
    a = n(111162),
    r = n(780964);
let o = (0, l.zD)(r.X.LAYOUT_DEBUGGING, {
    useTitle: () => "Enable Layout Debugging",
    useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
    useValue: () => (0, i.bG)([a.default], () => a.default.layoutDebuggingEnabled),
    setValue: (e) => {
        (0, s.x)({ layoutDebuggingEnabled: e });
    },
});
