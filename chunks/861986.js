"use strict";
n.d(t, { A: () => c, O: () => o });
var l,
    a = n(627968);
n(64700);
var s = n(449859),
    i = n(985018),
    r = n(334211),
    o = (((l = {})[(l.WITH_CONTENT = 0)] = "WITH_CONTENT"), (l[(l.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), l);
function c(e) {
    let { message: t, compact: n, location: l } = e;
    return t.isEdited() && null != t.editedTimestamp
        ? l !== (n || (null != t.content && 0 !== t.content.length) ? 0 : 1)
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      " ",
                      (0, a.jsx)(s.A, {
                          timestamp: t.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, a.jsxs)("span", {
                              className: r.oh,
                              children: ["(", i.intl.string(i.t.C8sXIM), ")"],
                          }),
                      }),
                  ],
              })
        : null;
}
