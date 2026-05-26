let n, s;
i.d(t, { updateCreateGuildModal: () => Y, openCreateGuildModal: () => K });
var l = i(627968),
    a = i(64700),
    o = i(192308),
    r = i(894778),
    d = i(174459),
    c = i(284009),
    u = i.n(c),
    m = i(562708),
    I = i(602853),
    p = i(661531),
    C = i(935462),
    N = i(430690),
    S = i(475743),
    D = i(362311),
    E = i(243460),
    _ = i(424912),
    L = i(360475),
    T = i(862482),
    A = i(939249),
    h = i(534514),
    x = i(834730),
    G = i(292666),
    j = i(821609),
    U = i(376728),
    g = i(913122),
    O = i(235986),
    f = i(976860),
    k = i(4274),
    M = i(652215),
    v = i(375708),
    R = i(955078),
    b = i(906471),
    P = i(168482);
let w = "hTKzmak",
    y =
        ((n = window.GLOBAL_ENV.INVITE_HOST),
        (s = ""),
        null == n && ((n = location.host), (s = M.BVt.INVITE(""))),
        `${location.protocol}//${n}${s}/`),
    $ = [w, `${y}${w}`, `${y}wumpus-friends`],
    q = (e) => {
        let { onClick: t } = e;
        return (0, l.jsxs)(A.D, {
            className: R.qd,
            onClick: () => {
                t(), (0, f.pX)(M.BVt.GUILD_DISCOVERY);
            },
            children: [
                (0, l.jsx)("img", { width: 40, height: 40, className: R.aL, alt: "", src: P }),
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(h.D, {
                            className: R.qg,
                            variant: "heading-md/semibold",
                            children: v.intl.string(v.t.DwDxDU),
                        }),
                        (0, l.jsx)(x.E, {
                            className: R.qg,
                            variant: "text-xs/normal",
                            children: v.intl.string(v.t["5RL4CD"]),
                        }),
                    ],
                }),
                (0, l.jsx)("img", { className: R.y8, alt: "", src: b }),
            ],
        });
    };
function H(e) {
    let { onBack: t, onClose: i, isSlideReady: n } = e,
        [s, o] = a.useState(""),
        [r, d] = a.useState(!1),
        [c, u] = a.useState(null),
        m = a.useRef(null);
    a.useEffect(() => {
        n && m.current?.focus();
    }, [n]);
    let I = (e) => {
        e.preventDefault();
        let t = s.trim();
        if ("" === t) return void u(v.intl.string(v.t.IRq5ah));
        u(null), d(!0);
        let n = t.split("/"),
            l = n[n.length - 1];
        U.Ay.resolveInvite(l, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((d(!1), null == t)) return void u(v.intl.string(v.t["GEYI+Z"]));
                if (null != t.channel) {
                    let e = U.Ay.getInviteContext("Join Guild", t);
                    U.Ay.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            i(), U.Ay.transitionToInvite(e);
                        },
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof g.Wl || e instanceof g.LG ? u((0, k.s)(e.code)) : u(v.intl.string(v.t.dDZRdy));
                        },
                    );
                }
            },
            (e) => {
                d(!1);
                let t = new g.Wl(e);
                u((0, k.s)(t.code));
            },
        );
    };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(C.rQ, {
                "data-migration-pending": !0,
                className: R.wx,
                direction: O.A.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, l.jsx)(h.D, {
                        className: R.DD,
                        variant: "heading-xl/semibold",
                        children: v.intl.string(v.t.riOUtB),
                    }),
                    (0, l.jsx)(x.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: v.intl.string(v.t["7jub2t"]),
                    }),
                    (0, l.jsx)(C.s_, { "data-migration-pending": !0, className: R.b, onClick: i }),
                ],
            }),
            (0, l.jsxs)(C.$m, {
                "data-migration-pending": !0,
                className: R.__invalid_content,
                children: [
                    (0, l.jsx)("form", {
                        onSubmit: I,
                        className: R.$j,
                        children: (0, l.jsx)(G.k, {
                            label: v.intl.string(v.t.qreV25),
                            required: !0,
                            error: c,
                            value: s,
                            onChange: o,
                            placeholder: `${y}${w}`,
                            inputRef: m,
                        }),
                    }),
                    (0, l.jsx)(x.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: v.intl.string(v.t.Bnq46H),
                    }),
                    (0, l.jsx)("div", {
                        className: R.eU,
                        children: $.map((e) =>
                            (0, l.jsx)(A.D, { className: R.Bb, onClick: () => o(e), children: e }, e),
                        ),
                    }),
                    (0, l.jsx)(q, { onClick: i }),
                ],
            }),
            (0, l.jsxs)(C.jl, {
                "data-migration-pending": !0,
                className: R.qr,
                children: [
                    (0, l.jsx)(j.$, { variant: "primary", text: v.intl.string(v.t["Ts/9Ac"]), loading: r, onClick: I }),
                    (0, l.jsx)(T.$n, {
                        "data-migration-pending": !0,
                        color: T.$n.Colors.PRIMARY,
                        look: T.$n.Looks.LINK,
                        size: T.$n.Sizes.MIN,
                        onClick: t,
                        children: v.intl.string(v.t["13/7kX"]),
                    }),
                ],
            }),
        ],
    });
}
var J = i(819638),
    B = i(674370);
