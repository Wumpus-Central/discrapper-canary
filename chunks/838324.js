"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(942381),
    l = n(375499),
    u = n(151271),
    c = n(355622),
    d = n(698279),
    _ = n(266599);
let f = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: s, channelId: f } = e,
            [p, h, E, m] = (0, u.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x),
            g = s === c.oU.NORMAL,
            A = i.useCallback(() => {
                (0, u.r$)(d.kx.EMOJI, s, f);
            }, [s, f]);
        return n
            ? null
            : (0, r.jsx)("div", {
                  className: a()(d.VQ, _.UD),
                  ref: t,
                  children: (0, r.jsx)(l.A, {
                      className: _.Z8,
                      onClick: A,
                      active: p === d.kx.EMOJI && h === s && m === f,
                      "aria-controls": E,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                      canShowNUXPremiumTooltip: g,
                  }),
              });
    }),
);
