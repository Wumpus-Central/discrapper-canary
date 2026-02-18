"use strict";
n.r(t), n.d(t, { openPlayground: () => d, openPlaygroundFromParsedUrl: () => _ });
var r = n(398590),
    i = n(790271),
    s = n(186111),
    a = n(944771),
    o = n(3258),
    l = n(652215);
function u(e, t) {
    for (let n of t) {
        let t = n.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
        if (null != t) return t.id;
    }
    return null;
}
function c(e, t, n) {
    for (let r of n) {
        let n = r.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
        if (null != n)
            for (let e of n.groups) {
                let n = e.stories.find((e) => e.id.toLowerCase() === t.toLowerCase());
                if (null != n) return n.id;
            }
    }
    return null;
}
async function d(e, t) {
    if (!(0, i.mz)("playground_open")) return !1;
    let n = await (0, a.getComponentPlaygroundConfigs)(),
        d = null != e ? u(e, n) : null,
        _ = null != d && null != t ? c(d, t, n) : null;
    return (
        o.PlaygroundStore.setState({ selectedCollection: d, selectedStory: _ }),
        s.A.getLayers().includes(l.zgK.COMPONENT_PLAYGROUND) || (0, r.id)(l.zgK.COMPONENT_PLAYGROUND),
        !0
    );
}
function _(e) {
    let { match: t } = e;
    return d(t.collection, t.story);
}
