"use strict";
n.r(t), n.d(t, { openPlayground: () => d, openPlaygroundFromParsedUrl: () => c });
var i = n(398590),
    r = n(790271),
    a = n(186111),
    s = n(944771),
    l = n(764451),
    o = n(652215);
async function d(e, t, n) {
    if (!(0, r.mz)("playground_open")) return !1;
    let d = await (0, s.getComponentPlaygroundConfigs)(),
        c =
            null != e
                ? (function (e, t) {
                      for (let n of t) {
                          let t = n.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
                          if (null != t) return t.id;
                      }
                      return null;
                  })(e, d)
                : null,
        u =
            null != c && null != t
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
                  })(c, t, d)
                : null;
    return (
        l.PlaygroundStore.setState({
            selectedCollection: c,
            selectedStory: u,
            controlOverrides: null != u && null != n ? n : null,
            currentProps: null,
        }),
        a.A.getLayers().includes(o.zgK.COMPONENT_PLAYGROUND) || (0, i.id)(o.zgK.COMPONENT_PLAYGROUND),
        !0
    );
}
function c(e) {
    let { match: t } = e;
    return d(t.collection, t.story, t.controlOverrides);
}
