n.d(t, { h: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(812729),
    o = n.n(r),
    c = n(735438),
    d = n(311907),
    u = n(554146),
    h = n(342494),
    A = n(397927),
    _ = n(51183),
    m = n(932001),
    g = n(961350),
    p = n(954571),
    f = n(69555),
    x = n(140547),
    E = n(242919),
    I = n(886019),
    C = n(806246),
    N = n(60821),
    T = n(391786),
    S = n(50122),
    b = n(132970),
    y = n(129104),
    v = n(559405),
    j = n(272997),
    R = n(266069);
n(708455);
var O = n(652215),
    L = n(49999),
    M = n(985018),
    D = n(435579),
    U = n(945375),
    G = n(442078),
    P = n(266915);
function k(e) {
    let { channel: t, setIsHangStatusInputFocused: n, setIsEmojiPickerOpen: s } = e,
        r = l.useRef(null),
        k = (0, d.bG)([E.A], () => E.A.getCustomHangStatus()),
        w = (0, S.A)(),
        B = (0, d.bG)([E.A], () => E.A.getFavoritedStatuses()),
        { defaultStatusVariant: V, allowPermanentClear: H } = (0, x.$j)({
            guildId: t.guild_id,
            location: "HangStatusPicker",
        }),
        F = (0, I.hy)(V),
        K = l.useRef(null),
        [W, Y] = l.useState(k?.status ?? ""),
        [z, q] = l.useState(k?.emoji ?? null),
        [X, J] = l.useState(!1),
        Q = (0, d.bG)([E.A], () => E.A.getCurrentHangStatus()),
        $ = F[Q],
        Z = B.length > 0,
        ee = null == W || "" === W.trim(),
        et = (0, T.A)(t),
        en = (W.trim().length > 0 && W.trim() !== k?.status?.trim()) || (null != z && !o()(z, k?.emoji)),
        [ei, el] = l.useState(!1),
        es = (0, d.bG)([E.A], () => E.A.getFavoritedStatuses().length >= E.x),
        ea = W.length > 0 || null != z,
        [er, eo] = (0, m.kn)([u.M.HANG_STATUS_POPOVER_NUX]);
    l.useEffect(() => {
        p.default.track(O.HAw.HANG_STATUS_PICKER_OPENED, {
            ...(0, C.A)(t.id),
            num_favorites: B.length,
            num_recents: w.length,
        });
    }, []),
        l.useEffect(() => {
            W.trim().length > 0 && ei && el(!1), null == z && ei && el(!1);
        }, [W, z, ei]),
        l.useEffect(() => {
            X || (W !== (k?.status ?? "") && "" !== W.trim()) ? n(!0) : n(!1);
        }, [W, k?.status, z, k?.emoji, n, X]);
    let ec = l.useCallback(
            (e) => {
                e !== Q && ((0, f.Iq)(e, !0), null != z && q(null), "" !== W.trim() && Y(""));
            },
            [Q, z, W],
        ),
        ed = l.useCallback(() => {
            q(null), Y(""), J(!1);
        }, []),
        eu = l.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (o()(t, k?.emoji) && n === k?.status) || ((0, f.hS)(e.status, e.emoji, !0), q(e.emoji), Y(e.status));
            },
            [k?.emoji, k?.status],
        ),
        eh = l.useCallback(
            (e) => {
                e?.preventDefault?.(),
                    null != z && 0 === W.trim().length && el(!0),
                    ee ||
                        (eu({ status: W, emoji: z ?? { id: null, name: "\uD83D\uDCAD", animated: !1 } }),
                        r.current?.blur(),
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
                    ((e = (0, c.sample)(et)),
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
                r.current?.focus(),
                p.default.track(O.HAw.HANG_STATUS_RANDOMIZER_CLICKED, (0, C.A)(t.id)));
        }, [et, z, t.id]),
        e_ = l.useCallback(
            (e, n) => {
                let i = (0, N.A)(n);
                (!es || e) &&
                    ((0, f.My)(i ? n : n.status, i ? null : n.emoji),
                    p.default.track(O.HAw.HANG_STATUS_FAVORITE_CLICKED, { ...(0, C.A)(t.id), favorited: !e }));
            },
            [t.id, es],
        ),
        em = l.useCallback(() => {
            n(!1);
        }, [n]),
        eg = l.useCallback(() => {
            n(!0);
        }, [n]),
        ep = l.useCallback(
            (e, t, n) => {
                let l = (0, N.A)(e),
                    s = l ? F[e] : null,
                    a = E.A.isFavorited(e),
                    r = l
                        ? (0, i.jsx)(v.A, {
                              userId: g.default.getId(),
                              size: 20,
                              hangStatusActivity: { type: O.$pd.HANG_STATUS, state: e },
                              fallbackVariant: V,
                              className: D.Kk,
                          })
                        : null != e.emoji && (0, i.jsx)(_.A, { emoji: e.emoji, hideTooltip: !0, className: D.Kk });
                return (0, i.jsx)(
                    R.u,
                    {
                        label: l ? (s?.title ?? "") : e.status,
                        icon: r,
                        setStatus: () => {
                            l ? ec(e) : eu(e), J(!1);
                        },
                        isFavorited: a,
                        onFavoriteClick: () => e_(a, e),
                    },
                    `${n}-${t}`,
                );
            },
            [V, eu, ec, F, e_],
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
        className: a()(G.popover, D.kL),
        children: [
            (0, i.jsx)(h.AM, {
                title: M.intl.string(M.t.waaIiO),
                body: M.intl.string(M.t.qDoPah),
                badge: "new",
                shouldShow: er === u.M.HANG_STATUS_POPOVER_NUX,
                graphic: { type: "image", src: P.A },
                targetElementRef: K,
                onRequestClose: () => eo(L.i.DISMISS),
            }),
            (0, i.jsx)("div", {
                role: "group",
                className: a()(U.groupLabel, D.wO),
                children: (0, i.jsxs)("form", {
                    onSubmit: eh,
                    className: D.hF,
                    children: [
                        (0, i.jsxs)("div", {
                            className: D.bd,
                            children: [
                                (0, i.jsx)(A.ksK, {
                                    inputRef: r,
                                    value: X || ea ? W : ($?.title ?? ""),
                                    onBlur: em,
                                    onFocus: eg,
                                    onChange: ex,
                                    placeholder: M.intl.string(M.t.KPop4s),
                                    leading: {
                                        type: "emoji",
                                        button: (0, i.jsx)(y.R, {
                                            customStatusEmoji: z,
                                            setCustomStatusEmoji: q,
                                            selectedDefaultStatus: X || ea ? null : Q,
                                            defaultStatusVariant: V,
                                            setIsEmojiPickerOpen: s,
                                        }),
                                    },
                                    trailing:
                                        (null == k && null == Q) || en
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
                                    icon: b.j,
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
                className: a()(U.groupLabel, D.Os, D.XG),
                children: [
                    (0, i.jsx)(j.k, { guildId: t.guild_id, onSetActivityStatus: ed }),
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
                                B.map((e, t) => ep(e, t, "favorite")),
                            ],
                        }),
                    w.length > 0 &&
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
                    w.map((e, t) => ep(e, t, "recent")),
                ],
            }),
        ],
    });
}
