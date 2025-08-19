r.r(t), r.d(t, { default: () => N }), r(388685);
var n = r(951288),
    l = r(647438),
    u = r(442837),
    i = r(82659),
    a = r(481060),
    s = r(377171),
    c = r(592125),
    o = r(594174),
    f = r(5192),
    d = r(571826),
    E = r(630759),
    y = r(539067),
    g = r(802063),
    p = r(210975),
    S = r(301107),
    b = r(65692),
    _ = r(540247),
    m = r(785792),
    O = r(190054),
    v = r(760373),
    R = r(981631),
    T = r(388032),
    h = r(547990);
function j(e) {
    let { badgeText: t, badgeColor: r } = e,
        u = l.useRef(t),
        i = l.useRef(r);
    return (0, n.jsx)(a.IGR, {
        text: u.current,
        color: i.current,
    });
}
function N(e) {
    var t, r;
    let { transitionState: N, userId: C, channelId: I, onClose: Z } = e,
        A = (0, u.e7)([o.default], () => o.default.getUser(C)),
        w = (0, u.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getChannel(I)) ? void 0 : e.getGuildId();
        }),
        P = f.ZP.useName(w, null, A),
        { fingerprint: x, userKey: U } = (0, b.q)({ userId: C }),
        k = (0, S.W)({
            fingerprintBase64: x,
            chunkSize: v.iQ,
            desiredLength: v.KN,
        }),
        M = l.useCallback(() => {
            (0, d.s$)({
                userId: C,
                channelId: I,
            });
        }, [I, C]),
        F = (0, p.wV)({
            userId: C,
            channelId: I,
        });
    (0, g.i)({
        channelId: I,
        userId: C,
        nickname: P,
        onAlertOpen: Z,
    });
    let { isCurrentUserKeyPersistent: V, isOtherUserKeyPersistent: K, loading: D } = (0, y.y)({ userId: C }),
        L = l.useCallback(() => {
            null != U && ((0, E.TQ)(C, U, K, I, R.Sbl.E2EE_USER_VERIFY_MODAL), Z());
        }, [U, C, K, I, Z]),
        Y = l.useCallback(() => {
            null != U && ((0, E.LO)(C, U, K), Z());
        }, [U, C, K, Z]),
        [G, z] = l.useMemo(
            () => (F ? [T.intl.string(T.t.UNUuen), s.Z.BG_BRAND] : [T.intl.string(T.t.y2b7CA), s.Z.STATUS_DANGER]),
            [F],
        ),
        B = l.useMemo(
            () =>
                (0, E.kK)({
                    isCurrentUserKeyPersistent: V,
                    isOtherUserKeyPersistent: K,
                    otherUserNickname: P,
                }),
            [V, K, P],
        ),
        J = (0, _.P)({
            userId: C,
            keyToOmit: U,
        });
    l.useEffect(() => {
        (0, d.Rq)({
            userId: C,
            channelId: I,
        });
    }, [I, C]);
    let W = {
            transitionState: N,
            title: T.intl.string(T.t["/WPGnJ"]),
            subtitle: T.intl.format(T.t.oc2kcX, { username: P }),
        },
        X = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: h.verification,
                    children: [
                        J > 0 &&
                            (0, n.jsx)(a.Wn, {
                                messageType: a.QYI.INFO,
                                className: h.helpMessage,
                                children: T.intl.format(T.t.uZDkz8, { count: J }),
                            }),
                        (0, n.jsxs)("div", {
                            className: h.header,
                            children: [
                                (0, n.jsx)(a.X6q, {
                                    variant: "text-sm/bold",
                                    color: "header-primary",
                                    children: T.intl.string(T.t["/WPGnJ"]),
                                }),
                                null != k &&
                                    (0, n.jsx)(O.H, {
                                        className: h.copyIcon,
                                        chunks: k,
                                        color: a.TVs.colors.INTERACTIVE_NORMAL,
                                        onCopy: M,
                                    }),
                                (0, n.jsx)("div", {
                                    className: h.codeStatus,
                                    children:
                                        null == k
                                            ? (0, n.jsx)(a.$jN, {
                                                  className: h.spinner,
                                                  type: a.RAz.SPINNING_CIRCLE,
                                              })
                                            : (0, n.jsx)(j, {
                                                  badgeText: G,
                                                  badgeColor: z,
                                              }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(m.b, {
                            className: h.code,
                            chunks: k,
                            columns: v.ak,
                        }),
                    ],
                }),
                (0, n.jsx)(a.Text, {
                    className: h.footer,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: B,
                }),
            ],
        }),
        q = {
            text: F ? T.intl.string(T.t["Osb+/v"]) : T.intl.string(T.t["0tvNAg"]),
            disabled: null == k || D,
            onClick: F ? Y : L,
        },
        $ = {
            text: T.intl.string(T.t["ETE/oK"]),
            onClick: Z,
            variant: "secondary",
        };
    return (0, n.jsx)(
        i.Modal,
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
        })({ onClose: Z }, W)),
        (r = r =
            {
                actions: [$, q],
                children: X,
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
