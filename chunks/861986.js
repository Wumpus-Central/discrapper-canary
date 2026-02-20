n.d(t, { A: () => c, O: () => o });
var a,
    i = n(627968);
n(64700);
var r = n(449859),
    l = n(985018),
    s = n(679740),
    o = (((a = {})[(a.WITH_CONTENT = 0)] = "WITH_CONTENT"), (a[(a.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), a);
function c(e) {
    let { message: t, compact: n, location: a } = e;
    return t.isEdited() && null != t.editedTimestamp
        ? a !== (n || (null != t.content && 0 !== t.content.length) ? 0 : 1)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      " ",
                      (0, i.jsx)(r.A, {
                          timestamp: t.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, i.jsxs)("span", {
                              className: s.oh,
                              children: ["(", l.intl.string(l.t.C8sXIM), ")"],
                          }),
                      }),
                  ],
              })
        : null;
}
