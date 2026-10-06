(n.r(l), n.d(l, { openPlayground: () => d, openPlaygroundFromParsedUrl: () => c }));
var o = n(398590),
    r = n(790271),
    t = n(186111),
    u = n(944771),
    i = n(101715),
    s = n(652215);
async function d(e, l, n) {
    if (!(0, r.mz)("playground_open")) return !1;
    let d = await (0, u.getComponentPlaygroundConfigs)(),
        c =
            null != e
                ? (function (e, l) {
                      for (let n of l) {
                          let l = n.collections.find((l) => l.id.toLowerCase() === e.toLowerCase());
                          if (null != l) return l.id;
                      }
                      return null;
                  })(e, d)
                : null,
        a =
            null != c && null != l
                ? (function (e, l, n) {
                      for (let o of n) {
                          let n = o.collections.find((l) => l.id.toLowerCase() === e.toLowerCase());
                          if (null != n)
                              for (let e of n.groups) {
                                  let n = e.stories.find((e) => e.id.toLowerCase() === l.toLowerCase());
                                  if (null != n) return n.id;
                              }
                      }
                      return null;
                  })(c, l, d)
                : null;
    return (
        i.x.setState({
            selectedCollection: c,
            selectedStory: a,
            controlOverrides: null != a && null != n ? n : null,
            currentProps: null,
        }),
        t.A.getLayers().includes(s.zgK.COMPONENT_PLAYGROUND) || (0, o.id)(s.zgK.COMPONENT_PLAYGROUND),
        !0
    );
}
function c(e) {
    let { match: l } = e;
    return d(l.collection, l.story, l.controlOverrides);
}
