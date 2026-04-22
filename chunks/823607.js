"use strict";
n.d(t, { n: () => d });
var r = n(627968),
    i = n(64700),
    s = n(14877),
    a = n(15626),
    o = n(834730),
    l = n(140735),
    u = n(985018);
function d(e) {
    let { value: t, maxLength: n } = e,
        d = i.useContext(a._),
        c = t?.length ?? 0;
    return (
        (0, s.$)({ currentLength: c, maxLength: n, message: u.intl.string(u.t.c2Jqed) }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(o.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    tabularNumbers: !0,
                    "aria-hidden": null != n,
                    children: [c, null != n && ` / ${n}`],
                }),
                null != n &&
                    (0, r.jsx)(l.A, {
                        id: d?.trailingAuxiliaryContentId,
                        children: u.intl.format(u.t.fR1cof, { remainingCharacters: n - c }),
                    }),
            ],
        })
    );
}
