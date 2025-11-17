n.d(t, { i: () => a });
var r = n(473749);
let i = 1000;
function a(e) {
    let { keyboardDelegate: t, selectionManager: n, onTypeSelect: a } = e,
        s = (0, r.useRef)({
            search: "",
            timeout: void 0,
        }).current,
        l = (e) => {
            let r = o(e.key);
            if (
                r &&
                !e.ctrlKey &&
                !e.metaKey &&
                e.currentTarget.contains(e.target) &&
                (0 !== s.search.length || " " !== r)
            ) {
                if (
                    (" " === r &&
                        s.search.trim().length > 0 &&
                        (e.preventDefault(), "continuePropagation" in e || e.stopPropagation()),
                    (s.search += r),
                    null != t.getKeyForSearch)
                ) {
                    let e = t.getKeyForSearch(s.search, n.focusedKey);
                    null == e && (e = t.getKeyForSearch(s.search)), null != e && (n.setFocusedKey(e), a && a(e));
                }
                clearTimeout(s.timeout),
                    (s.timeout = setTimeout(() => {
                        s.search = "";
                    }, i));
            }
        };
    return { typeSelectProps: { onKeyDownCapture: t.getKeyForSearch ? l : void 0 } };
}
function o(e) {
    return 1 !== e.length && /^[A-Z]/i.test(e) ? "" : e;
}
