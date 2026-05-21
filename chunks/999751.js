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
    f = n(939249),
    h = n(793574),
    p = n(384059),
    E = n(917592),
    m = n(830618),
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
    y = n(648881);
let C = { [N.vkP.CONNECTED]: y.nf, [N.vkP.CONNECTING]: y._6, [N.vkP.ERROR]: y.Il },
    v = { [N.bFR.FINE]: y.LP, [N.bFR.AVERAGE]: y.mq, [N.bFR.BAD]: y.yA, [N.bFR.UNKNOWN]: null },
    O = { [N.bFR.FINE]: l.Q, [N.bFR.AVERAGE]: u.j, [N.bFR.BAD]: c.R, [N.bFR.UNKNOWN]: d.e };
function R(e) {
    let { quality: t, largePing: n, ...r } = e,
        s = O[t];
    return (0, i.jsx)(s, { className: a()(y.hU, { [y.kV]: n }), ...r });
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
        O = r.useCallback((e) => (0, i.jsx)(m.A, { ...e, channelId: c }), [c]),
        { connectionStatus: b, connectionStatusText: D } = E.A.getStatus(s, A);
    return (0, i.jsxs)("div", {
        className: y.pe,
        children: [
            (0, i.jsx)("div", {
                className: a()(y.yH, v[t], l),
                ref: I,
                children: (0, i.jsx)(_.Y, {
                    targetElementRef: I,
                    renderPopout: O,
                    position: "top",
                    children: (e) => {
                        let { onClick: r } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                T &&
                                    (0, i.jsx)(o.m, {
                                        text: t !== N.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(f.D, {
                                            className: y.xr,
                                            onClick: (e) => {
                                                (0, p.X)(h.A.RTC_PANEL, p.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, i.jsx)(R, { quality: t, largePing: d }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: y.ei,
                                    children: [
                                        (0, i.jsx)(f.D, {
                                            onClick: (e) => {
                                                (0, p.X)(h.A.RTC_PANEL, p.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, i.jsx)(S, {
                                                text: D,
                                                textVariant: g,
                                                hasVideo: A,
                                                className: C[b],
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
