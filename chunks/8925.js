"use strict";
n.d(t, { Ay: () => N, ME: () => A, c5: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(990078),
    d = n(460905),
    _ = n(110384),
    u = n(365199),
    c = n(101555),
    E = n(495544),
    h = n(570287),
    m = n(679492),
    f = n(518477),
    g = n(985018),
    p = n(172432);
let A = 2700,
    I = "> -# *",
    T = {
        [f.dS.AVATAR]: () => g.intl.string(g.t["fEUP/i"]),
        [f.dS.STATUS]: () => g.intl.string(g.t.TKdBC8),
        [f.dS.ACTIVITY]: () => g.intl.string(g.t.bSe71F),
    },
    S = {
        [f.dS.AVATAR]: () => g.intl.string(g.t.xvN0fV),
        [f.dS.STATUS]: () => g.intl.string(g.t["C/vzS7"]),
        [f.dS.ACTIVITY]: () => g.intl.string(g.t.ObfsSj),
    };
function N(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: s,
            isExpandable: A,
            interactionSourceId: I,
            targetRef: N,
            onAction: C,
            renderMoreButtonPopout: R,
        } = e,
        O = r.useRef(null),
        y = (0, o.bG)([E.default], () => E.default.getId() === t.id),
        v = (0, h.A)(t.id),
        { onInteraction: D, onInteractionPopoutTargetRefChange: L } = (0, m.Pq)();
    return t.bot || y || !v
        ? null
        : (0, i.jsxs)(c.Ay, {
              className: a()(p.oO, {
                  [p.RK]: s,
                  [p.lu]: A,
                  [p.U7]: n === f.dS.STATUS,
                  [p.nL]: n === f.dS.AVATAR,
                  [p.bt]: n === f.dS.ACTIVITY,
              }),
              children: [
                  (0, i.jsx)(l.m, {
                      asContainer: !0,
                      text: g.intl.string(g.t.nhaI4b),
                      shouldShow: s,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(c.$n, {
                          onClick: () => {
                              L(N),
                                  n === f.dS.AVATAR
                                      ? C({ action: "PRESS_REACT_AVATAR" })
                                      : n === f.dS.STATUS
                                        ? C({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : C({ action: "PRESS_REACT_ACTIVITY" }),
                                  D?.({ interactionType: f.AQ.REACT, interactionSource: n, interactionSourceId: I });
                          },
                          className: p.x6,
                          "aria-label": T[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(d.n, { size: "xs", className: p.Kk }),
                      }),
                  }),
                  (0, i.jsx)(l.m, {
                      asContainer: !0,
                      text: g.intl.string(g.t.RmDYKK),
                      shouldShow: s,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(c.$n, {
                          onClick: () => {
                              L(N),
                                  n === f.dS.AVATAR
                                      ? C({ action: "PRESS_REPLY_AVATAR" })
                                      : n === f.dS.STATUS
                                        ? C({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : C({ action: "PRESS_REPLY_ACTIVITY" }),
                                  D?.({ interactionType: f.AQ.REPLY, interactionSource: n, interactionSourceId: I });
                          },
                          className: p.x6,
                          "aria-label": S[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(_.W, { size: "xs", className: p.Kk }),
                      }),
                  }),
                  R?.((e) =>
                      (0, i.jsx)(l.m, {
                          asContainer: !0,
                          text: g.intl.string(g.t["UKOtz+"]),
                          shouldShow: s,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, i.jsx)(c.$n, {
                              ref: O,
                              ...e,
                              onClick: () => {
                                  L(O), e.onClick?.();
                              },
                              className: p.x6,
                              "aria-label": g.intl.string(g.t["UKOtz+"]),
                              children: (0, i.jsx)(u.j, { size: "xs", className: p.Kk }),
                          }),
                      }),
                  ),
              ],
          });
}
