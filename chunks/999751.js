n.d(t, { A: () => R, e: () => v });
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
    f = n(939249),
    g = n(657043),
    C = n(793574),
    A = n(384059),
    p = n(917592),
    m = n(978171),
    E = n(834730),
    I = n(29160),
    S = n(375708),
    _ = n(177129);
let N = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: r, textVariant: a = "text-md/medium" } = e,
        o = n ? S.intl.string(S.t.IlHdW8) : S.intl.string(S.t.WsOisp);
    return (0, i.jsx)(I.A, {
        className: s()(t, _.H),
        hoverText: r ? (0, i.jsx)(E.E, { variant: a, color: "currentColor", className: _.Q, children: o }) : null,
        children: (0, i.jsx)(E.E, { variant: a, color: "currentColor", className: _.Q, children: l }),
    });
};
var T = n(652215),
    M = n(473718);
let v = { [T.vkP.CONNECTED]: M.nf, [T.vkP.CONNECTING]: M._6, [T.vkP.ERROR]: M.Il },
    y = { [T.bFR.FINE]: M.LP, [T.bFR.AVERAGE]: M.mq, [T.bFR.BAD]: M.yA, [T.bFR.UNKNOWN]: null },
    L = { [T.bFR.FINE]: a.Q, [T.bFR.AVERAGE]: o.j, [T.bFR.BAD]: u.R, [T.bFR.UNKNOWN]: d.e };
function x(e) {
    let { quality: t, largePing: n, ...l } = e,
        r = L[t];
    return (0, i.jsx)(r, { className: s()(M.hU, { [M.kV]: n }), ...l });
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
            connectionStatusTextVariant: E,
            hasVideo: I,
        } = e,
        S = l.useRef(null),
        _ = r === T.S7L.RTC_CONNECTED,
        L = l.useCallback((e) => (0, i.jsx)(m.A, { ...e, channelId: u }), [u]),
        { connectionStatus: R, connectionStatusText: D } = p.A.getStatus(r, I),
        O = (0, g.KN)("RTCConnectionStatus");
    return (0, i.jsxs)("div", {
        className: M.pe,
        children: [
            (0, i.jsx)("div", {
                className: s()(M.yH, y[t], a),
                ref: S,
                children: (0, i.jsx)(c.Y, {
                    targetElementRef: S,
                    renderPopout: L,
                    position: "top",
                    children: (e) => {
                        let { onClick: l } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                _ &&
                                    (0, i.jsx)(h.m, {
                                        text: t !== T.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(f.D, {
                                            className: s()(M.xr, { [M.YJ]: d }),
                                            onClick: (e) => {
                                                ((0, A.X)(C.A.RTC_PANEL, A.O.CONNECTION_STATUS), l(e));
                                            },
                                            children: (0, i.jsx)(x, { quality: t, largePing: d }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: M.ei,
                                    children: [
                                        d && O
                                            ? null
                                            : (0, i.jsx)(f.D, {
                                                  onClick: (e) => {
                                                      ((0, A.X)(C.A.RTC_PANEL, A.O.CONNECTION_STATUS), l(e));
                                                  },
                                                  children: (0, i.jsx)(N, {
                                                      text: D,
                                                      textVariant: E,
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
