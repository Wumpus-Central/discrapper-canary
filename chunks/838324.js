"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(942381),
    o = n(375499),
    c = n(151271),
    u = n(355622),
    d = n(698279),
    h = n(266599);
let m = l.memo(
    l.forwardRef(function (e, t) {
        let { disabled: n, type: s, channelId: m } = e,
            [p, f, g, _] = (0, c.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], a.x),
            x = s === u.oU.NORMAL,
            A = l.useCallback(() => {
                (0, c.r$)(d.kx.EMOJI, s, m);
            }, [s, m]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: r()(d.VQ, h.UD),
                  ref: t,
                  children: (0, i.jsx)(o.A, {
                      className: h.Z8,
                      onClick: A,
                      active: p === d.kx.EMOJI && f === s && _ === m,
                      "aria-controls": g,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: x,
                  }),
              });
    }),
);
