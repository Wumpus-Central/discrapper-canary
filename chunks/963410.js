r.r(t), r.d(t, { default: () => v }), r(388685);
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
    _ = r(760373),
    T = r(981631),
    h = r(388032),
    j = r(547990);
function N(e) {
    let { badgeText: t, badgeColor: r } = e,
        u = l.useRef(t),
        i = l.useRef(r);
    return (0, n.jsx)(c.IGR, {
        text: u.current,
        color: i.current,
    });
}
function v(e) {
    var t, r;
    let { transitionState: v, userId: C, channelId: R, onClose: Z } = e,
        I = (0, i.e7)([s.default], () => s.default.getUser(C)),
        A = (0, i.e7)([o.Z], () => {
            var e;
            return null == (e = o.Z.getChannel(R)) ? void 0 : e.getGuildId();
        }),
        w = a.ZP.useName(A, null, I),
        { fingerprint: x, userKey: P } = (0, b.q)({ userId: C }),
        U = (0, p.W)({
            fingerprintBase64: x,
            chunkSize: _.iQ,
            desiredLength: _.KN,
        }),
        k = l.useCallback(() => {
            (0, f.s$)({
                userId: C,
                channelId: R,
            });
        }, [R, C]),
        F = (0, y.wV)({
            userId: C,
            channelId: R,
        });
    (0, g.i)({
        channelId: R,
        userId: C,
        nickname: w,
        onAlertOpen: Z,
    });
    let { isCurrentUserKeyPersistent: M, isOtherUserKeyPersistent: V, loading: D } = (0, E.y)({ userId: C }),
        K = l.useCallback(() => {
            null != P && ((0, d.TQ)(C, P, V, R, T.Sbl.E2EE_USER_VERIFY_MODAL), Z());
        }, [P, C, V, R, Z]),
        L = l.useCallback(() => {
            null != P && ((0, d.LO)(C, P, V), Z());
        }, [P, C, V, Z]),
        [G, Y] = l.useMemo(
            () =>
                F
                    ? [h.intl.string(h.t.UNUuem), c.TVs.colors.BACKGROUND_BRAND.css]
                    : [h.intl.string(h.t.y2b7CA), c.TVs.colors.STATUS_DANGER.css],
            [F],
        ),
        B = l.useMemo(
            () =>
                (0, d.kK)({
                    isCurrentUserKeyPersistent: M,
                    isOtherUserKeyPersistent: V,
                    otherUserNickname: w,
                }),
            [M, V, w],
        ),
        z = (0, m.P)({
            userId: C,
            keyToOmit: P,
        });
    l.useEffect(() => {
        (0, f.Rq)({
            userId: C,
            channelId: R,
        });
    }, [R, C]);
    let J = {
            transitionState: v,
            title: h.intl.string(h.t["/WPGnF"]),
            subtitle: h.intl.format(h.t.oc2kce, { username: w }),
        },
        W = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: j.verification,
                    children: [
                        z > 0 &&
                            (0, n.jsx)(c.Wn, {
                                messageType: c.QYI.INFO,
                                className: j.helpMessage,
                                children: h.intl.format(h.t.uZDkz0, { count: z }),
                            }),
                        (0, n.jsxs)("div", {
                            className: j.header,
                            children: [
                                (0, n.jsx)(c.Heading, {
                                    variant: "text-sm/bold",
                                    color: "header-primary",
                                    children: h.intl.string(h.t["/WPGnF"]),
                                }),
                                null != U &&
                                    (0, n.jsx)(S.H, {
                                        className: j.copyIcon,
                                        chunks: U,
                                        color: c.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: k,
                                    }),
                                (0, n.jsx)("div", {
                                    className: j.codeStatus,
                                    children:
                                        null == U
                                            ? (0, n.jsx)(c.$jN, {
                                                  className: j.spinner,
                                                  type: c.RAz.SPINNING_CIRCLE,
                                              })
                                            : (0, n.jsx)(N, {
                                                  badgeText: G,
                                                  badgeColor: Y,
                                              }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(O.b, {
                            className: j.code,
                            chunks: U,
                            columns: _.ak,
                        }),
                    ],
                }),
                (0, n.jsx)(c.Text, {
                    className: j.footer,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: B,
                }),
            ],
        }),
        X = {
            text: F ? h.intl.string(h.t["Osb+/n"]) : h.intl.string(h.t["0tvNAn"]),
            disabled: null == U || D,
            onClick: F ? L : K,
        },
        q = {
            text: h.intl.string(h.t["ETE/oC"]),
            onClick: Z,
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
        })({ onClose: Z }, J)),
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
