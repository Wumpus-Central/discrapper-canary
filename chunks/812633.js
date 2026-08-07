let n, s;
i.d(t, { updateCreateGuildModal: () => Y, openCreateGuildModal: () => K });
var a = i(477900),
    l = i(582128),
    o = i(192308),
    r = i(894778),
    c = i(174459),
    d = i(284009),
    u = i.n(d),
    m = i(562708),
    I = i(935462),
    p = i(602853),
    C = i(661531),
    N = i(430690),
    S = i(475743),
    D = i(362311),
    E = i(243460),
    _ = i(424912),
    L = i(360475),
    T = i(862482),
    A = i(939249),
    h = i(297264),
    x = i(834730),
    G = i(95477),
    f = i(821609),
    j = i(376728),
    U = i(913122),
    g = i(235986),
    O = i(976860),
    k = i(4274),
    M = i(652215),
    y = i(375708),
    v = i(725086),
    R = i(906471),
    w = i(168482);
let b = "hTKzmak",
    P =
        ((n = window.GLOBAL_ENV.INVITE_HOST),
        (s = ""),
        null == n && ((n = location.host), (s = M.BVt.INVITE(""))),
        `${location.protocol}//${n}${s}/`),
    $ = [b, `${P}${b}`, `${P}wumpus-friends`];
function q(e) {
    let { onClick: t } = e;
    return (0, a.jsxs)(A.D, {
        className: v.qd,
        onClick: function () {
            t(), (0, O.pX)(M.BVt.GUILD_DISCOVERY);
        },
        children: [
            (0, a.jsx)("img", { width: 40, height: 40, className: v.aL, alt: "", src: w }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(h.D, {
                        className: v.qg,
                        variant: "heading-md/semibold",
                        children: y.intl.string(y.t.DwDxDU),
                    }),
                    (0, a.jsx)(x.E, {
                        className: v.qg,
                        variant: "text-xs/normal",
                        children: y.intl.string(y.t["5RL4CD"]),
                    }),
                ],
            }),
            (0, a.jsx)("img", { className: v.y8, alt: "", src: R }),
        ],
    });
}
function H(e) {
    let { onBack: t, onClose: i, isSlideReady: n } = e,
        [s, o] = l.useState(""),
        [r, c] = l.useState(!1),
        [d, u] = l.useState(null),
        m = l.useRef(null);
    async function p(e) {
        e.preventDefault();
        let t = s.trim();
        if ("" === t) return void u(y.intl.string(y.t.IRq5ah));
        u(null), c(!0);
        let n = t.split("/"),
            a = n[n.length - 1];
        try {
            let e = null;
            try {
                let { invite: i } = await j.Ay.resolveInvite(a, "Join Guild", { inputValue: t });
                e = i;
            } catch (e) {
                throw new U.Wl(e);
            }
            if (e?.channel == null) throw y.intl.string(y.t["GEYI+Z"]);
            let n = j.Ay.getInviteContext("Join Guild", e);
            await j.Ay.acceptInvite({
                inviteKey: e.code,
                context: n,
                callback: (e) => {
                    i(), j.Ay.transitionToInvite(e);
                },
            });
        } catch (e) {
            "string" == typeof e
                ? u(e)
                : e instanceof U.Wl || e instanceof U.LG
                  ? u((0, k.s)(e.code))
                  : u(y.intl.string(y.t.dDZRdy));
        } finally {
            c(!1);
        }
    }
    return (
        l.useEffect(() => {
            n && m.current?.focus();
        }, [n]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(I.rQ, {
                    "data-migration-pending": !0,
                    className: v.wx,
                    direction: g.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, a.jsx)(h.D, {
                            className: v.DD,
                            variant: "heading-xl/semibold",
                            children: y.intl.string(y.t.riOUtB),
                        }),
                        (0, a.jsx)(x.E, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: y.intl.string(y.t["7jub2t"]),
                        }),
                        (0, a.jsx)(I.s_, { "data-migration-pending": !0, className: v.b, onClick: i }),
                    ],
                }),
                (0, a.jsxs)(I.$m, {
                    "data-migration-pending": !0,
                    className: v.__invalid_content,
                    children: [
                        (0, a.jsx)("form", {
                            onSubmit: p,
                            className: v.$j,
                            children: (0, a.jsx)(G.k, {
                                label: y.intl.string(y.t.qreV25),
                                required: !0,
                                error: d,
                                value: s,
                                onChange: o,
                                placeholder: `${P}${b}`,
                                inputRef: m,
                            }),
                        }),
                        (0, a.jsx)(x.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: y.intl.string(y.t.Bnq46H),
                        }),
                        (0, a.jsx)("div", {
                            className: v.eU,
                            children: $.map((e) =>
                                (0, a.jsx)(A.D, { className: v.Bb, onClick: () => o(e), children: e }, e),
                            ),
                        }),
                        (0, a.jsx)(q, { onClick: i }),
                    ],
                }),
                (0, a.jsxs)(I.jl, {
                    "data-migration-pending": !0,
                    className: v.qr,
                    children: [
                        (0, a.jsx)(f.$, {
                            variant: "primary",
                            text: y.intl.string(y.t["Ts/9Ac"]),
                            loading: r,
                            onClick: p,
                        }),
                        (0, a.jsx)(T.$n, {
                            "data-migration-pending": !0,
                            color: T.$n.Colors.PRIMARY,
                            look: T.$n.Looks.LINK,
                            size: T.$n.Sizes.MIN,
                            onClick: t,
                            children: y.intl.string(y.t["13/7kX"]),
                        }),
                    ],
                }),
            ],
        })
    );
}
var J = i(819638),
    B = i(471850);
