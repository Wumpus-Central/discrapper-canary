"use strict";
n.r(t), n.d(t, { openPlayground: () => u, openPlaygroundFromParsedUrl: () => d });
var r = n(398590),
    i = n(790271),
    s = n(186111),
    a = n(944771),
    o = n(3258),
    l = n(652215);
async function u(e, t) {
    if (!(0, i.mz)("playground_open")) return !1;
    let n = await (0, a.getComponentPlaygroundConfigs)(),
        u =
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
            null != u && null != t
                ? (function (e, t, n) {
                      for (let r of n) {
                          let n = r.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
                          if (null != n)
                              for (let e of n.groups) {
                                  let n = e.stories.find((e) => e.id.toLowerCase() === t.toLowerCase());
                                  if (null != n) return n.id;
                              }
                      }
                      return null;
                  })(u, t, n)
                : null;
    return (
        o.PlaygroundStore.setState({ selectedCollection: u, selectedStory: d }),
        s.A.getLayers().includes(l.zgK.COMPONENT_PLAYGROUND) || (0, r.id)(l.zgK.COMPONENT_PLAYGROUND),
        !0
    );
}
function d(e) {
    let { match: t } = e;
    return u(t.collection, t.story);
}
