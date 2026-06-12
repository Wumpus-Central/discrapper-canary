n.d(t, { Ay: () => I, ME: () => h, c5: () => x });
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
    A = n(495544),
    T = n(570287),
    C = n(679492),
    g = n(518477),
    f = n(375708),
    R = n(172432);
let h = 2700,
    x = "> -# *",
    b = {
        [g.dS.AVATAR]: () => f.intl.string(f.t["fEUP/i"]),
        [g.dS.STATUS]: () => f.intl.string(f.t.TKdBC8),
        [g.dS.ACTIVITY]: () => f.intl.string(f.t.bSe71F),
    },
    p = {
        [g.dS.AVATAR]: () => f.intl.string(f.t.xvN0fV),
        [g.dS.STATUS]: () => f.intl.string(f.t["C/vzS7"]),
        [g.dS.ACTIVITY]: () => f.intl.string(f.t.ObfsSj),
    };
function I(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: a,
            isExpandable: h,
            interactionSourceId: x,
            targetRef: I,
            onAction: k,
            renderMoreButtonPopout: m,
        } = e,
        E = l.useRef(null),
        P = (0, s.bG)([A.default], () => A.default.getId() === t.id),
        U = (0, T.A)(t.id),
        { onInteraction: _, onInteractionPopoutTargetRefChange: j } = (0, C.Pq)();
    return t.bot || P || !U
        ? null
        : (0, i.jsxs)(S.Ay, {
              className: r()(R.oO, {
                  [R.RK]: a,
                  [R.lu]: h,
                  [R.U7]: n === g.dS.STATUS,
                  [R.nL]: n === g.dS.AVATAR,
                  [R.bt]: n === g.dS.ACTIVITY,
              }),
              children: [
                  (0, i.jsx)(u.m, {
                      asContainer: !0,
                      text: f.intl.string(f.t.nhaI4b),
                      shouldShow: a,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(S.$n, {
                          onClick: () => {
                              j(I),
                                  n === g.dS.AVATAR
                                      ? k({ action: "PRESS_REACT_AVATAR" })
                                      : n === g.dS.STATUS
                                        ? k({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : k({ action: "PRESS_REACT_ACTIVITY" }),
                                  _?.({ interactionType: g.AQ.REACT, interactionSource: n, interactionSourceId: x });
                          },
                          className: R.x6,
                          "aria-label": b[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(o.n, { size: "xs", className: R.Kk }),
                      }),
                  }),
                  (0, i.jsx)(u.m, {
                      asContainer: !0,
                      text: f.intl.string(f.t.RmDYKK),
                      shouldShow: a,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(S.$n, {
                          onClick: () => {
                              j(I),
                                  n === g.dS.AVATAR
                                      ? k({ action: "PRESS_REPLY_AVATAR" })
                                      : n === g.dS.STATUS
                                        ? k({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : k({ action: "PRESS_REPLY_ACTIVITY" }),
                                  _?.({ interactionType: g.AQ.REPLY, interactionSource: n, interactionSourceId: x });
                          },
                          className: R.x6,
                          "aria-label": p[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(c.W, { size: "xs", className: R.Kk }),
                      }),
                  }),
                  m?.((e) =>
                      (0, i.jsx)(u.m, {
                          asContainer: !0,
                          text: f.intl.string(f.t["UKOtz+"]),
                          shouldShow: a,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, i.jsx)(S.$n, {
                              ref: E,
                              ...e,
                              onClick: () => {
                                  j(E), e.onClick?.();
                              },
                              className: R.x6,
                              "aria-label": f.intl.string(f.t["UKOtz+"]),
                              children: (0, i.jsx)(d.j, { size: "xs", className: R.Kk }),
                          }),
                      }),
                  ),
              ],
          });
}
