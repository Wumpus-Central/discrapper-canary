"use strict";
n.d(t, { A: () => o, O: () => c });
var i,
    a = n(627968);
n(64700);
var r = n(606049),
    s = n(985018),
    l = n(334211),
    c = (((i = {})[(i.WITH_CONTENT = 0)] = "WITH_CONTENT"), (i[(i.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), i);
function o(e) {
    let { message: t, compact: n, location: i } = e;
    return t.isEdited() && null != t.editedTimestamp
        ? i !== (n || (null != t.content && 0 !== t.content.length) ? 0 : 1)
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      " ",
                      (0, a.jsx)(r.A, {
                          timestamp: t.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, a.jsxs)("span", {
                              className: l.oh,
                              children: ["(", s.intl.string(s.t.C8sXIM), ")"],
                          }),
                      }),
                  ],
              })
        : null;
}
