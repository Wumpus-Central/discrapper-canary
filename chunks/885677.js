n.d(t, { A: () => nB, u: () => nF });
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
    eh = n(946274);
function ep(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    function a() {
        (0, eh.AM)(t.unprocessedFile, (e, n) => s(e, n, t.transform));
    }
    return (0, i.jsx)(ed.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eu.W, {
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
                            action: a,
                            icon: ex.K,
                            leadingAccessory: { type: "icon", icon: ex.K },
                        }),
                    ],
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
function eI(e) {
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
        : (0, i.jsx)(ep, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r });
}
var ej = n(691540),
    eA = n(857250),
    ev = n(97483),
    eE = n(192308),
    eC = n(765548),
    eS = n(229531),
    eb = n(515718),
    ey = n(741394),
    eT = n(38405);
function eN(e) {
    let { uploadType: t, returnRef: s, onUploadSuccess: r } = e,
        a = l.useRef(0),
        [o, c] = l.useState(null),
        [d, u] = l.useState(null),
        g = (0, eC.A)(r),
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
                    c(null), (0, ej.P0)((0, eA.o)(V.intl.string(V.t.F4Neqh), ev.Ck.FAILURE)), eT.A.captureException(e);
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
                    o = (0, eb.aU)(s);
                o.size > 0xa00000
                    ? (0, ej.P0)((0, eA.o)(V.intl.string(V.t.YbdEFK), ev.Ck.FAILURE))
                    : x(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (n = o.type),
                              (i = (0, eS.B)(n) ?? "png"),
                              (l = (0, ey.kh)(t)),
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
                (0, eE.openModalLazy)(
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
var ek = n(652215),
    ew = n(339984),
    eR = n(148548);
function eL() {
    return (0, i.jsx)(Q, {
        label: V.intl.string(V.t.gQmDk4),
        onClick: function () {
            (0, W.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
        },
        className: eR.GU,
    });
}
function eO(e) {
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
    } = eN({
        uploadType: ew.HL.PERSONAL_WIDGET_COVER,
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
        theme: C ? ek.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: r()(eR.kL, { [eR.Vp]: S }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: eR.El,
                              children: [
                                  (0, i.jsx)(ec.A, {
                                      cropAndUpload: m,
                                      imageInputRef: o,
                                      className: eR.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: x,
                                      editVariant: "tooltip",
                                  }),
                                  C && E ? (0, i.jsx)("div", { className: eR.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(Y.A, {
                              className: eR.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(eI, {
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
                        className: r()(eR.hQ, e, { [eR.Vp]: S }),
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
var eP = n(661531),
    e_ = n(603090);
function eD(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: r()(e_.cR, { [e_.mr]: n }),
        children: [
            (0, i.jsx)(em.X, { size: "xs", color: eP.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function eG(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: a, onFieldRemove: o } = e,
        {
            cropAndUpload: c,
            previewUri: d,
            cancelUpload: u,
        } = eN({
            uploadType: ew.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => a(l.key, (t) => ({ ...t, image: e })),
        }),
        g = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: e_.ez,
        children: [
            g
                ? (0, i.jsxs)("div", {
                      className: e_.tF,
                      children: [
                          (0, i.jsx)(ec.A, {
                              className: r()(e_.k9, s ? e_.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: d,
                              cropAndUpload: c,
                              editVariant: "overlay",
                          }),
                          s
                              ? (0, i.jsx)(Y.A, {
                                    className: e_.ij,
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
                className: e_.oT,
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
                      className: e_.Ms,
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
function eM(e) {
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
            return (0, i.jsx)("div", { className: e_.kL, children: (0, i.jsx)(eD, { alwaysVisible: !0, onClick: d }) });
    }
    let u = n.fields.map((e, n) =>
            (0, i.jsx)(eG, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: c }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && u.push((0, i.jsx)(eD, { onClick: d }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u.length > 0 ? (0, i.jsx)("div", { className: e_.kL, children: u }) : null,
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
var eU = n(202541),
    eW = n(877068);
let eF = { section: ek.JJy.PERSONAL_WIDGET };
function eH(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eW.wx,
        children: [
            (0, i.jsx)(G.A, { size: "xs", className: eW.nr }),
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
function eV(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    switch (n.type) {
        case P.K.COVER:
            return (0, i.jsx)(eO, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case P.K.FIELDS:
            return (0, i.jsx)(eM, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r });
    }
}
function eB() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eU.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eW.hc,
              children: [
                  (0, i.jsx)(_.h, { color: "nitro-pink", className: eW.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eW.LK,
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
                      subscriptionTier: eU.pe.TIER_2,
                      defaultTextOverride: V.intl.string(V.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eF,
                  }),
              ],
          });
}
function ez() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = l.useContext(ei);
    return e || t ? (0, i.jsx)(z, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eX(e) {
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
        className: eW.Nr,
        headerClassName: eW.JE,
        children: (0, i.jsxs)("div", {
            className: eW.kL,
            children: [
                (0, i.jsx)(eH, { widget: t, canEdit: c }),
                c && !d ? (0, i.jsx)(eL, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eV, { userId: n.id, section: e, sectionIndex: t, canEdit: c, hasCoverSection: d }, t),
                ),
                (0, i.jsx)(ez, {}),
                c ? (0, i.jsx)(eB, {}) : null,
            ],
        }),
    });
}
function eK(e) {
    return (0, i.jsx)(el, { children: (0, i.jsx)(eX, { ...e }) });
}
var eY = n(702841),
    eq = n(821609),
    eZ = n(403581),
    eJ = n(307301),
    eQ = n(183555),
    e$ = n(465318),
    e0 = n(384377),
    e1 = n(554146),
    e8 = n(43105),
    e2 = n(131607),
    e7 = n(518477),
    e5 = n(49999);
function e3() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = e$.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e2.kn)(e && t ? [e1.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === e1.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function e4(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eQ.NJ)();
    return n
        ? (0, i.jsx)(e8.A, {
              targetElementRef: t,
              position: "left",
              title: V.intl.string(V.t.KKGxNt),
              body: V.intl.string(V.t["IS+QTV"]),
              onRequestClose: () => l(e5.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, e0.XA)(e7.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var e6 = n(410453);
function e9(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eQ.NJ)(),
        a = l.useCallback(() => {
            n && s(e5.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, e0.XA)(e7.jM.WIDGET_ADDED);
        }, [r, n, s]);
    return (0, i.jsx)(eq.$, {
        icon: eZ.t,
        text: V.intl.string(V.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function te(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eQ.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [d, u] = e3(),
        g = (function () {
            let e = (0, eY.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: n, showCreateEntrypoint: i } = e$.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = l.useCallback(() => {
            d && u(e5.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, eE.openModalLazy)(
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
        className: r()(e6.w, t),
        children: [
            (0, i.jsx)(c.E, {
                className: e6.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, i.jsx)(e9, { buttonRef: o, isCoachmarkVisible: d, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(eq.$, {
                icon: eJ.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e4, { targetElementRef: g ? o : a, isVisible: d, markAsDismissed: u }),
        ],
    });
}
var tt = n(192),
    tn = n(408278),
    ti = n(499373),
    tl = n(793574),
    ts = n(111994),
    tr = n(314531),
    ta = n(3026);
n(600253);
var to = n(936026);
function tc(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(c.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(to.Qw, { [to.qf]: n }),
        children: (0, i.jsx)(ta.A, { children: t }),
    });
}
function td(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, eQ.NJ)(),
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
            className: r()(to.ZZ, { [to.Dy]: c.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(to.$, to.TG),
                children: [
                    (0, i.jsx)(ef.PencilIcon, { size: "xxs", color: "currentColor", className: to.wz }),
                    "" === n.trim() ? (0, i.jsx)(tc, { value: u, isPlaceholder: !0 }) : (0, i.jsx)(tc, { value: n }),
                ],
            }),
            placeholder: u,
            editButtonAriaLabel: V.intl.string(V.t.PDnM11),
            label: V.intl.string(V.t.PDnM11),
            maxLength: 200,
        })
    );
}
function tu(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(td, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: to.$, children: (0, i.jsx)(tc, { value: n ?? "" }) })
        : null;
}
var tg = n(663341),
    tm = n(451395),
    tx = n(823016),
    tf = n(765178),
    th = n(539572),
    tp = n(195880),
    tI = n(696016);
let tj = (0, S.v)(() => ({ localClips: new Map() }));
function tA(e, t) {
    tj.setState((n) => ({ localClips: new Map(n.localClips).set(e, t) }));
}
function tv(e) {
    tj.setState((t) => {
        let n = new Map(t.localClips);
        return n.delete(e), { localClips: n };
    });
}
async function tE(e, t) {
    if (!tj.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, ej.P0)((0, eA.o)(V.intl.string(V.t.xcLXWy), ev.Ck.FAILURE));
        tA(e.id, { status: "exporting", clip: e });
        try {
            let n = await (0, th.VO)(e, { analyticsLocations: t });
            tA(e.id, { status: "uploading", clip: e, progress: 0 });
            let i = new File([n], "clip.mp4", { type: "video/mp4" }),
                l = await v.A.uploadWidgetClip(i, {
                    onProgress: (t) => {
                        var n;
                        return (
                            (n = e.id),
                            void tj.setState((e) => {
                                let i = e.localClips.get(n);
                                return i?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(n, { ...i, progress: t }) };
                            })
                        );
                    },
                });
            tA(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, W.XW)({
                    status: "pending",
                    id: (0, tp.m)(),
                    localClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            tv(e.id),
                tI.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, ej.P0)((0, eA.o)(V.intl.string(V.t.iufib1), ev.Ck.FAILURE));
        }
    }
}
function tC(e) {
    let { widgetClipId: t, localClipId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eQ.NJ)(),
        r = V.intl.string(V.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(tn.K, {
                "aria-label": r,
                icon: K.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != n && tv(n),
                        tf.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tS = n(233002);
function tb(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: c, manageFocusOnReorder: d } = (0, tx.r)(),
        u = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tS.Vs, { [tS.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(tr.A, { item: t, ringSize: "sm", className: tS.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tm.jV, { buttonRef: c(t.key), className: tS.BU }),
                            (0, i.jsx)(tC, {
                                widgetClipId: t.key,
                                localClipId: "pending" === t.status ? t.localClipId : void 0,
                                className: tS.nM,
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: tS.NI,
        children: g
            ? (0, i.jsx)(tm.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: W.N5,
                  onEnd: () => d(t.key),
                  className: tS.oE,
                  dropBeforeClassName: tS.A,
                  dropAfterClassName: tS.Ze,
                  draggingClassName: tS.Id,
                  children: m,
              })
            : m,
    });
}
function ty(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tS.Xm,
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tb, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tS.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tS.Yn,
                                    "aria-label": V.intl.string(V.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tg.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(tx.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tT = n(457404);
function tN(e) {
    let { children: t } = e;
    return (0, i.jsxs)("div", {
        className: tT.Lw,
        children: [(0, i.jsx)("div", { className: tT.tB }), (0, i.jsx)("div", { className: tT.Qs, children: t })],
    });
}
var tk = n(256905);
let tw = { width: 1920, height: 1080 };
async function tR(e) {
    if (null == e) return tw;
    try {
        let { width: t, height: n } = await new Promise((t, n) => {
            let i = new Image();
            (i.onload = () => t({ width: i.naturalWidth, height: i.naturalHeight })),
                (i.onerror = () => n(Error("measureImage: the image failed to load"))),
                (i.src = e);
        });
        return t > 0 && n > 0 ? { width: t, height: n } : tw;
    } catch {
        return tw;
    }
}
async function tL(e) {
    let { videoURL: t, thumbnailURL: n, title: i } = e,
        { width: l, height: s } = await tR(n);
    return { type: "VIDEO", url: t, proxyUrl: t, poster: n, width: l, height: s, alt: i };
}
async function tO(e) {
    let { clips: t, startingIndex: n } = e;
    if (0 === t.length) return;
    let i = await Promise.all(t.map(tL));
    (0, tk.R)({ location: "user_profile_widget_clip", items: i, startingIndex: n, shouldHideMediaOptions: !0 });
}
var tP = n(716112);
function t_(e) {
    return "saved" === e.status && null != e.videoURL;
}
function tD(e) {
    let { onClick: t } = e,
        n = V.intl.string(V.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(tn.K, { variant: "secondary", size: "sm", icon: ti.T, "aria-label": n, onClick: t }),
    });
}
function tG() {
    return (0, i.jsx)("div", {
        className: tP.p$,
        children: (0, i.jsx)(c.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tM(e) {
    let t,
        { widget: s, user: r, allowEditing: a, disableInteraction: o, ...c } = e,
        [d, u] = l.useState(null),
        [g, m] = l.useState(!1),
        [x, f] = l.useState(!1),
        h = l.useRef(void 0),
        p =
            ((t = tj((e) => e.localClips)),
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
        E = l.useMemo(() => (!0 === o ? [] : p.filter(t_)), [p, o]),
        C = null != v ? E.findIndex((e) => e.key === v.key) : -1,
        S = l.useCallback(() => {
            C < 0 || tO({ clips: E, startingIndex: C });
        }, [E, C]),
        b = l.useCallback(() => {
            h.current = window.setTimeout(() => m(!0), 150);
        }, []),
        y = l.useCallback(() => {
            window.clearTimeout(h.current), m(!1);
        }, []);
    l.useEffect(() => () => window.clearTimeout(h.current), []);
    let T = l.useCallback(() => {
        (0, eE.openModalLazy)(
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
                        initialMainLink: ts.oH.ALL_CLIPS,
                        onClipClick: (e) => {
                            ((e) => tE(e, [tl.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                        },
                    });
            },
            { modalKey: tI.nm },
        );
    }, []);
    return (0, i.jsx)(F.A, {
        userId: r.id,
        widget: s,
        allowEditing: a,
        disableInteraction: o,
        className: tP.kL,
        headerTitle: (0, W.L)(s),
        headerActionButtons: I && j ? [(0, i.jsx)(tD, { onClick: T }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != v
                ? (0, i.jsxs)("div", {
                      className: tP.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tP.aM,
                              onMouseEnter: b,
                              onMouseLeave: y,
                              children: [
                                  (0, i.jsx)(tr.A, { item: v, ringSize: "lg", isPlaying: g, className: tP.VH }),
                                  C >= 0 &&
                                      !x &&
                                      (0, i.jsx)(H.D, {
                                          className: tP.Hf,
                                          "aria-label": V.intl.string(V.t.CscLHM),
                                          onClick: S,
                                      }),
                                  (0, i.jsx)(tN, {
                                      children:
                                          ("saved" === v.status || "pending" === v.status) &&
                                          (0, i.jsx)(tu, {
                                              clipId: v.key,
                                              title: v.title,
                                              allowEditing: I,
                                              onEditingChange: f,
                                          }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(ty, {
                              items: p,
                              selectedKey: v.key,
                              onSelect: u,
                              onAddClip: I && !A ? T : void 0,
                              allowEditing: I,
                          }),
                      ],
                  })
                : (0, i.jsx)(tG, {}),
    });
}
var tU = n(704824),
    tW = n(382483),
    tF = n(385113),
    tH = n(334074),
    tV = n(657718),
    tB = n(789645),
    tz = n(478016);
function tX(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eQ.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, e0.XA)(e7.jM.WIDGET_ADDED));
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
                        children: (0, i.jsx)(tV.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tB.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e5.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(tV.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tz.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                s(e5.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tK() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tF.A], () => tF.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tW.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            n = (0, d.A)(e),
            { tokens: i, fetched: s } = (0, tU.j)(e),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, tH.hj)({
                applications: c,
                dismissibleContent: e1.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tH.SH,
            }),
            m = l.useMemo(() => c.filter((e) => u.includes(e.id)), [c, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(tX, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tY = n(128988),
    tq = n(280450),
    tZ = n(321191),
    tJ = n(896170),
    tQ = n(305866),
    t$ = n(453318),
    t0 = n(321108),
    t1 = n(383329),
    t8 = n(67710);
function t2(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: c } = (0, eQ.NJ)(),
        [d, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, t1.R)({ query: d }),
        f = d.trim().length > 0,
        { gameIds: h, onAddGame: p } = k(t),
        I = (0, t0.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    tf.O.announce(V.intl.string(V.t.q0U3DE)),
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
        E = l.useMemo(() => ({ ...x, threshold: tJ.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        C = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, tJ.Ht)(A, e, E).length), [f, A, E]),
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
            return (0, i.jsx)(tQ.l, {
                className: t8.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, i.jsxs)(t$.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: E,
                    customMatchSorter: f ? v : void 0,
                    children: [
                        (0, i.jsx)(t$.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: S,
                        }),
                        (0, i.jsx)(t$.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function t7(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(t2, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(q.m, {
                text: V.intl.string(V.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(tn.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: ti.T,
                    "aria-label": V.intl.string(V.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function t5(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(t2, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: t8.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tg.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let t3 = l.createContext(null);
function t4(e) {
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
    return (0, i.jsx)(t3.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function t6() {
    let e = l.useContext(t3);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var t9 = n(67438);
function ne(e) {
    let { widget: t } = e,
        n = (0, W.cv)(t.type),
        l = 1 === n,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? t9.O : t9.k,
        children: [
            l && (0, i.jsx)(t5, { widget: t, widgetType: t.type }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var nt = n(683071),
    nn = n(312252);
function ni(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, W.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: nn.l,
              children: (0, i.jsx)(nt.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var nl = n(249264),
    ns = n(148420);
function nr(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tx.r)();
    return (0, i.jsx)("ul", {
        className: ns.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(nl.A, {
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
function na(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, tt.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = t6(),
        d = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nr, { ...e, games: d }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(ni, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tx.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function no(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(na, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(ne, { widget: n }),
    });
}
function nc(e) {
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
                ? (0, i.jsx)(nl.A, {
                      user: t,
                      widgetType: n.type,
                      game: c,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(ne, { widget: n }),
    });
}
var nd = n(793693);
function nu(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nd.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var ng = n(686246),
    nm = n(201438),
    nx = n(788593),
    nf = n(858808),
    nh = n(365611),
    np = n(900850);
function nI(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: c } = (0, tx.r)(),
        d = l.useRef(null);
    return (0, i.jsx)(tm.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => d.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(n, e, t),
        onEnd: () => c(s.gameId),
        className: np.kL,
        dropBeforeClassName: np.A,
        dropAfterClassName: np.Ze,
        draggingClassName: np.Id,
        children: (0, i.jsx)("div", { ref: d, className: np.An, children: o }),
    });
}
function nj(e) {
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
        { coverImageUrl: d, gameName: u, isLoading: g } = (0, nm.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tx.r)(),
        x = s && !r,
        { isDragging: f } = (0, ng.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nx.A, {
                    imageSrc: d,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == d || r ? void 0 : nh.iL,
                    hideTooltip: f,
                    coverRef: c,
                }),
                x && (0, i.jsx)(tm.jV, { buttonRef: m(t.gameId), className: np.BU }),
                x && (0, i.jsx)(nf.A, { game: t, widgetType: l, className: np.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: nh.mD })
        : x
          ? (0, i.jsx)(nI, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: d, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: np.kL, children: h() });
}
function nA(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tx.r)();
    return (0, i.jsx)(nu, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nj, {
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
function nv(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, tt.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = t6(),
        d = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nA, { ...e, games: d }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(ni, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tx.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nE(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nv, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(ne, { widget: n }),
    });
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
                ? (0, i.jsx)(nv, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(ne, { widget: n }),
    });
}
var nS = n(297264),
    nb = n(915089),
    ny = n(772168);
function nT(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nm.A)(t),
        c = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        d = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || c
        ? (0, i.jsx)("div", { className: nh.mD })
        : (0, i.jsx)(q.m, {
              text: d,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: ny.c9,
                  onClick: l,
                  "aria-label": d,
                  children: [
                      (0, i.jsx)(nx.A, {
                          className: ny.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tg.PlusLargeIcon, { size: "md", className: ny.Xv, color: eP.A.colors.WHITE }),
                  ],
              }),
          });
}
function nN(e) {
    let { userId: t, games: n, onDismiss: l, onClick: s, className: a } = e,
        o = (0, nb.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(ny.kL, a),
        "aria-labelledby": o,
        children: [
            (0, i.jsxs)("div", {
                className: ny.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: ny.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: l,
                        children: (0, i.jsx)(tB.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(nS.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: V.intl.string(V.t.zMUr6Z),
                    }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: ny.Vg,
                children: n.map((e) => {
                    let { gameId: n } = e;
                    return (0, i.jsx)(
                        "li",
                        { children: (0, i.jsx)(nT, { onClick: () => s(n), userId: t, gameId: n }) },
                        n,
                    );
                }),
            }),
        ],
    });
}
function nk(e) {
    let { widgetType: t, ...n } = e,
        { games: s, onAddGame: r } = k(t),
        { setExpanded: a } = t6(),
        { trackUserProfileEditAction: o } = (0, eQ.NJ)(),
        c = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, i.jsx)(nN, { games: s, onClick: c, ...n });
}
var nw = n(870961);
function nR(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nc, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(no, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nC, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nE, { widget: t, ...n });
        default:
            return null;
    }
}
function nL(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: c } = t6(),
        { shouldShowSuggestions: d, handleDismissSuggestions: u } = (function (e) {
            let [t, n] = l.useState(!1),
                i = e.type,
                s = (0, a.bG)([tq.default, tZ.A], () => {
                    let e = tq.default.getId();
                    if (null == e) return !1;
                    let t = tZ.A.getUserProfile(e);
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
    return (0, i.jsx)(nR, {
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
                          t7,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => c(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nk, { userId: n.id, widgetType: t.type, onDismiss: u, className: nw.r }),
        ...o,
    });
}
function nO(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(t4, { widgetType: t.type, children: (0, i.jsx)(nL, { widget: t, ...n }) });
}
var nP = n(271383),
    n_ = n(94160),
    nD = n(96173),
    nG = n(788259),
    nM = n(269507);
function nU(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eQ.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        d = (0, a.bG)([tZ.A], () => tZ.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e3(!d),
        m = (0, nD.A)();
    return (
        l.useEffect(() => {
            r.current || d || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [d, n]),
        (0, i.jsxs)("div", {
            className: nM.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nM.FS,
                    children: [
                        (0, i.jsx)(nS.D, {
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
                        className: nM.ZW,
                        "aria-label": V.intl.string(V.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, i.jsx)(nG.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !d && (0, i.jsx)(e4, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var nW = n(366209);
function nF(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(O.A, { widget: t, ...n })
        : t instanceof I.Tu
          ? (0, i.jsx)(eK, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(nO, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(tM, { widget: t, ...n })
              : null;
}
function nH() {
    return (0, i.jsxs)("div", {
        className: nW.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function nV(e) {
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
                        children: [(0, i.jsx)(te, { className: nW.cG }), c && (0, i.jsx)(nH, {}), (0, i.jsx)(tK, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        nF,
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
        ? (0, i.jsx)(nU, { userId: t.id })
        : o
          ? (0, i.jsx)(tt.D, { children: A() })
          : A();
}
function nB(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, w.i)({ containerRef: s });
    let a = (0, nP.k)(t.id);
    return (0, i.jsxs)(n_.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nW.XG, { [nW.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(tY.A, { scrollerRef: s }), (0, i.jsx)(nV, { user: t, ...n })],
    });
}
