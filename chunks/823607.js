"use strict";
n.d(t, { n: () => o });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(985018);
function o(e) {
    let { value: t, maxLength: n } = e,
        o = i.useContext(s._zY),
        l = t?.length ?? 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.EYj, {
                variant: "text-xs/normal",
                color: "text-subtle",
                tabularNumbers: !0,
                "aria-hidden": null != n,
                children: [l, null != n && ` / ${n}`],
            }),
            null != n &&
                (0, r.jsx)(s.AC4, {
                    id: o?.trailingAuxiliaryContentId,
                    children: a.intl.format(a.t.fR1cof, { remainingCharacters: n - l }),
                }),
        ],
    });
}
