"use strict";
n.d(t, { Ay: () => T, ME: () => E, c5: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(101555),
    d = n(961350),
    _ = n(570287),
    f = n(679492),
    p = n(518477),
    h = n(985018),
    m = n(575971);
let E = 2700,
    g = "> -# *",
    A = {
        [p.dS.AVATAR]: () => h.intl.string(h.t["fEUP/i"]),
        [p.dS.STATUS]: () => h.intl.string(h.t.TKdBC8),
        [p.dS.ACTIVITY]: () => h.intl.string(h.t.bSe71F),
    },
    I = {
        [p.dS.AVATAR]: () => h.intl.string(h.t.xvN0fV),
        [p.dS.STATUS]: () => h.intl.string(h.t["C/vzS7"]),
        [p.dS.ACTIVITY]: () => h.intl.string(h.t.ObfsSj),
    };
function T(e) {
    let {
            user: t,
            sourceType: n,
            isVisible: s,
            isExpandable: E,
            interactionSourceId: g,
            targetRef: T,
            onAction: S,
            renderMoreButtonPopout: y,
        } = e,
        v = i.useRef(null),
        N = (0, o.bG)([d.default], () => d.default.getId() === t.id),
        C = (0, _.A)(t.id),
        { onInteraction: b, onInteractionPopoutTargetRefChange: R } = (0, f.Pq)();
    if (t.bot || N || !C) return null;
    let O = () => {
            R(T),
                n === p.dS.AVATAR
                    ? S({ action: "PRESS_REACT_AVATAR" })
                    : n === p.dS.STATUS
                      ? S({ action: "PRESS_REACT_CUSTOM_STATUS" })
                      : S({ action: "PRESS_REACT_ACTIVITY" }),
                b?.({ interactionType: p.AQ.REACT, interactionSource: n, interactionSourceId: g });
        },
        D = () => {
            R(T),
                n === p.dS.AVATAR
                    ? S({ action: "PRESS_REPLY_AVATAR" })
                    : n === p.dS.STATUS
                      ? S({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                      : S({ action: "PRESS_REPLY_ACTIVITY" }),
                b?.({ interactionType: p.AQ.REPLY, interactionSource: n, interactionSourceId: g });
        };
    return (0, r.jsxs)(c.Ay, {
        className: a()(m.oO, {
            [m.RK]: s,
            [m.lu]: E,
            [m.U7]: n === p.dS.STATUS,
            [m.nL]: n === p.dS.AVATAR,
            [m.bt]: n === p.dS.ACTIVITY,
        }),
        children: [
            (0, r.jsx)(l.m, {
                asContainer: !0,
                text: h.intl.string(h.t.nhaI4b),
                shouldShow: s,
                delay: 0,
                ariaHidden: !0,
                children: (0, r.jsx)(c.$n, {
                    onClick: O,
                    className: m.x6,
                    "aria-label": A[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(u.nm2, { size: "xs", className: m.Kk }),
                }),
            }),
            (0, r.jsx)(l.m, {
                asContainer: !0,
                text: h.intl.string(h.t.RmDYKK),
                shouldShow: s,
                delay: 0,
                ariaHidden: !0,
                children: (0, r.jsx)(c.$n, {
                    onClick: D,
                    className: m.x6,
                    "aria-label": I[n](),
                    "aria-haspopup": "dialog",
                    children: (0, r.jsx)(u.W4J, { size: "xs", className: m.Kk }),
                }),
            }),
            y?.((e) => {
                let t = () => {
                    R(v), e.onClick?.();
                };
                return (0, r.jsx)(l.m, {
                    asContainer: !0,
                    text: h.intl.string(h.t["UKOtz+"]),
                    shouldShow: s,
                    delay: 0,
                    ariaHidden: !0,
                    children: (0, r.jsx)(c.$n, {
                        ref: v,
                        ...e,
                        onClick: t,
                        className: m.x6,
                        "aria-label": h.intl.string(h.t["UKOtz+"]),
                        children: (0, r.jsx)(u.jNK, { size: "xs", className: m.Kk }),
                    }),
                });
            }),
        ],
    });
}
