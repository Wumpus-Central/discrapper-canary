"use strict";
n.d(t, { n: () => c });
var i = n(627968),
    r = n(64700),
    s = n(14877),
    a = n(15626),
    o = n(834730),
    l = n(140735),
    u = n(375708);
function c(e) {
    let { value: t, maxLength: n } = e,
        c = r.useContext(a._),
        d = t?.length ?? 0;
    return (
        (0, s.$)({ currentLength: d, maxLength: n, message: u.intl.string(u.t.c2Jqed) }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    tabularNumbers: !0,
                    "aria-hidden": null != n,
                    children: [d, null != n && ` / ${n}`],
                }),
                null != n &&
                    (0, i.jsx)(l.A, {
                        id: c?.trailingAuxiliaryContentId,
                        children: u.intl.format(u.t.fR1cof, { remainingCharacters: n - d }),
                    }),
            ],
        })
    );
}
