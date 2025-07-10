(r.r(t), r.d(t, { default: () => Z }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(442837),
    u = r(82659),
    s = r(481060),
    a = r(377171),
    o = r(724723),
    c = r(592125),
    d = r(594174),
    f = r(5192),
    E = r(571826),
    y = r(630759),
    g = r(539067),
    p = r(802063),
    b = r(210975),
    m = r(301107),
    _ = r(65692),
    S = r(540247),
    h = r(785792),
    O = r(190054),
    v = r(245581),
    j = r(760373),
    N = r(981631),
    R = r(388032),
    T = r(268999);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function x(e) {
    let { badgeText: t, badgeColor: r } = e,
        i = l.useRef(t),
        u = l.useRef(r);
    return (0, n.jsx)(s.IGR, {
        text: i.current,
        color: u.current
    });
}
function Z(e) {
    let { transitionState: t, userId: r, channelId: Z, onClose: A } = e,
        w = o.Z.useExperiment({ location: 'SecureFramesUserVerificationModal' }, { autoTrackExposure: !0 }).enabled,
        P = (0, i.e7)([d.default], () => d.default.getUser(r)),
        k = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getChannel(Z)) ? void 0 : e.getGuildId();
        }),
        U = f.ZP.useName(k, null, P),
        { fingerprint: M, userKey: F } = (0, _.q)({ userId: r }),
        V = (0, m.W)({
            fingerprintBase64: M,
            chunkSize: j.iQ,
            desiredLength: j.KN
        }),
        D = l.useCallback(() => {
            (0, E.s$)({
                userId: r,
                channelId: Z
            });
        }, [Z, r]),
        K = (0, b.wV)({
            userId: r,
            channelId: Z
        });
    (0, p.i)({
        channelId: Z,
        userId: r,
        nickname: U,
        onAlertOpen: A
    });
    let { isCurrentUserKeyPersistent: L, isOtherUserKeyPersistent: Y, loading: z } = (0, g.y)({ userId: r }),
        B = l.useCallback(() => {
            null != F && ((0, y.TQ)(r, F, Y, Z, N.Sbl.E2EE_USER_VERIFY_MODAL), A());
        }, [F, r, Y, Z, A]),
        G = l.useCallback(() => {
            null != F && ((0, y.LO)(r, F, Y), A());
        }, [F, r, Y, A]),
        [J, W] = l.useMemo(() => (K ? [R.intl.string(R.t.UNUuen), a.Z.BG_BRAND] : [R.intl.string(R.t.y2b7CA), a.Z.STATUS_DANGER]), [K]),
        X = l.useMemo(
            () =>
                (0, y.kK)({
                    isCurrentUserKeyPersistent: L,
                    isOtherUserKeyPersistent: Y,
                    otherUserNickname: U
                }),
            [L, Y, U]
        ),
        q = (0, S.P)({
            userId: r,
            keyToOmit: F
        });
    l.useEffect(() => {
        (0, E.Rq)({
            userId: r,
            channelId: Z
        });
    }, [Z, r]);
    let H = {
            transitionState: t,
            title: R.intl.string(R.t['/WPGnJ']),
            subtitle: R.intl.format(R.t.oc2kcX, { username: U })
        },
        Q = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: T.verification,
                    children: [
                        q > 0 &&
                            (0, n.jsx)(s.Wn, {
                                messageType: s.QYI.INFO,
                                className: T.helpMessage,
                                children: R.intl.format(R.t.uZDkz8, { count: q })
                            }),
                        (0, n.jsxs)('div', {
                            className: T.header,
                            children: [
                                (0, n.jsx)(s.X6q, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: R.intl.string(R.t['/WPGnJ'])
                                }),
                                null != V &&
                                    (0, n.jsx)(O.H, {
                                        className: T.copyIcon,
                                        chunks: V,
                                        color: s.TVs.colors.INTERACTIVE_NORMAL,
                                        onCopy: D
                                    }),
                                (0, n.jsx)('div', {
                                    className: T.codeStatus,
                                    children:
                                        null == V
                                            ? (0, n.jsx)(s.$jN, {
                                                  className: T.spinner,
                                                  type: s.RAz.SPINNING_CIRCLE
                                              })
                                            : (0, n.jsx)(x, {
                                                  badgeText: J,
                                                  badgeColor: W
                                              })
                                })
                            ]
                        }),
                        (0, n.jsx)(h.b, {
                            className: T.code,
                            chunks: V,
                            columns: j.ak
                        })
                    ]
                }),
                (0, n.jsx)(s.Text, {
                    className: T.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: X
                })
            ]
        }),
        $ = {
            text: K ? R.intl.string(R.t['Osb+/v']) : R.intl.string(R.t['0tvNAg']),
            disabled: null == V || z,
            onClick: K ? G : B
        },
        ee = {
            text: R.intl.string(R.t['ETE/oK']),
            onClick: A,
            variant: 'secondary'
        };
    return w
        ? (0, n.jsx)(
              u.u,
              I(C({ onClose: A }, H), {
                  actions: [ee, $],
                  children: Q
              })
          )
        : (0, n.jsxs)(
              v.Z,
              I(C({}, H), {
                  children: [
                      Q,
                      (0, n.jsx)('div', {
                          'data-button-hoisted-classname-wrapper': !0,
                          className: T.verifiedButton,
                          children: (0, n.jsx)(s.zxk, I(C({}, $), { fullWidth: !0 }))
                      }),
                      (0, n.jsx)(s.zxk, I(C({}, ee), { fullWidth: !0 }))
                  ]
              })
          );
}
