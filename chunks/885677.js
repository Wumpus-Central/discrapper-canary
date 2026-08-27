n.d(t, { A: () => nz, u: () => nH });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(885574),
    c = n(834730),
    d = n(429913),
    u = n(277984),
    g = n(840387),
    m = n(201718),
    x = n(615405),
    f = n(633075),
    h = n(646976),
    p = n(289173),
    I = n(210598),
    j = n(311043),
    A = n(569926),
    v = n(958805),
    E = n(61881),
    C = n(435558),
    S = n(196765),
    b = n(540185),
    y = n(282435);
let T = (0, C.sampleSize)(y.sx, y.sx.length),
    N = (0, S.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...n.filter((e) => !s.has(e)), ...T],
                wishlistStack: [...i.filter((e) => !s.has(e)), ...T],
            }),
            Object.values(b.x)))
                t().setNext(6, l);
        },
        setNext: (e, n) => {
            let i = t().getNext(e, n);
            t()._setGameIds(n, i);
            let l = t().peekNext(7, n);
            t()._setPeekedGameIds(n, l);
        },
        getNext: (e, n) => {
            let i = n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = i.slice(0, e),
                s = i.slice(e);
            return t()._setStack(n, s), l;
        },
        peekNext: (e, n) => (n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            let i = t().gameIds[n] ?? [],
                l = i.indexOf(e);
            if (-1 === l) return;
            let s = [...i];
            s.splice(l, 1);
            let r = t().getNext(1, n),
                a = t().peekNext(7, n);
            t()._setGameIds(n, [...s, ...r]), t()._setPeekedGameIds(n, [...a, ...r]);
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - i.length, n),
                s = t().peekNext(7, n);
            t()._setGameIds(n, [...i, ...l]), t()._setPeekedGameIds(n, [...s, ...l]);
        },
        remove: (e, n) => {
            let i = (n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n));
        },
        _setGameIds: (t, n) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: n } }));
        },
        _setStack: (t, n) => {
            t === b.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: n }) : e({ stack: n });
        },
        _setPeekedGameIds: (t, n) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: n } }));
        },
    }));
function k(e) {
    let { bump: t, bumpMultiple: n, gameIds: i } = N();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = N(),
            i = l.useMemo(() => n[e] ?? [], [n, e]);
        (0, A.x)(i);
        let s = (0, a.yK)([j.A], () => i.map((e) => j.A.isFetching(e)));
        l.useEffect(() => {
            for (let n of i) {
                let i = j.A.didFetchingFail(n),
                    l = j.A.hasNoData(n),
                    s = !!j.A.getGame(n),
                    r = null != j.A.getCoverImageUrl(n);
                (i || l || (s && !r)) && t(n, e);
            }
        }, [i, t, e, s]);
    })(e);
    let s = l.useMemo(() => i[e] ?? [], [i, e]),
        r = l.useCallback(
            (n) => {
                t(n, e);
            },
            [t, e],
        ),
        o = (0, a.yK)([j.A], () => s.map((e) => j.A.isFetching(e)));
    l.useEffect(() => {
        let t = s.filter((e) => {
            let t = j.A.didFetchingFail(e),
                n = j.A.hasNoData(e),
                i = !!j.A.getGame(e),
                l = null != j.A.getCoverImageUrl(e);
            return t || n || (i && !l);
        });
        t.length > 0 && n(t, e);
    }, [s, e, n, o]);
    let c = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: c, onAddGame: r };
}
var w = n(600761),
    R = n(667049),
    L = n(389667),
    O = n(520082),
    P = n(869484),
    _ = n(315629),
    D = n(465794),
    G = n(450232),
    M = n(287809),
    U = n(158045),
    W = n(735321),
    F = n(623280),
    H = n(939249),
    V = n(375708),
    B = n(954165);
function z(e) {
    let { onClick: t, expanded: n } = e;
    return (0, i.jsx)(H.D, {
        onClick: t,
        className: B.x,
        "aria-expanded": n,
        children: (0, i.jsx)(c.E, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? V.intl.string(V.t["6MwJo/"]) : V.intl.string(V.t.lBeKY2),
        }),
    });
}
var X = n(43990),
    K = n(241326),
    Y = n(33969),
    q = n(866665),
    Z = n(245604),
    J = n(601089);
function Q(e) {
    let { label: t, onClick: n, className: l } = e;
    return (0, i.jsx)(q.m, {
        text: t,
        children: (0, i.jsxs)(H.D, {
            className: r()(J.kL, l),
            "aria-label": t,
            onClick: n,
            children: [
                (0, i.jsx)("div", { className: J.n8 }),
                (0, i.jsx)("div", { className: J.zc, children: (0, i.jsx)(Z.U, { size: "sm" }) }),
                (0, i.jsx)("div", { className: J.n8 }),
            ],
        }),
    });
}
var $ = n(448766),
    ee = n(372638),
    et = n(761431),
    en = n(770178);
