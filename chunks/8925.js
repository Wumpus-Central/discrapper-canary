"use strict";
n.d(t, { Ay: () => T, ME: () => g, c5: () => E });
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
    p = n(518477),
    h = n(985018),
    m = n(55837);
let g = 2700,
    E = "> -# *",
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
            isVisible: a,
            isExpandable: g,
            interactionSourceId: E,
            targetRef: T,
            onAction: y,
            renderMoreButtonPopout: S,
        } = e,
        v = i.useRef(null),
        C = (0, o.bG)([d.default], () => d.default.getId() === t.id),
        b = (0, _.A)(t.id),
        { onInteraction: N, onInteractionPopoutTargetRefChange: R } = (0, f.Pq)();
    if (t.bot || C || !b) return null;
    let O = () => {
            R(T),
                n === p.dS.AVATAR
                    ? y({ action: "PRESS_REACT_AVATAR" })
                    : n === p.dS.STATUS
                      ? y({ action: "PRESS_REACT_CUSTOM_STATUS" })
                      : y({ action: "PRESS_REACT_ACTIVITY" }),
                N?.({ interactionType: p.AQ.REACT, interactionSource: n, interactionSourceId: E });
        },
        D = () => {
            R(T),
                n === p.dS.AVATAR
                    ? y({ action: "PRESS_REPLY_AVATAR" })
                    : n === p.dS.STATUS
                      ? y({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                      : y({ action: "PRESS_REPLY_ACTIVITY" }),
                N?.({ interactionType: p.AQ.REPLY, interactionSource: n, interactionSourceId: E });
        };
    return (0, r.jsxs)(c.Ay, {
        className: s()(m.oO, {
            [m.RK]: a,
            [m.lu]: g,
            [m.U7]: n === p.dS.STATUS,
            [m.nL]: n === p.dS.AVATAR,
            [m.bt]: n === p.dS.ACTIVITY,
        }),
        children: [
            (0, r.jsx)(l.m, {
                asContainer: !0,
                text: h.intl.string(h.t.nhaI4b),
                shouldShow: a,
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
                shouldShow: a,
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
            S?.((e) => {
                let t = () => {
                    R(v), e.onClick?.();
                };
                return (0, r.jsx)(l.m, {
                    asContainer: !0,
                    text: h.intl.string(h.t["UKOtz+"]),
                    shouldShow: a,
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
