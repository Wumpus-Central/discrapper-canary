n.d(t, { u: () => ny });
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
var N = n(503698),
    b = n.n(N),
    T = n(43990),
    w = n(241326),
    R = n(33969),
    y = n(866665),
    S = n(245604),
    k = n(601089);
function L(e) {
    let { label: t, onClick: n, className: l } = e;
    return (0, i.jsx)(y.m, {
        text: t,
        children: (0, i.jsxs)(E.D, {
            className: b()(k.kL, l),
            "aria-label": t,
            onClick: n,
            children: [
                (0, i.jsx)("div", { className: k.n8 }),
                (0, i.jsx)("div", { className: k.zc, children: (0, i.jsx)(S.U, { size: "sm" }) }),
                (0, i.jsx)("div", { className: k.n8 }),
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
function W(e) {
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
        className: b()(U.YD, { [U.Lq]: s > 1 }, t),
        variant: n,
        color: l,
        lineClamp: m,
        children: d ? a : c(a),
    });
}
function H(e) {
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
                : (0, i.jsx)(W, { interactive: !1, variant: l, color: a, value: t, maxLines: d, disableMarkdown: u });
    return (0, i.jsx)("div", {
        className: b()(F.kL, U.ZZ, { [F.oE]: 1 === d, [F.CP]: c }),
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
function K(e) {
    return e.canEdit
        ? (0, i.jsx)(H, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(W, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var X = n(326009),
    V = n(265872),
    Y = n(22231),
    B = n(750943),
    z = n(458499);
function q(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: a, onChangeImage: s } = e;
    return (0, i.jsx)(V.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(z.A, { lastEdit: t, cropAndUpload: a, onChangeImage: s, onClose: n });
        },
        children: (e) =>
            (0, i.jsx)(R.Y, {
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
        ? (0, i.jsx)(R.Y, {
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
                            n.e("455524"),
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
    function N() {
        (0, j.AD)((e) => new r.Tu({ ...e, sections: e.sections.filter((e, t) => t !== l) }));
    }
    let y = null != p,
        S = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        k = null != n.image || y,
        L = k || a,
        _ = E(n.image);
    return (0, i.jsx)(T.N, {
        theme: k ? er.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: u,
                className: b()(eo.kL, { [eo.Vp]: L }, e),
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
                                  k && S ? (0, i.jsx)("div", { className: eo.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(R.A, {
                              className: eo.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(J, {
                                            lastEdit: _,
                                            buttonRef: d,
                                            disabled: y,
                                            cropAndUpload: h,
                                            onChangeImage: A,
                                        })
                                      : null,
                                  (0, i.jsx)(R.Y, {
                                      icon: w.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: k ? v.intl.string(v.t.RyK5Ww) : v.intl.string(v.t.g2jVww),
                                      onClick: k ? C : N,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: b()(eo.hQ, e, { [eo.Vp]: L }),
                        children: [
                            (0, i.jsx)(K, {
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
                            (0, i.jsx)(K, {
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
        className: b()(eg.cR, { [eg.mr]: n }),
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
                              className: b()(eg.k9, a ? eg.y2 : void 0),
                              canEdit: a,
                              userId: n,
                              image: l.image,
                              previewUri: o,
                              cropAndUpload: d,
                              editVariant: "overlay",
                              lastEdit: u(l.image),
                          }),
                          a
                              ? (0, i.jsx)(R.A, {
                                    className: eg.ij,
                                    children: (0, i.jsx)(R.Y, {
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
                                        icon: w.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eg.oT,
                children: [
                    (0, i.jsx)(K, {
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
                    (0, i.jsx)(K, {
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
                ? (0, i.jsxs)(R.A, {
                      className: eg.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(R.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: v.intl.string(v.t.i3vRzP),
                                    onClick: function () {
                                        s(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: B.X,
                                }),
                          (0, i.jsx)(R.Y, {
                              variant: "overlay-secondary",
                              tooltipText: v.intl.string(v.t.g2jVww),
                              onClick: function () {
                                  r(l.key);
                              },
                              icon: w.TrashIcon,
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
var ep = n(554146),
    ej = n(43105),
    eI = n(131607),
    eE = n(280450),
    ev = n(49999);
function eC(e) {
    let { userId: t, targetElementRef: n } = e,
        l = (0, u.bG)([eE.default], () => eE.default.getId() === t, [t]),
        [a, s] = (0, eI.kn)(l ? [ep.M.PERSONAL_WIDGET_GOING_AWAY_COACHMARK] : []);
    return a !== ep.M.PERSONAL_WIDGET_GOING_AWAY_COACHMARK
        ? null
        : (0, i.jsx)(ej.A, {
              targetElementRef: n,
              position: "left",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              title: v.intl.string(v.t["+Nspne"]),
              body: v.intl.string(v.t.fvGAJa),
              onRequestClose: () => s(ev.i.USER_DISMISS),
              actions: [{ text: v.intl.string(v.t["NX+WJN"]), onClick: () => s(ev.i.TAKE_ACTION) }],
          });
}
var eA = n(202541),
    eN = n(877068);
let eb = { section: er.JJy.PERSONAL_WIDGET };
function eT(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eN.wx,
        children: [
            (0, i.jsx)(f.A, { size: "xs", className: eN.nr }),
            (0, i.jsx)(K, {
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
function ew(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s } = e;
    switch (n.type) {
        case c.K.COVER:
            return (0, i.jsx)(eu, { userId: t, section: n, sectionIndex: l, canEdit: a });
        case c.K.FIELDS:
            return (0, i.jsx)(eh, { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s });
    }
}
function eR() {
    return (0, u.bG)([h.default], () => p.Ay.isPremium(h.default.getCurrentUser(), eA.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eN.hc,
              children: [
                  (0, i.jsx)(m.h, { color: "nitro-pink", className: eN.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eN.LK,
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
                      subscriptionTier: eA.pe.TIER_2,
                      defaultTextOverride: v.intl.string(v.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eb,
                  }),
              ],
          });
}
function ey() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = M();
    return e || t ? (0, i.jsx)(A, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eS(e) {
    let { widget: t, user: n, allowEditing: l, disableInteraction: a, index: s, trailingContent: r } = e,
        d = l && !0 !== a,
        u = o.useRef(null),
        m = o.useMemo(() => t.sections.some((e) => e.type === c.K.COVER), [t.sections]);
    return (0, i.jsxs)(I.A, {
        userId: n.id,
        widget: t,
        allowEditing: l,
        disableInteraction: a,
        index: s,
        trailingContent: r,
        className: eN.Nr,
        headerClassName: eN.JE,
        children: [
            (0, i.jsxs)("div", {
                ref: u,
                className: eN.kL,
                children: [
                    (0, i.jsx)(eT, { widget: t, canEdit: d }),
                    d && !m ? (0, i.jsx)(ec, {}) : null,
                    t.sections.map((e, t) =>
                        (0, i.jsx)(
                            ew,
                            { userId: n.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: m },
                            t,
                        ),
                    ),
                    (0, i.jsx)(ey, {}),
                    d ? (0, i.jsx)(eR, {}) : null,
                ],
            }),
            !0 !== a ? (0, i.jsx)(eC, { userId: n.id, targetElementRef: u }) : null,
        ],
    });
}
function ek(e) {
    return (0, i.jsx)(G, { children: (0, i.jsx)(eS, { ...e }) });
}
var eL = n(172218),
    e_ = n(540185),
    eP = n(408278),
    eD = n(499373),
    eO = n(775602),
    eG = n(793574),
    eM = n(734066),
    eF = n(682176),
    eU = n(111994),
    eW = n(183555),
    eH = n(321191);
function eK(e) {
    return (0, u.bG)(
        [eE.default, eH.A],
        () => (eH.A.getUserProfile(eE.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var eX = n(403777),
    eV = n(765178),
    eY = n(789645);
(n(323874), n(14289), n(35956));
var eB = n(762555),
    ez = n(614584),
    eq = n(956050),
    eJ = n(132319),
    eQ = n(195880),
    e$ = n(219222),
    eZ = n(518477),
    e0 = n(696016);
async function e1(e, t) {
    let n = URL.createObjectURL(t);
    try {
        let t = await (0, eq.m)(n, 0);
        (0, j.QN)(e, t);
    } catch (e) {
        e0.nx.warn(`Clips gallery widget thumbnail refresh failed; keeping placeholder: ${e}`);
    } finally {
        URL.revokeObjectURL(n);
    }
}
async function e2(e, t, n, i, l) {
    let { analyticsLocations: a, source: s, trackEditAction: r } = l,
        d = "exporting";
    try {
        let l = await (0, ez.VO)(e, { analyticsLocations: a });
        if (i.signal.aborted || !(0, j.iu)(t)) return;
        ((d = "uploading"), e1(t, l).catch(() => {}));
        let o = new File([l], "clip.mp4", { type: "video/mp4" }),
            c = await ea.A.uploadWidgetClip(o, { onProgress: (e) => (0, e$.Fj)(t, e), signal: i.signal });
        if (!(0, j.WX)(t, c)) return;
        r({
            action: s === eZ.IE.PICKER ? "CLIP_ADDED_FROM_PICKER" : "CLIP_ADDED_FROM_SUGGESTED",
            widgetEdited: e_.x.CLIPS_GALLERY,
            gameId: n,
        });
    } catch (l) {
        if (i.signal.aborted) return;
        ((0, j.mC)(t),
            e0.nx.error("Failed to upload a clip for the clips gallery widget", l, {
                stage: d,
                clipType: e.type,
                crop: e.editMetadata?.crop,
                trackTypes: e.tracks?.map((e) => e.type),
            }),
            (0, Q.P0)({ text: v.intl.string(v.t.iufib1), variant: "critical" }),
            r({
                action: "exporting" === d ? "CLIP_EXPORT_FAILED" : "CLIP_UPLOAD_FAILED",
                widgetEdited: e_.x.CLIPS_GALLERY,
                gameId: n,
            }));
    } finally {
        (0, e$.cG)(t);
    }
}
function e8(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: a } = (0, eW.NJ)(),
        s = v.intl.string(v.t["4z6ldH"]);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(y.m, {
            text: s,
            ariaHidden: !0,
            children: (0, i.jsx)(eP.K, {
                "aria-label": s,
                icon: eY.P,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, e$._V)(t),
                        (0, j.mC)(t),
                        eV.O.announce(v.intl.string(v.t.VCQXvr)),
                        a({ action: "CLIP_UPLOAD_CANCELED", widgetEdited: e_.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
n(600253);
var e5 = n(314531);
n(926675);
var e7 = n(305866),
    e3 = n(123181),
    e4 = n(229087),
    e9 = n(753437),
    e6 = n(382701),
    te = n(408519);
function tt(e) {
    let { clipId: t, tags: n, allowEditing: l, disableInteraction: a = !1, onEditingChange: s } = e,
        r = l && !a,
        d = o.useMemo(() => n?.filter((e) => null != (0, e9.W3)(e)) ?? [], [n]),
        c = d.length > 0,
        u = r && d.length < 20,
        { trackUserProfileEditAction: m } = (0, eW.NJ)(),
        x = o.useRef(null),
        f = o.useRef(new Map()),
        h = o.useRef(null),
        p = o.useRef(null),
        I = o.useRef(null),
        [E, C] = o.useState(d.length),
        [A, N] = o.useState(!1),
        [b, T] = o.useState(!1),
        w = A || b;
    (o.useEffect(() => {
        s(w);
    }, [w, s]),
        o.useEffect(() => () => s(!1), [s]));
    let R = o.useCallback(
            (e, n) => {
                ((0, j.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: e_.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        y = o.useCallback(() => {
            (T(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: e_.x.CLIPS_GALLERY }));
        }, [m]),
        S = o.useCallback(() => T(!1), []),
        k = o.useCallback(
            (e) => {
                ((0, j.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: e_.x.CLIPS_GALLERY }));
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
                (1 === _ && N(!1), k(e));
            },
            [k, _],
        );
    return c || u
        ? (0, i.jsxs)("div", {
              className: te.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: te.xP,
                      "aria-hidden": !0,
                      children: [
                          d.map((e) =>
                              (0, i.jsx)(
                                  e4.A,
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
                              className: te.lv,
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
                          className: te.nM,
                          "aria-label": v.intl.string(v.t["4Rq3a7"]),
                          children: d
                              .slice(0, E)
                              .map((e) =>
                                  (0, i.jsx)(e4.A, { tag: e, variant: "filled", onRemove: r ? () => k(e) : void 0 }, e),
                              ),
                      }),
                  P &&
                      (0, i.jsx)(tn, {
                          buttonRef: p,
                          numHidden: _,
                          isOpen: A,
                          onOpenChange: N,
                          disableInteraction: a,
                          children: d.map((e) =>
                              (0, i.jsx)(e4.A, { tag: e, className: te.Hl, onRemove: r ? () => O(e) : void 0 }, e),
                          ),
                      }),
                  u && (0, i.jsx)(e3.A, { tags: d, onTagsChange: R, onOpen: y, onClose: S, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function tn(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: a, disableInteraction: s, children: r } = e,
        d = v.intl.string(v.t.pWHvBI);
    return s
        ? (0, i.jsx)("div", {
              className: `${te.lv} ${e6.r9}`,
              ref: t,
              children: (0, i.jsx)(g.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(V.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => a(!0),
              onRequestClose: () => a(!1),
              renderPopout: () =>
                  (0, i.jsx)(e7.l, {
                      className: te.Kt,
                      "aria-label": d,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: te.ns, children: r }),
                  }),
              children: (e) =>
                  (0, i.jsx)(y.m, {
                      text: d,
                      ariaHidden: !0,
                      children: (0, i.jsx)(E.D, {
                          ...e,
                          innerRef: t,
                          "aria-label": d,
                          "aria-expanded": l,
                          className: te.lv,
                          children: (0, i.jsx)(g.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var ti = n(3026),
    tl = n(936026);
function ta(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(g.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: b()(tl.Qw, { [tl.qf]: n }),
        children: (0, i.jsx)(ti.A, { children: t }),
    });
}
function ts(e) {
    let { clipId: t, title: n, onEditingChange: l } = e,
        { trackUserProfileEditAction: a } = (0, eW.NJ)(),
        s = o.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, j.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: e_.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        r = v.intl.string(v.t["2gwc+H"]);
    return (
        o.useEffect(() => (l(!1), () => l(!1)), [l]),
        (0, i.jsx)("div", {
            className: b()(F.kL, F.oE, tl.ZZ),
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
                    className: b()(tl.$, tl.TG),
                    children: [
                        (0, i.jsx)(Y.PencilIcon, { size: "xxs", color: "currentColor", className: tl.wz }),
                        "" === n.trim()
                            ? (0, i.jsx)(ta, { value: r, isPlaceholder: !0 })
                            : (0, i.jsx)(ta, { value: n }),
                    ],
                }),
                placeholder: r,
                label: v.intl.string(v.t.PDnM11),
                maxLength: 200,
            }),
        })
    );
}
function tr(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: a } = e,
        s = null != n && "" !== n.trim();
    return l || s
        ? l
            ? (0, i.jsx)(ts, { clipId: t, title: n ?? "", onEditingChange: a })
            : (0, i.jsx)("span", { className: tl.$, children: (0, i.jsx)(ta, { value: n ?? "" }) })
        : null;
}
var td = n(663341),
    to = n(451395),
    tc = n(823016);
function tu(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: a } = (0, eW.NJ)(),
        s = v.intl.string(v.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(y.m, {
            text: s,
            ariaHidden: !0,
            children: (0, i.jsx)(eP.K, {
                "aria-label": s,
                icon: w.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, j.mC)(t),
                        eV.O.announce(v.intl.string(v.t.zyPNb3)),
                        a({ action: "CLIP_REMOVED", widgetEdited: e_.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var tm = n(233002);
function tg(e) {
    let { item: t, index: n, isSelected: l, onSelect: a, allowEditing: s } = e,
        { registerDragHandleRef: r, manageFocusOnReorder: d } = (0, tc.r)(),
        { trackUserProfileEditAction: c } = (0, eW.NJ)(),
        u = o.useRef(null),
        m = o.useCallback(
            (e, t) => {
                e !== t && ((0, j.N5)(e, t), c({ action: "CLIP_REORDERED", widgetEdited: e_.x.CLIPS_GALLERY }));
            },
            [c],
        ),
        g = s && ("saved" === t.status || "pending" === t.status),
        x = s && "uploading" === t.status,
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E.D, {
                    className: b()(tm.Vs, { [tm.wH]: l }),
                    "aria-pressed": l,
                    "aria-label": v.intl.formatToPlainString(v.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(e5.A, { item: t, ringSize: "sm", className: tm.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(to.jV, { buttonRef: r(t.key), className: tm.BU }),
                            (0, i.jsx)(tu, { widgetClipId: t.key, gameId: t.gameId, className: tm.nM }),
                        ],
                    }),
                x && (0, i.jsx)(e8, { widgetClipId: t.key, gameId: t.gameId, className: tm.nM }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: tm.NI,
        children: g
            ? (0, i.jsx)(to.mG, {
                  index: n,
                  itemId: t.key,
                  listType: e_.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": v.intl.formatToPlainString(v.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: m,
                  onEnd: () => d(t.key),
                  className: tm.oE,
                  dropBeforeClassName: tm.A,
                  dropAfterClassName: tm.Ze,
                  draggingClassName: tm.Id,
                  children: f,
              })
            : f,
    });
}
function tx(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: a, allowEditing: s = !1 } = e,
        r = Math.max(0, 4 - t.length),
        d = (0, i.jsxs)("ul", {
            className: tm.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tg, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: s }, e.key),
                ),
                null != a &&
                    Array.from({ length: r }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tm.NI,
                                children: (0, i.jsx)(E.D, {
                                    className: tm.Yn,
                                    "aria-label": v.intl.string(v.t.rI0i0a),
                                    onClick: a,
                                    children: (0, i.jsx)(td.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return s ? (0, i.jsx)(tc.B, { emptyListFallbackRef: null, children: d }) : d;
}
var tf = n(729475),
    th = n(358618),
    tp = n(983851);
function tj(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        a = v.intl.string(v.t.dcl9MQ),
        s = v.intl.string(t ? v.t.YqAjXy : v.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(y.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)(eP.K, {
                    "aria-label": a,
                    icon: tf.T,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, i.jsx)(y.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(eP.K, {
                    "aria-label": s,
                    icon: t ? th._ : tp.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tI = n(798108),
    tE = n(224360),
    tv = n(335978);
function tC(e) {
    let { clip: t, onAddClip: n } = e,
        l = v.intl.formatToPlainString(v.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        a = o.useCallback(() => n(t), [t, n]);
    return (0, i.jsx)(y.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsxs)(E.D, {
            className: tv.Vs,
            "aria-label": l,
            onClick: a,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tv.xn, loading: "lazy" }),
                (0, i.jsx)(td.PlusLargeIcon, { size: "sm", color: "currentColor", className: tv.Xv }),
            ],
        }),
    });
}
function tA(e) {
    let { clips: t, onAddClip: n, ...l } = e;
    return (0, i.jsx)(tE.A, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: tv.p_,
            children: t.map((e) =>
                (0, i.jsx)("li", { className: tv.NI, children: (0, i.jsx)(tC, { clip: e, onAddClip: n }) }, e.id),
            ),
        }),
    });
}
var tN = n(769015),
    tb = n(409626),
    tT = n(692969),
    tw = n(202163),
    tR = n(207803),
    ty = n(591179),
    tS = n(485745),
    tk = n(308766);
function tL(e) {
    let { gameId: t, userId: n, className: l } = e,
        { gameRecord: a } = (0, tw.Ay)(t),
        s = !(0, ty.X)("WidgetClipGameIcon"),
        r = (0, tS.A)(s),
        d = (0, tT.A)({
            location: "WidgetClipGameIcon",
            applicationId: t,
            source: tb.GameProfileSources.UserProfile,
            sourceUserId: n,
        }),
        c = o.useCallback(
            (e) => {
                if (r) {
                    (e.preventDefault(), e.stopPropagation(), (0, tR.VQ)());
                    return;
                }
                d?.(e);
            },
            [r, d],
        ),
        u = a?.name;
    if (null == u) return null;
    let m = (0, i.jsx)(tN.A, { game: a, size: tN.M.XSMALL, allowUnknownGameIcon: !1 });
    return (0, i.jsx)(y.m, {
        text: u,
        ariaHidden: !0,
        children:
            null == d
                ? (0, i.jsx)(y.m, {
                      text: u,
                      ariaHidden: !0,
                      children: (0, i.jsx)("div", { className: l, children: m }),
                  })
                : (0, i.jsx)(E.D, {
                      className: b()(tk.v, l),
                      "aria-label": v.intl.formatToPlainString(v.t["8QLQB+"], { gameName: u }),
                      onClick: c,
                      children: m,
                  }),
    });
}
function t_(e) {
    return null != e.applicationId && 0 !== e.length;
}
var tP = n(558285),
    tD = n(608857),
    tO = n(738935),
    tG = n(409067),
    tM = n(716112);
function tF(e) {
    let { onClick: t } = e,
        n = v.intl.string(v.t.rI0i0a);
    return (0, i.jsx)(y.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(eP.K, { variant: "secondary", size: "sm", icon: eD.T, "aria-label": n, onClick: t }),
    });
}
function tU() {
    return (0, i.jsx)("div", {
        className: tM.p$,
        children: (0, i.jsx)(g.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: v.intl.format(v.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tW(e) {
    let t,
        l,
        { widget: a, user: s, allowEditing: r, disableInteraction: d, ...c } = e,
        [m, g] = o.useState(!1),
        [x, f] = o.useState(!1),
        [h, p] = o.useState(!0),
        C = (0, u.bG)([eO.Ay], () => eO.Ay.useReducedMotion),
        A = (0, eL.K)(f, 0.5),
        [N, b] = o.useState(!1),
        [T, w] = o.useState(!1),
        R = o.useRef(void 0),
        y = (0, tD.A)(a),
        S =
            ((t = (0, u.yK)([tO.Ay], () => Object.values(tO.Ay.getClips()))),
            (l = (0, u.bG)([tO.Ay], () => tO.Ay.getSettings().showPovClipsInGallery)),
            o.useMemo(() => {
                let e = new Set();
                for (let t of a.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || !t_(t) || (!l && (0, tG.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, l, a.clips])),
        [k, L] = o.useState(null),
        _ = y.find((e) => e.key === k) ?? y[0],
        P = (0, eM.sw)(),
        { trackUserProfileAction: D, trackUserProfileEditAction: O } = (0, eW.NJ)(),
        G = r && !0 !== d,
        M = 0 === y.length,
        F = y.length >= 4,
        U = G && P && !F,
        W = G || y.length > 1,
        [H] = o.useState(() => S.length >= 3),
        [K, X] = o.useState(!1),
        V = eK(a.type),
        Y = U && !V && H && !K && S.length > 0,
        B = o.useCallback(() => {
            (X(!0), O({ action: "DISMISS_SUGGESTED_CLIPS", widgetEdited: e_.x.CLIPS_GALLERY }));
        }, [O]),
        z = o.useCallback(
            (e) => {
                (L(e), e !== _?.key && D({ action: "SELECT_CLIP", widgetType: e_.x.CLIPS_GALLERY }));
            },
            [_?.key, D],
        ),
        q = o.useMemo(() => (!0 === d ? [] : y.filter(tD.K)), [y, d]),
        J = null != _ ? q.findIndex((e) => e.key === _.key) : -1,
        Z = o.useCallback(() => {
            J < 0 ||
                (D({ action: "PRESS_PLAY_CLIP", widgetType: e_.x.CLIPS_GALLERY }),
                (0, tP.A)({ clips: q, startingIndex: J }));
        }, [q, J, D]),
        ee = o.useCallback(() => {
            let e = !h;
            (p(e), D({ action: e ? "MUTE_CLIP_PREVIEW" : "UNMUTE_CLIP_PREVIEW", widgetType: e_.x.CLIPS_GALLERY }));
        }, [h, D]),
        et = o.useCallback(() => {
            if (J < 0) return;
            let e = q[(J + 1) % q.length];
            null != e && L(e.key);
        }, [q, J]),
        en = J >= 0 && !C && x,
        ei = (en || m) && !N && !T,
        el = o.useCallback(() => {
            J < 0 ||
                en ||
                (R.current = window.setTimeout(() => {
                    (g(!0), D({ action: "HOVER_PLAY_CLIP", widgetType: e_.x.CLIPS_GALLERY }));
                }, 150));
        }, [en, J, D]),
        ea = o.useCallback(() => {
            (window.clearTimeout(R.current), g(!1));
        }, []);
    (o.useEffect(() => () => window.clearTimeout(R.current), []),
        o.useEffect(() => {
            (0, eF.v)();
        }, []));
    let es = o.useCallback(
            (e, t) => {
                let n = (function (e, t) {
                    let n;
                    if (null == e.applicationId)
                        return ((0, Q.P0)({ text: v.intl.string(v.t.xcLXWy), variant: "critical" }), null);
                    let i = (0, eQ.m)();
                    if (
                        !(0, j.$C)({
                            status: "uploading",
                            id: i,
                            localClipId: e.id,
                            gameId: e.applicationId,
                            title: (0, eJ.l)(e),
                            thumbnail: e.thumbnail,
                            clipEventsTimeline:
                                (n = (0, eB.lz)(e)?.filter((e) => null != e.game) ?? []).length > 0
                                    ? n.slice(0, 100)
                                    : void 0,
                        })
                    )
                        return null;
                    let l = new AbortController();
                    return ((0, e$.yf)(i, l), e2(e, i, e.applicationId, l, t), i);
                })(e, { analyticsLocations: [eG.A.USER_PROFILE_MODAL_V2], source: t, trackEditAction: O });
                null != n && L(n);
            },
            [O],
        ),
        er = o.useCallback((e) => es(e, eZ.IE.SUGGESTED), [es]),
        ed = o.useCallback(() => {
            (O({ action: "PRESS_ADD_CLIP", widgetEdited: e_.x.CLIPS_GALLERY }),
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
                            n.e("616045"),
                            n.e("5257"),
                            n.e("970846"),
                            n.e("334179"),
                            n.e("508699"),
                            n.e("317225"),
                            n.e("124060"),
                            n.e("146566"),
                            n.e("32661"),
                            n.e("696123"),
                            n.e("124006"),
                            n.e("73500"),
                            n.e("237834"),
                            n.e("875842"),
                            n.e("858337"),
                            n.e("97210"),
                            n.e("757598"),
                            n.e("203930"),
                            n.e("903663"),
                            n.e("177104"),
                            n.e("918024"),
                            n.e("901922"),
                            n.e("466147"),
                            n.e("16954"),
                            n.e("507406"),
                            n.e("838090"),
                            n.e("501962"),
                            n.e("583518"),
                            n.e("974049"),
                            n.e("280559"),
                            n.e("237715"),
                            n.e("231782"),
                            n.e("895008"),
                            n.e("98717"),
                            n.e("689160"),
                            n.e("520342"),
                            n.e("306270"),
                            n.e("790614"),
                            n.e("717278"),
                        ]).then(n.bind(n, 972405));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                initialMainLink: eU.oH.ALL_CLIPS,
                                picker: {
                                    onPick: (e) => {
                                        (((e) => es(e, eZ.IE.PICKER))(e), t.onClose());
                                    },
                                    action: eU.qh.UPLOAD,
                                    filterClip: t_,
                                    allowMultiSelect: !1,
                                },
                            });
                    },
                    { modalKey: e0.nm },
                ));
        }, [es, O]);
    return (0, i.jsx)(I.A, {
        userId: s.id,
        widget: a,
        allowEditing: r,
        disableInteraction: d,
        headerTitle: (0, j.L)(a),
        headerSubtitle: G && !M ? v.intl.format(v.t.pb2Was, { numClips: 4 }) : void 0,
        headerActionButtons: U && M ? [(0, i.jsx)(tF, { onClick: ed }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            Y &&
            (0, i.jsx)("div", {
                className: tM.$k,
                children: (0, i.jsx)(tA, { clips: S, onAddClip: er, onDismiss: B }),
            }),
        ...c,
        children:
            null != _
                ? (0, i.jsxs)("div", {
                      className: tM.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: A,
                              className: tM.aM,
                              onMouseEnter: el,
                              onMouseLeave: ea,
                              children: [
                                  (0, i.jsx)(e5.A, {
                                      item: _,
                                      ringSize: "lg",
                                      isPlaying: ei,
                                      isMuted: h,
                                      modalKey: (0, eX.n1)(s.id, c.guildId),
                                      fit: "contain",
                                      onEnded: q.length > 1 ? et : void 0,
                                      className: tM.VH,
                                  }),
                                  J >= 0 &&
                                      !N &&
                                      !T &&
                                      (0, i.jsx)(E.D, {
                                          className: tM.Hf,
                                          "aria-label": v.intl.string(v.t.CscLHM),
                                          onClick: Z,
                                      }),
                                  ("saved" === _.status || "pending" === _.status) &&
                                      (0, i.jsx)(tL, { gameId: _.gameId, userId: s.id, className: tM.AT }),
                                  G &&
                                      "uploading" === _.status &&
                                      (0, i.jsx)(e8, { widgetClipId: _.key, gameId: _.gameId, className: tM.MY }),
                                  G
                                      ? ("saved" === _.status || "pending" === _.status) &&
                                        (0, i.jsx)("div", {
                                            className: tM.nP,
                                            children: (0, i.jsx)(tu, { widgetClipId: _.key, gameId: _.gameId }),
                                        })
                                      : J >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: tM.nP,
                                            children: (0, i.jsx)(tj, {
                                                isMuted: h,
                                                onToggleMuted: ee,
                                                onFullscreen: Z,
                                            }),
                                        }),
                                  (0, i.jsx)(tI.A, {
                                      children:
                                          ("saved" === _.status || "pending" === _.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tr, {
                                                      clipId: _.key,
                                                      title: _.title,
                                                      allowEditing: G,
                                                      onEditingChange: b,
                                                  }),
                                                  (0, i.jsx)(tt, {
                                                      clipId: _.key,
                                                      tags: _.tags,
                                                      allowEditing: r,
                                                      disableInteraction: d,
                                                      onEditingChange: w,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          W &&
                              (0, i.jsx)(tx, {
                                  items: y,
                                  selectedKey: _.key,
                                  onSelect: z,
                                  onAddClip: U ? ed : void 0,
                                  allowEditing: G,
                              }),
                      ],
                  })
                : (0, i.jsx)(tU, {}),
    });
}
var tH = n(896170),
    tK = n(453318),
    tX = n(168017),
    tV = n(778747),
    tY = n(321108),
    tB = n(106191),
    tz = n(404277),
    tq = n(885087),
    tJ = n(373842),
    tQ = n(67710);
function t$(e) {
    let { renderGameListItem: t } = e,
        { extraChromeEnabled: n } = tX.A.useConfig({ location: "browse_games_popout" });
    return (0, i.jsx)(tK.X2, { maxVisibleItems: 7, renderListItem: n ? t : void 0 });
}
function tZ(e) {
    let { widgetType: t, widget: n, onAddGame: l, children: a, ...s } = e,
        r = o.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: d } = (0, eW.NJ)(),
        [c, u] = o.useState(""),
        m = o.useRef(""),
        {
            options: x,
            matchSorterOptions: f,
            metadataByGameId: h,
            onSelect: p,
            endSession: I,
        } = (0, tq.R)({ surface: tV.K.PROFILE_WIDGET, query: c }),
        E = c.trim().length > 0,
        { gameIds: C, onAddGame: A } = (0, tJ.S)(t),
        N = (0, tY.A)(C),
        b = o.useCallback(
            (e) => {
                (p(e),
                    (0, j.ew)({ widgetType: t, game: { gameId: e } }),
                    eV.O.announce(v.intl.string(v.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    C.includes(e) && A(e),
                    l?.());
            },
            [t, d, l, C, A, p],
        ),
        T = o.useMemo(() => {
            let e = new Map(
                x.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: r.has(e.value) },
                ]),
            );
            if (E) return [...e.values()];
            let t = N.filter((e) => !r.has(e.id) && (0, j.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [x, r, N, E]),
        w = o.useMemo(() => {
            let e = new Map(h);
            for (let t of N) e.set(t.id, { icon: t.media?.icon, platformAvailability: t.platformAvailability });
            return e;
        }, [h, N]),
        R = o.useCallback(
            (e) => {
                let t = e.value,
                    n = null != t ? w.get(t) : void 0;
                return (0, i.jsxs)("div", {
                    className: tQ.mN,
                    children: [
                        null != t &&
                            (0, i.jsx)(tB.A, {
                                game: { id: t, icon: n?.icon },
                                iconClassName: tQ.DG,
                                withBackground: !0,
                            }),
                        (0, i.jsx)(g.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            lineClamp: 1,
                            className: tQ.EF,
                            children: e.label,
                        }),
                        (0, i.jsx)(tz.A, { platforms: n?.platformAvailability }),
                    ],
                });
            },
            [w],
        ),
        y = o.useCallback((e) => e, []),
        S = o.useMemo(() => ({ ...f, threshold: tH.Ht.rankings.CONTAINS, keys: ["label"] }), [f]),
        k = o.useCallback((e) => (E || "" === e.trim() ? T.length : (0, tH.Ht)(T, e, S).length), [E, T, S]),
        L = o.useCallback(
            (e) => {
                let n = e.target.value;
                ("" === c.trim() &&
                    "" !== n.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: k(n),
                    }),
                    u(n),
                    (m.current = n));
            },
            [c, d, t, k],
        );
    return (0, i.jsx)(V.Y, {
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
                    numResults: k(m.current),
                }));
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(e7.l, {
                className: tQ.C2,
                "aria-label": v.intl.string(v.t.uqw8wK),
                children: (0, i.jsxs)(tK.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (b(e), t(), I());
                    },
                    options: T,
                    matchSorterOptions: S,
                    customMatchSorter: E ? y : void 0,
                    children: [
                        (0, i.jsx)(tK.a3, {
                            label: v.intl.string(v.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: v.intl.string(v.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: L,
                        }),
                        (0, i.jsx)(t$, { renderGameListItem: R }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function t0(e) {
    let { disabled: t, ...n } = e,
        l = o.useRef(null);
    return (0, i.jsx)(tZ, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(y.m, {
                text: v.intl.string(v.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(eP.K, {
                    buttonRef: l,
                    variant: "secondary",
                    size: "sm",
                    icon: eD.T,
                    "aria-label": v.intl.string(v.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function t1(e) {
    let t = o.useRef(null);
    return (0, i.jsx)(tZ, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(E.D, {
                innerRef: t,
                className: tQ.cV,
                "aria-label": v.intl.string(v.t.PYyENc),
                ...e,
                children: (0, i.jsx)(td.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
var t2 = n(61881);
let t8 = o.createContext(null);
function t5(e) {
    let { widgetType: t, children: n } = e,
        l = (0, u.bG)([t2.A], () => {
            let e = t2.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, j.cv)(t);
            return n.games.length > i;
        }),
        [a, s] = o.useState(l),
        r = o.useMemo(() => ({ expanded: a, setExpanded: s }), [a]);
    return (0, i.jsx)(t8.Provider, { value: r, children: n });
}
function t7() {
    let e = o.useContext(t8);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var t3 = n(67438);
function t4(e) {
    let { widget: t } = e,
        n = (0, j.cv)(t.type),
        l = 1 === n,
        a = l ? v.intl.string(v.t["3FdPBT"]) : v.intl.format(v.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? t3.O : t3.k,
        children: [
            l && (0, i.jsx)(t1, { widget: t, widgetType: t.type }),
            (0, i.jsx)(g.E, { variant: "text-xs/normal", color: "text-subtle", children: a }),
        ],
    });
}
var t9 = n(683071),
    t6 = n(312252);
function ne(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, j.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              className: t6.l,
              children: (0, i.jsx)(t9.w, {
                  type: "warning",
                  message: v.intl.formatToPlainString(v.t.Rv3wYq, { maxGames: l }),
                  role: "alert",
              }),
          });
}
var nt = n(943793),
    nn = n(192),
    ni = n(148420);
function nl(e) {
    let { games: t, user: n, widgetType: l, ...a } = e,
        { registerItemRef: s, manageFocusOnDelete: r } = (0, tc.r)();
    return (0, i.jsx)("ul", {
        className: ni.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(nt.A, {
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
function na(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, nn.r)(),
        r = s(t),
        { expanded: d, setExpanded: o } = t7(),
        c = d ? a : a.slice(0, 2),
        u = a.length > 2,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nl, { ...e, games: c }),
                u && (0, i.jsx)(A, { expanded: d, onClick: () => o((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(ne, { widgetType: t, gameCount: a.length }),
                  (0, i.jsx)(tc.B, { emptyListFallbackRef: r, children: m }),
              ],
          })
        : m;
}
function ns(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, i.jsx)(na, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t4, { widget: n }),
    });
}
function nr(e) {
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
                ? (0, i.jsx)(nt.A, {
                      user: t,
                      widgetType: n.type,
                      game: o,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t4, { widget: n }),
    });
}
var nd = n(793693);
function no(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nd.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nc = n(675816),
    nu = n(201438),
    nm = n(788593),
    ng = n(858808),
    nx = n(365611),
    nf = n(900850);
function nh(e) {
    let { index: t, widgetType: n, game: l, coverImageUrl: a, iconImageUrl: s, gameName: r, children: d } = e,
        { manageFocusOnReorder: c } = (0, tc.r)(),
        u = o.useRef(null);
    return (0, i.jsx)(to.mG, {
        index: t,
        itemId: l.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, iconSrc: s, gameName: r, getWidth: () => u.current?.offsetWidth },
        "aria-label": v.intl.formatToPlainString(v.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, j.Un)(n, e, t),
        onEnd: () => c(l.gameId),
        className: nf.kL,
        dropBeforeClassName: nf.A,
        dropAfterClassName: nf.Ze,
        draggingClassName: nf.Id,
        children: (0, i.jsx)("div", { ref: u, className: nf.An, children: d }),
    });
}
function np(e) {
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
        { coverImageUrl: c, iconImageUrl: u, gameName: m, isLoading: g } = (0, nu.A)(t.gameId),
        { registerDragHandleRef: x } = (0, tc.r)(),
        f = a && !s,
        { isDragging: h } = (0, nc.V)((e) => ({ isDragging: e.isDragging() }));
    function p() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nm.A, {
                    imageSrc: c,
                    iconSrc: u,
                    gameName: m,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: s,
                    className: (null == c && null == u) || s ? void 0 : nx.iL,
                    hideTooltip: h,
                    coverRef: o,
                }),
                f && (0, i.jsx)(to.jV, { buttonRef: x(t.gameId), className: nf.BU }),
                f && (0, i.jsx)(ng.A, { game: t, widgetType: l, className: nf.vS, onRemove: () => d?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: nx.mD })
        : f
          ? (0, i.jsx)(nh, {
                widgetType: l,
                index: r ?? 0,
                game: t,
                coverImageUrl: c,
                iconImageUrl: u,
                gameName: m,
                children: p(),
            })
          : (0, i.jsx)("div", { className: nf.kL, children: p() });
}
function nj(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: a, disableInteraction: s } = e,
        { registerItemRef: r, manageFocusOnDelete: d } = (0, tc.r)();
    return (0, i.jsx)(no, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(np, {
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
function nI(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, nn.r)(),
        r = s(t),
        { expanded: d, setExpanded: o } = t7(),
        c = d ? a : a.slice(0, 8),
        u = a.length > 8,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nj, { ...e, games: c }),
                u && (0, i.jsx)(A, { expanded: d, onClick: () => o((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(ne, { widgetType: t, gameCount: a.length }),
                  (0, i.jsx)(tc.B, { emptyListFallbackRef: r, children: m }),
              ],
          })
        : m;
}
function nE(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nI, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t4, { widget: n }),
    });
}
function nv(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nI, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t4, { widget: n }),
    });
}
var nC = n(875620);
function nA(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: a, iconImageUrl: s, gameName: r, isLoading: d } = (0, nu.A)(t),
        o = (0, u.bG)([t2.A], () => t2.A.suggestedFetchIsLoading),
        c = v.intl.formatToPlainString(v.t["3mb1s5"], { game: r });
    return d || o
        ? (0, i.jsx)("div", { className: nx.mD })
        : (0, i.jsx)(y.m, {
              text: c,
              ariaHidden: !0,
              children: (0, i.jsxs)(E.D, {
                  className: nC.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, i.jsx)(nm.A, {
                          className: nC.Iv,
                          imageSrc: a,
                          iconSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(td.PlusLargeIcon, { size: "md", className: nC.Xv, color: em.A.colors.WHITE }),
                  ],
              }),
          });
}
function nN(e) {
    let { userId: t, widgetType: n, ...l } = e,
        { games: a, onAddGame: s } = (0, tJ.S)(n),
        { setExpanded: r } = t7(),
        { trackUserProfileEditAction: d } = (0, eW.NJ)(),
        c = o.useCallback(
            (e) => {
                (s(e),
                    r(!0),
                    (0, j.ew)({ widgetType: n, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: n }));
            },
            [s, n, d, r],
        );
    return (0, i.jsx)(tE.A, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: nC.Vg,
            children: a.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nA, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nb = n(870961);
function nT(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case e_.x.FAVORITE_GAMES:
            return (0, i.jsx)(nr, { widget: t, ...n });
        case e_.x.CURRENT_GAMES:
            return (0, i.jsx)(ns, { widget: t, ...n });
        case e_.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nv, { widget: t, ...n });
        case e_.x.PLAYED_GAMES:
            return (0, i.jsx)(nE, { widget: t, ...n });
        default:
            return null;
    }
}
function nw(e) {
    let { widget: t, user: n, allowEditing: l, disableInteraction: a, ...s } = e,
        { setExpanded: r } = t7(),
        { shouldShowSuggestions: d, handleDismissSuggestions: c } = (function (e) {
            let [t, n] = o.useState(!1),
                i = eK(e.type),
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
    return (0, i.jsx)(nT, {
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
                          t0,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => r(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nN, { userId: n.id, widgetType: t.type, onDismiss: c, className: nb.r }),
        ...s,
    });
}
function nR(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(t5, { widgetType: t.type, children: (0, i.jsx)(nw, { widget: t, ...n }) });
}
function ny(e) {
    let { widget: t, ...n } = e;
    return t instanceof l.R
        ? (0, i.jsx)(d.A, { widget: t, ...n })
        : t instanceof r.Tu
          ? (0, i.jsx)(ek, { widget: t, ...n })
          : (0, s.fu)(t)
            ? (0, i.jsx)(nR, { widget: t, ...n })
            : t instanceof a.kM
              ? (0, i.jsx)(tW, { widget: t, ...n })
              : null;
}
