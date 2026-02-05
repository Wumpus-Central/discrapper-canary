n.d(t, { h: () => P });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(812729),
    o = n.n(r),
    d = n(735438),
    c = n(311907),
    u = n(554146),
    h = n(342494),
    A = n(397927),
    g = n(51183),
    m = n(379848),
    p = n(961350),
    _ = n(954571),
    x = n(69555),
    f = n(140547),
    E = n(242919),
    C = n(886019),
    I = n(806246),
    S = n(60821),
    b = n(391786),
    N = n(50122),
    T = n(132970),
    j = n(129104),
    v = n(559405),
    y = n(272997),
    R = n(266069);
n(708455);
var O = n(652215),
    L = n(49999),
    D = n(985018),
    M = n(680930),
    G = n(658122),
    U = n(266915);
function P(e) {
    let { channel: t, setIsHangStatusInputFocused: n, setIsEmojiPickerOpen: s, setPopoutRef: r } = e,
        P = l.useRef(null),
        k = (0, c.bG)([E.A], () => E.A.getCustomHangStatus()),
        w = (0, N.A)(),
        V = (0, c.bG)([E.A], () => E.A.getFavoritedStatuses()),
        { defaultStatusVariant: B, allowPermanentClear: H } = (0, f.$j)({
            guildId: t.guild_id,
            location: "HangStatusPicker",
        }),
        F = (0, C.hy)(B),
        Y = l.useRef(null),
        [W, K] = l.useState(k?.status ?? ""),
        [z, X] = l.useState(k?.emoji ?? null),
        [q, J] = l.useState(!1),
        Q = (0, c.bG)([E.A], () => E.A.getCurrentHangStatus()),
        Z = F[Q],
        $ = V.length > 0,
        ee = null == W || "" === W.trim(),
        et = (0, b.A)(t),
        en = (W.trim().length > 0 && W.trim() !== k?.status?.trim()) || (null != z && !o()(z, k?.emoji)),
        [ei, el] = l.useState(!1),
        es = (0, c.bG)([E.A], () => E.A.getFavoritedStatuses().length >= E.x),
        ea = W.length > 0 || null != z,
        [er, eo] = (0, m.kn)([u.M.HANG_STATUS_POPOVER_NUX]);
    l.useEffect(() => {
        _.default.track(O.HAw.HANG_STATUS_PICKER_OPENED, {
            ...(0, I.A)(t.id),
            num_favorites: V.length,
            num_recents: w.length,
        });
    }, []),
        l.useEffect(() => {
            W.trim().length > 0 && ei && el(!1), null == z && ei && el(!1);
        }, [W, z, ei]),
        l.useEffect(() => {
            q || (W !== (k?.status ?? "") && "" !== W.trim()) ? n(!0) : n(!1);
        }, [W, k?.status, z, k?.emoji, n, q]),
        l.useEffect(() => {
            r?.(Y?.current);
        }, [Y, r]);
    let ed = l.useCallback(
            (e) => {
                e !== Q && ((0, x.Iq)(e, !0), null != z && X(null), "" !== W.trim() && K(""));
            },
            [Q, z, W],
        ),
        ec = l.useCallback(() => {
            X(null), K(""), J(!1);
        }, []),
        eu = l.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (o()(t, k?.emoji) && n === k?.status) || ((0, x.hS)(e.status, e.emoji, !0), X(e.emoji), K(e.status));
            },
            [k?.emoji, k?.status],
        ),
        eh = l.useCallback(
            (e) => {
                e?.preventDefault?.(),
                    null != z && 0 === W.trim().length && el(!0),
                    ee ||
                        (eu({ status: W, emoji: z ?? { id: null, name: "\uD83D\uDCAD", animated: !1 } }),
                        P.current?.blur(),
                        J(!1));
            },
            [W, z, eu, ee],
        ),
        eA = l.useCallback(() => {
            let e = null,
                n = null;
            do
                if (
                    0 === et.length ||
                    ((e = (0, d.sample)(et)),
                    (n =
                        e?.id != null
                            ? { id: e.id, name: e.name, animated: e.animated }
                            : { id: null, name: e?.optionallyDiverseSequence ?? "", animated: !1 }),
                    1 === et.length)
                )
                    break;
            while (null == e || e?.name == null || o()(z, n));
            null != n &&
                e?.name != null &&
                (X(n),
                K(e.name),
                J(!0),
                P.current?.focus(),
                _.default.track(O.HAw.HANG_STATUS_RANDOMIZER_CLICKED, (0, I.A)(t.id)));
        }, [et, z, t.id]),
        eg = l.useCallback(
            (e, n) => {
                let i = (0, S.A)(n);
                (!es || e) &&
                    ((0, x.My)(i ? n : n.status, i ? null : n.emoji),
                    _.default.track(O.HAw.HANG_STATUS_FAVORITE_CLICKED, { ...(0, I.A)(t.id), favorited: !e }));
            },
            [t.id, es],
        ),
        em = l.useCallback(() => {
            n(!1);
        }, [n]),
        ep = l.useCallback(() => {
            n(!0);
        }, [n]),
        e_ = l.useCallback(
            (e, t, n) => {
                let l = (0, S.A)(e),
                    s = l ? F[e] : null,
                    a = E.A.isFavorited(e),
                    r = l
                        ? (0, i.jsx)(v.A, {
                              userId: p.default.getId(),
                              size: 20,
                              hangStatusActivity: { type: O.$pd.HANG_STATUS, state: e },
                              fallbackVariant: B,
                              className: M.Kk,
                          })
                        : null != e.emoji && (0, i.jsx)(g.A, { emoji: e.emoji, hideTooltip: !0, className: M.Kk });
                return (0, i.jsx)(
                    R.u,
                    {
                        label: l ? (s?.title ?? "") : e.status,
                        icon: r,
                        setStatus: () => {
                            l ? ed(e) : eu(e), J(!1);
                        },
                        isFavorited: a,
                        onFavoriteClick: () => eg(a, e),
                    },
                    `${n}-${t}`,
                );
            },
            [B, eu, ed, F, eg],
        ),
        ex = l.useCallback(() => {
            (0, x.eK)(!0, H), X(null), K(""), J(!1);
        }, [H]),
        ef = l.useCallback((e) => {
            J(!0), K(e.substring(0, 60));
        }, []);
    return (0, i.jsxs)("div", {
        ref: Y,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(G.menu, M.kL),
        children: [
            (0, i.jsx)(h.AM, {
                title: D.intl.string(D.t.waaIiO),
                body: D.intl.string(D.t.qDoPah),
                badge: "new",
                shouldShow: er === u.M.HANG_STATUS_POPOVER_NUX,
                graphic: { type: "image", src: U.A },
                targetElementRef: Y,
                onRequestClose: () => eo(L.i.DISMISS),
            }),
            (0, i.jsx)("div", {
                role: "group",
                className: a()(G.groupLabel, M.wO),
                children: (0, i.jsxs)("form", {
                    onSubmit: eh,
                    className: a()(G.item, M.hF),
                    children: [
                        (0, i.jsxs)("div", {
                            className: M.bd,
                            children: [
                                (0, i.jsx)(A.ksK, {
                                    inputRef: P,
                                    value: q || ea ? W : (Z?.title ?? ""),
                                    onBlur: em,
                                    onFocus: ep,
                                    onChange: ef,
                                    placeholder: D.intl.string(D.t.KPop4s),
                                    leading: {
                                        type: "emoji",
                                        button: (0, i.jsx)(j.R, {
                                            customStatusEmoji: z,
                                            setCustomStatusEmoji: X,
                                            selectedDefaultStatus: q || ea ? null : Q,
                                            defaultStatusVariant: B,
                                            setIsEmojiPickerOpen: s,
                                        }),
                                    },
                                    trailing:
                                        (null == k && null == Q) || en
                                            ? en
                                                ? {
                                                      icon: A.KS6,
                                                      onClick: eh,
                                                      "aria-label": D.intl.string(D.t["R3BPH+"]),
                                                      disabled: 0 === W.length,
                                                  }
                                                : void 0
                                            : { icon: A.ucK, onClick: ex, "aria-label": D.intl.string(D.t.S90FuQ) },
                                }),
                                (0, i.jsx)(A.K0, {
                                    variant: "secondary",
                                    icon: T.j,
                                    onClick: eA,
                                    "aria-label": D.intl.string(D.t["5UAi59"]),
                                }),
                            ],
                        }),
                        ei &&
                            (0, i.jsx)(A.Text, {
                                variant: "text-xs/normal",
                                className: M.iX,
                                color: "text-feedback-critical",
                                children: D.intl.string(D.t["s/oq0f"]),
                            }),
                    ],
                }),
            }),
            (0, i.jsxs)(A.HOs, {
                fade: !0,
                role: "group",
                className: a()(G.groupLabel, M.Os, M.XG),
                children: [
                    (0, i.jsx)(y.k, { guildId: t.guild_id, onSetActivityStatus: ec }),
                    $ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: M.VA,
                                    children: [
                                        (0, i.jsx)(A.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: D.intl.string(D.t.k8fFjp),
                                        }),
                                        (0, i.jsx)(A.Gg5, { size: "xxs" }),
                                    ],
                                }),
                                V.map((e, t) => e_(e, t, "favorite")),
                            ],
                        }),
                    w.length > 0 &&
                        $ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { role: "separator", className: M.me }),
                                (0, i.jsxs)("div", {
                                    className: M.VA,
                                    children: [
                                        (0, i.jsx)(A.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: D.intl.string(D.t["+9QSnj"]),
                                        }),
                                        (0, i.jsx)(A.O4, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    w.map((e, t) => e_(e, t, "recent")),
                ],
            }),
        ],
    });
}
