n.d(t, { Z: () => v }), n(388685);
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(572691),
    a = n(287734),
    s = n(872810),
    c = n(40851),
    u = n(102172),
    d = n(199902),
    p = n(592125),
    f = n(585483),
    m = n(915863),
    g = n(981631),
    b = n(388032),
    O = n(128746);
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
function y(e, t) {
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
function v(e) {
    let { isCurrentUser: t, color: n, look: v, applicationStream: S, onAction: j } = e,
        { activeStream: N, watchingOtherStream: P } = (0, l.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(S),
            watchingOtherStream:
                null != S &&
                d.Z.getAllActiveStreamsForChannel(S.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== S.ownerId;
                }).length > 0
        })),
        E = (0, l.e7)([p.Z], () => p.Z.getChannel(null == S ? void 0 : S.channelId)),
        [Z, I] = (0, u.wq)(E),
        x = (0, c.Aq)(),
        C = null != N && null != S && N.state !== g.jm8.ENDED && N.ownerId === S.ownerId,
        T = (e) => {
            null != S && (null == j || j(), a.default.selectVoiceChannel(S.channelId), C || (0, s.iV)(S, { forceMultiple: e }), x.dispatch(g.CkL.POPOUT_CLOSE), f.S.dispatch(g.CkL.MODAL_CLOSE), o.Z.popAll());
        };
    if (null == S) return null;
    let A = (0, u.P9)(I);
    t ? (A = b.NW.string(b.t.XvBdeX)) : C && (A = b.NW.string(b.t.JH1SJy));
    let w = {
        color: n,
        look: v
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(
                m.Z,
                y(
                    h(
                        {
                            disabled: t || C || !Z,
                            onClick: () => T(!1)
                        },
                        w
                    ),
                    {
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(i.hGI, {
                                size: 'md',
                                color: 'currentColor',
                                className: O.streamIcon
                            }),
                            A
                        ]
                    }
                ),
                'play'
            ),
            P && !C
                ? (0, r.jsx)(i.ua7, {
                      text: b.NW.string(b.t.wCrzur),
                      children: (e) =>
                          (0, r.jsx)(
                              m.Z,
                              y(
                                  h(
                                      y(h({}, e), {
                                          onClick: () => {
                                              var t;
                                              null == (t = e.onClick) || t.call(e), T(!0);
                                          }
                                      }),
                                      w
                                  ),
                                  {
                                      className: O.iconButton,
                                      size: O.iconButtonSize,
                                      children: (0, r.jsx)(i.OgY, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: O.iconSize
                                      })
                                  }
                              )
                          )
                  })
                : null
        ]
    });
}