let ei = l.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function el(e) {
    let { children: t } = e,
        [n, s] = l.useState(!1),
        [r, a] = l.useState(!1),
        [o] = l.useState(() => new Set()),
        c = l.useCallback(
            (e, t) => {
                t ? o.add(e) : o.delete(e), a(o.size > 0);
            },
            [o],
        ),
        d = l.useMemo(
            () => ({ isExpanded: n, setIsExpanded: s, isAnyFieldClipped: r, setAnyFieldClipped: c }),
            [n, r, c],
        );
    return (0, i.jsx)(ei.Provider, { value: d, children: t });
}
var es = n(892572);
function er(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: d = !0, disableMarkdown: u = !1 } = e,
        g = d ? $.d : $.j,
        { textRef: m, lineClamp: x } = (function (e, t) {
            let { isExpanded: n, setAnyFieldClipped: i } = l.useContext(ei),
                s = l.useId(),
                r = l.useRef(null),
                a = l.useCallback(() => {
                    let e = r.current;
                    null != e && i(s, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [s, i]);
            return (
                (0, en.g)(r, a, [n, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                l.useEffect(() => () => i(s, !1), [s, i]),
                { textRef: r, lineClamp: n ? void 0 : e }
            );
        })(o, a);
    return (0, i.jsx)(c.E, {
        ref: m,
        className: r()(es.YD, { [es.Lq]: o > 1 }, t),
        variant: n,
        color: s,
        lineClamp: x,
        children: u ? a : g(a),
    });
}
function ea(e) {
    let {
            value: t,
            placeholder: n,
            variant: s,
            color: r,
            onCommit: a,
            maxLength: o,
            maxLines: c,
            growWidth: d,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => a(e.trim()), [a]),
        m = (0, et.TX)({ value: t, onCommit: g }),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(er, { interactive: !1, variant: s, color: r, value: t, maxLines: c, disableMarkdown: u }),
        f = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: d || m.isEditing,
            preview: x,
            placeholder: n,
            editButtonAriaLabel: n,
            label: n,
            maxLength: o,
            className: es.ZZ,
        };
    return 1 === c
        ? (0, i.jsx)(et.yV, { ...f, size: "compact", textVariant: s, textColor: r })
        : (0, i.jsx)(ee.f, { ...f, rows: 1, maxRows: c, textVariant: s, textColor: r });
}
function eo(e) {
    return e.canEdit
        ? (0, i.jsx)(ea, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(er, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var ec = n(326009),
    ed = n(922016),
    eu = n(980707),
    eg = n(477782),
    em = n(750943),
    ex = n(428610),
    ef = n(22231),
    eh = n(946274),
    ep = n(363195);
function eI(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e,
        o = (0, a.bG)([ep.A], () => ep.A.theme);
    function c() {
        (0, eh.AM)(t.unprocessedFile, (e, n) => s(e, n, t.transform));
    }
    return (0, i.jsx)(ed.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(X.N, {
                theme: o,
                children: (e) =>
                    (0, i.jsx)("div", {
                        className: e,
                        children: (0, i.jsx)(eu.W, {
                            "data-menu-migrated": !0,
                            navId: "personal-widget-image-edit-menu",
                            onClose: t,
                            onSelect: void 0,
                            "aria-label": V.intl.string(V.t.RWkUzH),
                            children: (0, i.jsxs)(eg.rX, {
                                children: [
                                    (0, i.jsx)(eg.Dr, {
                                        id: "change-image",
                                        label: V.intl.string(V.t.dh0LD5),
                                        action: r,
                                        icon: em.X,
                                        leadingAccessory: { type: "icon", icon: em.X },
                                    }),
                                    (0, i.jsx)(eg.Dr, {
                                        id: "reposition-image",
                                        label: V.intl.string(V.t.je0LTI),
                                        action: c,
                                        icon: ex.K,
                                        leadingAccessory: { type: "icon", icon: ex.K },
                                    }),
                                ],
                            }),
                        }),
                    }),
            });
        },
        children: (e) =>
            (0, i.jsx)(Y.Y, {
                ...e,
                ref: n,
                icon: ef.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: V.intl.string(V.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function ej(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return null == t
        ? (0, i.jsx)(Y.Y, {
              ref: n,
              icon: em.X,
              variant: "overlay-secondary",
              tooltipText: V.intl.string(V.t.dh0LD5),
              disabled: l,
              onClick: r,
          })
        : (0, i.jsx)(eI, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r });
}
var eA = n(691540),
    ev = n(857250),
    eE = n(97483),
    eC = n(192308),
    eS = n(765548),
    eb = n(229531),
    ey = n(515718),
    eT = n(741394),
    eN = n(38405);
function ek(e) {
    let { uploadType: t, returnRef: s, onUploadSuccess: r } = e,
        a = l.useRef(0),
        [o, c] = l.useState(null),
        [d, u] = l.useState(null),
        g = (0, eS.A)(r),
        m = l.useCallback(() => {
            (a.current = a.current + 1), c(null), u(null);
        }, []),
        x = l.useCallback(
            async (e, t, n, i) => {
                a.current = a.current + 1;
                let l = a.current;
                c(e);
                try {
                    let s = await v.A.uploadWidgetAsset(t);
                    if (a.current !== l) return;
                    c(null), u({ filename: s, unprocessedFile: n, transform: i }), g({ filename: s, localDataUri: e });
                } catch (e) {
                    if (a.current !== l) return;
                    c(null), (0, eA.P0)((0, ev.o)(V.intl.string(V.t.F4Neqh), eE.Ck.FAILURE)), eN.A.captureException(e);
                }
            },
            [g],
        ),
        f = l.useCallback(
            (e) => {
                var t, n;
                let i,
                    l,
                    { imageUri: s, file: r, transform: a } = e,
                    o = (0, ey.aU)(s);
                o.size > 0xa00000
                    ? (0, eA.P0)((0, ev.o)(V.intl.string(V.t.YbdEFK), eE.Ck.FAILURE))
                    : x(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (n = o.type),
                              (i = (0, eb.B)(n) ?? "png"),
                              (l = (0, eT.kh)(t)),
                              `${"" !== l ? l : "image"}.${i}`),
                              { type: o.type },
                          ),
                          r,
                          a,
                      );
            },
            [x],
        );
    return {
        cropAndUpload: l.useCallback(
            (e, l, r) => {
                (0, eC.openModalLazy)(
                    async () => {
                        let { default: a } = await Promise.all([
                            n.e("940226"),
                            n.e("655327"),
                            n.e("67702"),
                            n.e("1214"),
                            n.e("343437"),
                            n.e("858164"),
                            n.e("571470"),
                            n.e("837490"),
                            n.e("50342"),
                            n.e("463726"),
                            n.e("93513"),
                            n.e("779149"),
                            n.e("507406"),
                            n.e("455524"),
                            n.e("90017"),
                            n.e("489908"),
                            n.e("574571"),
                            n.e("750348"),
                        ]).then(n.bind(n, 142630));
                        return (n) =>
                            (0, i.jsx)(a, {
                                ...n,
                                file: l,
                                imageUri: e,
                                uploadType: t,
                                returnRef: s,
                                initialTransform: r,
                                onCrop: f,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [f, t, s],
        ),
        previewUri: o,
        cancelUpload: m,
        getLastEdit: l.useCallback(
            (e) => (null != d && null != e && "filename" in e && e.filename === d.filename ? d : null),
            [d],
        ),
    };
}
var ew = n(652215),
    eR = n(339984),
    eL = n(148548);
function eO() {
    return (0, i.jsx)(Q, {
        label: V.intl.string(V.t.gQmDk4),
        onClick: function () {
            (0, W.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
        },
        className: eL.GU,
    });
}
function eP(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        c = l.useRef(null);
    function d(e) {
        (0, W.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== P.K.COVER) return t;
            let i = [...t.sections];
            return (i[s] = e(n)), new I.Tu({ ...t, sections: i });
        });
    }
    function u(e) {
        d((t) => ({ ...t, title: e }));
    }
    function g(e) {
        d((t) => ({ ...t, subtitle: e }));
    }
    let {
        cropAndUpload: m,
        previewUri: x,
        cancelUpload: f,
        getLastEdit: h,
    } = ek({
        uploadType: eR.HL.PERSONAL_WIDGET_COVER,
        returnRef: c,
        onUploadSuccess: (e) => d((t) => ({ ...t, image: e })),
    });
    function p() {
        f(), d((e) => ({ ...e, image: void 0 }));
    }
    function j() {
        o.current?.activateUploadDialogue();
    }
    function A() {
        (0, W.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let v = null != x,
        E = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        C = null != n.image || v,
        S = C || a,
        b = h(n.image);
    return (0, i.jsx)(X.N, {
        theme: C ? ew.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: r()(eL.kL, { [eL.Vp]: S }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: eL.El,
                              children: [
                                  (0, i.jsx)(ec.A, {
                                      cropAndUpload: m,
                                      imageInputRef: o,
                                      className: eL.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: x,
                                      editVariant: "tooltip",
                                  }),
                                  C && E ? (0, i.jsx)("div", { className: eL.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(Y.A, {
                              className: eL.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(ej, {
                                            lastEdit: b,
                                            buttonRef: c,
                                            disabled: v,
                                            cropAndUpload: m,
                                            onChangeImage: j,
                                        })
                                      : null,
                                  (0, i.jsx)(Y.Y, {
                                      icon: K.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: C ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                      onClick: C ? p : A,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(eL.hQ, e, { [eL.Vp]: S }),
                        children: [
                            (0, i.jsx)(eo, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                value: n.title,
                                placeholder: V.intl.string(V.t.KqCDvK),
                                onCommit: u,
                                maxLength: 50,
                                maxLines: 2,
                            }),
                            (0, i.jsx)(eo, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: n.subtitle,
                                placeholder: V.intl.string(V.t.k8zZFd),
                                onCommit: g,
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
var e_ = n(661531),
    eD = n(603090);
function eG(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: r()(eD.cR, { [eD.mr]: n }),
        children: [
            (0, i.jsx)(em.X, { size: "xs", color: e_.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function eM(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: a, onFieldRemove: o } = e,
        {
            cropAndUpload: c,
            previewUri: d,
            cancelUpload: u,
        } = ek({
            uploadType: eR.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => a(l.key, (t) => ({ ...t, image: e })),
        }),
        g = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: eD.ez,
        children: [
            g
                ? (0, i.jsxs)("div", {
                      className: eD.tF,
                      children: [
                          (0, i.jsx)(ec.A, {
                              className: r()(eD.k9, s ? eD.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: d,
                              cropAndUpload: c,
                              editVariant: "overlay",
                          }),
                          s
                              ? (0, i.jsx)(Y.A, {
                                    className: eD.ij,
                                    children: (0, i.jsx)(Y.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: V.intl.string(V.t.RyK5Ww),
                                        onClick: function () {
                                            u(),
                                                a(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                );
                                        },
                                        icon: K.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eD.oT,
                children: [
                    (0, i.jsx)(eo, {
                        canEdit: s,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: V.intl.formatToPlainString(V.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, i.jsx)(eo, {
                        canEdit: s,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: l.description,
                        placeholder: V.intl.formatToPlainString(V.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            a(l.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 90,
                        maxLines: 4,
                    }),
                ],
            }),
            s
                ? (0, i.jsxs)(Y.A, {
                      className: eD.Ms,
                      children: [
                          g
                              ? null
                              : (0, i.jsx)(Y.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: V.intl.string(V.t.i3vRzP),
                                    onClick: function () {
                                        a(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: em.X,
                                }),
                          (0, i.jsx)(Y.Y, {
                              variant: "overlay-secondary",
                              tooltipText: V.intl.string(V.t.g2jVww),
                              onClick: function () {
                                  o(l.key);
                              },
                              icon: K.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eU(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    function a(e) {
        (0, W.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== P.K.FIELDS) return t;
            let i = [...t.sections];
            return (i[l] = { ...n, fields: e(n.fields) }), new I.Tu({ ...t, sections: i });
        });
    }
    function o(e, t) {
        a((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let s = [...n];
            return (s[i] = t(l)), s;
        });
    }
    function c(e) {
        a((t) => t.filter((t) => t.key !== e));
    }
    function d() {
        a((e) => [...e, (0, I.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!r)
            return (0, i.jsx)("div", { className: eD.kL, children: (0, i.jsx)(eG, { alwaysVisible: !0, onClick: d }) });
    }
    let u = n.fields.map((e, n) =>
            (0, i.jsx)(eM, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: c }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && u.push((0, i.jsx)(eG, { onClick: d }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u.length > 0 ? (0, i.jsx)("div", { className: eD.kL, children: u }) : null,
            m
                ? (0, i.jsx)(Q, {
                      label: V.intl.string(V.t.t4vU5I),
                      onClick: function () {
                          a((e) => [...e, (0, I.yL)(), (0, I.yL)()]);
                      },
                  })
                : null,
        ],
    });
}
var eW = n(202541),
    eF = n(877068);
let eH = { section: ew.JJy.PERSONAL_WIDGET };
function eV(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eF.wx,
        children: [
            (0, i.jsx)(G.A, { size: "xs", className: eF.nr }),
            (0, i.jsx)(eo, {
                canEdit: n,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: V.intl.string(V.t.fjSaAm),
                onCommit: function (e) {
                    (0, W.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 50,
                maxLines: 1,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eB(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    switch (n.type) {
        case P.K.COVER:
            return (0, i.jsx)(eP, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case P.K.FIELDS:
            return (0, i.jsx)(eU, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r });
    }
}
function ez() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eW.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eF.hc,
              children: [
                  (0, i.jsx)(_.h, { color: "nitro-pink", className: eF.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eF.LK,
                      children: [
                          (0, i.jsx)(c.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: V.intl.string(V.t.WOPVdz),
                          }),
                          (0, i.jsx)(c.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: V.intl.string(V.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)(D.A, {
                      size: "sm",
                      subscriptionTier: eW.pe.TIER_2,
                      defaultTextOverride: V.intl.string(V.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eH,
                  }),
              ],
          });
}
function eX() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = l.useContext(ei);
    return e || t ? (0, i.jsx)(z, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eK(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        c = s && !0 !== r,
        d = l.useMemo(() => t.sections.some((e) => e.type === P.K.COVER), [t.sections]);
    return (0, i.jsx)(F.A, {
        userId: n.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eF.Nr,
        headerClassName: eF.JE,
        children: (0, i.jsxs)("div", {
            className: eF.kL,
            children: [
                (0, i.jsx)(eV, { widget: t, canEdit: c }),
                c && !d ? (0, i.jsx)(eO, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eB, { userId: n.id, section: e, sectionIndex: t, canEdit: c, hasCoverSection: d }, t),
                ),
                (0, i.jsx)(eX, {}),
                c ? (0, i.jsx)(ez, {}) : null,
            ],
        }),
    });
}
function eY(e) {
    return (0, i.jsx)(el, { children: (0, i.jsx)(eK, { ...e }) });
}
var eq = n(702841),
    eZ = n(821609),
    eJ = n(403581),
    eQ = n(307301),
    e$ = n(183555),
    e0 = n(465318),
    e1 = n(384377),
    e8 = n(554146),
    e2 = n(43105),
    e7 = n(131607),
    e5 = n(518477),
    e3 = n(49999);
function e4() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = e0.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e7.kn)(e && t ? [e8.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === e8.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function e6(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, e$.NJ)();
    return n
        ? (0, i.jsx)(e2.A, {
              targetElementRef: t,
              position: "left",
              title: V.intl.string(V.t.KKGxNt),
              body: V.intl.string(V.t["IS+QTV"]),
              onRequestClose: () => l(e3.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, e1.XA)(e5.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var e9 = n(410453);
function te(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, e$.NJ)(),
        a = l.useCallback(() => {
            n && s(e3.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, e1.XA)(e5.jM.WIDGET_ADDED);
        }, [r, n, s]);
    return (0, i.jsx)(eZ.$, {
        icon: eJ.t,
        text: V.intl.string(V.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function tt(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, e$.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [d, u] = e4(),
        g = (function () {
            let e = (0, eq.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: n, showCreateEntrypoint: i } = e0.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = l.useCallback(() => {
            d && u(e3.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, eC.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("740601"), n.e("422420"), n.e("264707")]).then(
                            n.bind(n, 480142),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, d, u]);
    return (0, i.jsxs)("div", {
        className: r()(e9.w, t),
        children: [
            (0, i.jsx)(c.E, {
                className: e9.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, i.jsx)(te, { buttonRef: o, isCoachmarkVisible: d, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(eZ.$, {
                icon: eQ.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e6, { targetElementRef: g ? o : a, isVisible: d, markAsDismissed: u }),
        ],
    });
}
var tn = n(192),
    ti = n(408278),
    tl = n(499373),
    ts = n(793574),
    tr = n(111994),
    ta = n(314531),
    to = n(3026);
n(600253);
var tc = n(936026);
function td(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(c.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tc.Qw, { [tc.qf]: n }),
        children: (0, i.jsx)(to.A, { children: t }),
    });
}
function tu(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, e$.NJ)(),
        o = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, W.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        c = (0, et.TX)({ value: n, onCommit: o }),
        { isEditing: d } = c,
        u = V.intl.string(V.t["2gwc+H"]);
    return (
        l.useEffect(() => {
            s(d);
        }, [d, s]),
        l.useEffect(() => () => s(!1), [s]),
        (0, i.jsx)(et.yV, {
            ...c,
            size: "compact",
            removeVerticalPadding: !0,
            className: r()(tc.ZZ, { [tc.Dy]: c.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(tc.$, tc.TG),
                children: [
                    (0, i.jsx)(ef.PencilIcon, { size: "xxs", color: "currentColor", className: tc.wz }),
                    "" === n.trim() ? (0, i.jsx)(td, { value: u, isPlaceholder: !0 }) : (0, i.jsx)(td, { value: n }),
                ],
            }),
            placeholder: u,
            editButtonAriaLabel: V.intl.string(V.t.PDnM11),
            label: V.intl.string(V.t.PDnM11),
            maxLength: 200,
        })
    );
}
function tg(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(tu, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: tc.$, children: (0, i.jsx)(td, { value: n ?? "" }) })
        : null;
}
var tm = n(663341),
    tx = n(451395),
    tf = n(823016),
    th = n(765178),
    tp = n(539572),
    tI = n(195880),
    tj = n(696016);
let tA = (0, S.v)(() => ({ localClips: new Map() }));
function tv(e, t) {
    tA.setState((n) => ({ localClips: new Map(n.localClips).set(e, t) }));
}
function tE(e) {
    tA.setState((t) => {
        let n = new Map(t.localClips);
        return n.delete(e), { localClips: n };
    });
}
async function tC(e, t) {
    if (!tA.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, eA.P0)((0, ev.o)(V.intl.string(V.t.xcLXWy), eE.Ck.FAILURE));
        tv(e.id, { status: "exporting", clip: e });
        try {
            let n = await (0, tp.VO)(e, { analyticsLocations: t });
            tv(e.id, { status: "uploading", clip: e, progress: 0 });
            let i = new File([n], "clip.mp4", { type: "video/mp4" }),
                l = await v.A.uploadWidgetClip(i, {
                    onProgress: (t) => {
                        var n;
                        return (
                            (n = e.id),
                            void tA.setState((e) => {
                                let i = e.localClips.get(n);
                                return i?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(n, { ...i, progress: t }) };
                            })
                        );
                    },
                });
            tv(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, W.XW)({
                    status: "pending",
                    id: (0, tI.m)(),
                    localClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            tE(e.id),
                tj.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, eA.P0)((0, ev.o)(V.intl.string(V.t.iufib1), eE.Ck.FAILURE));
        }
    }
}
function tS(e) {
    let { widgetClipId: t, localClipId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, e$.NJ)(),
        r = V.intl.string(V.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(ti.K, {
                "aria-label": r,
                icon: K.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != n && tE(n),
                        th.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tb = n(233002);
function ty(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: c, manageFocusOnReorder: d } = (0, tf.r)(),
        u = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tb.Vs, { [tb.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(ta.A, { item: t, ringSize: "sm", className: tb.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tx.jV, { buttonRef: c(t.key), className: tb.BU }),
                            (0, i.jsx)(tS, {
                                widgetClipId: t.key,
                                localClipId: "pending" === t.status ? t.localClipId : void 0,
                                className: tb.nM,
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: tb.NI,
        children: g
            ? (0, i.jsx)(tx.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: W.N5,
                  onEnd: () => d(t.key),
                  className: tb.oE,
                  dropBeforeClassName: tb.A,
                  dropAfterClassName: tb.Ze,
                  draggingClassName: tb.Id,
                  children: m,
              })
            : m,
    });
}
function tT(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tb.Xm,
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(ty, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tb.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tb.Yn,
                                    "aria-label": V.intl.string(V.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tm.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(tf.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tN = n(457404);
function tk(e) {
    let { children: t } = e;
    return (0, i.jsxs)("div", {
        className: tN.Lw,
        children: [(0, i.jsx)("div", { className: tN.tB }), (0, i.jsx)("div", { className: tN.Qs, children: t })],
    });
}
var tw = n(256905);
let tR = { width: 1920, height: 1080 };
async function tL(e) {
    if (null == e) return tR;
    try {
        let { width: t, height: n } = await new Promise((t, n) => {
            let i = new Image();
            (i.onload = () => t({ width: i.naturalWidth, height: i.naturalHeight })),
                (i.onerror = () => n(Error("measureImage: the image failed to load"))),
                (i.src = e);
        });
        return t > 0 && n > 0 ? { width: t, height: n } : tR;
    } catch {
        return tR;
    }
}
async function tO(e) {
    let { videoURL: t, thumbnailURL: n, title: i } = e,
        { width: l, height: s } = await tL(n);
    return { type: "VIDEO", url: t, proxyUrl: t, poster: n, width: l, height: s, alt: i };
}
async function tP(e) {
    let { clips: t, startingIndex: n } = e;
    if (0 === t.length) return;
    let i = await Promise.all(t.map(tO));
    (0, tw.R)({ location: "user_profile_widget_clip", items: i, startingIndex: n, shouldHideMediaOptions: !0 });
}
var t_ = n(716112);
function tD(e) {
    return "saved" === e.status && null != e.videoURL;
}
function tG(e) {
    let { onClick: t } = e,
        n = V.intl.string(V.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(ti.K, { variant: "secondary", size: "sm", icon: tl.T, "aria-label": n, onClick: t }),
    });
}
function tM() {
    return (0, i.jsx)("div", {
        className: t_.p$,
        children: (0, i.jsx)(c.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tU(e) {
    let t,
        { widget: s, user: r, allowEditing: a, disableInteraction: o, ...c } = e,
        [d, u] = l.useState(null),
        [g, m] = l.useState(!1),
        [x, f] = l.useState(!1),
        h = l.useRef(void 0),
        p =
            ((t = tA((e) => e.localClips)),
            l.useMemo(
                () => [
                    ...s.clips.flatMap((e) => {
                        if ("saved" === e.status)
                            return [
                                {
                                    status: "saved",
                                    key: e.id,
                                    videoURL: e.videoURL,
                                    thumbnailURL: e.thumbnailURL,
                                    title: e.title,
                                },
                            ];
                        let n = t.get(e.localClipId);
                        return null != n
                            ? [
                                  {
                                      status: "pending",
                                      key: e.id,
                                      localClipId: e.localClipId,
                                      thumbnail: n.clip.thumbnail,
                                      title: e.title,
                                  },
                              ]
                            : [];
                    }),
                    ...Array.from(t.values()).flatMap((e) => {
                        switch (e.status) {
                            case "exporting":
                                return [{ status: "exporting", key: e.clip.id, thumbnail: e.clip.thumbnail }];
                            case "uploading":
                                return [
                                    {
                                        status: "uploading",
                                        key: e.clip.id,
                                        thumbnail: e.clip.thumbnail,
                                        progress: e.progress,
                                    },
                                ];
                            case "uploaded":
                                return [];
                        }
                    }),
                ],
                [s.clips, t],
            )),
        I = a && !0 !== o,
        j = 0 === p.length,
        A = p.length >= 4,
        v = p.find((e) => e.key === d) ?? p[p.length - 1],
        E = l.useMemo(() => (!0 === o ? [] : p.filter(tD)), [p, o]),
        C = null != v ? E.findIndex((e) => e.key === v.key) : -1,
        S = l.useCallback(() => {
            C < 0 || tP({ clips: E, startingIndex: C });
        }, [E, C]),
        b = l.useCallback(() => {
            h.current = window.setTimeout(() => m(!0), 150);
        }, []),
        y = l.useCallback(() => {
            window.clearTimeout(h.current), m(!1);
        }, []);
    l.useEffect(() => () => window.clearTimeout(h.current), []);
    let T = l.useCallback(() => {
        (0, eC.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("459368"),
                    n.e("251714"),
                    n.e("860350"),
                    n.e("180644"),
                    n.e("821717"),
                    n.e("269714"),
                    n.e("19385"),
                    n.e("398104"),
                    n.e("553829"),
                    n.e("33091"),
                    n.e("865257"),
                    n.e("318196"),
                    n.e("323079"),
                    n.e("437655"),
                    n.e("430877"),
                    n.e("48055"),
                    n.e("808915"),
                    n.e("586467"),
                    n.e("875842"),
                    n.e("883952"),
                    n.e("858337"),
                    n.e("220287"),
                    n.e("3131"),
                    n.e("324761"),
                    n.e("918024"),
                    n.e("203930"),
                    n.e("903663"),
                    n.e("647177"),
                    n.e("169201"),
                    n.e("8563"),
                    n.e("111527"),
                    n.e("127272"),
                    n.e("621573"),
                    n.e("496268"),
                    n.e("466147"),
                    n.e("838090"),
                    n.e("122266"),
                    n.e("501962"),
                    n.e("901922"),
                    n.e("583518"),
                    n.e("237715"),
                    n.e("974049"),
                    n.e("280559"),
                    n.e("895008"),
                    n.e("352566"),
                    n.e("489492"),
                    n.e("689160"),
                    n.e("231782"),
                    n.e("520342"),
                    n.e("771453"),
                    n.e("194676"),
                ]).then(n.bind(n, 671884));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        initialMainLink: tr.oH.ALL_CLIPS,
                        onClipClick: (e) => {
                            ((e) => tC(e, [ts.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                        },
                    });
            },
            { modalKey: tj.nm },
        );
    }, []);
    return (0, i.jsx)(F.A, {
        userId: r.id,
        widget: s,
        allowEditing: a,
        disableInteraction: o,
        className: t_.kL,
        headerTitle: (0, W.L)(s),
        headerActionButtons: I && j ? [(0, i.jsx)(tG, { onClick: T }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != v
                ? (0, i.jsxs)("div", {
                      className: t_.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              className: t_.aM,
                              onMouseEnter: b,
                              onMouseLeave: y,
                              children: [
                                  (0, i.jsx)(ta.A, { item: v, ringSize: "lg", isPlaying: g, className: t_.VH }),
                                  C >= 0 &&
                                      !x &&
                                      (0, i.jsx)(H.D, {
                                          className: t_.Hf,
                                          "aria-label": V.intl.string(V.t.CscLHM),
                                          onClick: S,
                                      }),
                                  (0, i.jsx)(tk, {
                                      children:
                                          ("saved" === v.status || "pending" === v.status) &&
                                          (0, i.jsx)(tg, {
                                              clipId: v.key,
                                              title: v.title,
                                              allowEditing: I,
                                              onEditingChange: f,
                                          }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(tT, {
                              items: p,
                              selectedKey: v.key,
                              onSelect: u,
                              onAddClip: I && !A ? T : void 0,
                              allowEditing: I,
                          }),
                      ],
                  })
                : (0, i.jsx)(tM, {}),
    });
}
var tW = n(704824),
    tF = n(382483),
    tH = n(385113),
    tV = n(334074),
    tB = n(657718),
    tz = n(789645),
    tX = n(478016);
function tK(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, e$.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, e1.XA)(e5.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, i.jsx)(O.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(O.A.Cta, {
            showSuggestedForYou: !0,
            heading: V.intl.format(V.t.OIzLCy, { applicationName: n.name }),
            content: V.intl.format(V.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(tB.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tz.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e3.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(tB.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tX.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                s(e3.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tY() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tH.A], () => tH.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tF.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            n = (0, d.A)(e),
            { tokens: i, fetched: s } = (0, tW.j)(e),
            r = (0, R.A)(t?.id),
            o = null == t || null == e || null == i || !s,
            c = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof f.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, r],
            ),
            { eligibleToShow: u, markAsDismissed: g } = (0, tV.hj)({
                applications: c,
                dismissibleContent: e8.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tV.SH,
            }),
            m = l.useMemo(() => c.filter((e) => u.includes(e.id)), [c, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(tK, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tq = n(128988),
    tZ = n(280450),
    tJ = n(321191),
    tQ = n(896170),
    t$ = n(305866),
    t0 = n(453318),
    t1 = n(321108),
    t8 = n(383329),
    t2 = n(67710);
function t7(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: c } = (0, e$.NJ)(),
        [d, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, t8.R)({ query: d }),
        f = d.trim().length > 0,
        { gameIds: h, onAddGame: p } = k(t),
        I = (0, t1.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    th.O.announce(V.intl.string(V.t.q0U3DE)),
                    c({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    s?.();
            },
            [t, c, s, h, p],
        ),
        A = l.useMemo(() => {
            let e = new Map(
                m.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (f) return [...e.values()];
            let t = I.filter((e) => !o.has(e.id) && (0, W.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [m, o, I, f]),
        v = l.useCallback((e) => e, []),
        E = l.useMemo(() => ({ ...x, threshold: tQ.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        C = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, tQ.Ht)(A, e, E).length), [f, A, E]),
        S = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === d.trim() &&
                    "" !== n.trim() &&
                    c({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: C(n),
                    }),
                    u(n),
                    (g.current = n);
            },
            [d, c, t, C],
        );
    return (0, i.jsx)(ed.Y, {
        ...a,
        onRequestOpen: () => {
            c({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = "");
        },
        onRequestClose: () => {
            c({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: C(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t$.l, {
                className: t2.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, i.jsxs)(t0.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: E,
                    customMatchSorter: f ? v : void 0,
                    children: [
                        (0, i.jsx)(t0.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: S,
                        }),
                        (0, i.jsx)(t0.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function t5(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(t7, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(q.m, {
                text: V.intl.string(V.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(ti.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: tl.T,
                    "aria-label": V.intl.string(V.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function t3(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(t7, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: t2.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tm.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let t4 = l.createContext(null);
function t6(e) {
    let { widgetType: t, children: n } = e,
        s = (0, a.bG)([E.A], () => {
            let e = E.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, W.cv)(t);
            return n.games.length > i;
        }),
        [r, o] = l.useState(s);
    return (0, i.jsx)(t4.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function t9() {
    let e = l.useContext(t4);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var ne = n(67438);
function nt(e) {
    let { widget: t } = e,
        n = (0, W.cv)(t.type),
        l = 1 === n,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? ne.O : ne.k,
        children: [
            l && (0, i.jsx)(t3, { widget: t, widgetType: t.type }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var nn = n(683071),
    ni = n(312252);
function nl(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, W.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: ni.l,
              children: (0, i.jsx)(nn.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var ns = n(249264),
    nr = n(148420);
function na(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tf.r)();
    return (0, i.jsx)("ul", {
        className: nr.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(ns.A, {
                        index: t,
                        user: n,
                        game: e,
                        widgetType: l,
                        coverRef: r(e.gameId),
                        onRemoveGame: a,
                        ...s,
                    }),
                },
                e.gameId,
            ),
        ),
    });
}
function no(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, tn.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = t9(),
        d = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(na, { ...e, games: d }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nl, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tf.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nc(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(no, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nt, { widget: n }),
    });
}
function nd(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        c = n.games[0];
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != c
                ? (0, i.jsx)(ns.A, {
                      user: t,
                      widgetType: n.type,
                      game: c,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nt, { widget: n }),
    });
}
var nu = n(793693);
function ng(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nu.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nm = n(686246),
    nx = n(201438),
    nf = n(788593),
    nh = n(858808),
    np = n(365611),
    nI = n(900850);
function nj(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: c } = (0, tf.r)(),
        d = l.useRef(null);
    return (0, i.jsx)(tx.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => d.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(n, e, t),
        onEnd: () => c(s.gameId),
        className: nI.kL,
        dropBeforeClassName: nI.A,
        dropAfterClassName: nI.Ze,
        draggingClassName: nI.Id,
        children: (0, i.jsx)("div", { ref: d, className: nI.An, children: o }),
    });
}
function nA(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            allowEditing: s,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: c,
        } = e,
        { coverImageUrl: d, gameName: u, isLoading: g } = (0, nx.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tf.r)(),
        x = s && !r,
        { isDragging: f } = (0, nm.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nf.A, {
                    imageSrc: d,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == d || r ? void 0 : np.iL,
                    hideTooltip: f,
                    coverRef: c,
                }),
                x && (0, i.jsx)(tx.jV, { buttonRef: m(t.gameId), className: nI.BU }),
                x && (0, i.jsx)(nh.A, { game: t, widgetType: l, className: nI.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: np.mD })
        : x
          ? (0, i.jsx)(nj, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: d, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nI.kL, children: h() });
}
function nv(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tf.r)();
    return (0, i.jsx)(ng, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nA, {
                index: t,
                game: e,
                userId: n,
                widgetType: l,
                allowEditing: s,
                disableInteraction: r,
                coverRef: a(e.gameId),
                onRemoveGame: o,
            }),
    });
}
function nE(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, tn.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = t9(),
        d = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nv, { ...e, games: d }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nl, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tf.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nC(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nE, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nt, { widget: n }),
    });
}
function nS(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nE, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nt, { widget: n }),
    });
}
var nb = n(297264),
    ny = n(915089),
    nT = n(772168);
function nN(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nx.A)(t),
        c = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        d = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || c
        ? (0, i.jsx)("div", { className: np.mD })
        : (0, i.jsx)(q.m, {
              text: d,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nT.c9,
                  onClick: l,
                  "aria-label": d,
                  children: [
                      (0, i.jsx)(nf.A, {
                          className: nT.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tm.PlusLargeIcon, { size: "md", className: nT.Xv, color: e_.A.colors.WHITE }),
                  ],
              }),
          });
}
function nk(e) {
    let { userId: t, games: n, onDismiss: l, onClick: s, className: a } = e,
        o = (0, ny.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(nT.kL, a),
        "aria-labelledby": o,
        children: [
            (0, i.jsxs)("div", {
                className: nT.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: nT.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: l,
                        children: (0, i.jsx)(tz.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(nb.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: V.intl.string(V.t.zMUr6Z),
                    }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: nT.Vg,
                children: n.map((e) => {
                    let { gameId: n } = e;
                    return (0, i.jsx)(
                        "li",
                        { children: (0, i.jsx)(nN, { onClick: () => s(n), userId: t, gameId: n }) },
                        n,
                    );
                }),
            }),
        ],
    });
}
function nw(e) {
    let { widgetType: t, ...n } = e,
        { games: s, onAddGame: r } = k(t),
        { setExpanded: a } = t9(),
        { trackUserProfileEditAction: o } = (0, e$.NJ)(),
        c = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, i.jsx)(nk, { games: s, onClick: c, ...n });
}
var nR = n(870961);
function nL(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nd, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(nc, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nS, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nC, { widget: t, ...n });
        default:
            return null;
    }
}
function nO(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: c } = t9(),
        { shouldShowSuggestions: d, handleDismissSuggestions: u } = (function (e) {
            let [t, n] = l.useState(!1),
                i = e.type,
                s = (0, a.bG)([tZ.default, tJ.A], () => {
                    let e = tZ.default.getId();
                    if (null == e) return !1;
                    let t = tJ.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === i);
                }),
                r = (0, W.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !r,
                handleDismissSuggestions: l.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        g = s && !r,
        m = g && d,
        x = (0, W.L)(t),
        f = (0, W.FM)(t, { showEditingControls: g }),
        h = (0, W.uA)(t),
        p = 1 === (0, W.cv)(t.type);
    return (0, i.jsx)(nL, {
        widget: t,
        user: n,
        allowEditing: s,
        disableInteraction: r,
        headerTitle: x,
        headerSubtitle: f,
        headerActionButtons:
            g && !p
                ? [
                      (0, i.jsx)(
                          t5,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => c(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nw, { userId: n.id, widgetType: t.type, onDismiss: u, className: nR.r }),
        ...o,
    });
}
function nP(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(t6, { widgetType: t.type, children: (0, i.jsx)(nO, { widget: t, ...n }) });
}
var n_ = n(271383),
    nD = n(94160),
    nG = n(96173),
    nM = n(788259),
    nU = n(269507);
function nW(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, e$.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        d = (0, a.bG)([tJ.A], () => tJ.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e4(!d),
        m = (0, nG.A)();
    return (
        l.useEffect(() => {
            r.current || d || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [d, n]),
        (0, i.jsxs)("div", {
            className: nU.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nU.FS,
                    children: [
                        (0, i.jsx)(nb.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: V.intl.string(V.t["oqalC+"]),
                        }),
                        (0, i.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: d ? V.intl.string(V.t["+W59o5"]) : V.intl.string(V.t.O9SQ1c),
                        }),
                    ],
                }),
                !d &&
                    (0, i.jsx)("ul", {
                        className: nU.ZW,
                        "aria-label": V.intl.string(V.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, i.jsx)(nM.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !d && (0, i.jsx)(e6, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var nF = n(366209);
function nH(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(O.A, { widget: t, ...n })
        : t instanceof I.Tu
          ? (0, i.jsx)(eY, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(nP, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(tU, { widget: t, ...n })
              : null;
}
function nV() {
    return (0, i.jsxs)("div", {
        className: nF.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function nB(e) {
    let { user: t, guildId: n, channelId: s } = e,
        r = (0, R.A)(t.id),
        o = (0, L.A)(t.id),
        c = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                n = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, u.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        h = 0 === r.length && o,
        I = l.useMemo(() => r.filter(p.fu), [r]),
        j = l.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    function A() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(tt, { className: nF.cG }), c && (0, i.jsx)(nV, {}), (0, i.jsx)(tY, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        nH,
                        { widget: e, user: t, guildId: n, channelId: s, allowEditing: o, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [n, i, s, r] = (0, a.yK)([E.A], () => [
                E.A.suggestedFetchAttempted,
                E.A.suggestedFetchError,
                E.A.suggestedGameIds,
                E.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = N();
        l.useEffect(() => {
            !n && e && v.A.fetchSuggestedGames();
        }, [n, e]);
        let c = n && !r;
        l.useEffect(() => {
            if (!c) return;
            let e = t.map((e) => e.games).flat();
            i || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [c]);
    })(o, I),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, d.A)(n);
        let { data: i, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== i);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, i.jsx)(nW, { userId: t.id })
        : o
          ? (0, i.jsx)(tn.D, { children: A() })
          : A();
}
function nz(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, w.i)({ containerRef: s });
    let a = (0, n_.k)(t.id);
    return (0, i.jsxs)(nD.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nF.XG, { [nF.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(tq.A, { scrollerRef: s }), (0, i.jsx)(nB, { user: t, ...n })],
    });
}
