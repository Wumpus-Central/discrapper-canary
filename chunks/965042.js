"use strict";
n.r(t), n.d(t, { openPlayground: () => d, openPlaygroundFromParsedUrl: () => _ });
var r = n(398590),
    i = n(186111),
    a = n(287809),
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
    let n = a.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return !1;
    let s = null != e ? u(e) : null,
        d = null != s && null != t ? c(s, t) : null;
    return (
        o.PlaygroundStore.setState({ selectedCollection: s, selectedStory: d }),
        i.A.getLayers().includes(l.zgK.COMPONENT_PLAYGROUND) || (0, r.id)(l.zgK.COMPONENT_PLAYGROUND),
        !0
    );
}
function _(e) {
    let { match: t } = e;
    return d(t.collection, t.story);
}