function V(e) {
    let {
            transitionState: t,
            initialSlide: i = J.oS.GUILD_TEMPLATES,
            onSuccess: n,
            onClose: s,
            onSlideChange: o,
            hasJoinButton: r,
        } = e,
        [c, T] = a.useState(i),
        A = (0, S.A)(c),
        [h, x] = a.useState(null),
        [G, j] = a.useState(null),
        [U, g] = a.useState(null),
        [O, f] = a.useState(!1);
    a.useEffect(() => {
        T(i);
    }, [T, i]),
        a.useEffect(() => {
            c !== A && o(c);
        }, [o, c, A]);
    let k = a.useCallback((e) => {
            T(J.oS.CREATION_INTENT),
                j(e),
                d.default.track(M.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code });
        }, []),
        v = a.useCallback((e) => {
            f(e === J.IR.COMMUNITY), T(J.oS.CUSTOMIZE_GUILD);
        }, []),
        R = a.useCallback(() => T(J.oS.JOIN_GUILD), [T]),
        b = a.useCallback(() => {
            c === J.oS.CUSTOMIZE_GUILD ? T(J.oS.CREATION_INTENT) : (T(J.oS.GUILD_TEMPLATES), j(null));
        }, [c]),
        P = a.useCallback(
            (e) => {
                g(e), n(e);
            },
            [n, g],
        ),
        w = a.useCallback(() => {
            u()(null != U, "handleSuccess called before onGuildCreated"), n(U);
        }, [n, U]),
        y = { impression_group: m.ImpressionGroups.GUILD_ADD_FLOW },
        $ = (0, I.r)(p.A.modules.modal.WIDTH_SMALL);
    return (0, l.jsx)(C.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        disableTrack: !0,
        fullscreenOnMobile: !1,
        className: B.y,
        parentComponent: "CreateGuildModal",
        children: (0, l.jsxs)(N.t, {
            activeSlide: c,
            slideWrapperClassName: B.p,
            width: $,
            contentDisplay: "flex",
            onSlideReady: (e) => x(e),
            children: [
                (0, l.jsx)(N.q, {
                    id: J.oS.GUILD_TEMPLATES,
                    impressionName: m.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: y,
                    children: (0, l.jsx)(L.A, {
                        isNewUser: !1,
                        onJoin: r ? R : void 0,
                        onChooseTemplate: k,
                        onClose: s,
                    }),
                }),
                (0, l.jsx)(N.q, {
                    id: J.oS.CREATION_INTENT,
                    impressionName: m.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: y,
                    children: (0, l.jsx)(E.A, { onClose: s, onBack: b, onCreationIntentChosen: v }),
                }),
                (0, l.jsx)(N.q, {
                    id: J.oS.CUSTOMIZE_GUILD,
                    impressionName: m.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: y,
                    children: (0, l.jsx)(_.A, {
                        guildTemplate: G,
                        onGuildCreated: P,
                        onClose: s,
                        onBack: b,
                        isSlideReady: h === J.oS.CUSTOMIZE_GUILD,
                        isCommunity: O,
                    }),
                }),
                (0, l.jsx)(N.q, {
                    id: J.oS.CHANNEL_PROMPT,
                    impressionName: m.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: y,
                    children: (0, l.jsx)(D.A, {
                        createdGuildId: U,
                        onClose: s,
                        onChannelPromptCompleted: w,
                        isSlideReady: h === J.oS.CHANNEL_PROMPT,
                    }),
                }),
                (0, l.jsx)(N.q, {
                    id: J.oS.JOIN_GUILD,
                    impressionName: m.ImpressionNames.GUILD_ADD_JOIN,
                    impressionProperties: y,
                    children: (0, l.jsx)(H, { onBack: b, onClose: s, isSlideReady: h === J.oS.JOIN_GUILD }),
                }),
            ],
        }),
    });
}
var Z = i(315290);
function W(e, t, i, n) {
    return (0, l.jsx)(V, {
        onSuccess: (t) => {
            r.A.flowStep(Z.do.CREATE_GUILD, Z.jC.SUCCESS), e.onClose(), n?.(t);
        },
        onSlideChange: (e) =>
            (function (e, t) {
                switch (e) {
                    case J.oS.GUILD_TEMPLATES:
                        r.A.flowStepOrStart(Z.do.CREATE_GUILD, Z.jC.GUILD_TEMPLATES),
                            d.default.track(M.HAw.OPEN_MODAL, { type: "Create Guild Templates", location: t });
                        break;
                    case J.oS.CUSTOMIZE_GUILD:
                        r.A.flowStep(Z.do.CREATE_GUILD, Z.jC.GUILD_CREATE),
                            d.default.track(M.HAw.OPEN_MODAL, { type: "Create Guild Step 2", location: t });
                        break;
                    case J.oS.CREATION_INTENT:
                        d.default.track(M.HAw.OPEN_MODAL, { type: "Server Intent Discovery", location: t });
                        break;
                    case J.oS.JOIN_GUILD:
                        r.A.flowStep(Z.do.CREATE_GUILD, Z.jC.JOIN_GUILD),
                            d.default.track(M.HAw.OPEN_MODAL, { type: "Join Guild", location: t });
                }
            })(e, i),
        initialSlide: t,
        hasJoinButton: !0,
        ...e,
    });
}
let K = (e) => {
        let { initialSlide: t, location: i, onSuccess: n } = e;
        (0, o.openModal)((e) => W(e, t, i, n), { modalKey: J.fc });
    },
    Y = (e) => {
        let { slide: t, location: i } = e;
        (0, o.updateModal)(J.fc, (e) => W(e, t, i));
    };
