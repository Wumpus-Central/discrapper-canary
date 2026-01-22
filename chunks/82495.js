n.d(t, { A: () => i });
var r = n(64700);
function i(e, t, n) {
    let i = r.useRef(e);
    return (
        r.useEffect(() => {
            function e(e) {
                null == i.current ||
                    i.current.contains(e.target) ||
                    ((null == n ? void 0 : n.current) != null && n.current.contains(e.target)) ||
                    t();
            }
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [i, t, n]),
        i
    );
}
