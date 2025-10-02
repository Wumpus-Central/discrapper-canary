n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(608787),
    o = n(442837),
    s = n(522474),
    l = n(906467),
    c = n(358085),
    u = n(31336),
    d = n(19759),
    f = n(981631);
let _ = (0, a.Un)({
    createPromise: () =>
        Promise.all([
            n.e("50448"),
            n.e("80451"),
            n.e("48704"),
            n.e("63575"),
            n.e("62856"),
            n.e("64838"),
            n.e("17938"),
            n.e("43342"),
            n.e("40849"),
            n.e("52407"),
            n.e("3408"),
            n.e("68255"),
            n.e("30634"),
            n.e("9452"),
            n.e("204"),
            n.e("64170"),
            n.e("83243"),
            n.e("93964"),
            n.e("69432"),
            n.e("8345"),
            n.e("93886"),
        ]).then(n.bind(n, 678717)),
    webpackId: 678717,
});
function p(e) {
    let { mobile: t } = e,
        n = (0, o.e7)([l.Z], () => l.Z.isDeveloper),
        a = (0, o.e7)([d.Z], () => d.Z.displayTools),
        p = (0, o.e7)([s.Z], () => s.Z.getWindowOpen(f.KJ3.DEVTOOLS_POPOUT)),
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
    (t ? n : a) && !p)
        ? (0, r.jsx)(_, { mobile: t })
        : null;
}
