i.d(t, { A: () => iE, u: () => ij });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(17928),
    o = i(885574),
    d = i(834730),
    c = i(429913),
    u = i(277984),
    g = i(840387),
    m = i(201718),
    x = i(615405),
    f = i(633075),
    h = i(646976),
    p = i(289173),
    I = i(210598),
    j = i(311043),
    v = i(569926),
    A = i(958805),
    E = i(61881),
    S = i(435558),
    N = i.n(S),
    w = i(196765),
    b = i(540185),
    C = i(282435);
let T = (0, S.sampleSize)(C.sx, C.sx.length),
    k = (0, w.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, l) => {
            let s = new Set(l.map((e) => e.applicationId));
            for (let l of (e({
                stack: [...i.filter((e) => !s.has(e)), ...T],
                wishlistStack: [...n.filter((e) => !s.has(e)), ...T],
            }),
            Object.values(b.x)))
                t().setNext(6, l);
        },
        setNext: (e, i) => {
            let n = t().getNext(e, i);
            t()._setGameIds(i, n);
            let l = t().peekNext(7, i);
            t()._setPeekedGameIds(i, l);
        },
        getNext: (e, i) => {
            let n = i === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = n.slice(0, e),
                s = n.slice(e);
            return t()._setStack(i, s), l;
        },
        peekNext: (e, i) => (i === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, i) => {
            let n = t().gameIds[i] ?? [],
                l = n.indexOf(e);
            if (-1 === l) return;
            let s = [...n];
            s.splice(l, 1);
            let r = t().getNext(1, i),
                a = t().peekNext(7, i);
            t()._setGameIds(i, [...s, ...r]), t()._setPeekedGameIds(i, [...a, ...r]);
        },
        bumpMultiple: (e, i) => {
            let n = (t().gameIds[i] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - n.length, i),
                s = t().peekNext(7, i);
            t()._setGameIds(i, [...n, ...l]), t()._setPeekedGameIds(i, [...s, ...l]);
        },
        remove: (e, i) => {
            let n = (i === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(i, n), t()._setPeekedGameIds(i, t().peekNext(7, i));
        },
        _setGameIds: (t, i) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: i } }));
        },
        _setStack: (t, i) => {
            t === b.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: i }) : e({ stack: i });
        },
        _setPeekedGameIds: (t, i) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: i } }));
        },
    }));
function y(e) {
    let { bump: t, bumpMultiple: i, gameIds: n } = k();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = k(),
            n = l.useMemo(() => i[e] ?? [], [i, e]);
        (0, v.x)(n);
        let s = (0, a.yK)([j.A], () => n.map((e) => j.A.isFetching(e)));
        l.useEffect(() => {
            for (let i of n) {
                let n = j.A.didFetchingFail(i),
                    l = j.A.hasNoData(i),
                    s = !!j.A.getGame(i),
                    r = null != j.A.getCoverImageUrl(i);
                (n || l || (s && !r)) && t(i, e);
            }
        }, [n, t, e, s]);
    })(e);
    let s = l.useMemo(() => n[e] ?? [], [n, e]),
        r = l.useCallback(
            (i) => {
                t(i, e);
            },
            [t, e],
        ),
        o = (0, a.yK)([j.A], () => s.map((e) => j.A.isFetching(e)));
    l.useEffect(() => {
        let t = s.filter((e) => {
            let t = j.A.didFetchingFail(e),
                i = j.A.hasNoData(e),
                n = !!j.A.getGame(e),
                l = null != j.A.getCoverImageUrl(e);
            return t || i || (n && !l);
        });
        t.length > 0 && i(t, e);
    }, [s, e, i, o]);
    let d = l.useMemo(() => s.map((e) => ({ applicationId: e })), [s]);
    return { applicationIds: s, games: d, onAddGame: r };
}
var R = i(600761),
    O = i(667049),
    _ = i(579950),
    L = i(605694),
    D = i(869484),
    P = i(403581),
    G = i(735321),
    M = i(623280),
    U = i(866665),
    F = i(939249),
    W = i(499373),
    V = i(661531),
    H = i(408278),
    B = i(241326),
    z = i(43990),
    X = i(807081),
    K = i(480084),
    Y = i(29814),
    q = i(551965),
    Z = i(703067);
