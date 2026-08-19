i.d(t, { A: () => iN, u: () => iC });
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
    A = i(569926),
    v = i(958805),
    E = i(61881),
    S = i(435558),
    C = i(196765),
    b = i(540185),
    T = i(282435);
let N = (0, S.sampleSize)(T.sx, T.sx.length),
    w = (0, C.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...i.filter((e) => !s.has(e)), ...N],
                wishlistStack: [...n.filter((e) => !s.has(e)), ...N],
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
    let { bump: t, bumpMultiple: i, gameIds: n } = w();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = w(),
            n = l.useMemo(() => i[e] ?? [], [i, e]);
        (0, A.x)(n);
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
    let d = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: d, onAddGame: r };
}
var k = i(600761),
    R = i(667049),
    O = i(389667),
    _ = i(605694),
    L = i(869484),
    P = i(403581),
    D = i(315629),
    G = i(465794),
    M = i(287809),
    U = i(158045),
    W = i(735321),
    F = i(623280),
    H = i(866665),
    V = i(939249),
    B = i(499373),
    z = i(661531),
    K = i(43990),
    X = i(408278),
    Y = i(241326),
    q = i(448766),
    J = i(761431),
    Z = i(892572);
function Q(e) {
    let { className: t, variant: i, color: l, value: s, interactive: a = !0, disableMarkdown: o = !1 } = e,
        c = a ? q.d : q.j;
    return (0, n.jsx)(d.E, { className: r()(Z.Y, t), variant: i, color: l, lineClamp: 1, children: o ? s : c(s) });
}
function $(e) {
    let {
            className: t,
            value: i,
            placeholder: s,
            variant: r,
            color: a,
            onCommit: o,
            maxLength: d,
            growWidth: c,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => o(e.trim()), [o]),
        m = (0, J.TX)({ value: i, onCommit: g }),
        x =
            "" === i.trim()
                ? null
                : (0, n.jsx)(Q, { interactive: !1, className: t, variant: r, color: a, value: i, disableMarkdown: u });
    return (0, n.jsx)(J.yV, {
        ...m,
        size: "compact",
        removeVerticalPadding: !0,
        growWidth: c,
        preview: x,
        placeholder: s,
        editButtonAriaLabel: s,
        label: s,
        maxLength: d,
    });
}
function ee(e) {
    return e.canEdit
        ? (0, n.jsx)($, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(Q, {
                className: e.className,
                variant: e.variant,
                color: e.color,
                value: e.value,
                disableMarkdown: e.disableMarkdown,
            });
}
var et = i(326009),
    ei = i(372638),
    en = i(231088),
    el = i(307227);
function es(e) {
    let { className: t, variant: i, color: l, value: s, maxRows: a, interactive: o = !0 } = e,
        c = o ? q.d : q.j;
    return (0, n.jsx)(d.E, { className: r()(Z.Y, el.L, t), variant: i, color: l, lineClamp: a, children: c(s) });
}
function er(e) {
    let { className: t, value: i, placeholder: s, variant: r, color: a, onCommit: o, maxLength: d, maxRows: c } = e,
        u = l.useCallback((e) => o(e.trim()), [o]),
        g = (0, en.Ww)({ value: i, onCommit: u }),
        m =
            "" === i.trim()
                ? null
                : (0, n.jsx)(es, { interactive: !1, className: t, variant: r, color: a, value: i, maxRows: c });
    return (0, n.jsx)(ei.f, {
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
function ea(e) {
    return e.canEdit
        ? (0, n.jsx)(er, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(es, {
                className: e.className,
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxRows: e.maxRows,
            });
}
var eo = i(652215),
    ed = i(339984),
    ec = i(375708),
    eu = i(148548);
function eg() {
    return (0, n.jsx)(H.m, {
        text: ec.intl.string(ec.t.mZddSK),
        children: (0, n.jsxs)(V.D, {
            className: eu.YN,
            "aria-label": ec.intl.string(ec.t.mZddSK),
            onClick: function () {
                (0, W.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
            },
            children: [
                (0, n.jsx)("div", { className: eu.JD }),
                (0, n.jsx)("div", {
                    className: eu.xJ,
                    children: (0, n.jsx)(B.T, { size: "sm", color: z.A.colors.ICON_OVERLAY_DARK }),
                }),
            ],
        }),
    });
}
function em(e) {
    let { userId: t, section: i, sectionIndex: s, canEdit: a } = e,
        [o, d] = l.useState(null),
        c = l.useRef(!1),
        u = null != o;
    function g(e) {
        (0, W.AD)((t) => {
            let i = t.sections[s];
            if (i?.type !== L.K.COVER) return t;
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
        (0, W.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let A = null != i.image || u,
        v = A || a;
    return (0, n.jsx)(K.N, {
        theme: A ? eo.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: r()(eu.kL, { [eu.Vp]: v }, e),
                children: [
                    a || null != i.image
                        ? (0, n.jsx)("div", {
                              className: eu.El,
                              children: (0, n.jsx)(et.A, {
                                  className: eu.Sl,
                                  canEdit: a,
                                  userId: t,
                                  image: i.image,
                                  previewUri: o,
                                  uploadType: ed.HL.PERSONAL_WIDGET_COVER,
                                  onImageUploadStarted: h,
                                  onImageUploadCompleted: p,
                              }),
                          })
                        : null,
                    a
                        ? (0, n.jsx)("div", {
                              className: eu.DT,
                              children: (0, n.jsx)(H.m, {
                                  text: A ? ec.intl.string(ec.t.RyK5Ww) : ec.intl.string(ec.t.g2jVww),
                                  children: (0, n.jsx)(X.K, {
                                      icon: Y.TrashIcon,
                                      size: "sm",
                                      variant: "overlay-secondary",
                                      "aria-label": A ? ec.intl.string(ec.t.RyK5Ww) : ec.intl.string(ec.t.g2jVww),
                                      onClick: A ? f : j,
                                  }),
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: r()(eu.hQ, e, { [eu.Vp]: v }),
                        children: [
                            A ? (0, n.jsx)("div", { className: eu.cw }) : null,
                            (0, n.jsx)(ee, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-default",
                                value: i.title,
                                placeholder: ec.intl.string(ec.t.KqCDvK),
                                onCommit: m,
                                maxLength: 100,
                            }),
                            (0, n.jsx)(ea, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: i.subtitle,
                                placeholder: ec.intl.string(ec.t.k8zZFd),
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
var ex = i(750943),
    ef = i(603090);
function eh(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(V.D, {
        onClick: t,
        className: ef.cR,
        children: [
            (0, n.jsx)(ex.X, { size: "xs", color: z.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: ec.intl.string(ec.t["9AY+/x"]),
            }),
        ],
    });
}
function ep(e) {
    let { index: t, userId: i, field: s, canEdit: r, onFieldChange: a, onFieldRemove: o } = e,
        [d, c] = l.useState(null),
        u = l.useRef(!1),
        g = r ? !0 !== s.hideImage : null != s.image;
    return (0, n.jsxs)("div", {
        className: ef.ez,
        children: [
            g
                ? (0, n.jsxs)("div", {
                      className: ef.tF,
                      children: [
                          (0, n.jsx)(et.A, {
                              className: ef.k9,
                              canEdit: r,
                              userId: i,
                              image: s.image,
                              previewUri: d,
                              uploadType: ed.HL.PERSONAL_WIDGET_FIELD,
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
                                    className: ef.ij,
                                    children: (0, n.jsx)(H.m, {
                                        text: ec.intl.string(ec.t.RyK5Ww),
                                        children: (0, n.jsx)(X.K, {
                                            size: "sm",
                                            icon: Y.TrashIcon,
                                            "aria-label": ec.intl.string(ec.t.RyK5Ww),
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
                className: ef.oT,
                children: [
                    (0, n.jsx)(ee, {
                        canEdit: r,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: s.title,
                        placeholder: ec.intl.formatToPlainString(ec.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 50,
                    }),
                    (0, n.jsx)(ee, {
                        canEdit: r,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: s.description,
                        placeholder: ec.intl.formatToPlainString(ec.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 100,
                    }),
                ],
            }),
            r
                ? (0, n.jsxs)("div", {
                      className: ef.Ms,
                      children: [
                          g
                              ? null
                              : (0, n.jsx)(H.m, {
                                    text: ec.intl.string(ec.t.i3vRzP),
                                    children: (0, n.jsx)(X.K, {
                                        size: "sm",
                                        icon: ex.X,
                                        "aria-label": ec.intl.string(ec.t.i3vRzP),
                                        onClick: function () {
                                            a(s.key, (e) => ({ ...e, hideImage: void 0 }));
                                        },
                                    }),
                                }),
                          (0, n.jsx)(H.m, {
                              text: ec.intl.string(ec.t.g2jVww),
                              children: (0, n.jsx)(X.K, {
                                  size: "sm",
                                  icon: Y.TrashIcon,
                                  "aria-label": ec.intl.string(ec.t.g2jVww),
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
function eI(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    function r(e) {
        (0, W.AD)((t) => {
            let i = t.sections[l];
            if (i?.type !== L.K.FIELDS) return t;
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
        (0, n.jsx)(ep, { index: i, userId: t, field: e, canEdit: s, onFieldChange: a, onFieldRemove: o }, e.key),
    );
    return (s &&
        i.fields.length < 4 &&
        d.push(
            (0, n.jsx)(
                eh,
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
        : (0, n.jsx)("div", { className: ef.kL, children: d });
}
var ej = i(202541),
    eA = i(877068);
let ev = { section: eo.JJy.PERSONAL_WIDGET };
function eE(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: eA.wx,
        children: [
            (0, n.jsx)(P.t, { size: "xs" }),
            (0, n.jsx)(ee, {
                canEdit: i,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: ec.intl.string(ec.t.fjSaAm),
                onCommit: function (e) {
                    (0, W.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 100,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eS(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    switch (i.type) {
        case L.K.COVER:
            return (0, n.jsx)(em, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case L.K.FIELDS:
            return (0, n.jsx)(eI, { userId: t, section: i, sectionIndex: l, canEdit: s });
    }
}
function eC() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), ej.PremiumTypes.TIER_2))
        ? null
        : (0, n.jsxs)("div", {
              className: eA.hc,
              children: [
                  (0, n.jsx)(D.h, { color: "nitro-pink", className: eA.Sp, offsetBottom: -4 }),
                  (0, n.jsxs)("div", {
                      className: eA.LK,
                      children: [
                          (0, n.jsx)(d.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: ec.intl.string(ec.t.WOPVdz),
                          }),
                          (0, n.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: ec.intl.string(ec.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, n.jsx)(G.A, {
                      size: "sm",
                      subscriptionTier: ej.pe.TIER_2,
                      defaultTextOverride: ec.intl.string(ec.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: ev,
                  }),
              ],
          });
}
function eb(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === L.K.COVER), [t.sections]);
    return (0, n.jsx)(F.A, {
        userId: i.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eA.Nr,
        headerClassName: eA.JE,
        children: (0, n.jsxs)("div", {
            className: eA.kL,
            children: [
                (0, n.jsx)(eE, { widget: t, canEdit: d }),
                d && !c ? (0, n.jsx)(eg, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eS, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
                d ? (0, n.jsx)(eC, {}) : null,
            ],
        }),
    });
}
var eT = i(702841),
    eN = i(821609),
    ew = i(192308),
    ey = i(307301),
    ek = i(183555),
    eR = i(465318),
    eO = i(384377),
    e_ = i(554146),
    eL = i(43105),
    eP = i(131607),
    eD = i(518477),
    eG = i(49999);
function eM() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eR.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [i, n] = (0, eP.kn)(e && t ? [e_.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [i === e_.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, n];
}
function eU(e) {
    let { targetElementRef: t, isVisible: i, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, ek.NJ)();
    return i
        ? (0, n.jsx)(eL.A, {
              targetElementRef: t,
              position: "left",
              title: ec.intl.string(ec.t.KKGxNt),
              body: ec.intl.string(ec.t["IS+QTV"]),
              onRequestClose: () => l(eG.i.USER_DISMISS),
              actions: [
                  {
                      text: ec.intl.string(ec.t.RCy7Px),
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, eO.XA)(eD.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var eW = i(410453);
function eF(e) {
    let { buttonRef: t, isCoachmarkVisible: i, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, ek.NJ)(),
        a = l.useCallback(() => {
            i && s(eG.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eO.XA)(eD.jM.WIDGET_ADDED);
        }, [r, i, s]);
    return (0, n.jsx)(eN.$, {
        icon: P.t,
        text: ec.intl.string(ec.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function eH(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, ek.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [c, u] = eM(),
        g = (function () {
            let e = (0, eT.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: i, showCreateEntrypoint: n } = eR.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return i && n && !l;
        })(),
        m = l.useCallback(() => {
            c && u(eG.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ew.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("450427"), i.e("422420"), i.e("426623")]).then(
                            i.bind(i, 850370),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, c, u]);
    return (0, n.jsxs)("div", {
        className: r()(eW.w, t),
        children: [
            (0, n.jsx)(d.E, {
                className: eW.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: ec.intl.string(ec.t.OYlggR),
            }),
            g ? (0, n.jsx)(eF, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, n.jsx)(eN.$, {
                icon: ey.j,
                text: ec.intl.string(ec.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, n.jsx)(eU, { targetElementRef: g ? o : a, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var eV = i(192),
    eB = i(793574),
    ez = i(111994),
    eK = i(607470),
    eX = i(590251),
    eY = i(869006);
function eq(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(eY.ring, eY[i], { [eY.indeterminate]: l }),
        role: "progressbar",
        "aria-label": ec.intl.string(ec.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, n.jsx)(eX.a, {
            percent: s,
            strokeSize: eX.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var eJ = i(579460);
function eZ(e) {
    let { item: t, ringSize: i, className: l } = e,
        s = "exporting" === t.status || "uploading" === t.status,
        a = r()(eJ.Gt, { [eJ.ob]: s });
    return (0, n.jsxs)("div", {
        className: r()(eJ.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(eK.A, { src: t.videoURL, preload: "metadata", muted: !0, className: a })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: a, loading: "lazy" }),
            s && (0, n.jsx)(eq, { item: t, size: i }),
        ],
    });
}
var eQ = i(3026),
    e$ = i(22231);
i(600253);
var e0 = i(936026);
function e1(e) {
    let { value: t, isPlaceholder: i = !1 } = e;
    return (0, n.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(e0.Qw, { [e0.qf]: i }),
        children: (0, n.jsx)(eQ.A, { children: t }),
    });
}
function e2(e) {
    let { clipId: t, title: i } = e,
        { trackUserProfileEditAction: s } = (0, ek.NJ)(),
        a = l.useCallback(
            (e) => {
                let n = e.trim();
                n !== i.trim() &&
                    ((0, W.mI)(t, n),
                    s({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: n.length }));
            },
            [t, i, s],
        ),
        o = (0, J.TX)({ value: i, onCommit: a }),
        d = ec.intl.string(ec.t["2gwc+H"]);
    return (0, n.jsx)(J.yV, {
        ...o,
        size: "compact",
        removeVerticalPadding: !0,
        className: r()(e0.ZZ, { [e0.Dy]: o.isEditing }),
        preview: (0, n.jsxs)("span", {
            className: r()(e0.$, e0.TG),
            children: [
                (0, n.jsx)(e$.PencilIcon, { size: "xxs", color: "currentColor", className: e0.wz }),
                "" === i.trim() ? (0, n.jsx)(e1, { value: d, isPlaceholder: !0 }) : (0, n.jsx)(e1, { value: i }),
            ],
        }),
        placeholder: d,
        editButtonAriaLabel: ec.intl.string(ec.t.PDnM11),
        label: ec.intl.string(ec.t.PDnM11),
        maxLength: 200,
    });
}
function e8(e) {
    let { clipId: t, title: i, allowEditing: l } = e,
        s = null != i && "" !== i.trim();
    return l || s
        ? l
            ? (0, n.jsx)(e2, { clipId: t, title: i ?? "" })
            : (0, n.jsx)("span", { className: e0.$, children: (0, n.jsx)(e1, { value: i ?? "" }) })
        : null;
}
var e5 = i(663341),
    e7 = i(765178),
    e3 = i(691540),
    e6 = i(857250),
    e4 = i(97483),
    e9 = i(539572),
    te = i(195880),
    tt = i(696016);
let ti = (0, C.v)(() => ({ localClips: new Map() }));
function tn(e, t) {
    ti.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
function tl(e) {
    ti.setState((t) => {
        let i = new Map(t.localClips);
        return i.delete(e), { localClips: i };
    });
}
async function ts(e, t) {
    if (!ti.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, e3.P0)((0, e6.o)(ec.intl.string(ec.t.xcLXWy), e4.Ck.FAILURE));
        tn(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, e9.VO)(e, { analyticsLocations: t });
            tn(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                l = await v.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void ti.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            tn(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, W.XW)({
                    status: "pending",
                    id: (0, te.m)(),
                    sourceClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            tl(e.id),
                tt.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, e3.P0)((0, e6.o)(ec.intl.string(ec.t.iufib1), e4.Ck.FAILURE));
        }
    }
}
function tr(e) {
    let { widgetClipId: t, sourceClipId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, ek.NJ)(),
        r = ec.intl.string(ec.t.ib6Mgx);
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(H.m, {
            text: r,
            ariaHidden: !0,
            children: (0, n.jsx)(X.K, {
                "aria-label": r,
                icon: Y.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != i && tl(i),
                        e7.O.announce(ec.intl.string(ec.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var ta = i(233002);
function to(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s, allowRemoving: a = !1 } = e,
        o = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: ta.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: ta.NI,
                        children: [
                            (0, n.jsx)(V.D, {
                                className: r()(ta.Vs, { [ta.wH]: e.key === i }),
                                "aria-pressed": e.key === i,
                                "aria-label": ec.intl.formatToPlainString(ec.t.zrtAwA, { clipNumber: t + 1 }),
                                onClick: () => l(e.key),
                                children: (0, n.jsx)(eZ, { item: e, ringSize: "sm", className: ta.nC }),
                            }),
                            a &&
                                ("pending" === e.status || "saved" === e.status) &&
                                (0, n.jsx)(tr, {
                                    widgetClipId: e.key,
                                    sourceClipId: "pending" === e.status ? e.sourceClipId : void 0,
                                    className: ta.nM,
                                }),
                        ],
                    },
                    e.key,
                ),
            ),
            null != s &&
                Array.from({ length: o }, (e, t) =>
                    (0, n.jsx)(
                        "li",
                        {
                            className: ta.NI,
                            children: (0, n.jsx)(V.D, {
                                className: ta.Yn,
                                "aria-label": ec.intl.string(ec.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(e5.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var td = i(457404);
function tc(e) {
    let { children: t } = e;
    return (0, n.jsxs)("div", {
        className: td.Lw,
        children: [(0, n.jsx)("div", { className: td.tB }), (0, n.jsx)("div", { className: td.Qs, children: t })],
    });
}
var tu = i(716112);
function tg(e) {
    let { onClick: t } = e,
        i = ec.intl.string(ec.t.rI0i0a);
    return (0, n.jsx)(H.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(X.K, { variant: "secondary", size: "sm", icon: B.T, "aria-label": i, onClick: t }),
    });
}
function tm() {
    return (0, n.jsx)("div", {
        className: tu.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: ec.intl.format(ec.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tx(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...c } = e,
        [u, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = ti((e) => e.localClips)),
            l.useMemo(
                () => [
                    ...r.clips.flatMap((e) => {
                        if ("saved" === e.status)
                            return [
                                {
                                    status: "saved",
                                    key: e.id,
                                    videoURL: (function (e, t) {
                                        let i = window.GLOBAL_ENV.CDN_HOST;
                                        if (null != i) return `https://${i}/profile-widget-clips/${e}/${t}`;
                                    })(t, e.fileId),
                                    title: e.title,
                                },
                            ];
                        let i = s.get(e.sourceClipId);
                        return null != i
                            ? [
                                  {
                                      status: "pending",
                                      key: e.id,
                                      sourceClipId: e.sourceClipId,
                                      thumbnail: i.clip.thumbnail,
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
            (0, ew.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        i.e("459368"),
                        i.e("251714"),
                        i.e("860350"),
                        i.e("180644"),
                        i.e("821717"),
                        i.e("269714"),
                        i.e("19385"),
                        i.e("398104"),
                        i.e("553829"),
                        i.e("33091"),
                        i.e("865257"),
                        i.e("318196"),
                        i.e("323079"),
                        i.e("437655"),
                        i.e("343286"),
                        i.e("48055"),
                        i.e("808915"),
                        i.e("614146"),
                        i.e("875842"),
                        i.e("883952"),
                        i.e("858337"),
                        i.e("220287"),
                        i.e("3131"),
                        i.e("324761"),
                        i.e("918024"),
                        i.e("203930"),
                        i.e("903663"),
                        i.e("647177"),
                        i.e("169201"),
                        i.e("8563"),
                        i.e("469985"),
                        i.e("127272"),
                        i.e("621573"),
                        i.e("496268"),
                        i.e("466147"),
                        i.e("838090"),
                        i.e("122266"),
                        i.e("501962"),
                        i.e("901922"),
                        i.e("583518"),
                        i.e("237715"),
                        i.e("974049"),
                        i.e("280559"),
                        i.e("895008"),
                        i.e("352566"),
                        i.e("489492"),
                        i.e("689160"),
                        i.e("231782"),
                        i.e("520342"),
                        i.e("771453"),
                        i.e("194676"),
                    ]).then(i.bind(i, 671884));
                    return (t) =>
                        (0, n.jsx)(e, {
                            ...t,
                            initialMainLink: ez.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => ts(e, [eB.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: tt.nm },
            );
        }, []);
    return (0, n.jsx)(F.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: tu.kL,
        headerTitle: (0, W.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(tg, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: tu.nV,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tu.aM,
                              children: [
                                  (0, n.jsx)(eZ, { item: p, ringSize: "lg", className: tu.VH }),
                                  (0, n.jsx)(tc, {
                                      children:
                                          ("saved" === p.status || "pending" === p.status) &&
                                          (0, n.jsx)(e8, { clipId: p.key, title: p.title, allowEditing: x }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(to, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                              allowRemoving: x,
                          }),
                      ],
                  })
                : (0, n.jsx)(tm, {}),
    });
}
var tf = i(704824),
    th = i(382483),
    tp = i(385113),
    tI = i(334074),
    tj = i(657718),
    tA = i(789645),
    tv = i(478016);
function tE(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, ek.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eO.XA)(eD.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(_.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(_.A.Cta, {
            showSuggestedForYou: !0,
            heading: ec.intl.format(ec.t.OIzLCy, { applicationName: i.name }),
            content: ec.intl.format(ec.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(H.m, {
                        text: ec.intl.string(ec.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tj.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tA.P,
                            "aria-label": ec.intl.string(ec.t.WAI6xu),
                            onClick: () => {
                                s(eG.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(H.m, {
                        text: ec.intl.string(ec.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tj.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tv.U,
                            "aria-label": ec.intl.formatToPlainString(ec.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(eG.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tS() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tp.A], () => tp.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, th.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: s } = (0, tf.j)(e),
            r = (0, R.A)(t?.id),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, tI.hj)({
                applications: d,
                dismissibleContent: e_.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tI.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(tE, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tC = i(128988),
    tb = i(280450),
    tT = i(321191),
    tN = i(896170),
    tw = i(922016),
    ty = i(305866),
    tk = i(732771),
    tR = i(321108),
    tO = i(383329),
    t_ = i(67710);
function tL(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.gameId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, ek.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tO.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        I = (0, tR.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    e7.O.announce(ec.intl.string(ec.t.q0U3DE)),
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
                i = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !i.has(e.id))];
        }, [m, o, I, f]),
        v = l.useCallback((e) => e, []),
        E = l.useMemo(() => ({ ...x, threshold: tN.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, tN.Ht)(A, e, E).length), [f, A, E]),
        C = l.useCallback(
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
    return (0, n.jsx)(tw.Y, {
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
            return (0, n.jsx)(ty.l, {
                className: t_.C,
                "aria-label": ec.intl.string(ec.t.uqw8wK),
                children: (0, n.jsxs)(tk.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: E,
                    customMatchSorter: f ? v : void 0,
                    children: [
                        (0, n.jsx)(tk.a3, {
                            label: ec.intl.string(ec.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: ec.intl.string(ec.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, n.jsx)(tk.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function tP(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(tL, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(H.m, {
                text: ec.intl.string(ec.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(X.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: B.T,
                    "aria-label": ec.intl.string(ec.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tD(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(tL, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(V.D, {
                innerRef: t,
                className: t_.c,
                "aria-label": ec.intl.string(ec.t.PYyENc),
                ...e,
                children: (0, n.jsx)(e5.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let tG = l.createContext(null);
function tM(e) {
    let { widgetType: t, children: i } = e,
        s = (0, a.bG)([E.A], () => {
            let e = E.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, W.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = l.useState(s);
    return (0, n.jsx)(tG.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function tU() {
    let e = l.useContext(tG);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var tW = i(67438);
function tF(e) {
    let { widget: t } = e,
        i = (0, W.cv)(t.type),
        l = 1 === i,
        s = l ? ec.intl.string(ec.t["3FdPBT"]) : ec.intl.format(ec.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? tW.O : tW.k,
        children: [
            l && (0, n.jsx)(tD, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var tH = i(823016),
    tV = i(683071),
    tB = i(312252);
function tz(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, W.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: tB.l,
              children: (0, n.jsx)(tV.w, {
                  type: "warning",
                  children: ec.intl.formatToPlainString(ec.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var tK = i(574755);
function tX(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(V.D, {
        onClick: t,
        className: tK.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? ec.intl.string(ec.t["6MwJo/"]) : ec.intl.string(ec.t.lBeKY2),
        }),
    });
}
var tY = i(249264),
    tq = i(148420);
function tJ(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tH.r)();
    return (0, n.jsx)("ul", {
        className: tq.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(tY.A, {
                        index: t,
                        user: i,
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
function tZ(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eV.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tU(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(tJ, { ...e, games: c }),
                u && (0, n.jsx)(tX, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tz, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tH.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function tQ(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(tZ, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tF, { widget: i }),
    });
}
function t$(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(tY.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tF, { widget: i }),
    });
}
var t0 = i(793693);
function t1(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: t0.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.gameId)),
    });
}
var t2 = i(686246),
    t8 = i(201438),
    t5 = i(451395),
    t7 = i(788593),
    t3 = i(858808),
    t6 = i(365611),
    t4 = i(900850);
function t9(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tH.r)(),
        c = l.useRef(null);
    return (0, n.jsx)(t5.mG, {
        index: t,
        itemId: s.gameId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": ec.intl.formatToPlainString(ec.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(i, e, t),
        onEnd: () => d(s.gameId),
        className: t4.kL,
        dropBeforeClassName: t4.A,
        dropAfterClassName: t4.Ze,
        draggingClassName: t4.Id,
        children: (0, n.jsx)("div", { ref: c, className: t4.An, children: o }),
    });
}
function ie(e) {
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
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, t8.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tH.r)(),
        x = s && !r,
        { isDragging: f } = (0, t2.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t7.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : t6.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(t5.jV, { buttonRef: m(t.gameId), className: t4.BU }),
                x && (0, n.jsx)(t3.A, { game: t, widgetType: l, className: t4.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: t6.mD })
        : x
          ? (0, n.jsx)(t9, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: t4.kL, children: h() });
}
function it(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tH.r)();
    return (0, n.jsx)(t1, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(ie, {
                index: t,
                game: e,
                userId: i,
                widgetType: l,
                allowEditing: s,
                disableInteraction: r,
                coverRef: a(e.gameId),
                onRemoveGame: o,
            }),
    });
}
function ii(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eV.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tU(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(it, { ...e, games: c }),
                u && (0, n.jsx)(tX, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tz, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tH.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function il(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ii, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tF, { widget: i }),
    });
}
function is(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ii, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tF, { widget: i }),
    });
}
var ir = i(297264),
    ia = i(915089),
    io = i(772168);
function id(e) {
    let { gameId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, t8.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = ec.intl.formatToPlainString(ec.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: t6.mD })
        : (0, n.jsx)(H.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(V.D, {
                  className: io.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(t7.A, {
                          className: io.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(e5.PlusLargeIcon, { size: "md", className: io.Xv, color: z.A.colors.WHITE }),
                  ],
              }),
          });
}
function ic(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, ia.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(io.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: io.wx,
                children: [
                    (0, n.jsx)(V.D, {
                        className: io.r,
                        "aria-label": ec.intl.string(ec.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(tA.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ir.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: ec.intl.string(ec.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: io.Vg,
                children: i.map((e) => {
                    let { gameId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(id, { onClick: () => s(i), userId: t, gameId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function iu(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = y(t),
        { setExpanded: a } = tU(),
        { trackUserProfileEditAction: o } = (0, ek.NJ)(),
        d = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(ic, { games: s, onClick: d, ...i });
}
var ig = i(870961);
function im(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, n.jsx)(t$, { widget: t, ...i });
        case b.x.CURRENT_GAMES:
            return (0, n.jsx)(tQ, { widget: t, ...i });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(is, { widget: t, ...i });
        case b.x.PLAYED_GAMES:
            return (0, n.jsx)(il, { widget: t, ...i });
        default:
            return null;
    }
}
function ix(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = tU(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tb.default, tT.A], () => {
                    let e = tb.default.getId();
                    if (null == e) return !1;
                    let t = tT.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                r = (0, W.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !r,
                handleDismissSuggestions: l.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        g = s && !r,
        m = g && c,
        x = (0, W.L)(t),
        f = (0, W.FM)(t, { showEditingControls: g }),
        h = (0, W.uA)(t),
        p = 1 === (0, W.cv)(t.type);
    return (0, n.jsx)(im, {
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
                          tP,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(iu, { userId: i.id, widgetType: t.type, onDismiss: u, className: ig.r }),
        ...o,
    });
}
function ih(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(tM, { widgetType: t.type, children: (0, n.jsx)(ix, { widget: t, ...i }) });
}
var ip = i(271383),
    iI = i(94160),
    ij = i(96173),
    iA = i(788259),
    iv = i(269507);
function iE(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, ek.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([tT.A], () => tT.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = eM(!c),
        m = (0, ij.A)();
    return (
        l.useEffect(() => {
            r.current || c || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, i]),
        (0, n.jsxs)("div", {
            className: iv.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: iv.FS,
                    children: [
                        (0, n.jsx)(ir.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: ec.intl.string(ec.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? ec.intl.string(ec.t["+W59o5"]) : ec.intl.string(ec.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
                    (0, n.jsx)("ul", {
                        className: iv.ZW,
                        "aria-label": ec.intl.string(ec.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, n.jsx)(iA.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !c && (0, n.jsx)(eU, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var iS = i(366209);
function iC(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(_.A, { widget: t, ...i })
        : t instanceof I.Tu
          ? (0, n.jsx)(eb, { widget: t, ...i })
          : (0, p.fu)(t)
            ? (0, n.jsx)(ih, { widget: t, ...i })
            : t instanceof h.k
              ? (0, n.jsx)(tx, { widget: t, ...i })
              : null;
}
function ib() {
    return (0, n.jsxs)("div", {
        className: iS.mJ,
        children: [
            (0, n.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, n.jsx)(d.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ec.intl.string(ec.t["7blcz6"]),
            }),
        ],
    });
}
function iT(e) {
    let { user: t, guildId: i, channelId: s } = e,
        r = (0, R.A)(t.id),
        o = (0, O.A)(t.id),
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
    function A() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                o &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(eH, { className: iS.cG }), d && (0, n.jsx)(ib, {}), (0, n.jsx)(tS, {})],
                    }),
                r.map((e, l) =>
                    (0, n.jsx)(
                        iC,
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
            { onLoad: o } = w();
        l.useEffect(() => {
            !i && e && v.A.fetchSuggestedGames();
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
        ? (0, n.jsx)(iE, { userId: t.id })
        : o
          ? (0, n.jsx)(eV.D, { children: A() })
          : A();
}
function iN(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, k.i)({ containerRef: s });
    let a = (0, ip.k)(t.id);
    return (0, n.jsxs)(iI.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(iS.XG, { [iS.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(tC.A, { scrollerRef: s }), (0, n.jsx)(iT, { user: t, ...i })],
    });
}
