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
    p = i(935462),
    I = i(602853),
    C = i(661531),
    S = i(430690),
    D = i(475743),
    E = i(362311),
    N = i(243460),
    _ = i(424912),
    T = i(360475),
    A = i(939249),
    L = i(297264),
    h = i(834730),
    x = i(95477),
    G = i(821609),
    f = i(123292),
    j = i(376728),
    U = i(913122),
    g = i(235986),
    O = i(976860),
    k = i(4274),
    y = i(652215),
    M = i(105292),
    v = i(479043),
    w = i(906471),
    R = i(168482);
let b = "hTKzmak",
    P =
        ((n = window.GLOBAL_ENV.INVITE_HOST),
        (s = ""),
        null == n && ((n = location.host), (s = y.BVt.INVITE(""))),
        `${location.protocol}//${n}${s}/`),
    q = [b, `${P}${b}`, `${P}wumpus-friends`];
function H(e) {
    let { onClick: t } = e;
    return (0, a.jsxs)(A.D, {
        className: v.qd,
        onClick: function () {
            (t(), (0, O.pX)(y.BVt.GUILD_DISCOVERY));
        },
        children: [
            (0, a.jsx)("img", { width: 40, height: 40, className: v.aL, alt: "", src: R }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(L.D, {
                        className: v.qg,
                        variant: "heading-md/semibold",
                        children: M.intl.string(M.t.DwDxDU),
                    }),
                    (0, a.jsx)(h.E, {
                        className: v.qg,
                        variant: "text-xs/normal",
                        children: M.intl.string(M.t["5RL4CD"]),
                    }),
                ],
            }),
            (0, a.jsx)("img", { className: v.y8, alt: "", src: w }),
        ],
    });
}
function J(e) {
    let { onBack: t, onClose: i, isSlideReady: n } = e,
        [s, o] = l.useState(""),
        [r, c] = l.useState(!1),
        [d, u] = l.useState(null),
        m = l.useRef(null);
    async function I(e) {
        e.preventDefault();
        let t = s.trim();
        if ("" === t) return void u(M.intl.string(M.t.IRq5ah));
        (u(null), c(!0));
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
            if (e?.channel == null) throw M.intl.string(M.t["GEYI+Z"]);
            let n = j.Ay.getInviteContext("Join Guild", e);
            await j.Ay.acceptInvite({
                inviteKey: e.code,
                context: n,
                callback: (e) => {
                    (i(), j.Ay.transitionToInvite(e));
                },
            });
        } catch (e) {
            "string" == typeof e
                ? u(e)
                : e instanceof U.Wl || e instanceof U.LG
                  ? u((0, k.s)(e.code))
                  : u(M.intl.string(M.t.dDZRdy));
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
                (0, a.jsxs)(p.rQ, {
                    "data-migration-pending": !0,
                    className: v.wx,
                    direction: g.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, a.jsx)(L.D, {
                            className: v.DD,
                            variant: "heading-xl/semibold",
                            children: M.intl.string(M.t.riOUtB),
                        }),
                        (0, a.jsx)(h.E, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: M.intl.string(M.t["7jub2t"]),
                        }),
                        (0, a.jsx)(p.s_, { "data-migration-pending": !0, className: v.b, onClick: i }),
                    ],
                }),
                (0, a.jsxs)(p.$m, {
                    "data-migration-pending": !0,
                    className: v.__invalid_content,
                    children: [
                        (0, a.jsx)("form", {
                            onSubmit: I,
                            className: v.$j,
                            children: (0, a.jsx)(x.k, {
                                label: M.intl.string(M.t.qreV25),
                                required: !0,
                                error: d,
                                value: s,
                                onChange: o,
                                placeholder: `${P}${b}`,
                                inputRef: m,
                            }),
                        }),
                        (0, a.jsx)(h.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: M.intl.string(M.t.Bnq46H),
                        }),
                        (0, a.jsx)("div", {
                            className: v.eU,
                            children: q.map((e) =>
                                (0, a.jsx)(A.D, { className: v.Bb, onClick: () => o(e), children: e }, e),
                            ),
                        }),
                        (0, a.jsx)(H, { onClick: i }),
                    ],
                }),
                (0, a.jsxs)(p.jl, {
                    "data-migration-pending": !0,
                    className: v.qr,
                    children: [
                        (0, a.jsx)(G.$, {
                            variant: "primary",
                            text: M.intl.string(M.t["Ts/9Ac"]),
                            loading: r,
                            onClick: I,
                        }),
                        (0, a.jsx)(f.Q, {
                            size: "sm",
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: M.intl.string(M.t["13/7kX"]),
                            onClick: t,
                        }),
                    ],
                }),
            ],
        })
    );
}
var $ = i(819638),
    B = i(899579);
