n.d(t, { A: () => nD, u: () => nO });
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
    v = n(958805),
    E = n(61881),
    S = n(435558),
    C = n(196765),
    b = n(540185),
    T = n(282435);
let N = (0, S.sampleSize)(T.sx, T.sx.length),
    y = (0, C.v)((e, t) => ({
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
function k(e) {
    let { bump: t, bumpMultiple: n, gameIds: i } = y();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = y(),
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
        children: (0, i.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? V.intl.string(V.t["6MwJo/"]) : V.intl.string(V.t.lBeKY2),
        }),
    });
}
var X = n(866665),
    K = n(245604),
    Y = n(43990),
    q = n(241326),
    J = n(33969),
    Z = n(448766),
    Q = n(372638),
    $ = n(761431),
    ee = n(770178);
let et = l.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function en(e) {
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
    return (0, i.jsx)(et.Provider, { value: c, children: t });
}
var ei = n(892572);
function el(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: c = !0, disableMarkdown: u = !1 } = e,
        g = c ? Z.d : Z.j,
        { textRef: m, lineClamp: x } = (function (e, t) {
            let { isExpanded: n, setAnyFieldClipped: i } = l.useContext(et),
                s = l.useId(),
                r = l.useRef(null),
                a = l.useCallback(() => {
                    let e = r.current;
                    null != e && i(s, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [s, i]);
            return (
                (0, ee.g)(r, a, [n, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                l.useEffect(() => () => i(s, !1), [s, i]),
                { textRef: r, lineClamp: n ? void 0 : e }
            );
        })(o, a);
    return (0, i.jsx)(d.E, {
        ref: m,
        className: r()(ei.YD, { [ei.Lq]: o > 1 }, t),
        variant: n,
        color: s,
        lineClamp: x,
        children: u ? a : g(a),
    });
}
function es(e) {
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
        m = (0, $.TX)({ value: t, onCommit: g }),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(el, { interactive: !1, variant: s, color: r, value: t, maxLines: d, disableMarkdown: u }),
        f = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: c || m.isEditing,
            preview: x,
            placeholder: n,
            editButtonAriaLabel: n,
            label: n,
            maxLength: o,
            className: ei.ZZ,
        };
    return 1 === d ? (0, i.jsx)($.yV, { ...f, size: "compact" }) : (0, i.jsx)(Q.f, { ...f, rows: 1, maxRows: d });
}
function er(e) {
    return e.canEdit
        ? (0, i.jsx)(es, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(el, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var ea = n(326009),
    eo = n(922016),
    ed = n(980707),
    ec = n(477782),
    eu = n(750943),
    eg = n(428610),
    em = n(22231),
    ex = n(946274);
function ef(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    function a() {
        (0, ex.AM)(t.unprocessedFile, (e, n) => s(e, n, t.transform));
    }
    return (0, i.jsx)(eo.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(ed.W, {
                "data-menu-migrated": !0,
                navId: "personal-widget-image-edit-menu",
                onClose: t,
                onSelect: void 0,
                "aria-label": V.intl.string(V.t.RWkUzH),
                children: (0, i.jsxs)(ec.rX, {
                    children: [
                        (0, i.jsx)(ec.Dr, {
                            id: "change-image",
                            label: V.intl.string(V.t.dh0LD5),
                            action: r,
                            icon: eu.X,
                            leadingAccessory: { type: "icon", icon: eu.X },
                        }),
                        (0, i.jsx)(ec.Dr, {
                            id: "reposition-image",
                            label: V.intl.string(V.t.je0LTI),
                            action: a,
                            icon: eg.K,
                            leadingAccessory: { type: "icon", icon: eg.K },
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(J.Y, {
                ...e,
                ref: n,
                icon: em.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: V.intl.string(V.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function eh(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return null == t
        ? (0, i.jsx)(J.Y, {
              ref: n,
              icon: eu.X,
              variant: "overlay-secondary",
              tooltipText: V.intl.string(V.t.dh0LD5),
              disabled: l,
              onClick: r,
          })
        : (0, i.jsx)(ef, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r });
}
var ep = n(691540),
    eI = n(857250),
    ej = n(97483),
    eA = n(192308),
    ev = n(765548),
    eE = n(229531),
    eS = n(515718),
    eC = n(741394),
    eb = n(38405);
function eT(e) {
    let { uploadType: t, returnRef: s, onUploadSuccess: r } = e,
        a = l.useRef(0),
        [o, d] = l.useState(null),
        [c, u] = l.useState(null),
        g = (0, ev.A)(r),
        m = l.useCallback(() => {
            (a.current = a.current + 1), d(null), u(null);
        }, []),
        x = l.useCallback(
            async (e, t, n, i) => {
                a.current = a.current + 1;
                let l = a.current;
                d(e);
                try {
                    let s = await v.A.uploadWidgetAsset(t);
                    if (a.current !== l) return;
                    d(null), u({ filename: s, unprocessedFile: n, transform: i }), g({ filename: s, localDataUri: e });
                } catch (e) {
                    if (a.current !== l) return;
                    d(null), (0, ep.P0)((0, eI.o)(V.intl.string(V.t.F4Neqh), ej.Ck.FAILURE)), eb.A.captureException(e);
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
                    o = (0, eS.aU)(s);
                o.size > 0xa00000
                    ? (0, ep.P0)((0, eI.o)(V.intl.string(V.t.YbdEFK), ej.Ck.FAILURE))
                    : x(
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
            [x],
        );
    return {
        cropAndUpload: l.useCallback(
            (e, l, r) => {
                (0, eA.openModalLazy)(
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
            (e) => (null != c && null != e && "filename" in e && e.filename === c.filename ? c : null),
            [c],
        ),
    };
}
var eN = n(652215),
    ey = n(339984),
    ek = n(148548);
function ew() {
    return (0, i.jsx)(X.m, {
        text: V.intl.string(V.t.gQmDk4),
        children: (0, i.jsxs)(H.D, {
            className: ek.YN,
            "aria-label": V.intl.string(V.t.gQmDk4),
            onClick: function () {
                (0, W.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
            },
            children: [
                (0, i.jsx)("div", { className: ek.JD }),
                (0, i.jsx)("div", { className: ek.xJ, children: (0, i.jsx)(K.U, { size: "sm" }) }),
                (0, i.jsx)("div", { className: ek.JD }),
            ],
        }),
    });
}
function eR(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        d = l.useRef(null);
    function c(e) {
        (0, W.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== P.K.COVER) return t;
            let i = [...t.sections];
            return (i[s] = e(n)), new I.Tu({ ...t, sections: i });
        });
    }
    function u(e) {
        c((t) => ({ ...t, title: e }));
    }
    function g(e) {
        c((t) => ({ ...t, subtitle: e }));
    }
    let {
        cropAndUpload: m,
        previewUri: x,
        cancelUpload: f,
        getLastEdit: h,
    } = eT({
        uploadType: ey.HL.PERSONAL_WIDGET_COVER,
        returnRef: d,
        onUploadSuccess: (e) => c((t) => ({ ...t, image: e })),
    });
    function p() {
        f(), c((e) => ({ ...e, image: void 0 }));
    }
    function j() {
        o.current?.activateUploadDialogue();
    }
    function A() {
        (0, W.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let v = null != x,
        E = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        S = null != n.image || v,
        C = S || a,
        b = h(n.image);
    return (0, i.jsx)(Y.N, {
        theme: S ? eN.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: r()(ek.kL, { [ek.Vp]: C }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsx)("div", {
                              className: ek.El,
                              children: (0, i.jsx)(ea.A, {
                                  cropAndUpload: m,
                                  imageInputRef: o,
                                  className: ek.Sl,
                                  canEdit: a,
                                  userId: t,
                                  image: n.image,
                                  previewUri: x,
                              }),
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(J.A, {
                              className: ek.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(eh, {
                                            lastEdit: b,
                                            buttonRef: d,
                                            disabled: v,
                                            cropAndUpload: m,
                                            onChangeImage: j,
                                        })
                                      : null,
                                  (0, i.jsx)(J.Y, {
                                      icon: q.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: S ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                      onClick: S ? p : A,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(ek.hQ, e, { [ek.Vp]: C }),
                        children: [
                            S && E ? (0, i.jsx)("div", { className: ek.cw }) : null,
                            (0, i.jsx)(er, {
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
                            (0, i.jsx)(er, {
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
var eL = n(661531),
    eO = n(603090);
function eP(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: eO.cR,
        children: [
            (0, i.jsx)(eu.X, { size: "xs", color: eL.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function e_(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: r, onFieldRemove: a } = e,
        {
            cropAndUpload: o,
            previewUri: d,
            cancelUpload: c,
        } = eT({
            uploadType: ey.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => r(l.key, (t) => ({ ...t, image: e })),
        }),
        u = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: eO.ez,
        children: [
            u
                ? (0, i.jsxs)("div", {
                      className: eO.tF,
                      children: [
                          (0, i.jsx)(ea.A, {
                              className: eO.k9,
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: d,
                              cropAndUpload: o,
                          }),
                          s
                              ? (0, i.jsx)(J.A, {
                                    className: eO.ij,
                                    children: (0, i.jsx)(J.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: V.intl.string(V.t.RyK5Ww),
                                        onClick: function () {
                                            c(),
                                                r(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                );
                                        },
                                        icon: q.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eO.oT,
                children: [
                    (0, i.jsx)(er, {
                        canEdit: s,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: V.intl.formatToPlainString(V.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            r(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, i.jsx)(er, {
                        canEdit: s,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: l.description,
                        placeholder: V.intl.formatToPlainString(V.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            r(l.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 90,
                        maxLines: 4,
                    }),
                ],
            }),
            s
                ? (0, i.jsxs)(J.A, {
                      className: eO.Ms,
                      children: [
                          u
                              ? null
                              : (0, i.jsx)(J.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: V.intl.string(V.t.i3vRzP),
                                    onClick: function () {
                                        r(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: eu.X,
                                }),
                          (0, i.jsx)(J.Y, {
                              variant: "overlay-secondary",
                              tooltipText: V.intl.string(V.t.g2jVww),
                              onClick: function () {
                                  a(l.key);
                              },
                              icon: q.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eD(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s } = e;
    function r(e) {
        (0, W.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== P.K.FIELDS) return t;
            let i = [...t.sections];
            return (i[l] = { ...n, fields: e(n.fields) }), new I.Tu({ ...t, sections: i });
        });
    }
    function a(e, t) {
        r((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let s = [...n];
            return (s[i] = t(l)), s;
        });
    }
    function o(e) {
        r((t) => t.filter((t) => t.key !== e));
    }
    let d = n.fields.map((e, n) =>
        (0, i.jsx)(e_, { index: n, userId: t, field: e, canEdit: s, onFieldChange: a, onFieldRemove: o }, e.key),
    );
    return (s &&
        n.fields.length < 4 &&
        d.push(
            (0, i.jsx)(
                eP,
                {
                    onClick: function () {
                        r((e) => [...e, (0, I.yL)()]);
                    },
                },
                "add-entry",
            ),
        ),
    0 === d.length)
        ? null
        : (0, i.jsx)("div", { className: eO.kL, children: d });
}
var eG = n(202541),
    eM = n(877068);
let eU = { section: eN.JJy.PERSONAL_WIDGET };
function eW(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eM.wx,
        children: [
            (0, i.jsx)(G.A, { size: "xs", className: eM.nr }),
            (0, i.jsx)(er, {
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
function eF(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s } = e;
    switch (n.type) {
        case P.K.COVER:
            return (0, i.jsx)(eR, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case P.K.FIELDS:
            return (0, i.jsx)(eD, { userId: t, section: n, sectionIndex: l, canEdit: s });
    }
}
function eH() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eG.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eM.hc,
              children: [
                  (0, i.jsx)(_.h, { color: "nitro-pink", className: eM.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eM.LK,
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
                      subscriptionTier: eG.pe.TIER_2,
                      defaultTextOverride: V.intl.string(V.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eU,
                  }),
              ],
          });
}
function eV() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = l.useContext(et);
    return e || t ? (0, i.jsx)(z, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eB(e) {
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
        className: eM.Nr,
        headerClassName: eM.JE,
        children: (0, i.jsxs)("div", {
            className: eM.kL,
            children: [
                (0, i.jsx)(eW, { widget: t, canEdit: d }),
                d && !c ? (0, i.jsx)(ew, {}) : null,
                t.sections.map((e, t) => (0, i.jsx)(eF, { userId: n.id, section: e, sectionIndex: t, canEdit: d }, t)),
                (0, i.jsx)(eV, {}),
                d ? (0, i.jsx)(eH, {}) : null,
            ],
        }),
    });
}
function ez(e) {
    return (0, i.jsx)(en, { children: (0, i.jsx)(eB, { ...e }) });
}
var eX = n(702841),
    eK = n(821609),
    eY = n(403581),
    eq = n(307301),
    eJ = n(183555),
    eZ = n(465318),
    eQ = n(384377),
    e$ = n(554146),
    e0 = n(43105),
    e1 = n(131607),
    e8 = n(518477),
    e2 = n(49999);
function e7() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eZ.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e1.kn)(e && t ? [e$.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === e$.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function e5(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)();
    return n
        ? (0, i.jsx)(e0.A, {
              targetElementRef: t,
              position: "left",
              title: V.intl.string(V.t.KKGxNt),
              body: V.intl.string(V.t["IS+QTV"]),
              onRequestClose: () => l(e2.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, eQ.XA)(e8.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var e3 = n(410453);
function e6(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eJ.NJ)(),
        a = l.useCallback(() => {
            n && s(e2.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eQ.XA)(e8.jM.WIDGET_ADDED);
        }, [r, n, s]);
    return (0, i.jsx)(eK.$, {
        icon: eY.t,
        text: V.intl.string(V.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function e4(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [c, u] = e7(),
        g = (function () {
            let e = (0, eX.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: n, showCreateEntrypoint: i } = eZ.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = l.useCallback(() => {
            c && u(e2.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, eA.openModalLazy)(
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
            g ? (0, i.jsx)(e6, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(eK.$, {
                icon: eq.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e5, { targetElementRef: g ? o : a, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var e9 = n(192),
    te = n(408278),
    tt = n(499373),
    tn = n(793574),
    ti = n(111994),
    tl = n(314531),
    ts = n(3026);
n(600253);
var tr = n(936026);
function ta(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tr.Qw, { [tr.qf]: n }),
        children: (0, i.jsx)(ts.A, { children: t }),
    });
}
function to(e) {
    let { clipId: t, title: n } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        a = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, W.mI)(t, i),
                    s({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, s],
        ),
        o = (0, $.TX)({ value: n, onCommit: a }),
        d = V.intl.string(V.t["2gwc+H"]);
    return (0, i.jsx)($.yV, {
        ...o,
        size: "compact",
        removeVerticalPadding: !0,
        className: r()(tr.ZZ, { [tr.Dy]: o.isEditing }),
        preview: (0, i.jsxs)("span", {
            className: r()(tr.$, tr.TG),
            children: [
                (0, i.jsx)(em.PencilIcon, { size: "xxs", color: "currentColor", className: tr.wz }),
                "" === n.trim() ? (0, i.jsx)(ta, { value: d, isPlaceholder: !0 }) : (0, i.jsx)(ta, { value: n }),
            ],
        }),
        placeholder: d,
        editButtonAriaLabel: V.intl.string(V.t.PDnM11),
        label: V.intl.string(V.t.PDnM11),
        maxLength: 200,
    });
}
function td(e) {
    let { clipId: t, title: n, allowEditing: l } = e,
        s = null != n && "" !== n.trim();
    return l || s
        ? l
            ? (0, i.jsx)(to, { clipId: t, title: n ?? "" })
            : (0, i.jsx)("span", { className: tr.$, children: (0, i.jsx)(ta, { value: n ?? "" }) })
        : null;
}
var tc = n(663341),
    tu = n(451395),
    tg = n(823016),
    tm = n(765178),
    tx = n(539572),
    tf = n(195880),
    th = n(696016);
let tp = (0, C.v)(() => ({ localClips: new Map() }));
function tI(e, t) {
    tp.setState((n) => ({ localClips: new Map(n.localClips).set(e, t) }));
}
function tj(e) {
    tp.setState((t) => {
        let n = new Map(t.localClips);
        return n.delete(e), { localClips: n };
    });
}
async function tA(e, t) {
    if (!tp.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, ep.P0)((0, eI.o)(V.intl.string(V.t.xcLXWy), ej.Ck.FAILURE));
        tI(e.id, { status: "exporting", clip: e });
        try {
            let n = await (0, tx.VO)(e, { analyticsLocations: t });
            tI(e.id, { status: "uploading", clip: e, progress: 0 });
            let i = new File([n], "clip.mp4", { type: "video/mp4" }),
                l = await v.A.uploadWidgetClip(i, {
                    onProgress: (t) => {
                        var n;
                        return (
                            (n = e.id),
                            void tp.setState((e) => {
                                let i = e.localClips.get(n);
                                return i?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(n, { ...i, progress: t }) };
                            })
                        );
                    },
                });
            tI(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, W.XW)({
                    status: "pending",
                    id: (0, tf.m)(),
                    sourceClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            tj(e.id),
                th.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, ep.P0)((0, eI.o)(V.intl.string(V.t.iufib1), ej.Ck.FAILURE));
        }
    }
}
function tv(e) {
    let { widgetClipId: t, sourceClipId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        r = V.intl.string(V.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(X.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(te.K, {
                "aria-label": r,
                icon: q.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != n && tj(n),
                        tm.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tE = n(233002);
function tS(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: d, manageFocusOnReorder: c } = (0, tg.r)(),
        u = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tE.Vs, { [tE.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(tl.A, { item: t, ringSize: "sm", className: tE.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tu.jV, { buttonRef: d(t.key), className: tE.BU }),
                            (0, i.jsx)(tv, {
                                widgetClipId: t.key,
                                sourceClipId: "pending" === t.status ? t.sourceClipId : void 0,
                                className: tE.nM,
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: tE.NI,
        children: g
            ? (0, i.jsx)(tu.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: W.N5,
                  onEnd: () => c(t.key),
                  className: tE.oE,
                  dropBeforeClassName: tE.A,
                  dropAfterClassName: tE.Ze,
                  draggingClassName: tE.Id,
                  children: m,
              })
            : m,
    });
}
function tC(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tE.Xm,
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tS, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tE.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tE.Yn,
                                    "aria-label": V.intl.string(V.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tc.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(tg.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tb = n(457404);
function tT(e) {
    let { children: t } = e;
    return (0, i.jsxs)("div", {
        className: tb.Lw,
        children: [(0, i.jsx)("div", { className: tb.tB }), (0, i.jsx)("div", { className: tb.Qs, children: t })],
    });
}
var tN = n(716112);
function ty(e) {
    let { onClick: t } = e,
        n = V.intl.string(V.t.rI0i0a);
    return (0, i.jsx)(X.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(te.K, { variant: "secondary", size: "sm", icon: tt.T, "aria-label": n, onClick: t }),
    });
}
function tk() {
    return (0, i.jsx)("div", {
        className: tN.p$,
        children: (0, i.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tw(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...c } = e,
        [u, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = tp((e) => e.localClips)),
            l.useMemo(
                () => [
                    ...r.clips.flatMap((e) => {
                        if ("saved" === e.status)
                            return [
                                {
                                    status: "saved",
                                    key: e.id,
                                    videoURL: (function (e, t) {
                                        let n = window.GLOBAL_ENV.CDN_HOST;
                                        if (null != n) return `https://${n}/profile-widget-clips/${e}/${t}`;
                                    })(t, e.fileId),
                                    title: e.title,
                                },
                            ];
                        let n = s.get(e.sourceClipId);
                        return null != n
                            ? [
                                  {
                                      status: "pending",
                                      key: e.id,
                                      sourceClipId: e.sourceClipId,
                                      thumbnail: n.clip.thumbnail,
                                      title: e.title,
                                  },
                              ]
                            : [];
                    }),
                    ...Array.from(s.values()).flatMap((e) => {
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
                [r.clips, s, t],
            )),
        x = o && !0 !== d,
        f = 0 === m.length,
        h = m.length >= 4,
        p = m.find((e) => e.key === u) ?? m[m.length - 1],
        I = l.useCallback(() => {
            (0, eA.openModalLazy)(
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
                        n.e("614146"),
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
                        n.e("469985"),
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
                            initialMainLink: ti.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => tA(e, [tn.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: th.nm },
            );
        }, []);
    return (0, i.jsx)(F.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: tN.kL,
        headerTitle: (0, W.L)(r),
        headerActionButtons: x && f ? [(0, i.jsx)(ty, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != p
                ? (0, i.jsxs)("div", {
                      className: tN.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tN.aM,
                              children: [
                                  (0, i.jsx)(tl.A, { item: p, ringSize: "lg", className: tN.VH }),
                                  (0, i.jsx)(tT, {
                                      children:
                                          ("saved" === p.status || "pending" === p.status) &&
                                          (0, i.jsx)(td, { clipId: p.key, title: p.title, allowEditing: x }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(tC, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                              allowEditing: x,
                          }),
                      ],
                  })
                : (0, i.jsx)(tk, {}),
    });
}
var tR = n(704824),
    tL = n(382483),
    tO = n(385113),
    tP = n(334074),
    t_ = n(657718),
    tD = n(789645),
    tG = n(478016);
function tM(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eJ.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eQ.XA)(e8.jM.WIDGET_ADDED));
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
                    (0, i.jsx)(X.m, {
                        text: V.intl.string(V.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t_.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tD.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e2.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(X.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t_.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tG.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                s(e2.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tU() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tO.A], () => tO.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tL.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            n = (0, c.A)(e),
            { tokens: i, fetched: s } = (0, tR.j)(e),
            r = (0, R.A)(t?.id),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, tP.hj)({
                applications: d,
                dismissibleContent: e$.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tP.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(tM, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tW = n(128988),
    tF = n(280450),
    tH = n(321191),
    tV = n(896170),
    tB = n(305866),
    tz = n(732771),
    tX = n(321108),
    tK = n(383329),
    tY = n(67710);
function tq(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: d } = (0, eJ.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tK.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = k(t),
        I = (0, tX.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    tm.O.announce(V.intl.string(V.t.q0U3DE)),
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
        v = l.useCallback((e) => e, []),
        E = l.useMemo(() => ({ ...x, threshold: tV.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, tV.Ht)(A, e, E).length), [f, A, E]),
        C = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === c.trim() &&
                    "" !== n.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: S(n),
                    }),
                    u(n),
                    (g.current = n);
            },
            [c, d, t, S],
        );
    return (0, i.jsx)(eo.Y, {
        ...a,
        onRequestOpen: () => {
            d({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = "");
        },
        onRequestClose: () => {
            d({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: S(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tB.l, {
                className: tY.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, i.jsxs)(tz.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: E,
                    customMatchSorter: f ? v : void 0,
                    children: [
                        (0, i.jsx)(tz.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, i.jsx)(tz.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function tJ(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(tq, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(X.m, {
                text: V.intl.string(V.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(te.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: tt.T,
                    "aria-label": V.intl.string(V.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tZ(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(tq, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: tY.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tc.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let tQ = l.createContext(null);
function t$(e) {
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
    return (0, i.jsx)(tQ.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function t0() {
    let e = l.useContext(tQ);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var t1 = n(67438);
function t8(e) {
    let { widget: t } = e,
        n = (0, W.cv)(t.type),
        l = 1 === n,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? t1.O : t1.k,
        children: [
            l && (0, i.jsx)(tZ, { widget: t, widgetType: t.type }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var t2 = n(683071),
    t7 = n(312252);
function t5(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, W.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: t7.l,
              children: (0, i.jsx)(t2.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var t3 = n(249264),
    t6 = n(148420);
function t4(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tg.r)();
    return (0, i.jsx)("ul", {
        className: t6.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(t3.A, {
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
function t9(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e9.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = t0(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(t4, { ...e, games: c }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(t5, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tg.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function ne(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(t9, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(t8, { widget: n }),
    });
}
function nt(e) {
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
                ? (0, i.jsx)(t3.A, {
                      user: t,
                      widgetType: n.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(t8, { widget: n }),
    });
}
var nn = n(793693);
function ni(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nn.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nl = n(686246),
    ns = n(201438),
    nr = n(788593),
    na = n(858808),
    no = n(365611),
    nd = n(900850);
function nc(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tg.r)(),
        c = l.useRef(null);
    return (0, i.jsx)(tu.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(n, e, t),
        onEnd: () => d(s.gameId),
        className: nd.kL,
        dropBeforeClassName: nd.A,
        dropAfterClassName: nd.Ze,
        draggingClassName: nd.Id,
        children: (0, i.jsx)("div", { ref: c, className: nd.An, children: o }),
    });
}
function nu(e) {
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
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, ns.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tg.r)(),
        x = s && !r,
        { isDragging: f } = (0, nl.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nr.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : no.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, i.jsx)(tu.jV, { buttonRef: m(t.gameId), className: nd.BU }),
                x && (0, i.jsx)(na.A, { game: t, widgetType: l, className: nd.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: no.mD })
        : x
          ? (0, i.jsx)(nc, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nd.kL, children: h() });
}
function ng(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tg.r)();
    return (0, i.jsx)(ni, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nu, {
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
function nm(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e9.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = t0(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ng, { ...e, games: c }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(t5, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tg.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nx(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nm, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(t8, { widget: n }),
    });
}
function nf(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nm, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(t8, { widget: n }),
    });
}
var nh = n(297264),
    np = n(915089),
    nI = n(772168);
function nj(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, ns.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || d
        ? (0, i.jsx)("div", { className: no.mD })
        : (0, i.jsx)(X.m, {
              text: c,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nI.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, i.jsx)(nr.A, {
                          className: nI.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tc.PlusLargeIcon, { size: "md", className: nI.Xv, color: eL.A.colors.WHITE }),
                  ],
              }),
          });
}
function nA(e) {
    let { userId: t, games: n, onDismiss: l, onClick: s, className: a } = e,
        o = (0, np.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(nI.kL, a),
        "aria-labelledby": o,
        children: [
            (0, i.jsxs)("div", {
                className: nI.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: nI.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: l,
                        children: (0, i.jsx)(tD.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(nh.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: V.intl.string(V.t.zMUr6Z),
                    }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: nI.Vg,
                children: n.map((e) => {
                    let { gameId: n } = e;
                    return (0, i.jsx)(
                        "li",
                        { children: (0, i.jsx)(nj, { onClick: () => s(n), userId: t, gameId: n }) },
                        n,
                    );
                }),
            }),
        ],
    });
}
function nv(e) {
    let { widgetType: t, ...n } = e,
        { games: s, onAddGame: r } = k(t),
        { setExpanded: a } = t0(),
        { trackUserProfileEditAction: o } = (0, eJ.NJ)(),
        d = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, i.jsx)(nA, { games: s, onClick: d, ...n });
}
var nE = n(870961);
function nS(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nt, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(ne, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nf, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nx, { widget: t, ...n });
        default:
            return null;
    }
}
function nC(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = t0(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, n] = l.useState(!1),
                i = e.type,
                s = (0, a.bG)([tF.default, tH.A], () => {
                    let e = tF.default.getId();
                    if (null == e) return !1;
                    let t = tH.A.getUserProfile(e);
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
    return (0, i.jsx)(nS, {
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
                          tJ,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nv, { userId: n.id, widgetType: t.type, onDismiss: u, className: nE.r }),
        ...o,
    });
}
function nb(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(t$, { widgetType: t.type, children: (0, i.jsx)(nC, { widget: t, ...n }) });
}
var nT = n(271383),
    nN = n(94160),
    ny = n(96173),
    nk = n(788259),
    nw = n(269507);
function nR(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([tH.A], () => tH.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e7(!c),
        m = (0, ny.A)();
    return (
        l.useEffect(() => {
            r.current || c || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, n]),
        (0, i.jsxs)("div", {
            className: nw.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nw.FS,
                    children: [
                        (0, i.jsx)(nh.D, {
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
                        className: nw.ZW,
                        "aria-label": V.intl.string(V.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, i.jsx)(nk.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !c && (0, i.jsx)(e5, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var nL = n(366209);
function nO(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(O.A, { widget: t, ...n })
        : t instanceof I.Tu
          ? (0, i.jsx)(ez, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(nb, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(tw, { widget: t, ...n })
              : null;
}
function nP() {
    return (0, i.jsxs)("div", {
        className: nL.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function n_(e) {
    let { user: t, guildId: n, channelId: s } = e,
        r = (0, R.A)(t.id),
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
                        children: [(0, i.jsx)(e4, { className: nL.cG }), d && (0, i.jsx)(nP, {}), (0, i.jsx)(tU, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        nO,
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
            { onLoad: o } = y();
        l.useEffect(() => {
            !n && e && v.A.fetchSuggestedGames();
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
        ? (0, i.jsx)(nR, { userId: t.id })
        : o
          ? (0, i.jsx)(e9.D, { children: A() })
          : A();
}
function nD(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, w.i)({ containerRef: s });
    let a = (0, nT.k)(t.id);
    return (0, i.jsxs)(nN.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nL.XG, { [nL.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(tW.A, { scrollerRef: s }), (0, i.jsx)(n_, { user: t, ...n })],
    });
}
