n.d(t, { u: () => nb });
var i = n(477900),
    l = n(633075),
    a = n(646976),
    s = n(289173),
    r = n(210598),
    d = n(58216),
    o = n(582128),
    c = n(869484),
    u = n(17928),
    m = n(315629),
    g = n(834730),
    x = n(465794),
    f = n(450232),
    h = n(287809),
    p = n(24482),
    j = n(735321),
    I = n(644346),
    E = n(939249),
    v = n(105292),
    C = n(954165);
function A(e) {
    let { onClick: t, expanded: n } = e;
    return (0, i.jsx)(E.D, {
        onClick: t,
        className: C.x,
        "aria-expanded": n,
        children: (0, i.jsx)(g.E, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? v.intl.string(v.t["6MwJo/"]) : v.intl.string(v.t.lBeKY2),
        }),
    });
}
var b = n(503698),
    N = n.n(b),
    w = n(43990),
    T = n(241326),
    y = n(33969),
    k = n(866665),
    R = n(245604),
    S = n(601089);
function L(e) {
    let { label: t, onClick: n, className: l } = e;
    return (0, i.jsx)(k.m, {
        text: t,
        children: (0, i.jsxs)(E.D, {
            className: N()(S.kL, l),
            "aria-label": t,
            onClick: n,
            children: [
                (0, i.jsx)("div", { className: S.n8 }),
                (0, i.jsx)("div", { className: S.zc, children: (0, i.jsx)(R.U, { size: "sm" }) }),
                (0, i.jsx)("div", { className: S.n8 }),
            ],
        }),
    });
}
var _ = n(34011),
    P = n(448766),
    D = n(770178);
let O = o.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function G(e) {
    let { children: t } = e,
        [n, l] = o.useState(!1),
        [a, s] = o.useState(!1),
        [r] = o.useState(() => new Set()),
        d = o.useCallback(
            (e, t) => {
                (t ? r.add(e) : r.delete(e), s(r.size > 0));
            },
            [r],
        ),
        c = o.useMemo(
            () => ({ isExpanded: n, setIsExpanded: l, isAnyFieldClipped: a, setAnyFieldClipped: d }),
            [n, a, d],
        );
    return (0, i.jsx)(O.Provider, { value: c, children: t });
}
function M() {
    return o.useContext(O);
}
var F = n(404760),
    U = n(892572);
