n.d(t, {
    h: () => s,
    r: () => a,
}),
    n(388685),
    n(415506);
var r = n(524437),
    i = n(960048),
    o = n(874893),
    a = (function (e) {
        return (
            (e.BACKGROUND_GRADIENT_PRESET = "backgroundGradientPreset"),
            (e.STANDARD_BACKGROUND_THEME = "standardBackgroundTheme"),
            (e.CUSTOM_BACKGROUND_GRADIENT = "customBackgroundGradient"),
            e
        );
    })({});
let s = (e) => {
    let t = Object.entries(o.yW).find((t) => {
        let [n, r] = t;
        return r === e;
    });
    return void 0 === t
        ? (i.Z.captureException(Error("No ProtoTheme found for base theme: ".concat(e))), r.Q2.UNSET)
        : parseInt(t[0]);
};
