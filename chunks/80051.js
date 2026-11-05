var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(847374),
    o = n(177953),
    d = n(367513),
    c = n(693409),
    u = n(792996),
    _ = n(730393);
function E(e) {
    let { className: t, isVertical: n } = e;
    return (0, i.jsxs)("div", {
        className: _.zc,
        children: [
            (0, i.jsx)(l.ChevronSmallDownIcon, {
                size: "md",
                color: "currentColor",
                className: s()(n ? _.pL : _.RJ, t),
            }),
            (0, i.jsx)(o.GroupIcon, { size: "md", color: "currentColor", className: s()(_.ol, t) }),
        ],
    });
}
function A(e) {
    let { className: t, isVertical: n } = e;
    return (0, i.jsxs)("div", {
        className: _.zc,
        children: [
            (0, i.jsx)(l.ChevronSmallDownIcon, {
                size: "md",
                color: "currentColor",
                className: s()(n ? _.iy : _.Yr, t),
            }),
            n && (0, i.jsx)(o.GroupIcon, { size: "md", color: "currentColor", className: s()(_.ol, t) }),
        ],
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, className: n, isParticipantsOpen: a, isVertical: l = !1, hideTooltip: o = !1 } = e,
                f = r.useCallback(
                    (e) => {
                        let { className: t } = e;
                        return a
                            ? (0, i.jsx)(A, { className: t, isVertical: l })
                            : (0, i.jsx)(E, { className: t, isVertical: l });
                    },
                    [a, l],
                );
            return (0, i.jsx)(c.A, {
                label: a ? u.intl.string(u.t.QJMRUB) : u.intl.string(u.t.vZiwmG),
                className: s()(_.N9, n),
                onClick: function (e) {
                    (e.stopPropagation(), d.A.toggleParticipants(t, !a));
                },
                iconComponent: f,
                shouldShowTooltip: !o,
            });
        },
    },
);
