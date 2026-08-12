i.d(t, { A: () => iT, u: () => iC });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(17928),
    o = i(885574),
    d = i(834730),
    u = i(429913),
    c = i(277984),
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
    N = i(282435);
let T = (0, S.sampleSize)(N.sx, N.sx.length),
    w = (0, C.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, l) => {
            let s = new Set(l.map((e) => e.gameId));
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
    V = i(866665),
    H = i(939249),
    B = i(499373),
    z = i(661531),
    K = i(43990),
    X = i(408278),
    Y = i(241326),
    q = i(448766),
    J = i(761431),
    Q = i(995919);
function Z(e) {
    let { className: t, variant: i, color: l, value: s, interactive: a = !0, disableMarkdown: o = !1 } = e,
        u = a ? q.d : q.j;
    return (0, n.jsx)(d.E, { className: r()(Q.Y, t), variant: i, color: l, lineClamp: 1, children: o ? s : u(s) });
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
            growWidth: u,
            disableMarkdown: c,
        } = e,
        g = l.useCallback((e) => o(e.trim()), [o]),
        m = (0, J.TX)({ value: i, onCommit: g }),
        x =
            "" === i.trim()
                ? null
                : (0, n.jsx)(Z, { interactive: !1, className: t, variant: r, color: a, value: i, disableMarkdown: c });
    return (0, n.jsx)(J.yV, {
        ...m,
        size: "compact",
        removeVerticalPadding: !0,
        growWidth: u,
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
          : (0, n.jsx)(Z, {
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
    el = i(458710);
function es(e) {
    let { className: t, variant: i, color: l, value: s, maxRows: a, interactive: o = !0 } = e,
        u = o ? q.d : q.j;
    return (0, n.jsx)(d.E, { className: r()(Q.Y, el.L, t), variant: i, color: l, lineClamp: a, children: u(s) });
}
function er(e) {
    let { className: t, value: i, placeholder: s, variant: r, color: a, onCommit: o, maxLength: d, maxRows: u } = e,
        c = l.useCallback((e) => o(e.trim()), [o]),
        g = (0, en.Ww)({ value: i, onCommit: c }),
        m =
            "" === i.trim()
                ? null
                : (0, n.jsx)(es, { interactive: !1, className: t, variant: r, color: a, value: i, maxRows: u });
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
    eu = i(375708),
    ec = i(442461);
function eg() {
    return (0, n.jsx)(V.m, {
        text: eu.intl.string(eu.t.mZddSK),
        children: (0, n.jsxs)(H.D, {
            className: ec.YN,
            "aria-label": eu.intl.string(eu.t.mZddSK),
            onClick: function () {
                (0, W.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
            },
            children: [
                (0, n.jsx)("div", { className: ec.JD }),
                (0, n.jsx)("div", {
                    className: ec.xJ,
                    children: (0, n.jsx)(B.T, { size: "sm", color: z.A.colors.ICON_OVERLAY_DARK }),
                }),
            ],
        }),
    });
}
function em(e) {
    let { userId: t, section: i, sectionIndex: s, canEdit: a } = e,
        [o, d] = l.useState(null),
        u = l.useRef(!1),
        c = null != o;
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
        (u.current = !1), d(null), g((e) => ({ ...e, image: void 0 }));
    }
    function h(e) {
        (u.current = !0), d(e);
    }
    function p(e) {
        u.current && ((u.current = !1), d(null), null != e && g((t) => ({ ...t, image: e })));
    }
    function j() {
        (0, W.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let A = null != i.image || c,
        v = A || a;
    return (0, n.jsx)(K.N, {
        theme: A ? eo.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: r()(ec.kL, { [ec.Vp]: v }, e),
                children: [
                    a || null != i.image
                        ? (0, n.jsx)("div", {
                              className: ec.El,
                              children: (0, n.jsx)(et.A, {
                                  className: ec.Sl,
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
                              className: ec.DT,
                              children: (0, n.jsx)(V.m, {
                                  text: A ? eu.intl.string(eu.t.RyK5Ww) : eu.intl.string(eu.t.g2jVww),
                                  children: (0, n.jsx)(X.K, {
                                      icon: Y.u,
                                      size: "sm",
                                      variant: "overlay-secondary",
                                      "aria-label": A ? eu.intl.string(eu.t.RyK5Ww) : eu.intl.string(eu.t.g2jVww),
                                      onClick: A ? f : j,
                                  }),
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: r()(ec.hQ, e, { [ec.Vp]: v }),
                        children: [
                            A ? (0, n.jsx)("div", { className: ec.cw }) : null,
                            (0, n.jsx)(ee, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-default",
                                value: i.title,
                                placeholder: eu.intl.string(eu.t.KqCDvK),
                                onCommit: m,
                                maxLength: 100,
                            }),
                            (0, n.jsx)(ea, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: i.subtitle,
                                placeholder: eu.intl.string(eu.t.k8zZFd),
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
    ef = i(335225);
function eh(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(H.D, {
        onClick: t,
        className: ef.cR,
        children: [
            (0, n.jsx)(ex.X, { size: "xs", color: z.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: eu.intl.string(eu.t["9AY+/x"]),
            }),
        ],
    });
}
function ep(e) {
    let { index: t, userId: i, field: s, canEdit: r, onFieldChange: a, onFieldRemove: o } = e,
        [d, u] = l.useState(null),
        c = l.useRef(!1),
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
                                  (c.current = !0), u(e);
                              },
                              onImageUploadCompleted: function (e) {
                                  c.current &&
                                      ((c.current = !1), u(null), null != e && a(s.key, (t) => ({ ...t, image: e })));
                              },
                          }),
                          r
                              ? (0, n.jsx)("div", {
                                    className: ef.ij,
                                    children: (0, n.jsx)(V.m, {
                                        text: eu.intl.string(eu.t.RyK5Ww),
                                        children: (0, n.jsx)(X.K, {
                                            size: "sm",
                                            icon: Y.u,
                                            "aria-label": eu.intl.string(eu.t.RyK5Ww),
                                            onClick: function () {
                                                (c.current = !1),
                                                    u(null),
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
                        placeholder: eu.intl.formatToPlainString(eu.t.TNamrx, { number: t + 1 }),
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
                        placeholder: eu.intl.formatToPlainString(eu.t.Hs14K3, { number: t + 1 }),
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
                              : (0, n.jsx)(V.m, {
                                    text: eu.intl.string(eu.t.i3vRzP),
                                    children: (0, n.jsx)(X.K, {
                                        size: "sm",
                                        icon: ex.X,
                                        "aria-label": eu.intl.string(eu.t.i3vRzP),
                                        onClick: function () {
                                            a(s.key, (e) => ({ ...e, hideImage: void 0 }));
                                        },
                                    }),
                                }),
                          (0, n.jsx)(V.m, {
                              text: eu.intl.string(eu.t.g2jVww),
                              children: (0, n.jsx)(X.K, {
                                  size: "sm",
                                  icon: Y.u,
                                  "aria-label": eu.intl.string(eu.t.g2jVww),
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
    eA = i(396395);
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
                placeholder: eu.intl.string(eu.t.fjSaAm),
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
                  (0, n.jsx)(D.h, { color: "nitro-pink", className: eA.Sp, offsetBottom: -2 }),
                  (0, n.jsx)(d.E, {
                      variant: "text-xs/medium",
                      color: "text-default",
                      className: eA.rh,
                      children: eu.intl.string(eu.t.xIJpoK),
                  }),
                  (0, n.jsx)(G.A, {
                      size: "sm",
                      subscriptionTier: ej.pe.TIER_2,
                      defaultTextOverride: eu.intl.string(eu.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: ev,
                  }),
              ],
          });
}
function eb(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        u = l.useMemo(() => t.sections.some((e) => e.type === L.K.COVER), [t.sections]);
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
                d && !u ? (0, n.jsx)(eg, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eS, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
                d ? (0, n.jsx)(eC, {}) : null,
            ],
        }),
    });
}
var eN = i(702841),
    eT = i(821609),
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
        [t, i] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => i(!0), 250);
        return () => clearTimeout(e);
    }, []);
    let n = eR.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [s, r] = (0, eP.kn)(e && t && n ? [e_.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [s === e_.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, r];
}
function eU(e) {
    let { targetElementRef: t, isVisible: i, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, ek.NJ)();
    return i
        ? (0, n.jsx)(eL.A, {
              targetElementRef: t,
              position: "left",
              title: eu.intl.string(eu.t.KKGxNt),
              body: eu.intl.string(eu.t["IS+QTV"]),
              onRequestClose: () => l(eG.i.USER_DISMISS),
              actions: [
                  {
                      text: eu.intl.string(eu.t.RCy7Px),
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
var eW = i(964828);
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
    return (0, n.jsx)(eT.$, {
        icon: P.t,
        text: eu.intl.string(eu.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function eV(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, ek.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, c] = eM(),
        g = (function () {
            let e = (0, eN.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: i, showCreateEntrypoint: n } = eR.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return i && n && !l;
        })(),
        m = l.useCallback(() => {
            u && c(eG.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ew.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("8888"), i.e("22420"), i.e("26623")]).then(
                            i.bind(i, 850370),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, u, c]);
    return (0, n.jsxs)("div", {
        className: r()(eW.w, t),
        children: [
            (0, n.jsx)(d.E, {
                className: eW.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: eu.intl.string(eu.t.OYlggR),
            }),
            g ? (0, n.jsx)(eF, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: c }) : null,
            (0, n.jsx)(eT.$, {
                icon: ey.j,
                text: eu.intl.string(eu.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, n.jsx)(eU, { targetElementRef: g ? o : a, isVisible: u, markAsDismissed: c }),
        ],
    });
}
var eH = i(192),
    eB = i(793574),
    ez = i(111994),
    eK = i(607470),
    eX = i(590251),
    eY = i(530059);
function eq(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(eY.ring, eY[i], { [eY.indeterminate]: l }),
        role: "progressbar",
        "aria-label": eu.intl.string(eu.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, n.jsx)(eX.a, {
            percent: s,
            strokeSize: eX.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var eJ = i(213879);
function eQ(e) {
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
var eZ = i(3026),
    e$ = i(22231);
i(600253);
var e0 = i(998809);
function e1(e) {
    let { value: t, isPlaceholder: i = !1 } = e;
    return (0, n.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(e0.Qw, { [e0.qf]: i }),
        children: (0, n.jsx)(eZ.A, { children: t }),
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
        d = eu.intl.string(eu.t["2gwc+H"]);
    return (0, n.jsx)(J.yV, {
        ...o,
        size: "compact",
        removeVerticalPadding: !0,
        className: r()(e0.ZZ, { [e0.Dy]: o.isEditing }),
        preview: (0, n.jsxs)("span", {
            className: r()(e0.$, e0.TG),
            children: [
                (0, n.jsx)(e$.R, { size: "xxs", color: "currentColor", className: e0.wz }),
                "" === i.trim() ? (0, n.jsx)(e1, { value: d, isPlaceholder: !0 }) : (0, n.jsx)(e1, { value: i }),
            ],
        }),
        placeholder: d,
        editButtonAriaLabel: eu.intl.string(eu.t.PDnM11),
        label: eu.intl.string(eu.t.PDnM11),
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
var e7 = i(663341),
    e5 = i(765178),
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
        if (null == e.applicationId) return void (0, e3.P0)((0, e6.o)(eu.intl.string(eu.t.xcLXWy), e4.Ck.FAILURE));
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
                (0, e3.P0)((0, e6.o)(eu.intl.string(eu.t.iufib1), e4.Ck.FAILURE));
        }
    }
}
function tr(e) {
    let { widgetClipId: t, sourceClipId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, ek.NJ)(),
        r = eu.intl.string(eu.t.ib6Mgx);
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(V.m, {
            text: r,
            ariaHidden: !0,
            children: (0, n.jsx)(X.K, {
                "aria-label": r,
                icon: Y.u,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != i && tl(i),
                        e5.O.announce(eu.intl.string(eu.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var ta = i(547193);
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
                            (0, n.jsx)(H.D, {
                                className: r()(ta.Vs, { [ta.wH]: e.key === i }),
                                "aria-pressed": e.key === i,
                                "aria-label": eu.intl.formatToPlainString(eu.t.zrtAwA, { clipNumber: t + 1 }),
                                onClick: () => l(e.key),
                                children: (0, n.jsx)(eQ, { item: e, ringSize: "sm", className: ta.nC }),
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
                            children: (0, n.jsx)(H.D, {
                                className: ta.Yn,
                                "aria-label": eu.intl.string(eu.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(e7.p, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var td = i(298149);
function tu(e) {
    let { children: t } = e;
    return (0, n.jsxs)("div", {
        className: td.Lw,
        children: [(0, n.jsx)("div", { className: td.tB }), (0, n.jsx)("div", { className: td.Qs, children: t })],
    });
}
var tc = i(465927);
function tg(e) {
    let { onClick: t } = e,
        i = eu.intl.string(eu.t.rI0i0a);
    return (0, n.jsx)(V.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(X.K, { variant: "secondary", size: "sm", icon: B.T, "aria-label": i, onClick: t }),
    });
}
function tm() {
    return (0, n.jsx)("div", {
        className: tc.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: eu.intl.format(eu.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tx(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...u } = e,
        [c, g] = l.useState(null),
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
        p = m.find((e) => e.key === c) ?? m[m.length - 1],
        I = l.useCallback(() => {
            (0, ew.openModalLazy)(
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
                        i.e("66147"),
                        i.e("38090"),
                        i.e("22266"),
                        i.e("1962"),
                        i.e("1922"),
                        i.e("83518"),
                        i.e("37715"),
                        i.e("74049"),
                        i.e("80559"),
                        i.e("95008"),
                        i.e("52566"),
                        i.e("89492"),
                        i.e("89160"),
                        i.e("31782"),
                        i.e("20342"),
                        i.e("71453"),
                        i.e("94676"),
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
        className: tc.kL,
        headerTitle: (0, W.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(tg, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...u,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: tc.nV,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tc.aM,
                              children: [
                                  (0, n.jsx)(eQ, { item: p, ringSize: "lg", className: tc.VH }),
                                  (0, n.jsx)(tu, {
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
            heading: eu.intl.format(eu.t.OIzLCy, { applicationName: i.name }),
            content: eu.intl.format(eu.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(V.m, {
                        text: eu.intl.string(eu.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tj.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tA.P,
                            "aria-label": eu.intl.string(eu.t.WAI6xu),
                            onClick: () => {
                                s(eG.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(V.m, {
                        text: eu.intl.string(eu.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tj.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tv.U,
                            "aria-label": eu.intl.formatToPlainString(eu.t.KfGahB, { applicationName: i.name }),
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
            i = (0, u.A)(e),
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
            { eligibleToShow: c, markAsDismissed: g } = (0, tI.hj)({
                applications: d,
                dismissibleContent: e_.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tI.SH,
            }),
            m = l.useMemo(() => d.filter((e) => c.includes(e.id)), [d, c]);
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
    tN = i(321191),
    tT = i(896170),
    tw = i(922016),
    ty = i(305866),
    tk = i(732771),
    tR = i(321108),
    tO = i(383329),
    t_ = i(250573);
function tL(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.gameId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, ek.NJ)(),
        [u, c] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tO.R)({ query: u }),
        f = u.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        I = (0, tR.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    e5.O.announce(eu.intl.string(eu.t.q0U3DE)),
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
        E = l.useMemo(() => ({ ...x, threshold: tT.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, tT.Ht)(A, e, E).length), [f, A, E]),
        C = l.useCallback(
            (e) => {
                let i = e.target.value;
                "" === u.trim() &&
                    "" !== i.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: S(i),
                    }),
                    c(i),
                    (g.current = i);
            },
            [u, d, t, S],
        );
    return (0, n.jsx)(tw.Y, {
        ...a,
        onRequestOpen: () => {
            d({ action: "PRESS_ADD_GAME", widgetEdited: t }), c(""), (g.current = "");
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
                "aria-label": eu.intl.string(eu.t.uqw8wK),
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
                            label: eu.intl.string(eu.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: eu.intl.string(eu.t["5h0QOP"]),
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
            (0, n.jsx)(V.m, {
                text: eu.intl.string(eu.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(X.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: B.T,
                    "aria-label": eu.intl.string(eu.t.PYyENc),
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
            (0, n.jsx)(H.D, {
                innerRef: t,
                className: t_.c,
                "aria-label": eu.intl.string(eu.t.PYyENc),
                ...e,
                children: (0, n.jsx)(e7.p, { color: "currentColor" }),
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
var tW = i(308685);
function tF(e) {
    let { widget: t } = e,
        i = (0, W.cv)(t.type),
        l = 1 === i,
        s = l ? eu.intl.string(eu.t["3FdPBT"]) : eu.intl.format(eu.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? tW.O : tW.k,
        children: [
            l && (0, n.jsx)(tD, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var tV = i(823016),
    tH = i(683071),
    tB = i(116363);
function tz(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, W.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: tB.l,
              children: (0, n.jsx)(tH.w, {
                  type: "warning",
                  children: eu.intl.formatToPlainString(eu.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var tK = i(17110);
function tX(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(H.D, {
        onClick: t,
        className: tK.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? eu.intl.string(eu.t["6MwJo/"]) : eu.intl.string(eu.t.lBeKY2),
        }),
    });
}
var tY = i(249264),
    tq = i(462037);
function tJ(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tV.r)();
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
function tQ(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eH.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tU(),
        u = o ? s : s.slice(0, 2),
        c = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(tJ, { ...e, games: u }),
                c && (0, n.jsx)(tX, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tz, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tV.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function tZ(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(tQ, {
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
var t0 = i(768754);
function t1(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: t0.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.gameId)),
    });
}
var t2 = i(686246),
    t8 = i(201438),
    t7 = i(451395),
    t5 = i(788593),
    t3 = i(858808),
    t6 = i(350956),
    t4 = i(466215);
function t9(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tV.r)(),
        u = l.useRef(null);
    return (0, n.jsx)(t7.mG, {
        index: t,
        itemId: s.gameId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => u.current?.offsetWidth },
        "aria-label": eu.intl.formatToPlainString(eu.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(i, e, t),
        onEnd: () => d(s.gameId),
        className: t4.kL,
        dropBeforeClassName: t4.A,
        dropAfterClassName: t4.Ze,
        draggingClassName: t4.Id,
        children: (0, n.jsx)("div", { ref: u, className: t4.An, children: o }),
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
        { coverImageUrl: u, gameName: c, isLoading: g } = (0, t8.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tV.r)(),
        x = s && !r,
        { isDragging: f } = (0, t2.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t5.A, {
                    imageSrc: u,
                    gameName: c,
                    gameId: t.gameId,
                    userId: i,
                    disableInteraction: r,
                    className: null == u || r ? void 0 : t6.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(t7.jV, { buttonRef: m(t.gameId), className: t4.BU }),
                x && (0, n.jsx)(t3.A, { game: t, widgetType: l, className: t4.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: t6.mD })
        : x
          ? (0, n.jsx)(t9, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: u, gameName: c, children: h() })
          : (0, n.jsx)("div", { className: t4.kL, children: h() });
}
function it(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tV.r)();
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
        { getManageButtonForWidget: r } = (0, eH.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tU(),
        u = o ? s : s.slice(0, 8),
        c = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(it, { ...e, games: u }),
                c && (0, n.jsx)(tX, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tz, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tV.B, { emptyListFallbackRef: a, children: g }),
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
    io = i(30061);
function id(e) {
    let { gameId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, t8.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        u = eu.intl.formatToPlainString(eu.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: t6.mD })
        : (0, n.jsx)(V.m, {
              text: u,
              ariaHidden: !0,
              children: (0, n.jsxs)(H.D, {
                  className: io.c9,
                  onClick: l,
                  "aria-label": u,
                  children: [
                      (0, n.jsx)(t5.A, {
                          className: io.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(e7.p, { size: "md", className: io.Xv, color: z.A.colors.WHITE }),
                  ],
              }),
          });
}
function iu(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, ia.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(io.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: io.wx,
                children: [
                    (0, n.jsx)(H.D, {
                        className: io.r,
                        "aria-label": eu.intl.string(eu.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(tA.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ir.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: eu.intl.string(eu.t.zMUr6Z),
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
function ic(e) {
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
    return (0, n.jsx)(iu, { games: s, onClick: d, ...i });
}
var ig = i(344287);
function im(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, n.jsx)(t$, { widget: t, ...i });
        case b.x.CURRENT_GAMES:
            return (0, n.jsx)(tZ, { widget: t, ...i });
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
        { shouldShowSuggestions: u, handleDismissSuggestions: c } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tb.default, tN.A], () => {
                    let e = tb.default.getId();
                    if (null == e) return !1;
                    let t = tN.A.getUserProfile(e);
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
        m = g && u,
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
        trailingContent: m && (0, n.jsx)(ic, { userId: i.id, widgetType: t.type, onDismiss: c, className: ig.r }),
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
    iv = i(902394);
function iE(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, ek.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([tN.A], () => tN.A.getUserProfile(t)?.fetchError != null, [t]),
        [c, g] = eM(!u),
        m = (0, ij.A)();
    return (
        l.useEffect(() => {
            r.current || u || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [u, i]),
        (0, n.jsxs)("div", {
            className: iv.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: iv.FS,
                    children: [
                        (0, n.jsx)(ir.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: eu.intl.string(eu.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: u ? eu.intl.string(eu.t["+W59o5"]) : eu.intl.string(eu.t.O9SQ1c),
                        }),
                    ],
                }),
                !u &&
                    (0, n.jsx)("ul", {
                        className: iv.ZW,
                        "aria-label": eu.intl.string(eu.t["+EIBSA"]),
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
                !u && (0, n.jsx)(eU, { targetElementRef: o, isVisible: c, markAsDismissed: g }),
            ],
        })
    );
}
var iS = i(456620);
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
            (0, n.jsx)(o.m, { size: "xs" }),
            (0, n.jsx)(d.E, {
                "aria-label": eu.intl.string(eu.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: eu.intl.string(eu.t["7blcz6"]),
            }),
        ],
    });
}
function iN(e) {
    let { user: t, guildId: i, channelId: s } = e,
        r = (0, R.A)(t.id),
        o = (0, O.A)(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                i = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && i && (0, c.xe)();
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
                        children: [(0, n.jsx)(eV, { className: iS.cG }), d && (0, n.jsx)(ib, {}), (0, n.jsx)(tS, {})],
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
        (0, u.A)(i);
        let { data: n, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== n);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, n.jsx)(iE, { userId: t.id })
        : o
          ? (0, n.jsx)(eH.D, { children: A() })
          : A();
}
function iT(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, k.i)({ containerRef: s });
    let a = (0, ip.k)(t.id);
    return (0, n.jsxs)(iI.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(iS.XG, { [iS.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(tC.A, { scrollerRef: s }), (0, n.jsx)(iN, { user: t, ...i })],
    });
}
