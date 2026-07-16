n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
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
    I = n(978171),
    p = n(834730),
    S = n(29160),
    m = n(375708),
    _ = n(60062);
let C = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: s, textVariant: a = "text-md/medium" } = e,
        o = n ? m.intl.string(m.t.IlHdW8) : m.intl.string(m.t.WsOisp);
    return (0, i.jsx)(S.A, {
        className: r()(t, _.H),
        hoverText: s ? (0, i.jsx)(p.E, { variant: a, color: "currentColor", children: o }) : null,
        children: (0, i.jsx)(p.E, { variant: a, color: "currentColor", children: l }),
    });
};
var N = n(652215),
    T = n(648881);
let v = { [N.vkP.CONNECTED]: T.nf, [N.vkP.CONNECTING]: T._6, [N.vkP.ERROR]: T.Il },
    M = { [N.bFR.FINE]: T.LP, [N.bFR.AVERAGE]: T.mq, [N.bFR.BAD]: T.yA, [N.bFR.UNKNOWN]: null },
    y = { [N.bFR.FINE]: a.Q, [N.bFR.AVERAGE]: o.j, [N.bFR.BAD]: u.R, [N.bFR.UNKNOWN]: d.e };
function D(e) {
    let { quality: t, largePing: n, ...l } = e,
        s = y[t];
    return (0, i.jsx)(s, { className: r()(T.hU, { [T.kV]: n }), ...l });
}
function R(e) {
    let {
            quality: t,
            lastPing: n,
            state: s,
            className: a,
            children: o,
            channelId: u,
            childrenAsSubtitle: d,
            connectionStatusTextVariant: p,
            hasVideo: S,
        } = e,
        m = l.useRef(null),
        _ = s === N.S7L.RTC_CONNECTED,
        y = l.useCallback((e) => (0, i.jsx)(I.A, { ...e, channelId: u }), [u]),
        { connectionStatus: R, connectionStatusText: O } = E.A.getStatus(s, S);
    return (0, i.jsxs)("div", {
        className: T.pe,
        children: [
            (0, i.jsx)("div", {
                className: r()(T.yH, M[t], a),
                ref: m,
                children: (0, i.jsx)(c.Y, {
                    targetElementRef: m,
                    renderPopout: y,
                    position: "top",
                    children: (e) => {
                        let { onClick: l } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                _ &&
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
                                            children: (0, i.jsx)(C, {
                                                text: O,
                                                textVariant: p,
                                                hasVideo: S,
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
