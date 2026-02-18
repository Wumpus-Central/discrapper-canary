"use strict";
n.d(t, { Z: () => u });
var r = n(627968),
    i = n(397927),
    a = n(933297),
    s = n(985018);
function l(e) {
    let { useCount: t } = e,
        n = t();
    return 0 === n ? null : (0, r.jsx)(i.hVq, { count: n });
}
function o(e) {
    let { getDismissibleContentTypes: t, stronglyDiscouragedBadgeComponent: n, visibleContent: a, isSelected: l } = e,
        o = t?.(),
        c = null != a && o.includes(a) && !l,
        u = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(i.LpS, { text: s.intl.string(s.t.y2b7CA) });
    return c ? u : null;
}
function c(e) {
    let { useCustomDecoration: t, visibleContent: n, isSelected: r } = e;
    return t(n, r);
}
function u(e) {
    let { trailing: t, visibleContent: n, isSelected: i } = e;
    if (null == t) return null;
    switch (t.type) {
        case a.Si.BADGE_COUNT:
            return (0, r.jsx)(l, { ...t });
        case a.Si.BADGE_NEW:
            return (0, r.jsx)(o, { ...t, visibleContent: n, isSelected: i });
        case a.Si.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(c, { ...t, visibleContent: n, isSelected: i });
    }
}
