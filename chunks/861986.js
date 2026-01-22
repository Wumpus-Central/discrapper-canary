n.d(t, {
    A: () => c,
    O: () => o,
});
var r = n(627968);
n(64700);
var i = n(449859),
    a = n(985018),
    s = n(679740),
    o = (function (e) {
        return (e[(e.WITH_CONTENT = 0)] = "WITH_CONTENT"), (e[(e.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), e;
    })({});
function l(e, t) {
    return t || (null != e.content && 0 !== e.content.length) ? 0 : 1;
}
function c(e) {
    let { message: t, compact: n, location: o } = e;
    return t.isEdited() && null != t.editedTimestamp && o === l(t, n)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  " ",
                  (0, r.jsx)(i.A, {
                      timestamp: t.editedTimestamp,
                      isEdited: !0,
                      isInline: !1,
                      children: (0, r.jsxs)("span", {
                          className: s.oh,
                          children: ["(", a.intl.string(a.t.C8sXIM), ")"],
                      }),
                  }),
              ],
          })
        : null;
}
