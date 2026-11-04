n.d(t, { u: () => nw });
var i = n(477900),
    l = n(633075),
    a = n(646976),
    s = n(289173),
    r = n(210598),
    o = n(58216),
    d = n(582128),
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
            variant: "body-sm/medium",
            color: "none",
            children: n ? v.intl.string(v.t["6MwJo/"]) : v.intl.string(v.t.lBeKY2),
        }),
    });
}
var b = n(503698),
    N = n.n(b),
    y = n(43990),
    T = n(241326),
    R = n(33969),
    w = n(866665),
    k = n(245604),
    S = n(601089);
function L(e) {
    let { label: t, onClick: n, className: l } = e;
    return (0, i.jsx)(w.m, {
        text: t,
        children: (0, i.jsxs)(E.D, {
            className: N()(S.kL, l),
            "aria-label": t,
            onClick: n,
            children: [
                (0, i.jsx)("div", { className: S.n8 }),
                (0, i.jsx)("div", { className: S.zc, children: (0, i.jsx)(k.U, { size: "sm" }) }),
                (0, i.jsx)("div", { className: S.n8 }),
            ],
        }),
    });
}
var _ = n(34011),
    P = n(448766),
    D = n(770178);
let O = d.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function G(e) {
    let { children: t } = e,
        [n, l] = d.useState(!1),
        [a, s] = d.useState(!1),
        [r] = d.useState(() => new Set()),
        o = d.useCallback(
            (e, t) => {
                (t ? r.add(e) : r.delete(e), s(r.size > 0));
            },
            [r],
        ),
        c = d.useMemo(
            () => ({ isExpanded: n, setIsExpanded: l, isAnyFieldClipped: a, setAnyFieldClipped: o }),
            [n, a, o],
        );
    return (0, i.jsx)(O.Provider, { value: c, children: t });
}
function M() {
    return d.useContext(O);
}
var F = n(404760),
    U = n(892572);
