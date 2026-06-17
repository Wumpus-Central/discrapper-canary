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
    p = n(384059),
    E = n(917592),
    m = n(978171),
    g = n(834730),
    A = n(29160),
    I = n(375708),
    T = n(873054);
let S = function (e) {
    let { className: t, hasVideo: n, text: r, hasConnectedChannel: s, textVariant: o = "text-md/medium" } = e,
        l = n ? I.intl.string(I.t.IlHdW8) : I.intl.string(I.t.WsOisp);
    return (0, i.jsx)(A.A, {
        className: a()(t, T.H),
        hoverText: s ? (0, i.jsx)(g.E, { variant: o, color: "currentColor", children: l }) : null,
        children: (0, i.jsx)(g.E, { variant: o, color: "currentColor", children: r }),
    });
};
var y = n(652215),
    C = n(754865);
let N = { [y.vkP.CONNECTED]: C.nf, [y.vkP.CONNECTING]: C._6, [y.vkP.ERROR]: C.Il },
    v = { [y.bFR.FINE]: C.LP, [y.bFR.AVERAGE]: C.mq, [y.bFR.BAD]: C.yA, [y.bFR.UNKNOWN]: null },
    R = { [y.bFR.FINE]: l.Q, [y.bFR.AVERAGE]: u.j, [y.bFR.BAD]: c.R, [y.bFR.UNKNOWN]: d.e };
function O(e) {
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
        T = s === y.S7L.RTC_CONNECTED,
        R = r.useCallback((e) => (0, i.jsx)(m.A, { ...e, channelId: c }), [c]),
        { connectionStatus: b, connectionStatusText: D } = E.A.getStatus(s, A);
    return (0, i.jsxs)("div", {
        className: C.pe,
        children: [
            (0, i.jsx)("div", {
                className: a()(C.yH, v[t], l),
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
                                        text: t !== y.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(h.D, {
                                            className: C.xr,
                                            onClick: (e) => {
                                                (0, p.X)(f.A.RTC_PANEL, p.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, i.jsx)(O, { quality: t, largePing: d }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: C.ei,
                                    children: [
                                        (0, i.jsx)(h.D, {
                                            onClick: (e) => {
                                                (0, p.X)(f.A.RTC_PANEL, p.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, i.jsx)(S, {
                                                text: D,
                                                textVariant: g,
                                                hasVideo: A,
                                                className: N[b],
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
