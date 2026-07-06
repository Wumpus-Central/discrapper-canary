let i, s;
n.d(t, { updateCreateGuildModal: () => K, openCreateGuildModal: () => Y });
var l = n(627968),
    a = n(64700),
    o = n(192308),
    r = n(894778),
    d = n(174459),
    c = n(284009),
    u = n.n(c),
    m = n(562708),
    I = n(602853),
    p = n(661531),
    C = n(935462),
    N = n(430690),
    S = n(475743),
    E = n(362311),
    D = n(243460),
    _ = n(424912),
    L = n(360475),
    T = n(862482),
    A = n(939249),
    h = n(534514),
    x = n(834730),
    G = n(292666),
    f = n(821609),
    j = n(376728),
    U = n(913122),
    g = n(235986),
    O = n(976860),
    k = n(4274),
    M = n(652215),
    v = n(375708),
    R = n(250310),
    b = n(906471),
    P = n(168482);
let w = "hTKzmak",
    y =
        ((i = window.GLOBAL_ENV.INVITE_HOST),
        (s = ""),
        null == i && ((i = location.host), (s = M.BVt.INVITE(""))),
        `${location.protocol}//${i}${s}/`),
    $ = [w, `${y}${w}`, `${y}wumpus-friends`];
function q(e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(A.D, {
        className: R.qd,
        onClick: function () {
            t(), (0, O.pX)(M.BVt.GUILD_DISCOVERY);
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
}
function H(e) {
    let { onBack: t, onClose: n, isSlideReady: i } = e,
        [s, o] = a.useState(""),
        [r, d] = a.useState(!1),
        [c, u] = a.useState(null),
        m = a.useRef(null);
    function I(e) {
        e.preventDefault();
        let t = s.trim();
        if ("" === t) return void u(v.intl.string(v.t.IRq5ah));
        u(null), d(!0);
        let i = t.split("/"),
            l = i[i.length - 1];
        j.Ay.resolveInvite(l, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((d(!1), null == t)) return void u(v.intl.string(v.t["GEYI+Z"]));
                if (null != t.channel) {
                    let e = j.Ay.getInviteContext("Join Guild", t);
                    j.Ay.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), j.Ay.transitionToInvite(e);
                        },
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof U.Wl || e instanceof U.LG ? u((0, k.s)(e.code)) : u(v.intl.string(v.t.dDZRdy));
                        },
                    );
                } else u(v.intl.string(v.t["GEYI+Z"]));
            },
            (e) => {
                d(!1);
                let t = new U.Wl(e);
                u((0, k.s)(t.code));
            },
        );
    }
    return (
        a.useEffect(() => {
            i && m.current?.focus();
        }, [i]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(C.rQ, {
                    "data-migration-pending": !0,
                    className: R.wx,
                    direction: g.A.Direction.VERTICAL,
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
                        (0, l.jsx)(C.s_, { "data-migration-pending": !0, className: R.b, onClick: n }),
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
                        (0, l.jsx)(q, { onClick: n }),
                    ],
                }),
                (0, l.jsxs)(C.jl, {
                    "data-migration-pending": !0,
                    className: R.qr,
                    children: [
                        (0, l.jsx)(f.$, {
                            variant: "primary",
                            text: v.intl.string(v.t["Ts/9Ac"]),
                            loading: r,
                            onClick: I,
                        }),
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
        })
    );
}
var J = n(819638),
    B = n(70082);
function V(e) {
    let {
            transitionState: t,
            initialSlide: n = J.oS.GUILD_TEMPLATES,
            onSuccess: i,
            onClose: s,
            onSlideChange: o,
            hasJoinButton: r,
        } = e,
        [c, T] = a.useState(n),
        A = (0, S.A)(c),
        [h, x] = a.useState(null),
        [G, f] = a.useState(null),
        [j, U] = a.useState(null),
        [g, O] = a.useState(!1);
    a.useEffect(() => {
        T(n);
    }, [T, n]),
        a.useEffect(() => {
            c !== A && o(c);
        }, [o, c, A]);
    let k = a.useCallback((e) => {
            T(J.oS.CREATION_INTENT),
                f(e),
                d.default.track(M.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code });
        }, []),
        v = a.useCallback((e) => {
            O(e === J.IR.COMMUNITY), T(J.oS.CUSTOMIZE_GUILD);
        }, []),
        R = a.useCallback(() => T(J.oS.JOIN_GUILD), [T]),
        b = a.useCallback(() => {
            c === J.oS.CUSTOMIZE_GUILD ? T(J.oS.CREATION_INTENT) : (T(J.oS.GUILD_TEMPLATES), f(null));
        }, [c]),
        P = a.useCallback(
            (e) => {
                U(e), i(e);
            },
            [i, U],
        ),
        w = a.useCallback(() => {
            u()(null != j, "handleSuccess called before onGuildCreated"), i(j);
        }, [i, j]),
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
                    children: (0, l.jsx)(D.A, { onClose: s, onBack: b, onCreationIntentChosen: v }),
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
                        isCommunity: g,
                    }),
                }),
                (0, l.jsx)(N.q, {
                    id: J.oS.CHANNEL_PROMPT,
                    impressionName: m.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: y,
                    children: (0, l.jsx)(E.A, {
                        createdGuildId: j,
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
var Z = n(315290);
function W(e, t, n, i) {
    return (0, l.jsx)(V, {
        onSuccess: (t) => {
            r.A.flowStep(Z.do.CREATE_GUILD, Z.jC.SUCCESS), e.onClose(), i?.(t);
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
            })(e, n),
        initialSlide: t,
        hasJoinButton: !0,
        ...e,
    });
}
function Y(e) {
    let { initialSlide: t, location: n, onSuccess: i } = e;
    (0, o.openModal)((e) => W(e, t, n, i), { modalKey: J.fc });
}
function K(e) {
    let { slide: t, location: n } = e;
    (0, o.updateModal)(J.fc, (e) => W(e, t, n));
}
