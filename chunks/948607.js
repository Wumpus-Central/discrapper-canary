"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(735438),
    a = n(311907),
    s = n(68166),
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
        i = (0, a.bG)([o.A], () => o.A.keyboardModeEnabled),
        _ = (0, s.A)(),
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
                a = _;
            function s(t) {
                let n = t.relatedTarget;
                setTimeout(() => {
                    (null != n && "BUTTON" !== n.tagName) || a || d(e);
                }, 100);
            }
            return (
                r?.addEventListener("focusout", s),
                n.document.activeElement?.tagName === "IFRAME" || a || r?.focus(),
                () => {
                    r?.removeEventListener("focusout", s), (a = !0);
                }
            );
        }, [t, f, i, e, n, _]),
        p
    );
}
