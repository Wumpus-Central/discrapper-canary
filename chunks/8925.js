"use strict";
n.d(t, { Ay: () => y, ME: () => A, c5: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(990078),
    u = n(460905),
    c = n(110384),
    d = n(365199),
    _ = n(101555),
    h = n(495544),
    f = n(570287),
    p = n(679492),
    E = n(518477),
    m = n(375708),
    g = n(572368);
let A = 2700,
    I = "> -# *",
    T = {
        [E.dS.AVATAR]: () => m.intl.string(m.t["fEUP/i"]),
        [E.dS.STATUS]: () => m.intl.string(m.t.TKdBC8),
        [E.dS.ACTIVITY]: () => m.intl.string(m.t.bSe71F),
    },
    S = {
        [E.dS.AVATAR]: () => m.intl.string(m.t.xvN0fV),
        [E.dS.STATUS]: () => m.intl.string(m.t["C/vzS7"]),
        [E.dS.ACTIVITY]: () => m.intl.string(m.t.ObfsSj),
    };
function y(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: s,
            isExpandable: A,
            interactionSourceId: I,
            targetRef: y,
            onAction: C,
            renderMoreButtonPopout: N,
        } = e,
        v = r.useRef(null),
        R = (0, o.bG)([h.default], () => h.default.getId() === t.id),
        O = (0, f.A)(t.id),
        { onInteraction: b, onInteractionPopoutTargetRefChange: D } = (0, p.Pq)();
    return t.bot || R || !O
        ? null
        : (0, i.jsxs)(_.Ay, {
              className: a()(g.oO, {
                  [g.RK]: s,
                  [g.lu]: A,
                  [g.U7]: n === E.dS.STATUS,
                  [g.nL]: n === E.dS.AVATAR,
                  [g.bt]: n === E.dS.ACTIVITY,
              }),
              children: [
                  (0, i.jsx)(l.m, {
                      asContainer: !0,
                      text: m.intl.string(m.t.nhaI4b),
                      shouldShow: s,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(_.$n, {
                          onClick: () => {
                              D(y),
                                  n === E.dS.AVATAR
                                      ? C({ action: "PRESS_REACT_AVATAR" })
                                      : n === E.dS.STATUS
                                        ? C({ action: "PRESS_REACT_CUSTOM_STATUS" })
                                        : C({ action: "PRESS_REACT_ACTIVITY" }),
                                  b?.({ interactionType: E.AQ.REACT, interactionSource: n, interactionSourceId: I });
                          },
                          className: g.x6,
                          "aria-label": T[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(u.n, { size: "xs", className: g.Kk }),
                      }),
                  }),
                  (0, i.jsx)(l.m, {
                      asContainer: !0,
                      text: m.intl.string(m.t.RmDYKK),
                      shouldShow: s,
                      delay: 0,
                      ariaHidden: !0,
                      children: (0, i.jsx)(_.$n, {
                          onClick: () => {
                              D(y),
                                  n === E.dS.AVATAR
                                      ? C({ action: "PRESS_REPLY_AVATAR" })
                                      : n === E.dS.STATUS
                                        ? C({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                                        : C({ action: "PRESS_REPLY_ACTIVITY" }),
                                  b?.({ interactionType: E.AQ.REPLY, interactionSource: n, interactionSourceId: I });
                          },
                          className: g.x6,
                          "aria-label": S[n](),
                          "aria-haspopup": "dialog",
                          children: (0, i.jsx)(c.W, { size: "xs", className: g.Kk }),
                      }),
                  }),
                  N?.((e) =>
                      (0, i.jsx)(l.m, {
                          asContainer: !0,
                          text: m.intl.string(m.t["UKOtz+"]),
                          shouldShow: s,
                          delay: 0,
                          ariaHidden: !0,
                          children: (0, i.jsx)(_.$n, {
                              ref: v,
                              ...e,
                              onClick: function () {
                                  D(v), e.onClick?.();
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
