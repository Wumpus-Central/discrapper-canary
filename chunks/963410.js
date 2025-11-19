r.r(t), r.d(t, { default: () => C }), r(388685);
var n = r(54381),
    l = r(473749),
    u = r(793030),
    i = r(442837),
    c = r(481060),
    a = r(377171),
    o = r(592125),
    s = r(594174),
    f = r(5192),
    d = r(571826),
    E = r(630759),
    g = r(539067),
    y = r(802063),
    p = r(210975),
    b = r(301107),
    m = r(65692),
    O = r(540247),
    S = r(785792),
    _ = r(190054),
    N = r(760373),
    h = r(981631),
    j = r(388032),
    T = r(547990);
function v(e) {
    let { badgeText: t, badgeColor: r } = e,
        u = l.useRef(t),
        i = l.useRef(r);
    return (0, n.jsx)(c.IGR, {
        text: u.current,
        color: i.current,
    });
}
function C(e) {
    var t, r;
    let { transitionState: C, userId: R, channelId: Z, onClose: I } = e,
        w = (0, i.e7)([s.default], () => s.default.getUser(R)),
        A = (0, i.e7)([o.Z], () => {
            var e;
            return null == (e = o.Z.getChannel(Z)) ? void 0 : e.getGuildId();
        }),
        x = f.ZP.useName(A, null, w),
        { fingerprint: P, userKey: k } = (0, m.q)({ userId: R }),
        M = (0, b.W)({
            fingerprintBase64: P,
            chunkSize: N.iQ,
            desiredLength: N.KN,
        }),
        U = l.useCallback(() => {
            (0, d.s$)({
                userId: R,
                channelId: Z,
            });
        }, [Z, R]),
        F = (0, p.wV)({
            userId: R,
            channelId: Z,
        });
    (0, y.i)({
        channelId: Z,
        userId: R,
        nickname: x,
        onAlertOpen: I,
    });
    let { isCurrentUserKeyPersistent: V, isOtherUserKeyPersistent: D, loading: K } = (0, g.y)({ userId: R }),
        L = l.useCallback(() => {
            null != k && ((0, E.TQ)(R, k, D, Z, h.Sbl.E2EE_USER_VERIFY_MODAL), I());
        }, [k, R, D, Z, I]),
        G = l.useCallback(() => {
            null != k && ((0, E.LO)(R, k, D), I());
        }, [k, R, D, I]),
        [Y, B] = l.useMemo(
            () => (F ? [j.intl.string(j.t.UNUuem), a.Z.BG_BRAND] : [j.intl.string(j.t.y2b7CA), a.Z.STATUS_DANGER]),
            [F],
        ),
        z = l.useMemo(
            () =>
                (0, E.kK)({
                    isCurrentUserKeyPersistent: V,
                    isOtherUserKeyPersistent: D,
                    otherUserNickname: x,
                }),
            [V, D, x],
        ),
        J = (0, O.P)({
            userId: R,
            keyToOmit: k,
        });
    l.useEffect(() => {
        (0, d.Rq)({
            userId: R,
            channelId: Z,
        });
    }, [Z, R]);
    let W = {
            transitionState: C,
            title: j.intl.string(j.t["/WPGnF"]),
            subtitle: j.intl.format(j.t.oc2kce, { username: x }),
        },
        q = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: T.verification,
                    children: [
                        J > 0 &&
                            (0, n.jsx)(c.Wn, {
                                messageType: c.QYI.INFO,
                                className: T.helpMessage,
                                children: j.intl.format(j.t.uZDkz0, { count: J }),
                            }),
                        (0, n.jsxs)("div", {
                            className: T.header,
                            children: [
                                (0, n.jsx)(c.Heading, {
                                    variant: "text-sm/bold",
                                    color: "header-primary",
                                    children: j.intl.string(j.t["/WPGnF"]),
                                }),
                                null != M &&
                                    (0, n.jsx)(_.H, {
                                        className: T.copyIcon,
                                        chunks: M,
                                        color: c.TVs.colors.INTERACTIVE_NORMAL,
                                        onCopy: U,
                                    }),
                                (0, n.jsx)("div", {
                                    className: T.codeStatus,
                                    children:
                                        null == M
                                            ? (0, n.jsx)(c.$jN, {
                                                  className: T.spinner,
                                                  type: c.RAz.SPINNING_CIRCLE,
                                              })
                                            : (0, n.jsx)(v, {
                                                  badgeText: Y,
                                                  badgeColor: B,
                                              }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(S.b, {
                            className: T.code,
                            chunks: M,
                            columns: N.ak,
                        }),
                    ],
                }),
                (0, n.jsx)(c.Text, {
                    className: T.footer,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: z,
                }),
            ],
        }),
        H = {
            text: F ? j.intl.string(j.t["Osb+/n"]) : j.intl.string(j.t["0tvNAn"]),
            disabled: null == M || K,
            onClick: F ? G : L,
        },
        X = {
            text: j.intl.string(j.t["ETE/oC"]),
            onClick: I,
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
        })({ onClose: I }, W)),
        (r = r =
            {
                actions: [X, H],
                children: q,
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
