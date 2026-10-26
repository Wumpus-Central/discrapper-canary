let n, l;
i.d(t, { updateCreateGuildModal: () => z, openCreateGuildModal: () => X });
var a = i(477900),
    s = i(582128),
    o = i(192308),
    r = i(894778),
    d = i(174459),
    c = i(503698),
    u = i.n(c),
    m = i(284009),
    I = i.n(m),
    p = i(562708),
    C = i(935462),
    S = i(602853),
    E = i(661531),
    N = i(430690),
    D = i(475743),
    _ = i(362311),
    L = i(243460),
    T = i(424912),
    x = i(360475),
    h = i(939249),
    A = i(297264),
    G = i(834730),
    f = i(95477),
    j = i(821609),
    U = i(123292),
    g = i(376728),
    O = i(913122),
    v = i(235986),
    k = i(976860),
    M = i(4274),
    y = i(652215),
    R = i(105292),
    w = i(479043),
    P = i(906471),
    b = i(168482);
let J = "hTKzmak",
    H = "wumpus-friends",
    $ =
        ((n = window.GLOBAL_ENV.INVITE_HOST),
        (l = ""),
        null == n && ((n = location.host), (l = y.BVt.INVITE(""))),
        `${location.protocol}//${n}${l}/`),
    q = [J, `${$}${J}`, `${$}${H}`];
function B(e) {
    let { onClick: t } = e;
    return (0, a.jsxs)(h.D, {
        className: w.qd,
        onClick: function () {
            (t(), (0, k.pX)(y.BVt.GUILD_DISCOVERY));
        },
        children: [
            (0, a.jsx)("img", { width: 40, height: 40, className: w.aL, alt: "", src: b }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(A.D, {
                        className: w.qg,
                        variant: "heading-md/semibold",
                        children: R.intl.string(R.t.DwDxDU),
                    }),
                    (0, a.jsx)(G.E, {
                        className: w.qg,
                        variant: "text-xs/normal",
                        children: R.intl.string(R.t["5RL4CD"]),
                    }),
                ],
            }),
            (0, a.jsx)("img", { className: w.y8, alt: "", src: P }),
        ],
    });
}
function V(e) {
    let { onBack: t, onCreate: i, onClose: n, isSlideReady: l } = e,
        [o, r] = s.useState(""),
        [d, c] = s.useState(!1),
        u = s.useRef(!1),
        [m, I] = s.useState(null),
        p = s.useRef(null);
    async function S(e) {
        if ((e.preventDefault(), u.current)) return;
        let t = o.trim();
        if ("" === t) return void I(R.intl.string(R.t.IRq5ah));
        (I(null), (u.current = !0), c(!0));
        let i = t.split("/"),
            l = i[i.length - 1];
        try {
            let e = null;
            try {
                let { invite: i } = await g.Ay.resolveInvite(l, "Join Guild", { inputValue: t });
                e = i;
            } catch (e) {
                throw new O.Wl(e);
            }
            if (e?.channel == null) throw R.intl.string(R.t["GEYI+Z"]);
            let i = g.Ay.getInviteContext("Join Guild", e);
            await g.Ay.acceptInvite({
                inviteKey: e.code,
                context: i,
                callback: (e) => {
                    (n(), g.Ay.transitionToInvite(e));
                },
            });
        } catch (e) {
            "string" == typeof e
                ? I(e)
                : e instanceof O.Wl || e instanceof O.LG
                  ? I((0, M.s)(e.code))
                  : I(R.intl.string(R.t.dDZRdy));
        } finally {
            ((u.current = !1), c(!1));
        }
    }
    return (
        s.useEffect(() => {
            l && p.current?.focus();
        }, [l]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(C.rQ, {
                    "data-migration-pending": !0,
                    className: w.wx,
                    direction: v.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, a.jsx)(A.D, {
                            className: w.DD,
                            variant: "heading-xl/semibold",
                            children: R.intl.string(R.t.riOUtB),
                        }),
                        (0, a.jsx)(G.E, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: R.intl.string(R.t["7jub2t"]),
                        }),
                        (0, a.jsx)(C.s_, { "data-migration-pending": !0, className: w.b, onClick: n }),
                    ],
                }),
                (0, a.jsxs)(C.$m, {
                    "data-migration-pending": !0,
                    className: null != i ? w.uN : w.__invalid_content,
                    scrollbarGutter: null == i && void 0,
                    children: [
                        (0, a.jsx)("form", {
                            onSubmit: S,
                            className: w.$j,
                            children: (0, a.jsx)(f.k, {
                                label: R.intl.string(R.t.qreV25),
                                required: !0,
                                error: m,
                                value: o,
                                onChange: r,
                                placeholder: `${$}${J}`,
                                inputRef: p,
                                autoFocus: null != i,
                                helperText:
                                    null != i ? R.intl.format(R.t.kOiiUl, { inviteCode: J, vanityCode: H }) : void 0,
                            }),
                        }),
                        null != i
                            ? (0, a.jsxs)("div", {
                                  className: w.IR,
                                  children: [
                                      (0, a.jsx)(j.$, {
                                          variant: "secondary",
                                          fullWidth: !0,
                                          text: R.intl.string(R.t.EHWhyt),
                                          onClick: function () {
                                              (n(), (0, k.pX)(y.BVt.GUILD_DISCOVERY));
                                          },
                                      }),
                                      (0, a.jsx)(j.$, {
                                          variant: "primary",
                                          fullWidth: !0,
                                          text: R.intl.string(R.t["Ts/9Ac"]),
                                          loading: d,
                                          onClick: S,
                                      }),
                                  ],
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(G.E, {
                                          variant: "text-sm/medium",
                                          color: "text-subtle",
                                          children: R.intl.string(R.t.Bnq46H),
                                      }),
                                      (0, a.jsx)("div", {
                                          className: w.eU,
                                          children: q.map((e) =>
                                              (0, a.jsx)(h.D, { className: w.Bb, onClick: () => r(e), children: e }, e),
                                          ),
                                      }),
                                      (0, a.jsx)(B, { onClick: n }),
                                  ],
                              }),
                    ],
                }),
                null != i
                    ? (0, a.jsx)(C.jl, {
                          "data-migration-pending": !0,
                          className: w.cQ,
                          children: (0, a.jsx)(G.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: R.intl.format(R.t["9BRB6M"], {
                                  createServerHook: (e, t) =>
                                      (0, a.jsx)(
                                          U.Q,
                                          { variant: "primary", text: e, textVariant: "text-sm/medium", onClick: i },
                                          t,
                                      ),
                              }),
                          }),
                      })
                    : (0, a.jsxs)(C.jl, {
                          "data-migration-pending": !0,
                          className: w.qr,
                          children: [
                              (0, a.jsx)(j.$, {
                                  variant: "primary",
                                  text: R.intl.string(R.t["Ts/9Ac"]),
                                  loading: d,
                                  onClick: S,
                              }),
                              (0, a.jsx)(U.Q, {
                                  size: "sm",
                                  variant: "primary",
                                  textVariant: "text-sm/medium",
                                  text: R.intl.string(R.t["13/7kX"]),
                                  onClick: t,
                              }),
                          ],
                      }),
            ],
        })
    );
}
var Z = i(819638),
    W = i(899579);
