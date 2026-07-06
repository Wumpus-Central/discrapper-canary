"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(200192),
    u = n(526701),
    c = n(522937),
    d = n(653766),
    _ = n(922016),
    h = n(939249),
    f = n(793574),
    E = n(384059),
    p = n(917592),
    m = n(978171),
    g = n(834730),
    A = n(29160),
    I = n(375708),
    T = n(60062);
let S = function (e) {
    let { className: t, hasVideo: n, text: r, hasConnectedChannel: s, textVariant: o = "text-md/medium" } = e,
        l = n ? I.intl.string(I.t.IlHdW8) : I.intl.string(I.t.WsOisp);
    return (0, i.jsx)(A.A, {
        className: a()(t, T.H),
        hoverText: s ? (0, i.jsx)(g.E, { variant: o, color: "currentColor", children: l }) : null,
        children: (0, i.jsx)(g.E, { variant: o, color: "currentColor", children: r }),
    });
};
var N = n(652215),
    C = n(648881);
let y = { [N.vkP.CONNECTED]: C.nf, [N.vkP.CONNECTING]: C._6, [N.vkP.ERROR]: C.Il },
    O = { [N.bFR.FINE]: C.LP, [N.bFR.AVERAGE]: C.mq, [N.bFR.BAD]: C.yA, [N.bFR.UNKNOWN]: null },
    R = { [N.bFR.FINE]: l.Q, [N.bFR.AVERAGE]: u.j, [N.bFR.BAD]: c.R, [N.bFR.UNKNOWN]: d.e };
function v(e) {
    let { quality: t, largePing: n, ...r } = e,
        s = R[t];
    return (0, i.jsx)(s, { className: a()(C.hU, { [C.kV]: n }), ...r });
}
function b(e) {
    let {
            quality: t,
            lastPing: n,
            state: s,
            className: l,
            children: u,
            channelId: c,
            childrenAsSubtitle: d,
            connectionStatusTextVariant: g,
            hasVideo: A,
        } = e,
        I = r.useRef(null),
        T = s === N.S7L.RTC_CONNECTED,
        R = r.useCallback((e) => (0, i.jsx)(m.A, { ...e, channelId: c }), [c]),
        { connectionStatus: b, connectionStatusText: L } = p.A.getStatus(s, A);
    return (0, i.jsxs)("div", {
        className: C.pe,
        children: [
            (0, i.jsx)("div", {
                className: a()(C.yH, O[t], l),
                ref: I,
                children: (0, i.jsx)(_.Y, {
                    targetElementRef: I,
                    renderPopout: R,
                    position: "top",
                    children: (e) => {
                        let { onClick: r } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                T &&
                                    (0, i.jsx)(o.m, {
                                        text: t !== N.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(h.D, {
                                            className: C.xr,
                                            onClick: (e) => {
                                                (0, E.X)(f.A.RTC_PANEL, E.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, i.jsx)(v, { quality: t, largePing: d }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: C.ei,
                                    children: [
                                        (0, i.jsx)(h.D, {
                                            onClick: (e) => {
                                                (0, E.X)(f.A.RTC_PANEL, E.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, i.jsx)(S, {
                                                text: L,
                                                textVariant: g,
                                                hasVideo: A,
                                                className: y[b],
                                                hasConnectedChannel: null != c,
                                            }),
                                        }),
                                        d ? u : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            d ? null : u,
        ],
    });
}
