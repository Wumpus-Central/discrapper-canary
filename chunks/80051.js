"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(847374),
    l = n(177953),
    u = n(367513),
    c = n(204651),
    d = n(375708),
    _ = n(139352);
function h(e) {
    let { className: t, isVertical: n } = e;
    return (0, i.jsxs)("div", {
        className: _.zc,
        children: [
            (0, i.jsx)(o.a, { size: "md", color: "currentColor", className: a()(n ? _.pL : _.RJ, t) }),
            (0, i.jsx)(l.n, { size: "md", color: "currentColor", className: a()(_.ol, t) }),
        ],
    });
}
function f(e) {
    let { className: t, isVertical: n } = e;
    return (0, i.jsxs)("div", {
        className: _.zc,
        children: [
            (0, i.jsx)(o.a, { size: "md", color: "currentColor", className: a()(n ? _.iy : _.Yr, t) }),
            n && (0, i.jsx)(l.n, { size: "md", color: "currentColor", className: a()(_.ol, t) }),
        ],
    });
}
function p(e) {
    let { channelId: t, className: n, isParticipantsOpen: s, isVertical: o = !1, hideTooltip: l = !1 } = e,
        p = r.useCallback(
            (e) => {
                let { className: t } = e;
                return s
                    ? (0, i.jsx)(f, { className: t, isVertical: o })
                    : (0, i.jsx)(h, { className: t, isVertical: o });
            },
            [s, o],
        );
    return (0, i.jsx)(c.A, {
        label: s ? d.intl.string(d.t.QJMRUB) : d.intl.string(d.t.vZiwmG),
        className: a()(_.N9, n),
        onClick: function () {
            u.A.toggleParticipants(t, !s);
        },
        iconComponent: p,
        shouldShowTooltip: !l,
    });
}
