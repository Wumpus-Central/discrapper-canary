n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    o = n(608787),
    a = n(442837),
    s = n(522474),
    l = n(906467),
    c = n(358085),
    u = n(31336),
    d = n(19759),
    f = n(981631);
let _ = (0, o.Un)({
    createPromise: () =>
        Promise.all([
            n.e("8895"),
            n.e("84605"),
            n.e("50448"),
            n.e("80451"),
            n.e("67244"),
            n.e("8016"),
            n.e("12830"),
            n.e("49508"),
            n.e("17938"),
            n.e("94136"),
            n.e("62117"),
            n.e("25548"),
            n.e("99956"),
            n.e("22646"),
            n.e("76540"),
            n.e("25183"),
            n.e("3940"),
            n.e("27458"),
            n.e("9885"),
            n.e("77512"),
            n.e("88712"),
            n.e("30419"),
            n.e("66317"),
            n.e("89001"),
            n.e("18824"),
            n.e("88876"),
            n.e("62332"),
            n.e("7384"),
            n.e("62856"),
            n.e("35624"),
            n.e("92922"),
            n.e("30634"),
            n.e("89744"),
            n.e("93886"),
        ]).then(n.bind(n, 678717)),
    webpackId: 678717,
});
function p(e) {
    let { mobile: t } = e,
        n = (0, a.e7)([l.Z], () => l.Z.isDeveloper),
        o = (0, a.e7)([d.Z], () => d.Z.displayTools),
        p = (0, a.e7)([s.Z], () => s.Z.getWindowOpen(f.KJ3.DEVTOOLS_POPOUT)),
        h = i.useCallback((e) => {
            ((0, c.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, u.SO)();
        }, []);
    return (i.useLayoutEffect(
        () => (
            window.addEventListener("keydown", h),
            () => {
                window.removeEventListener("keydown", h);
            }
        ),
        [h],
    ),
    (t ? n : o) && !p)
        ? (0, r.jsx)(_, { mobile: t })
        : null;
}
