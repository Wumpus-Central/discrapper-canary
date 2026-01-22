n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(367513),
    c = n(709562),
    u = n(985018),
    d = n(232163);
function f(e) {
    let { className: t, isVertical: n } = e;
    return (0, r.jsxs)("div", {
        className: d.zc,
        children: [
            (0, r.jsx)(o.abt, {
                size: "md",
                color: "currentColor",
                className: s()(n ? d.pL : d.RJ, t),
            }),
            (0, r.jsx)(o.nFg, {
                size: "md",
                color: "currentColor",
                className: s()(d.ol, t),
            }),
        ],
    });
}
function p(e) {
    let { className: t, isVertical: n } = e;
    return (0, r.jsxs)("div", {
        className: d.zc,
        children: [
            (0, r.jsx)(o.abt, {
                size: "md",
                color: "currentColor",
                className: s()(n ? d.iy : d.Yr, t),
            }),
            n &&
                (0, r.jsx)(o.nFg, {
                    size: "md",
                    color: "currentColor",
                    className: s()(d.ol, t),
                }),
        ],
    });
}
function _(e) {
    let { channelId: t, className: n, isParticipantsOpen: a, isVertical: o = !1, hideTooltip: _ = !1 } = e;
    function h() {
        l.A.toggleParticipants(t, !a);
    }
    let m = i.useCallback(
        (e) => {
            let { className: t } = e;
            return a
                ? (0, r.jsx)(p, {
                      className: t,
                      isVertical: o,
                  })
                : (0, r.jsx)(f, {
                      className: t,
                      isVertical: o,
                  });
        },
        [a, o],
    );
    return (0, r.jsx)(c.A, {
        label: a ? u.intl.string(u.t.QJMRUB) : u.intl.string(u.t.vZiwmG),
        className: s()(d.N9, n),
        onClick: h,
        iconComponent: m,
        shouldShowTooltip: !_,
    });
}
