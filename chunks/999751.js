"use strict";
n.d(t, { A: () => y });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(990078),
    o = n(200192),
    d = n(526701),
    c = n(522937),
    u = n(653766),
    _ = n(922016),
    E = n(939249),
    A = n(793574),
    h = n(384059),
    I = n(917592),
    f = n(978171),
    p = n(834730),
    T = n(29160),
    m = n(375708),
    g = n(873054);
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
    C = n(754865);
let R = { [N.vkP.CONNECTED]: C.nf, [N.vkP.CONNECTING]: C._6, [N.vkP.ERROR]: C.Il },
    O = { [N.bFR.FINE]: C.LP, [N.bFR.AVERAGE]: C.mq, [N.bFR.BAD]: C.yA, [N.bFR.UNKNOWN]: null },
    L = { [N.bFR.FINE]: o.Q, [N.bFR.AVERAGE]: d.j, [N.bFR.BAD]: c.R, [N.bFR.UNKNOWN]: u.e };
function D(e) {
    let { quality: t, largePing: n, ...r } = e,
        a = L[t];
    return (0, i.jsx)(a, { className: s()(C.hU, { [C.kV]: n }), ...r });
}
function y(e) {
    let {
            quality: t,
            lastPing: n,
            state: a,
            className: o,
            children: d,
            channelId: c,
            childrenAsSubtitle: u,
            connectionStatusTextVariant: p,
            hasVideo: T,
        } = e,
        m = r.useRef(null),
        g = a === N.S7L.RTC_CONNECTED,
        L = r.useCallback((e) => (0, i.jsx)(f.A, { ...e, channelId: c }), [c]),
        { connectionStatus: y, connectionStatusText: v } = I.A.getStatus(a, T);
    return (0, i.jsxs)("div", {
        className: C.pe,
        children: [
            (0, i.jsx)("div", {
                className: s()(C.yH, O[t], o),
                ref: m,
                children: (0, i.jsx)(_.Y, {
                    targetElementRef: m,
                    renderPopout: L,
                    position: "top",
                    children: (e) => {
                        let { onClick: r } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                g &&
                                    (0, i.jsx)(l.m, {
                                        text: t !== N.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(E.D, {
                                            className: C.xr,
                                            onClick: (e) => {
                                                (0, h.X)(A.A.RTC_PANEL, h.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, i.jsx)(D, { quality: t, largePing: u }),
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
                                                className: R[y],
                                                hasConnectedChannel: null != c,
                                            }),
                                        }),
                                        u ? d : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            u ? null : d,
        ],
    });
}
