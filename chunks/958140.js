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
    m = n(51183),
    p = n(379848),
    g = n(961350),
    _ = n(954571),
    f = n(69555),
    x = n(140547),
    C = n(242919),
    E = n(886019),
    I = n(806246),
    b = n(60821),
    N = n(391786),
    S = n(50122),
    T = n(132970),
    v = n(129104),
    y = n(559405),
    j = n(272997),
    R = n(266069);
n(708455);
var O = n(652215),
    L = n(49999),
    M = n(985018),
    D = n(680930),
    G = n(658122),
    U = n(266915);
function P(e) {
    let { channel: t, setIsHangStatusInputFocused: n, setIsEmojiPickerOpen: s, setPopoutRef: r } = e,
        P = l.useRef(null),
        w = (0, c.bG)([C.A], () => C.A.getCustomHangStatus()),
        k = (0, S.A)(),
        V = (0, c.bG)([C.A], () => C.A.getFavoritedStatuses()),
        { defaultStatusVariant: B, allowPermanentClear: H } = (0, x.$j)({
            guildId: t.guild_id,
            location: "HangStatusPicker",
        }),
        F = (0, E.hy)(B),
        K = l.useRef(null),
        [W, Y] = l.useState(w?.status ?? ""),
        [z, q] = l.useState(w?.emoji ?? null),
        [X, J] = l.useState(!1),
        Q = (0, c.bG)([C.A], () => C.A.getCurrentHangStatus()),
        $ = F[Q],
        Z = V.length > 0,
        ee = null == W || "" === W.trim(),
        et = (0, N.A)(t),
        en = (W.trim().length > 0 && W.trim() !== w?.status?.trim()) || (null != z && !o()(z, w?.emoji)),
        [ei, el] = l.useState(!1),
        es = (0, c.bG)([C.A], () => C.A.getFavoritedStatuses().length >= C.x),
        ea = W.length > 0 || null != z,
        [er, eo] = (0, p.kn)([u.M.HANG_STATUS_POPOVER_NUX]);
    l.useEffect(() => {
        _.default.track(O.HAw.HANG_STATUS_PICKER_OPENED, {
            ...(0, I.A)(t.id),
            num_favorites: V.length,
            num_recents: k.length,
        });
    }, []),
        l.useEffect(() => {
            W.trim().length > 0 && ei && el(!1), null == z && ei && el(!1);
        }, [W, z, ei]),
        l.useEffect(() => {
            X || (W !== (w?.status ?? "") && "" !== W.trim()) ? n(!0) : n(!1);
        }, [W, w?.status, z, w?.emoji, n, X]),
        l.useEffect(() => {
            r?.(K?.current);
        }, [K, r]);
    let ed = l.useCallback(
            (e) => {
                e !== Q && ((0, f.Iq)(e, !0), null != z && q(null), "" !== W.trim() && Y(""));
            },
            [Q, z, W],
        ),
        ec = l.useCallback(() => {
            q(null), Y(""), J(!1);
        }, []),
        eu = l.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (o()(t, w?.emoji) && n === w?.status) || ((0, f.hS)(e.status, e.emoji, !0), q(e.emoji), Y(e.status));
            },
            [w?.emoji, w?.status],
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
                (q(n),
                Y(e.name),
                J(!0),
                P.current?.focus(),
                _.default.track(O.HAw.HANG_STATUS_RANDOMIZER_CLICKED, (0, I.A)(t.id)));
        }, [et, z, t.id]),
        em = l.useCallback(
            (e, n) => {
                let i = (0, b.A)(n);
                (!es || e) &&
                    ((0, f.My)(i ? n : n.status, i ? null : n.emoji),
                    _.default.track(O.HAw.HANG_STATUS_FAVORITE_CLICKED, { ...(0, I.A)(t.id), favorited: !e }));
            },
            [t.id, es],
        ),
        ep = l.useCallback(() => {
            n(!1);
        }, [n]),
        eg = l.useCallback(() => {
            n(!0);
        }, [n]),
        e_ = l.useCallback(
            (e, t, n) => {
                let l = (0, b.A)(e),
                    s = l ? F[e] : null,
                    a = C.A.isFavorited(e),
                    r = l
                        ? (0, i.jsx)(y.A, {
                              userId: g.default.getId(),
                              size: 20,
                              hangStatusActivity: { type: O.$pd.HANG_STATUS, state: e },
                              fallbackVariant: B,
                              className: D.Kk,
                          })
                        : null != e.emoji && (0, i.jsx)(m.A, { emoji: e.emoji, hideTooltip: !0, className: D.Kk });
                return (0, i.jsx)(
                    R.u,
                    {
                        label: l ? (s?.title ?? "") : e.status,
                        icon: r,
                        setStatus: () => {
                            l ? ed(e) : eu(e), J(!1);
                        },
                        isFavorited: a,
                        onFavoriteClick: () => em(a, e),
                    },
                    `${n}-${t}`,
                );
            },
            [B, eu, ed, F, em],
        ),
        ef = l.useCallback(() => {
            (0, f.eK)(!0, H), q(null), Y(""), J(!1);
        }, [H]),
        ex = l.useCallback((e) => {
            J(!0), Y(e.substring(0, 60));
        }, []);
    return (0, i.jsxs)("div", {
        ref: K,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(G.menu, D.kL),
        children: [
            (0, i.jsx)(h.AM, {
                title: M.intl.string(M.t.waaIiO),
                body: M.intl.string(M.t.qDoPah),
                badge: "new",
                shouldShow: er === u.M.HANG_STATUS_POPOVER_NUX,
                graphic: { type: "image", src: U.A },
                targetElementRef: K,
                onRequestClose: () => eo(L.i.DISMISS),
            }),
            (0, i.jsx)("div", {
                role: "group",
                className: a()(G.groupLabel, D.wO),
                children: (0, i.jsxs)("form", {
                    onSubmit: eh,
                    className: D.hF,
                    children: [
                        (0, i.jsxs)("div", {
                            className: D.bd,
                            children: [
                                (0, i.jsx)(A.ksK, {
                                    inputRef: P,
                                    value: X || ea ? W : ($?.title ?? ""),
                                    onBlur: ep,
                                    onFocus: eg,
                                    onChange: ex,
                                    placeholder: M.intl.string(M.t.KPop4s),
                                    leading: {
                                        type: "emoji",
                                        button: (0, i.jsx)(v.R, {
                                            customStatusEmoji: z,
                                            setCustomStatusEmoji: q,
                                            selectedDefaultStatus: X || ea ? null : Q,
                                            defaultStatusVariant: B,
                                            setIsEmojiPickerOpen: s,
                                        }),
                                    },
                                    trailing:
                                        (null == w && null == Q) || en
                                            ? en
                                                ? {
                                                      icon: A.KS6,
                                                      onClick: eh,
                                                      "aria-label": M.intl.string(M.t["R3BPH+"]),
                                                      disabled: 0 === W.length,
                                                  }
                                                : void 0
                                            : { icon: A.ucK, onClick: ef, "aria-label": M.intl.string(M.t.S90FuQ) },
                                }),
                                (0, i.jsx)(A.K0, {
                                    variant: "secondary",
                                    icon: T.j,
                                    onClick: eA,
                                    "aria-label": M.intl.string(M.t["5UAi59"]),
                                }),
                            ],
                        }),
                        ei &&
                            (0, i.jsx)(A.Text, {
                                variant: "text-xs/normal",
                                className: D.iX,
                                color: "text-feedback-critical",
                                children: M.intl.string(M.t["s/oq0f"]),
                            }),
                    ],
                }),
            }),
            (0, i.jsxs)(A.HOs, {
                fade: !0,
                role: "group",
                className: a()(G.groupLabel, D.Os, D.XG),
                children: [
                    (0, i.jsx)(j.k, { guildId: t.guild_id, onSetActivityStatus: ec }),
                    Z &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: D.VA,
                                    children: [
                                        (0, i.jsx)(A.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: M.intl.string(M.t.k8fFjp),
                                        }),
                                        (0, i.jsx)(A.Gg5, { size: "xxs" }),
                                    ],
                                }),
                                V.map((e, t) => e_(e, t, "favorite")),
                            ],
                        }),
                    k.length > 0 &&
                        Z &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { role: "separator", className: D.me }),
                                (0, i.jsxs)("div", {
                                    className: D.VA,
                                    children: [
                                        (0, i.jsx)(A.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: M.intl.string(M.t["+9QSnj"]),
                                        }),
                                        (0, i.jsx)(A.O4, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    k.map((e, t) => e_(e, t, "recent")),
                ],
            }),
        ],
    });
}
