t.d(n, { A: () => o });
var s = t(582128);
function o(e, n, t) {
    let o = s.useRef(e);
    return (
        s.useEffect(() => {
            function e(e) {
                null == o.current ||
                    o.current.contains(e.target) ||
                    (t?.current != null && t.current.contains(e.target)) ||
                    n();
            }
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [o, n, t]),
        o
    );
}
