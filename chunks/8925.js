n.d(t, { Ay: () => v, ME: () => E, c5: () => _ });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(990078),
    u = n(460905),
    c = n(110384),
    d = n(365199),
    m = n(101555),
    h = n(495544),
    g = n(570287),
    f = n(679492),
    x = n(518477),
    p = n(375708),
    A = n(172432);
let E = 2700,
    _ = "> -# *",
    N = {
        [x.dS.AVATAR]: () => p.intl.string(p.t["fEUP/i"]),
        [x.dS.STATUS]: () => p.intl.string(p.t.TKdBC8),
        [x.dS.ACTIVITY]: () => p.intl.string(p.t.bSe71F),
    },
    j = {
        [x.dS.AVATAR]: () => p.intl.string(p.t.xvN0fV),
        [x.dS.STATUS]: () => p.intl.string(p.t["C/vzS7"]),
        [x.dS.ACTIVITY]: () => p.intl.string(p.t.ObfsSj),
    };
function v(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: s,
            isExpandable: E,
            interactionSourceId: _,
            targetRef: v,
            onAction: I,
            renderMoreButtonPopout: C,
        } = e,
        S = i.useRef(null),
        T = (0, a.bG)([h.default], () => h.default.getId() === t.id),
        y = (0, g.A)(t.id),
        { onInteraction: b, onInteractionPopoutTargetRefChange: R } = (0, f.Pq)();
    return t.bot || T || !y
        ? null
        : (0, l.jsxs)(m.Ay, {
              className: r()(A.oO, {
                  [A.RK]: s,
                  [A.lu]: E,
                  [A.U7]: n === x.dS.STATUS,
                  [A.nL]: n === x.dS.AVATAR,
                  [A.bt]: n === x.dS.ACTIVITY,
              }),
              children: [
                  (0, l.jsx)(o.m, {
                      asContainer: !0,
                      text: p.intl.string(p.t.nhaI4b),
                      shouldShow: s,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(m.$n, {
                          onClick: () => {
                              R(v),
                                  n === x.dS.AVATAR
                                      ? I({ action: "PRESS_REACT_AVATAR" })
                                      : n === x.dS.STATUS
                                        ? I({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : I({ action: "PRESS_REACT_ACTIVITY" }),
                                  b?.({ interactionType: x.AQ.REACT, interactionSource: n, interactionSourceId: _ });
                          },
                          className: A.x6,
                          "aria-label": N[n](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(u.n, { size: "xs", className: A.Kk }),
                      }),
                  }),
                  (0, l.jsx)(o.m, {
                      asContainer: !0,
                      text: p.intl.string(p.t.RmDYKK),
                      shouldShow: s,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, l.jsx)(m.$n, {
                          onClick: () => {
                              R(v),
                                  n === x.dS.AVATAR
                                      ? I({ action: "PRESS_REPLY_AVATAR" })
                                      : n === x.dS.STATUS
                                        ? I({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : I({ action: "PRESS_REPLY_ACTIVITY" }),
                                  b?.({ interactionType: x.AQ.REPLY, interactionSource: n, interactionSourceId: _ });
                          },
                          className: A.x6,
                          "aria-label": j[n](),
                          "aria-haspopup": "dialog",
                          children: (0, l.jsx)(c.W, { size: "xs", className: A.Kk }),
                      }),
                  }),
                  C?.((e) =>
                      (0, l.jsx)(o.m, {
                          asContainer: !0,
                          text: p.intl.string(p.t["UKOtz+"]),
                          shouldShow: s,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, l.jsx)(m.$n, {
                              ref: S,
                              ...e,
                              onClick: function () {
                                  R(S), e.onClick?.();
                              },
                              className: A.x6,
                              "aria-label": p.intl.string(p.t["UKOtz+"]),
                              children: (0, l.jsx)(d.j, { size: "xs", className: A.Kk }),
                          }),
                      }),
                  ),
              ],
          });
}
