(n.d(t, { Z: () => v }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(572691),
    s = n(287734),
    l = n(872810),
    c = n(40851),
    u = n(102172),
    d = n(199902),
    f = n(592125),
    _ = n(585483),
    p = n(915863),
    h = n(981631),
    m = n(388032),
    g = n(128746);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            }));
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { isCurrentUser: t, color: n, look: E, applicationStream: y, onAction: v } = e,
        { activeStream: I, watchingOtherStream: T } = (0, i.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(y),
            watchingOtherStream:
                null != y &&
                d.Z.getAllActiveStreamsForChannel(y.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== y.ownerId;
                }).length > 0
        })),
        S = (0, i.e7)([f.Z], () => f.Z.getChannel(null == y ? void 0 : y.channelId)),
        [A, N] = (0, u.wq)(S),
        C = (0, c.Aq)(),
        R = null != I && null != y && I.state !== h.jm8.ENDED && I.ownerId === y.ownerId,
        P = (e) => {
            null != y && (null == v || v(), s.default.selectVoiceChannel(y.channelId), R || (0, l.iV)(y, { forceMultiple: e }), C.dispatch(h.CkL.POPOUT_CLOSE), _.S.dispatch(h.CkL.MODAL_CLOSE), a.Z.popAll());
        };
    if (null == y) return null;
    let w = (0, u.P9)(N);
    t ? (w = m.intl.string(m.t.XvBdeX)) : R && (w = m.intl.string(m.t.JH1SJy));
    let D = {
        color: n,
        look: E
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(
                p.Z,
                O(
                    b(
                        {
                            disabled: t || R || !A,
                            onClick: () => P(!1)
                        },
                        D
                    ),
                    {
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(o.hGI, {
                                size: 'md',
                                color: 'currentColor',
                                className: g.streamIcon
                            }),
                            w
                        ]
                    }
                ),
                'play'
            ),
            T && !R
                ? (0, r.jsx)(o.ua7, {
                      text: m.intl.string(m.t.wCrzur),
                      children: (e) =>
                          (0, r.jsx)(
                              p.Z,
                              O(
                                  b(
                                      O(b({}, e), {
                                          onClick: () => {
                                              var t;
                                              (null == (t = e.onClick) || t.call(e), P(!0));
                                          }
                                      }),
                                      D
                                  ),
                                  {
                                      className: g.iconButton,
                                      size: g.iconButtonSize,
                                      children: (0, r.jsx)(o.OgY, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: g.iconSize
                                      })
                                  }
                              )
                          )
                  })
                : null
        ]
    });
}
