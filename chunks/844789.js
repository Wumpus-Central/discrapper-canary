n.d(t, { Ay: () => lx, fD: () => lp });
var l,
    r,
    a,
    i = n(627968),
    s = n(64700),
    o = n(503698),
    u = n.n(o),
    c = n(140735),
    d = n(155718),
    m = n(383233),
    h = n(298236),
    p = n(953756),
    x = n(735438),
    f = n(862482),
    g = n(980707),
    j = n(477782),
    v = n(34188),
    C = n(811893),
    N = n(863610),
    I = n(442433),
    A = n(565645);
n(938796);
var E = n(17928),
    y = n(636537),
    S = n(192308),
    T = n(228366),
    L = n(163437),
    b = n(97352),
    O = n(67480),
    R = n(328968),
    _ = n(428262),
    P = n(580630),
    k = n(963179),
    M = n(168393),
    U = n(652215),
    D = n(375708);
let w = (0, E.UT)([O.A, b.A, R.A], {
    getQueryId: U.fic.APP_PREMIUM_BUTTON,
    get: (e) => {
        if (null == e) return;
        let t = O.A.get(e),
            n = b.A.getForSKU(e) ?? [],
            l = R.A.getForSKU(e),
            r = O.A.getParentSKU(e);
        return null == t || null == l || (null != t && t.type === U.Puh.SUBSCRIPTION && null == r)
            ? null
            : { parentSku: r, sku: t, storeListing: l, subscriptionPlans: n };
    },
    load: async (e) => {
        if (null == e) return;
        let t = { url: U.Rsh.STOREFRONT_PREMIUM_BUTTON(e), rejectWithError: !1 },
            { body: n } = await y.Bo.get(t);
        T.h.dispatch({ type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: n.store_listings }),
            null != n.subscription_plans &&
                T.h.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                    skuId: e,
                    subscriptionPlans: n.subscription_plans,
                }),
            null != n.skus &&
                n.skus.forEach((e) => {
                    T.h.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
                });
    },
});
var F = n(957565),
    z = n(123917),
    B = n(489414),
    H = n(808199);
function G(e) {
    let { url: t, onSelect: n } = e;
    return F.p5 && null != t
        ? (0, i.jsx)(g.W, {
              "data-menu-migrated-auto": !0,
              navId: "component-button",
              onClose: I.Z_,
              "aria-label": D.intl.string(D.t.tvTXy8),
              onSelect: n,
              children: (0, i.jsx)(j.rX, {
                  children: (0, i.jsx)(j.Dr, {
                      id: "copy",
                      label: D.intl.string(D.t.uHhnfa),
                      action: () => (0, F.C)(t),
                  }),
              }),
          })
        : null;
}
function V(e) {
    let t,
        { label: n, style: l, disabled: r, emoji: a, url: o, skuId: c } = e,
        { executeStateUpdate: m, visualState: p, isDisabled: g } = (0, h.At)(e),
        j = (function (e) {
            let { data: t } = w(e),
                n = t?.parentSku,
                l = t?.sku,
                r = t?.storeListing,
                a = t?.subscriptionPlans,
                o = s.useCallback(() => {
                    if (l?.applicationId == null || l?.id == null || l?.flags == null) return null;
                    (0, S.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, i.jsx)(M.SubscriptionDetailsModal, {
                            appId: l.applicationId,
                            subscriptionType: (0, L.bg)(l.flags) ? "user" : "guild",
                            onClose: t,
                            skuId: l.id,
                            transitionState: n,
                            guildId: null,
                        });
                    });
                }, [l?.applicationId, l?.id, l?.flags]),
                u = s.useCallback(() => {
                    if (null == l) return null;
                    (0, S.openModal)((e) => {
                        let { onClose: t, transitionState: n } = e;
                        return (0, i.jsx)(k.ItemDetailsModal, {
                            appId: l.applicationId,
                            skuId: l.id,
                            onClose: t,
                            transitionState: n,
                        });
                    });
                }, [l]);
            if (null != l && null != r && (null == l || l.type !== U.Puh.SUBSCRIPTION || null != n)) {
                if (null == e || (null != l && !l.available)) return { disabled: !0, label: D.intl.string(D.t.CHa0vN) };
                if (l.type === U.Puh.SUBSCRIPTION) {
                    if (null == a || 0 === a.length) return { disabled: !0, label: D.intl.string(D.t.CHa0vN) };
                    let e = a[0],
                        t = (0, _.y8)(e.id);
                    return {
                        disabled: !1,
                        label: D.intl.formatToPlainString(D.t["c6Q+B3"], {
                            skuName: l.name,
                            price: (0, P.$g)(t.amount, t.currency),
                        }),
                        onClick: o,
                    };
                }
                return null == l.price
                    ? { disabled: !0, label: D.intl.string(D.t.CHa0vN) }
                    : {
                          disabled: !1,
                          label: D.intl.formatToPlainString(D.t["c6Q+B3"], {
                              skuName: l.name,
                              price: (0, P.$g)(l.price.amount, l.price.currency),
                          }),
                          onClick: u,
                      };
            }
        })(c),
        E = null != c && l === d.in.PREMIUM,
        y = E && j?.disabled,
        T = E ? j?.label : n,
        b = null != a,
        O = null != T && T.length > 0,
        R = l === d.in.LINK && null != o && o.length > 0,
        F = p === B.BB.LOADING || (E && null == j);
    return (
        (t = R
            ? () => {
                  (0, z.h)({ href: o ?? "", shouldConfirm: !0 });
              }
            : E
              ? null != j && !1 === j.disabled
                  ? j.onClick
                  : x.noop
              : () => m()),
        (0, i.jsxs)(f.$n, {
            "data-migration-pending": !0,
            color: (function (e) {
                switch (e) {
                    case d.in.PRIMARY:
                    case d.in.PREMIUM:
                        return f.$n.Colors.BRAND;
                    case d.in.SUCCESS:
                        return f.$n.Colors.GREEN;
                    case d.in.DESTRUCTIVE:
                        return f.$n.Colors.RED;
                    default:
                        return f.$n.Colors.PRIMARY;
                }
            })(l),
            size: f.$n.Sizes.SMALL,
            disabled: r || p === B.BB.DISABLED || g || y,
            onClick: t,
            onContextMenu: (e) => {
                R && (0, I.jA)(e, (e) => (0, i.jsx)(G, { ...e, url: o }));
            },
            role: R ? "link" : "button",
            children: [
                (0, i.jsxs)("div", {
                    className: u()(H.Qs, { [H.R]: F, [H.M2]: E }),
                    "aria-hidden": F,
                    children: [
                        E
                            ? (0, i.jsx)("div", {
                                  className: H.sV,
                                  children: (0, i.jsx)(v.U, { size: "xs", color: "white" }),
                              })
                            : null,
                        b
                            ? (0, i.jsx)(A.A, {
                                  className: u()({ [H.MR]: O }),
                                  src: a.src,
                                  emojiId: a.id,
                                  emojiName: a.name,
                                  animated: a.animated,
                              })
                            : null,
                        O ? (0, i.jsx)("div", { className: H.Pf, children: T }) : null,
                        R ? (0, i.jsx)(C.t, { size: "xs", color: "currentColor", className: H.LE }) : null,
                    ],
                }),
                F
                    ? (0, i.jsx)("div", { className: H.Lq, children: (0, i.jsx)(N.n, { dotRadius: 3.5, themed: !0 }) })
                    : null,
            ],
        })
    );
}
var K = n(678708),
    Y = n(713654),
    W = n(734057),
    X = n(71393),
    q = (((l = {}).USER = "user"), (l.ROLE = "role"), (l.CHANNEL = "channel"), l),
    $ = n(47167),
    J = n(696451),
    Z = n(317525),
    Q = n(994500),
    ee = n(287809),
    et = n(768038),
    en = n(403362),
    el = n(562153);
function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let l = X.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case q.USER: {
                    let t = ee.default.getUser(e.id);
                    if (null == t) return null;
                    let n = null != l ? J.Ay.getNick(l.id, t.id) : void 0;
                    return { type: B.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case q.ROLE: {
                    if (null == l) return null;
                    let t = Z.A.getRole(l.id, e.id);
                    if (null == t) return null;
                    return { type: B.iw.ROLE, value: t.id, label: t.name };
                }
                case q.CHANNEL: {
                    if (null == l) return null;
                    let t = W.A.getChannel(e.id);
                    if (null == t || t.guild_id !== l.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: B.iw.CHANNEL, value: t.id, label: (0, $.m1)(t, ee.default, Q.A) };
                }
            }
        })
        .filter(en.Vq);
}
n(138321);
var ea = n(284009),
    ei = n.n(ea),
    es = n(444550),
    eo = n(594808),
    eu = n(814890),
    ec = n(738343),
    ed = n(40816);
