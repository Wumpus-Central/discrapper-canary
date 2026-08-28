n.d(e, { A: () => m, O: () => c });
var s,
    i = n(477900);
n(582128);
var a = n(606049),
    r = n(375708),
    l = n(318626),
    c = (((s = {})[(s.WITH_CONTENT = 0)] = "WITH_CONTENT"), (s[(s.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), s);
function m(t) {
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
                              className: l.oh,
                              children: ["(", r.intl.string(r.t.C8sXIM), ")"],
                          }),
                      }),
                  ],
              })
        : null;
}
