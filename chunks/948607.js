"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(735438),
    s = n(311907),
    a = n(68166),
    o = n(775602),
    l = n(267102),
    u = n(203982),
    c = n(652215);
let d = (0, i.debounce)((e) => {
    setTimeout(() => {
        e.current?.focus();
    }, 0);
}, 50);
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = (0, s.bG)([o.A], () => o.A.keyboardModeEnabled),
        _ = (0, a.A)(),
        [f, p] = r.useState(!1),
        h = (0, l.aL)();
    return (
        r.useEffect(() => {
            if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
            function e() {
                _ && (h.dispatch(c.jej.POPOUT_CLOSE), u._.dispatch(c.jej.CONTEXT_MENU_CLOSE));
            }
        }, [n, _, t, h]),
        r.useEffect(() => {
            if (i || !f || !t) return;
            let { current: r } = e,
                s = _;
            function a(t) {
                let n = t.relatedTarget;
                setTimeout(() => {
                    (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || s || d(e);
                }, 100);
            }
            return (
                r?.addEventListener("focusout", a),
                n.document.activeElement?.tagName === "IFRAME" || s || r?.focus(),
                () => {
                    r?.removeEventListener("focusout", a), (s = !0);
                }
            );
        }, [t, f, i, e, n, _]),
        p
    );
}
