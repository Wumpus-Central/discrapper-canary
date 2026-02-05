"use strict";
n.d(t, { n: () => a });
var r = n(627968);
n(64700);
var i = n(397927);
function a(e) {
    let { value: t, maxLength: n } = e;
    return (0, r.jsxs)(i.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        tabularNumbers: !0,
        children: [t?.length ?? 0, null != n && ` / ${n}`],
    });
}
