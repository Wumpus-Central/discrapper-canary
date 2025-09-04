n.d(t, { Z: () => O }), n(388685);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(572691),
    s = n(287734),
    l = n(872810),
    c = n(40851),
    u = n(595816),
    d = n(102172),
    f = n(199902),
    _ = n(592125),
    p = n(585483),
    h = n(981631),
    m = n(388032);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { isCurrentUser: t, applicationStream: n, onAction: g } = e,
        { defaultWatchMultipleStreams: b } = (0, u.P)({ location: "WatchStreamButton" }),
        { activeStream: O, watchingOtherStream: v } = (0, i.cj)([f.Z], () => ({
            activeStream: f.Z.getActiveStreamForApplicationStream(n),
            watchingOtherStream:
                null != n &&
                f.Z.getAllActiveStreamsForChannel(n.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== n.ownerId;
                }).length > 0,
        })),
        I = (0, i.e7)([_.Z], () => _.Z.getChannel(null == n ? void 0 : n.channelId)),
        [T, S] = (0, d.wq)(I),
        A = (0, c.Aq)(),
        C = null != O && null != n && O.state !== h.jm8.ENDED && O.ownerId === n.ownerId,
        N = (e) => {
            null != n &&
                (null == g || g(),
                s.default.selectVoiceChannel(n.channelId),
                C || (0, l.iV)(n, { forceMultiple: e }),
                A.dispatch(h.CkL.POPOUT_CLOSE),
                p.S.dispatch(h.CkL.MODAL_CLOSE),
                o.Z.popAll());
        };
    if (null == n) return null;
    let R = (0, d.P9)(S);
    return (
        t ? (R = m.intl.string(m.t.XvBdeX)) : C && (R = m.intl.string(m.t.JH1SJy)),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.zxk, {
                    size: "sm",
                    variant: C ? "secondary" : "active",
                    icon: a.hGI,
                    text: R,
                    disabled: t || C || !T,
                    onClick: () => N(!1),
                    fullWidth: !0,
                }),
                !v || C || b
                    ? null
                    : (0, r.jsx)(a.ua7, {
                          text: m.intl.string(m.t.wCrzur),
                          children: (e) =>
                              (0, r.jsx)(
                                  a.hU,
                                  y(E({}, e), {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: a.OgY,
                                      "aria-label": m.intl.string(m.t.wCrzur),
                                      onClick: () => {
                                          var t;
                                          null == (t = e.onClick) || t.call(e), N(!0);
                                      },
                                  }),
                              ),
                      }),
            ],
        })
    );
}