function V(e) {
    let {
            transitionState: t,
            initialSlide: i = $.oS.GUILD_TEMPLATES,
            onSuccess: n,
            onClose: s,
            onSlideChange: o,
            hasJoinButton: r,
        } = e,
        [d, A] = l.useState(i),
        L = (0, D.Ay)(d),
        [h, x] = l.useState(null),
        [G, f] = l.useState(null),
        [j, U] = l.useState(null),
        [g, O] = l.useState(!1);
    (l.useEffect(() => {
        A(i);
    }, [A, i]),
        l.useEffect(() => {
            d !== L && o(d);
        }, [o, d, L]));
    let k = l.useCallback((e) => {
            (A($.oS.CREATION_INTENT),
                f(e),
                c.default.track(y.HAw.GUILD_TEMPLATE_SELECTED, { template_name: e.id, template_code: e.code }));
        }, []),
        M = l.useCallback((e) => {
            (O(e === $.IR.COMMUNITY), A($.oS.CUSTOMIZE_GUILD));
        }, []),
        v = l.useCallback(() => A($.oS.JOIN_GUILD), [A]),
        w = l.useCallback(() => {
            d === $.oS.CUSTOMIZE_GUILD ? A($.oS.CREATION_INTENT) : (A($.oS.GUILD_TEMPLATES), f(null));
        }, [d]),
        R = l.useCallback(
            (e) => {
                (U(e), n(e));
            },
            [n, U],
        ),
        b = l.useCallback(() => {
            (u()(null != j, "handleSuccess called before onGuildCreated"), n(j));
        }, [n, j]),
        P = { impression_group: m.ImpressionGroups.GUILD_ADD_FLOW },
        q = (0, I.r)(C.A.modules.modal.WIDTH_SMALL);
    return (0, a.jsx)(p.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        disableTrack: !0,
        fullscreenOnMobile: !1,
        className: B.y,
        parentComponent: "CreateGuildModal",
        children: (0, a.jsxs)(S.t, {
            activeSlide: d,
            slideWrapperClassName: B.p,
            width: q,
            contentDisplay: "flex",
            onSlideReady: (e) => x(e),
            children: [
                (0, a.jsx)(S.q, {
                    id: $.oS.GUILD_TEMPLATES,
                    impressionName: m.ImpressionNames.GUILD_ADD_LANDING,
                    impressionProperties: P,
                    children: (0, a.jsx)(T.A, {
                        isNewUser: !1,
                        onJoin: r ? v : void 0,
                        onChooseTemplate: k,
                        onClose: s,
                    }),
                }),
                (0, a.jsx)(S.q, {
                    id: $.oS.CREATION_INTENT,
                    impressionName: m.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                    impressionProperties: P,
                    children: (0, a.jsx)(N.A, { onClose: s, onBack: w, onCreationIntentChosen: M }),
                }),
                (0, a.jsx)(S.q, {
                    id: $.oS.CUSTOMIZE_GUILD,
                    impressionName: m.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                    impressionProperties: P,
                    children: (0, a.jsx)(_.A, {
                        guildTemplate: G,
                        onGuildCreated: R,
                        onClose: s,
                        onBack: w,
                        isSlideReady: h === $.oS.CUSTOMIZE_GUILD,
                        isCommunity: g,
                    }),
                }),
                (0, a.jsx)(S.q, {
                    id: $.oS.CHANNEL_PROMPT,
                    impressionName: m.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                    impressionProperties: P,
                    children: (0, a.jsx)(E.A, {
                        createdGuildId: j,
                        onClose: s,
                        onChannelPromptCompleted: b,
                        isSlideReady: h === $.oS.CHANNEL_PROMPT,
                    }),
                }),
                (0, a.jsx)(S.q, {
                    id: $.oS.JOIN_GUILD,
                    impressionName: m.ImpressionNames.GUILD_ADD_JOIN,
                    impressionProperties: P,
                    children: (0, a.jsx)(J, { onBack: w, onClose: s, isSlideReady: h === $.oS.JOIN_GUILD }),
                }),
            ],
        }),
    });
}
var Z = i(315290);
function W(e, t, i, n) {
    return (0, a.jsx)(V, {
        onSuccess: (t) => {
            (r.A.flowStep(Z.do.CREATE_GUILD, Z.jC.SUCCESS), e.onClose(), n?.(t));
        },
        onSlideChange: (e) =>
            (function (e, t) {
                switch (e) {
                    case $.oS.GUILD_TEMPLATES:
                        (r.A.flowStepOrStart(Z.do.CREATE_GUILD, Z.jC.GUILD_TEMPLATES),
                            c.default.track(y.HAw.OPEN_MODAL, { type: "Create Guild Templates", location: t }));
                        break;
                    case $.oS.CUSTOMIZE_GUILD:
                        (r.A.flowStep(Z.do.CREATE_GUILD, Z.jC.GUILD_CREATE),
                            c.default.track(y.HAw.OPEN_MODAL, { type: "Create Guild Step 2", location: t }));
                        break;
                    case $.oS.CREATION_INTENT:
                        c.default.track(y.HAw.OPEN_MODAL, { type: "Server Intent Discovery", location: t });
                        break;
                    case $.oS.JOIN_GUILD:
                        (r.A.flowStep(Z.do.CREATE_GUILD, Z.jC.JOIN_GUILD),
                            c.default.track(y.HAw.OPEN_MODAL, { type: "Join Guild", location: t }));
                }
            })(e, i),
        initialSlide: t,
        hasJoinButton: !0,
        ...e,
    });
}
function K(e) {
    let { initialSlide: t, location: i, onSuccess: n } = e;
    (0, o.openModal)((e) => W(e, t, i, n), { modalKey: $.fc });
}
function Y(e) {
    let { slide: t, location: i } = e;
    (0, o.updateModal)($.fc, (e) => W(e, t, i));
}
