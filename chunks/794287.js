i.d(e, { g: () => u });
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.KEEP_POPOUTS_OPEN, {
    useTitle: () => "Keep Popouts Open",
    useSubtitle: () =>
        "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
    useValue: () => (0, n.bG)([r.default], () => r.default.preventPopoutClose),
    setValue: (t) => (0, l.x)({ preventPopoutClose: t }),
});
