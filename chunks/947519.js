n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(608787),
    o = n(442837),
    s = n(522474),
    l = n(906467),
    c = n(358085),
    u = n(31336),
    d = n(19759),
    f = n(981631);
let p = (0, a.Un)({
    createPromise: () =>
        Promise.all([
            n.e("50448"),
            n.e("82821"),
            n.e("23032"),
            n.e("63575"),
            n.e("62856"),
            n.e("43342"),
            n.e("43778"),
            n.e("30634"),
            n.e("77069"),
            n.e("51333"),
            n.e("83243"),
            n.e("5410"),
            n.e("39380"),
            n.e("6043"),
            n.e("93886"),
        ]).then(n.bind(n, 678717)),
    webpackId: 678717,
});
function _(e) {
    let { mobile: t } = e,
        n = (0, o.e7)([l.Z], () => l.Z.isDeveloper),
        a = (0, o.e7)([d.Z], () => d.Z.displayTools),
        _ = (0, o.e7)([s.Z], () => s.Z.getWindowOpen(f.KJ3.DEVTOOLS_POPOUT)),
        m = i.useCallback((e) => {
            ((0, c.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, u.SO)();
        }, []);
    return (i.useLayoutEffect(
        () => (
            window.addEventListener("keydown", m),
            () => {
                window.removeEventListener("keydown", m);
            }
        ),
        [m],
    ),
    (t ? n : a) && !_)
        ? (0, r.jsx)(p, { mobile: t })
        : null;
}
