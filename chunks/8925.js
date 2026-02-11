"use strict";
n.d(t, { Ay: () => y, ME: () => E, c5: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(101555),
    d = n(961350),
    _ = n(570287),
    f = n(679492),
    h = n(518477),
    p = n(985018),
    g = n(575971);
let E = 2700,
    A = "> -# *",
    I = {
        [h.dS.AVATAR]: () => p.intl.string(p.t["fEUP/i"]),
        [h.dS.STATUS]: () => p.intl.string(p.t.TKdBC8),
        [h.dS.ACTIVITY]: () => p.intl.string(p.t.bSe71F),
    },
    T = {
        [h.dS.AVATAR]: () => p.intl.string(p.t.xvN0fV),
        [h.dS.STATUS]: () => p.intl.string(p.t["C/vzS7"]),
        [h.dS.ACTIVITY]: () => p.intl.string(p.t.ObfsSj),
    };
function y(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: a,
            isExpandable: E,
            interactionSourceId: A,
            targetRef: y,
            onAction: S,
            renderMoreButtonPopout: v,
        } = e,
        C = i.useRef(null),
        b = (0, o.bG)([d.default], () => d.default.getId() === t.id),
        N = (0, _.A)(t.id),
        { onInteraction: R, onInteractionPopoutTargetRefChange: O } = (0, f.Pq)();
    if (t.bot || b || !N) return null;
    let D = () => {
            O(y),
                n === h.dS.AVATAR
                    ? S({ action: "PRESS_REACT_AVATAR" })
                    : n === h.dS.STATUS
                      ? S({ action: "PRESS_REACT_CUSTOM_STATUS" })
                      : S({ action: "PRESS_REACT_ACTIVITY" }),
                R?.({ interactionType: h.AQ.REACT, interactionSource: n, interactionSourceId: A });
        },
        L = () => {
            O(y),
                n === h.dS.AVATAR
                    ? S({ action: "PRESS_REPLY_AVATAR" })
                    : n === h.dS.STATUS
                      ? S({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                      : S({ action: "PRESS_REPLY_ACTIVITY" }),
                R?.({ interactionType: h.AQ.REPLY, interactionSource: n, interactionSourceId: A });
        };
    return (0, r.jsxs)(c.Ay, {
        className: s()(g.oO, {
            [g.RK]: a,
            [g.lu]: E,
            [g.U7]: n === h.dS.STATUS,
            [g.nL]: n === h.dS.AVATAR,
            [g.bt]: n === h.dS.ACTIVITY,
        }),
        children: [
            (0, r.jsx)(l.m, {
                asContainer: !0,
                text: p.intl.string(p.t.nhaI4b),
                shouldShow: a,
                delay: 0,
                ariaHidden: !0,
                children: (0, r.jsx)(c.$n, {
                    onClick: D,
                    className: g.x6,
                    "aria-label": I[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(u.nm2, { size: "xs", className: g.Kk }),
                }),
            }),
            (0, r.jsx)(l.m, {
                asContainer: !0,
                text: p.intl.string(p.t.RmDYKK),
                shouldShow: a,
                delay: 0,
                ariaHidden: !0,
                children: (0, r.jsx)(c.$n, {
                    onClick: L,
                    className: g.x6,
                    "aria-label": T[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(u.W4J, { size: "xs", className: g.Kk }),
                }),
            }),
            v?.((e) => {
                let t = () => {
                    O(C), e.onClick?.();
                };
                return (0, r.jsx)(l.m, {
                    asContainer: !0,
                    text: p.intl.string(p.t["UKOtz+"]),
                    shouldShow: a,
                    delay: 0,
                    ariaHidden: !0,
                    children: (0, r.jsx)(c.$n, {
                        ref: C,
                        ...e,
                        onClick: t,
                        className: g.x6,
                        "aria-label": p.intl.string(p.t["UKOtz+"]),
                        children: (0, r.jsx)(u.jNK, { size: "xs", className: g.Kk }),
                    }),
                });
            }),
        ],
    });
}
