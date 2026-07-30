"use strict";
n.d(t, { R: () => s, X: () => a });
var i = n(582128);
let r = ["mousemove", "mousedown", "keydown", "scroll", "touchstart", "pointerdown"];
function a(e) {
    let [t, n] = i.useState(!1),
        a = i.useRef(null),
        s = i.useCallback(() => {
            n(!1), null != a.current && clearTimeout(a.current), (a.current = setTimeout(() => n(!0), e));
        }, [e]);
    return (
        i.useEffect(() => {
            for (let e of r) window.addEventListener(e, s, { passive: !0, capture: !0 });
            return (
                (a.current = setTimeout(() => n(!0), e)),
                () => {
                    for (let e of r) window.removeEventListener(e, s, { capture: !0 });
                    null != a.current && clearTimeout(a.current);
                }
            );
        }, [e, s]),
        [t, s]
    );
}
function s() {
    let [e, t] = i.useState(!0);
    return (
        i.useEffect(() => {
            function e() {
                return t(!0);
            }
            function n() {
                return t(!1);
            }
            return (
                t(window.document.hasFocus()),
                window.addEventListener("focus", e),
                window.addEventListener("blur", n),
                () => {
                    window.removeEventListener("focus", e), window.removeEventListener("blur", n);
                }
            );
        }, []),
        e
    );
}
