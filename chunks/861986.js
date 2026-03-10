"use strict";
n.d(t, { A: () => u, O: () => o });
var l,
    i = n(627968);
n(64700);
var s = n(449859),
    a = n(985018),
    r = n(679740),
    o = (((l = {})[(l.WITH_CONTENT = 0)] = "WITH_CONTENT"), (l[(l.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), l);
function u(e) {
    let { message: t, compact: n, location: l } = e;
    return t.isEdited() && null != t.editedTimestamp
        ? l !== (n || (null != t.content && 0 !== t.content.length) ? 0 : 1)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      " ",
                      (0, i.jsx)(s.A, {
                          timestamp: t.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, i.jsxs)("span", {
                              className: r.oh,
                              children: ["(", a.intl.string(a.t.C8sXIM), ")"],
                          }),
                      }),
                  ],
              })
        : null;
}
