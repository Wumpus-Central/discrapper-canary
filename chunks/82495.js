n.d(t, { A: () => r });
var l = n(582128);
function r(e, t, n) {
    let r = l.useRef(e);
    return (
        l.useEffect(() => {
            function e(e) {
                null == r.current ||
                    r.current.contains(e.target) ||
                    (n?.current != null && n.current.contains(e.target)) ||
                    t();
            }
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [r, t, n]),
        r
    );
}
