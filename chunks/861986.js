n.d(e, { A: () => c, O: () => m });
var s,
    i = n(477900);
n(582128);
var a = n(606049),
    l = n(375708),
    r = n(318626),
    m = (((s = {})[(s.WITH_CONTENT = 0)] = "WITH_CONTENT"), (s[(s.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), s);
function c(t) {
    let { message: e, compact: n, location: s } = t;
    return e.isEdited() && null != e.editedTimestamp
        ? s !== (n || (null != e.content && 0 !== e.content.length) ? 0 : 1)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      " ",
                      (0, i.jsx)(a.A, {
                          timestamp: e.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, i.jsxs)("span", {
                              className: r.oh,
                              children: ["(", l.intl.string(l.t.C8sXIM), ")"],
                          }),
                      }),
                  ],
              })
        : null;
}
