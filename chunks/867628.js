"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(267102),
    s = n(652215);
let a = ["Shift", "Alt", "Meta", "Control"];
function o(e, t) {
    let [n, o] = r.useState(0),
        l = (0, i.aL)();
    r.useEffect(() => {
        let e = () => o((e) => e + 1),
            t = () => o((e) => Math.max(0, e - 1));
        return (
            l.subscribe(s.jej.POPOUT_SHOW, e),
            l.subscribe(s.jej.POPOUT_HIDE, t),
            () => {
                l.unsubscribe(s.jej.POPOUT_SHOW, e), l.unsubscribe(s.jej.POPOUT_HIDE, t);
            }
        );
    }, [l]);
    let [u, c] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            let r = (e) => {
                    (!t || n > 0) && u
                        ? c(!1)
                        : (!u && n > 0) ||
                          (e instanceof KeyboardEvent &&
                              (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || a.indexOf(e.key) >= 0)) ||
                          c((e) => !e);
                },
                i = u ? "keyup" : "mousemove";
            return t && e.addEventListener(i, r), () => e?.removeEventListener(i, r);
        }, [e, u, n, t]),
        t && 0 === n && u
    );
}
