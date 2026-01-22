i.d(e, {
    g: () => a,
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    u = i(780964);
let a = (0, s.zD)(u.X.KEEP_POPOUTS_OPEN, {
    useTitle: () => "Keep Popouts Open",
    useSubtitle: () =>
        "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
    useValue: () => (0, n.bG)([r.default], () => r.default.preventPopoutClose),
    setValue: (t) =>
        (0, l.x)({
            preventPopoutClose: t,
        }),
});
