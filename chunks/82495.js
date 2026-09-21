n.d(t, { A: () => l });
var r = n(582128);
function l(e, t, n) {
    let l = r.useRef(e);
    return (
        r.useEffect(() => {
            function e(e) {
                null == l.current ||
                    l.current.contains(e.target) ||
                    (n?.current != null && n.current.contains(e.target)) ||
                    t();
            }
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [l, t, n]),
        l
    );
}
