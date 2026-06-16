n.d(t, { Ay: () => v, ME: () => E, c5: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(990078),
    c = n(460905),
    d = n(110384),
    u = n(365199),
    m = n(101555),
    h = n(495544),
    g = n(570287),
    x = n(679492),
    f = n(518477),
    p = n(375708),
    A = n(172432);
let E = 2700,
    _ = "> -# *",
    j = {
        [f.dS.AVATAR]: () => p.intl.string(p.t["fEUP/i"]),
        [f.dS.STATUS]: () => p.intl.string(p.t.TKdBC8),
        [f.dS.ACTIVITY]: () => p.intl.string(p.t.bSe71F),
    },
    N = {
        [f.dS.AVATAR]: () => p.intl.string(p.t.xvN0fV),
        [f.dS.STATUS]: () => p.intl.string(p.t["C/vzS7"]),
        [f.dS.ACTIVITY]: () => p.intl.string(p.t.ObfsSj),
    };
function v(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: s,
            isExpandable: E,
            interactionSourceId: _,
            targetRef: v,
            onAction: T,
            renderMoreButtonPopout: I,
        } = e,
        C = l.useRef(null),
        S = (0, a.bG)([h.default], () => h.default.getId() === t.id),
        b = (0, g.A)(t.id),
        { onInteraction: y, onInteractionPopoutTargetRefChange: R } = (0, x.Pq)();
    return t.bot || S || !b
        ? null
        : (0, i.jsxs)(m.Ay, {
              className: r()(A.oO, {
                  [A.RK]: s,
                  [A.lu]: E,
                  [A.U7]: n === f.dS.STATUS,
                  [A.nL]: n === f.dS.AVATAR,
                  [A.bt]: n === f.dS.ACTIVITY,
              }),
              children: [
                  (0, i.jsx)(o.m, {
                      asContainer: !0,
                      text: p.intl.string(p.t.nhaI4b),
                      shouldShow: s,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(m.$n, {
                          onClick: () => {
                              R(v),
                                  n === f.dS.AVATAR
                                      ? T({ action: "PRESS_REACT_AVATAR" })
                                      : n === f.dS.STATUS
                                        ? T({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : T({ action: "PRESS_REACT_ACTIVITY" }),
                                  y?.({ interactionType: f.AQ.REACT, interactionSource: n, interactionSourceId: _ });
                          },
                          className: A.x6,
                          "aria-label": j[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(c.n, { size: "xs", className: A.Kk }),
                      }),
                  }),
                  (0, i.jsx)(o.m, {
                      asContainer: !0,
                      text: p.intl.string(p.t.RmDYKK),
                      shouldShow: s,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(m.$n, {
                          onClick: () => {
                              R(v),
                                  n === f.dS.AVATAR
                                      ? T({ action: "PRESS_REPLY_AVATAR" })
                                      : n === f.dS.STATUS
                                        ? T({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : T({ action: "PRESS_REPLY_ACTIVITY" }),
                                  y?.({ interactionType: f.AQ.REPLY, interactionSource: n, interactionSourceId: _ });
                          },
                          className: A.x6,
                          "aria-label": N[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(d.W, { size: "xs", className: A.Kk }),
                      }),
                  }),
                  I?.((e) =>
                      (0, i.jsx)(o.m, {
                          asContainer: !0,
                          text: p.intl.string(p.t["UKOtz+"]),
                          shouldShow: s,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, i.jsx)(m.$n, {
                              ref: C,
                              ...e,
                              onClick: () => {
                                  R(C), e.onClick?.();
                              },
                              className: A.x6,
                              "aria-label": p.intl.string(p.t["UKOtz+"]),
                              children: (0, i.jsx)(u.j, { size: "xs", className: A.Kk }),
                          }),
                      }),
                  ),
              ],
          });
}
