(n.d(t, { Z: () => y }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
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
    _ = n(128746);
function v(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function h(e, t) {
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
function y(e) {
    let { isCurrentUser: t, color: n, look: y, applicationStream: O, onAction: j } = e,
        { activeStream: S, watchingOtherStream: x } = (0, i.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(O),
            watchingOtherStream:
                null != O &&
                d.Z.getAllActiveStreamsForChannel(O.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== O.ownerId;
                }).length > 0
        })),
        I = (0, i.e7)([p.Z], () => p.Z.getChannel(null == O ? void 0 : O.channelId)),
        [P, C] = (0, u.wq)(I),
        E = (0, c.Aq)(),
        w = null != S && null != O && S.state !== g.jm8.ENDED && S.ownerId === O.ownerId,
        T = (e) => {
            null != O && (null == j || j(), a.default.selectVoiceChannel(O.channelId), w || (0, s.iV)(O, { forceMultiple: e }), E.dispatch(g.CkL.POPOUT_CLOSE), f.S.dispatch(g.CkL.MODAL_CLOSE), o.Z.popAll());
        };
    if (null == O) return null;
    let N = (0, u.P9)(C);
    t ? (N = b.intl.string(b.t.XvBdeX)) : w && (N = b.intl.string(b.t.JH1SJy));
    let Z = {
        color: n,
        look: y
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(
                m.Z,
                h(
                    v(
                        {
                            disabled: t || w || !P,
                            onClick: () => T(!1)
                        },
                        Z
                    ),
                    {
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(l.hGI, {
                                size: 'md',
                                color: 'currentColor',
                                className: _.streamIcon
                            }),
                            N
                        ]
                    }
                ),
                'play'
            ),
            x && !w
                ? (0, r.jsx)(l.ua7, {
                      text: b.intl.string(b.t.wCrzur),
                      children: (e) =>
                          (0, r.jsx)(
                              m.Z,
                              h(
                                  v(
                                      h(v({}, e), {
                                          onClick: () => {
                                              var t;
                                              (null == (t = e.onClick) || t.call(e), T(!0));
                                          }
                                      }),
                                      Z
                                  ),
                                  {
                                      className: _.iconButton,
                                      size: _.iconButtonSize,
                                      children: (0, r.jsx)(l.OgY, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: _.iconSize
                                      })
                                  }
                              )
                          )
                  })
                : null
        ]
    });
}
