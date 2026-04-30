n.d(t, { A: () => y });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(200192),
    c = n(526701),
    d = n(522937),
    u = n(653766),
    h = n(922016),
    g = n(939249),
    p = n(793574),
    m = n(384059),
    x = n(917592),
    N = n(830618),
    f = n(834730),
    C = n(29160),
    A = n(985018),
    E = n(60062);
let v = function (e) {
    let { className: t, hasVideo: n, text: i, hasConnectedChannel: s, textVariant: a = "text-md/medium" } = e,
        o = n ? A.intl.string(A.t.IlHdW8) : A.intl.string(A.t.WsOisp);
    return (0, l.jsx)(C.A, {
        className: r()(t, E.H),
        hoverText: s ? (0, l.jsx)(f.E, { variant: a, color: "currentColor", children: o }) : null,
        children: (0, l.jsx)(f.E, { variant: a, color: "currentColor", children: i }),
    });
};
var _ = n(652215),
    I = n(648881);
let T = { [_.vkP.CONNECTED]: I.nf, [_.vkP.CONNECTING]: I._6, [_.vkP.ERROR]: I.Il },
    S = { [_.bFR.FINE]: I.LP, [_.bFR.AVERAGE]: I.mq, [_.bFR.BAD]: I.yA, [_.bFR.UNKNOWN]: null },
    R = { [_.bFR.FINE]: o.Q, [_.bFR.AVERAGE]: c.j, [_.bFR.BAD]: d.R, [_.bFR.UNKNOWN]: u.e };
function j(e) {
    let { quality: t, largePing: n, ...i } = e,
        s = R[t];
    return (0, l.jsx)(s, { className: r()(I.hU, { [I.kV]: n }), ...i });
}
function y(e) {
    let {
            quality: t,
            lastPing: n,
            state: s,
            className: o,
            children: c,
            channelId: d,
            childrenAsSubtitle: u,
            connectionStatusTextVariant: f,
            hasVideo: C,
        } = e,
        A = i.useRef(null),
        E = s === _.S7L.RTC_CONNECTED,
        R = i.useCallback((e) => (0, l.jsx)(N.A, { ...e, channelId: d }), [d]),
        { connectionStatus: y, connectionStatusText: D } = x.A.getStatus(s, C);
    return (0, l.jsxs)("div", {
        className: I.pe,
        children: [
            (0, l.jsx)("div", {
                className: r()(I.yH, S[t], o),
                ref: A,
                children: (0, l.jsx)(h.Y, {
                    targetElementRef: A,
                    renderPopout: R,
                    position: "top",
                    children: (e) => {
                        let { onClick: i } = e;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [
                                E &&
                                    (0, l.jsx)(a.m, {
                                        text: t !== _.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, l.jsx)(g.D, {
                                            className: I.xr,
                                            onClick: (e) => {
                                                (0, m.X)(p.A.RTC_PANEL, m.O.CONNECTION_STATUS), i(e);
                                            },
                                            children: (0, l.jsx)(j, { quality: t, largePing: u }),
                                        }),
                                    }),
                                (0, l.jsxs)("div", {
                                    className: I.ei,
                                    children: [
                                        (0, l.jsx)(g.D, {
                                            onClick: (e) => {
                                                (0, m.X)(p.A.RTC_PANEL, m.O.CONNECTION_STATUS), i(e);
                                            },
                                            children: (0, l.jsx)(v, {
                                                text: D,
                                                textVariant: f,
                                                hasVideo: C,
                                                className: T[y],
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
