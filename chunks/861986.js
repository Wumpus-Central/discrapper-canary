"use strict";
n.d(t, { A: () => u, O: () => o });
var l,
    s = n(627968);
n(64700);
var i = n(449859),
    r = n(985018),
    a = n(679740),
    o = (((l = {})[(l.WITH_CONTENT = 0)] = "WITH_CONTENT"), (l[(l.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), l);
function u(e) {
    let { message: t, compact: n, location: l } = e;
    return t.isEdited() && null != t.editedTimestamp
        ? l !== (n || (null != t.content && 0 !== t.content.length) ? 0 : 1)
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      " ",
                      (0, s.jsx)(i.A, {
                          timestamp: t.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, s.jsxs)("span", {
                              className: a.oh,
                              children: ["(", r.intl.string(r.t.C8sXIM), ")"],
                          }),
                      }),
                  ],
              })
        : null;
}
