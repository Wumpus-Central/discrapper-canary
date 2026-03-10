"use strict";
n.d(t, { $: () => a });
var i = n(627968),
    s = n(64700),
    l = n(442433),
    r = n(93055);
function a(e, t) {
    let { hasAccess: a } = (0, r.TW)(e);
    return s.useCallback(
        (e) => {
            if (!a) {
                e.preventDefault(), e.stopPropagation();
                return;
            }
            (0, l.L3)(e, async () => {
                let { default: e } = await n.e("38167").then(n.bind(n, 342186));
                return (n) => (0, i.jsx)(e, { ...n, navId: t });
            });
        },
        [a, t],
    );
}
