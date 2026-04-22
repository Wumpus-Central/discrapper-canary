"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(847374),
    l = n(177953),
    u = n(367513),
    d = n(709562),
    c = n(985018),
    _ = n(139352);
function f(e) {
    let { className: t, isVertical: n } = e;
    return (0, r.jsxs)("div", {
        className: _.zc,
        children: [
            (0, r.jsx)(o.a, { size: "md", color: "currentColor", className: a()(n ? _.pL : _.RJ, t) }),
            (0, r.jsx)(l.n, { size: "md", color: "currentColor", className: a()(_.ol, t) }),
        ],
    });
}
function E(e) {
    let { className: t, isVertical: n } = e;
    return (0, r.jsxs)("div", {
        className: _.zc,
        children: [
            (0, r.jsx)(o.a, { size: "md", color: "currentColor", className: a()(n ? _.iy : _.Yr, t) }),
            n && (0, r.jsx)(l.n, { size: "md", color: "currentColor", className: a()(_.ol, t) }),
        ],
    });
}
function h(e) {
    let { channelId: t, className: n, isParticipantsOpen: s, isVertical: o = !1, hideTooltip: l = !1 } = e,
        h = i.useCallback(
            (e) => {
                let { className: t } = e;
                return s
                    ? (0, r.jsx)(E, { className: t, isVertical: o })
                    : (0, r.jsx)(f, { className: t, isVertical: o });
            },
            [s, o],
        );
    return (0, r.jsx)(d.A, {
        label: s ? c.intl.string(c.t.QJMRUB) : c.intl.string(c.t.vZiwmG),
        className: a()(_.N9, n),
        onClick: function () {
            u.A.toggleParticipants(t, !s);
        },
        iconComponent: h,
        shouldShowTooltip: !l,
    });
}
