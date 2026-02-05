"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(942381),
    l = n(375499),
    u = n(151271),
    c = n(355622),
    d = n(698279),
    _ = n(111314);
function f(e, t) {
    let { disabled: n, type: a, channelId: f } = e,
        [p, h, m, g] = (0, u.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x),
        E = a === c.oU.NORMAL,
        A = i.useCallback(() => {
            (0, u.r$)(d.kx.EMOJI, a, f);
        }, [a, f]);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: s()(d.VQ, _.UD),
              ref: t,
              children: (0, r.jsx)(l.A, {
                  className: _.Z8,
                  onClick: A,
                  active: p === d.kx.EMOJI && h === a && g === f,
                  "aria-controls": m,
                  tabIndex: 0,
                  focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  canShowNUXPremiumTooltip: E,
              }),
          });
}
let p = i.memo(i.forwardRef(f));
