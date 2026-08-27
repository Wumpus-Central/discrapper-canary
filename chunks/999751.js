n.d(t, { A: () => R });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(200192),
    o = n(526701),
    u = n(522937),
    d = n(653766),
    c = n(922016),
    h = n(866665),
    g = n(939249),
    f = n(793574),
    A = n(384059),
    E = n(917592),
    p = n(978171),
    m = n(834730),
    I = n(29160),
    S = n(375708),
    C = n(177129);
let _ = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: r, textVariant: a = "text-md/medium" } = e,
        o = n ? S.intl.string(S.t.IlHdW8) : S.intl.string(S.t.WsOisp);
    return (0, i.jsx)(I.A, {
        className: s()(t, C.H),
        hoverText: r ? (0, i.jsx)(m.E, { variant: a, color: "currentColor", children: o }) : null,
        children: (0, i.jsx)(m.E, { variant: a, color: "currentColor", children: l }),
    });
};
var N = n(652215),
    T = n(473718);
let v = { [N.vkP.CONNECTED]: T.nf, [N.vkP.CONNECTING]: T._6, [N.vkP.ERROR]: T.Il },
    y = { [N.bFR.FINE]: T.LP, [N.bFR.AVERAGE]: T.mq, [N.bFR.BAD]: T.yA, [N.bFR.UNKNOWN]: null },
    M = { [N.bFR.FINE]: a.Q, [N.bFR.AVERAGE]: o.j, [N.bFR.BAD]: u.R, [N.bFR.UNKNOWN]: d.e };
function D(e) {
    let { quality: t, largePing: n, ...l } = e,
        r = M[t];
    return (0, i.jsx)(r, { className: s()(T.hU, { [T.kV]: n }), ...l });
}
function R(e) {
    let {
            quality: t,
            lastPing: n,
            state: r,
            className: a,
            children: o,
            channelId: u,
            childrenAsSubtitle: d,
            connectionStatusTextVariant: m,
            hasVideo: I,
        } = e,
        S = l.useRef(null),
        C = r === N.S7L.RTC_CONNECTED,
        M = l.useCallback((e) => (0, i.jsx)(p.A, { ...e, channelId: u }), [u]),
        { connectionStatus: R, connectionStatusText: x } = E.A.getStatus(r, I);
    return (0, i.jsxs)("div", {
        className: T.pe,
        children: [
            (0, i.jsx)("div", {
                className: s()(T.yH, y[t], a),
                ref: S,
                children: (0, i.jsx)(c.Y, {
                    targetElementRef: S,
                    renderPopout: M,
                    position: "top",
                    children: (e) => {
                        let { onClick: l } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                C &&
                                    (0, i.jsx)(h.m, {
                                        text: t !== N.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(g.D, {
                                            className: T.xr,
                                            onClick: (e) => {
                                                (0, A.X)(f.A.RTC_PANEL, A.O.CONNECTION_STATUS), l(e);
                                            },
                                            children: (0, i.jsx)(D, { quality: t, largePing: d }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: T.ei,
                                    children: [
                                        (0, i.jsx)(g.D, {
                                            onClick: (e) => {
                                                (0, A.X)(f.A.RTC_PANEL, A.O.CONNECTION_STATUS), l(e);
                                            },
                                            children: (0, i.jsx)(_, {
                                                text: x,
                                                textVariant: m,
                                                hasVideo: I,
                                                className: v[R],
                                                hasConnectedChannel: null != u,
                                            }),
                                        }),
                                        d ? o : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            d ? null : o,
        ],
    });
}
