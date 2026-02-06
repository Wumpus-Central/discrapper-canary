"use strict";
n.r(t), n.d(t, { openPlayground: () => d, openPlaygroundFromParsedUrl: () => _ });
var r = n(398590),
    i = n(790271),
    a = n(186111),
    s = n(944771),
    o = n(3258),
    l = n(652215);
function u(e) {
    for (let t of s.componentPlaygroundConfigs) {
        let n = t.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
        if (null != n) return n.id;
    }
    return null;
}
function c(e, t) {
    for (let n of s.componentPlaygroundConfigs) {
        let r = n.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
        if (null != r)
            for (let e of r.groups) {
                let n = e.stories.find((e) => e.id.toLowerCase() === t.toLowerCase());
                if (null != n) return n.id;
            }
    }
    return null;
}
function d(e, t) {
    if (!(0, i.mz)("playground_open")) return !1;
    let n = null != e ? u(e) : null,
        s = null != n && null != t ? c(n, t) : null;
    return (
        o.PlaygroundStore.setState({ selectedCollection: n, selectedStory: s }),
        a.A.getLayers().includes(l.zgK.COMPONENT_PLAYGROUND) || (0, r.id)(l.zgK.COMPONENT_PLAYGROUND),
        !0
    );
}
function _(e) {
    let { match: t } = e;
    return d(t.collection, t.story);
}
