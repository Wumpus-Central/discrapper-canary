r.r(t), r.d(t, { default: () => C }), r(388685);
var n = r(255367),
    l = r(73800),
    o = r(442837),
    c = r(82659),
    i = r(481060),
    s = r(377171),
    a = r(724723),
    u = r(592125),
    d = r(594174),
    f = r(5192),
    p = r(571826),
    b = r(630759),
    m = r(539067),
    y = r(802063),
    h = r(210975),
    j = r(301107),
    g = r(65692),
    O = r(540247),
    x = r(785792),
    v = r(190054),
    N = r(245581),
    S = r(760373),
    _ = r(981631),
    E = r(388032),
    k = r(268999);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function P(e, t) {
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
function T(e) {
    let { badgeText: t, badgeColor: r } = e,
        o = l.useRef(t),
        c = l.useRef(r);
    return (0, n.jsx)(i.IGR, {
        text: o.current,
        color: c.current,
    });
}
function C(e) {
    let { transitionState: t, userId: r, channelId: C, onClose: I } = e,
        R = a.Z.useExperiment({ location: "SecureFramesUserVerificationModal" }, { autoTrackExposure: !0 }).enabled,
        A = (0, o.e7)([d.default], () => d.default.getUser(r)),
        Z = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getChannel(C)) ? void 0 : e.getGuildId();
        }),
        M = f.ZP.useName(Z, null, A),
        { fingerprint: D, userKey: F } = (0, g.q)({ userId: r }),
        U = (0, j.W)({
            fingerprintBase64: D,
            chunkSize: S.iQ,
            desiredLength: S.KN,
        }),
        V = l.useCallback(() => {
            (0, p.s$)({
                userId: r,
                channelId: C,
            });
        }, [C, r]),
        B = (0, h.wV)({
            userId: r,
            channelId: C,
        });
    (0, y.i)({
        channelId: C,
        userId: r,
        nickname: M,
        onAlertOpen: I,
    });
    let { isCurrentUserKeyPersistent: G, isOtherUserKeyPersistent: z, loading: L } = (0, m.y)({ userId: r }),
        W = l.useCallback(() => {
            null != F && ((0, b.TQ)(r, F, z, C, _.Sbl.E2EE_USER_VERIFY_MODAL), I());
        }, [F, r, z, C, I]),
        X = l.useCallback(() => {
            null != F && ((0, b.LO)(r, F, z), I());
        }, [F, r, z, I]),
        [K, q] = l.useMemo(
            () => (B ? [E.intl.string(E.t.UNUuen), s.Z.BG_BRAND] : [E.intl.string(E.t.y2b7CA), s.Z.STATUS_DANGER]),
            [B],
        ),
        J = l.useMemo(
            () =>
                (0, b.kK)({
                    isCurrentUserKeyPersistent: G,
                    isOtherUserKeyPersistent: z,
                    otherUserNickname: M,
                }),
            [G, z, M],
        ),
        Q = (0, O.P)({
            userId: r,
            keyToOmit: F,
        });
    l.useEffect(() => {
        (0, p.Rq)({
            userId: r,
            channelId: C,
        });
    }, [C, r]);
    let Y = {
            transitionState: t,
            title: E.intl.string(E.t["/WPGnJ"]),
            subtitle: E.intl.format(E.t.oc2kcX, { username: M }),
        },
        H = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: k.verification,
                    children: [
                        Q > 0 &&
                            (0, n.jsx)(i.Wn, {
                                messageType: i.QYI.INFO,
                                className: k.helpMessage,
                                children: E.intl.format(E.t.uZDkz8, { count: Q }),
                            }),
                        (0, n.jsxs)("div", {
                            className: k.header,
                            children: [
                                (0, n.jsx)(i.X6q, {
                                    variant: "text-sm/bold",
                                    color: "header-primary",
                                    children: E.intl.string(E.t["/WPGnJ"]),
                                }),
                                null != U &&
                                    (0, n.jsx)(v.H, {
                                        className: k.copyIcon,
                                        chunks: U,
                                        color: i.TVs.colors.INTERACTIVE_NORMAL,
                                        onCopy: V,
                                    }),
                                (0, n.jsx)("div", {
                                    className: k.codeStatus,
                                    children:
                                        null == U
                                            ? (0, n.jsx)(i.$jN, {
                                                  className: k.spinner,
                                                  type: i.RAz.SPINNING_CIRCLE,
                                              })
                                            : (0, n.jsx)(T, {
                                                  badgeText: K,
                                                  badgeColor: q,
                                              }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(x.b, {
                            className: k.code,
                            chunks: U,
                            columns: S.ak,
                        }),
                    ],
                }),
                (0, n.jsx)(i.Text, {
                    className: k.footer,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: J,
                }),
            ],
        }),
        $ = {
            text: B ? E.intl.string(E.t["Osb+/v"]) : E.intl.string(E.t["0tvNAg"]),
            disabled: null == U || L,
            onClick: B ? X : W,
        },
        ee = {
            text: E.intl.string(E.t["ETE/oK"]),
            onClick: I,
            variant: "secondary",
        };
    return R
        ? (0, n.jsx)(
              c.Modal,
              P(w({ onClose: I }, Y), {
                  actions: [ee, $],
                  children: H,
              }),
          )
        : (0, n.jsxs)(
              N.Z,
              P(w({}, Y), {
                  children: [
                      H,
                      (0, n.jsx)("div", {
                          "data-button-hoisted-classname-wrapper": !0,
                          className: k.verifiedButton,
                          children: (0, n.jsx)(i.zxk, P(w({}, $), { fullWidth: !0 })),
                      }),
                      (0, n.jsx)(i.zxk, P(w({}, ee), { fullWidth: !0 })),
                  ],
              }),
          );
}
