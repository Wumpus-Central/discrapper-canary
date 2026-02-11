n.d(t, { Z: () => u });
var r = n(627968),
    a = n(397927),
    l = n(933297),
    i = n(985018);
function s(e) {
    let { useCount: t } = e,
        n = t();
    return 0 === n ? null : (0, r.jsx)(a.hVq, { count: n });
}
function o(e) {
    let { getDismissibleContentTypes: t, stronglyDiscouragedBadgeComponent: n, visibleContent: l, isSelected: s } = e,
        o = t?.(),
        c = null != l && o.includes(l) && !s,
        u = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(a.LpS, { text: i.intl.string(i.t.y2b7CA) });
    return c ? u : null;
}
function c(e) {
    let { useCustomDecoration: t, visibleContent: n, isSelected: r } = e;
    return t(n, r);
}
function u(e) {
    let { trailing: t, visibleContent: n, isSelected: a } = e;
    if (null == t) return null;
    switch (t.type) {
        case l.Si.BADGE_COUNT:
            return (0, r.jsx)(s, { ...t });
        case l.Si.BADGE_NEW:
            return (0, r.jsx)(o, { ...t, visibleContent: n, isSelected: a });
        case l.Si.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(c, { ...t, visibleContent: n, isSelected: a });
    }
}
