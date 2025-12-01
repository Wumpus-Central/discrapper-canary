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
    N = r(388032),
    h = r(547990);
function j(e) {
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
        w = (0, i.e7)([o.Z], () => {
            var e;
            return null == (e = o.Z.getChannel(R)) ? void 0 : e.getGuildId();
        }),
        A = a.ZP.useName(w, null, I),
        { fingerprint: x, userKey: P } = (0, b.q)({ userId: C }),
        k = (0, p.W)({
            fingerprintBase64: x,
            chunkSize: _.iQ,
            desiredLength: _.KN,
        }),
        M = l.useCallback(() => {
            (0, f.s$)({
                userId: C,
                channelId: R,
            });
        }, [R, C]),
        U = (0, y.wV)({
            userId: C,
            channelId: R,
        });
    (0, g.i)({
        channelId: R,
        userId: C,
        nickname: A,
        onAlertOpen: Z,
    });
    let { isCurrentUserKeyPersistent: F, isOtherUserKeyPersistent: V, loading: D } = (0, E.y)({ userId: C }),
        K = l.useCallback(() => {
            null != P && ((0, d.TQ)(C, P, V, R, T.Sbl.E2EE_USER_VERIFY_MODAL), Z());
        }, [P, C, V, R, Z]),
        L = l.useCallback(() => {
            null != P && ((0, d.LO)(C, P, V), Z());
        }, [P, C, V, Z]),
        [G, Y] = l.useMemo(
            () =>
                U
                    ? [N.intl.string(N.t.UNUuem), c.TVs.colors.BG_BRAND.css]
                    : [N.intl.string(N.t.y2b7CA), c.TVs.colors.STATUS_DANGER.css],
            [U],
        ),
        B = l.useMemo(
            () =>
                (0, d.kK)({
                    isCurrentUserKeyPersistent: F,
                    isOtherUserKeyPersistent: V,
                    otherUserNickname: A,
                }),
            [F, V, A],
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
            title: N.intl.string(N.t["/WPGnF"]),
            subtitle: N.intl.format(N.t.oc2kce, { username: A }),
        },
        W = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: h.verification,
                    children: [
                        z > 0 &&
                            (0, n.jsx)(c.Wn, {
                                messageType: c.QYI.INFO,
                                className: h.helpMessage,
                                children: N.intl.format(N.t.uZDkz0, { count: z }),
                            }),
                        (0, n.jsxs)("div", {
                            className: h.header,
                            children: [
                                (0, n.jsx)(c.Heading, {
                                    variant: "text-sm/bold",
                                    color: "header-primary",
                                    children: N.intl.string(N.t["/WPGnF"]),
                                }),
                                null != k &&
                                    (0, n.jsx)(S.H, {
                                        className: h.copyIcon,
                                        chunks: k,
                                        color: c.TVs.colors.INTERACTIVE_NORMAL,
                                        onCopy: M,
                                    }),
                                (0, n.jsx)("div", {
                                    className: h.codeStatus,
                                    children:
                                        null == k
                                            ? (0, n.jsx)(c.$jN, {
                                                  className: h.spinner,
                                                  type: c.RAz.SPINNING_CIRCLE,
                                              })
                                            : (0, n.jsx)(j, {
                                                  badgeText: G,
                                                  badgeColor: Y,
                                              }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(O.b, {
                            className: h.code,
                            chunks: k,
                            columns: _.ak,
                        }),
                    ],
                }),
                (0, n.jsx)(c.Text, {
                    className: h.footer,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: B,
                }),
            ],
        }),
        q = {
            text: U ? N.intl.string(N.t["Osb+/n"]) : N.intl.string(N.t["0tvNAn"]),
            disabled: null == k || D,
            onClick: U ? L : K,
        },
        H = {
            text: N.intl.string(N.t["ETE/oC"]),
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
                actions: [H, q],
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
