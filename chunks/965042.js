n.r(t),
    n.d(t, {
        openPlayground: () => d,
        openPlaygroundFromParsedUrl: () => f,
    }),
    n(896048),
    n(747238);
var r = n(398590),
    i = n(186111),
    a = n(287809),
    s = n(944771),
    o = n(3258),
    l = n(652215);

function c(e) {
    for (let t of s.componentPlaygroundConfigs) {
        let n = t.collections.find((t) => t.id.toLowerCase() === e.toLowerCase());
        if (null != n) return n.id;
    }
    return null;
}

function u(e, t) {
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
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return !1;
    let s = null != e ? c(e) : null,
        d = null != s && null != t ? u(s, t) : null;
    return (
        o.PlaygroundStore.setState({
            selectedCollection: s,
            selectedStory: d,
        }),
        i.A.getLayers().includes(l.zgK.COMPONENT_PLAYGROUND) || (0, r.id)(l.zgK.COMPONENT_PLAYGROUND),
        !0
    );
}

function f(e) {
    let { match: t } = e;
    return d(t.collection, t.story);
}
