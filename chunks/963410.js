r.r(t), r.d(t, { default: () => h }), r(388685);
var n = r(54381),
    l = r(473749),
    u = r(793030),
    i = r(442837),
    c = r(481060),
    o = r(592125),
    s = r(594174),
    a = r(5192),
    f = r(571826),
    d = r(630759),
    E = r(539067),
    g = r(802063),
    y = r(210975),
    p = r(301107),
    b = r(65692),
    m = r(540247),
    O = r(785792),
    S = r(190054),
    T = r(760373),
    N = r(981631),
    j = r(388032),
    C = r(979519);
function _(e) {
    let { badgeText: t, badgeColor: r } = e,
        u = l.useRef(t),
        i = l.useRef(r);
    return (0, n.jsx)(c.IGR, {
        text: u.current,
        color: i.current,
    });
}
function h(e) {
    var t, r;
    let { transitionState: h, userId: v, channelId: I, onClose: R } = e,
        Z = (0, i.e7)([s.default], () => s.default.getUser(v)),
        A = (0, i.e7)([o.Z], () => {
            var e;
            return null == (e = o.Z.getChannel(I)) ? void 0 : e.getGuildId();
        }),
        w = a.ZP.useName(A, null, Z),
        { fingerprint: x, userKey: P } = (0, b.q)({ userId: v }),
        F = (0, p.W)({
            fingerprintBase64: x,
            chunkSize: T.iQ,
            desiredLength: T.KN,
        }),
        U = l.useCallback(() => {
            (0, f.s$)({
                userId: v,
                channelId: I,
            });
        }, [I, v]),
        k = (0, y.wV)({
            userId: v,
            channelId: I,
        });
    (0, g.i)({
        channelId: I,
        userId: v,
        nickname: w,
        onAlertOpen: R,
    });
    let { isCurrentUserKeyPersistent: M, isOtherUserKeyPersistent: D, loading: V } = (0, E.y)({ userId: v }),
        K = l.useCallback(() => {
            null != P && ((0, d.TQ)(v, P, D, I, N.Sbl.E2EE_USER_VERIFY_MODAL), R());
        }, [P, v, D, I, R]),
        L = l.useCallback(() => {
            null != P && ((0, d.LO)(v, P, D), R());
        }, [P, v, D, R]),
        [B, G] = l.useMemo(
            () =>
                k
                    ? [j.intl.string(j.t.UNUuem), c.TVs.colors.BACKGROUND_BRAND.css]
                    : [j.intl.string(j.t.y2b7CA), c.TVs.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css],
            [k],
        ),
        Y = l.useMemo(
            () =>
                (0, d.kK)({
                    isCurrentUserKeyPersistent: M,
                    isOtherUserKeyPersistent: D,
                    otherUserNickname: w,
                }),
            [M, D, w],
        ),
        z = (0, m.P)({
            userId: v,
            keyToOmit: P,
        });
    l.useEffect(() => {
        (0, f.Rq)({
            userId: v,
            channelId: I,
        });
    }, [I, v]);
    let J = {
            transitionState: h,
            title: j.intl.string(j.t["/WPGnF"]),
            subtitle: j.intl.format(j.t.oc2kce, { username: w }),
        },
        W = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: C.verification,
                    children: [
                        z > 0 &&
                            (0, n.jsx)(c.Wn, {
                                messageType: c.QYI.INFO,
                                className: C.helpMessage,
                                children: j.intl.format(j.t.uZDkz0, { count: z }),
                            }),
                        (0, n.jsxs)("div", {
                            className: C.header,
                            children: [
                                (0, n.jsx)(c.Heading, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: j.intl.string(j.t["/WPGnF"]),
                                }),
                                null != F &&
                                    (0, n.jsx)(S.H, {
                                        className: C.copyIcon,
                                        chunks: F,
                                        color: c.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: U,
                                    }),
                                (0, n.jsx)("div", {
                                    className: C.codeStatus,
                                    children:
                                        null == F
                                            ? (0, n.jsx)(c.$jN, {
                                                  className: C.spinner,
                                                  type: c.RAz.SPINNING_CIRCLE,
                                              })
                                            : (0, n.jsx)(_, {
                                                  badgeText: B,
                                                  badgeColor: G,
                                              }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(O.b, {
                            className: C.code,
                            chunks: F,
                            columns: T.ak,
                        }),
                    ],
                }),
                (0, n.jsx)(c.Text, {
                    className: C.footer,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: Y,
                }),
            ],
        }),
        X = {
            text: k ? j.intl.string(j.t["Osb+/n"]) : j.intl.string(j.t["0tvNAn"]),
            disabled: null == F || V,
            onClick: k ? L : K,
        },
        q = {
            text: j.intl.string(j.t["ETE/oC"]),
            onClick: R,
            variant: "secondary",
        };
    return (0, n.jsx)(
        u.Modal,
        ((t = (function (e) {
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
        })({ onClose: R }, J)),
        (r = r =
            {
                actions: [q, X],
                children: W,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