function F(e) {
    let {
            transitionState: t,
            initialSlide: i = Z.oS.GUILD_TEMPLATES,
            onSuccess: n,
            onClose: l,
            onSlideChange: o,
            hasJoinButton: r,
            joinFirst: c = !1,
        } = e,
        [m, h] = s.useState(i),
        A = (0, D.Ay)(m),
        [G, f] = s.useState(null),
        [j, U] = s.useState(null),
        [g, O] = s.useState(null),
        [v, k] = s.useState(!1);
    (s.useEffect(() => {
        h(i);
    }, [h, i]),
        s.useEffect(() => {
            m !== A && o(m, A);
        }, [o, m, A]));
    let M = s.useCallback((e) => {
            (h(Z.oS.CREATION_INTENT),
                U(e),
                d.default.track(y.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code }));
        }, []),
        R = s.useCallback((e) => {
            (k(e === Z.IR.COMMUNITY), h(Z.oS.CUSTOMIZE_GUILD));
        }, []),
        w = s.useCallback(() => h(Z.oS.JOIN_GUILD), [h]),
        P = s.useCallback(() => {
            m === Z.oS.CUSTOMIZE_GUILD ? h(Z.oS.CREATION_INTENT) : (h(Z.oS.GUILD_TEMPLATES), U(null));
        }, [m]),
        b = s.useCallback(
            (e) => {
                (O(e), n(e));
            },
            [n, O],
        ),
        J = s.useCallback(() => {
            (I()(null != g, "handleSuccess called before onGuildCreated"), n(g));
        }, [n, g]),
        H = { impression_group: p.ImpressionGroups.GUILD_ADD_FLOW },
        $ = (0, S.r)(E.A.modules.modal.WIDTH_SMALL),
        q = (0, a.jsx)(
            N.q,
            {
                id: Z.oS.JOIN_GUILD,
                impressionName: p.ImpressionNames.GUILD_ADD_JOIN,
                impressionProperties: H,
                children: (0, a.jsx)(V, {
                    onBack: c ? void 0 : P,
                    onCreate: c ? P : void 0,
                    onClose: l,
                    isSlideReady: G === Z.oS.JOIN_GUILD,
                }),
            },
            Z.oS.JOIN_GUILD,
        ),
        B = [
            (0, a.jsx)(
                N.q,
                {
                    id: Z.oS.GUILD_TEMPLATES,
                    impressionName: p.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: H,
                    children: (0, a.jsx)(x.A, {
                        isNewUser: !1,
                        onJoin: r ? w : void 0,
                        onChooseTemplate: M,
                        onClose: l,
                        isSlideReady: c ? G === Z.oS.GUILD_TEMPLATES : void 0,
                    }),
                },
                Z.oS.GUILD_TEMPLATES,
            ),
            (0, a.jsx)(
                N.q,
                {
                    id: Z.oS.CREATION_INTENT,
                    impressionName: p.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: H,
                    children: (0, a.jsx)(L.A, { onClose: l, onBack: P, onCreationIntentChosen: R }),
                },
                Z.oS.CREATION_INTENT,
            ),
            (0, a.jsx)(
                N.q,
                {
                    id: Z.oS.CUSTOMIZE_GUILD,
                    impressionName: p.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: H,
                    children: (0, a.jsx)(T.A, {
                        guildTemplate: j,
                        onGuildCreated: b,
                        onClose: l,
                        onBack: P,
                        isSlideReady: G === Z.oS.CUSTOMIZE_GUILD,
                        isCommunity: v,
                    }),
                },
                Z.oS.CUSTOMIZE_GUILD,
            ),
            (0, a.jsx)(
                N.q,
                {
                    id: Z.oS.CHANNEL_PROMPT,
                    impressionName: p.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: H,
                    children: (0, a.jsx)(_.A, {
                        createdGuildId: g,
                        onClose: l,
                        onChannelPromptCompleted: J,
                        isSlideReady: G === Z.oS.CHANNEL_PROMPT,
                    }),
                },
                Z.oS.CHANNEL_PROMPT,
            ),
        ];
    return (0, a.jsx)(C.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        disableTrack: !0,
        fullscreenOnMobile: !1,
        className: u()(W.yl, { [W._v]: c }),
        parentComponent: "CreateGuildModal",
        children: (0, a.jsx)(N.t, {
            activeSlide: m,
            slideWrapperClassName: u()(W.p_, { [W.RO]: c }),
            width: c ? void 0 : $,
            contentDisplay: "flex",
            onSlideReady: (e) => f(e),
            children: c ? [q, ...B] : [...B, q],
        }),
    });
}
var Q = i(315290);
let Y = new Map();
function K(e, t, i, n) {
    let l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return (0, a.jsx)(F, {
        onSuccess: (t) => {
            (r.A.flowStep(Q.do.CREATE_GUILD, Q.jC.SUCCESS), e.onClose(), n?.(t));
        },
        onSlideChange: (e, t) => {
            let n = l && e === Z.oS.JOIN_GUILD && null == t;
            !(function (e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                switch (e) {
                    case Z.oS.GUILD_TEMPLATES:
                        (r.A.flowStepOrStart(Q.do.CREATE_GUILD, Q.jC.GUILD_TEMPLATES),
                            d.default.track(y.HAw.OPEN_MODAL, { type: "Create Guild Templates", location: t }));
                        break;
                    case Z.oS.CUSTOMIZE_GUILD:
                        (r.A.flowStep(Q.do.CREATE_GUILD, Q.jC.GUILD_CREATE),
                            d.default.track(y.HAw.OPEN_MODAL, { type: "Create Guild Step 2", location: t }));
                        break;
                    case Z.oS.CREATION_INTENT:
                        d.default.track(y.HAw.OPEN_MODAL, { type: "Server Intent Discovery", location: t });
                        break;
                    case Z.oS.JOIN_GUILD:
                        (i
                            ? r.A.flowStepOrStart(Q.do.CREATE_GUILD, Q.jC.JOIN_GUILD)
                            : r.A.flowStep(Q.do.CREATE_GUILD, Q.jC.JOIN_GUILD),
                            d.default.track(y.HAw.OPEN_MODAL, { type: "Join Guild", location: t }));
                }
            })(e, n && "Guild List" === i ? "Guild List - Join First" : i, n);
        },
        initialSlide: t ?? (l ? Z.oS.JOIN_GUILD : void 0),
        joinFirst: l,
        hasJoinButton: !0,
        ...e,
    });
}
function X(e) {
    let { initialSlide: t, location: i, onSuccess: n, joinFirst: l } = e,
        a = (0, o.getInteractingModalContext)();
    (0, o.hasModalOpen)(Z.fc, a) ||
        (Y.set(a, { location: i, onSuccess: n, joinFirst: l }),
        (0, o.openModal)(
            (e) => K(e, t, i, n, l),
            {
                modalKey: Z.fc,
                onCloseCallback: () => {
                    Y.delete(a);
                },
            },
            a,
        ));
}
function z(e) {
    let { slide: t, location: i } = e,
        n = (0, o.getInteractingModalContext)(),
        l = Y.get(n);
    null != l &&
        (0, o.updateModal)(
            Z.fc,
            (e) => K(e, t, i ?? l.location, l.onSuccess, l.joinFirst),
            void 0,
            () => {
                Y.delete(n);
            },
            n,
        );
}
