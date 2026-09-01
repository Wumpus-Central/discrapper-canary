n.d(t, { A: () => nz, u: () => nH });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(885574),
    d = n(834730),
    c = n(429913),
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
    E = n(958805),
    v = n(61881),
    C = n(435558),
    S = n(196765),
    b = n(540185),
    T = n(282435);
let N = (0, C.sampleSize)(T.sx, T.sx.length),
    k = (0, S.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...n.filter((e) => !s.has(e)), ...N],
                wishlistStack: [...i.filter((e) => !s.has(e)), ...N],
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
function y(e) {
    let { bump: t, bumpMultiple: n, gameIds: i } = k();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = k(),
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
    let d = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: d, onAddGame: r };
}
var R = n(600761),
    w = n(667049),
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
        children: (0, i.jsx)(d.E, {
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
        d = l.useCallback(
            (e, t) => {
                t ? o.add(e) : o.delete(e), a(o.size > 0);
            },
            [o],
        ),
        c = l.useMemo(
            () => ({ isExpanded: n, setIsExpanded: s, isAnyFieldClipped: r, setAnyFieldClipped: d }),
            [n, r, d],
        );
    return (0, i.jsx)(ei.Provider, { value: c, children: t });
}
var es = n(892572);
function er(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: c = !0, disableMarkdown: u = !1 } = e,
        g = c ? $.d : $.j,
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
    return (0, i.jsx)(d.E, {
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
            maxLines: d,
            growWidth: c,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => a(e.trim()), [a]),
        m = (0, et.TX)({ value: t, onCommit: g }),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(er, { interactive: !1, variant: s, color: r, value: t, maxLines: d, disableMarkdown: u }),
        f = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: c || m.isEditing,
            preview: x,
            placeholder: n,
            editButtonAriaLabel: n,
            label: n,
            maxLength: o,
            className: es.ZZ,
        };
    return 1 === d
        ? (0, i.jsx)(et.yV, { ...f, size: "compact", textVariant: s })
        : (0, i.jsx)(ee.f, { ...f, rows: 1, maxRows: d, textVariant: s });
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
var ed = n(326009),
    ec = n(922016),
    eu = n(22231),
    eg = n(750943),
    em = n(458499);
function ex(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return (0, i.jsx)(ec.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(em.A, { lastEdit: t, cropAndUpload: s, onChangeImage: r, onClose: n });
        },
        children: (e) =>
            (0, i.jsx)(Y.Y, {
                ...e,
                ref: n,
                icon: eu.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: V.intl.string(V.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function ef(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return null == t
        ? (0, i.jsx)(Y.Y, {
              ref: n,
              icon: eg.X,
              variant: "overlay-secondary",
              tooltipText: V.intl.string(V.t.dh0LD5),
              disabled: l,
              onClick: r,
          })
        : (0, i.jsx)(ex, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r });
}
var eh = n(691540),
    ep = n(857250),
    eI = n(97483),
    ej = n(192308),
    eA = n(765548),
    eE = n(229531),
    ev = n(515718),
    eC = n(741394),
    eS = n(38405);
function eb(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: r, onUploadSuccess: a } = e,
        o = l.useRef(0),
        [d, c] = l.useState(null),
        [u, g] = l.useState(null),
        m = (0, eA.A)(a),
        x = l.useCallback(() => {
            (o.current = o.current + 1), c(null), g(null);
        }, []),
        f = l.useCallback(
            async (e, t, n, i) => {
                o.current = o.current + 1;
                let l = o.current;
                c(e);
                try {
                    let s = await E.A.uploadWidgetAsset(t);
                    if (o.current !== l) return;
                    c(null), g({ filename: s, unprocessedFile: n, transform: i }), m({ filename: s, localDataUri: e });
                } catch (e) {
                    if (o.current !== l) return;
                    c(null), (0, eh.P0)((0, ep.o)(V.intl.string(V.t.F4Neqh), eI.Ck.FAILURE)), eS.A.captureException(e);
                }
            },
            [m],
        ),
        h = l.useCallback(
            (e) => {
                var t, n;
                let i,
                    l,
                    { imageUri: s, file: r, transform: a } = e,
                    o = (0, ev.aU)(s);
                o.size > 0xa00000
                    ? (0, eh.P0)((0, ep.o)(V.intl.string(V.t.YbdEFK), eI.Ck.FAILURE))
                    : f(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (n = o.type),
                              (i = (0, eE.B)(n) ?? "png"),
                              (l = (0, eC.kh)(t)),
                              `${"" !== l ? l : "image"}.${i}`),
                              { type: o.type },
                          ),
                          r,
                          a,
                      );
            },
            [f],
        );
    return {
        cropAndUpload: l.useCallback(
            (e, l, a) => {
                let o = r?.();
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: r } = await Promise.all([
                            n.e("398791"),
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
                            (0, i.jsx)(r, {
                                ...n,
                                file: l,
                                imageUri: e,
                                uploadType: t,
                                returnRef: s,
                                initialTransform: a,
                                cropAspectRatio: o,
                                onCrop: h,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [h, t, s, r],
        ),
        previewUri: d,
        cancelUpload: x,
        getLastEdit: l.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var eT = n(652215),
    eN = n(339984),
    ek = n(148548);
function ey() {
    return (0, i.jsx)(Q, {
        label: V.intl.string(V.t.gQmDk4),
        onClick: function () {
            (0, W.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
        },
        className: ek.GU,
    });
}
function eR(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        d = l.useRef(null),
        c = l.useRef(null);
    function u(e) {
        (0, W.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== P.K.COVER) return t;
            let i = [...t.sections];
            return (i[s] = e(n)), new I.Tu({ ...t, sections: i });
        });
    }
    function g(e) {
        u((t) => ({ ...t, title: e }));
    }
    function m(e) {
        u((t) => ({ ...t, subtitle: e }));
    }
    let x = l.useCallback(() => {
            let e = c.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: f,
            previewUri: h,
            cancelUpload: p,
            getLastEdit: j,
        } = eb({
            uploadType: eN.HL.PERSONAL_WIDGET_COVER,
            returnRef: d,
            getCropAspectRatio: x,
            onUploadSuccess: (e) => u((t) => ({ ...t, image: e })),
        });
    function A() {
        p(), u((e) => ({ ...e, image: void 0 }));
    }
    function E() {
        o.current?.activateUploadDialogue();
    }
    function v() {
        (0, W.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let C = null != h,
        S = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        b = null != n.image || C,
        T = b || a,
        N = j(n.image);
    return (0, i.jsx)(X.N, {
        theme: b ? eT.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: c,
                className: r()(ek.kL, { [ek.Vp]: T }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: ek.El,
                              children: [
                                  (0, i.jsx)(ed.A, {
                                      cropAndUpload: f,
                                      imageInputRef: o,
                                      className: ek.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: h,
                                      editVariant: "tooltip",
                                  }),
                                  b && S ? (0, i.jsx)("div", { className: ek.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(Y.A, {
                              className: ek.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(ef, {
                                            lastEdit: N,
                                            buttonRef: d,
                                            disabled: C,
                                            cropAndUpload: f,
                                            onChangeImage: E,
                                        })
                                      : null,
                                  (0, i.jsx)(Y.Y, {
                                      icon: K.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: b ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                      onClick: b ? A : v,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(ek.hQ, e, { [ek.Vp]: T }),
                        children: [
                            (0, i.jsx)(eo, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                value: n.title,
                                placeholder: V.intl.string(V.t.KqCDvK),
                                onCommit: g,
                                maxLength: 50,
                                maxLines: 2,
                            }),
                            (0, i.jsx)(eo, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: n.subtitle,
                                placeholder: V.intl.string(V.t.k8zZFd),
                                onCommit: m,
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
var ew = n(661531),
    eL = n(603090);
function eO(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: r()(eL.cR, { [eL.mr]: n }),
        children: [
            (0, i.jsx)(eg.X, { size: "xs", color: ew.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function eP(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: a, onFieldRemove: o } = e,
        {
            cropAndUpload: d,
            previewUri: c,
            cancelUpload: u,
            getLastEdit: g,
        } = eb({
            uploadType: eN.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => a(l.key, (t) => ({ ...t, image: e })),
        }),
        m = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: eL.ez,
        children: [
            m
                ? (0, i.jsxs)("div", {
                      className: eL.tF,
                      children: [
                          (0, i.jsx)(ed.A, {
                              className: r()(eL.k9, s ? eL.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: c,
                              cropAndUpload: d,
                              editVariant: "overlay",
                              lastEdit: g(l.image),
                          }),
                          s
                              ? (0, i.jsx)(Y.A, {
                                    className: eL.ij,
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
                className: eL.oT,
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
                      className: eL.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(Y.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: V.intl.string(V.t.i3vRzP),
                                    onClick: function () {
                                        a(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: eg.X,
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
function e_(e) {
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
    function d(e) {
        a((t) => t.filter((t) => t.key !== e));
    }
    function c() {
        a((e) => [...e, (0, I.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!r)
            return (0, i.jsx)("div", { className: eL.kL, children: (0, i.jsx)(eO, { alwaysVisible: !0, onClick: c }) });
    }
    let u = n.fields.map((e, n) =>
            (0, i.jsx)(eP, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: d }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && u.push((0, i.jsx)(eO, { onClick: c }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u.length > 0 ? (0, i.jsx)("div", { className: eL.kL, children: u }) : null,
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
var eD = n(202541),
    eG = n(877068);
let eM = { section: eT.JJy.PERSONAL_WIDGET };
function eU(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eG.wx,
        children: [
            (0, i.jsx)(G.A, { size: "xs", className: eG.nr }),
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
function eW(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    switch (n.type) {
        case P.K.COVER:
            return (0, i.jsx)(eR, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case P.K.FIELDS:
            return (0, i.jsx)(e_, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r });
    }
}
function eF() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eD.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eG.hc,
              children: [
                  (0, i.jsx)(_.h, { color: "nitro-pink", className: eG.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eG.LK,
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: V.intl.string(V.t.WOPVdz),
                          }),
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: V.intl.string(V.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)(D.A, {
                      size: "sm",
                      subscriptionTier: eD.pe.TIER_2,
                      defaultTextOverride: V.intl.string(V.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eM,
                  }),
              ],
          });
}
function eH() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = l.useContext(ei);
    return e || t ? (0, i.jsx)(z, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eV(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === P.K.COVER), [t.sections]);
    return (0, i.jsx)(F.A, {
        userId: n.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eG.Nr,
        headerClassName: eG.JE,
        children: (0, i.jsxs)("div", {
            className: eG.kL,
            children: [
                (0, i.jsx)(eU, { widget: t, canEdit: d }),
                d && !c ? (0, i.jsx)(ey, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eW, { userId: n.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: c }, t),
                ),
                (0, i.jsx)(eH, {}),
                d ? (0, i.jsx)(eF, {}) : null,
            ],
        }),
    });
}
function eB(e) {
    return (0, i.jsx)(el, { children: (0, i.jsx)(eV, { ...e }) });
}
var ez = n(702841),
    eX = n(821609),
    eK = n(403581),
    eY = n(307301),
    eq = n(183555),
    eZ = n(465318),
    eJ = n(384377),
    eQ = n(554146),
    e$ = n(43105),
    e0 = n(131607),
    e1 = n(518477),
    e8 = n(49999);
function e2() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eZ.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e0.kn)(e && t ? [eQ.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === eQ.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function e7(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)();
    return n
        ? (0, i.jsx)(e$.A, {
              targetElementRef: t,
              badge: "beta",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/6eb69edbb7097ad438eaec0f50efb2316dc02df984de7b7423253f599c3e23ce.svg",
              },
              position: "left",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              gradientColor: "nitro-pink",
              title: V.intl.string(V.t.KKGxNt),
              body: V.intl.string(V.t["IS+QTV"]),
              onRequestClose: () => l(e8.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      icon: eK.t,
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, eJ.XA)(e1.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var e3 = n(410453);
function e5(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eq.NJ)(),
        a = l.useCallback(() => {
            n && s(e8.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eJ.XA)(e1.jM.WIDGET_ADDED);
        }, [r, n, s]);
    return (0, i.jsx)(eX.$, {
        icon: eK.t,
        text: V.intl.string(V.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function e4(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [c, u] = e2(),
        g = (function () {
            let e = (0, ez.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, w.A)(e),
                { enabled: n, showCreateEntrypoint: i } = eZ.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = l.useCallback(() => {
            c && u(e8.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("740601"), n.e("422420"), n.e("264707")]).then(
                            n.bind(n, 480142),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, c, u]);
    return (0, i.jsxs)("div", {
        className: r()(e3.w, t),
        children: [
            (0, i.jsx)(d.E, {
                className: e3.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, i.jsx)(e5, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(eX.$, {
                icon: eY.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e7, { targetElementRef: g ? o : a, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var e6 = n(192),
    e9 = n(408278),
    te = n(499373),
    tt = n(793574),
    tn = n(734066),
    ti = n(111994),
    tl = n(314531);
n(926675);
var ts = n(305866),
    tr = n(123181),
    ta = n(229087),
    to = n(753437),
    td = n(382701),
    tc = n(630900);
function tu(e) {
    let { clipId: t, tags: n, allowEditing: s, disableInteraction: r = !1, onEditingChange: a } = e,
        o = s && !r,
        c = l.useMemo(() => n?.filter((e) => null != (0, to.W3)(e)) ?? [], [n]),
        u = c.length > 0,
        g = o && c.length < 20,
        { trackUserProfileEditAction: m } = (0, eq.NJ)(),
        x = l.useRef(null),
        f = l.useRef(new Map()),
        h = l.useRef(null),
        p = l.useRef(null),
        I = l.useRef(null),
        [j, A] = l.useState(c.length),
        [E, v] = l.useState(!1),
        [C, S] = l.useState(!1),
        T = E || C;
    l.useEffect(() => {
        a(T);
    }, [T, a]),
        l.useEffect(() => () => a(!1), [a]);
    let N = l.useCallback(
            (e, n) => {
                (0, W.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
            },
            [t, m],
        ),
        k = l.useCallback(() => {
            S(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: b.x.CLIPS_GALLERY });
        }, [m]),
        y = l.useCallback(() => S(!1), []),
        R = l.useCallback(
            (e) => {
                (0, W.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
            },
            [t, m],
        ),
        w = l.useCallback(() => {
            if (E) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === c.length) return void A(c.length);
            let t = I.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = c.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function s(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (s(c.length, i)) return void A(c.length);
            let r = i - (n + 4),
                a = 0;
            for (; a < c.length && s(a + 1, r); ) a++;
            A(a);
        }, [c, E]);
    (0, en.g)(x, w);
    let L = c.length - j,
        O = L > 0,
        P = l.useCallback(
            (e) => {
                1 === L && v(!1), R(e);
            },
            [R, L],
        );
    return u || g
        ? (0, i.jsxs)("div", {
              className: tc.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: tc.xP,
                      "aria-hidden": !0,
                      children: [
                          c.map((e) =>
                              (0, i.jsx)(
                                  ta.A,
                                  {
                                      tag: e,
                                      variant: "filled",
                                      onRemove: o ? () => {} : void 0,
                                      ref: (t) => {
                                          null != t && f.current.set(e, t);
                                      },
                                  },
                                  e,
                              ),
                          ),
                          (0, i.jsx)("li", {
                              className: tc.lv,
                              ref: h,
                              children: (0, i.jsx)(d.E, {
                                  variant: "text-xxs/medium",
                                  color: "none",
                                  children: `+${c.length}`,
                              }),
                          }),
                      ],
                  }),
                  u &&
                      (0, i.jsx)("ul", {
                          className: tc.nM,
                          "aria-label": V.intl.string(V.t["4Rq3a7"]),
                          children: c
                              .slice(0, j)
                              .map((e) =>
                                  (0, i.jsx)(ta.A, { tag: e, variant: "filled", onRemove: o ? () => R(e) : void 0 }, e),
                              ),
                      }),
                  O &&
                      (0, i.jsx)(tg, {
                          buttonRef: p,
                          numHidden: L,
                          isOpen: E,
                          onOpenChange: v,
                          disableInteraction: r,
                          children: c.map((e) =>
                              (0, i.jsx)(
                                  ta.A,
                                  {
                                      tag: e,
                                      className: tc.Hl,
                                      removeButtonClassName: tc.Nf,
                                      onRemove: o ? () => P(e) : void 0,
                                  },
                                  e,
                              ),
                          ),
                      }),
                  g && (0, i.jsx)(tr.A, { tags: c, onTagsChange: N, onOpen: k, onClose: y, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function tg(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: s, disableInteraction: r, children: a } = e,
        o = V.intl.string(V.t.pWHvBI);
    return r
        ? (0, i.jsx)("div", {
              className: `${tc.lv} ${td.r9}`,
              ref: t,
              children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(ec.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => s(!0),
              onRequestClose: () => s(!1),
              renderPopout: () =>
                  (0, i.jsx)(ts.l, {
                      className: tc.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: tc.ns, children: a }),
                  }),
              children: (e) =>
                  (0, i.jsx)(q.m, {
                      text: o,
                      ariaHidden: !0,
                      children: (0, i.jsx)(H.D, {
                          ...e,
                          innerRef: t,
                          "aria-label": o,
                          "aria-expanded": l,
                          className: tc.lv,
                          children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var tm = n(3026);
n(600253);
var tx = n(936026);
function tf(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tx.Qw, { [tx.qf]: n }),
        children: (0, i.jsx)(tm.A, { children: t }),
    });
}
function th(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, eq.NJ)(),
        o = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, W.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        d = (0, et.TX)({ value: n, onCommit: o }),
        { isEditing: c } = d,
        u = V.intl.string(V.t["2gwc+H"]);
    return (
        l.useEffect(() => {
            s(c);
        }, [c, s]),
        l.useEffect(() => () => s(!1), [s]),
        (0, i.jsx)(et.yV, {
            ...d,
            size: "compact",
            removeVerticalPadding: !0,
            className: r()(tx.ZZ, { [tx.Dy]: d.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(tx.$, tx.TG),
                children: [
                    (0, i.jsx)(eu.PencilIcon, { size: "xxs", color: "currentColor", className: tx.wz }),
                    "" === n.trim() ? (0, i.jsx)(tf, { value: u, isPlaceholder: !0 }) : (0, i.jsx)(tf, { value: n }),
                ],
            }),
            placeholder: u,
            editButtonAriaLabel: V.intl.string(V.t.PDnM11),
            label: V.intl.string(V.t.PDnM11),
            maxLength: 200,
        })
    );
}
function tp(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(th, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: tx.$, children: (0, i.jsx)(tf, { value: n ?? "" }) })
        : null;
}
var tI = n(663341),
    tj = n(451395),
    tA = n(823016),
    tE = n(765178),
    tv = n(282988);
function tC(e) {
    let { widgetClipId: t, localClipId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)(),
        r = V.intl.string(V.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(e9.K, {
                "aria-label": r,
                icon: K.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != n && (0, tv.UE)(n),
                        tE.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tS = n(233002);
function tb(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: d, manageFocusOnReorder: c } = (0, tA.r)(),
        u = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tS.Vs, { [tS.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(tl.A, { item: t, ringSize: "sm", className: tS.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tj.jV, { buttonRef: d(t.key), className: tS.BU }),
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
            ? (0, i.jsx)(tj.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: W.N5,
                  onEnd: () => c(t.key),
                  className: tS.oE,
                  dropBeforeClassName: tS.A,
                  dropAfterClassName: tS.Ze,
                  draggingClassName: tS.Id,
                  children: m,
              })
            : m,
    });
}
function tT(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tS.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
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
                                    children: (0, i.jsx)(tI.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(tA.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tN = n(798108),
    tk = n(789645),
    ty = n(297264),
    tR = n(915089),
    tw = n(772168);
function tL(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tR.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(tw.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tw.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tw.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tk.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(ty.D, {
                        id: s,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: V.intl.string(V.t.zMUr6Z),
                    }),
                ],
            }),
            n,
        ],
    });
}
var tO = n(335978);
function tP(e) {
    let { clip: t } = e,
        n = V.intl.formatToPlainString(V.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        s = l.useCallback(() => {
            (0, tv._A)(t, [tt.A.USER_PROFILE_MODAL_V2]);
        }, [t]);
    return (0, i.jsx)(q.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: tO.Vs,
            "aria-label": n,
            onClick: s,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tO.xn, loading: "lazy" }),
                (0, i.jsx)(tI.PlusLargeIcon, { size: "sm", color: "currentColor", className: tO.Xv }),
            ],
        }),
    });
}
function t_(e) {
    let { clips: t, ...n } = e;
    return (0, i.jsx)(tL, {
        ...n,
        children: (0, i.jsx)("ul", {
            className: tO.p_,
            children: t.map((e) => (0, i.jsx)("li", { className: tO.NI, children: (0, i.jsx)(tP, { clip: e }) }, e.id)),
        }),
    });
}
var tD = n(558285),
    tG = n(608857),
    tM = n(915725),
    tU = n(409067),
    tW = n(696016),
    tF = n(716112);
function tH(e) {
    let { onClick: t } = e,
        n = V.intl.string(V.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(e9.K, { variant: "secondary", size: "sm", icon: te.T, "aria-label": n, onClick: t }),
    });
}
function tV() {
    return (0, i.jsx)("div", {
        className: tF.p$,
        children: (0, i.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tB(e) {
    let t,
        s,
        r,
        { widget: o, user: d, allowEditing: c, disableInteraction: u, ...g } = e,
        [m, x] = l.useState(null),
        [f, h] = l.useState(!1),
        [p, I] = l.useState(!1),
        [j, A] = l.useState(!1),
        E = l.useRef(void 0),
        v = (0, tG.A)(o),
        C =
            ((t = (0, a.yK)([tM.Ay], () => Object.values(tM.Ay.getClips()))),
            (s = (0, a.bG)([tM.Ay], () => tM.Ay.getSettings().showPovClipsInGallery)),
            (r = (0, tv.UQ)()),
            l.useMemo(() => {
                let e = new Set(r.keys());
                for (let t of o.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!s && (0, tU.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, r, s, o.clips])),
        S = (0, tn.sw)(),
        b = c && !0 !== u,
        T = 0 === v.length,
        N = v.length >= 4,
        k = b && S && !N,
        y = b || v.length > 1,
        [R] = l.useState(() => C.length >= 3),
        [w, L] = l.useState(!1),
        O = k && R && !w && C.length > 0,
        P = l.useCallback(() => L(!0), []),
        _ = v.find((e) => e.key === m) ?? v[v.length - 1],
        D = l.useMemo(() => (!0 === u ? [] : v.filter(tG.K)), [v, u]),
        G = null != _ ? D.findIndex((e) => e.key === _.key) : -1,
        M = l.useCallback(() => {
            G < 0 || (0, tD.A)({ clips: D, startingIndex: G });
        }, [D, G]),
        U = l.useCallback(() => {
            E.current = window.setTimeout(() => h(!0), 150);
        }, []),
        B = l.useCallback(() => {
            window.clearTimeout(E.current), h(!1);
        }, []);
    l.useEffect(() => () => window.clearTimeout(E.current), []);
    let z = l.useCallback(() => {
        (0, ej.openModalLazy)(
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
                    n.e("3131"),
                    n.e("918024"),
                    n.e("220287"),
                    n.e("324761"),
                    n.e("203930"),
                    n.e("903663"),
                    n.e("8563"),
                    n.e("647177"),
                    n.e("169201"),
                    n.e("111527"),
                    n.e("496268"),
                    n.e("127272"),
                    n.e("621573"),
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
                        initialMainLink: ti.oH.ALL_CLIPS,
                        onClipClick: (e) => {
                            ((e) => (0, tv._A)(e, [tt.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                        },
                    });
            },
            { modalKey: tW.nm },
        );
    }, []);
    return (0, i.jsx)(F.A, {
        userId: d.id,
        widget: o,
        allowEditing: c,
        disableInteraction: u,
        className: tF.kL,
        headerTitle: (0, W.L)(o),
        headerActionButtons: k && T ? [(0, i.jsx)(tH, { onClick: z }, "clips-gallery-add-clip")] : void 0,
        trailingContent: O && (0, i.jsx)(t_, { clips: C, onDismiss: P }),
        ...g,
        children:
            null != _
                ? (0, i.jsxs)("div", {
                      className: tF.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tF.aM,
                              onMouseEnter: U,
                              onMouseLeave: B,
                              children: [
                                  (0, i.jsx)(tl.A, { item: _, ringSize: "lg", isPlaying: f, className: tF.VH }),
                                  G >= 0 &&
                                      !p &&
                                      !j &&
                                      (0, i.jsx)(H.D, {
                                          className: tF.Hf,
                                          "aria-label": V.intl.string(V.t.CscLHM),
                                          onClick: M,
                                      }),
                                  (0, i.jsx)(tN.A, {
                                      children:
                                          ("saved" === _.status || "pending" === _.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tp, {
                                                      clipId: _.key,
                                                      title: _.title,
                                                      allowEditing: b,
                                                      onEditingChange: I,
                                                  }),
                                                  (0, i.jsx)(tu, {
                                                      clipId: _.key,
                                                      tags: _.tags,
                                                      allowEditing: c,
                                                      disableInteraction: u,
                                                      onEditingChange: A,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          y &&
                              (0, i.jsx)(tT, {
                                  items: v,
                                  selectedKey: _.key,
                                  onSelect: x,
                                  onAddClip: k ? z : void 0,
                                  allowEditing: b,
                              }),
                      ],
                  })
                : (0, i.jsx)(tV, {}),
    });
}
var tz = n(704824),
    tX = n(382483),
    tK = n(385113),
    tY = n(334074),
    tq = n(657718),
    tZ = n(478016);
function tJ(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eq.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eJ.XA)(e1.jM.WIDGET_ADDED));
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
                        children: (0, i.jsx)(tq.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tk.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e8.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(tq.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tZ.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                s(e8.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tQ() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tK.A], () => tK.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tX.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            n = (0, c.A)(e),
            { tokens: i, fetched: s } = (0, tz.j)(e),
            r = (0, w.A)(t?.id),
            o = null == t || null == e || null == i || !s,
            d = l.useMemo(
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
            { eligibleToShow: u, markAsDismissed: g } = (0, tY.hj)({
                applications: d,
                dismissibleContent: eQ.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tY.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(tJ, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var t$ = n(128988),
    t0 = n(280450),
    t1 = n(321191),
    t8 = n(896170),
    t2 = n(453318),
    t7 = n(321108),
    t3 = n(383329),
    t5 = n(67710);
function t4(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: d } = (0, eq.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, t3.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        I = (0, t7.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    tE.O.announce(V.intl.string(V.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    s?.();
            },
            [t, d, s, h, p],
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
        E = l.useCallback((e) => e, []),
        v = l.useMemo(() => ({ ...x, threshold: t8.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        C = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, t8.Ht)(A, e, v).length), [f, A, v]),
        S = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === c.trim() &&
                    "" !== n.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: C(n),
                    }),
                    u(n),
                    (g.current = n);
            },
            [c, d, t, C],
        );
    return (0, i.jsx)(ec.Y, {
        ...a,
        onRequestOpen: () => {
            d({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = "");
        },
        onRequestClose: () => {
            d({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: C(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(ts.l, {
                className: t5.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, i.jsxs)(t2.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: v,
                    customMatchSorter: f ? E : void 0,
                    children: [
                        (0, i.jsx)(t2.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: S,
                        }),
                        (0, i.jsx)(t2.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function t6(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(t4, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(q.m, {
                text: V.intl.string(V.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(e9.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: te.T,
                    "aria-label": V.intl.string(V.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function t9(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(t4, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: t5.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tI.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let ne = l.createContext(null);
function nt(e) {
    let { widgetType: t, children: n } = e,
        s = (0, a.bG)([v.A], () => {
            let e = v.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, W.cv)(t);
            return n.games.length > i;
        }),
        [r, o] = l.useState(s);
    return (0, i.jsx)(ne.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function nn() {
    let e = l.useContext(ne);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var ni = n(67438);
function nl(e) {
    let { widget: t } = e,
        n = (0, W.cv)(t.type),
        l = 1 === n,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? ni.O : ni.k,
        children: [
            l && (0, i.jsx)(t9, { widget: t, widgetType: t.type }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var ns = n(683071),
    nr = n(312252);
function na(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, W.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: nr.l,
              children: (0, i.jsx)(ns.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var no = n(943793),
    nd = n(148420);
function nc(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tA.r)();
    return (0, i.jsx)("ul", {
        className: nd.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(no.A, {
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
function nu(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e6.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nn(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nc, { ...e, games: c }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(na, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tA.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function ng(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nu, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nl, { widget: n }),
    });
}
function nm(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = n.games[0];
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, i.jsx)(no.A, {
                      user: t,
                      widgetType: n.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nl, { widget: n }),
    });
}
var nx = n(793693);
function nf(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nx.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nh = n(686246),
    np = n(201438),
    nI = n(788593),
    nj = n(858808),
    nA = n(365611),
    nE = n(900850);
function nv(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tA.r)(),
        c = l.useRef(null);
    return (0, i.jsx)(tj.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(n, e, t),
        onEnd: () => d(s.gameId),
        className: nE.kL,
        dropBeforeClassName: nE.A,
        dropAfterClassName: nE.Ze,
        draggingClassName: nE.Id,
        children: (0, i.jsx)("div", { ref: c, className: nE.An, children: o }),
    });
}
function nC(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            allowEditing: s,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, np.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tA.r)(),
        x = s && !r,
        { isDragging: f } = (0, nh.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nI.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : nA.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, i.jsx)(tj.jV, { buttonRef: m(t.gameId), className: nE.BU }),
                x && (0, i.jsx)(nj.A, { game: t, widgetType: l, className: nE.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: nA.mD })
        : x
          ? (0, i.jsx)(nv, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nE.kL, children: h() });
}
function nS(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tA.r)();
    return (0, i.jsx)(nf, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nC, {
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
function nb(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e6.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nn(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nS, { ...e, games: c }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(na, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tA.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nT(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nb, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nl, { widget: n }),
    });
}
function nN(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nb, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nl, { widget: n }),
    });
}
var nk = n(875620);
function ny(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, np.A)(t),
        d = (0, a.bG)([v.A], () => v.A.suggestedFetchIsLoading),
        c = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || d
        ? (0, i.jsx)("div", { className: nA.mD })
        : (0, i.jsx)(q.m, {
              text: c,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nk.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, i.jsx)(nI.A, {
                          className: nk.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tI.PlusLargeIcon, { size: "md", className: nk.Xv, color: ew.A.colors.WHITE }),
                  ],
              }),
          });
}
function nR(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: r, onAddGame: a } = y(n),
        { setExpanded: o } = nn(),
        { trackUserProfileEditAction: d } = (0, eq.NJ)(),
        c = l.useCallback(
            (e) => {
                a(e),
                    o(!0),
                    (0, W.ew)({ widgetType: n, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: n });
            },
            [a, n, d, o],
        );
    return (0, i.jsx)(tL, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: nk.Vg,
            children: r.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(ny, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nw = n(870961);
function nL(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nm, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(ng, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nN, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nT, { widget: t, ...n });
        default:
            return null;
    }
}
function nO(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = nn(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, n] = l.useState(!1),
                i = e.type,
                s = (0, a.bG)([t0.default, t1.A], () => {
                    let e = t0.default.getId();
                    if (null == e) return !1;
                    let t = t1.A.getUserProfile(e);
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
        m = g && c,
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
                          t6,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nR, { userId: n.id, widgetType: t.type, onDismiss: u, className: nw.r }),
        ...o,
    });
}
function nP(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(nt, { widgetType: t.type, children: (0, i.jsx)(nO, { widget: t, ...n }) });
}
var n_ = n(669253),
    nD = n(94160),
    nG = n(96173),
    nM = n(788259),
    nU = n(269507);
function nW(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eq.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([t1.A], () => t1.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e2(!c),
        m = (0, nG.A)();
    return (
        l.useEffect(() => {
            r.current || c || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, n]),
        (0, i.jsxs)("div", {
            className: nU.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nU.FS,
                    children: [
                        (0, i.jsx)(ty.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: V.intl.string(V.t["oqalC+"]),
                        }),
                        (0, i.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? V.intl.string(V.t["+W59o5"]) : V.intl.string(V.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
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
                !c && (0, i.jsx)(e7, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
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
          ? (0, i.jsx)(eB, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(nP, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(tB, { widget: t, ...n })
              : null;
}
function nV() {
    return (0, i.jsxs)("div", {
        className: nF.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function nB(e) {
    let { user: t, guildId: n, channelId: s } = e,
        r = (0, w.A)(t.id),
        o = (0, L.A)(t.id),
        d = (function () {
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
                        children: [(0, i.jsx)(e4, { className: nF.cG }), d && (0, i.jsx)(nV, {}), (0, i.jsx)(tQ, {})],
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
        let [n, i, s, r] = (0, a.yK)([v.A], () => [
                v.A.suggestedFetchAttempted,
                v.A.suggestedFetchError,
                v.A.suggestedGameIds,
                v.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = k();
        l.useEffect(() => {
            !n && e && E.A.fetchSuggestedGames();
        }, [n, e]);
        let d = n && !r;
        l.useEffect(() => {
            if (!d) return;
            let e = t.map((e) => e.games).flat();
            i || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [d]);
    })(o, I),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, c.A)(n);
        let { data: i, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== i);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, i.jsx)(nW, { userId: t.id })
        : o
          ? (0, i.jsx)(e6.D, { children: A() })
          : A();
}
function nz(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let a = (0, n_.k)(t.id);
    return (0, i.jsxs)(nD.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nF.XG, { [nF.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(t$.A, { scrollerRef: s }), (0, i.jsx)(nB, { user: t, ...n })],
    });
}
