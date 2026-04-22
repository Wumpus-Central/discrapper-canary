"use strict";
n.d(t, { Ay: () => S, ME: () => E, c5: () => I });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(990078),
    c = n(460905),
    u = n(110384),
    d = n(365199),
    h = n(101555),
    _ = n(961350),
    p = n(570287),
    A = n(679492),
    f = n(518477),
    m = n(985018),
    g = n(172432);
let E = 2700,
    I = "> -# *",
    v = {
        [f.dS.AVATAR]: () => m.intl.string(m.t["fEUP/i"]),
        [f.dS.STATUS]: () => m.intl.string(m.t.TKdBC8),
        [f.dS.ACTIVITY]: () => m.intl.string(m.t.bSe71F),
    },
    b = {
        [f.dS.AVATAR]: () => m.intl.string(m.t.xvN0fV),
        [f.dS.STATUS]: () => m.intl.string(m.t["C/vzS7"]),
        [f.dS.ACTIVITY]: () => m.intl.string(m.t.ObfsSj),
    };
function S(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: l,
            isExpandable: E,
            interactionSourceId: I,
            targetRef: S,
            onAction: T,
            renderMoreButtonPopout: y,
        } = e,
        C = r.useRef(null),
        x = (0, s.bG)([_.default], () => _.default.getId() === t.id),
        R = (0, p.A)(t.id),
        { onInteraction: w, onInteractionPopoutTargetRefChange: N } = (0, A.Pq)();
    return t.bot || x || !R
        ? null
        : (0, i.jsxs)(h.Ay, {
              className: a()(g.oO, {
                  [g.RK]: l,
                  [g.lu]: E,
                  [g.U7]: n === f.dS.STATUS,
                  [g.nL]: n === f.dS.AVATAR,
                  [g.bt]: n === f.dS.ACTIVITY,
              }),
              children: [
                  (0, i.jsx)(o.m, {
                      asContainer: !0,
                      text: m.intl.string(m.t.nhaI4b),
                      shouldShow: l,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(h.$n, {
                          onClick: () => {
                              N(S),
                                  n === f.dS.AVATAR
                                      ? T({ action: "PRESS_REACT_AVATAR" })
                                      : n === f.dS.STATUS
                                        ? T({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : T({ action: "PRESS_REACT_ACTIVITY" }),
                                  w?.({ interactionType: f.AQ.REACT, interactionSource: n, interactionSourceId: I });
                          },
                          className: g.x6,
                          "aria-label": v[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(c.n, { size: "xs", className: g.Kk }),
                      }),
                  }),
                  (0, i.jsx)(o.m, {
                      asContainer: !0,
                      text: m.intl.string(m.t.RmDYKK),
                      shouldShow: l,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(h.$n, {
                          onClick: () => {
                              N(S),
                                  n === f.dS.AVATAR
                                      ? T({ action: "PRESS_REPLY_AVATAR" })
                                      : n === f.dS.STATUS
                                        ? T({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : T({ action: "PRESS_REPLY_ACTIVITY" }),
                                  w?.({ interactionType: f.AQ.REPLY, interactionSource: n, interactionSourceId: I });
                          },
                          className: g.x6,
                          "aria-label": b[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(u.W, { size: "xs", className: g.Kk }),
                      }),
                  }),
                  y?.((e) =>
                      (0, i.jsx)(o.m, {
                          asContainer: !0,
                          text: m.intl.string(m.t["UKOtz+"]),
                          shouldShow: l,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, i.jsx)(h.$n, {
                              ref: C,
                              ...e,
                              onClick: () => {
                                  N(C), e.onClick?.();
                              },
                              className: g.x6,
                              "aria-label": m.intl.string(m.t["UKOtz+"]),
                              children: (0, i.jsx)(d.j, { size: "xs", className: g.Kk }),
                          }),
                      }),
                  ),
              ],
          });
}
