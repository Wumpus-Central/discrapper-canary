n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(200192),
    u = n(526701),
    d = n(522937),
    c = n(653766),
    h = n(922016),
    g = n(939249),
    A = n(793574),
    f = n(384059),
    E = n(917592),
    I = n(830618),
    S = n(834730),
    m = n(29160),
    p = n(375708),
    C = n(60062);
let _ = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: s, textVariant: a = "text-md/medium" } = e,
        o = n ? p.intl.string(p.t.IlHdW8) : p.intl.string(p.t.WsOisp);
    return (0, i.jsx)(m.A, {
        className: r()(t, C.H),
        hoverText: s ? (0, i.jsx)(S.E, { variant: a, color: "currentColor", children: o }) : null,
        children: (0, i.jsx)(S.E, { variant: a, color: "currentColor", children: l }),
    });
};
var N = n(652215),
    T = n(648881);
let v = { [N.vkP.CONNECTED]: T.nf, [N.vkP.CONNECTING]: T._6, [N.vkP.ERROR]: T.Il },
    M = { [N.bFR.FINE]: T.LP, [N.bFR.AVERAGE]: T.mq, [N.bFR.BAD]: T.yA, [N.bFR.UNKNOWN]: null },
    y = { [N.bFR.FINE]: o.Q, [N.bFR.AVERAGE]: u.j, [N.bFR.BAD]: d.R, [N.bFR.UNKNOWN]: c.e };
function D(e) {
    let { quality: t, largePing: n, ...l } = e,
        s = y[t];
    return (0, i.jsx)(s, { className: r()(T.hU, { [T.kV]: n }), ...l });
}
function x(e) {
    let {
            quality: t,
            lastPing: n,
            state: s,
            className: o,
            children: u,
            channelId: d,
            childrenAsSubtitle: c,
            connectionStatusTextVariant: S,
            hasVideo: m,
        } = e,
        p = l.useRef(null),
        C = s === N.S7L.RTC_CONNECTED,
        y = l.useCallback((e) => (0, i.jsx)(I.A, { ...e, channelId: d }), [d]),
        { connectionStatus: x, connectionStatusText: R } = E.A.getStatus(s, m);
    return (0, i.jsxs)("div", {
        className: T.pe,
        children: [
            (0, i.jsx)("div", {
                className: r()(T.yH, M[t], o),
                ref: p,
                children: (0, i.jsx)(h.Y, {
                    targetElementRef: p,
                    renderPopout: y,
                    position: "top",
                    children: (e) => {
                        let { onClick: l } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                C &&
                                    (0, i.jsx)(a.m, {
                                        text: t !== N.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(g.D, {
                                            className: T.xr,
                                            onClick: (e) => {
                                                (0, f.X)(A.A.RTC_PANEL, f.O.CONNECTION_STATUS), l(e);
                                            },
                                            children: (0, i.jsx)(D, { quality: t, largePing: c }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: T.ei,
                                    children: [
                                        (0, i.jsx)(g.D, {
                                            onClick: (e) => {
                                                (0, f.X)(A.A.RTC_PANEL, f.O.CONNECTION_STATUS), l(e);
                                            },
                                            children: (0, i.jsx)(_, {
                                                text: R,
                                                textVariant: S,
                                                hasVideo: m,
                                                className: v[x],
                                                hasConnectedChannel: null != d,
                                            }),
                                        }),
                                        c ? u : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            c ? null : u,
        ],
    });
}