function K(e) {
    let { className: t, variant: n, color: l, value: a, maxLines: s, interactive: r = !0, disableMarkdown: o = !1 } = e,
        c = r ? P.d : P.j,
        { textRef: u, lineClamp: m } = (function (e, t) {
            let { isExpanded: n, setAnyFieldClipped: i } = d.useContext(O),
                l = d.useId(),
                a = d.useRef(null),
                s = d.useCallback(() => {
                    let e = a.current;
                    null != e && i(l, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [l, i]);
            return (
                (0, D.g)(a, s, [n, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                d.useEffect(() => () => i(l, !1), [l, i]),
                { textRef: a, lineClamp: n ? void 0 : e }
            );
        })(s, a);
    return (0, i.jsx)(g.E, {
        ref: u,
        className: N()(U.YD, { [U.Lq]: s > 1 }, t),
        variant: n,
        color: l,
        lineClamp: m,
        children: o ? a : c(a),
    });
}
function W(e) {
    let {
            value: t,
            placeholder: n,
            variant: l,
            color: a,
            onCommit: s,
            maxLength: r,
            maxLines: o,
            growWidth: c,
            disableMarkdown: u,
        } = e,
        m = d.useCallback((e) => s(e.trim()), [s]),
        { isExpanded: g } = M(),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(K, { interactive: !1, variant: l, color: a, value: t, maxLines: o, disableMarkdown: u });
    return (0, i.jsx)("div", {
        className: N()(F.kL, U.ZZ, { [F.oE]: 1 === o, [F.CP]: c }),
        children: (0, i.jsx)(_.w, {
            value: t,
            onCommit: m,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: 1 !== o,
            paddingBlock: "md",
            paddingInline: 1 === o ? "sm" : "md",
            preview: x,
            placeholder: n,
            label: n,
            maxLength: r,
            maxRows: 1 === o || g ? void 0 : o,
            textVariant: l,
            scrollIntoViewOnFocus: !0,
        }),
    });
}
function H(e) {
    return e.canEdit
        ? (0, i.jsx)(W, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(K, {
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
        r = d.useRef(0),
        [o, c] = d.useState(null),
        [u, m] = d.useState(null),
        g = (0, Z.A)(s),
        x = d.useCallback(() => {
            ((r.current = r.current + 1), c(null), m(null));
        }, []),
        f = d.useCallback(
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
        h = d.useCallback(
            (e) => {
                var t, n;
                let i,
                    l,
                    { imageUri: a, file: s, transform: r } = e,
                    o = (0, en.aU)(a);
                o.size > 0xa00000
                    ? (0, Q.P0)({ text: v.intl.string(v.t.YbdEFK), variant: "critical" })
                    : f(
                          a,
                          new File(
                              [o],
                              ((t = s.name),
                              (n = o.type),
                              (i = (0, et.B)(n) ?? "png"),
                              (l = (0, ei.kh)(t)),
                              `${"" !== l ? l : "image"}.${i}`),
                              { type: o.type },
                          ),
                          s,
                          r,
                      );
            },
            [f],
        );
    return {
        cropAndUpload: d.useCallback(
            (e, s, r) => {
                let o = a?.();
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
                                cropAspectRatio: o,
                                onCrop: h,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [h, t, l, a],
        ),
        previewUri: o,
        cancelUpload: x,
        getLastEdit: d.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var er = n(652215),
    eo = n(339984),
    ed = n(148548);
function ec() {
    return (0, i.jsx)(L, {
        label: v.intl.string(v.t.gQmDk4),
        onClick: function () {
            (0, j.AD)((e) => new r.Tu({ ...e, sections: [(0, r.K)(), ...e.sections] }));
        },
        className: ed.GU,
    });
}
function eu(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a } = e,
        s = d.useRef(null),
        o = d.useRef(null),
        u = d.useRef(null);
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
    let f = d.useCallback(() => {
            let e = u.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: h,
            previewUri: p,
            cancelUpload: I,
            getLastEdit: E,
        } = es({
            uploadType: eo.HL.PERSONAL_WIDGET_COVER,
            returnRef: o,
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
    let w = null != p,
        k = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        S = null != n.image || w,
        L = S || a,
        _ = E(n.image);
    return (0, i.jsx)(y.N, {
        theme: S ? er.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: u,
                className: N()(ed.kL, { [ed.Vp]: L }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: ed.El,
                              children: [
                                  (0, i.jsx)(X.A, {
                                      cropAndUpload: h,
                                      imageInputRef: s,
                                      className: ed.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: p,
                                      editVariant: "tooltip",
                                  }),
                                  S && k ? (0, i.jsx)("div", { className: ed.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(R.A, {
                              className: ed.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(J, {
                                            lastEdit: _,
                                            buttonRef: o,
                                            disabled: w,
                                            cropAndUpload: h,
                                            onChangeImage: A,
                                        })
                                      : null,
                                  (0, i.jsx)(R.Y, {
                                      icon: T.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: S ? v.intl.string(v.t.RyK5Ww) : v.intl.string(v.t.g2jVww),
                                      onClick: S ? C : b,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: N()(ed.hQ, e, { [ed.Vp]: L }),
                        children: [
                            (0, i.jsx)(H, {
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
                            (0, i.jsx)(H, {
                                canEdit: a,
                                variant: "body-sm/medium",
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
            (0, i.jsx)(g.E, { variant: "body-sm/medium", color: "text-muted", children: v.intl.string(v.t["9AY+/x"]) }),
        ],
    });
}
function ef(e) {
    let { index: t, userId: n, field: l, canEdit: a, onFieldChange: s, onFieldRemove: r } = e,
        {
            cropAndUpload: o,
            previewUri: d,
            cancelUpload: c,
            getLastEdit: u,
        } = es({
            uploadType: eo.HL.PERSONAL_WIDGET_FIELD,
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
                              previewUri: d,
                              cropAndUpload: o,
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
                    (0, i.jsx)(H, {
                        canEdit: a,
                        variant: "body-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: v.intl.formatToPlainString(v.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            s(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, i.jsx)(H, {
                        canEdit: a,
                        variant: "body-xs/normal",
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
    function o(e) {
        (0, j.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== c.K.FIELDS) return t;
            let i = [...t.sections];
            return ((i[l] = { ...n, fields: e(n.fields) }), new r.Tu({ ...t, sections: i }));
        });
    }
    function d(e, t) {
        o((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let a = [...n];
            return ((a[i] = t(l)), a);
        });
    }
    function u(e) {
        o((t) => t.filter((t) => t.key !== e));
    }
    function m() {
        o((e) => [...e, (0, r.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!a) return null;
        if (!s)
            return (0, i.jsx)("div", { className: eg.kL, children: (0, i.jsx)(ex, { alwaysVisible: !0, onClick: m }) });
    }
    let g = n.fields.map((e, n) =>
            (0, i.jsx)(ef, { index: n, userId: t, field: e, canEdit: a, onFieldChange: d, onFieldRemove: u }, e.key),
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
                          o((e) => [...e, (0, r.yL)(), (0, r.yL)()]);
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
    eb = n(877068);
let eN = { section: er.JJy.PERSONAL_WIDGET };
function ey(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eb.wx,
        children: [
            (0, i.jsx)(f.A, { size: "xs", className: eb.nr }),
            (0, i.jsx)(H, {
                canEdit: n,
                variant: "body-sm/medium",
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
function eT(e) {
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
              className: eb.hc,
              children: [
                  (0, i.jsx)(m.h, { color: "nitro-pink", className: eb.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eb.LK,
                      children: [
                          (0, i.jsx)(g.E, {
                              variant: "body-xs/semibold",
                              color: "text-strong",
                              children: v.intl.string(v.t.WOPVdz),
                          }),
                          (0, i.jsx)(g.E, {
                              variant: "body-xs/medium",
                              color: "text-default",
                              children: v.intl.string(v.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)(x.A, {
                      size: "sm",
                      subscriptionTier: eA.pe.TIER_2,
                      defaultTextOverride: v.intl.string(v.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eN,
                  }),
              ],
          });
}
function ew() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = M();
    return e || t ? (0, i.jsx)(A, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function ek(e) {
    let { widget: t, user: n, allowEditing: l, disableInteraction: a, index: s, trailingContent: r } = e,
        o = l && !0 !== a,
        u = d.useRef(null),
        m = d.useMemo(() => t.sections.some((e) => e.type === c.K.COVER), [t.sections]);
    return (0, i.jsxs)(I.A, {
        userId: n.id,
        widget: t,
        allowEditing: l,
        disableInteraction: a,
        index: s,
        trailingContent: r,
        className: eb.Nr,
        headerClassName: eb.JE,
        children: [
            (0, i.jsxs)("div", {
                ref: u,
                className: eb.kL,
                children: [
                    (0, i.jsx)(ey, { widget: t, canEdit: o }),
                    o && !m ? (0, i.jsx)(ec, {}) : null,
                    t.sections.map((e, t) =>
                        (0, i.jsx)(
                            eT,
                            { userId: n.id, section: e, sectionIndex: t, canEdit: o, hasCoverSection: m },
                            t,
                        ),
                    ),
                    (0, i.jsx)(ew, {}),
                    o ? (0, i.jsx)(eR, {}) : null,
                ],
            }),
            !0 !== a ? (0, i.jsx)(eC, { userId: n.id, targetElementRef: u }) : null,
        ],
    });
}
function eS(e) {
    return (0, i.jsx)(G, { children: (0, i.jsx)(ek, { ...e }) });
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
    eK = n(183555),
    eW = n(321191);
function eH(e) {
    return (0, u.bG)(
        [eE.default, eW.A],
        () => (eW.A.getUserProfile(eE.default.getId())?.widgets ?? []).some((t) => t.type === e),
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
        o = "exporting";
    try {
        let l = await (0, ez.VO)(e, { analyticsLocations: a });
        if (i.signal.aborted || !(0, j.iu)(t)) return;
        ((o = "uploading"), e1(t, l).catch(() => {}));
        let d = new File([l], "clip.mp4", { type: "video/mp4" }),
            c = await ea.A.uploadWidgetClip(d, { onProgress: (e) => (0, e$.Fj)(t, e), signal: i.signal });
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
                stage: o,
                clipType: e.type,
                crop: e.editMetadata?.crop,
                trackTypes: e.tracks?.map((e) => e.type),
            }),
            (0, Q.P0)({ text: v.intl.string(v.t.iufib1), variant: "critical" }),
            r({
                action: "exporting" === o ? "CLIP_EXPORT_FAILED" : "CLIP_UPLOAD_FAILED",
                widgetEdited: e_.x.CLIPS_GALLERY,
                gameId: n,
            }));
    } finally {
        (0, e$.cG)(t);
    }
}
function e8(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: a } = (0, eK.NJ)(),
        s = v.intl.string(v.t["4z6ldH"]);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(w.m, {
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
var e4 = n(305866),
    e7 = n(123181),
    e3 = n(229087),
    e9 = n(394245),
    e6 = n(382701),
    te = n(408519);
function tt(e) {
    let { clipId: t, tags: n, allowEditing: l, disableInteraction: a = !1, onEditingChange: s } = e,
        r = l && !a,
        o = d.useMemo(() => n?.filter((e) => null != (0, e9.W)(e)) ?? [], [n]),
        c = o.length > 0,
        u = r && o.length < 20,
        { trackUserProfileEditAction: m } = (0, eK.NJ)(),
        x = d.useRef(null),
        f = d.useRef(new Map()),
        h = d.useRef(null),
        p = d.useRef(null),
        I = d.useRef(null),
        [E, C] = d.useState(o.length),
        [A, b] = d.useState(!1),
        [N, y] = d.useState(!1),
        T = A || N;
    (d.useEffect(() => {
        s(T);
    }, [T, s]),
        d.useEffect(() => () => s(!1), [s]));
    let R = d.useCallback(
            (e, n) => {
                ((0, j.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: e_.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        w = d.useCallback(() => {
            (y(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: e_.x.CLIPS_GALLERY }));
        }, [m]),
        k = d.useCallback(() => y(!1), []),
        S = d.useCallback(
            (e) => {
                ((0, j.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: e_.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        L = d.useCallback(() => {
            if (A) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === o.length) return void C(o.length);
            let t = I.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = o.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function a(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (a(o.length, i)) return void C(o.length);
            let s = i - (n + 4),
                r = 0;
            for (; r < o.length && a(r + 1, s);) r++;
            C(r);
        }, [o, A]);
    (0, D.g)(x, L);
    let _ = o.length - E,
        P = _ > 0,
        O = d.useCallback(
            (e) => {
                (1 === _ && b(!1), S(e));
            },
            [S, _],
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
                          o.map((e) =>
                              (0, i.jsx)(
                                  e3.A,
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
                                  variant: "footnote/medium",
                                  color: "none",
                                  children: `+${o.length}`,
                              }),
                          }),
                      ],
                  }),
                  c &&
                      (0, i.jsx)("ul", {
                          className: te.nM,
                          "aria-label": v.intl.string(v.t["4Rq3a7"]),
                          children: o
                              .slice(0, E)
                              .map((e) =>
                                  (0, i.jsx)(e3.A, { tag: e, variant: "filled", onRemove: r ? () => S(e) : void 0 }, e),
                              ),
                      }),
                  P &&
                      (0, i.jsx)(tn, {
                          buttonRef: p,
                          numHidden: _,
                          isOpen: A,
                          onOpenChange: b,
                          disableInteraction: a,
                          children: o.map((e) =>
                              (0, i.jsx)(e3.A, { tag: e, className: te.Hl, onRemove: r ? () => O(e) : void 0 }, e),
                          ),
                      }),
                  u && (0, i.jsx)(e7.A, { tags: o, onTagsChange: R, onOpen: w, onClose: k, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function tn(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: a, disableInteraction: s, children: r } = e,
        o = v.intl.string(v.t.pWHvBI);
    return s
        ? (0, i.jsx)("div", {
              className: `${te.lv} ${e6.r9}`,
              ref: t,
              children: (0, i.jsx)(g.E, { variant: "footnote/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(V.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => a(!0),
              onRequestClose: () => a(!1),
              renderPopout: () =>
                  (0, i.jsx)(e4.l, {
                      className: te.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: te.ns, children: r }),
                  }),
              children: (e) =>
                  (0, i.jsx)(w.m, {
                      text: o,
                      ariaHidden: !0,
                      children: (0, i.jsx)(E.D, {
                          ...e,
                          innerRef: t,
                          "aria-label": o,
                          "aria-expanded": l,
                          className: te.lv,
                          children: (0, i.jsx)(g.E, { variant: "footnote/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var ti = n(3026),
    tl = n(936026);
function ta(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(g.E, {
        variant: "body-sm/medium",
        color: "text-overlay-light",
        className: N()(tl.Qw, { [tl.qf]: n }),
        children: (0, i.jsx)(ti.A, { children: t }),
    });
}
function ts(e) {
    let { clipId: t, title: n, onEditingChange: l } = e,
        { trackUserProfileEditAction: a } = (0, eK.NJ)(),
        s = d.useCallback(
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
        d.useEffect(() => (l(!1), () => l(!1)), [l]),
        (0, i.jsx)("div", {
            className: N()(F.kL, F.oE, tl.ZZ),
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
                    className: N()(tl.$, tl.TG),
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
var to = n(663341),
    td = n(451395),
    tc = n(823016);
function tu(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: a } = (0, eK.NJ)(),
        s = v.intl.string(v.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(w.m, {
            text: s,
            ariaHidden: !0,
            children: (0, i.jsx)(eP.K, {
                "aria-label": s,
                icon: T.TrashIcon,
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
        { registerDragHandleRef: r, manageFocusOnReorder: o } = (0, tc.r)(),
        { trackUserProfileEditAction: c } = (0, eK.NJ)(),
        u = d.useRef(null),
        m = d.useCallback(
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
                    className: N()(tm.Vs, { [tm.wH]: l }),
                    "aria-pressed": l,
                    "aria-label": v.intl.formatToPlainString(v.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(e5.A, { item: t, ringSize: "sm", className: tm.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(td.jV, { buttonRef: r(t.key), className: tm.BU }),
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
            ? (0, i.jsx)(td.mG, {
                  index: n,
                  itemId: t.key,
                  listType: e_.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": v.intl.formatToPlainString(v.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: m,
                  onEnd: () => o(t.key),
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
        o = (0, i.jsxs)("ul", {
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
                                    children: (0, i.jsx)(to.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return s ? (0, i.jsx)(tc.B, { emptyListFallbackRef: null, children: o }) : o;
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
            (0, i.jsx)(w.m, {
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
            (0, i.jsx)(w.m, {
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
        a = d.useCallback(() => n(t), [t, n]);
    return (0, i.jsx)(w.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsxs)(E.D, {
            className: tv.Vs,
            "aria-label": l,
            onClick: a,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tv.xn, loading: "lazy" }),
                (0, i.jsx)(to.PlusLargeIcon, { size: "sm", color: "currentColor", className: tv.Xv }),
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
var tb = n(769015),
    tN = n(409626),
    ty = n(692969),
    tT = n(202163),
    tR = n(207803),
    tw = n(591179),
    tk = n(485745),
    tS = n(308766);
function tL(e) {
    let { gameId: t, userId: n, className: l } = e,
        { gameRecord: a } = (0, tT.Ay)(t),
        s = !(0, tw.X)("WidgetClipGameIcon"),
        r = (0, tk.A)(s),
        o = (0, ty.A)({
            location: "WidgetClipGameIcon",
            applicationId: t,
            source: tN.GameProfileSources.UserProfile,
            sourceUserId: n,
        }),
        c = d.useCallback(
            (e) => {
                if (r) {
                    (e.preventDefault(), e.stopPropagation(), (0, tR.VQ)());
                    return;
                }
                o?.(e);
            },
            [r, o],
        ),
        u = a?.name;
    if (null == u) return null;
    let m = (0, i.jsx)(tb.A, { game: a, size: tb.M.XSMALL, allowUnknownGameIcon: !1 });
    return (0, i.jsx)(w.m, {
        text: u,
        ariaHidden: !0,
        children:
            null == o
                ? (0, i.jsx)(w.m, {
                      text: u,
                      ariaHidden: !0,
                      children: (0, i.jsx)("div", { className: l, children: m }),
                  })
                : (0, i.jsx)(E.D, {
                      className: N()(tS.v, l),
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
    return (0, i.jsx)(w.m, {
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
            variant: "body-xs/normal",
            color: "text-subtle",
            children: v.intl.format(v.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tK(e) {
    let t,
        l,
        { widget: a, user: s, allowEditing: r, disableInteraction: o, ...c } = e,
        [m, g] = d.useState(!1),
        [x, f] = d.useState(!1),
        [h, p] = d.useState(!0),
        C = (0, u.bG)([eO.Ay], () => eO.Ay.useReducedMotion),
        A = (0, eL.K)(f, 0.5),
        [b, N] = d.useState(!1),
        [y, T] = d.useState(!1),
        R = d.useRef(void 0),
        w = (0, tD.A)(a),
        k =
            ((t = (0, u.yK)([tO.Ay], () => Object.values(tO.Ay.getClips()))),
            (l = (0, u.bG)([tO.Ay], () => tO.Ay.getSettings().showPovClipsInGallery)),
            d.useMemo(() => {
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
        [S, L] = d.useState(null),
        _ = w.find((e) => e.key === S) ?? w[0],
        P = (0, eM.sw)(),
        { trackUserProfileAction: D, trackUserProfileEditAction: O } = (0, eK.NJ)(),
        G = r && !0 !== o,
        M = 0 === w.length,
        F = w.length >= 4,
        U = G && P && !F,
        K = G || w.length > 1,
        [W] = d.useState(() => k.length >= 3),
        [H, X] = d.useState(!1),
        V = eH(a.type),
        Y = U && !V && W && !H && k.length > 0,
        B = d.useCallback(() => {
            (X(!0), O({ action: "DISMISS_SUGGESTED_CLIPS", widgetEdited: e_.x.CLIPS_GALLERY }));
        }, [O]),
        z = d.useCallback(
            (e) => {
                (L(e), e !== _?.key && D({ action: "SELECT_CLIP", widgetType: e_.x.CLIPS_GALLERY }));
            },
            [_?.key, D],
        ),
        q = d.useMemo(() => (!0 === o ? [] : w.filter(tD.K)), [w, o]),
        J = null != _ ? q.findIndex((e) => e.key === _.key) : -1,
        Z = d.useCallback(() => {
            J < 0 ||
                (D({ action: "PRESS_PLAY_CLIP", widgetType: e_.x.CLIPS_GALLERY }),
                (0, tP.A)({ clips: q, startingIndex: J }));
        }, [q, J, D]),
        ee = d.useCallback(() => {
            let e = !h;
            (p(e), D({ action: e ? "MUTE_CLIP_PREVIEW" : "UNMUTE_CLIP_PREVIEW", widgetType: e_.x.CLIPS_GALLERY }));
        }, [h, D]),
        et = d.useCallback(() => {
            if (J < 0) return;
            let e = q[(J + 1) % q.length];
            null != e && L(e.key);
        }, [q, J]),
        en = J >= 0 && !C && x,
        ei = (en || m) && !b && !y,
        el = d.useCallback(() => {
            J < 0 ||
                en ||
                (R.current = window.setTimeout(() => {
                    (g(!0), D({ action: "HOVER_PLAY_CLIP", widgetType: e_.x.CLIPS_GALLERY }));
                }, 150));
        }, [en, J, D]),
        ea = d.useCallback(() => {
            (window.clearTimeout(R.current), g(!1));
        }, []);
    (d.useEffect(() => () => window.clearTimeout(R.current), []),
        d.useEffect(() => {
            (0, eF.v)();
        }, []));
    let es = d.useCallback(
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
        er = d.useCallback((e) => es(e, eZ.IE.SUGGESTED), [es]),
        eo = d.useCallback(() => {
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
        disableInteraction: o,
        headerTitle: (0, j.L)(a),
        headerSubtitle: G && !M ? v.intl.format(v.t.pb2Was, { numClips: 4 }) : void 0,
        headerActionButtons: U && M ? [(0, i.jsx)(tF, { onClick: eo }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            Y &&
            (0, i.jsx)("div", {
                className: tM.$k,
                children: (0, i.jsx)(tA, { clips: k, onAddClip: er, onDismiss: B }),
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
                                      !b &&
                                      !y &&
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
                                                      onEditingChange: N,
                                                  }),
                                                  (0, i.jsx)(tt, {
                                                      clipId: _.key,
                                                      tags: _.tags,
                                                      allowEditing: r,
                                                      disableInteraction: o,
                                                      onEditingChange: T,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          K &&
                              (0, i.jsx)(tx, {
                                  items: w,
                                  selectedKey: _.key,
                                  onSelect: z,
                                  onAddClip: U ? eo : void 0,
                                  allowEditing: G,
                              }),
                      ],
                  })
                : (0, i.jsx)(tU, {}),
    });
}
var tW = n(896170),
    tH = n(453318),
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
    return (0, i.jsx)(tH.X2, { maxVisibleItems: 7, renderListItem: n ? t : void 0 });
}
function tZ(e) {
    let { widgetType: t, widget: n, onAddGame: l, children: a, ...s } = e,
        r = d.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: o } = (0, eK.NJ)(),
        [c, u] = d.useState(""),
        m = d.useRef(""),
        {
            options: x,
            matchSorterOptions: f,
            metadataByGameId: h,
            onSelect: p,
            endSession: I,
        } = (0, tq.R)({ surface: tV.K.PROFILE_WIDGET, query: c }),
        E = c.trim().length > 0,
        { gameIds: C, onAddGame: A } = (0, tJ.S)(t),
        b = (0, tY.A)(C),
        N = d.useCallback(
            (e) => {
                (p(e),
                    (0, j.ew)({ widgetType: t, game: { gameId: e } }),
                    eV.O.announce(v.intl.string(v.t.q0U3DE)),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    C.includes(e) && A(e),
                    l?.());
            },
            [t, o, l, C, A, p],
        ),
        y = d.useMemo(() => {
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
        T = d.useMemo(() => {
            let e = new Map(h);
            for (let t of b) e.set(t.id, { icon: t.media?.icon, platformAvailability: t.platformAvailability });
            return e;
        }, [h, b]),
        R = d.useCallback(
            (e) => {
                let t = e.value,
                    n = null != t ? T.get(t) : void 0;
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
                            variant: "body-md/medium",
                            color: "currentColor",
                            lineClamp: 1,
                            className: tQ.EF,
                            children: e.label,
                        }),
                        (0, i.jsx)(tz.A, { platforms: n?.platformAvailability }),
                    ],
                });
            },
            [T],
        ),
        w = d.useCallback((e) => e, []),
        k = d.useMemo(() => ({ ...f, threshold: tW.Ht.rankings.CONTAINS, keys: ["label"] }), [f]),
        S = d.useCallback((e) => (E || "" === e.trim() ? y.length : (0, tW.Ht)(y, e, k).length), [E, y, k]),
        L = d.useCallback(
            (e) => {
                let n = e.target.value;
                ("" === c.trim() &&
                    "" !== n.trim() &&
                    o({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: S(n),
                    }),
                    u(n),
                    (m.current = n));
            },
            [c, o, t, S],
        );
    return (0, i.jsx)(V.Y, {
        ...s,
        onRequestOpen: () => {
            (o({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (m.current = ""));
        },
        onRequestClose: () => {
            (I(),
                o({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: m.current.trim().length,
                    numResults: S(m.current),
                }));
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(e4.l, {
                className: tQ.C2,
                "aria-label": v.intl.string(v.t.uqw8wK),
                children: (0, i.jsxs)(tH.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (N(e), t(), I());
                    },
                    options: y,
                    matchSorterOptions: k,
                    customMatchSorter: E ? w : void 0,
                    children: [
                        (0, i.jsx)(tH.a3, {
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
        l = d.useRef(null);
    return (0, i.jsx)(tZ, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(w.m, {
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
    let t = d.useRef(null);
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
                children: (0, i.jsx)(to.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
var t2 = n(61881);
let t8 = d.createContext(null);
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
        [a, s] = d.useState(l),
        r = d.useMemo(() => ({ expanded: a, setExpanded: s }), [a]);
    return (0, i.jsx)(t8.Provider, { value: r, children: n });
}
function t4() {
    let e = d.useContext(t8);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var t7 = n(67438);
function t3(e) {
    let { widget: t } = e,
        n = (0, j.cv)(t.type),
        l = 1 === n,
        a = l ? v.intl.string(v.t["3FdPBT"]) : v.intl.format(v.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? t7.O : t7.k,
        children: [
            l && (0, i.jsx)(t1, { widget: t, widgetType: t.type }),
            (0, i.jsx)(g.E, { variant: "body-xs/normal", color: "text-subtle", children: a }),
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
        { expanded: o, setExpanded: d } = t4(),
        c = o ? a : a.slice(0, 2),
        u = a.length > 2,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nl, { ...e, games: c }),
                u && (0, i.jsx)(A, { expanded: o, onClick: () => d((e) => !e) }),
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
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...o } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...o,
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
                : (0, i.jsx)(t3, { widget: n }),
    });
}
function nr(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...o } = e,
        d = n.games[0];
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...o,
        children:
            null != d
                ? (0, i.jsx)(nt.A, {
                      user: t,
                      widgetType: n.type,
                      game: d,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t3, { widget: n }),
    });
}
var no = n(793693);
function nd(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: no.V,
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
    let { index: t, widgetType: n, game: l, coverImageUrl: a, iconImageUrl: s, gameName: r, children: o } = e,
        { manageFocusOnReorder: c } = (0, tc.r)(),
        u = d.useRef(null);
    return (0, i.jsx)(td.mG, {
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
        children: (0, i.jsx)("div", { ref: u, className: nf.An, children: o }),
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
            onRemoveGame: o,
            coverRef: d,
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
                    coverRef: d,
                }),
                f && (0, i.jsx)(td.jV, { buttonRef: x(t.gameId), className: nf.BU }),
                f && (0, i.jsx)(ng.A, { game: t, widgetType: l, className: nf.vS, onRemove: () => o?.(t.gameId) }),
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
        { registerItemRef: r, manageFocusOnDelete: o } = (0, tc.r)();
    return (0, i.jsx)(nd, {
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
                onRemoveGame: o,
            }),
    });
}
function nI(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, nn.r)(),
        r = s(t),
        { expanded: o, setExpanded: d } = t4(),
        c = o ? a : a.slice(0, 8),
        u = a.length > 8,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nj, { ...e, games: c }),
                u && (0, i.jsx)(A, { expanded: o, onClick: () => d((e) => !e) }),
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
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...o } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...o,
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
                : (0, i.jsx)(t3, { widget: n }),
    });
}
function nv(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...o } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...o,
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
                : (0, i.jsx)(t3, { widget: n }),
    });
}
var nC = n(875620);
function nA(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: a, iconImageUrl: s, gameName: r, isLoading: o } = (0, nu.A)(t),
        d = (0, u.bG)([t2.A], () => t2.A.suggestedFetchIsLoading),
        c = v.intl.formatToPlainString(v.t["3mb1s5"], { game: r });
    return o || d
        ? (0, i.jsx)("div", { className: nx.mD })
        : (0, i.jsx)(w.m, {
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
                      (0, i.jsx)(to.PlusLargeIcon, { size: "md", className: nC.Xv, color: em.A.colors.WHITE }),
                  ],
              }),
          });
}
function nb(e) {
    let { userId: t, widgetType: n, ...l } = e,
        { games: a, onAddGame: s } = (0, tJ.S)(n),
        { setExpanded: r } = t4(),
        { trackUserProfileEditAction: o } = (0, eK.NJ)(),
        c = d.useCallback(
            (e) => {
                (s(e),
                    r(!0),
                    (0, j.ew)({ widgetType: n, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: n }));
            },
            [s, n, o, r],
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
var nN = n(870961);
function ny(e) {
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
function nT(e) {
    let { widget: t, user: n, allowEditing: l, disableInteraction: a, ...s } = e,
        { setExpanded: r } = t4(),
        { shouldShowSuggestions: o, handleDismissSuggestions: c } = (function (e) {
            let [t, n] = d.useState(!1),
                i = eH(e.type),
                l = (0, j.uA)(e);
            return {
                shouldShowSuggestions: !i && !t && !l,
                handleDismissSuggestions: d.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        u = l && !a,
        m = u && o,
        g = (0, j.L)(t),
        x = (0, j.FM)(t, { showEditingControls: u }),
        f = (0, j.uA)(t),
        h = 1 === (0, j.cv)(t.type);
    return (0, i.jsx)(ny, {
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
        trailingContent: m && (0, i.jsx)(nb, { userId: n.id, widgetType: t.type, onDismiss: c, className: nN.r }),
        ...s,
    });
}
function nR(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(t5, { widgetType: t.type, children: (0, i.jsx)(nT, { widget: t, ...n }) });
}
function nw(e) {
    let { widget: t, ...n } = e;
    return t instanceof l.R
        ? (0, i.jsx)(o.A, { widget: t, ...n })
        : t instanceof r.Tu
          ? (0, i.jsx)(eS, { widget: t, ...n })
          : (0, s.fu)(t)
            ? (0, i.jsx)(nR, { widget: t, ...n })
            : t instanceof a.kM
              ? (0, i.jsx)(tK, { widget: t, ...n })
              : null;
}
