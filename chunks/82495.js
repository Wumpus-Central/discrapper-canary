"use strict";
n.d(t, { A: () => i });
var l = n(582128);
function i(e, t, n) {
    let i = l.useRef(e);
    return (
        l.useEffect(() => {
            function e(e) {
                null == i.current ||
                    i.current.contains(e.target) ||
                    (n?.current != null && n.current.contains(e.target)) ||
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
