n.d(t, { Z: () => s }), n(388685);
var r = n(192379);
function i() {
    return 'undefined' == typeof document || 'visible' === document.visibilityState;
}
function s() {
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
