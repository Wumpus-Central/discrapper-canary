r.d(t, { R: () => a });
var n = r(85316),
    i = r(526739),
    o = r(582128);
function a(e) {
    let {
            selectionMode: t = "none",
            disallowEmptySelection: r = !1,
            allowDuplicateSelectionEvents: a,
            selectionBehavior: l = "toggle",
            disabledBehavior: u = "all",
        } = e,
        c = (0, o.useRef)(!1),
        [, f] = (0, o.useState)(!1),
        d = (0, o.useRef)(null),
        p = (0, o.useRef)(null),
        [, h] = (0, o.useState)(null),
        m = (0, o.useMemo)(() => s(e.selectedKeys), [e.selectedKeys]),
        v = (0, o.useMemo)(() => s(e.defaultSelectedKeys, new (0, n.L)()), [e.defaultSelectedKeys]),
        [y, g] = (0, i.P)(m, v, e.onSelectionChange),
        b = (0, o.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        [w, _] = (0, o.useState)(l);
    "replace" === l && "toggle" === w && "object" == typeof y && 0 === y.size && _("replace");
    let S = (0, o.useRef)(l);
    return (
        (0, o.useEffect)(() => {
            l !== S.current && (_(l), (S.current = l));
        }, [l]),
        {
            selectionMode: t,
            disallowEmptySelection: r,
            selectionBehavior: w,
            setSelectionBehavior: _,
            get isFocused() {
                return c.current;
            },
            setFocused(e) {
                (c.current = e), f(e);
            },
            get focusedKey() {
                return d.current;
            },
            get childFocusStrategy() {
                return p.current;
            },
            setFocusedKey(e, t = "first") {
                (d.current = e), (p.current = t), h(e);
            },
            selectedKeys: y,
            setSelectedKeys(e) {
                (a ||
                    !(function (e, t) {
                        if (e.size !== t.size) return !1;
                        for (let r of e) if (!t.has(r)) return !1;
                        return !0;
                    })(e, y)) &&
                    g(e);
            },
            disabledKeys: b,
            disabledBehavior: u,
        }
    );
}
function s(e, t) {
    return e ? ("all" === e ? "all" : new (0, n.L)(e)) : t;
}