let J = ["escape", "text", "strong", "em", "u", "url", "autolink"],
    Q = (0, q.A)([N().pick(Y.Ay.RULES, J), (0, K.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    $ = X.aV(Q),
    ee = (0, q.A)([
        N().pick(Y.Ay.RULES, J),
        (0, K.A)({ enableBuildOverrides: !1 }),
        { link: { react: (e, t, i) => (0, n.jsx)("span", { className: Z.p, children: t(e.content, i) }, i.key) } },
    ]),
    et = X.aV(ee);
var ei = i(761431),
    en = i(995919);
function el(e) {
    let { className: t, variant: i, color: l, value: s, interactive: a = !0 } = e;
    return (0, n.jsx)(d.E, { className: r()(en.Y, t), variant: i, color: l, lineClamp: 1, children: (a ? $ : et)(s) });
}
function es(e) {
    let { className: t, value: i, placeholder: s, variant: r, color: a, onCommit: o, maxLength: d, growWidth: c } = e,
        u = l.useCallback((e) => o(e.trim()), [o]),
        g = (0, ei.TX)({ value: i, onCommit: u }),
        m = "" === i.trim() ? null : (0, n.jsx)(el, { interactive: !1, className: t, variant: r, color: a, value: i });
    return (0, n.jsx)(ei.yV, {
        ...g,
        size: "compact",
        removeVerticalPadding: !0,
        growWidth: c,
        preview: m,
        placeholder: s,
        editButtonAriaLabel: s,
        label: s,
        maxLength: d,
    });
}
function er(e) {
    return e.canEdit
        ? (0, n.jsx)(es, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(el, { className: e.className, variant: e.variant, color: e.color, value: e.value });
}
var ea = i(750943),
    eo = i(691540),
    ed = i(857250),
    ec = i(97483),
    eu = i(259678),
    eg = i(289873),
    em = i(946274),
    ex = i(38405),
    ef = i(652215),
    eh = i(375708),
    ep = i(902391);
function eI(e, t) {
    let i = window.GLOBAL_ENV.CDN_HOST ?? ef.f34;
    return `https://${i}/widget-assets/${e}/${t}`;
}
function ej(e) {
    let { className: t, userId: i, image: l } = e;
    if ("localDataUri" in l) return (0, n.jsx)("img", { className: t, alt: "", src: l.localDataUri });
    let s = eI(i, l.fileId);
    return (0, n.jsx)("img", { className: t, alt: "", src: s, width: l.width, height: l.height });
}
function ev(e) {
    let { canEdit: t } = e;
    return (0, n.jsx)("div", {
        className: ep.qf,
        children: t ? (0, n.jsx)(ea.X, { className: ep.Dm, size: "md" }) : null,
    });
}
function eA(e) {
    let { className: t, userId: i, image: s, previewUri: a, onImageUploadStarted: o, onImageUploadCompleted: d } = e,
        c = l.useRef(0),
        u = l.useCallback(
            async (e, t) => {
                c.current = c.current + 1;
                let i = c.current;
                o?.(e);
                try {
                    let n = await A.A.uploadWidgetAsset(t);
                    if (c.current !== i) return;
                    d({ filename: n, localDataUri: e });
                } catch (e) {
                    if (c.current !== i) return;
                    (0, eo.P0)((0, ed.o)(eh.intl.string(eh.t.F4Neqh), ec.Ck.FAILURE)),
                        ex.A.captureException(e),
                        d(null);
                }
            },
            [o, d],
        ),
        g = a ?? (null != s ? ("localDataUri" in s ? s.localDataUri : eI(i, s.fileId)) : null);
    return (0, n.jsx)(eu.vN, {
        within: !0,
        children: (0, n.jsxs)("div", {
            className: r()(ep.kL, t),
            children: [
                null != g ? (0, n.jsx)("img", { alt: "", src: g, className: ep.Sl }) : (0, n.jsx)(ev, { canEdit: !0 }),
                null != a
                    ? (0, n.jsx)("div", {
                          className: ep.ob,
                          children: (0, n.jsx)(eg.y, { type: eg.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : null,
                (0, n.jsx)(em.Ay, {
                    tabIndex: 0,
                    onChange: u,
                    maxFileSizeBytes: 0xa00000,
                    multiple: !1,
                    "aria-label": eh.intl.string(eh.t["MsUY/S"]),
                }),
            ],
        }),
    });
}
function eE(e) {
    let {
        className: t,
        canEdit: i,
        userId: l,
        image: s,
        previewUri: a,
        onImageUploadStarted: o,
        onImageUploadCompleted: d,
    } = e;
    return i
        ? (0, n.jsx)(eA, {
              className: t,
              userId: l,
              image: s,
              previewUri: a,
              onImageUploadStarted: o,
              onImageUploadCompleted: d,
          })
        : null == s
          ? (0, n.jsx)("div", { className: t, children: (0, n.jsx)(ev, { canEdit: !1 }) })
          : (0, n.jsx)(ej, { className: r()(ep.Sl, t), userId: l, image: s });
}
var eS = i(372638),
    eN = i(231088),
    ew = i(458710);
function eb(e) {
    let { className: t, variant: i, color: l, value: s, maxRows: a, interactive: o = !0 } = e;
    return (0, n.jsx)(d.E, {
        className: r()(en.Y, ew.L, t),
        variant: i,
        color: l,
        lineClamp: a,
        children: (o ? $ : et)(s),
    });
}
function eC(e) {
    let { className: t, value: i, placeholder: s, variant: r, color: a, onCommit: o, maxLength: d, maxRows: c } = e,
        u = l.useCallback((e) => o(e.trim()), [o]),
        g = (0, eN.Ww)({ value: i, onCommit: u }),
        m =
            "" === i.trim()
                ? null
                : (0, n.jsx)(eb, { interactive: !1, className: t, variant: r, color: a, value: i, maxRows: c });
    return (0, n.jsx)(eS.f, {
        ...g,
        removeVerticalPadding: !0,
        preview: m,
        placeholder: s,
        editButtonAriaLabel: s,
        label: s,
        maxLength: d,
        rows: 1,
    });
}
function eT(e) {
    return e.canEdit
        ? (0, n.jsx)(eC, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(eb, {
                className: e.className,
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxRows: e.maxRows,
            });
}
var ek = i(442461);
function ey() {
    return (0, n.jsx)(U.m, {
        text: eh.intl.string(eh.t.mZddSK),
        children: (0, n.jsxs)(F.D, {
            className: ek.YN,
            "aria-label": eh.intl.string(eh.t.mZddSK),
            onClick: function () {
                (0, G.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
            },
            children: [
                (0, n.jsx)("div", { className: ek.JD }),
                (0, n.jsx)("div", {
                    className: ek.xJ,
                    children: (0, n.jsx)(W.T, { size: "sm", color: V.A.colors.ICON_OVERLAY_DARK }),
                }),
            ],
        }),
    });
}
function eR(e) {
    let {
        userId: t,
        image: i,
        canEdit: l,
        uploadPreviewUri: s,
        onImageUploadStarted: r,
        onImageUploadCompleted: a,
        onImageRemove: o,
    } = e;
    return (0, n.jsxs)("div", {
        className: ek.El,
        children: [
            (0, n.jsx)(eE, {
                className: ek.Sl,
                canEdit: l,
                userId: t,
                image: i,
                previewUri: s,
                onImageUploadStarted: r,
                onImageUploadCompleted: a,
            }),
            l && (null != i || null != s)
                ? (0, n.jsx)("div", {
                      className: ek.ij,
                      children: (0, n.jsx)(H.K, {
                          icon: B.u,
                          size: "sm",
                          variant: "overlay-secondary",
                          "aria-label": eh.intl.string(eh.t.RyK5Ww),
                          onClick: o,
                      }),
                  })
                : null,
        ],
    });
}
function eO(e) {
    let { userId: t, section: i, sectionIndex: s, canEdit: a } = e,
        [o, d] = l.useState(null),
        c = l.useRef(!1),
        u = null != o;
    function g(e) {
        (0, G.AD)((t) => {
            let i = t.sections[s];
            if (i?.type !== D.K.COVER) return t;
            let n = [...t.sections];
            return (n[s] = e(i)), new I.Tu({ ...t, sections: n });
        });
    }
    function m(e) {
        g((t) => ({ ...t, title: e }));
    }
    function x(e) {
        g((t) => ({ ...t, subtitle: e }));
    }
    function f() {
        (c.current = !1), d(null), g((e) => ({ ...e, image: void 0 }));
    }
    function h(e) {
        (c.current = !0), d(e);
    }
    function p(e) {
        c.current && ((c.current = !1), d(null), null != e && g((t) => ({ ...t, image: e })));
    }
    function j() {
        (0, G.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let v = null != i.image || u,
        A = v || a;
    return (0, n.jsx)(z.N, {
        theme: v ? ef.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: r()(ek.kL, { [ek.Vp]: A }, e),
                children: [
                    a || null != i.image
                        ? (0, n.jsx)(eR, {
                              userId: t,
                              image: i.image,
                              canEdit: a,
                              uploadPreviewUri: o,
                              onImageUploadStarted: h,
                              onImageUploadCompleted: p,
                              onImageRemove: f,
                          })
                        : null,
                    a && !v
                        ? (0, n.jsx)("div", {
                              className: ek.kI,
                              children: (0, n.jsx)(U.m, {
                                  text: eh.intl.string(eh.t.g2jVww),
                                  children: (0, n.jsx)(H.K, {
                                      icon: B.u,
                                      size: "sm",
                                      variant: "overlay-secondary",
                                      "aria-label": eh.intl.string(eh.t.g2jVww),
                                      onClick: j,
                                  }),
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: r()(ek.hQ, e, { [ek.Vp]: A }),
                        children: [
                            v ? (0, n.jsx)("div", { className: ek.cw }) : null,
                            (0, n.jsx)(er, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-default",
                                value: i.title,
                                placeholder: eh.intl.string(eh.t.KqCDvK),
                                onCommit: m,
                                maxLength: 100,
                            }),
                            (0, n.jsx)(eT, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: i.subtitle,
                                placeholder: eh.intl.string(eh.t.k8zZFd),
                                onCommit: x,
                                maxLength: 150,
                                maxRows: 3,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
i(321073);
var e_ = i(335225);
function eL(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(F.D, {
        onClick: t,
        className: e_.cR,
        children: [
            (0, n.jsx)(ea.X, { size: "xs", color: V.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: eh.intl.string(eh.t["9AY+/x"]),
            }),
        ],
    });
}
function eD(e) {
    let { index: t, userId: i, field: s, canEdit: r, onFieldChange: a, onFieldRemove: o } = e,
        [d, c] = l.useState(null),
        u = l.useRef(!1),
        g = r ? !0 !== s.hideImage : null != s.image;
    return (0, n.jsxs)("div", {
        className: e_.ez,
        children: [
            g
                ? (0, n.jsxs)("div", {
                      className: e_.tF,
                      children: [
                          (0, n.jsx)(eE, {
                              className: e_.k9,
                              canEdit: r,
                              userId: i,
                              image: s.image,
                              previewUri: d,
                              onImageUploadStarted: function (e) {
                                  (u.current = !0), c(e);
                              },
                              onImageUploadCompleted: function (e) {
                                  u.current &&
                                      ((u.current = !1), c(null), null != e && a(s.key, (t) => ({ ...t, image: e })));
                              },
                          }),
                          r
                              ? (0, n.jsx)("div", {
                                    className: e_.ij,
                                    children: (0, n.jsx)(U.m, {
                                        text: eh.intl.string(eh.t.RyK5Ww),
                                        children: (0, n.jsx)(H.K, {
                                            size: "sm",
                                            icon: B.u,
                                            "aria-label": eh.intl.string(eh.t.RyK5Ww),
                                            onClick: function () {
                                                (u.current = !1),
                                                    c(null),
                                                    a(s.key, (e) =>
                                                        null != e.image
                                                            ? { ...e, image: void 0 }
                                                            : { ...e, image: void 0, hideImage: !0 },
                                                    );
                                            },
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, n.jsxs)("div", {
                className: e_.oT,
                children: [
                    (0, n.jsx)(er, {
                        canEdit: r,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: s.title,
                        placeholder: eh.intl.formatToPlainString(eh.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 50,
                    }),
                    (0, n.jsx)(er, {
                        canEdit: r,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: s.description,
                        placeholder: eh.intl.formatToPlainString(eh.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 100,
                    }),
                ],
            }),
            r
                ? (0, n.jsxs)("div", {
                      className: e_.Ms,
                      children: [
                          g
                              ? null
                              : (0, n.jsx)(U.m, {
                                    text: eh.intl.string(eh.t.i3vRzP),
                                    children: (0, n.jsx)(H.K, {
                                        size: "sm",
                                        icon: ea.X,
                                        "aria-label": eh.intl.string(eh.t.i3vRzP),
                                        onClick: function () {
                                            a(s.key, (e) => ({ ...e, hideImage: void 0 }));
                                        },
                                    }),
                                }),
                          (0, n.jsx)(U.m, {
                              text: eh.intl.string(eh.t.g2jVww),
                              children: (0, n.jsx)(H.K, {
                                  size: "sm",
                                  icon: B.u,
                                  "aria-label": eh.intl.string(eh.t.g2jVww),
                                  onClick: function () {
                                      o(s.key);
                                  },
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eP(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    function r(e) {
        (0, G.AD)((t) => {
            let i = t.sections[l];
            if (i?.type !== D.K.FIELDS) return t;
            let n = [...t.sections];
            return (n[l] = { ...i, fields: e(i.fields) }), new I.Tu({ ...t, sections: n });
        });
    }
    function a(e, t) {
        r((i) => {
            let n = i.findIndex((t) => t.key === e),
                l = i[n];
            if (null == l) return i;
            let s = [...i];
            return (s[n] = t(l)), s;
        });
    }
    function o(e) {
        r((t) => t.filter((t) => t.key !== e));
    }
    let d = i.fields.map((e, i) =>
        (0, n.jsx)(eD, { index: i, userId: t, field: e, canEdit: s, onFieldChange: a, onFieldRemove: o }, e.key),
    );
    return (s &&
        i.fields.length < 4 &&
        d.push(
            (0, n.jsx)(
                eL,
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
        : (0, n.jsx)("div", { className: e_.kL, children: d });
}
var eG = i(396395);
function eM(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: eG.wx,
        children: [
            (0, n.jsx)(P.t, { size: "xs" }),
            (0, n.jsx)(er, {
                canEdit: i,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: eh.intl.string(eh.t.AVkYMx),
                onCommit: function (e) {
                    (0, G.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 100,
            }),
        ],
    });
}
function eU(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    switch (i.type) {
        case D.K.COVER:
            return (0, n.jsx)(eO, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case D.K.FIELDS:
            return (0, n.jsx)(eP, { userId: t, section: i, sectionIndex: l, canEdit: s });
    }
}
function eF(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === D.K.COVER), [t.sections]);
    return (0, n.jsx)(M.A, {
        userId: i.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        headerClassName: eG.JE,
        children: (0, n.jsxs)("div", {
            className: eG.kL,
            children: [
                (0, n.jsx)(eM, { widget: t, canEdit: d }),
                d && !c ? (0, n.jsx)(ey, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eU, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
            ],
        }),
    });
}
var eW = i(192308),
    eV = i(821609),
    eH = i(307301),
    eB = i(183555),
    ez = i(964828);
function eX(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eB.NJ)(),
        a = l.useCallback(() => {
            s({ action: "PRESS_ADD_WIDGET" }),
                (0, eW.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("8888"), i.e("22420"), i.e("26623")]).then(
                            i.bind(i, 850370),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s]);
    return (0, n.jsxs)("div", {
        className: r()(ez.w, t),
        children: [
            (0, n.jsx)(d.E, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: eh.intl.string(eh.t.OYlggR),
            }),
            (0, n.jsx)(eV.$, {
                icon: eH.j,
                text: eh.intl.string(eh.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var eK = i(192);
i(157992);
var eY = i(793574),
    eq = i(111994),
    eZ = i(607470),
    eJ = i(590251),
    eQ = i(530059);
function e$(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(eQ.ring, eQ[i], { [eQ.indeterminate]: l }),
        role: "progressbar",
        "aria-label": eh.intl.string(eh.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, n.jsx)(eJ.a, {
            percent: s,
            strokeSize: eJ.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var e0 = i(213879);
function e1(e) {
    let { item: t, ringSize: i, className: l } = e,
        s = "exporting" === t.status || "uploading" === t.status,
        a = r()(e0.Gt, { [e0.ob]: s });
    return (0, n.jsxs)("div", {
        className: r()(e0.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(eZ.A, { src: t.videoURL, preload: "metadata", muted: !0, className: a })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: a, loading: "lazy" }),
            s && (0, n.jsx)(e$, { item: t, size: i }),
        ],
    });
}
var e8 = i(663341),
    e2 = i(547193);
function e7(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s } = e,
        a = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: e2.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsx)(
                    "li",
                    {
                        className: e2.NI,
                        children: (0, n.jsx)(F.D, {
                            className: r()(e2.Vs, { [e2.wH]: e.key === i }),
                            "aria-pressed": e.key === i,
                            "aria-label": eh.intl.formatToPlainString(eh.t.zrtAwA, { clipNumber: t + 1 }),
                            onClick: () => l(e.key),
                            children: (0, n.jsx)(e1, { item: e, ringSize: "sm", className: e2.nC }),
                        }),
                    },
                    e.key,
                ),
            ),
            null != s &&
                Array.from({ length: a }, (e, t) =>
                    (0, n.jsx)(
                        "li",
                        {
                            className: e2.NI,
                            children: (0, n.jsx)(F.D, {
                                className: e2.Yn,
                                "aria-label": eh.intl.string(eh.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(e8.p, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var e5 = i(430795),
    e6 = i(696016);
let e3 = (0, w.v)(() => ({ localClips: new Map() }));
function e9(e, t) {
    e3.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
async function e4(e, t) {
    if (!e3.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, eo.P0)((0, ed.o)(eh.intl.string(eh.t.xcLXWy), ec.Ck.FAILURE));
        e9(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, e5.VO)(e, { analyticsLocations: t });
            e9(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                l = await A.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void e3.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            e9(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, G.XW)({ status: "pending", gameId: e.applicationId, uploadFilename: l });
        } catch (t) {
            var i;
            (i = e.id),
                e3.setState((e) => {
                    let t = new Map(e.localClips);
                    return t.delete(i), { localClips: t };
                }),
                e6.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, eo.P0)((0, ed.o)(eh.intl.string(eh.t.iufib1), ec.Ck.FAILURE));
        }
    }
}
var te = i(465927);
function tt(e) {
    let { onClick: t } = e,
        i = eh.intl.string(eh.t.rI0i0a);
    return (0, n.jsx)(U.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(H.K, { variant: "secondary", size: "sm", icon: W.T, "aria-label": i, onClick: t }),
    });
}
function ti() {
    return (0, n.jsx)("div", {
        className: te.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: eh.intl.format(eh.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tn(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...c } = e,
        [u, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = e3((e) => e.localClips)),
            l.useMemo(() => {
                let e = new Map();
                for (let t of s.values()) "uploaded" === t.status && e.set(t.uploadFilename, t);
                return [
                    ...r.clips.flatMap((i) => {
                        if ("saved" === i.status)
                            return [
                                {
                                    status: "saved",
                                    key: i.id,
                                    videoURL: (function (e, t) {
                                        let i = window.GLOBAL_ENV.CDN_HOST;
                                        if (null != i) return `https://${i}/profile-widget-clips/${e}/${t}`;
                                    })(t, i.fileId),
                                },
                            ];
                        let n = e.get(i.uploadFilename);
                        return null != n ? [{ status: "pending", key: n.clip.id, thumbnail: n.clip.thumbnail }] : [];
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
                ];
            }, [r.clips, s, t])),
        x = o && !0 !== d,
        f = 0 === m.length,
        h = m.length >= 4,
        p = m.find((e) => e.key === u) ?? m[m.length - 1],
        I = l.useCallback(() => {
            (0, eW.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        i.e("69884"),
                        i.e("18757"),
                        i.e("47899"),
                        i.e("94373"),
                        i.e("57860"),
                        i.e("21035"),
                        i.e("21398"),
                        i.e("81277"),
                        i.e("16832"),
                        i.e("68877"),
                        i.e("48380"),
                        i.e("41882"),
                        i.e("57066"),
                        i.e("48442"),
                        i.e("37944"),
                        i.e("27392"),
                        i.e("93218"),
                        i.e("14146"),
                        i.e("75842"),
                        i.e("83952"),
                        i.e("58337"),
                        i.e("20287"),
                        i.e("24761"),
                        i.e("18024"),
                        i.e("3930"),
                        i.e("3663"),
                        i.e("3131"),
                        i.e("47177"),
                        i.e("69201"),
                        i.e("8563"),
                        i.e("69985"),
                        i.e("27272"),
                        i.e("21573"),
                        i.e("96268"),
                        i.e("80007"),
                        i.e("66147"),
                        i.e("38090"),
                        i.e("22266"),
                        i.e("1962"),
                        i.e("1922"),
                        i.e("83518"),
                        i.e("32736"),
                        i.e("37715"),
                        i.e("74049"),
                        i.e("80559"),
                        i.e("95008"),
                        i.e("52566"),
                        i.e("39408"),
                        i.e("89160"),
                        i.e("31782"),
                        i.e("20342"),
                        i.e("71453"),
                        i.e("94676"),
                    ]).then(i.bind(i, 671884));
                    return (t) =>
                        (0, n.jsx)(e, {
                            ...t,
                            initialMainLink: eq.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => e4(e, [eY.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: e6.nm },
            );
        }, []);
    return (0, n.jsx)(M.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: te.kL,
        headerTitle: (0, G.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(tt, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: te.nV,
                      children: [
                          (0, n.jsx)(e1, { item: p, ringSize: "lg", className: te.VH }),
                          (0, n.jsx)(e7, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                          }),
                      ],
                  })
                : (0, n.jsx)(ti, {}),
    });
}
var tl = i(554146),
    ts = i(704824),
    tr = i(382483),
    ta = i(385113),
    to = i(334074),
    td = i(287809),
    tc = i(657718),
    tu = i(789645),
    tg = i(478016),
    tm = i(384377),
    tx = i(518477),
    tf = i(49999);
function th(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eB.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, G.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, tm.XA)(tx.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(L.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(L.A.Cta, {
            showSuggestedForYou: !0,
            heading: eh.intl.format(eh.t.OIzLCy, { applicationName: i.name }),
            content: eh.intl.format(eh.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(U.m, {
                        text: eh.intl.string(eh.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tc.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tu.P,
                            "aria-label": eh.intl.string(eh.t.WAI6xu),
                            onClick: () => {
                                s(tf.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(U.m, {
                        text: eh.intl.string(eh.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tc.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tg.U,
                            "aria-label": eh.intl.formatToPlainString(eh.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(tf.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tp() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([ta.A], () => ta.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tr.Wq)();
        }, []);
        let t = (0, a.bG)([td.default], () => td.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: s } = (0, ts.j)(e),
            r = (0, O.A)(t?.id),
            o = null == t || null == e || null == n || !s,
            d = l.useMemo(
                () =>
                    o
                        ? []
                        : i.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof f.R && t.applicationId === e.id)) &&
                                  null != n.find((t) => t.application.id === e.id),
                          ),
                [o, i, n, r],
            ),
            { eligibleToShow: u, markAsDismissed: g } = (0, to.hj)({
                applications: d,
                dismissibleContent: tl.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: to.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(th, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tI = i(128988),
    tj = i(280450),
    tv = i(321191),
    tA = i(896170),
    tE = i(765178),
    tS = i(922016),
    tN = i(305866),
    tw = i(732771),
    tb = i(321108),
    tC = i(383329),
    tT = i(250573);
function tk(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, eB.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tC.R)({ query: c }),
        f = c.trim().length > 0,
        { applicationIds: h, onAddGame: p } = y(t),
        I = (0, tb.A)(h),
        j = l.useCallback(
            (e) => {
                (0, G.ew)({ widgetType: t, game: { applicationId: e } }),
                    tE.O.announce(eh.intl.string(eh.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    s?.();
            },
            [t, d, s, h, p],
        ),
        v = l.useMemo(() => {
            let e = new Map(
                m.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (f) return [...e.values()];
            let t = I.filter((e) => !o.has(e.id) && (0, G.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                i = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !i.has(e.id))];
        }, [m, o, I, f]),
        A = l.useCallback((e) => e, []),
        E = l.useMemo(() => ({ ...x, threshold: tA.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? v.length : (0, tA.Ht)(v, e, E).length), [f, v, E]),
        N = l.useCallback(
            (e) => {
                let i = e.target.value;
                "" === c.trim() &&
                    "" !== i.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: S(i),
                    }),
                    u(i),
                    (g.current = i);
            },
            [c, d, t, S],
        );
    return (0, n.jsx)(tS.Y, {
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
            return (0, n.jsx)(tN.l, {
                className: tT.C,
                "aria-label": eh.intl.string(eh.t.uqw8wK),
                children: (0, n.jsxs)(tw.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: v,
                    matchSorterOptions: E,
                    customMatchSorter: f ? A : void 0,
                    children: [
                        (0, n.jsx)(tw.a3, {
                            label: eh.intl.string(eh.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: eh.intl.string(eh.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: N,
                        }),
                        (0, n.jsx)(tw.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function ty(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(tk, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(U.m, {
                text: eh.intl.string(eh.t.SgTOtX),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(H.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: W.T,
                    "aria-label": eh.intl.string(eh.t.SgTOtX),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tR(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(tk, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(F.D, {
                innerRef: t,
                className: tT.c,
                "aria-label": eh.intl.string(eh.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(e8.p, { color: "currentColor" }),
            }),
    });
}
let tO = l.createContext(null);
function t_(e) {
    let { widgetType: t, children: i } = e,
        s = (0, a.bG)([E.A], () => {
            let e = E.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, G.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = l.useState(s);
    return (0, n.jsx)(tO.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function tL() {
    let e = l.useContext(tO);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var tD = i(308685);
function tP(e) {
    let { widget: t } = e,
        i = (0, G.cv)(t.type),
        l = 1 === i,
        s = l ? eh.intl.string(eh.t["3FdPBT"]) : eh.intl.format(eh.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? tD.O : tD.k,
        children: [
            l && (0, n.jsx)(tR, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var tG = i(823016),
    tM = i(683071),
    tU = i(116363);
function tF(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, G.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: tU.l,
              children: (0, n.jsx)(tM.w, {
                  type: "warning",
                  children: eh.intl.formatToPlainString(eh.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var tW = i(17110);
function tV(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(F.D, {
        onClick: t,
        className: tW.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? eh.intl.string(eh.t["6MwJo/"]) : eh.intl.string(eh.t.lBeKY2),
        }),
    });
}
var tH = i(249264),
    tB = i(462037);
function tz(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tG.r)();
    return (0, n.jsx)("ul", {
        className: tB.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(tH.A, {
                        index: t,
                        user: i,
                        game: e,
                        widgetType: l,
                        coverRef: r(e.applicationId),
                        onRemoveGame: a,
                        ...s,
                    }),
                },
                e.applicationId,
            ),
        ),
    });
}
function tX(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eK.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tL(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(tz, { ...e, games: c }),
                u && (0, n.jsx)(tV, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tF, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tG.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function tK(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(tX, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tP, { widget: i }),
    });
}
function tY(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(tH.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tP, { widget: i }),
    });
}
var tq = i(768754);
function tZ(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: tq.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.applicationId)),
    });
}
var tJ = i(686246),
    tQ = i(201438),
    t$ = i(451395),
    t0 = i(788593),
    t1 = i(858808),
    t8 = i(350956),
    t2 = i(466215);
function t7(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tG.r)(),
        c = l.useRef(null);
    return (0, n.jsx)(t$.mG, {
        index: t,
        itemId: s.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": eh.intl.formatToPlainString(eh.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, G.Un)(i, e, t),
        onEnd: () => d(s.applicationId),
        className: t2.kL,
        dropBeforeClassName: t2.A,
        dropAfterClassName: t2.Ze,
        draggingClassName: t2.Id,
        children: (0, n.jsx)("div", { ref: c, className: t2.An, children: o }),
    });
}
function t5(e) {
    let {
            game: t,
            userId: i,
            widgetType: l,
            allowEditing: s,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, tQ.A)(t.applicationId),
        { registerDragHandleRef: m } = (0, tG.r)(),
        x = s && !r,
        { isDragging: f } = (0, tJ.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t0.A, {
                    imageSrc: c,
                    gameName: u,
                    applicationId: t.applicationId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : t8.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(t$.jV, { buttonRef: m(t.applicationId), className: t2.BU }),
                x &&
                    (0, n.jsx)(t1.A, {
                        game: t,
                        widgetType: l,
                        className: t2.vS,
                        onRemove: () => o?.(t.applicationId),
                    }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: t8.mD })
        : x
          ? (0, n.jsx)(t7, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: t2.kL, children: h() });
}
function t6(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tG.r)();
    return (0, n.jsx)(tZ, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(t5, {
                index: t,
                game: e,
                userId: i,
                widgetType: l,
                allowEditing: s,
                disableInteraction: r,
                coverRef: a(e.applicationId),
                onRemoveGame: o,
            }),
    });
}
function t3(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eK.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tL(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t6, { ...e, games: c }),
                u && (0, n.jsx)(tV, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tF, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tG.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function t9(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(t3, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tP, { widget: i }),
    });
}
function t4(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(t3, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tP, { widget: i }),
    });
}
var ie = i(297264),
    it = i(915089),
    ii = i(30061);
function il(e) {
    let { applicationId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, tQ.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = eh.intl.formatToPlainString(eh.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: t8.mD })
        : (0, n.jsx)(U.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(F.D, {
                  className: ii.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(t0.A, {
                          className: ii.Iv,
                          imageSrc: s,
                          gameName: r,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(e8.p, { size: "md", className: ii.Xv, color: V.A.colors.WHITE }),
                  ],
              }),
          });
}
function is(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, it.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(ii.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: ii.wx,
                children: [
                    (0, n.jsx)(F.D, {
                        className: ii.r,
                        "aria-label": eh.intl.string(eh.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(tu.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ie.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: eh.intl.string(eh.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: ii.Vg,
                children: i.map((e) => {
                    let { applicationId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(il, { onClick: () => s(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function ir(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = y(t),
        { setExpanded: a } = tL(),
        { trackUserProfileEditAction: o } = (0, eB.NJ)(),
        d = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, G.ew)({ widgetType: t, game: { applicationId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(is, { games: s, onClick: d, ...i });
}
var ia = i(344287);
function io(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, n.jsx)(tY, { widget: t, ...i });
        case b.x.CURRENT_GAMES:
            return (0, n.jsx)(tK, { widget: t, ...i });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(t4, { widget: t, ...i });
        case b.x.PLAYED_GAMES:
            return (0, n.jsx)(t9, { widget: t, ...i });
        default:
            return null;
    }
}
function id(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = tL(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tj.default, tv.A], () => {
                    let e = tj.default.getId();
                    if (null == e) return !1;
                    let t = tv.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                r = (0, G.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !r,
                handleDismissSuggestions: l.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        g = s && !r,
        m = g && c,
        x = (0, G.L)(t),
        f = (0, G.FM)(t, { showEditingControls: g }),
        h = (0, G.uA)(t),
        p = 1 === (0, G.cv)(t.type);
    return (0, n.jsx)(io, {
        widget: t,
        user: i,
        allowEditing: s,
        disableInteraction: r,
        headerTitle: x,
        headerSubtitle: f,
        headerActionButtons:
            g && !p
                ? [
                      (0, n.jsx)(
                          ty,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(ir, { userId: i.id, widgetType: t.type, onDismiss: u, className: ia.r }),
        ...o,
    });
}
function ic(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(t_, { widgetType: t.type, children: (0, n.jsx)(id, { widget: t, ...i }) });
}
var iu = i(576260),
    ig = i(94160),
    im = i(616714),
    ix = i(117937),
    ih = i(902394);
function ip(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, eB.NJ)(),
        r = l.useRef(!1),
        o = (0, a.bG)([tv.A], () => tv.A.getUserProfile(t)?.fetchError != null, [t]),
        c = (0, im.A)();
    return (
        l.useEffect(() => {
            r.current || o || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [o, i]),
        (0, n.jsxs)("div", {
            className: ih.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: ih.FS,
                    children: [
                        (0, n.jsx)(ie.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: eh.intl.string(eh.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: o ? eh.intl.string(eh.t["+W59o5"]) : eh.intl.string(eh.t.O9SQ1c),
                        }),
                    ],
                }),
                !o &&
                    (0, n.jsx)("ul", {
                        className: ih.ZW,
                        "aria-label": eh.intl.string(eh.t["+EIBSA"]),
                        children: c.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    children: (0, n.jsx)(ix.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
            ],
        })
    );
}
var iI = i(456620);
function ij(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(L.A, { widget: t, ...i })
        : t instanceof I.Tu
          ? (0, n.jsx)(eF, { widget: t, ...i })
          : (0, p.fu)(t)
            ? (0, n.jsx)(ic, { widget: t, ...i })
            : t instanceof h.k
              ? (0, n.jsx)(tn, { widget: t, ...i })
              : null;
}
function iv() {
    return (0, n.jsxs)("div", {
        className: iI.mJ,
        children: [
            (0, n.jsx)(o.m, { size: "xs" }),
            (0, n.jsx)(d.E, {
                "aria-label": eh.intl.string(eh.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: eh.intl.string(eh.t["7blcz6"]),
            }),
        ],
    });
}
function iA(e) {
    let { user: t, guildId: i, channelId: s } = e,
        r = (0, O.A)(t.id),
        o = (0, _.A)(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                i = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && i && (0, u.xe)();
                }, [e, t, i]),
                "GB" === e && i
            );
        })(),
        h = 0 === r.length && o,
        I = l.useMemo(() => r.filter(p.fu), [r]),
        j = l.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    function v() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                o &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(eX, { className: iI.cG }), d && (0, n.jsx)(iv, {}), (0, n.jsx)(tp, {})],
                    }),
                r.map((e, l) =>
                    (0, n.jsx)(
                        ij,
                        { widget: e, user: t, guildId: i, channelId: s, allowEditing: o, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [i, n, s, r] = (0, a.yK)([E.A], () => [
                E.A.suggestedFetchAttempted,
                E.A.suggestedFetchError,
                E.A.suggestedGameIds,
                E.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = k();
        l.useEffect(() => {
            !i && e && A.A.fetchSuggestedGames();
        }, [i, e]);
        let d = i && !r;
        l.useEffect(() => {
            if (!d) return;
            let e = t.map((e) => e.games).flat();
            n || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [d]);
    })(o, I),
    !(function (e, t) {
        let i = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, c.A)(i);
        let { data: n, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== n);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, n.jsx)(ip, { userId: t.id })
        : o
          ? (0, n.jsx)(eK.D, { children: v() })
          : v();
}
function iE(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let a = (0, iu.k)(t.id);
    return (0, n.jsxs)(ig.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(iI.XG, { [iI.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(tI.A, { scrollerRef: s }), (0, n.jsx)(iA, { user: t, ...i })],
    });
}
