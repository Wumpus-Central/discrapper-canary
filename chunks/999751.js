n.d(t, { A: () => R });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(200192),
    c = n(526701),
    d = n(522937),
    u = n(653766),
    h = n(922016),
    g = n(939249),
    m = n(793574),
    A = n(384059),
    p = n(917592),
    C = n(830618),
    E = n(834730),
    x = n(29160),
    N = n(985018),
    f = n(60062);
let _ = function (e) {
    let { className: t, hasVideo: n, text: i, hasConnectedChannel: s, textVariant: r = "text-md/medium" } = e,
        o = n ? N.intl.string(N.t.IlHdW8) : N.intl.string(N.t.WsOisp);
    return (0, l.jsx)(x.A, {
        className: a()(t, f.H),
        hoverText: s ? (0, l.jsx)(E.E, { variant: r, color: "currentColor", children: o }) : null,
        children: (0, l.jsx)(E.E, { variant: r, color: "currentColor", children: i }),
    });
};
var T = n(652215),
    v = n(648881);
let I = { [T.vkP.CONNECTED]: v.nf, [T.vkP.CONNECTING]: v._6, [T.vkP.ERROR]: v.Il },
    S = { [T.bFR.FINE]: v.LP, [T.bFR.AVERAGE]: v.mq, [T.bFR.BAD]: v.yA, [T.bFR.UNKNOWN]: null },
    j = { [T.bFR.FINE]: o.Q, [T.bFR.AVERAGE]: c.j, [T.bFR.BAD]: d.R, [T.bFR.UNKNOWN]: u.e };
function y(e) {
    let { quality: t, largePing: n, ...i } = e,
        s = j[t];
    return (0, l.jsx)(s, { className: a()(v.hU, { [v.kV]: n }), ...i });
}
function R(e) {
    let {
            quality: t,
            lastPing: n,
            state: s,
            className: o,
            children: c,
            channelId: d,
            childrenAsSubtitle: u,
            connectionStatusTextVariant: E,
            hasVideo: x,
        } = e,
        N = i.useRef(null),
        f = s === T.S7L.RTC_CONNECTED,
        j = i.useCallback((e) => (0, l.jsx)(C.A, { ...e, channelId: d }), [d]),
        { connectionStatus: R, connectionStatusText: P } = p.A.getStatus(s, x);
    return (0, l.jsxs)("div", {
        className: v.pe,
        children: [
            (0, l.jsx)("div", {
                className: a()(v.yH, S[t], o),
                ref: N,
                children: (0, l.jsx)(h.Y, {
                    targetElementRef: N,
                    renderPopout: j,
                    position: "top",
                    children: (e) => {
                        let { onClick: i } = e;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [
                                f &&
                                    (0, l.jsx)(r.m, {
                                        text: t !== T.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, l.jsx)(g.D, {
                                            className: v.xr,
                                            onClick: (e) => {
                                                (0, A.X)(m.A.RTC_PANEL, A.O.CONNECTION_STATUS), i(e);
                                            },
                                            children: (0, l.jsx)(y, { quality: t, largePing: u }),
                                        }),
                                    }),
                                (0, l.jsxs)("div", {
                                    className: v.ei,
                                    children: [
                                        (0, l.jsx)(g.D, {
                                            onClick: (e) => {
                                                (0, A.X)(m.A.RTC_PANEL, A.O.CONNECTION_STATUS), i(e);
                                            },
                                            children: (0, l.jsx)(_, {
                                                text: P,
                                                textVariant: E,
                                                hasVideo: x,
                                                className: I[R],
                                                hasConnectedChannel: null != d,
                                            }),
                                        }),
                                        u ? c : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            u ? null : c,
        ],
    });
}
