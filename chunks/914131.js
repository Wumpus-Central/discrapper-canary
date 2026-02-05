i.d(t, { default: () => O });
var n = i(627968),
    s = i(64700),
    a = i(284009),
    r = i.n(a),
    l = i(110259),
    o = i(417597),
    d = i(421380),
    u = i(397927),
    c = i(803306),
    m = i(631670),
    E = i(181658),
    g = i(576622),
    h = i(287809),
    S = i(954571),
    _ = i(427262),
    A = i(32120),
    f = i(574454),
    N = i(871210),
    T = i(917118),
    x = i(325866),
    v = i(350277),
    I = i(351486),
    p = i(789622),
    C = i(581735),
    R = i(652215),
    y = i(985018),
    L = i(176115);
function O(e) {
    let t,
        { source: i, transitionState: a, onClose: O, oneClickFlow: j = !1 } = e,
        [P, G] = s.useState(j ? C.E.SUGGESTIONS : C.E.INFO),
        [U, b] = s.useState(!1),
        [D, w] = s.useState(null),
        [k, B] = s.useState(j ? p.iv.SUGGESTION : p.iv.NONE),
        [F, H] = s.useState(!1),
        [z, V] = s.useState(!1),
        W = s.useRef(null),
        q = (0, o.bG)([f.A], () => f.A.isCurrentUsernameInvalid()),
        K = (0, o.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return r()(null != e, "PomeloModal: user cannot be undefined"), e;
        }),
        { usernameSuggestion: Y, usernameSuggestionLoading: $ } = (0, T.G)(j ? 2e3 : void 0);
    s.useEffect(() => {
        k === p.iv.EDIT_USERNAME && V(!0), S.default.track(R.HAw.POMELO_EDIT_STEP_VIEWED, { source: i, step: k });
    }, [k, i]),
        s.useEffect(() => {
            z || F || null == Y || !(Y.length > 0) || Z((e) => ({ ...e, username: Y }));
        }, [Y, z, F]);
    let [X, Z] = s.useState({ username: (0, N.et)(K), globalName: _.Ay.getName(K) }),
        J = (e) => {
            w(null), null != e.username && H(!0), Z((t) => ({ ...t, ...e }));
        },
        Q = s.useMemo(
            () => [
                { slideId: C.E.INFO, next: C.E.EDIT_SCREEN, footerButtons: ["REMIND_ME_LATER", "GET_STARTED"] },
                {
                    slideId: C.E.EDIT_SCREEN,
                    next: C.E.FINISH_LATER,
                    back: C.E.INFO,
                    footerButtons: [
                        k === p.iv.PREVIEW ? "GOT_IT" : "BACK",
                        k === p.iv.PREVIEW ? "GOT_IT" : k === p.iv.EDIT_USERNAME ? "SUBMIT" : "NEXT",
                    ],
                },
                { slideId: C.E.FINISH_LATER, back: C.E.EDIT_SCREEN },
                { slideId: C.E.SUGGESTIONS, footerButtons: [k === p.iv.PREVIEW ? "GOT_IT" : "UPDATE"] },
                { slideId: C.E.FINISH_LATER },
            ],
            [k],
        ),
        ee = Q.length,
        et = s.useCallback(async () => {
            if (X.globalName.length <= 0) {
                let e = y.intl.formatToPlainString(y.t.IpijXA, { minNum: 1, maxNum: 32 });
                w(e), S.default.track(R.HAw.POMELO_ERRORS, { reason: e, display_name_error: !0, location: "modal" });
                return;
            }
            if (_.Ay.getGlobalName(K) === X.globalName) return void B(p.iv.EDIT_USERNAME);
            try {
                w(null), b(!0), await (0, m.gt)({ global_name: X.globalName }), B(p.iv.EDIT_USERNAME);
            } catch (t) {
                let e = new E.A(t).getAnyErrorMessage();
                S.default.track(R.HAw.POMELO_ERRORS, { reason: e, display_name_error: !0, location: "modal" }), w(e);
            } finally {
                b(!1);
            }
        }, [K, X]),
        ei = s.useCallback(async () => {
            try {
                w(null),
                    b(!0),
                    await A.A.createPomelo({ username: (0, N.h_)(X.username) }, j),
                    await (0, c.eO)(K.id),
                    B(p.iv.PREVIEW);
            } catch (i) {
                let e = new E.A(i),
                    t =
                        e?.status != null && e.status >= 400 && e.status < 500
                            ? e.getAnyErrorMessage()
                            : y.intl.string(y.t.R0RpRX);
                w(t),
                    S.default.track(R.HAw.POMELO_ERRORS, {
                        reason: t,
                        username_error: !0,
                        location: "modal",
                        one_click_flow: j,
                    });
            } finally {
                b(!1);
            }
        }, [X, K.id, j]),
        en = q || (0, N.C4)(K),
        es = s.useCallback(() => {
            B(en ? p.iv.EDIT_USERNAME : p.iv.EDIT_DISPLAY_NAME), G(Q[Math.min(ee - 1, P + 1)].slideId);
        }, [P, Q, ee, en]),
        ea = s.useCallback(() => {
            w(null),
                P === C.E.EDIT_SCREEN
                    ? k === p.iv.EDIT_USERNAME
                        ? en
                            ? (B(p.iv.NONE), G(Q[Math.max(0, P - 1)].slideId))
                            : B(p.iv.EDIT_DISPLAY_NAME)
                        : k === p.iv.EDIT_DISPLAY_NAME
                          ? (B(p.iv.NONE), G(Q[Math.max(0, P - 1)].slideId))
                          : k === p.iv.PREVIEW && B(p.iv.EDIT_USERNAME)
                    : G(Q[Math.max(0, P - 1)].slideId);
        }, [Q, P, k, en]),
        er = s.useCallback(() => {
            G(C.E.FINISH_LATER);
        }, []),
        el = s.useMemo(
            () =>
                P === C.E.EDIT_SCREEN && k === p.iv.EDIT_DISPLAY_NAME
                    ? et
                    : P === C.E.EDIT_SCREEN && k === p.iv.EDIT_USERNAME
                      ? ei
                      : P === C.E.SUGGESTIONS && k === p.iv.SUGGESTION
                        ? ei
                        : es,
            [P, k, et, ei, es],
        ),
        eo = s.useMemo(
            () =>
                M(
                    Q.find((e) => e.slideId === P)?.footerButtons ?? [],
                    { handleNext: el, handleBack: ea, handleRemindMeLater: er, onClose: O },
                    U,
                    $,
                    F,
                ),
            [ea, er, el, O, Q, P, U, $, F],
        ),
        ed = s.useMemo(() => (0, N.Bj)(K), [K]);
    return (
        s.useLayoutEffect(() => {
            (0, g.A)(K.id, ed);
        }, [K, ed]),
        s.useEffect(() => {
            switch (k) {
                case p.iv.EDIT_DISPLAY_NAME:
                    W.current?.focusDisplayName();
                    break;
                case p.iv.EDIT_USERNAME:
                case p.iv.SUGGESTION:
                    W.current?.focusUsername();
            }
        }, [k]),
        !F &&
            null == D &&
            (k === p.iv.EDIT_USERNAME
                ? (t = y.intl.formatToPlainString(y.t.AJh8BR, { source: K.username }))
                : k === p.iv.SUGGESTION && ($ || null != Y) && (t = y.intl.string(y.t["i/2SgP"]))),
        (0, n.jsxs)(u.EOs, {
            "data-migration-pending": !0,
            className: L.CR,
            impression: {
                impressionName: l.ImpressionNames.POMELO_LANDING,
                impressionProperties: {
                    source: i,
                    impression_group: l.ImpressionGroups.POMELO_FLOW,
                    one_click_flow: j,
                },
            },
            transitionState: a,
            size: u.rIJ.DYNAMIC,
            parentComponent: "PomeloModal",
            children: [
                (0, n.jsx)(d.$n, {
                    "data-migration-pending": !0,
                    onClick: () => {
                        P === C.E.SUGGESTIONS || P === C.E.EDIT_SCREEN ? G(C.E.FINISH_LATER) : O();
                    },
                    size: d.$n.Sizes.MIN,
                    look: d.$n.Looks.BLANK,
                    className: L.G3,
                    "aria-label": y.intl.string(y.t.cpT0Cq),
                    children: (0, n.jsx)(u.PGe, {
                        size: "custom",
                        color: "currentColor",
                        width: 15,
                        height: 15,
                        className: L.VN,
                    }),
                }),
                (0, n.jsx)(u.$mQ, {
                    "data-migration-pending": !0,
                    className: L.hQ,
                    children: (0, n.jsxs)(u.tN_, {
                        activeSlide: P,
                        width: 480,
                        children: [
                            (0, n.jsx)(u.q7S, { id: C.E.INFO, children: (0, n.jsx)(I.A, { user: K }) }),
                            (0, n.jsx)(u.q7S, {
                                id: C.E.EDIT_SCREEN,
                                children: (0, n.jsx)(x.A, {
                                    user: K,
                                    error: D,
                                    editState: k,
                                    userRef: W,
                                    formValues: X,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => B(p.iv.EDIT_USERNAME),
                                    onFocusDisplayName: () => B(p.iv.EDIT_DISPLAY_NAME),
                                    onClose: O,
                                }),
                            }),
                            (0, n.jsx)(u.q7S, { id: C.E.FINISH_LATER, children: (0, n.jsx)(v.A, { onClose: O }) }),
                            (0, n.jsx)(u.q7S, {
                                id: C.E.SUGGESTIONS,
                                children: (0, n.jsx)(x.A, {
                                    user: K,
                                    error: D,
                                    editState: k,
                                    userRef: W,
                                    formValues: X,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => B(p.iv.SUGGESTION),
                                    onFocusDisplayName: () => B(p.iv.EDIT_DISPLAY_NAME),
                                    onClose: O,
                                    usernameSuggestionLoading: $,
                                    oneClickFlow: j,
                                }),
                            }),
                        ],
                    }),
                }),
                eo,
            ],
        })
    );
}
let M = (e, t, i, s, a) =>
    0 === e.length
        ? null
        : (0, n.jsxs)(u.jlY, {
              "data-migration-pending": !0,
              className: L.qr,
              children: [
                  (0, n.jsxs)("div", {
                      className: L.mG,
                      children: [
                          e.includes("REMIND_ME_LATER") &&
                              (0, n.jsx)(d.$n, {
                                  "data-migration-pending": !0,
                                  className: L.I,
                                  type: "button",
                                  size: d.$n.Sizes.SMALL,
                                  look: d.$n.Looks.BLANK,
                                  color: d.$n.Colors.CUSTOM,
                                  onClick: t.handleRemindMeLater,
                                  children: y.intl.string(y.t["1mGbXA"]),
                              }),
                          e.includes("NEXT") &&
                              (0, n.jsx)(u.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: y.intl.string(y.t.PDTjLN),
                                  type: "button",
                                  loading: i,
                                  onClick: t.handleNext,
                              }),
                          e.includes("SUBMIT") &&
                              (0, n.jsx)(u.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: y.intl.string(y.t.geKm7t),
                                  type: "button",
                                  loading: i,
                                  onClick: t.handleNext,
                              }),
                          e.includes("GET_STARTED") &&
                              (0, n.jsx)(u.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: y.intl.string(y.t.LhlgY9),
                                  type: "button",
                                  onClick: t.handleNext,
                              }),
                          e.includes("GOT_IT") &&
                              (0, n.jsx)(u.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: y.intl.string(y.t["NX+WJN"]),
                                  type: "button",
                                  onClick: t.onClose,
                              }),
                          e.includes("UPDATE") &&
                              (0, n.jsx)(u.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  text: y.intl.string(y.t.VZANAD),
                                  type: "button",
                                  disabled: s && !a,
                                  loading: i,
                                  onClick: t.handleNext,
                              }),
                      ],
                  }),
                  e.includes("BACK") &&
                      (0, n.jsx)(d.$n, {
                          "data-migration-pending": !0,
                          className: L.I,
                          type: "button",
                          size: d.$n.Sizes.SMALL,
                          look: d.$n.Looks.BLANK,
                          color: d.$n.Colors.CUSTOM,
                          onClick: t.handleBack,
                          children: y.intl.string(y.t["13/7kX"]),
                      }),
              ],
          });
