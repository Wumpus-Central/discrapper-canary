"use strict";
n.d(t, { o: () => o });
var i = n(477900),
    r = n(582128),
    a = n(460890),
    s = n(834730),
    l = n(121462);
function o(e) {
    let { message: t } = e,
        { i18n: n } = r.useContext(a.VO);
    return (0, i.jsx)("div", {
        className: l.p,
        role: "status",
        children: (0, i.jsx)(s.E, { variant: "text-md/medium", className: l.q, children: t ?? n.LISTBOX_EMPTY_STATE }),
    });
}
