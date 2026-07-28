"use strict";
n.d(t, { n: () => c });
var i = n(477900),
    r = n(582128),
    a = n(14877),
    s = n(15626),
    l = n(834730),
    o = n(140735),
    d = n(375708);
function c(e) {
    let { value: t, maxLength: n } = e,
        c = r.useContext(s._),
        u = t?.length ?? 0;
    return (
        (0, a.$)({ currentLength: u, maxLength: n, message: d.intl.string(d.t.c2Jqed) }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    tabularNumbers: !0,
                    "aria-hidden": null != n,
                    children: [u, null != n && ` / ${n}`],
                }),
                null != n &&
                    (0, i.jsx)(o.A, {
                        id: c?.trailingAuxiliaryContentId,
                        children: d.intl.format(d.t.fR1cof, { remainingCharacters: n - u }),
                    }),
            ],
        })
    );
}
