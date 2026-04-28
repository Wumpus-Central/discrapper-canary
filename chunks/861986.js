n.d(t, { A: () => c, O: () => o });
var a,
    i = n(627968);
n(64700);
var l = n(606049),
    s = n(985018),
    r = n(334211),
    o = (((a = {})[(a.WITH_CONTENT = 0)] = "WITH_CONTENT"), (a[(a.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), a);
function c(e) {
    let { message: t, compact: n, location: a } = e;
    return t.isEdited() && null != t.editedTimestamp
        ? a !== (n || (null != t.content && 0 !== t.content.length) ? 0 : 1)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      " ",
                      (0, i.jsx)(l.A, {
                          timestamp: t.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, i.jsxs)("span", {
                              className: r.oh,
                              children: ["(", s.intl.string(s.t.C8sXIM), ")"],
                          }),
                      }),
                  ],
              })
        : null;
}
