(n.d(t, { Z: () => h }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
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
    _ = n(388032),
    v = n(128746);
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
function h(e) {
    let { isCurrentUser: t, color: n, look: h, applicationStream: O, onAction: j } = e,
        { activeStream: S, watchingOtherStream: x } = (0, i.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(O),
            watchingOtherStream:
                null != O &&
                d.Z.getAllActiveStreamsForChannel(O.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== O.ownerId;
                }).length > 0
        })),
        I = (0, i.e7)([f.Z], () => f.Z.getChannel(null == O ? void 0 : O.channelId)),
        [P, C] = (0, u.wq)(I),
        w = (0, c.Aq)(),
        E = null != S && null != O && S.state !== g.jm8.ENDED && S.ownerId === O.ownerId,
        T = (e) => {
            null != O && (null == j || j(), o.default.selectVoiceChannel(O.channelId), E || (0, s.iV)(O, { forceMultiple: e }), w.dispatch(g.CkL.POPOUT_CLOSE), p.S.dispatch(g.CkL.MODAL_CLOSE), a.Z.popAll());
        };
    if (null == O) return null;
    let N = (0, u.P9)(C);
    t ? (N = _.intl.string(_.t.XvBdeX)) : E && (N = _.intl.string(_.t.JH1SJy));
    let Z = {
        color: n,
        look: h
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(
                m.Z,
                y(
                    b(
                        {
                            disabled: t || E || !P,
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
                                className: v.streamIcon
                            }),
                            N
                        ]
                    }
                ),
                'play'
            ),
            x && !E
                ? (0, r.jsx)(l.ua7, {
                      text: _.intl.string(_.t.wCrzur),
                      children: (e) =>
                          (0, r.jsx)(
                              m.Z,
                              y(
                                  b(
                                      y(b({}, e), {
                                          onClick: () => {
                                              var t;
                                              (null == (t = e.onClick) || t.call(e), T(!0));
                                          }
                                      }),
                                      Z
                                  ),
                                  {
                                      className: v.iconButton,
                                      size: v.iconButtonSize,
                                      children: (0, r.jsx)(l.OgY, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: v.iconSize
                                      })
                                  }
                              )
                          )
                  })
                : null
        ]
    });
}
