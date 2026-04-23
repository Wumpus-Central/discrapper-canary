let i, l;
n.d(t, { updateCreateGuildModal: () => H, openCreateGuildModal: () => F });
var s = n(627968),
    a = n(64700),
    r = n(192308),
    o = n(894778),
    c = n(954571),
    d = n(284009),
    u = n.n(d),
    p = n(110259),
    m = n(602853),
    x = n(661531),
    g = n(935462),
    h = n(430690),
    C = n(475743),
    N = n(362311),
    b = n(243460),
    j = n(424912),
    E = n(360475),
    S = n(862482),
    v = n(939249),
    I = n(534514),
    A = n(834730),
    f = n(292666),
    y = n(821609),
    D = n(376728),
    T = n(845584),
    k = n(235986),
    L = n(976860),
    _ = n(4274),
    w = n(652215),
    O = n(985018),
    P = n(250310),
    U = n(906471),
    G = n(168482);
let M = "hTKzmak",
    R =
        ((i = window.GLOBAL_ENV.INVITE_HOST),
        (l = ""),
        null == i && ((i = location.host), (l = w.BVt.INVITE(""))),
        `${location.protocol}//${i}${l}/`),
    B = [M, `${R}${M}`, `${R}wumpus-friends`],
    K = (e) => {
        let { onClick: t } = e;
        return (0, s.jsxs)(v.D, {
            className: P.qd,
            onClick: () => {
                t(), (0, L.pX)(w.BVt.GUILD_DISCOVERY);
            },
            children: [
                (0, s.jsx)("img", { width: 40, height: 40, className: P.aL, alt: "", src: G }),
                (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)(I.D, {
                            className: P.qg,
                            variant: "heading-md/semibold",
                            children: O.intl.string(O.t.DwDxDU),
                        }),
                        (0, s.jsx)(A.E, {
                            className: P.qg,
                            variant: "text-xs/normal",
                            children: O.intl.string(O.t["5RL4CD"]),
                        }),
                    ],
                }),
                (0, s.jsx)("img", { className: P.y8, alt: "", src: U }),
            ],
        });
    };
function q(e) {
    let { onBack: t, onClose: n, isSlideReady: i } = e,
        [l, r] = a.useState(""),
        [o, c] = a.useState(!1),
        [d, u] = a.useState(null),
        p = a.useRef(null);
    a.useEffect(() => {
        i && p.current?.focus();
    }, [i]);
    let m = (e) => {
        e.preventDefault();
        let t = l.trim();
        if ("" === t) return void u(O.intl.string(O.t.IRq5ah));
        u(null), c(!0);
        let i = t.split("/"),
            s = i[i.length - 1];
        D.Ay.resolveInvite(s, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((c(!1), null == t)) return void u(O.intl.string(O.t["GEYI+Z"]));
                if (null != t.channel) {
                    let e = D.Ay.getInviteContext("Join Guild", t);
                    D.Ay.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), D.Ay.transitionToInvite(e);
                        },
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof T.Wl || e instanceof T.LG ? u((0, _.s)(e.code)) : u(O.intl.string(O.t.dDZRdy));
                        },
                    );
                }
            },
            (e) => {
                c(!1);
                let t = new T.Wl(e);
                u((0, _.s)(t.code));
            },
        );
    };
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsxs)(g.rQ, {
                "data-migration-pending": !0,
                className: P.wx,
                direction: k.A.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, s.jsx)(I.D, {
                        className: P.DD,
                        variant: "heading-xl/semibold",
                        children: O.intl.string(O.t.riOUtB),
                    }),
                    (0, s.jsx)(A.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: O.intl.string(O.t["7jub2t"]),
                    }),
                    (0, s.jsx)(g.s_, { "data-migration-pending": !0, className: P.b, onClick: n }),
                ],
            }),
            (0, s.jsxs)(g.$m, {
                "data-migration-pending": !0,
                className: P.__invalid_content,
                children: [
                    (0, s.jsx)("form", {
                        onSubmit: m,
                        className: P.$j,
                        children: (0, s.jsx)(f.k, {
                            label: O.intl.string(O.t.qreV25),
                            required: !0,
                            error: d,
                            value: l,
                            onChange: r,
                            placeholder: `${R}${M}`,
                            inputRef: p,
                        }),
                    }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: O.intl.string(O.t.Bnq46H),
                    }),
                    (0, s.jsx)("div", {
                        className: P.eU,
                        children: B.map((e) =>
                            (0, s.jsx)(v.D, { className: P.Bb, onClick: () => r(e), children: e }, e),
                        ),
                    }),
                    (0, s.jsx)(K, { onClick: n }),
                ],
            }),
            (0, s.jsxs)(g.jl, {
                "data-migration-pending": !0,
                className: P.qr,
                children: [
                    (0, s.jsx)(y.$, { variant: "primary", text: O.intl.string(O.t["Ts/9Ac"]), loading: o, onClick: m }),
                    (0, s.jsx)(S.$n, {
                        "data-migration-pending": !0,
                        color: S.$n.Colors.PRIMARY,
                        look: S.$n.Looks.LINK,
                        size: S.$n.Sizes.MIN,
                        onClick: t,
                        children: O.intl.string(O.t["13/7kX"]),
                    }),
                ],
            }),
        ],
    });
}
var J = n(819638),
    V = n(70082);
