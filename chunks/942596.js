n.d(t, { Z: () => _ });
var r = n(627968),
    a = n(397927),
    o = n(933297),
    i = n(985018);
function l(e) {
    let { useCount: t } = e,
        n = t();
    return 0 === n ? null : (0, r.jsx)(a.hVq, { count: n });
}
function s(e) {
    let { getDismissibleContentTypes: t, stronglyDiscouragedBadgeComponent: n, visibleContent: o, isSelected: l } = e,
        s = t?.(),
        c = null != o && s.includes(o) && !l,
        _ = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(a.LpS, { text: i.intl.string(i.t.y2b7CA) });
    return c ? _ : null;
}
function c(e) {
    let { useCustomDecoration: t, visibleContent: n, isSelected: r } = e;
    return t(n, r);
}
function _(e) {
    let { trailing: t, visibleContent: n, isSelected: a } = e;
    if (null == t) return null;
    switch (t.type) {
        case o.S.BADGE_COUNT:
            return (0, r.jsx)(l, { ...t });
        case o.S.BADGE_NEW:
            return (0, r.jsx)(s, { ...t, visibleContent: n, isSelected: a });
        case o.S.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(c, { ...t, visibleContent: n, isSelected: a });
    }
}
