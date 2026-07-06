n.d(e, { Ay: () => I, ME: () => h, c5: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(17928),
    u = n(990078),
    o = n(460905),
    c = n(110384),
    d = n(365199),
    S = n(101555),
    A = n(280450),
    T = n(570287),
    C = n(679492),
    f = n(518477),
    g = n(375708),
    R = n(172432);
let h = 2700,
    x = "> -# *",
    b = {
        [f.dS.AVATAR]: () => g.intl.string(g.t["fEUP/i"]),
        [f.dS.STATUS]: () => g.intl.string(g.t.TKdBC8),
        [f.dS.ACTIVITY]: () => g.intl.string(g.t.bSe71F),
    },
    p = {
        [f.dS.AVATAR]: () => g.intl.string(g.t.xvN0fV),
        [f.dS.STATUS]: () => g.intl.string(g.t["C/vzS7"]),
        [f.dS.ACTIVITY]: () => g.intl.string(g.t.ObfsSj),
    };
function I(t) {
    let {
            user: e,
            sourceType: n,
            isVisible: a,
            isExpandable: h,
            interactionSourceId: x,
            targetRef: I,
            onAction: k,
            renderMoreButtonPopout: m,
        } = t,
        E = l.useRef(null),
        P = (0, s.bG)([A.default], () => A.default.getId() === e.id),
        U = (0, T.A)(e.id),
        { onInteraction: _, onInteractionPopoutTargetRefChange: j } = (0, C.Pq)();
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
                          onClick: () => {
                              j(I),
                                  n === f.dS.AVATAR
                                      ? k({ action: "PRESS_REACT_AVATAR" })
                                      : n === f.dS.STATUS
                                        ? k({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : k({ action: "PRESS_REACT_ACTIVITY" }),
                                  _?.({ interactionType: f.AQ.REACT, interactionSource: n, interactionSourceId: x });
                          },
                          className: R.x6,
                          "aria-label": b[n](),
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
                          onClick: () => {
                              j(I),
                                  n === f.dS.AVATAR
                                      ? k({ action: "PRESS_REPLY_AVATAR" })
                                      : n === f.dS.STATUS
                                        ? k({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : k({ action: "PRESS_REPLY_ACTIVITY" }),
                                  _?.({ interactionType: f.AQ.REPLY, interactionSource: n, interactionSourceId: x });
                          },
                          className: R.x6,
                          "aria-label": p[n](),
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
                                  j(E), t.onClick?.();
                              },
                              className: R.x6,
                              "aria-label": g.intl.string(g.t["UKOtz+"]),
                              children: (0, i.jsx)(d.j, { size: "xs", className: R.Kk }),
                          }),
                      }),
                  ),
              ],
          });
}
