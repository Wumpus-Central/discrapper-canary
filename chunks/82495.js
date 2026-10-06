t.d(n, { A: () => a });
var s = t(582128);
function a(e, n, t) {
    let a = s.useRef(e);
    return (
        s.useEffect(() => {
            function e(e) {
                null == a.current ||
                    a.current.contains(e.target) ||
                    (t?.current != null && t.current.contains(e.target)) ||
                    n();
            }
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [a, n, t]),
        a
    );
}
