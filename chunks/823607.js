"use strict";
n.d(t, { n: () => l });
var r = n(627968),
    i = n(64700),
    s = n(14877),
    a = n(158954),
    o = n(985018);
function l(e) {
    let { value: t, maxLength: n } = e,
        l = i.useContext(a._zY),
        u = t?.length ?? 0;
    return (
        (0, s.$)({ currentLength: u, maxLength: n, message: o.intl.string(o.t.c2Jqed) }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(a.EYj, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    tabularNumbers: !0,
                    "aria-hidden": null != n,
                    children: [u, null != n && ` / ${n}`],
                }),
                null != n &&
                    (0, r.jsx)(a.AC4, {
                        id: l?.trailingAuxiliaryContentId,
                        children: o.intl.format(o.t.fR1cof, { remainingCharacters: n - u }),
                    }),
            ],
        })
    );
}
