n.d(t, { S: () => l });
var r = n(605294),
    i = n(159447),
    a = n(880016),
    o = n(473749),
    s = n(227399);
function l(e, t) {
    let { "aria-label": n, "aria-labelledby": l, orientation: c = "horizontal" } = e,
        [u, d] = (0, o.useState)(!1);
    (0, i.b)(() => {
        var e;
        d(!!(t.current && (null == (e = t.current.parentElement) ? void 0 : e.closest('[role="toolbar"]'))));
    });
    let { direction: f } = (0, s.j)(),
        p = "rtl" === f && "horizontal" === c,
        _ = (0, r.E7)(t),
        m = (e) => {
            if (e.currentTarget.contains(e.target)) {
                if (("horizontal" === c && "ArrowRight" === e.key) || ("vertical" === c && "ArrowDown" === e.key))
                    p ? _.focusPrevious() : _.focusNext();
                else if (("horizontal" === c && "ArrowLeft" === e.key) || ("vertical" === c && "ArrowUp" === e.key))
                    p ? _.focusNext() : _.focusPrevious();
                else {
                    if ("Tab" !== e.key) return;
                    e.stopPropagation(),
                        (h.current = document.activeElement),
                        e.shiftKey ? _.focusFirst() : _.focusLast();
                    return;
                }
                e.stopPropagation(), e.preventDefault();
            }
        },
        h = (0, o.useRef)(null),
        g = (e) => {
            e.currentTarget.contains(e.relatedTarget) || h.current || (h.current = e.target);
        },
        E = (e) => {
            var n, r;
            h.current &&
                !e.currentTarget.contains(e.relatedTarget) &&
                (null == (n = t.current) ? void 0 : n.contains(e.target)) &&
                (null == (r = h.current) || r.focus(), (h.current = null));
        };
    return {
        toolbarProps: {
            ...(0, a.z)(e, { labelable: !0 }),
            role: u ? "group" : "toolbar",
            "aria-orientation": c,
            "aria-label": n,
            "aria-labelledby": null == n ? l : void 0,
            onKeyDownCapture: u ? void 0 : m,
            onFocusCapture: u ? void 0 : E,
            onBlurCapture: u ? void 0 : g,
        },
    };
}
