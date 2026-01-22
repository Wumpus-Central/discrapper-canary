n.d(t, { A: () => o });
var r = n(827734),
    i = n(775602),
    a = n(353835),
    s = n(723702);
function o(e) {
    if (!__OVERLAY__ && s.isPlatformEmbedded)
        try {
            let t = r.A.colors.BACKGROUND_BASE_LOWEST.resolve({
                theme: e,
                saturation: i.A.saturation,
            }).hex();
            a.A.setApplicationBackgroundColor(t);
        } catch (e) {}
}
