n.d(t, { A: () => O, e: () => y });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(200192),
    o = n(526701),
    u = n(522937),
    d = n(653766),
    c = n(265872),
    h = n(866665),
    f = n(939249),
    g = n(657043),
    A = n(793574),
    p = n(384059),
    m = n(917592),
    I = n(978171),
    E = n(834730),
    S = n(29160),
    C = n(105292),
    _ = n(177129);
let T = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: r, textVariant: a = "text-md/medium" } = e,
        o = n ? C.intl.string(C.t.IlHdW8) : C.intl.string(C.t.WsOisp);
    return (0, i.jsx)(S.A, {
        className: s()(t, _.H),
        hoverText: r ? (0, i.jsx)(E.E, { variant: a, color: "currentColor", className: _.Q, children: o }) : null,
        children: (0, i.jsx)(E.E, { variant: a, color: "currentColor", className: _.Q, children: l }),
    });
};
var N = n(652215),
    v = n(473718);
let y = { [N.vkP.CONNECTED]: v.nf, [N.vkP.CONNECTING]: v._6, [N.vkP.ERROR]: v.Il },
    M = { [N.bFR.FINE]: v.LP, [N.bFR.AVERAGE]: v.mq, [N.bFR.BAD]: v.yA, [N.bFR.UNKNOWN]: null },
    D = { [N.bFR.FINE]: a.Q, [N.bFR.AVERAGE]: o.j, [N.bFR.BAD]: u.R, [N.bFR.UNKNOWN]: d.e };
function R(e) {
    let { quality: t, largePing: n, ...l } = e,
        r = D[t];
    return (0, i.jsx)(r, { className: s()(v.hU, { [v.kV]: n }), ...l });
}
function O(e) {
    let {
            quality: t,
            lastPing: n,
            state: r,
            className: a,
            children: o,
            channelId: u,
            childrenAsSubtitle: d,
            connectionStatusTextVariant: E,
            hasVideo: S,
        } = e,
        C = l.useRef(null),
        _ = r === N.S7L.RTC_CONNECTED,
        D = l.useCallback((e) => (0, i.jsx)(I.A, { ...e, channelId: u }), [u]),
        { connectionStatus: O, connectionStatusText: x } = m.A.getStatus(r, S),
        L = (0, g.KN)("RTCConnectionStatus");
    return (0, i.jsxs)("div", {
        className: v.pe,
        children: [
            (0, i.jsx)("div", {
                className: s()(v.yH, M[t], a),
                ref: C,
                children: (0, i.jsx)(c.Y, {
                    targetElementRef: C,
                    renderPopout: D,
                    position: "top",
                    children: (e) => {
                        let { onClick: l } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                _ &&
                                    (0, i.jsx)(h.m, {
                                        text: t !== N.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(f.D, {
                                            className: s()(v.xr, { [v.YJ]: d }),
                                            onClick: (e) => {
                                                ((0, p.X)(A.A.RTC_PANEL, p.O.CONNECTION_STATUS), l(e));
                                            },
                                            children: (0, i.jsx)(R, { quality: t, largePing: d }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: v.ei,
                                    children: [
                                        d && L
                                            ? null
                                            : (0, i.jsx)(f.D, {
                                                  onClick: (e) => {
                                                      ((0, p.X)(A.A.RTC_PANEL, p.O.CONNECTION_STATUS), l(e));
                                                  },
                                                  children: (0, i.jsx)(T, {
                                                      text: x,
                                                      textVariant: E,
                                                      hasVideo: S,
                                                      className: y[O],
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
