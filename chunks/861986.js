n.d(t, { A: () => m, O: () => c });
var s,
    i = n(477900);
n(582128);
var a = n(606049),
    r = n(375708),
    l = n(281867),
    c = (((s = {})[(s.WITH_CONTENT = 0)] = "WITH_CONTENT"), (s[(s.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), s);
function m(e) {
    let { message: t, compact: n, location: s } = e;
    return t.isEdited() && null != t.editedTimestamp
        ? s !== (n || (null != t.content && 0 !== t.content.length) ? 0 : 1)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      " ",
                      (0, i.jsx)(a.A, {
                          timestamp: t.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, i.jsxs)("span", {
                              className: l.oh,
                              children: ["(", r.intl.string(r.t.C8sXIM), ")"],
                          }),
                      }),
                  ],
              })
        : null;
}
