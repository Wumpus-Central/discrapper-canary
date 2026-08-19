n.d(e, { Ay: () => p, ME: () => h, c5: () => x });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(17928),
    u = n(866665),
    o = n(460905),
    c = n(110384),
    d = n(365199),
    S = n(101555),
    A = n(280450),
    T = n(570287),
    C = n(679492),
    f = n(518477),
    g = n(375708),
    R = n(47119);
let h = 2700,
    x = "> -# *",
    I = {
        [f.dS.AVATAR]: () => g.intl.string(g.t["fEUP/i"]),
        [f.dS.STATUS]: () => g.intl.string(g.t.TKdBC8),
        [f.dS.ACTIVITY]: () => g.intl.string(g.t.bSe71F),
    },
    b = {
        [f.dS.AVATAR]: () => g.intl.string(g.t.xvN0fV),
        [f.dS.STATUS]: () => g.intl.string(g.t["C/vzS7"]),
        [f.dS.ACTIVITY]: () => g.intl.string(g.t.ObfsSj),
    };
function p(t) {
    let {
            user: e,
            sourceType: n,
            isVisible: a,
            isExpandable: h,
            interactionSourceId: x,
            targetRef: p,
            onAction: k,
            renderMoreButtonPopout: m,
        } = t,
        E = l.useRef(null),
        P = (0, s.bG)([A.default], () => A.default.getId() === e.id),
        U = (0, T.A)(e.id),
        { onInteraction: _, onInteractionPopoutTargetRefChange: V } = (0, C.Pq)();
    return e.bot || P || !U
        ? null
        : (0, i.jsxs)(S.Ay, {
              className: r()(R.oO, {
                  [R.RK]: a,
                  [R.lu]: h,
                  [R.U7]: n === f.dS.STATUS,
                  [R.nL]: n === f.dS.AVATAR,
                  [R.bt]: n === f.dS.ACTIVITY,
              }),
              children: [
                  (0, i.jsx)(u.m, {
                      asContainer: !0,
                      text: g.intl.string(g.t.nhaI4b),
                      shouldShow: a,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(S.$n, {
                          onClick: function () {
                              V(p),
                                  n === f.dS.AVATAR
                                      ? k({ action: "PRESS_REACT_AVATAR" })
                                      : n === f.dS.STATUS
                                        ? k({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : k({ action: "PRESS_REACT_ACTIVITY" }),
                                  _?.({ interactionType: f.AQ.REACT, interactionSource: n, interactionSourceId: x });
                          },
                          className: R.x6,
                          "aria-label": I[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(o.n, { size: "xs", className: R.Kk }),
                      }),
                  }),
                  (0, i.jsx)(u.m, {
                      asContainer: !0,
                      text: g.intl.string(g.t.RmDYKK),
                      shouldShow: a,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(S.$n, {
                          onClick: function () {
                              V(p),
                                  n === f.dS.AVATAR
                                      ? k({ action: "PRESS_REPLY_AVATAR" })
                                      : n === f.dS.STATUS
                                        ? k({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : k({ action: "PRESS_REPLY_ACTIVITY" }),
                                  _?.({ interactionType: f.AQ.REPLY, interactionSource: n, interactionSourceId: x });
                          },
                          className: R.x6,
                          "aria-label": b[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(c.W, { size: "xs", className: R.Kk }),
                      }),
                  }),
                  m?.((t) =>
                      (0, i.jsx)(u.m, {
                          asContainer: !0,
                          text: g.intl.string(g.t["UKOtz+"]),
                          shouldShow: a,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, i.jsx)(S.$n, {
                              ref: E,
                              ...t,
                              onClick: function () {
                                  V(E), t.onClick?.();
                              },
                              className: R.x6,
                              "aria-label": g.intl.string(g.t["UKOtz+"]),
                              children: (0, i.jsx)(d.MoreHorizontalIcon, { size: "xs", className: R.Kk }),
                          }),
                      }),
                  ),
              ],
          });
}
