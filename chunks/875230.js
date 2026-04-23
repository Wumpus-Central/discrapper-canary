"use strict";
n.d(t, { _: () => s });
var r = n(64700),
    i = n(348275);
function s(e) {
    let t = r.useRef(null);
    return {
        triggerRef: r.useCallback(
            (n) => {
                (t.current = n), null != e && (0, i.cZ)(e, n);
            },
            [e],
        ),
        targetElementRef: t,
    };
}
