"use strict";
r.d(t, { N: () => o, l2: () => l, zL: () => s });
var n = r(582128),
    i = r(592288);
let o = {
    CollectionRoot: ({ collection: e, renderDropIndicator: t }) => a(e, null, t),
    CollectionBranch: ({ collection: e, parent: t, renderDropIndicator: r }) => a(e, t, r),
};
function a(e, t, r) {
    return (0, i.p)({
        items: t ? e.getChildren(t.key) : e,
        dependencies: [r],
        children(t) {
            if ("content" === t.type) return n.createElement(n.Fragment, null);
            let i = t.render(t);
            return r && "item" === t.type
                ? n.createElement(
                      n.Fragment,
                      null,
                      r({ type: "item", key: t.key, dropPosition: "before" }),
                      i,
                      (function (e, t, r) {
                          let i = t.key,
                              o = e.getKeyAfter(i),
                              a = null != o ? e.getItem(o) : null;
                          for (; null != a && "item" !== a.type; )
                              a = null != (o = e.getKeyAfter(a.key)) ? e.getItem(o) : null;
                          let s = null != t.nextKey ? e.getItem(t.nextKey) : null;
                          for (; null != s && "item" !== s.type; ) s = null != s.nextKey ? e.getItem(s.nextKey) : null;
                          let l = [];
                          if (null == s) {
                              let i = t;
                              for (
                                  ;
                                  i?.type === "item" && (!a || (i.parentKey !== a.parentKey && a.level < i.level));
                              ) {
                                  let t = r({ type: "item", key: i.key, dropPosition: "after" });
                                  (0, n.isValidElement)(t) && l.push((0, n.cloneElement)(t, { key: `${i.key}-after` })),
                                      (i = null != i.parentKey ? e.getItem(i.parentKey) : null);
                              }
                          }
                          return l;
                      })(e, t, r),
                  )
                : i;
        },
    });
}
let s = (0, n.createContext)(o);
function l(e) {
    return (0, n.useMemo)(() => (null != e ? new Set([e]) : null), [e]);
}
