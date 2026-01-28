n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(942381),
    l = n(375499),
    c = n(151271),
    u = n(355622),
    d = n(698279),
    f = n(111314);

function p(e, t) {
    let { disabled: n, type: a, channelId: p } = e,
        [_, h, m, g] = (0, c.RQ)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], s.x),
        E = a === u.oU.NORMAL,
        y = i.useCallback(() => {
            (0, c.r$)(d.kx.EMOJI, a, p);
        }, [a, p]);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: o()(d.VQ, f.UD),
              ref: t,
              children: (0, r.jsx)(l.A, {
                  className: f.Z8,
                  onClick: y,
                  active: _ === d.kx.EMOJI && h === a && g === p,
                  "aria-controls": m,
                  tabIndex: 0,
                  focusProps: {
                      offset: {
                          top: 4,
                          bottom: 4,
                          left: -4,
                          right: -4,
                      },
                  },
                  canShowNUXPremiumTooltip: E,
              }),
          });
}
let _ = i.memo(i.forwardRef(p));