function V(e) {
    let {
            transitionState: t,
            initialSlide: i = J.oS.GUILD_TEMPLATES,
            onSuccess: n,
            onClose: s,
            onSlideChange: o,
            hasJoinButton: r,
        } = e,
        [d, T] = l.useState(i),
        A = (0, S.Ay)(d),
        [h, x] = l.useState(null),
        [G, f] = l.useState(null),
        [j, U] = l.useState(null),
        [g, O] = l.useState(!1);
    l.useEffect(() => {
        T(i);
    }, [T, i]),
        l.useEffect(() => {
            d !== A && o(d);
        }, [o, d, A]);
    let k = l.useCallback((e) => {
            T(J.oS.CREATION_INTENT),
                f(e),
                c.default.track(M.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code });
        }, []),
        y = l.useCallback((e) => {
            O(e === J.IR.COMMUNITY), T(J.oS.CUSTOMIZE_GUILD);
        }, []),
        v = l.useCallback(() => T(J.oS.JOIN_GUILD), [T]),
        R = l.useCallback(() => {
            d === J.oS.CUSTOMIZE_GUILD ? T(J.oS.CREATION_INTENT) : (T(J.oS.GUILD_TEMPLATES), f(null));
        }, [d]),
        w = l.useCallback(
            (e) => {
                U(e), n(e);
            },
            [n, U],
        ),
        b = l.useCallback(() => {
            u()(null != j, "handleSuccess called before onGuildCreated"), n(j);
        }, [n, j]),
        P = { impression_group: m.ImpressionGroups.GUILD_ADD_FLOW },
        $ = (0, p.r)(C.A.modules.modal.WIDTH_SMALL);
    return (0, a.jsx)(I.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        disableTrack: !0,
        fullscreenOnMobile: !1,
        className: B.y,
        parentComponent: "CreateGuildModal",
        children: (0, a.jsxs)(N.t, {
            activeSlide: d,
            slideWrapperClassName: B.p,
            width: $,
            contentDisplay: "flex",
            onSlideReady: (e) => x(e),
            children: [
                (0, a.jsx)(N.q, {
                    id: J.oS.GUILD_TEMPLATES,
                    impressionName: m.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: P,
                    children: (0, a.jsx)(L.A, {
                        isNewUser: !1,
                        onJoin: r ? v : void 0,
                        onChooseTemplate: k,
                        onClose: s,
                    }),
                }),
                (0, a.jsx)(N.q, {
                    id: J.oS.CREATION_INTENT,
                    impressionName: m.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: P,
                    children: (0, a.jsx)(E.A, { onClose: s, onBack: R, onCreationIntentChosen: y }),
                }),
                (0, a.jsx)(N.q, {
                    id: J.oS.CUSTOMIZE_GUILD,
                    impressionName: m.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: P,
                    children: (0, a.jsx)(_.A, {
                        guildTemplate: G,
                        onGuildCreated: w,
                        onClose: s,
                        onBack: R,
                        isSlideReady: h === J.oS.CUSTOMIZE_GUILD,
                        isCommunity: g,
                    }),
                }),
                (0, a.jsx)(N.q, {
                    id: J.oS.CHANNEL_PROMPT,
                    impressionName: m.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: P,
                    children: (0, a.jsx)(D.A, {
                        createdGuildId: j,
                        onClose: s,
                        onChannelPromptCompleted: b,
                        isSlideReady: h === J.oS.CHANNEL_PROMPT,
                    }),
                }),
                (0, a.jsx)(N.q, {
                    id: J.oS.JOIN_GUILD,
                    impressionName: m.ImpressionNames.GUILD_ADD_JOIN,
                    impressionProperties: P,
                    children: (0, a.jsx)(H, { onBack: R, onClose: s, isSlideReady: h === J.oS.JOIN_GUILD }),
                }),
            ],
        }),
    });
}
var Z = i(315290);
function W(e, t, i, n) {
    return (0, a.jsx)(V, {
        onSuccess: (t) => {
            r.A.flowStep(Z.do.CREATE_GUILD, Z.jC.SUCCESS), e.onClose(), n?.(t);
        },
        onSlideChange: (e) =>
            (function (e, t) {
                switch (e) {
                    case J.oS.GUILD_TEMPLATES:
                        r.A.flowStepOrStart(Z.do.CREATE_GUILD, Z.jC.GUILD_TEMPLATES),
                            c.default.track(M.HAw.OPEN_MODAL, { type: "Create Guild Templates", location: t });
                        break;
                    case J.oS.CUSTOMIZE_GUILD:
                        r.A.flowStep(Z.do.CREATE_GUILD, Z.jC.GUILD_CREATE),
                            c.default.track(M.HAw.OPEN_MODAL, { type: "Create Guild Step 2", location: t });
                        break;
                    case J.oS.CREATION_INTENT:
                        c.default.track(M.HAw.OPEN_MODAL, { type: "Server Intent Discovery", location: t });
                        break;
                    case J.oS.JOIN_GUILD:
                        r.A.flowStep(Z.do.CREATE_GUILD, Z.jC.JOIN_GUILD),
                            c.default.track(M.HAw.OPEN_MODAL, { type: "Join Guild", location: t });
                }
            })(e, i),
        initialSlide: t,
        hasJoinButton: !0,
        ...e,
    });
}
function K(e) {
    let { initialSlide: t, location: i, onSuccess: n } = e;
    (0, o.openModal)((e) => W(e, t, i, n), { modalKey: J.fc });
}
function Y(e) {
    let { slide: t, location: i } = e;
    (0, o.updateModal)(J.fc, (e) => W(e, t, i));
}
