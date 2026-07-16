"use strict";
n.d(t, { A: () => D });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(200192),
    o = n(526701),
    d = n(522937),
    c = n(653766),
    u = n(922016),
    _ = n(866665),
    E = n(939249),
    A = n(793574),
    h = n(384059),
    I = n(917592),
    f = n(978171),
    p = n(834730),
    T = n(29160),
    m = n(375708),
    g = n(60062);
let S = function (e) {
    let { className: t, hasVideo: n, text: r, hasConnectedChannel: a, textVariant: l = "text-md/medium" } = e,
        o = n ? m.intl.string(m.t.IlHdW8) : m.intl.string(m.t.WsOisp);
    return (0, i.jsx)(T.A, {
        className: s()(t, g.H),
        hoverText: a ? (0, i.jsx)(p.E, { variant: l, color: "currentColor", children: o }) : null,
        children: (0, i.jsx)(p.E, { variant: l, color: "currentColor", children: r }),
    });
};
var N = n(652215),
    C = n(648881);
let R = { [N.vkP.CONNECTED]: C.nf, [N.vkP.CONNECTING]: C._6, [N.vkP.ERROR]: C.Il },
    O = { [N.bFR.FINE]: C.LP, [N.bFR.AVERAGE]: C.mq, [N.bFR.BAD]: C.yA, [N.bFR.UNKNOWN]: null },
    L = { [N.bFR.FINE]: l.Q, [N.bFR.AVERAGE]: o.j, [N.bFR.BAD]: d.R, [N.bFR.UNKNOWN]: c.e };
function y(e) {
    let { quality: t, largePing: n, ...r } = e,
        a = L[t];
    return (0, i.jsx)(a, { className: s()(C.hU, { [C.kV]: n }), ...r });
}
function D(e) {
    let {
            quality: t,
            lastPing: n,
            state: a,
            className: l,
            children: o,
            channelId: d,
            childrenAsSubtitle: c,
            connectionStatusTextVariant: p,
            hasVideo: T,
        } = e,
        m = r.useRef(null),
        g = a === N.S7L.RTC_CONNECTED,
        L = r.useCallback((e) => (0, i.jsx)(f.A, { ...e, channelId: d }), [d]),
        { connectionStatus: D, connectionStatusText: v } = I.A.getStatus(a, T);
    return (0, i.jsxs)("div", {
        className: C.pe,
        children: [
            (0, i.jsx)("div", {
                className: s()(C.yH, O[t], l),
                ref: m,
                children: (0, i.jsx)(u.Y, {
                    targetElementRef: m,
                    renderPopout: L,
                    position: "top",
                    children: (e) => {
                        let { onClick: r } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                g &&
                                    (0, i.jsx)(_.m, {
                                        text: t !== N.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(E.D, {
                                            className: C.xr,
                                            onClick: (e) => {
                                                (0, h.X)(A.A.RTC_PANEL, h.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, i.jsx)(y, { quality: t, largePing: c }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: C.ei,
                                    children: [
                                        (0, i.jsx)(E.D, {
                                            onClick: (e) => {
                                                (0, h.X)(A.A.RTC_PANEL, h.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, i.jsx)(S, {
                                                text: v,
                                                textVariant: p,
                                                hasVideo: T,
                                                className: R[D],
                                                hasConnectedChannel: null != d,
                                            }),
                                        }),
                                        c ? o : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            c ? null : o,
        ],
    });
}