function em(e) {
    let { icon: t, iconSize: n } = e;
    return (0, i.jsx)("div", { className: ec.zc, style: { height: n, width: n }, children: t });
}
var eh = (((r = {})[(r.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"), (r[(r.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE"), r);
function ep(e) {
    let { selectActionComponent: t, queryOptions: n, renderIcon: l, renderOptionLabel: r, defaultValues: a } = e,
        { type: o, customId: c, maxValues: m, disabled: p } = t,
        x = (0, eu.c7)(t),
        [f, g] = s.useState(!1),
        [j, v] = s.useState(!1),
        [C, N] = s.useState(new Map(a?.map((e) => [e.value, e]))),
        [I, A] = s.useState(new Set(C.keys())),
        E = s.useRef((a ?? []).map((e) => e.value)),
        y = s.useRef(o),
        S = s.useRef(c),
        [T, L] = s.useState(0);
    s.useEffect(() => {
        let e = (a ?? []).map((e) => e.value);
        if (
            e.every((e) => E.current.includes(e)) &&
            E.current.every((t) => e.includes(t)) &&
            o === y.current &&
            c === S.current
        )
            return;
        (E.current = e), (y.current = o), (S.current = c);
        let t = new Map(a?.map((e) => [e.value, e]));
        N(t), A(new Set(t.keys())), L((e) => e + 1);
    }, [a, o, c]);
    let b = (0, h.jc)();
    ei()(null != b, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: O,
            executeStateUpdate: R,
            visualState: _,
            isDisabled: P,
            error: k,
        } = b.useComponentState(t, C.size > 0 ? { type: o, selectedOptions: Array.from(C.values()) } : void 0),
        M = null != b.modal,
        U = _ === B.BB.LOADING;
    s.useEffect(() => {
        if (
            O?.type === d.I5.USER_SELECT ||
            O?.type === d.I5.ROLE_SELECT ||
            O?.type === d.I5.MENTIONABLE_SELECT ||
            O?.type === d.I5.CHANNEL_SELECT
        ) {
            let e = new Map(O.selectedOptions.map((e) => [e.value, e]));
            N(e), A(new Set(e.keys()));
        }
    }, [O]);
    let D = s.useCallback(() => {
        R({ type: o, selectedOptions: Array.from(C.values()) }) && A(new Set(C.keys()));
    }, [R, o, C]);
    s.useEffect(() => {
        f || j || (C.size === I.size && Array.from(C.keys()).every((e) => I.has(e))) || D();
    }, [f, j, I, C, D]);
    let w = 0 === C.size || f,
        F = {
            isProcessing: U,
            isDisabled: p || _ === B.BB.DISABLED || P,
            wrapperClassName: u()(ec.Lt, { [ec.zE]: M }),
            options: function (e) {
                return new Promise((t) => {
                    t(n(e));
                });
            },
            placeholder: w ? x : void 0,
            onClose: () => g(!1),
            onOpen: () => g(!0),
            onBlur: () => v(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: function (e, t) {
                let { inPill: n } = t,
                    r = n ? 16 : 24,
                    a = l(e, r);
                return null != a ? (0, i.jsx)(em, { icon: a, iconSize: r }) : null;
            },
            renderOptionLabel: r,
        };
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ec.kL,
                children:
                    m > 1
                        ? (0, i.jsx)(
                              es.p,
                              {
                                  value: Array.from(C.values()),
                                  onChange: function (e) {
                                      f || v(!0), N(new Map(e.map((e) => [e.value, e])));
                                  },
                                  multi: !0,
                                  inputClassNames: u()({ [ec.R]: !w }),
                                  closeOnSelect: !1,
                                  ...F,
                                  "data-migration-pending": !0,
                              },
                              T,
                          )
                        : (0, i.jsx)(
                              es.p,
                              {
                                  value: [...C.values()][0],
                                  onChange: function (e) {
                                      return N(null != e ? new Map([[e.value, e]]) : new Map());
                                  },
                                  clearable: !0,
                                  ...F,
                                  "data-migration-pending": !0,
                              },
                              T,
                          ),
            }),
            null == k || M ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(k), className: ed.z3 }),
        ],
    });
}
var ex = n(167483);
function ef(e) {
    let { channelTypes: t } = e,
        n = (0, h.jc)(),
        l = n?.channelId,
        r = W.A.getChannel(l),
        a = X.A.getGuild(r?.getGuildId()),
        o = s.useMemo(() => er(e.defaultValues, a?.id, t), [e.defaultValues, a, t]);
    return (0, i.jsx)(ep, {
        selectActionComponent: e,
        queryOptions: function (e) {
            let n;
            return null == (n = W.A.getChannel(l))
                ? []
                : et.Ay.queryApplicationCommandChannelResults({
                      query: e,
                      channel: n,
                      channelTypes: t,
                      limit: 15,
                  }).channels.map((e) => ({ type: B.iw.CHANNEL, value: e.id, label: (0, $.m1)(e, ee.default, Q.A) }));
        },
        renderIcon: function (e, t) {
            let n = W.A.getChannel(e?.value);
            if (null == n) return null;
            let l = n.type === U.rbe.GUILD_CATEGORY ? K.s : (0, Y.gU)(n);
            return null != l ? (0, i.jsx)(l, { size: "custom", color: "currentColor", width: t, height: t }) : null;
        },
        renderOptionLabel: function (e) {
            return (0, i.jsx)("span", { className: ex.Pf, children: e.label });
        },
        defaultValues: o,
    });
}
var eg = n(150934);
function ej(e) {
    let { type: t, default: n } = e,
        l = (0, h.jc)();
    ei()(null != l, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: r, executeStateUpdate: a } = l.useComponentState(e, null != n ? { type: t, value: n } : void 0),
        o = s.useMemo(() => r?.type === t && r.value, [r, t]),
        u = l.getParents(e)?.[0],
        c = u?.type === d.I5.LABEL ? u : void 0;
    return (
        ei()(null != c, "CheckboxActionComponent must be a child of a Label component"),
        (0, i.jsx)(eg.S, {
            label: c.label,
            description: c.description,
            checked: o,
            onChange: function (e) {
                a({ type: t, value: e });
            },
        })
    );
}
var ev = n(167417);
function eC(e) {
    let { type: t, options: n, required: l, maxValues: r } = e,
        a = s.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: o, executeStateUpdate: u } = (0, h.At)(e, a.length > 0 ? { type: t, values: a } : void 0),
        c = s.useMemo(() => (o?.type === t ? o.values : []), [o, t]);
    return (0, i.jsx)(ev.$, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: c.length >= r && !c.includes(e.value),
        })),
        selectedValues: c,
        onChange: function (e) {
            u({ type: t, values: e });
        },
        required: l,
    });
}
var eN = n(81369),
    eI = n(661531),
    eA = n(834730),
    eE = n(628284),
    ey = n(241326),
    eS = n(608299),
    eT = n(780777),
    eL = n(494921),
    eb = n(565150),
    eO = n(851023),
    eR = n(215497),
    e_ = n(914905),
    eP = n(101555),
    ek = n(424170),
    eM = n(31717),
    eU = n(255438),
    eD = n(453771),
    ew = n(518960),
    eF = n(382287),
    ez = n(522602),
    eB = n(179906);
