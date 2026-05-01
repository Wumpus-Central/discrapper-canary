"use strict";
n.r(t), n.d(t, { openPlayground: () => _, openPlaygroundFromParsedUrl: () => d });
var i = n(398590),
    r = n(790271),
    s = n(186111),
    a = n(944771),
    o = n(3258),
    l = n(652215);
async function _(e, t) {
    if (!(0, r.mz)("playground_open")) return !1;
    let n = await (0, a.getComponentPlaygroundConfigs)(),
        _ =
            null != e
                ? (function (e, t) {
                      for (let n of t) {
                          let t = n.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
                          if (null != t) return t.id;
                      }
                      return null;
                  })(e, n)
                : null,
        d =
            null != _ && null != t
                ? (function (e, t, n) {
                      for (let i of n) {
                          let n = i.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
                          if (null != n)
                              for (let e of n.groups) {
                                  let n = e.stories.find((e) => e.id.toLowerCase() === t.toLowerCase());
                                  if (null != n) return n.id;
                              }
                      }
                      return null;
                  })(_, t, n)
                : null;
    return (
        o.PlaygroundStore.setState({ selectedCollection: _, selectedStory: d }),
        s.A.getLayers().includes(l.zgK.COMPONENT_PLAYGROUND) || (0, i.id)(l.zgK.COMPONENT_PLAYGROUND),
        !0
    );
}
function d(e) {
    let { match: t } = e;
    return _(t.collection, t.story);
}
