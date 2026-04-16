"use strict";
n.d(t, { R: () => a, X: () => s });
var r = n(64700);
let i = ["mousemove", "mousedown", "keydown", "scroll", "touchstart", "pointerdown"];
function s(e) {
    let [t, n] = r.useState(!1),
        s = r.useRef(null),
        a = r.useCallback(() => {
            n(!1), null != s.current && clearTimeout(s.current), (s.current = setTimeout(() => n(!0), e));
        }, [e]);
    return (
        r.useEffect(() => {
            for (let e of i) window.addEventListener(e, a, { passive: !0, capture: !0 });
            return (
                (s.current = setTimeout(() => n(!0), e)),
                () => {
                    for (let e of i) window.removeEventListener(e, a, { capture: !0 });
                    null != s.current && clearTimeout(s.current);
                }
            );
        }, [e, a]),
        [t, a]
    );
}
function a() {
    let e = window,
        [t, n] = r.useState(e.document.hasFocus());
    return (
        r.useEffect(() => {
            let t = () => n(!0),
                r = () => n(!1);
            return (
                e.addEventListener("focus", t),
                e.addEventListener("blur", r),
                () => {
                    e.removeEventListener("focus", t), e.removeEventListener("blur", r);
                }
            );
        }, [e]),
        t
    );
}
