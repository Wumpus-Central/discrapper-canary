n.d(t, { Ay: () => S, ME: () => b, c5: () => y });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(17928),
    s = n(990078),
    c = n(460905),
    d = n(110384),
    u = n(365199),
    _ = n(101555),
    h = n(495544),
    p = n(570287),
    f = n(679492),
    m = n(518477),
    A = n(985018),
    g = n(172432);
let b = 2700,
    y = "> -# *",
    E = {
        [m.dS.AVATAR]: () => A.intl.string(A.t["fEUP/i"]),
        [m.dS.STATUS]: () => A.intl.string(A.t.TKdBC8),
        [m.dS.ACTIVITY]: () => A.intl.string(A.t.bSe71F),
    },
    v = {
        [m.dS.AVATAR]: () => A.intl.string(A.t.xvN0fV),
        [m.dS.STATUS]: () => A.intl.string(A.t["C/vzS7"]),
        [m.dS.ACTIVITY]: () => A.intl.string(A.t.ObfsSj),
    };
function S(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: a,
            isExpandable: b,
            interactionSourceId: y,
            targetRef: S,
            onAction: I,
            renderMoreButtonPopout: T,
        } = e,
        C = r.useRef(null),
        x = (0, o.bG)([h.default], () => h.default.getId() === t.id),
        R = (0, p.A)(t.id),
        { onInteraction: w, onInteractionPopoutTargetRefChange: L } = (0, f.Pq)();
    return t.bot || x || !R
        ? null
        : (0, i.jsxs)(_.Ay, {
              className: l()(g.oO, {
                  [g.RK]: a,
                  [g.lu]: b,
                  [g.U7]: n === m.dS.STATUS,
                  [g.nL]: n === m.dS.AVATAR,
                  [g.bt]: n === m.dS.ACTIVITY,
              }),
              children: [
                  (0, i.jsx)(s.m, {
                      asContainer: !0,
                      text: A.intl.string(A.t.nhaI4b),
                      shouldShow: a,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(_.$n, {
                          onClick: () => {
                              L(S),
                                  n === m.dS.AVATAR
                                      ? I({ action: "PRESS_REACT_AVATAR" })
                                      : n === m.dS.STATUS
                                        ? I({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : I({ action: "PRESS_REACT_ACTIVITY" }),
                                  w?.({ interactionType: m.AQ.REACT, interactionSource: n, interactionSourceId: y });
                          },
                          className: g.x6,
                          "aria-label": E[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(c.n, { size: "xs", className: g.Kk }),
                      }),
                  }),
                  (0, i.jsx)(s.m, {
                      asContainer: !0,
                      text: A.intl.string(A.t.RmDYKK),
                      shouldShow: a,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(_.$n, {
                          onClick: () => {
                              L(S),
                                  n === m.dS.AVATAR
                                      ? I({ action: "PRESS_REPLY_AVATAR" })
                                      : n === m.dS.STATUS
                                        ? I({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : I({ action: "PRESS_REPLY_ACTIVITY" }),
                                  w?.({ interactionType: m.AQ.REPLY, interactionSource: n, interactionSourceId: y });
                          },
                          className: g.x6,
                          "aria-label": v[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(d.W, { size: "xs", className: g.Kk }),
                      }),
                  }),
                  T?.((e) =>
                      (0, i.jsx)(s.m, {
                          asContainer: !0,
                          text: A.intl.string(A.t["UKOtz+"]),
                          shouldShow: a,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, i.jsx)(_.$n, {
                              ref: C,
                              ...e,
                              onClick: () => {
                                  L(C), e.onClick?.();
                              },
                              className: g.x6,
                              "aria-label": A.intl.string(A.t["UKOtz+"]),
                              children: (0, i.jsx)(u.j, { size: "xs", className: g.Kk }),
                          }),
                      }),
                  ),
              ],
          });
}
