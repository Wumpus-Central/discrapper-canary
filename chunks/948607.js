n.d(t, { A: () => f }), n(896048);
var r = n(64700),
    i = n(735438),
    a = n(311907),
    s = n(68166),
    o = n(775602),
    l = n(267102),
    c = n(203982),
    u = n(652215);
let d = (0, i.debounce)((e) => {
    setTimeout(() => {
        var t;
        null == (t = e.current) || t.focus();
    }, 0);
}, 50);
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = (0, a.bG)([o.A], () => o.A.keyboardModeEnabled),
        f = (0, s.A)(),
        [p, _] = r.useState(!1),
        h = (0, l.aL)();
    return (
        r.useEffect(() => {
            if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
            function e() {
                f && (h.dispatch(u.jej.POPOUT_CLOSE), c._.dispatch(u.jej.CONTEXT_MENU_CLOSE));
            }
        }, [n, f, t, h]),
        r.useEffect(() => {
            var r;
            if (i || !p || !t) return;
            let { current: a } = e,
                s = f;
            function o(t) {
                let n = t.relatedTarget;
                setTimeout(() => {
                    (null != n && "BUTTON" !== n.tagName) || s || d(e);
                }, 100);
            }
            return (
                null == a || a.addEventListener("focusout", o),
                (null == (r = n.document.activeElement) ? void 0 : r.tagName) === "IFRAME" ||
                    s ||
                    null == a ||
                    a.focus(),
                () => {
                    null == a || a.removeEventListener("focusout", o), (s = !0);
                }
            );
        }, [t, p, i, e, n, f]),
        _
    );
}
