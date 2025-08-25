n.d(t, { Z: () => y }), n(388685);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(572691),
    s = n(287734),
    l = n(872810),
    c = n(40851),
    u = n(102172),
    d = n(199902),
    f = n(592125),
    _ = n(585483),
    p = n(981631),
    h = n(388032);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { isCurrentUser: t, applicationStream: n, onAction: m } = e,
        { activeStream: E, watchingOtherStream: y } = (0, i.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(n),
            watchingOtherStream:
                null != n &&
                d.Z.getAllActiveStreamsForChannel(n.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== n.ownerId;
                }).length > 0,
        })),
        O = (0, i.e7)([f.Z], () => f.Z.getChannel(null == n ? void 0 : n.channelId)),
        [v, I] = (0, u.wq)(O),
        T = (0, c.Aq)(),
        S = null != E && null != n && E.state !== p.jm8.ENDED && E.ownerId === n.ownerId,
        A = (e) => {
            null != n &&
                (null == m || m(),
                s.default.selectVoiceChannel(n.channelId),
                S || (0, l.iV)(n, { forceMultiple: e }),
                T.dispatch(p.CkL.POPOUT_CLOSE),
                _.S.dispatch(p.CkL.MODAL_CLOSE),
                o.Z.popAll());
        };
    if (null == n) return null;
    let C = (0, u.P9)(I);
    return (
        t ? (C = h.intl.string(h.t.XvBdeX)) : S && (C = h.intl.string(h.t.JH1SJy)),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.zxk, {
                    size: "sm",
                    variant: "active",
                    icon: a.hGI,
                    text: C,
                    disabled: t || S || !v,
                    onClick: () => A(!1),
                    fullWidth: !0,
                }),
                y && !S
                    ? (0, r.jsx)(a.ua7, {
                          text: h.intl.string(h.t.wCrzur),
                          children: (e) =>
                              (0, r.jsx)(
                                  a.hU,
                                  b(g({}, e), {
                                      variant: "secondary",
                                      size: "sm",
                                      icon: a.OgY,
                                      "aria-label": h.intl.string(h.t.wCrzur),
                                      onClick: () => {
                                          var t;
                                          null == (t = e.onClick) || t.call(e), A(!0);
                                      },
                                  }),
                              ),
                      })
                    : null,
            ],
        })
    );
}