function $(e) {
    let {
            transitionState: t,
            initialSlide: n = J.oS.GUILD_TEMPLATES,
            onSuccess: i,
            onClose: l,
            onSlideChange: r,
            hasJoinButton: o,
        } = e,
        [d, S] = a.useState(n),
        v = (0, C.A)(d),
        [I, A] = a.useState(null),
        [f, y] = a.useState(null),
        [D, T] = a.useState(null),
        [k, L] = a.useState(!1);
    a.useEffect(() => {
        S(n);
    }, [S, n]),
        a.useEffect(() => {
            d !== v && r(d);
        }, [r, d, v]);
    let _ = a.useCallback((e) => {
            S(J.oS.CREATION_INTENT),
                y(e),
                c.default.track(w.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code });
        }, []),
        O = a.useCallback((e) => {
            L(e === J.IR.COMMUNITY), S(J.oS.CUSTOMIZE_GUILD);
        }, []),
        P = a.useCallback(() => S(J.oS.JOIN_GUILD), [S]),
        U = a.useCallback(() => {
            d === J.oS.CUSTOMIZE_GUILD ? S(J.oS.CREATION_INTENT) : (S(J.oS.GUILD_TEMPLATES), y(null));
        }, [d]),
        G = a.useCallback(
            (e) => {
                T(e), i(e);
            },
            [i, T],
        ),
        M = a.useCallback(() => {
            u()(null != D, "handleSuccess called before onGuildCreated"), i(D);
        }, [i, D]),
        R = { impression_group: p.ImpressionGroups.GUILD_ADD_FLOW },
        B = (0, m.r)(x.A.modules.modal.WIDTH_SMALL);
    return (0, s.jsx)("div", {
        children: (0, s.jsx)(g.EO, {
            "data-migration-pending": !0,
            transitionState: t,
            disableTrack: !0,
            parentComponent: "CreateGuildModal",
            children: (0, s.jsx)("div", {
                className: V.k,
                children: (0, s.jsxs)(h.t, {
                    activeSlide: d,
                    width: B,
                    onSlideReady: (e) => A(e),
                    children: [
                        (0, s.jsx)(h.q, {
                            id: J.oS.GUILD_TEMPLATES,
                            impressionName: p.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: R,
                            children: (0, s.jsx)(E.A, {
                                isNewUser: !1,
                                onJoin: o ? P : void 0,
                                onChooseTemplate: _,
                                onClose: l,
                            }),
                        }),
                        (0, s.jsx)(h.q, {
                            id: J.oS.CREATION_INTENT,
                            impressionName: p.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: R,
                            children: (0, s.jsx)(b.A, { onClose: l, onBack: U, onCreationIntentChosen: O }),
                        }),
                        (0, s.jsx)(h.q, {
                            id: J.oS.CUSTOMIZE_GUILD,
                            impressionName: p.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: R,
                            children: (0, s.jsx)(j.A, {
                                guildTemplate: f,
                                onGuildCreated: G,
                                onClose: l,
                                onBack: U,
                                isSlideReady: I === J.oS.CUSTOMIZE_GUILD,
                                isCommunity: k,
                            }),
                        }),
                        (0, s.jsx)(h.q, {
                            id: J.oS.CHANNEL_PROMPT,
                            impressionName: p.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: R,
                            children: (0, s.jsx)(N.A, {
                                createdGuildId: D,
                                onClose: l,
                                onChannelPromptCompleted: M,
                                isSlideReady: I === J.oS.CHANNEL_PROMPT,
                            }),
                        }),
                        (0, s.jsx)(h.q, {
                            id: J.oS.JOIN_GUILD,
                            impressionName: p.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: R,
                            children: (0, s.jsx)(q, { onBack: U, onClose: l, isSlideReady: I === J.oS.JOIN_GUILD }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
var z = n(315290);
function Z(e, t, n, i) {
    return (0, s.jsx)($, {
        onSuccess: (t) => {
            o.A.flowStep(z.do.CREATE_GUILD, z.jC.SUCCESS), e.onClose(), i?.(t);
        },
        onSlideChange: (e) =>
            (function (e, t) {
                switch (e) {
                    case J.oS.GUILD_TEMPLATES:
                        o.A.flowStepOrStart(z.do.CREATE_GUILD, z.jC.GUILD_TEMPLATES),
                            c.default.track(w.HAw.OPEN_MODAL, { type: "Create Guild Templates", location: t });
                        break;
                    case J.oS.CUSTOMIZE_GUILD:
                        o.A.flowStep(z.do.CREATE_GUILD, z.jC.GUILD_CREATE),
                            c.default.track(w.HAw.OPEN_MODAL, { type: "Create Guild Step 2", location: t });
                        break;
                    case J.oS.CREATION_INTENT:
                        c.default.track(w.HAw.OPEN_MODAL, { type: "Server Intent Discovery", location: t });
                        break;
                    case J.oS.JOIN_GUILD:
                        o.A.flowStep(z.do.CREATE_GUILD, z.jC.JOIN_GUILD),
                            c.default.track(w.HAw.OPEN_MODAL, { type: "Join Guild", location: t });
                }
            })(e, n),
        initialSlide: t,
        hasJoinButton: !0,
        ...e,
    });
}
let F = (e) => {
        let { initialSlide: t, location: n, onSuccess: i } = e;
        (0, r.openModal)((e) => Z(e, t, n, i), { modalKey: J.fc });
    },
    H = (e) => {
        let { slide: t, location: n } = e;
        (0, r.updateModal)(J.fc, (e) => Z(e, t, n));
    };
