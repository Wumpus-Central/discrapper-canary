t.d(n, { A: () => i });
var a = t(582128);
function i(e, n, t) {
    let i = a.useRef(e);
    return (
        a.useEffect(() => {
            function e(e) {
                null == i.current ||
                    i.current.contains(e.target) ||
                    (t?.current != null && t.current.contains(e.target)) ||
                    n();
            }
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [i, n, t]),
        i
    );
}
