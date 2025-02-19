n.d(t, { Z: () => O }), n(47120);
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    a = n(572691),
    o = n(287734),
    s = n(872810),
    c = n(40851),
    u = n(102172),
    d = n(199902),
    f = n(592125),
    p = n(585483),
    m = n(915863),
    g = n(981631),
    y = n(388032),
    b = n(156187);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { isCurrentUser: t, color: n, look: O, applicationStream: j, onAction: S } = e,
        { activeStream: N, watchingOtherStream: P } = (0, l.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(j),
            watchingOtherStream:
                null != j &&
                d.Z.getAllActiveStreamsForChannel(j.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== j.ownerId;
                }).length > 0
        })),
        I = (0, l.e7)([f.Z], () => f.Z.getChannel(null == j ? void 0 : j.channelId)),
        [x, E] = (0, u.wq)(I),
        w = (0, c.Aq)(),
        Z = null != N && null != j && N.state !== g.jm8.ENDED && N.ownerId === j.ownerId,
        T = (e) => {
            null != j && (null == S || S(), o.default.selectVoiceChannel(j.channelId), Z || (0, s.iV)(j, { forceMultiple: e }), w.dispatch(g.CkL.POPOUT_CLOSE), p.S.dispatch(g.CkL.MODAL_CLOSE), a.Z.popAll());
        };
    if (null == j) return null;
    let A = (0, u.P9)(E);
    t ? (A = y.NW.string(y.t.XvBdeX)) : Z && (A = y.NW.string(y.t.JH1SJy));
    let C = {
        color: n,
        look: O
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(
                m.Z,
                v(
                    h(
                        {
                            disabled: t || Z || !x,
                            onClick: () => T(!1)
                        },
                        C
                    ),
                    {
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(i.hGI, {
                                size: 'md',
                                color: 'currentColor',
                                className: b.streamIcon
                            }),
                            A
                        ]
                    }
                ),
                'play'
            ),
            P && !Z
                ? (0, r.jsx)(i.ua7, {
                      text: y.NW.string(y.t.wCrzur),
                      children: (e) =>
                          (0, r.jsx)(
                              m.Z,
                              v(
                                  h(
                                      v(h({}, e), {
                                          onClick: () => {
                                              var t;
                                              null === (t = e.onClick) || void 0 === t || t.call(e), T(!0);
                                          }
                                      }),
                                      C
                                  ),
                                  {
                                      className: b.iconButton,
                                      size: b.iconButtonSize,
                                      children: (0, r.jsx)(i.OgY, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: b.iconSize
                                      })
                                  }
                              )
                          )
                  })
                : null
        ]
    });
}
