n.d(t, { Z: () => l }), n(388685);
var r = n(73800);
function i() {
    return 'undefined' == typeof document || 'visible' === document.visibilityState;
}
function l() {
    let [e, t] = (0, r.useState)(i());
    return (
        (0, r.useEffect)(() => {
            function e() {
                t(i());
            }
            return (
                window.addEventListener('visibilitychange', e),
                () => {
                    window.removeEventListener('visibilitychange', e);
                }
            );
        }, [t]),
        e
    );
}