function eH(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: r, types: a, guildId: s } = e,
        o = (0, eD.o2)(s),
        c = (0, eU.Xq)(o / eU.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, i.jsxs)("div", {
        className: eB.pp,
        children: [
            (0, i.jsxs)("div", {
                className: u()(eB.e8, { [eB.R]: t }),
                children: [
                    (0, i.jsx)(eN.H, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, i.jsx)(eA.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: D.intl.format(D.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: r,
                        }),
                    }),
                    (0, i.jsx)(eA.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, eu.fw)(l, r, a, c),
                    }),
                ],
            }),
            t &&
                (0, i.jsxs)("div", {
                    className: u()(eB.e8, eB.r$),
                    children: [
                        (0, i.jsx)(eN.H, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, i.jsx)(eA.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            children: D.intl.string(D.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function eG() {
    return (0, i.jsxs)("div", {
        className: u()(eB.pp, eB.e8),
        children: [
            (0, i.jsx)(eE.y, { color: eI.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, i.jsx)(eA.E, {
                variant: "text-md/normal",
                color: "text-strong",
                children: D.intl.string(D.t["0PhgpK"]),
            }),
            (0, i.jsx)(eA.E, { variant: "text-xs/normal", color: "text-muted", children: D.intl.string(D.t.HYg2Hn) }),
        ],
    });
}
function eV(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: l } = e;
    return (0, i.jsxs)(
        "div",
        {
            className: u()(eB.NJ, { [eB.j1]: l }),
            children: [
                (0, i.jsx)(e_.J, { upload: t, size: l ? eR.L.XSMALL : eR.L.XXSMALL }),
                (0, i.jsx)(eA.E, {
                    variant: `text-${l ? "md" : "xs"}/medium`,
                    className: eB.iW,
                    children: t.filename ?? D.intl.string(D.t.ZMirp0),
                }),
                (0, i.jsx)(eP.Ay, {
                    className: eB.BX,
                    children: (0, i.jsx)(eO.A, {
                        className: eB.XI,
                        tooltip: D.intl.string(D.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, i.jsx)(ey.u, { size: "xs", color: "currentColor", className: eB.gE }),
                    }),
                }),
            ],
        },
        t.id,
    );
}
function eK(e) {
    let { minValues: t, maxValues: n } = e,
        l = s.useRef(null),
        r = s.useRef(null),
        [a, o] = s.useState(!1),
        c = (0, h.jc)();
    ei()(null != c, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let m = c.channelId;
    ei()(null != m, "FileUploadActionComponent must be used inside a channel");
    let p = c.modal?.customId;
    ei()(null != p, "FileUploadActionComponent requires modalCustomId from context");
    let {
            allowedExtensions: x,
            typesFormattedString: f,
            validateFilenames: g,
            showInvalidFileTypeAlert: j,
        } = (0, ek.M1)(e.fileTypes),
        {
            uploadIds: v,
            setUploadIds: C,
            currentUploads: N,
            error: I,
        } = (function (e) {
            let t = (0, h.jc)();
            ei()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
            let n = t.channelId;
            ei()(null != n, "useFileUploadComponentState must be used inside a channel");
            let { state: l, executeStateUpdate: r, error: a } = t.useComponentState(e),
                i = s.useMemo(() => (l?.type === d.I5.FILE_UPLOAD ? l.uploadIds : []), [l]),
                o = ez.A.getUploads(n, eM.C.InteractionModal),
                u = s.useMemo(() => i.map((e) => o.find((t) => t.id === e)).filter((e) => null != e), [i, o]),
                c = s.useCallback((e) => r({ type: d.I5.FILE_UPLOAD, uploadIds: e }), [r]);
            return (
                s.useEffect(() => {
                    i.length > u.length && c(i.filter((e) => u.some((t) => t.id === e)));
                }, [i, u, c]),
                { uploadIds: i, setUploadIds: c, currentUploads: u, error: a }
            );
        })(e),
        A = (0, E.bG)([W.A], () => W.A.getBasicChannel(m));
    ei()(null != A, "FileUploadActionComponent requires a valid channel");
    let y = s.useCallback((e) => {
            e.preventDefault(), e.dataTransfer?.types.includes("Files") && o(!0);
        }, []),
        S = s.useCallback((e) => {
            r.current?.contains(e.relatedTarget) || o(!1);
        }, []),
        T = s.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (v.length + e.length > n)
                    return (0, eL.openUploadError)({
                        title: D.intl.string(D.t.wOr6hB),
                        help: D.intl.formatToPlainString(D.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, eF.fJ)(e, A.guild_id)) return (0, ew.V)(A, e);
                if (!g(e.map((e) => e.name))) return j();
                let l = e.map((e) => {
                    let n = (0, eu.so)(p),
                        l = { id: n, file: e, platform: eb.xz.WEB, origin: t };
                    return (
                        eS.A.setFile({
                            channelId: m,
                            id: n,
                            file: l,
                            draftType: eM.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                C(v.concat(l));
            },
            [v, n, A, C, p, m, g, j],
        ),
        L = s.useCallback(
            (e) => {
                e.preventDefault(), o(!1), T(Array.from(e.dataTransfer?.files ?? []), "drag_drop");
            },
            [T],
        ),
        b = (e) => {
            eS.A.remove(m, e, eM.C.InteractionModal), C(v.filter((t) => t !== e));
        };
    return (s.useEffect(() => {
        let e = r.current;
        return (
            e?.addEventListener("dragover", y),
            e?.addEventListener("dragleave", S),
            e?.addEventListener("drop", L),
            () => {
                e?.removeEventListener("dragover", y),
                    e?.removeEventListener("dragleave", S),
                    e?.removeEventListener("drop", L);
            }
        );
    }, [y, S, L]),
    1 === n && 1 === N.length)
        ? (0, i.jsx)(eV, { upload: N[0], handleRemoveFile: b, singleFileInput: !0 })
        : (0, i.jsxs)("div", {
              ref: r,
              className: u()(eB.kL, { [eB.Ke]: a, [eB.z3]: null != I }),
              children: [
                  v.length >= n
                      ? (0, i.jsx)(eG, {})
                      : (0, i.jsx)(eH, {
                            dropping: a,
                            fileInputRef: l,
                            minValues: t,
                            maxValues: n,
                            types: f,
                            guildId: A.guild_id,
                        }),
                  N.length > 0 &&
                      (0, i.jsx)("div", {
                          className: eB.aq,
                          children: N.map((e) => (0, i.jsx)(eV, { upload: e, handleRemoveFile: b }, e.id)),
                      }),
                  (0, i.jsx)(eT.A, {
                      ref: l,
                      onChange: function (e) {
                          T(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = "");
                      },
                      multiple: n > 1,
                      filters: x.length > 0 ? [{ name: "", extensions: x }] : void 0,
                      tabIndex: -1,
                      className: eB.Fg,
                  }),
              ],
          });
}
var eY = n(97808),
    eW = n(778712),
    eX = n(957485),
    eq = n(950305),
    e$ = n(297413),
    eJ = n(376304),
    eZ = n(201275),
    eQ = n(386784),
    e0 = n(657048),
    e1 = n(290863);
function e5(e) {
    let t = (0, h.jc)(),
        n = t?.channelId,
        l = W.A.getChannel(n),
        r = X.A.getGuild(l?.getGuildId()),
        a = (0, eQ.A)(r?.id, 1e3),
        o = s.useMemo(() => er(e.defaultValues, r?.id), [e.defaultValues, r]);
    return (0, i.jsx)(ep, {
        selectActionComponent: e,
        queryOptions: function (t) {
            return (function (e, t, n) {
                let l = W.A.getChannel(n);
                if (null == l) return [];
                let r = e === d.I5.USER_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    a = e === d.I5.ROLE_SELECT || e === d.I5.MENTIONABLE_SELECT,
                    { users: i, roles: s } = et.Ay.queryMentionResults({
                        query: t,
                        channel: l,
                        canMentionEveryone: !1,
                        canMentionHere: !1,
                        canMentionUsers: r,
                        canMentionRoles: a,
                        includeAllGuildUsers: !0,
                        includeNonMentionableRoles: !0,
                        checkRecentlyTalkedOnEmptyQuery: !1,
                        limit: 15,
                    });
                return [
                    ...i.map((e) => {
                        let t = el.Ay.getNickname(l.getGuildId(), n, e.user);
                        return { type: B.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
                    }),
                    ...s.map((e) => ({ type: B.iw.ROLE, value: e.id, label: e.name })),
                ];
            })(e.type, t, n);
        },
        renderIcon: (e, t) => {
            let n = t === eh.PILL_ICON_SIZE;
            if (e?.type === B.iw.USER) {
                let l = ee.default.getUser(e.value);
                if (null == l) return;
                return (0, i.jsx)(eY.eu, {
                    size: n ? eW._3.SIZE_16 : eW._3.SIZE_24,
                    src: l.getAvatarURL(r?.id, t),
                    status: n ? null : e1.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if (e?.type === B.iw.ROLE) {
                let n = null != r ? Z.A.getRole(r.id, e.value) : void 0;
                if (null == n || null == r) return;
                let l = (0, eJ.fm)(r, n) ? (0, eZ.ox)(n, t) : null;
                return null != l
                    ? (0, i.jsx)(e0.A, { ...l })
                    : (0, i.jsx)(eX.i, { size: "custom", color: n.colorString ?? U.TpD, height: t, width: t });
            }
        },
        renderOptionLabel: (e) => {
            let t = null;
            if (e.type === B.iw.USER) {
                let n = ee.default.getUser(e.value);
                null != n &&
                    (t = (0, i.jsx)(e$.A, {
                        className: ex.Tc,
                        usernameClass: ex.Xh,
                        discriminatorClass: ex.D2,
                        botClass: ex.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === B.iw.ROLE) {
                let n = null != r ? Z.A.getRole(r.id, e.value) : void 0,
                    l = null == n ? null : a?.[n.id];
                null != l &&
                    (t = (0, i.jsxs)("div", {
                        className: ex.Ly,
                        children: [
                            (0, i.jsx)(eq.n, { size: "sm", color: "currentColor", className: ex.jh }),
                            (0, i.jsx)("span", { className: ex.NT, children: l }),
                        ],
                    }));
            }
            return (0, i.jsxs)("span", {
                className: ex.Pf,
                children: [(0, i.jsx)("span", { className: ex.QK, children: e.label }), t],
            });
        },
        defaultValues: o,
    });
}
var e4 = n(144228),
    e8 = n(821609),
    e2 = n(69889);
function e3(e) {
    let { type: t, options: n, required: l } = e,
        r = s.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: a, executeStateUpdate: o } = (0, h.At)(e, null != r ? { type: t, value: r } : void 0),
        c = s.useMemo(() => (a?.type === t ? a.value : null), [a, t]),
        d = null != c,
        m = s.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]);
    function p(e) {
        o({ type: t, value: e });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e4.z, { options: m, value: c ?? "", onChange: p, required: l }),
            !l &&
                (0, i.jsx)("div", {
                    className: u()(e2.H, { [e2.d]: !d }),
                    "aria-hidden": !d,
                    children: (0, i.jsx)(e8.$, {
                        text: D.intl.string(D.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => p(null),
                    }),
                }),
        ],
    });
}
var e6 = n(843282);
function e9(e) {
    let { emoji: t, label: n, description: l, isDisabled: r, isOffset: a } = e,
        s = u()(ed._A, { [ed.r9]: r, [ed.cY]: null == t && a });
    return (0, i.jsxs)("div", {
        className: ed.uK,
        children: [
            null != t
                ? (0, i.jsx)(A.A, { className: ed.Zg, emojiId: t.id, emojiName: t.name, animated: t.animated })
                : null,
            (0, i.jsxs)("div", {
                className: s,
                children: [
                    (0, i.jsx)("strong", { className: ed.Pf, children: n }),
                    null != l ? (0, i.jsx)("span", { className: ed.h_, children: l }) : null,
                ],
            }),
        ],
    });
}
function e7(e) {
    let { emoji: t, label: n } = e;
    return (0, i.jsx)("div", {
        className: ed.uK,
        children: (0, i.jsxs)("div", {
            className: u()(ed.Uq, ed.u9),
            children: [
                null != t
                    ? (0, i.jsx)(A.A, {
                          className: ed.Zg,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated,
                      })
                    : null,
                (0, i.jsx)("span", { className: ed.oX, children: n }),
            ],
        }),
    });
}
function te(e) {
    let { options: t } = e;
    return (0, i.jsx)("div", {
        className: ed.uK,
        children: (0, i.jsx)("div", {
            className: ed.Uq,
            children: t.map((e, t) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: ed.mK,
                        children: [
                            null != e.emoji
                                ? (0, i.jsx)(A.A, {
                                      className: ed.eh,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated,
                                  })
                                : null,
                            (0, i.jsx)("span", { className: ed.Tc, children: e.label }, e.value),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
function tt(e) {
    let { type: t, options: n, id: l, maxValues: r, disabled: a } = e,
        o = (0, eu.c7)(e),
        c = s.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        m = (0, h.jc)();
    ei()(null != m, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: p,
            executeStateUpdate: x,
            visualState: f,
            isDisabled: g,
            error: j,
        } = m.useComponentState(e, c.length > 0 ? { type: t, values: c } : void 0),
        v = null != m.modal,
        C = r > 1,
        N = f === B.BB.LOADING,
        [I, A] = s.useState(!1),
        [E, y] = s.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [S, T] = s.useState(E),
        L = s.useMemo(() => n.some((e) => null != e.emoji), [n]);
    s.useEffect(() => {
        if (p?.type === d.I5.STRING_SELECT) {
            let e = new Set(p.values);
            y(e), T(e);
        } else {
            let e = new Set(c);
            y(e), T(e);
        }
    }, [l, c, p]);
    let b = s.useCallback(() => {
        S !== E && x({ type: d.I5.STRING_SELECT, values: Array.from(E) }) && T(E);
    }, [E, S, T, x]);
    s.useEffect(() => {
        I || (E.size === S.size && Array.from(S).every((e) => E.has(e))) || b();
    }, [I, E, S, b]);
    let O = (0, eu.Lr)(e, v ? "modal" : "message"),
        R = e6.lS;
    C ? (R = e6.M8) : O && (R = e6.$l);
    let _ = (0, e6.Ev)({ value: E, onChange: (e) => y(e), onSelectInteraction: R });
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ed.kL,
                children: (0, i.jsx)(e6.Pw, {
                    isProcessing: N,
                    isDisabled: a || f === B.BB.DISABLED || g,
                    className: u()(ed.Lt, { [ed.zE]: v }),
                    options: n.map((e) => ({ ...e, disabled: C && !E.has(e.value) && E.size === r })),
                    placeholder: o,
                    onClose: () => A(!1),
                    onOpen: () => A(!0),
                    maxVisibleItems: 5,
                    closeOnSelect: !C,
                    optionClassName: ed.MT,
                    renderOptionLabel: (e) =>
                        (0, i.jsx)(e9, { ...e, isDisabled: C && !E.has(e.value) && E.size === r, isOffset: L }),
                    renderOptionValue: (e) => (C ? (0, i.jsx)(te, { options: e }) : (0, i.jsx)(e7, { ...e[0] })),
                    ..._,
                    "data-migration-pending": !0,
                }),
            }),
            null == j || v ? null : (0, i.jsx)(eo.S0, { ...(0, eo.PS)(j), className: ed.z3 }),
        ],
    });
}
var tn = n(292666),
    tl = n(260598),
    tr = n(321471),
    ta = n(969508),
    ti = n(597526);
function ts(e) {
    let t,
        { type: n, style: l, label: r, placeholder: a, minLength: o, maxLength: u, required: c, value: m } = e,
        [p, x] = s.useState(m ?? ""),
        { state: f, executeStateUpdate: g, error: j } = (0, h.At)(e, null != m ? { type: n, value: m } : void 0),
        v = (0, ta.FG)(e.id);
    s.useEffect(() => {
        f?.type === n && x(f.value);
    }, [n, f]);
    let C = {
        value: p,
        placeholder: a,
        minLength: o,
        maxLength: u,
        required: c,
        onChange: function (e) {
            x(e), g({ type: n, value: e });
        },
        autoFocus: v,
    };
    switch (l) {
        case d.qz.SMALL:
            t = (0, i.jsx)(tn.k, { ...C });
            break;
        case d.qz.PARAGRAPH:
            t = (0, i.jsx)(tl.f, { autosize: !0, ...C });
    }
    return null != r ? (0, i.jsx)(tr.e, { title: r, required: c, className: ti.k, error: j, children: t }) : t;
}
n(321073);
var to = n(534890),
    tu = n(831544),
    tc = n(460905),
    td = n(109112),
    tm = n(664121),
    th = n(534514),
    tp = n(602853),
    tx = n(222713),
    tf = n(783465),
    tg = n(7584),
    tj = n(548118),
    tv = n(486020),
    tC = n(582068),
    tN = n(789369);
function tI(e) {
    let { checkpointData: t } = e,
        {
            cardId: n,
            numMessagesSent: l = 0,
            totalVoiceMinutes: r = 0,
            numEmojisSent: a = 0,
            topEmoji: o,
            topGame: u,
            topGuild: c,
            powerLevel: d,
            powerLevelPercentile: m,
        } = t,
        h = new Intl.NumberFormat(D.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(l),
        p = new Intl.NumberFormat(D.intl.currentLocale, {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 2,
        }).format(a),
        x = (0, tf.oO)(r),
        f = (0, tf.OW)(n),
        g = tx.f[n],
        j = (0, tp.r)(g.primaryColor).hex(),
        v = (0, tp.r)(g.secondaryColor).hex({ opacity: 0.2 }),
        C = (0, E.bG)([X.A], () => X.A.getGuild(c?.guildId)),
        N = new Intl.NumberFormat(D.intl.currentLocale, { notation: "compact", compactDisplay: "short" }),
        I = (0, tf._V)(m ?? 0),
        y = (0, s.useMemo)(() => {
            let e = [];
            e.push("/assets/390e5e747351159f.svg");
            for (let t = 0; t < 8; t++) e.push("/assets/3a6b11549118d705.svg");
            return e.push("/assets/db1951f89e12e0e3.svg"), e;
        }, []);
    return (0, i.jsxs)("div", {
        className: tN.kL,
        style: { backgroundColor: j },
        children: [
            (0, i.jsxs)("div", {
                className: tN.Nr,
                children: [
                    (0, i.jsx)("img", { src: f, alt: "", className: tN.LY, style: { backgroundColor: j } }),
                    (0, i.jsxs)("div", {
                        className: tN.M1,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tN.dJ,
                                children: [
                                    (0, i.jsx)(to.o, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eA.E, { variant: "text-sm/medium", className: tN.KA, children: h }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tN.dJ,
                                children: [
                                    (0, i.jsx)(tu.c, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eA.E, { variant: "text-sm/medium", className: tN.KA, children: x }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tN.dJ,
                                children: [
                                    (0, i.jsx)(tc.n, { color: eI.A.colors.BLACK, size: "xs" }),
                                    (0, i.jsx)(eA.E, { variant: "text-sm/medium", className: tN.KA, children: p }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: tN.dJ,
                                children:
                                    null == o
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(td._, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children: D.intl.string(tC.default["fn+gnp"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(A.A, {
                                                      emojiId: o.emojiId,
                                                      emojiName: o.emojiName,
                                                      className: tN.iY,
                                                  }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children:
                                                          null == o.emojiId
                                                              ? tg.Ay.convertSurrogateToName(o.emojiName)
                                                              : `:${o.emojiName}:`,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: tN.dJ,
                                children:
                                    null == u
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(td._, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children: D.intl.string(tC.default["26V/4h"]),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("img", {
                                                      src: tv.Ay.getApplicationIconURL({
                                                          id: u.applicationId,
                                                          icon: u.applicationImageId,
                                                      }),
                                                      alt: "",
                                                      className: tN.iY,
                                                  }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children: u.applicationName,
                                                  }),
                                              ],
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                className: tN.dJ,
                                children:
                                    null == c
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(td._, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children: D.intl.string(tC.default.eoLmk1),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  null != C
                                                      ? (0, i.jsx)(tj.Ay, {
                                                            guild: C,
                                                            size: tj.Ay.Sizes.SMOL,
                                                            className: tN.iY,
                                                        })
                                                      : (0, i.jsx)(tm.R, { color: eI.A.colors.BLACK, size: "xs" }),
                                                  (0, i.jsx)(eA.E, {
                                                      variant: "text-sm/medium",
                                                      className: tN.KA,
                                                      children: c.guildName,
                                                  }),
                                              ],
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: tN.qr,
                style: { backgroundColor: v },
                children: (0, i.jsx)(th.D, {
                    variant: "display-sm",
                    className: tN.DD,
                    children: D.intl.string(tC.default["CdU/PF"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tN.hC,
                style: { backgroundColor: j },
                children: [
                    (0, i.jsx)("div", {
                        className: tN.TO,
                        children: y.map((e, t) =>
                            (0, i.jsx)(
                                "img",
                                { className: tN.mG, src: e, width: 4, alt: "", style: { opacity: t >= I ? 0.3 : 1 } },
                                t,
                            ),
                        ),
                    }),
                    (0, i.jsxs)("div", {
                        className: tN.JA,
                        children: [
                            (0, i.jsx)(eA.E, { variant: "text-xs/normal", className: tN.KA, children: "LVL" }),
                            (0, i.jsx)(eA.E, { variant: "text-xs/bold", className: tN.KA, children: N.format(d ?? 0) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tA = n(564771),
    tE = n(338717),
    ty = n(96782),
    tS = n(302031),
    tT = n(343408);
function tL(e) {
    let { file: t, name: n, size: l, spoiler: r } = e,
        a = s.useMemo(
            () =>
                null != t.contentType && -1 !== t.contentType.indexOf("/")
                    ? t.contentType.split("/")
                    : ["unknown", "unknown"],
            [t.contentType],
        ),
        [o, c] = s.useState(r),
        [d, m] = s.useState(r);
    r !== o && (c(r), m(r));
    let h = s.useMemo(
        () => () => (0, i.jsx)(ty.zB, { mimeType: a, downloadURL: t.url, showDownload: !0, isVisualMediaType: !1 }),
        [t, a],
    );
    function p(e) {
        return (0, i.jsx)(tA.A, {
            className: u()({ [tT.V]: e }),
            url: t.url,
            fileName: n ?? D.intl.string(D.t.GnuJ5u),
            fileSize: l ?? 0,
            renderAdjacentContent: h,
        });
    }
    return (0, i.jsx)("div", {
        className: tT.O,
        children: r
            ? (0, i.jsx)(tS.Ay, {
                  type: tS.Ay.Types.ATTACHMENT,
                  reason: tE.Oc.SPOILER,
                  obscured: d,
                  onToggleObscurity: () => m((e) => !e),
                  children: (e) => p(e),
              })
            : p(!1),
    });
}
var tb = n(665260),
    tO = n(731068),
    tR = n(154872),
    t_ = n(492230),
    tP = n(294520),
    tk = n(448381),
    tM = n(144165),
    tU = n(990078),
    tD = n(891694),
    tw = n(552437);
function tF(e) {
    let t = s.useRef(null),
        n = e.media;
    if (n.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, i.jsx)(tU.m, {
            text: D.intl.string(D.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, i.jsx)("div", {
                className: u()(e.className, tw.FN, { [tw.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, i.jsx)(tD.A, { ref: t, className: tw.i4 }),
            }),
        });
    let l = n.loadingState === d.TD.LOADING ? U.Rv1.LOADING : U.Rv1.ERROR;
    return (0, i.jsx)(tM._, {
        className: u()(e.className, { [tw.gS]: e.hiddenSpoilers }),
        readyState: l,
        src: "",
        width: e.placeholderWidth,
        height: e.placeholderHeight,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        mediaLayoutType: e.mediaLayoutType,
        useFullWidth: e.useFullWidth,
        zoomable: !1,
    });
}
var tz = n(998218),
    tB = n(34337);
function tH(e) {
    let t = e.item.originalItem.media;
    return (0, i.jsx)(tF, {
        media: t,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType,
    });
}
function tG(e) {
    let t = e.item.originalItem.media;
    return (0, tB.LL)({
        ...e,
        alt: e.item.originalItem.description,
        src: t.proxyUrl,
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholderVersion,
        contentType: t.contentType,
        originalContentType: t.originalContentType,
        sourceMetadata: { message: e.message },
        analyticsSource: "renderImageComponentForGalleryItem",
        srcIsAnimated: e.item.srcIsAnimated,
    });
}
function tV(e) {
    let t = e.item.originalItem.media,
        n = tz.A.toURLSafe(t.proxyUrl);
    return null == n
        ? null
        : (n.searchParams.append("format", "webp"),
          (0, tB.$o)({
              ...e,
              poster: n.toString(),
              alt: e.item.originalItem.description,
              src: t.proxyUrl,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholderVersion,
              sourceMetadata: { message: e.message },
          }));
}
var tK = n(564107),
    tY = n(394839),
    tW = n(644447);
function tX(e) {
    let { message: t } = (0, h.jc)(),
        n = (0, E.bG)([W.A], () => W.A.getChannel(t?.channel_id)),
        {
            shouldHideMediaOptions: l,
            enabledContentHarmTypeFlags: r,
            gifAutoPlay: a,
            getGifFavButton: s,
            getOnMediaItemContextMenu: o,
        } = (0, tK.X)();
    if (null == t || null == n) return null;
    let u = e.items.map((e) => (0, tR.FX)(e.media, t)).filter((e) => "INVALID" !== e.type),
        { srcToOnClickOverride: c, srcToHandlePreloadImage: d } =
            u.length > 1
                ? (0, t_.o)(u, { shouldHideMediaOptions: l, enabledContentHarmTypeFlags: r }, "Media Mosaic")
                : { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} };
    function m(e, n) {
        let l = e.originalItem;
        return (0, tP.tt)(l.media, n, l.spoiler, t?.author.bot ?? !1);
    }
    let p = e.items.map((e, n) => {
        let l = e.media,
            r = o?.(l),
            i = {
                message: t,
                item: {
                    uniqueId: `${l.proxyUrl}--${n}`,
                    originalItem: e,
                    type: (0, tk.wz)(l),
                    downloadUrl: l.url,
                    height: l.height,
                    width: l.width,
                    spoiler: e.spoiler,
                    contentType: l.contentType,
                    srcIsAnimated: (0, tb.Lt)(l.flags, tO.e5.IS_ANIMATED),
                },
                onContextMenu: r,
                autoPlayGif: a,
                getObscureReason: m,
                renderImageComponent: tG,
                renderVideoComponent: tV,
                renderVisualPlaceholderComponent: tH,
                renderAudioComponent: U.tEg,
                renderPlaintextFilePreview: U.tEg,
                renderGenericFileComponent: U.tEg,
                gifFavoriteButton: s(l),
                onPlay: function (e, t, n) {},
                canRemoveItem: !1,
                canEditItem: !1,
                onRemoveItem: U.tEg,
                onEditItem: U.tEg,
            },
            u = (0, tW.E)({ proxyURL: l.proxyUrl, url: l.url });
        return u in c && ((i.onClick = c[u]), (i.handlePreloadImage = d[u])), i;
    });
    return (0, i.jsx)("div", { children: (0, i.jsx)(tY.A, { items: p, isInAppComponentsV2: !0 }) });
}
var tq = n(118433);
function t$(e) {
    let { divider: t, spacing: n } = e;
    return (0, i.jsx)("div", { className: u()({ [tq.f]: n === d.C8.LARGE, [tq.y]: t }) });
}
var tJ = n(46054),
    tZ = n(465364),
    tQ = n(85092);
let t0 = {
        SIZE: { default: void 0, reduced: tQ.k2 },
        COLOR: { default: void 0, muted: tQ.JF },
        WEIGHT: { default: void 0, reduced: tQ.Xj },
    },
    t1 = s.createContext({ className: void 0, size: "default", color: "default", weight: "default" });
function t5() {
    return s.useContext(t1);
}
function t4(e) {
    let { children: t, size: n, color: l, weight: r } = e,
        a = t5(),
        o = s.useMemo(() => {
            let e = { className: void 0, size: n ?? a.size, color: l ?? a.color, weight: r ?? a.weight },
                t = u()(t0.SIZE[e.size], t0.COLOR[e.color], t0.WEIGHT[e.weight]);
            return "" !== t && (e.className = u()(tQ.zr, t)), e;
        }, [n, l, r, a]);
    return (0, i.jsx)(t1.Provider, { value: o, children: t });
}
let t8 = { allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
var t2 = n(958517),
    t3 = n(992595);
function t6(e) {
    let t,
        { content: n, className: l } = e,
        r =
            ((t = (0, h.jc)()),
            (0, s.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, tZ.ko)(t.message, t8)
                              : (0, tZ.Le)({ channelId: t.channelId, renderOptions: t8 })),
                      tJ.A.parse(n, !0, e));
            }, [n, t])),
        a = t5();
    return (0, i.jsx)("div", { className: u()(l, t3.PT, t2.T, a.className), children: r });
}
var t9 = n(838541),
    t7 = n(493934);
function ne(e) {
    let { media: t, spoiler: n, description: l } = e,
        r = (0, tk.wz)(t),
        a = (0, tb.Lt)(t.flags, tO.e5.IS_ANIMATED),
        { gifAutoPlay: o } = (0, tK.X)(),
        [c, d] = s.useState(n),
        [m, h] = s.useState(n);
    n !== c && (d(n), h(n));
    let p = (e) =>
        "IMAGE" !== r
            ? (0, i.jsx)(tF, {
                  className: t7.Dg,
                  media: t,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
              })
            : (0, i.jsx)(tB.LL, {
                  containerClassName: u()(t7.Dg, { [t7.rP]: e }),
                  imageClassName: t7._8,
                  src: t.proxyUrl,
                  alt: l,
                  original: t.url,
                  placeholder: t.placeholder,
                  placeholderVersion: t.placeholderVersion,
                  width: t.width ?? 0,
                  height: t.height ?? 0,
                  hiddenSpoilers: e,
                  maxWidth: 170,
                  maxHeight: 170,
                  minWidth: 85,
                  minHeight: 85,
                  autoPlay: o && !e,
                  mediaLayoutType: t9.dG.MOSAIC,
                  reducedSizeAltTextButton: !0,
                  srcIsAnimated: a,
              });
    return n
        ? (0, i.jsx)(tS.Ay, {
              type: tS.Ay.Types.ATTACHMENT,
              reason: tE.Oc.SPOILER,
              obscured: m,
              onToggleObscurity: () => h((e) => !e),
              children: (e) => p(e),
          })
        : p(!1);
}
var nt = n(901252);
function nn() {
    return (0, i.jsx)("div", {
        className: nt.k,
        children: (0, i.jsx)(eA.E, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: D.intl.string(D.t.zksHZO),
        }),
    });
}
var nl = n(681154);
class nr extends s.PureComponent {
    state = { error: null };
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    componentDidCatch(e, t) {
        console.error("ErrorBoundary caught an error", e, t);
    }
    render() {
        return null != this.state.error ? this.props.fallback : this.props.children;
    }
}
var na = n(211401),
    ni = n(500049),
    ns = n(429913),
    no = n(355622),
    nu = n(583846),
    nc = n(360469),
    nd = n(52133),
    nm = n(803306),
    nh = n(860071),
    np = n(808380),
    nx = n(409626),
    nf = n(692969),
    ng = n(424994),
    nj = (((a = {})[(a.EMBED = 1)] = "EMBED"), a);
let nv = { [np.Y.XBOX]: ng.a4.XBOX, [np.Y.PLAYSTATION]: ng.a4.PLAYSTATION },
    nC = { [nj.EMBED]: nx.GameProfileSources.Embed };
function nN(e) {
    let t,
        n,
        { entry: l, location: r, baseEntryData: a } = e,
        i = (0, ns.h)(l.extra.application_id),
        s = i?.getIconURL(nc.iu.LARGE),
        o = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = nv[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === nl.ContentInventoryEntryType.PLAYED_GAME && (0, nu.JM)(l) && !(0, nu.I5)(l)
            ? D.t.vPg1JT
            : D.t.rPqqts;
    let u = nC[r],
        c = {
            onClick: (0, nf.A)({
                location: u,
                applicationId: l.extra.application_id,
                source: u,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: D.intl.formatToPlainString(D.t["9sZWVp"], { gameName: o }),
        };
    return {
        ...a,
        thumbnailUrl: s,
        title: o,
        titleClickable: c,
        thumbnailClickable: c,
        userDescription: n,
        providerIconProps: t,
    };
}
var nI = n(205327),
    nA = n(261020),
    nE = n(272984),
    ny = n(970928);
let nS = s.createContext(void 0);
function nT(e) {
    let { entry: t, ...n } = e,
        l = {
            baseEntryData: (function (e) {
                let { entry: t, channel: n } = e,
                    l = s.useRef([]);
                return (
                    s.useEffect(() => {
                        (0, nd.v)(l.current, t.participants) ||
                            ((l.current = t.participants),
                            t.participants
                                .filter((e) => null == ee.default.getUser(e))
                                .forEach((e) => {
                                    null == n.guild_id ? (0, nm.wz)(e) : nh.A.requestMember(n.guild_id, e);
                                }));
                    }, [t, n.guild_id]),
                    {}
                );
            })({ entry: t, channel: n.channel }),
            ...n,
        };
    switch (t.content_type) {
        case nl.ContentInventoryEntryType.TOP_ARTIST:
            return (0, i.jsx)(nO, { entry: t, ...l });
        case nl.ContentInventoryEntryType.TOP_GAME:
            return (0, i.jsx)(nR, { entry: t, ...l });
        case nl.ContentInventoryEntryType.PLAYED_GAME:
            return (0, i.jsx)(n_, { entry: t, ...l });
        case nl.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, i.jsx)(nP, { entry: t, ...l });
        case nl.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, i.jsx)(nk, { entry: t, ...l });
        case nl.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(nb, { entry: t, ...l });
        default:
            throw Error(`Unsupported content type: ${t.content_type}`);
    }
}
function nL(e) {
    let { errorFallback: t, ...n } = e;
    return (0, i.jsx)(nr, { fallback: t, children: (0, i.jsx)(nT, { ...n }) });
}
function nb(e) {
    let { entry: t, children: n, ...l } = e,
        r = (function (e) {
            let { entry: t } = e,
                n = (0, ns.h)(t.extra.application_id),
                l = n?.getIconURL(nc.iu.LARGE),
                r = t.extra.activity_name,
                a = (0, nu.Hd)(t) ? D.t.vPg1JT : D.t.rPqqts,
                i = {
                    onClick: function () {
                        na.R(ni.s4.TEXT, no.oU.NORMAL, { applicationId: t.extra.application_id });
                    },
                    ariaDescription: D.intl.formatToPlainString(D.t.NTHttN, { title: r }),
                };
            return { thumbnailUrl: l, title: r, titleClickable: i, thumbnailClickable: i, userDescription: a };
        })({ entry: t, ...l });
    return (0, i.jsx)(nS.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
function nO(e) {
    let { entry: t, children: n, ...l } = e,
        r = (function (e) {
            let t,
                { entry: n, baseEntryData: l } = e,
                { provider: r, image_url: a } = n.extra.media,
                i = n.extra.artist.name,
                s = {
                    onClick: () => (0, nA.n)(nE.M0.ALBUM, n.extra.media.external_parent_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: n.extra.media.parent_title }),
                },
                o = {
                    onClick: () => (0, nA.n)(nE.M0.ARTIST, n.extra.artist.external_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: i }),
                };
            return (
                r === nI.X.SPOTIFY && (t = { type: ng.a4.SPOTIFY }),
                {
                    ...l,
                    title: i,
                    thumbnailUrl: a,
                    titleClickable: o,
                    subtitleClickable: s,
                    thumbnailClickable: s,
                    userDescription: D.t.CcVI1T,
                    providerIconProps: t,
                }
            );
        })({ entry: t, ...l });
    return (0, i.jsx)(nS.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
function nR(e) {
    let { entry: t, children: n, ...l } = e,
        r = nN({ entry: t, ...l });
    return (0, i.jsx)(nS.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
function n_(e) {
    let { entry: t, children: n, ...l } = e,
        r = nN({ entry: t, ...l });
    return (0, i.jsx)(nS.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
function nP(e) {
    let { entry: t, children: n, ...l } = e,
        r = (function (e) {
            let t,
                { entry: n, baseEntryData: l } = e,
                r = (0, ns.h)(n.extra.application_id),
                a = r?.getIconURL(128),
                i = (0, ny.uD)(n.extra.application_id, n.extra.media_assets_large_image, [nc.iu.LARGE, nc.iu.LARGE]),
                o = n.extra.media_title,
                u = n.extra.media_subtitle,
                c = (0, nu.Hd)(n) ? D.t["LH+Z3y"] : D.t.YuKgml,
                d = { type: ng.a4.CRUNCHYROLL },
                m = s.useMemo(() => {
                    if (null == n.extra.url) return;
                    let e = tz.A.safeParseWithQuery(n.extra.url);
                    if (null != e && null != e.protocol && null != e.hostname) return e;
                }, [n.extra.url]);
            return (
                null != m &&
                    (t = {
                        href: tz.A.format(m),
                        ariaDescription: D.intl.formatToPlainString(D.t.aFFQ3g, { title: o }),
                    }),
                {
                    ...l,
                    thumbnailUrl: i ?? a,
                    title: o,
                    titleClickable: t,
                    thumbnailClickable: t,
                    subtitle: u,
                    userDescription: c,
                    providerIconProps: d,
                }
            );
        })({ entry: t, ...l });
    return (0, i.jsx)(nS.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
function nk(e) {
    let { entry: t, children: n, ...l } = e,
        r = (function (e) {
            let t,
                { entry: n, baseEntryData: l } = e,
                r = n.extra.entries[0].media,
                a = r.artists[0],
                { title: i, provider: s, image_url: o } = r,
                u = a.name,
                c = {
                    onClick: () => (0, nA.n)(nE.M0.TRACK, r.external_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: i }),
                },
                d = {
                    onClick: () => (0, nA.n)(nE.M0.ARTIST, a.external_id),
                    ariaDescription: D.intl.formatToPlainString(D.t.xTsar2, { itemName: u }),
                };
            return (
                s === nI.X.SPOTIFY && (t = { type: ng.a4.SPOTIFY }),
                {
                    ...l,
                    title: i,
                    subtitle: u,
                    thumbnailUrl: o,
                    titleClickable: c,
                    subtitleClickable: d,
                    thumbnailClickable: c,
                    userDescription: D.t.CcVI1T,
                    providerIconProps: t,
                }
            );
        })({ entry: t, ...l });
    return (0, i.jsx)(nS.Provider, { value: { parsedEntry: r, ...l }, children: n });
}
var nM = n(349288),
    nU = n(531142),
    nD = n(939249),
    nw = n(43990),
    nF = n(696986),
    nz = n(342952),
    nB = n(576757),
    nH = n(291594),
    nG = n(22869),
    nV = n(959),
    nK = n(811597);
function nY(e) {
    let { entry: t, channel: n, className: l } = e,
        r = s.useRef(null),
        a = s.useRef(null),
        {
            displayParticipants: o,
            participant1: c,
            participant2: d,
            numOtherParticipants: m,
            orderedParticipants: h,
        } = (0, nB.A)(t),
        p = [c, d];
    return (0, i.jsxs)("div", {
        className: u()(nK.kL, l),
        children: [
            o.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(nV.A, {
                              targetElementRef: r,
                              participants: h,
                              channel: n,
                              children: (e) =>
                                  (0, i.jsx)(nD.D, {
                                      innerRef: r,
                                      className: nK.vk,
                                      ...e,
                                      children: (0, i.jsx)(nz.A, {
                                          maxUsers: 3,
                                          users: o,
                                          size: eW._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, i.jsx)(nF.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, i.jsx)(th.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: u()(nK.IY, nK.Io),
                scaleFontToUserSetting: !0,
                children: D.intl.format(D.t.rH95Gu, {
                    user0: el.Ay.getName(n.guild_id, n.id, p[0]),
                    user1: el.Ay.getName(n.guild_id, n.id, p[1]),
                    countOthers: m,
                    name0Hook: (e, t) => (0, i.jsx)(nG.A, { text: e, user: p[0], channel: n }, t),
                    name1Hook: (e, t) => (0, i.jsx)(nG.A, { text: e, user: p[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, i.jsx)(
                            nV.A,
                            {
                                targetElementRef: a,
                                participants: h,
                                channel: n,
                                children: (t) =>
                                    (0, i.jsx)(nH.A, {
                                        ...t,
                                        tag: "span",
                                        children: (0, i.jsx)(eA.E, {
                                            ref: a,
                                            variant: "text-sm/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            scaleFontToUserSetting: !0,
                                            children: e,
                                        }),
                                    }),
                            },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var nW = n(263577),
    nX = n(347306),
    nq = n(790381),
    n$ = n(266080),
    nJ = n(121090),
    nZ = n(18282);
let nQ = { [ng.a4.SPOTIFY]: nJ.A, [ng.a4.CRUNCHYROLL]: nX.k, [ng.a4.XBOX]: n$.A, [ng.a4.PLAYSTATION]: nq.A },
    n0 = {
        [ng.a4.SPOTIFY]: () => D.intl.string(D.t["0ZB/XE"]),
        [ng.a4.CRUNCHYROLL]: () => D.intl.string(D.t.jdJYXw),
        [ng.a4.XBOX]: () => D.intl.string(D.t.Nfvo72),
        [ng.a4.PLAYSTATION]: () => D.intl.string(D.t.fFl4jo),
    };
function n1(e) {
    let { type: t, "aria-label": n, ...l } = e,
        r = nQ[t];
    if (null == r) return null;
    let a = n ?? n0[t]?.();
    return (0, i.jsx)(nZ.A, { Icon: r, ...l, "aria-label": a });
}
var n5 = n(140651),
    n4 = n(506326),
    n8 = n(915089),
    n2 = n(818348),
    n3 = n(672743),
    n6 = n(392419);
function n9(e) {
    let { className: t, clickableClassName: n, clickable: l, children: r } = e,
        a = (0, n8.GV)();
    if (null != l && "href" in l) {
        let { ariaDescription: e, href: s } = l;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.A, { id: a, children: e }),
                (0, i.jsx)(nM.Anchor, { className: u()(t, n), href: s, "aria-describedby": a, children: r }),
            ],
        });
    }
    let { onClick: s, ariaDescription: o } = l ?? {};
    return (0, i.jsxs)(nU.g.Provider, {
        value: null == s,
        children: [
            null != s && null != o && (0, i.jsx)(c.A, { id: a, children: o }),
            (0, i.jsx)(nD.D, {
                onClick: s,
                "aria-describedby": null == s ? void 0 : a,
                className: u()(t, null != s && n),
                children: r,
            }),
        ],
    });
}
function n7(e) {
    let { clickable: t, ...n } = e;
    return (0, i.jsx)(n9, { ...n, clickable: { ...t, ariaDescription: "" }, clickableClassName: n6.v });
}
function le(e) {
    let {
            entry: t,
            channel: n,
            title: l,
            subtitle: r,
            thumbnailUrl: a,
            titleClickable: s,
            subtitleClickable: o,
            thumbnailClickable: c,
            providerIconProps: d,
            style: m = {},
        } = e,
        h = (0, n8.GV)(),
        { primaryColor: p, secondaryColor: x } = (0, n5.A)(a);
    return (
        null != a && (m.background = `linear-gradient(45deg, ${p}, ${x})`),
        (0, i.jsx)(nw.N, {
            theme: n2.NJ.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, i.jsxs)("figure", {
                    "aria-roledescription": D.intl.string(D.t.zFfUhF),
                    "aria-labelledby": h,
                    className: u()(n3.kL, e),
                    style: m,
                    children: [
                        (0, i.jsx)(n9, {
                            className: n3.iT,
                            clickableClassName: n3.vk,
                            clickable: c,
                            children: (0, i.jsx)(nW.V, { src: a, constrain: "width", size: 64, "aria-hidden": !0 }),
                        }),
                        (0, i.jsxs)("div", {
                            className: n3.op,
                            children: [
                                (0, i.jsx)(nY, { channel: n, entry: t, className: n3.VV }),
                                (0, i.jsx)(nF.h, { size: 2 }),
                                (0, i.jsx)(n7, {
                                    clickable: s,
                                    className: n3.sd,
                                    children: (0, i.jsx)(th.D, {
                                        id: h,
                                        variant: "heading-md/medium",
                                        lineClamp: 1,
                                        className: u()(n3.ek, n3.IY),
                                        scaleFontToUserSetting: !0,
                                        children: l,
                                    }),
                                }),
                                null != r
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(nF.h, { size: 2 }),
                                              (0, i.jsx)(n7, {
                                                  clickable: o,
                                                  className: n3.sd,
                                                  children: (0, i.jsx)(eA.E, {
                                                      variant: "text-sm/normal",
                                                      className: u()(n3.c1, n3.IY),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: r,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)(n4.iT, { className: n3.jp, entry: t, location: n4.N5.EMBED }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: n3.Y, children: null != d ? (0, i.jsx)(n1, { ...d }) : null }),
                    ],
                }),
        })
    );
}
function lt(e) {
    let t,
        { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: r } =
            ((t = s.useContext(nS)),
            ei()(null != t, "useEntryDataContext must be used within a EntryDataContextProvider"),
            t);
    return (0, i.jsx)(le, { ...r, entry: n, channel: l });
}
function ln(e) {
    let t = (0, h.jc)();
    ei()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, E.bG)([W.A], () => W.A.getChannel(n));
    return (
        ei()(null != l, "channel must be defined"),
        (0, i.jsx)(nL, {
            location: nj.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, i.jsx)(lt, { ...e, channel: l }),
        })
    );
}
var ll = n(749131);
function lr(e) {
    let { components: t, renderComponents: n } = e,
        { message: l } = (0, h.jc)();
    return null == t || 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: ll.kL,
              children: [
                  (0, i.jsx)("div", { className: ll.Y_, children: n(t) }),
                  null != l ? (0, i.jsx)(eo.Ay, { className: ll.z3, message: l, component: e }) : null,
              ],
          });
}
var la = n(404228);
function li(e) {
    let { components: t, accentColor: n, spoiler: l, renderComponents: r } = e,
        [a, o] = s.useState(l),
        [c, d] = s.useState(l);
    function m(e) {
        return (0, i.jsx)(p.O7.AutoMeasuredNestedContainer, {
            children: (l) =>
                (0, i.jsx)("div", {
                    ref: l,
                    className: u()(la.kL, { [la.dK]: e, [la._7]: null != n }),
                    style: { "--__accent-color": n },
                    children: (0, i.jsx)(t4, { size: "reduced", children: r(t) }),
                }),
        });
    }
    return (l !== a && (o(l), d(l)), null == t || 0 === t.length)
        ? null
        : l
          ? (0, i.jsx)(tS.Ay, {
                type: tS.Ay.Types.ATTACHMENT,
                reason: tE.Oc.SPOILER,
                obscured: c,
                onToggleObscurity: () => d((e) => !e),
                children: (e) => m(e),
            })
          : m(!1);
}
var ls = n(244367),
    lo = n(704475);
function lu(e) {
    let { label: t, description: n, component: l, renderComponent: r } = e,
        a = (0, h.bO)(l);
    return l.type === d.I5.CHECKBOX
        ? r(l, "label-child")
        : (0, i.jsxs)(tr.e, {
              title: t,
              required: l.required,
              error: a,
              children: [
                  null != n && (0, i.jsx)(ls.a, { type: ls.t.DESCRIPTION, className: lo.h, children: n }),
                  r(l, "label-child"),
              ],
          });
}
var lc = n(746544);
function ld(e) {
    let { components: t, accessory: n, renderComponents: l } = e,
        { message: r } = (0, h.jc)(),
        [a, s] = (0, p.zn)(),
        o = (0, p.Hq)(s),
        c = n.type === d.I5.BUTTON;
    return (0, i.jsxs)("div", {
        className: lc.uW,
        ref: a,
        children: [
            (0, i.jsxs)("div", {
                className: lc.Y_,
                children: [
                    (0, i.jsx)("div", { className: u()(lc.zt, { [lc.uf]: c }), children: l(t) }),
                    (0, i.jsx)("div", {
                        className: u()(lc.LP, { [lc.HQ]: o }),
                        children: (function (e) {
                            switch (e.type) {
                                case d.I5.BUTTON:
                                    return (0, i.jsx)(V, { ...e });
                                case d.I5.THUMBNAIL:
                                    return (0, i.jsx)(ne, { ...e });
                            }
                        })(n),
                    }),
                ],
            }),
            null != r ? (0, i.jsx)(eo.Ay, { message: r, component: e }) : null,
        ],
    });
}
var lm = n(532294),
    lh = n(143517);
function lp(e) {
    return e.map((e, t) =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case d.I5.ACTION_ROW:
                            return (0, i.jsx)(lr, { ...t, renderComponents: lp }, n);
                        case d.I5.BUTTON:
                            return (0, i.jsx)(V, { ...t }, n);
                        case d.I5.STRING_SELECT:
                            return (0, i.jsx)(tt, { ...t }, n);
                        case d.I5.CHANNEL_SELECT:
                            return (0, i.jsx)(ef, { ...t }, n);
                        case d.I5.USER_SELECT:
                        case d.I5.ROLE_SELECT:
                        case d.I5.MENTIONABLE_SELECT:
                            return (0, i.jsx)(e5, { ...t }, n);
                        case d.I5.TEXT_INPUT:
                            return (0, i.jsx)(ts, { ...t }, n);
                        case d.I5.SECTION:
                            return (0, i.jsx)(ld, { ...t, renderComponents: lp }, n);
                        case d.I5.TEXT_DISPLAY:
                            return (0, i.jsx)(t6, { ...t }, n);
                        case d.I5.MEDIA_GALLERY:
                            return (0, i.jsx)(tX, { ...t }, n);
                        case d.I5.THUMBNAIL:
                            return (0, i.jsx)(ne, { ...t }, n);
                        case d.I5.FILE:
                            return (0, i.jsx)(tL, { ...t }, n);
                        case d.I5.SEPARATOR:
                            return (0, i.jsx)(t$, { ...t }, n);
                        case d.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, i.jsx)(ln, { ...t }, n);
                        case d.I5.CONTAINER:
                            return (0, i.jsx)(li, { ...t, renderComponents: lp }, n);
                        case d.I5.LABEL:
                            return (0, i.jsx)(lu, { ...t, renderComponent: e }, n);
                        case d.I5.FILE_UPLOAD:
                            return (0, i.jsx)(eK, { ...t }, n);
                        case d.I5.CHECKPOINT_CARD:
                            if (t.checkpointData.version === lm.w.V2025) return (0, i.jsx)(tI, { ...t }, n);
                            return (0, i.jsx)(nn, {}, n);
                        case d.I5.RADIO_GROUP:
                            return (0, i.jsx)(e3, { ...t }, n);
                        case d.I5.CHECKBOX_GROUP:
                            return (0, i.jsx)(eC, { ...t }, n);
                        case d.I5.CHECKBOX:
                            return (0, i.jsx)(ej, { ...t }, n);
                        default:
                            return (0, i.jsx)(nn, {}, n);
                    }
                })(e, t.toString()),
                (0, i.jsx)(c.A, { children: "," }),
            ],
        }),
    );
}
function lx(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: l } = t,
        [r, a] = (0, p.zn)();
    return 0 === l.length
        ? null
        : (0, i.jsx)(h.f5, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, i.jsx)(p.O7.Root, {
                  containerInnerWidth: a,
                  children: (0, i.jsx)("div", {
                      style: { width: "100%" },
                      ref: r,
                      children: (0, i.jsx)(p.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, i.jsx)("div", {
                                  ref: e,
                                  className: u()([lh.k, { [lh.z]: (0, m._c)(t) }]),
                                  children: lp(l),
                              }),
                      }),
                  }),
              }),
          });
}
