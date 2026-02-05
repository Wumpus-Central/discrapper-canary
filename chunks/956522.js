"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(726293),
    o = n(60809),
    l = n(985018);
function u(e) {
    let t,
        { sortOrder: n, onSortOptionClick: u } = e,
        c = i.useRef(null);
    switch (n) {
        case o.Ug.POPULAR:
            t = l.intl.string(l.t.SzxiqK);
            break;
        case o.Ug.ALPHABETICAL:
            t = l.intl.string(l.t.m8xsti);
    }
    return (0, r.jsx)(a.YNO, {
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(s.A, { sortOrder: n, onSortOptionClick: u, closePopout: t });
        },
        position: "bottom",
        align: "left",
        children: (e) =>
            (0, r.jsx)(a.Button, {
                ...e,
                buttonRef: c,
                size: "sm",
                variant: "secondary",
                "aria-label": l.intl.string(l.t.yeYaHf),
                icon: a.JNJ,
                text: t,
            }),
    });
}
