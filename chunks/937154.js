n.d(t, { Z: () => o }), n(47120);
var r = n(192379);
function i() {
    return 'undefined' == typeof document || 'visible' === document.visibilityState;
}
function o() {
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