function H(e) {
    let { className: t, variant: n, color: l, value: a, maxLines: s, interactive: r = !0, disableMarkdown: d = !1 } = e,
        c = r ? P.d : P.j,
        { textRef: u, lineClamp: m } = (function (e, t) {
            let { isExpanded: n, setAnyFieldClipped: i } = o.useContext(O),
                l = o.useId(),
                a = o.useRef(null),
                s = o.useCallback(() => {
                    let e = a.current;
                    null != e && i(l, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [l, i]);
            return (
                (0, D.g)(a, s, [n, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                o.useEffect(() => () => i(l, !1), [l, i]),
                { textRef: a, lineClamp: n ? void 0 : e }
            );
        })(s, a);
    return (0, i.jsx)(g.E, {
        ref: u,
        className: N()(U.YD, { [U.Lq]: s > 1 }, t),
        variant: n,
        color: l,
        lineClamp: m,
        children: d ? a : c(a),
    });
}
function V(e) {
    let {
            value: t,
            placeholder: n,
            variant: l,
            color: a,
            onCommit: s,
            maxLength: r,
            maxLines: d,
            growWidth: c,
            disableMarkdown: u,
        } = e,
        m = o.useCallback((e) => s(e.trim()), [s]),
        { isExpanded: g } = M(),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(H, { interactive: !1, variant: l, color: a, value: t, maxLines: d, disableMarkdown: u });
    return (0, i.jsx)("div", {
        className: N()(F.kL, U.ZZ, { [F.oE]: 1 === d, [F.CP]: c }),
        children: (0, i.jsx)(_.w, {
            value: t,
            onCommit: m,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: 1 !== d,
            paddingBlock: "md",
            paddingInline: 1 === d ? "sm" : "md",
            preview: x,
            placeholder: n,
            label: n,
            maxLength: r,
            maxRows: 1 === d || g ? void 0 : d,
            textVariant: l,
            scrollIntoViewOnFocus: !0,
        }),
    });
}
function W(e) {
    return e.canEdit
        ? (0, i.jsx)(V, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(H, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var X = n(326009),
    K = n(265872),
    Y = n(22231),
    B = n(750943),
    z = n(458499);
function q(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: a, onChangeImage: s } = e;
    return (0, i.jsx)(K.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(z.A, { lastEdit: t, cropAndUpload: a, onChangeImage: s, onClose: n });
        },
        children: (e) =>
            (0, i.jsx)(y.Y, {
                ...e,
                ref: n,
                icon: Y.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: v.intl.string(v.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function J(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: a, onChangeImage: s } = e;
    return null == t
        ? (0, i.jsx)(y.Y, {
              ref: n,
              icon: B.X,
              variant: "overlay-secondary",
              tooltipText: v.intl.string(v.t.dh0LD5),
              disabled: l,
              onClick: s,
          })
        : (0, i.jsx)(q, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: a, onChangeImage: s });
}
var Q = n(858899),
    $ = n(192308),
    Z = n(765548),
    ee = n(860840),
    et = n(229531),
    en = n(515718),
    ei = n(741394),
    el = n(38405),
    ea = n(958805);
function es(e) {
    let { uploadType: t, returnRef: l, getCropAspectRatio: a, onUploadSuccess: s } = e,
        r = o.useRef(0),
        [d, c] = o.useState(null),
        [u, m] = o.useState(null),
        g = (0, Z.A)(s),
        x = o.useCallback(() => {
            ((r.current = r.current + 1), c(null), m(null));
        }, []),
        f = o.useCallback(
            async (e, t, n, i) => {
                r.current = r.current + 1;
                let l = r.current;
                c(e);
                try {
                    let [a, s] = await Promise.all([
                        ea.A.uploadWidgetAsset(t),
                        ee.default.fromBlob(n).catch(() => void 0),
                    ]);
                    if (r.current !== l) return;
                    (c(null),
                        m({ filename: a, unprocessedFile: n, transform: i }),
                        g({ filename: a, localDataUri: e, originalHash: s }));
                } catch (e) {
                    if (r.current !== l) return;
                    (c(null),
                        (0, Q.P0)({ text: v.intl.string(v.t.F4Neqh), variant: "critical" }),
                        el.A.captureException(e));
                }
            },
            [g],
        ),
        h = o.useCallback(
            (e) => {
                var t, n;
                let i,
                    l,
                    { imageUri: a, file: s, transform: r } = e,
                    d = (0, en.aU)(a);
                d.size > 0xa00000
                    ? (0, Q.P0)({ text: v.intl.string(v.t.YbdEFK), variant: "critical" })
                    : f(
                          a,
                          new File(
                              [d],
                              ((t = s.name),
                              (n = d.type),
                              (i = (0, et.B)(n) ?? "png"),
                              (l = (0, ei.kh)(t)),
                              `${"" !== l ? l : "image"}.${i}`),
                              { type: d.type },
                          ),
                          s,
                          r,
                      );
            },
            [f],
        );
    return {
        cropAndUpload: o.useCallback(
            (e, s, r) => {
                let d = a?.();
                (0, $.openModalLazy)(
                    async () => {
                        let { default: a } = await Promise.all([
                            n.e("237403"),
                            n.e("655327"),
                            n.e("67702"),
                            n.e("1214"),
                            n.e("863232"),
                            n.e("858164"),
                            n.e("427032"),
                            n.e("444376"),
                            n.e("318546"),
                            n.e("571470"),
                            n.e("50342"),
                            n.e("507406"),
                            n.e("463726"),
                            n.e("93513"),
                            n.e("779149"),
                            n.e("46501"),
                            n.e("90017"),
                            n.e("489908"),
                            n.e("574571"),
                            n.e("750348"),
                        ]).then(n.bind(n, 142630));
                        return (n) =>
                            (0, i.jsx)(a, {
                                ...n,
                                file: s,
                                imageUri: e,
                                uploadType: t,
                                returnRef: l,
                                initialTransform: r,
                                cropAspectRatio: d,
                                onCrop: h,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [h, t, l, a],
        ),
        previewUri: d,
        cancelUpload: x,
        getLastEdit: o.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var er = n(652215),
    ed = n(339984),
    eo = n(148548);
function ec() {
    return (0, i.jsx)(L, {
        label: v.intl.string(v.t.gQmDk4),
        onClick: function () {
            (0, j.AD)((e) => new r.Tu({ ...e, sections: [(0, r.K)(), ...e.sections] }));
        },
        className: eo.GU,
    });
}
function eu(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a } = e,
        s = o.useRef(null),
        d = o.useRef(null),
        u = o.useRef(null);
    function m(e) {
        (0, j.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== c.K.COVER) return t;
            let i = [...t.sections];
            return ((i[l] = e(n)), new r.Tu({ ...t, sections: i }));
        });
    }
    function g(e) {
        m((t) => ({ ...t, title: e }));
    }
    function x(e) {
        m((t) => ({ ...t, subtitle: e }));
    }
    let f = o.useCallback(() => {
            let e = u.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: h,
            previewUri: p,
            cancelUpload: I,
            getLastEdit: E,
        } = es({
            uploadType: ed.HL.PERSONAL_WIDGET_COVER,
            returnRef: d,
            getCropAspectRatio: f,
            onUploadSuccess: (e) => m((t) => ({ ...t, image: e })),
        });
    function C() {
        (I(), m((e) => ({ ...e, image: void 0 })));
    }
    function A() {
        s.current?.activateUploadDialogue();
    }
    function b() {
        (0, j.AD)((e) => new r.Tu({ ...e, sections: e.sections.filter((e, t) => t !== l) }));
    }
    let k = null != p,
        R = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        S = null != n.image || k,
        L = S || a,
        _ = E(n.image);
    return (0, i.jsx)(w.N, {
        theme: S ? er.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: u,
                className: N()(eo.kL, { [eo.Vp]: L }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: eo.El,
                              children: [
                                  (0, i.jsx)(X.A, {
                                      cropAndUpload: h,
                                      imageInputRef: s,
                                      className: eo.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: p,
                                      editVariant: "tooltip",
                                  }),
                                  S && R ? (0, i.jsx)("div", { className: eo.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(y.A, {
                              className: eo.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(J, {
                                            lastEdit: _,
                                            buttonRef: d,
                                            disabled: k,
                                            cropAndUpload: h,
                                            onChangeImage: A,
                                        })
                                      : null,
                                  (0, i.jsx)(y.Y, {
                                      icon: T.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: S ? v.intl.string(v.t.RyK5Ww) : v.intl.string(v.t.g2jVww),
                                      onClick: S ? C : b,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: N()(eo.hQ, e, { [eo.Vp]: L }),
                        children: [
                            (0, i.jsx)(W, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                value: n.title,
                                placeholder: v.intl.string(v.t.KqCDvK),
                                onCommit: g,
                                maxLength: 50,
                                maxLines: 2,
                            }),
                            (0, i.jsx)(W, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: n.subtitle,
                                placeholder: v.intl.string(v.t.k8zZFd),
                                onCommit: x,
                                maxLength: 150,
                                maxLines: 3,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
n(321073);
var em = n(661531),
    eg = n(603090);
function ex(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(E.D, {
        onClick: t,
        className: N()(eg.cR, { [eg.mr]: n }),
        children: [
            (0, i.jsx)(B.X, { size: "xs", color: em.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(g.E, { variant: "text-sm/medium", color: "text-muted", children: v.intl.string(v.t["9AY+/x"]) }),
        ],
    });
}
function ef(e) {
    let { index: t, userId: n, field: l, canEdit: a, onFieldChange: s, onFieldRemove: r } = e,
        {
            cropAndUpload: d,
            previewUri: o,
            cancelUpload: c,
            getLastEdit: u,
        } = es({
            uploadType: ed.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => s(l.key, (t) => ({ ...t, image: e })),
        }),
        m = a ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: eg.ez,
        children: [
            m
                ? (0, i.jsxs)("div", {
                      className: eg.tF,
                      children: [
                          (0, i.jsx)(X.A, {
                              className: N()(eg.k9, a ? eg.y2 : void 0),
                              canEdit: a,
                              userId: n,
                              image: l.image,
                              previewUri: o,
                              cropAndUpload: d,
                              editVariant: "overlay",
                              lastEdit: u(l.image),
                          }),
                          a
                              ? (0, i.jsx)(y.A, {
                                    className: eg.ij,
                                    children: (0, i.jsx)(y.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: v.intl.string(v.t.RyK5Ww),
                                        onClick: function () {
                                            (c(),
                                                s(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                ));
                                        },
                                        icon: T.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eg.oT,
                children: [
                    (0, i.jsx)(W, {
                        canEdit: a,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: v.intl.formatToPlainString(v.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            s(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, i.jsx)(W, {
                        canEdit: a,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: l.description,
                        placeholder: v.intl.formatToPlainString(v.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            s(l.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 90,
                        maxLines: 4,
                    }),
                ],
            }),
            a
                ? (0, i.jsxs)(y.A, {
                      className: eg.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(y.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: v.intl.string(v.t.i3vRzP),
                                    onClick: function () {
                                        s(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: B.X,
                                }),
                          (0, i.jsx)(y.Y, {
                              variant: "overlay-secondary",
                              tooltipText: v.intl.string(v.t.g2jVww),
                              onClick: function () {
                                  r(l.key);
                              },
                              icon: T.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eh(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s } = e;
    function d(e) {
        (0, j.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== c.K.FIELDS) return t;
            let i = [...t.sections];
            return ((i[l] = { ...n, fields: e(n.fields) }), new r.Tu({ ...t, sections: i }));
        });
    }
    function o(e, t) {
        d((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let a = [...n];
            return ((a[i] = t(l)), a);
        });
    }
    function u(e) {
        d((t) => t.filter((t) => t.key !== e));
    }
    function m() {
        d((e) => [...e, (0, r.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!a) return null;
        if (!s)
            return (0, i.jsx)("div", { className: eg.kL, children: (0, i.jsx)(ex, { alwaysVisible: !0, onClick: m }) });
    }
    let g = n.fields.map((e, n) =>
            (0, i.jsx)(ef, { index: n, userId: t, field: e, canEdit: a, onFieldChange: o, onFieldRemove: u }, e.key),
        ),
        x = n.fields.length % 2 == 1;
    a && x && n.fields.length < 4 && g.push((0, i.jsx)(ex, { onClick: m }, "add-entry"));
    let f = a && !x && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            g.length > 0 ? (0, i.jsx)("div", { className: eg.kL, children: g }) : null,
            f
                ? (0, i.jsx)(L, {
                      label: v.intl.string(v.t.t4vU5I),
                      onClick: function () {
                          d((e) => [...e, (0, r.yL)(), (0, r.yL)()]);
                      },
                  })
                : null,
        ],
    });
}
var ep = n(202541),
    ej = n(877068);
let eI = { section: er.JJy.PERSONAL_WIDGET };
function eE(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: ej.wx,
        children: [
            (0, i.jsx)(f.A, { size: "xs", className: ej.nr }),
            (0, i.jsx)(W, {
                canEdit: n,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: v.intl.string(v.t.fjSaAm),
                onCommit: function (e) {
                    (0, j.AD)((t) => new r.Tu({ ...t, header: e }));
                },
                maxLength: 50,
                maxLines: 1,
                disableMarkdown: !0,
            }),
        ],
    });
}
function ev(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s } = e;
    switch (n.type) {
        case c.K.COVER:
            return (0, i.jsx)(eu, { userId: t, section: n, sectionIndex: l, canEdit: a });
        case c.K.FIELDS:
            return (0, i.jsx)(eh, { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s });
    }
}
function eC() {
    return (0, u.bG)([h.default], () => p.Ay.isPremium(h.default.getCurrentUser(), ep.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: ej.hc,
              children: [
                  (0, i.jsx)(m.h, { color: "nitro-pink", className: ej.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: ej.LK,
                      children: [
                          (0, i.jsx)(g.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: v.intl.string(v.t.WOPVdz),
                          }),
                          (0, i.jsx)(g.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: v.intl.string(v.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)(x.A, {
                      size: "sm",
                      subscriptionTier: ep.pe.TIER_2,
                      defaultTextOverride: v.intl.string(v.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eI,
                  }),
              ],
          });
}
function eA() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = M();
    return e || t ? (0, i.jsx)(A, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eb(e) {
    let { widget: t, user: n, allowEditing: l, disableInteraction: a, index: s, trailingContent: r } = e,
        d = l && !0 !== a,
        u = o.useMemo(() => t.sections.some((e) => e.type === c.K.COVER), [t.sections]);
    return (0, i.jsx)(I.A, {
        userId: n.id,
        widget: t,
        allowEditing: l,
        disableInteraction: a,
        index: s,
        trailingContent: r,
        className: ej.Nr,
        headerClassName: ej.JE,
        children: (0, i.jsxs)("div", {
            className: ej.kL,
            children: [
                (0, i.jsx)(eE, { widget: t, canEdit: d }),
                d && !u ? (0, i.jsx)(ec, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(ev, { userId: n.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: u }, t),
                ),
                (0, i.jsx)(eA, {}),
                d ? (0, i.jsx)(eC, {}) : null,
            ],
        }),
    });
}
function eN(e) {
    return (0, i.jsx)(G, { children: (0, i.jsx)(eb, { ...e }) });
}
var ew = n(172218),
    eT = n(540185),
    ey = n(408278),
    ek = n(499373),
    eR = n(775602),
    eS = n(793574),
    eL = n(734066),
    e_ = n(682176),
    eP = n(111994),
    eD = n(183555),
    eO = n(280450),
    eG = n(321191);
function eM(e) {
    return (0, u.bG)(
        [eO.default, eG.A],
        () => (eG.A.getUserProfile(eO.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var eF = n(403777),
    eU = n(765178),
    eH = n(789645);
(n(323874), n(14289), n(35956));
var eV = n(762555),
    eW = n(614584),
    eX = n(956050),
    eK = n(132319),
    eY = n(195880),
    eB = n(219222),
    ez = n(518477),
    eq = n(696016);
async function eJ(e, t) {
    let n = URL.createObjectURL(t);
    try {
        let t = await (0, eX.m)(n, 0);
        (0, j.QN)(e, t);
    } catch (e) {
        eq.nx.warn(`Clips gallery widget thumbnail refresh failed; keeping placeholder: ${e}`);
    } finally {
        URL.revokeObjectURL(n);
    }
}
async function eQ(e, t, n, i, l) {
    let { analyticsLocations: a, source: s, trackEditAction: r } = l,
        d = "exporting";
    try {
        let l = await (0, eW.VO)(e, { analyticsLocations: a });
        if (i.signal.aborted || !(0, j.iu)(t)) return;
        ((d = "uploading"), eJ(t, l).catch(() => {}));
        let o = new File([l], "clip.mp4", { type: "video/mp4" }),
            c = await ea.A.uploadWidgetClip(o, { onProgress: (e) => (0, eB.Fj)(t, e), signal: i.signal });
        if (!(0, j.WX)(t, c)) return;
        r({
            action: s === ez.IE.PICKER ? "CLIP_ADDED_FROM_PICKER" : "CLIP_ADDED_FROM_SUGGESTED",
            widgetEdited: eT.x.CLIPS_GALLERY,
            gameId: n,
        });
    } catch (l) {
        if (i.signal.aborted) return;
        ((0, j.mC)(t),
            eq.nx.error("Failed to upload a clip for the clips gallery widget", l, {
                stage: d,
                clipType: e.type,
                crop: e.editMetadata?.crop,
                trackTypes: e.tracks?.map((e) => e.type),
            }),
            (0, Q.P0)({ text: v.intl.string(v.t.iufib1), variant: "critical" }),
            r({
                action: "exporting" === d ? "CLIP_EXPORT_FAILED" : "CLIP_UPLOAD_FAILED",
                widgetEdited: eT.x.CLIPS_GALLERY,
                gameId: n,
            }));
    } finally {
        (0, eB.cG)(t);
    }
}
function e$(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: a } = (0, eD.NJ)(),
        s = v.intl.string(v.t["4z6ldH"]);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(k.m, {
            text: s,
            ariaHidden: !0,
            children: (0, i.jsx)(ey.K, {
                "aria-label": s,
                icon: eH.P,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, eB._V)(t),
                        (0, j.mC)(t),
                        eU.O.announce(v.intl.string(v.t.VCQXvr)),
                        a({ action: "CLIP_UPLOAD_CANCELED", widgetEdited: eT.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
n(600253);
var eZ = n(314531);
n(926675);
var e0 = n(305866),
    e1 = n(123181),
    e2 = n(229087),
    e7 = n(753437),
    e8 = n(382701),
    e3 = n(408519);
function e5(e) {
    let { clipId: t, tags: n, allowEditing: l, disableInteraction: a = !1, onEditingChange: s } = e,
        r = l && !a,
        d = o.useMemo(() => n?.filter((e) => null != (0, e7.W3)(e)) ?? [], [n]),
        c = d.length > 0,
        u = r && d.length < 20,
        { trackUserProfileEditAction: m } = (0, eD.NJ)(),
        x = o.useRef(null),
        f = o.useRef(new Map()),
        h = o.useRef(null),
        p = o.useRef(null),
        I = o.useRef(null),
        [E, C] = o.useState(d.length),
        [A, b] = o.useState(!1),
        [N, w] = o.useState(!1),
        T = A || N;
    (o.useEffect(() => {
        s(T);
    }, [T, s]),
        o.useEffect(() => () => s(!1), [s]));
    let y = o.useCallback(
            (e, n) => {
                ((0, j.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: eT.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        k = o.useCallback(() => {
            (w(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: eT.x.CLIPS_GALLERY }));
        }, [m]),
        R = o.useCallback(() => w(!1), []),
        S = o.useCallback(
            (e) => {
                ((0, j.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: eT.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        L = o.useCallback(() => {
            if (A) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === d.length) return void C(d.length);
            let t = I.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = d.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function a(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (a(d.length, i)) return void C(d.length);
            let s = i - (n + 4),
                r = 0;
            for (; r < d.length && a(r + 1, s);) r++;
            C(r);
        }, [d, A]);
    (0, D.g)(x, L);
    let _ = d.length - E,
        P = _ > 0,
        O = o.useCallback(
            (e) => {
                (1 === _ && b(!1), S(e));
            },
            [S, _],
        );
    return c || u
        ? (0, i.jsxs)("div", {
              className: e3.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: e3.xP,
                      "aria-hidden": !0,
                      children: [
                          d.map((e) =>
                              (0, i.jsx)(
                                  e2.A,
                                  {
                                      tag: e,
                                      variant: "filled",
                                      onRemove: r ? () => {} : void 0,
                                      ref: (t) => {
                                          null != t && f.current.set(e, t);
                                      },
                                  },
                                  e,
                              ),
                          ),
                          (0, i.jsx)("li", {
                              className: e3.lv,
                              ref: h,
                              children: (0, i.jsx)(g.E, {
                                  variant: "text-xxs/medium",
                                  color: "none",
                                  children: `+${d.length}`,
                              }),
                          }),
                      ],
                  }),
                  c &&
                      (0, i.jsx)("ul", {
                          className: e3.nM,
                          "aria-label": v.intl.string(v.t["4Rq3a7"]),
                          children: d
                              .slice(0, E)
                              .map((e) =>
                                  (0, i.jsx)(e2.A, { tag: e, variant: "filled", onRemove: r ? () => S(e) : void 0 }, e),
                              ),
                      }),
                  P &&
                      (0, i.jsx)(e4, {
                          buttonRef: p,
                          numHidden: _,
                          isOpen: A,
                          onOpenChange: b,
                          disableInteraction: a,
                          children: d.map((e) =>
                              (0, i.jsx)(e2.A, { tag: e, className: e3.Hl, onRemove: r ? () => O(e) : void 0 }, e),
                          ),
                      }),
                  u && (0, i.jsx)(e1.A, { tags: d, onTagsChange: y, onOpen: k, onClose: R, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function e4(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: a, disableInteraction: s, children: r } = e,
        d = v.intl.string(v.t.pWHvBI);
    return s
        ? (0, i.jsx)("div", {
              className: `${e3.lv} ${e8.r9}`,
              ref: t,
              children: (0, i.jsx)(g.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(K.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => a(!0),
              onRequestClose: () => a(!1),
              renderPopout: () =>
                  (0, i.jsx)(e0.l, {
                      className: e3.Kt,
                      "aria-label": d,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: e3.ns, children: r }),
                  }),
              children: (e) =>
                  (0, i.jsx)(k.m, {
                      text: d,
                      ariaHidden: !0,
                      children: (0, i.jsx)(E.D, {
                          ...e,
                          innerRef: t,
                          "aria-label": d,
                          "aria-expanded": l,
                          className: e3.lv,
                          children: (0, i.jsx)(g.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var e6 = n(3026),
    e9 = n(936026);
function te(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(g.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: N()(e9.Qw, { [e9.qf]: n }),
        children: (0, i.jsx)(e6.A, { children: t }),
    });
}
function tt(e) {
    let { clipId: t, title: n, onEditingChange: l } = e,
        { trackUserProfileEditAction: a } = (0, eD.NJ)(),
        s = o.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, j.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: eT.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        r = v.intl.string(v.t["2gwc+H"]);
    return (
        o.useEffect(() => (l(!1), () => l(!1)), [l]),
        (0, i.jsx)("div", {
            className: N()(F.kL, F.oE, e9.ZZ),
            children: (0, i.jsx)(_.w, {
                value: n,
                onCommit: s,
                onFocus: () => l(!0),
                onBlur: () => l(!1),
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                paddingBlock: "md",
                paddingInline: "sm",
                scrollIntoViewOnFocus: !0,
                preview: (0, i.jsxs)("span", {
                    className: N()(e9.$, e9.TG),
                    children: [
                        (0, i.jsx)(Y.PencilIcon, { size: "xxs", color: "currentColor", className: e9.wz }),
                        "" === n.trim()
                            ? (0, i.jsx)(te, { value: r, isPlaceholder: !0 })
                            : (0, i.jsx)(te, { value: n }),
                    ],
                }),
                placeholder: r,
                label: v.intl.string(v.t.PDnM11),
                maxLength: 200,
            }),
        })
    );
}
function tn(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: a } = e,
        s = null != n && "" !== n.trim();
    return l || s
        ? l
            ? (0, i.jsx)(tt, { clipId: t, title: n ?? "", onEditingChange: a })
            : (0, i.jsx)("span", { className: e9.$, children: (0, i.jsx)(te, { value: n ?? "" }) })
        : null;
}
var ti = n(663341),
    tl = n(451395),
    ta = n(823016);
function ts(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: a } = (0, eD.NJ)(),
        s = v.intl.string(v.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(k.m, {
            text: s,
            ariaHidden: !0,
            children: (0, i.jsx)(ey.K, {
                "aria-label": s,
                icon: T.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, j.mC)(t),
                        eU.O.announce(v.intl.string(v.t.zyPNb3)),
                        a({ action: "CLIP_REMOVED", widgetEdited: eT.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var tr = n(233002);
function td(e) {
    let { item: t, index: n, isSelected: l, onSelect: a, allowEditing: s } = e,
        { registerDragHandleRef: r, manageFocusOnReorder: d } = (0, ta.r)(),
        { trackUserProfileEditAction: c } = (0, eD.NJ)(),
        u = o.useRef(null),
        m = o.useCallback(
            (e, t) => {
                e !== t && ((0, j.N5)(e, t), c({ action: "CLIP_REORDERED", widgetEdited: eT.x.CLIPS_GALLERY }));
            },
            [c],
        ),
        g = s && ("saved" === t.status || "pending" === t.status),
        x = s && "uploading" === t.status,
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E.D, {
                    className: N()(tr.Vs, { [tr.wH]: l }),
                    "aria-pressed": l,
                    "aria-label": v.intl.formatToPlainString(v.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(eZ.A, { item: t, ringSize: "sm", className: tr.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tl.jV, { buttonRef: r(t.key), className: tr.BU }),
                            (0, i.jsx)(ts, { widgetClipId: t.key, gameId: t.gameId, className: tr.nM }),
                        ],
                    }),
                x && (0, i.jsx)(e$, { widgetClipId: t.key, gameId: t.gameId, className: tr.nM }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: tr.NI,
        children: g
            ? (0, i.jsx)(tl.mG, {
                  index: n,
                  itemId: t.key,
                  listType: eT.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": v.intl.formatToPlainString(v.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: m,
                  onEnd: () => d(t.key),
                  className: tr.oE,
                  dropBeforeClassName: tr.A,
                  dropAfterClassName: tr.Ze,
                  draggingClassName: tr.Id,
                  children: f,
              })
            : f,
    });
}
function to(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: a, allowEditing: s = !1 } = e,
        r = Math.max(0, 4 - t.length),
        d = (0, i.jsxs)("ul", {
            className: tr.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(td, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: s }, e.key),
                ),
                null != a &&
                    Array.from({ length: r }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tr.NI,
                                children: (0, i.jsx)(E.D, {
                                    className: tr.Yn,
                                    "aria-label": v.intl.string(v.t.rI0i0a),
                                    onClick: a,
                                    children: (0, i.jsx)(ti.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return s ? (0, i.jsx)(ta.B, { emptyListFallbackRef: null, children: d }) : d;
}
var tc = n(729475),
    tu = n(358618),
    tm = n(983851);
function tg(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        a = v.intl.string(v.t.dcl9MQ),
        s = v.intl.string(t ? v.t.YqAjXy : v.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(k.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)(ey.K, {
                    "aria-label": a,
                    icon: tc.T,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, i.jsx)(k.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(ey.K, {
                    "aria-label": s,
                    icon: t ? tu._ : tm.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tx = n(798108),
    tf = n(224360),
    th = n(335978);
function tp(e) {
    let { clip: t, onAddClip: n } = e,
        l = v.intl.formatToPlainString(v.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        a = o.useCallback(() => n(t), [t, n]);
    return (0, i.jsx)(k.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsxs)(E.D, {
            className: th.Vs,
            "aria-label": l,
            onClick: a,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: th.xn, loading: "lazy" }),
                (0, i.jsx)(ti.PlusLargeIcon, { size: "sm", color: "currentColor", className: th.Xv }),
            ],
        }),
    });
}
function tj(e) {
    let { clips: t, onAddClip: n, ...l } = e;
    return (0, i.jsx)(tf.A, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: th.p_,
            children: t.map((e) =>
                (0, i.jsx)("li", { className: th.NI, children: (0, i.jsx)(tp, { clip: e, onAddClip: n }) }, e.id),
            ),
        }),
    });
}
var tI = n(769015),
    tE = n(409626),
    tv = n(692969),
    tC = n(202163),
    tA = n(207803),
    tb = n(591179),
    tN = n(485745),
    tw = n(308766);
function tT(e) {
    let { gameId: t, userId: n, className: l } = e,
        { gameRecord: a } = (0, tC.A)(t),
        s = !(0, tb.X)("WidgetClipGameIcon"),
        r = (0, tN.A)(s),
        d = (0, tv.A)({
            location: "WidgetClipGameIcon",
            applicationId: t,
            source: tE.GameProfileSources.UserProfile,
            sourceUserId: n,
        }),
        c = o.useCallback(
            (e) => {
                if (r) {
                    (e.preventDefault(), e.stopPropagation(), (0, tA.VQ)());
                    return;
                }
                d?.(e);
            },
            [r, d],
        ),
        u = a?.name;
    if (null == u) return null;
    let m = (0, i.jsx)(tI.A, { game: a, size: tI.M.XSMALL, allowUnknownGameIcon: !1 });
    return (0, i.jsx)(k.m, {
        text: u,
        ariaHidden: !0,
        children:
            null == d
                ? (0, i.jsx)(k.m, {
                      text: u,
                      ariaHidden: !0,
                      children: (0, i.jsx)("div", { className: l, children: m }),
                  })
                : (0, i.jsx)(E.D, {
                      className: N()(tw.v, l),
                      "aria-label": v.intl.formatToPlainString(v.t["8QLQB+"], { gameName: u }),
                      onClick: c,
                      children: m,
                  }),
    });
}
function ty(e) {
    return null != e.applicationId && 0 !== e.length;
}
var tk = n(558285),
    tR = n(608857),
    tS = n(274372),
    tL = n(409067),
    t_ = n(716112);
function tP(e) {
    let { onClick: t } = e,
        n = v.intl.string(v.t.rI0i0a);
    return (0, i.jsx)(k.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(ey.K, { variant: "secondary", size: "sm", icon: ek.T, "aria-label": n, onClick: t }),
    });
}
function tD() {
    return (0, i.jsx)("div", {
        className: t_.p$,
        children: (0, i.jsx)(g.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: v.intl.format(v.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tO(e) {
    let t,
        l,
        { widget: a, user: s, allowEditing: r, disableInteraction: d, ...c } = e,
        [m, g] = o.useState(!1),
        [x, f] = o.useState(!1),
        [h, p] = o.useState(!0),
        C = (0, u.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
        A = (0, ew.K)(f, 0.5),
        [b, N] = o.useState(!1),
        [w, T] = o.useState(!1),
        y = o.useRef(void 0),
        k = (0, tR.A)(a),
        R =
            ((t = (0, u.yK)([tS.Ay], () => Object.values(tS.Ay.getClips()))),
            (l = (0, u.bG)([tS.Ay], () => tS.Ay.getSettings().showPovClipsInGallery)),
            o.useMemo(() => {
                let e = new Set();
                for (let t of a.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || !ty(t) || (!l && (0, tL.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, l, a.clips])),
        [S, L] = o.useState(null),
        _ = k.find((e) => e.key === S) ?? k[0],
        P = (0, eL.sw)(),
        { trackUserProfileAction: D, trackUserProfileEditAction: O } = (0, eD.NJ)(),
        G = r && !0 !== d,
        M = 0 === k.length,
        F = k.length >= 4,
        U = G && P && !F,
        H = G || k.length > 1,
        [V] = o.useState(() => R.length >= 3),
        [W, X] = o.useState(!1),
        K = eM(a.type),
        Y = U && !K && V && !W && R.length > 0,
        B = o.useCallback(() => {
            (X(!0), O({ action: "DISMISS_SUGGESTED_CLIPS", widgetEdited: eT.x.CLIPS_GALLERY }));
        }, [O]),
        z = o.useCallback(
            (e) => {
                (L(e), e !== _?.key && D({ action: "SELECT_CLIP", widgetType: eT.x.CLIPS_GALLERY }));
            },
            [_?.key, D],
        ),
        q = o.useMemo(() => (!0 === d ? [] : k.filter(tR.K)), [k, d]),
        J = null != _ ? q.findIndex((e) => e.key === _.key) : -1,
        Z = o.useCallback(() => {
            J < 0 ||
                (D({ action: "PRESS_PLAY_CLIP", widgetType: eT.x.CLIPS_GALLERY }),
                (0, tk.A)({ clips: q, startingIndex: J }));
        }, [q, J, D]),
        ee = o.useCallback(() => {
            let e = !h;
            (p(e), D({ action: e ? "MUTE_CLIP_PREVIEW" : "UNMUTE_CLIP_PREVIEW", widgetType: eT.x.CLIPS_GALLERY }));
        }, [h, D]),
        et = o.useCallback(() => {
            if (J < 0) return;
            let e = q[(J + 1) % q.length];
            null != e && L(e.key);
        }, [q, J]),
        en = J >= 0 && !C && x,
        ei = (en || m) && !b && !w,
        el = o.useCallback(() => {
            J < 0 ||
                en ||
                (y.current = window.setTimeout(() => {
                    (g(!0), D({ action: "HOVER_PLAY_CLIP", widgetType: eT.x.CLIPS_GALLERY }));
                }, 150));
        }, [en, J, D]),
        ea = o.useCallback(() => {
            (window.clearTimeout(y.current), g(!1));
        }, []);
    (o.useEffect(() => () => window.clearTimeout(y.current), []),
        o.useEffect(() => {
            (0, e_.v)();
        }, []));
    let es = o.useCallback(
            (e, t) => {
                let n = (function (e, t) {
                    let n;
                    if (null == e.applicationId)
                        return ((0, Q.P0)({ text: v.intl.string(v.t.xcLXWy), variant: "critical" }), null);
                    let i = (0, eY.m)();
                    if (
                        !(0, j.$C)({
                            status: "uploading",
                            id: i,
                            localClipId: e.id,
                            gameId: e.applicationId,
                            title: (0, eK.l)(e),
                            thumbnail: e.thumbnail,
                            clipEventsTimeline:
                                (n = (0, eV.lz)(e)?.filter((e) => null != e.game) ?? []).length > 0
                                    ? n.slice(0, 100)
                                    : void 0,
                        })
                    )
                        return null;
                    let l = new AbortController();
                    return ((0, eB.yf)(i, l), eQ(e, i, e.applicationId, l, t), i);
                })(e, { analyticsLocations: [eS.A.USER_PROFILE_MODAL_V2], source: t, trackEditAction: O });
                null != n && L(n);
            },
            [O],
        ),
        er = o.useCallback((e) => es(e, ez.IE.SUGGESTED), [es]),
        ed = o.useCallback(() => {
            (O({ action: "PRESS_ADD_CLIP", widgetEdited: eT.x.CLIPS_GALLERY }),
                (0, $.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("459368"),
                            n.e("821717"),
                            n.e("269714"),
                            n.e("19385"),
                            n.e("718955"),
                            n.e("126301"),
                            n.e("201074"),
                            n.e("879641"),
                            n.e("216112"),
                            n.e("498167"),
                            n.e("553829"),
                            n.e("895840"),
                            n.e("865257"),
                            n.e("228767"),
                            n.e("323079"),
                            n.e("437655"),
                            n.e("430877"),
                            n.e("641794"),
                            n.e("531123"),
                            n.e("5257"),
                            n.e("970846"),
                            n.e("586467"),
                            n.e("643612"),
                            n.e("317225"),
                            n.e("124060"),
                            n.e("146566"),
                            n.e("32661"),
                            n.e("696123"),
                            n.e("124006"),
                            n.e("73500"),
                            n.e("875842"),
                            n.e("237834"),
                            n.e("858337"),
                            n.e("324761"),
                            n.e("97210"),
                            n.e("434691"),
                            n.e("757598"),
                            n.e("203930"),
                            n.e("903663"),
                            n.e("177104"),
                            n.e("918024"),
                            n.e("496268"),
                            n.e("466147"),
                            n.e("16954"),
                            n.e("507406"),
                            n.e("838090"),
                            n.e("501962"),
                            n.e("901922"),
                            n.e("583518"),
                            n.e("974049"),
                            n.e("280559"),
                            n.e("237715"),
                            n.e("231782"),
                            n.e("895008"),
                            n.e("793784"),
                            n.e("689160"),
                            n.e("520342"),
                            n.e("306270"),
                            n.e("345627"),
                            n.e("717278"),
                        ]).then(n.bind(n, 279510));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                initialMainLink: eP.oH.ALL_CLIPS,
                                picker: {
                                    onPick: (e) => {
                                        (((e) => es(e, ez.IE.PICKER))(e), t.onClose());
                                    },
                                    action: eP.qh.UPLOAD,
                                    filterClip: ty,
                                    allowMultiSelect: !1,
                                },
                            });
                    },
                    { modalKey: eq.nm },
                ));
        }, [es, O]);
    return (0, i.jsx)(I.A, {
        userId: s.id,
        widget: a,
        allowEditing: r,
        disableInteraction: d,
        headerTitle: (0, j.L)(a),
        headerSubtitle: G && !M ? v.intl.format(v.t.pb2Was, { numClips: 4 }) : void 0,
        headerActionButtons: U && M ? [(0, i.jsx)(tP, { onClick: ed }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            Y &&
            (0, i.jsx)("div", {
                className: t_.$k,
                children: (0, i.jsx)(tj, { clips: R, onAddClip: er, onDismiss: B }),
            }),
        ...c,
        children:
            null != _
                ? (0, i.jsxs)("div", {
                      className: t_.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: A,
                              className: t_.aM,
                              onMouseEnter: el,
                              onMouseLeave: ea,
                              children: [
                                  (0, i.jsx)(eZ.A, {
                                      item: _,
                                      ringSize: "lg",
                                      isPlaying: ei,
                                      isMuted: h,
                                      modalKey: (0, eF.n1)(s.id, c.guildId),
                                      fit: "contain",
                                      onEnded: q.length > 1 ? et : void 0,
                                      className: t_.VH,
                                  }),
                                  J >= 0 &&
                                      !b &&
                                      !w &&
                                      (0, i.jsx)(E.D, {
                                          className: t_.Hf,
                                          "aria-label": v.intl.string(v.t.CscLHM),
                                          onClick: Z,
                                      }),
                                  ("saved" === _.status || "pending" === _.status) &&
                                      (0, i.jsx)(tT, { gameId: _.gameId, userId: s.id, className: t_.AT }),
                                  G &&
                                      "uploading" === _.status &&
                                      (0, i.jsx)(e$, { widgetClipId: _.key, gameId: _.gameId, className: t_.MY }),
                                  G
                                      ? ("saved" === _.status || "pending" === _.status) &&
                                        (0, i.jsx)("div", {
                                            className: t_.nP,
                                            children: (0, i.jsx)(ts, { widgetClipId: _.key, gameId: _.gameId }),
                                        })
                                      : J >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: t_.nP,
                                            children: (0, i.jsx)(tg, {
                                                isMuted: h,
                                                onToggleMuted: ee,
                                                onFullscreen: Z,
                                            }),
                                        }),
                                  (0, i.jsx)(tx.A, {
                                      children:
                                          ("saved" === _.status || "pending" === _.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tn, {
                                                      clipId: _.key,
                                                      title: _.title,
                                                      allowEditing: G,
                                                      onEditingChange: N,
                                                  }),
                                                  (0, i.jsx)(e5, {
                                                      clipId: _.key,
                                                      tags: _.tags,
                                                      allowEditing: r,
                                                      disableInteraction: d,
                                                      onEditingChange: T,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          H &&
                              (0, i.jsx)(to, {
                                  items: k,
                                  selectedKey: _.key,
                                  onSelect: z,
                                  onAddClip: U ? ed : void 0,
                                  allowEditing: G,
                              }),
                      ],
                  })
                : (0, i.jsx)(tD, {}),
    });
}
var tG = n(896170),
    tM = n(453318),
    tF = n(168017),
    tU = n(778747),
    tH = n(321108),
    tV = n(106191),
    tW = n(404277),
    tX = n(383329),
    tK = n(373842),
    tY = n(67710);
function tB(e) {
    let { renderGameListItem: t } = e,
        { extraChromeEnabled: n } = tF.A.useConfig({ location: "browse_games_popout" });
    return (0, i.jsx)(tM.X2, { maxVisibleItems: 7, renderListItem: n ? t : void 0 });
}
function tz(e) {
    let { widgetType: t, widget: n, onAddGame: l, children: a, ...s } = e,
        r = o.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: d } = (0, eD.NJ)(),
        [c, u] = o.useState(""),
        m = o.useRef(""),
        {
            options: x,
            matchSorterOptions: f,
            metadataByGameId: h,
            onSelect: p,
            endSession: I,
        } = (0, tX.R)({ surface: tU.K.PROFILE_WIDGET, query: c }),
        E = c.trim().length > 0,
        { gameIds: C, onAddGame: A } = (0, tK.S)(t),
        b = (0, tH.A)(C),
        N = o.useCallback(
            (e) => {
                (p(e),
                    (0, j.ew)({ widgetType: t, game: { gameId: e } }),
                    eU.O.announce(v.intl.string(v.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    C.includes(e) && A(e),
                    l?.());
            },
            [t, d, l, C, A, p],
        ),
        w = o.useMemo(() => {
            let e = new Map(
                x.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: r.has(e.value) },
                ]),
            );
            if (E) return [...e.values()];
            let t = b
                    .filter((e) => !r.has(e.id) && (0, j.XX)(e))
                    .map((e) => ({ id: String(e.id), value: String(e.id), label: e.name, disabled: !1 })),
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [x, r, b, E]),
        T = o.useMemo(() => {
            let e = new Map(h);
            for (let t of b) e.set(t.id, { icon: t.media?.icon, platformAvailability: t.platformAvailability });
            return e;
        }, [h, b]),
        y = o.useCallback(
            (e) => {
                let t = e.value,
                    n = null != t ? T.get(t) : void 0;
                return (0, i.jsxs)("div", {
                    className: tY.mN,
                    children: [
                        null != t &&
                            (0, i.jsx)(tV.A, {
                                game: { id: t, icon: n?.icon },
                                iconClassName: tY.DG,
                                withBackground: !0,
                            }),
                        (0, i.jsx)(g.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            lineClamp: 1,
                            className: tY.EF,
                            children: e.label,
                        }),
                        (0, i.jsx)(tW.A, { platforms: n?.platformAvailability }),
                    ],
                });
            },
            [T],
        ),
        k = o.useCallback((e) => e, []),
        R = o.useMemo(() => ({ ...f, threshold: tG.Ht.rankings.CONTAINS, keys: ["label"] }), [f]),
        S = o.useCallback((e) => (E || "" === e.trim() ? w.length : (0, tG.Ht)(w, e, R).length), [E, w, R]),
        L = o.useCallback(
            (e) => {
                let n = e.target.value;
                ("" === c.trim() &&
                    "" !== n.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: S(n),
                    }),
                    u(n),
                    (m.current = n));
            },
            [c, d, t, S],
        );
    return (0, i.jsx)(K.Y, {
        ...s,
        onRequestOpen: () => {
            (d({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (m.current = ""));
        },
        onRequestClose: () => {
            (I(),
                d({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: m.current.trim().length,
                    numResults: S(m.current),
                }));
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(e0.l, {
                className: tY.C2,
                "aria-label": v.intl.string(v.t.uqw8wK),
                children: (0, i.jsxs)(tM.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (N(e), t(), I());
                    },
                    options: w,
                    matchSorterOptions: R,
                    customMatchSorter: E ? k : void 0,
                    children: [
                        (0, i.jsx)(tM.a3, {
                            label: v.intl.string(v.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: v.intl.string(v.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: L,
                        }),
                        (0, i.jsx)(tB, { renderGameListItem: y }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function tq(e) {
    let { disabled: t, ...n } = e,
        l = o.useRef(null);
    return (0, i.jsx)(tz, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(k.m, {
                text: v.intl.string(v.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(ey.K, {
                    buttonRef: l,
                    variant: "secondary",
                    size: "sm",
                    icon: ek.T,
                    "aria-label": v.intl.string(v.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tJ(e) {
    let t = o.useRef(null);
    return (0, i.jsx)(tz, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(E.D, {
                innerRef: t,
                className: tY.cV,
                "aria-label": v.intl.string(v.t.PYyENc),
                ...e,
                children: (0, i.jsx)(ti.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
var tQ = n(61881);
let t$ = o.createContext(null);
function tZ(e) {
    let { widgetType: t, children: n } = e,
        l = (0, u.bG)([tQ.A], () => {
            let e = tQ.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, j.cv)(t);
            return n.games.length > i;
        }),
        [a, s] = o.useState(l),
        r = o.useMemo(() => ({ expanded: a, setExpanded: s }), [a]);
    return (0, i.jsx)(t$.Provider, { value: r, children: n });
}
function t0() {
    let e = o.useContext(t$);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var t1 = n(67438);
function t2(e) {
    let { widget: t } = e,
        n = (0, j.cv)(t.type),
        l = 1 === n,
        a = l ? v.intl.string(v.t["3FdPBT"]) : v.intl.format(v.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? t1.O : t1.k,
        children: [
            l && (0, i.jsx)(tJ, { widget: t, widgetType: t.type }),
            (0, i.jsx)(g.E, { variant: "text-xs/normal", color: "text-subtle", children: a }),
        ],
    });
}
var t7 = n(683071),
    t8 = n(312252);
function t3(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, j.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              className: t8.l,
              children: (0, i.jsx)(t7.w, {
                  type: "warning",
                  message: v.intl.formatToPlainString(v.t.Rv3wYq, { maxGames: l }),
                  role: "alert",
              }),
          });
}
var t5 = n(943793),
    t4 = n(192),
    t6 = n(148420);
function t9(e) {
    let { games: t, user: n, widgetType: l, ...a } = e,
        { registerItemRef: s, manageFocusOnDelete: r } = (0, ta.r)();
    return (0, i.jsx)("ul", {
        className: t6.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(t5.A, {
                        index: t,
                        user: n,
                        game: e,
                        widgetType: l,
                        coverRef: s(e.gameId),
                        onRemoveGame: r,
                        ...a,
                    }),
                },
                e.gameId,
            ),
        ),
    });
}
function ne(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, t4.r)(),
        r = s(t),
        { expanded: d, setExpanded: o } = t0(),
        c = d ? a : a.slice(0, 2),
        u = a.length > 2,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(t9, { ...e, games: c }),
                u && (0, i.jsx)(A, { expanded: d, onClick: () => o((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(t3, { widgetType: t, gameCount: a.length }),
                  (0, i.jsx)(ta.B, { emptyListFallbackRef: r, children: m }),
              ],
          })
        : m;
}
function nt(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, i.jsx)(ne, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t2, { widget: n }),
    });
}
function nn(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e,
        o = n.games[0];
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            null != o
                ? (0, i.jsx)(t5.A, {
                      user: t,
                      widgetType: n.type,
                      game: o,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t2, { widget: n }),
    });
}
var ni = n(793693);
function nl(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: ni.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var na = n(675816),
    ns = n(201438),
    nr = n(788593),
    nd = n(858808),
    no = n(365611),
    nc = n(900850);
function nu(e) {
    let { index: t, widgetType: n, game: l, coverImageUrl: a, iconImageUrl: s, gameName: r, children: d } = e,
        { manageFocusOnReorder: c } = (0, ta.r)(),
        u = o.useRef(null);
    return (0, i.jsx)(tl.mG, {
        index: t,
        itemId: l.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, iconSrc: s, gameName: r, getWidth: () => u.current?.offsetWidth },
        "aria-label": v.intl.formatToPlainString(v.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, j.Un)(n, e, t),
        onEnd: () => c(l.gameId),
        className: nc.kL,
        dropBeforeClassName: nc.A,
        dropAfterClassName: nc.Ze,
        draggingClassName: nc.Id,
        children: (0, i.jsx)("div", { ref: u, className: nc.An, children: d }),
    });
}
function nm(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            allowEditing: a,
            disableInteraction: s = !1,
            index: r,
            onRemoveGame: d,
            coverRef: o,
        } = e,
        { coverImageUrl: c, iconImageUrl: u, gameName: m, isLoading: g } = (0, ns.A)(t.gameId),
        { registerDragHandleRef: x } = (0, ta.r)(),
        f = a && !s,
        { isDragging: h } = (0, na.V)((e) => ({ isDragging: e.isDragging() }));
    function p() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nr.A, {
                    imageSrc: c,
                    iconSrc: u,
                    gameName: m,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: s,
                    className: (null == c && null == u) || s ? void 0 : no.iL,
                    hideTooltip: h,
                    coverRef: o,
                }),
                f && (0, i.jsx)(tl.jV, { buttonRef: x(t.gameId), className: nc.BU }),
                f && (0, i.jsx)(nd.A, { game: t, widgetType: l, className: nc.vS, onRemove: () => d?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: no.mD })
        : f
          ? (0, i.jsx)(nu, {
                widgetType: l,
                index: r ?? 0,
                game: t,
                coverImageUrl: c,
                iconImageUrl: u,
                gameName: m,
                children: p(),
            })
          : (0, i.jsx)("div", { className: nc.kL, children: p() });
}
function ng(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: a, disableInteraction: s } = e,
        { registerItemRef: r, manageFocusOnDelete: d } = (0, ta.r)();
    return (0, i.jsx)(nl, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nm, {
                index: t,
                game: e,
                userId: n,
                widgetType: l,
                allowEditing: a,
                disableInteraction: s,
                coverRef: r(e.gameId),
                onRemoveGame: d,
            }),
    });
}
function nx(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, t4.r)(),
        r = s(t),
        { expanded: d, setExpanded: o } = t0(),
        c = d ? a : a.slice(0, 8),
        u = a.length > 8,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ng, { ...e, games: c }),
                u && (0, i.jsx)(A, { expanded: d, onClick: () => o((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(t3, { widgetType: t, gameCount: a.length }),
                  (0, i.jsx)(ta.B, { emptyListFallbackRef: r, children: m }),
              ],
          })
        : m;
}
function nf(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nx, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t2, { widget: n }),
    });
}
function nh(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nx, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t2, { widget: n }),
    });
}
var np = n(875620);
function nj(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: a, iconImageUrl: s, gameName: r, isLoading: d } = (0, ns.A)(t),
        o = (0, u.bG)([tQ.A], () => tQ.A.suggestedFetchIsLoading),
        c = v.intl.formatToPlainString(v.t["3mb1s5"], { game: r });
    return d || o
        ? (0, i.jsx)("div", { className: no.mD })
        : (0, i.jsx)(k.m, {
              text: c,
              ariaHidden: !0,
              children: (0, i.jsxs)(E.D, {
                  className: np.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, i.jsx)(nr.A, {
                          className: np.Iv,
                          imageSrc: a,
                          iconSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(ti.PlusLargeIcon, { size: "md", className: np.Xv, color: em.A.colors.WHITE }),
                  ],
              }),
          });
}
function nI(e) {
    let { userId: t, widgetType: n, ...l } = e,
        { games: a, onAddGame: s } = (0, tK.S)(n),
        { setExpanded: r } = t0(),
        { trackUserProfileEditAction: d } = (0, eD.NJ)(),
        c = o.useCallback(
            (e) => {
                (s(e),
                    r(!0),
                    (0, j.ew)({ widgetType: n, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: n }));
            },
            [s, n, d, r],
        );
    return (0, i.jsx)(tf.A, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: np.Vg,
            children: a.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nj, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nE = n(870961);
function nv(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case eT.x.FAVORITE_GAMES:
            return (0, i.jsx)(nn, { widget: t, ...n });
        case eT.x.CURRENT_GAMES:
            return (0, i.jsx)(nt, { widget: t, ...n });
        case eT.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nh, { widget: t, ...n });
        case eT.x.PLAYED_GAMES:
            return (0, i.jsx)(nf, { widget: t, ...n });
        default:
            return null;
    }
}
function nC(e) {
    let { widget: t, user: n, allowEditing: l, disableInteraction: a, ...s } = e,
        { setExpanded: r } = t0(),
        { shouldShowSuggestions: d, handleDismissSuggestions: c } = (function (e) {
            let [t, n] = o.useState(!1),
                i = eM(e.type),
                l = (0, j.uA)(e);
            return {
                shouldShowSuggestions: !i && !t && !l,
                handleDismissSuggestions: o.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        u = l && !a,
        m = u && d,
        g = (0, j.L)(t),
        x = (0, j.FM)(t, { showEditingControls: u }),
        f = (0, j.uA)(t),
        h = 1 === (0, j.cv)(t.type);
    return (0, i.jsx)(nv, {
        widget: t,
        user: n,
        allowEditing: l,
        disableInteraction: a,
        headerTitle: g,
        headerSubtitle: x,
        headerActionButtons:
            u && !h
                ? [
                      (0, i.jsx)(
                          tq,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => r(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nI, { userId: n.id, widgetType: t.type, onDismiss: c, className: nE.r }),
        ...s,
    });
}
function nA(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(tZ, { widgetType: t.type, children: (0, i.jsx)(nC, { widget: t, ...n }) });
}
function nb(e) {
    let { widget: t, ...n } = e;
    return t instanceof l.R
        ? (0, i.jsx)(d.A, { widget: t, ...n })
        : t instanceof r.Tu
          ? (0, i.jsx)(eN, { widget: t, ...n })
          : (0, s.fu)(t)
            ? (0, i.jsx)(nA, { widget: t, ...n })
            : t instanceof a.kM
              ? (0, i.jsx)(tO, { widget: t, ...n })
              : null;
}
