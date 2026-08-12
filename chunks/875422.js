i.d(t, { A: () => iw, u: () => ib });
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
    K = i(408278),
    X = i(241326),
    Y = i(43990),
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
        className: ec.El,
        children: [
            (0, n.jsx)(et.A, {
                className: ec.Sl,
                canEdit: l,
                userId: t,
                image: i,
                previewUri: s,
                uploadType: ed.HL.PERSONAL_WIDGET_COVER,
                onImageUploadStarted: r,
                onImageUploadCompleted: a,
            }),
            l && (null != i || null != s)
                ? (0, n.jsx)("div", {
                      className: ec.ij,
                      children: (0, n.jsx)(K.K, {
                          icon: X.u,
                          size: "sm",
                          variant: "overlay-secondary",
                          "aria-label": eu.intl.string(eu.t.RyK5Ww),
                          onClick: o,
                      }),
                  })
                : null,
        ],
    });
}
function ex(e) {
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
    return (0, n.jsx)(Y.N, {
        theme: A ? eo.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: r()(ec.kL, { [ec.Vp]: v }, e),
                children: [
                    a || null != i.image
                        ? (0, n.jsx)(em, {
                              userId: t,
                              image: i.image,
                              canEdit: a,
                              uploadPreviewUri: o,
                              onImageUploadStarted: h,
                              onImageUploadCompleted: p,
                              onImageRemove: f,
                          })
                        : null,
                    a && !A
                        ? (0, n.jsx)("div", {
                              className: ec.kI,
                              children: (0, n.jsx)(V.m, {
                                  text: eu.intl.string(eu.t.g2jVww),
                                  children: (0, n.jsx)(K.K, {
                                      icon: X.u,
                                      size: "sm",
                                      variant: "overlay-secondary",
                                      "aria-label": eu.intl.string(eu.t.g2jVww),
                                      onClick: j,
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
var ef = i(750943),
    eh = i(335225);
function ep(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(H.D, {
        onClick: t,
        className: eh.cR,
        children: [
            (0, n.jsx)(ef.X, { size: "xs", color: z.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: eu.intl.string(eu.t["9AY+/x"]),
            }),
        ],
    });
}
function eI(e) {
    let { index: t, userId: i, field: s, canEdit: r, onFieldChange: a, onFieldRemove: o } = e,
        [d, u] = l.useState(null),
        c = l.useRef(!1),
        g = r ? !0 !== s.hideImage : null != s.image;
    return (0, n.jsxs)("div", {
        className: eh.ez,
        children: [
            g
                ? (0, n.jsxs)("div", {
                      className: eh.tF,
                      children: [
                          (0, n.jsx)(et.A, {
                              className: eh.k9,
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
                                    className: eh.ij,
                                    children: (0, n.jsx)(V.m, {
                                        text: eu.intl.string(eu.t.RyK5Ww),
                                        children: (0, n.jsx)(K.K, {
                                            size: "sm",
                                            icon: X.u,
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
                className: eh.oT,
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
                      className: eh.Ms,
                      children: [
                          g
                              ? null
                              : (0, n.jsx)(V.m, {
                                    text: eu.intl.string(eu.t.i3vRzP),
                                    children: (0, n.jsx)(K.K, {
                                        size: "sm",
                                        icon: ef.X,
                                        "aria-label": eu.intl.string(eu.t.i3vRzP),
                                        onClick: function () {
                                            a(s.key, (e) => ({ ...e, hideImage: void 0 }));
                                        },
                                    }),
                                }),
                          (0, n.jsx)(V.m, {
                              text: eu.intl.string(eu.t.g2jVww),
                              children: (0, n.jsx)(K.K, {
                                  size: "sm",
                                  icon: X.u,
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
function ej(e) {
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
        (0, n.jsx)(eI, { index: i, userId: t, field: e, canEdit: s, onFieldChange: a, onFieldRemove: o }, e.key),
    );
    return (s &&
        i.fields.length < 4 &&
        d.push(
            (0, n.jsx)(
                ep,
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
        : (0, n.jsx)("div", { className: eh.kL, children: d });
}
var eA = i(202541),
    ev = i(396395);
let eE = { section: eo.JJy.PERSONAL_WIDGET };
function eS(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: ev.wx,
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
function eC(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    switch (i.type) {
        case L.K.COVER:
            return (0, n.jsx)(ex, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case L.K.FIELDS:
            return (0, n.jsx)(ej, { userId: t, section: i, sectionIndex: l, canEdit: s });
    }
}
function eb() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eA.PremiumTypes.TIER_2))
        ? null
        : (0, n.jsxs)("div", {
              className: ev.hc,
              children: [
                  (0, n.jsx)(D.h, { color: "nitro-pink", className: ev.Sp, offsetBottom: -2 }),
                  (0, n.jsx)(d.E, {
                      variant: "text-xs/medium",
                      color: "text-default",
                      className: ev.rh,
                      children: eu.intl.string(eu.t.xIJpoK),
                  }),
                  (0, n.jsx)(G.A, {
                      size: "sm",
                      subscriptionTier: eA.pe.TIER_2,
                      defaultTextOverride: eu.intl.string(eu.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eE,
                  }),
              ],
          });
}
function eN(e) {
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
        className: ev.Nr,
        headerClassName: ev.JE,
        children: (0, n.jsxs)("div", {
            className: ev.kL,
            children: [
                (0, n.jsx)(eS, { widget: t, canEdit: d }),
                d && !u ? (0, n.jsx)(eg, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eC, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
                d ? (0, n.jsx)(eb, {}) : null,
            ],
        }),
    });
}
var eT = i(702841),
    ew = i(821609),
    ey = i(192308),
    ek = i(307301),
    eR = i(183555),
    eO = i(465318),
    e_ = i(384377),
    eL = i(554146),
    eP = i(43105),
    eD = i(131607),
    eG = i(518477),
    eM = i(49999);
function eU() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => i(!0), 250);
        return () => clearTimeout(e);
    }, []);
    let n = eO.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [s, r] = (0, eD.kn)(e && t && n ? [eL.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [s === eL.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, r];
}
function eW(e) {
    let { targetElementRef: t, isVisible: i, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eR.NJ)();
    return i
        ? (0, n.jsx)(eP.A, {
              targetElementRef: t,
              position: "left",
              title: eu.intl.string(eu.t.KKGxNt),
              body: eu.intl.string(eu.t["IS+QTV"]),
              onRequestClose: () => l(eM.i.USER_DISMISS),
              actions: [
                  {
                      text: eu.intl.string(eu.t.RCy7Px),
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, e_.XA)(eG.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var eF = i(964828);
function eV(e) {
    let { buttonRef: t, isCoachmarkVisible: i, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eR.NJ)(),
        a = l.useCallback(() => {
            i && s(eM.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, e_.XA)(eG.jM.WIDGET_ADDED);
        }, [r, i, s]);
    return (0, n.jsx)(ew.$, {
        icon: P.t,
        text: eu.intl.string(eu.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function eH(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eR.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, c] = eU(),
        g = (function () {
            let e = (0, eT.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: i, showCreateEntrypoint: n } = eO.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return i && n && !l;
        })(),
        m = l.useCallback(() => {
            u && c(eM.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ey.openModalLazy)(
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
        className: r()(eF.w, t),
        children: [
            (0, n.jsx)(d.E, {
                className: eF.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: eu.intl.string(eu.t.OYlggR),
            }),
            g ? (0, n.jsx)(eV, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: c }) : null,
            (0, n.jsx)(ew.$, {
                icon: ek.j,
                text: eu.intl.string(eu.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, n.jsx)(eW, { targetElementRef: g ? o : a, isVisible: u, markAsDismissed: c }),
        ],
    });
}
var eB = i(192),
    ez = i(793574),
    eK = i(111994),
    eX = i(607470),
    eY = i(590251),
    eq = i(530059);
function eJ(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(eq.ring, eq[i], { [eq.indeterminate]: l }),
        role: "progressbar",
        "aria-label": eu.intl.string(eu.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, n.jsx)(eY.a, {
            percent: s,
            strokeSize: eY.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var eQ = i(213879);
function eZ(e) {
    let { item: t, ringSize: i, className: l } = e,
        s = "exporting" === t.status || "uploading" === t.status,
        a = r()(eQ.Gt, { [eQ.ob]: s });
    return (0, n.jsxs)("div", {
        className: r()(eQ.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(eX.A, { src: t.videoURL, preload: "metadata", muted: !0, className: a })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: a, loading: "lazy" }),
            s && (0, n.jsx)(eJ, { item: t, size: i }),
        ],
    });
}
var e$ = i(3026),
    e0 = i(22231);
i(600253);
var e1 = i(998809);
function e2(e) {
    let { value: t, isPlaceholder: i = !1 } = e;
    return (0, n.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(e1.Qw, { [e1.qf]: i }),
        children: (0, n.jsx)(e$.A, { children: t }),
    });
}
function e8(e) {
    let { clipId: t, title: i } = e,
        { trackUserProfileEditAction: s } = (0, eR.NJ)(),
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
        className: r()(e1.ZZ, { [e1.Dy]: o.isEditing }),
        preview: (0, n.jsxs)("span", {
            className: r()(e1.$, e1.TG),
            children: [
                (0, n.jsx)(e0.R, { size: "xxs", color: "currentColor", className: e1.wz }),
                "" === i.trim() ? (0, n.jsx)(e2, { value: d, isPlaceholder: !0 }) : (0, n.jsx)(e2, { value: i }),
            ],
        }),
        placeholder: d,
        editButtonAriaLabel: eu.intl.string(eu.t.PDnM11),
        label: eu.intl.string(eu.t.PDnM11),
        maxLength: 200,
    });
}
function e7(e) {
    let { clipId: t, title: i, allowEditing: l } = e,
        s = null != i && "" !== i.trim();
    return l || s
        ? l
            ? (0, n.jsx)(e8, { clipId: t, title: i ?? "" })
            : (0, n.jsx)("span", { className: e1.$, children: (0, n.jsx)(e2, { value: i ?? "" }) })
        : null;
}
var e5 = i(663341),
    e3 = i(765178),
    e6 = i(691540),
    e4 = i(857250),
    e9 = i(97483),
    te = i(539572),
    tt = i(195880),
    ti = i(696016);
let tn = (0, C.v)(() => ({ localClips: new Map() }));
function tl(e, t) {
    tn.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
function ts(e) {
    tn.setState((t) => {
        let i = new Map(t.localClips);
        return i.delete(e), { localClips: i };
    });
}
async function tr(e, t) {
    if (!tn.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, e6.P0)((0, e4.o)(eu.intl.string(eu.t.xcLXWy), e9.Ck.FAILURE));
        tl(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, te.VO)(e, { analyticsLocations: t });
            tl(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                l = await v.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void tn.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            tl(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, W.XW)({
                    status: "pending",
                    id: (0, tt.m)(),
                    sourceClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            ts(e.id),
                ti.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, e6.P0)((0, e4.o)(eu.intl.string(eu.t.iufib1), e9.Ck.FAILURE));
        }
    }
}
function ta(e) {
    let { widgetClipId: t, sourceClipId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eR.NJ)(),
        r = eu.intl.string(eu.t.ib6Mgx);
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(V.m, {
            text: r,
            ariaHidden: !0,
            children: (0, n.jsx)(K.K, {
                "aria-label": r,
                icon: X.u,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != i && ts(i),
                        e3.O.announce(eu.intl.string(eu.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var to = i(547193);
function td(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s, allowRemoving: a = !1 } = e,
        o = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: to.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: to.NI,
                        children: [
                            (0, n.jsx)(H.D, {
                                className: r()(to.Vs, { [to.wH]: e.key === i }),
                                "aria-pressed": e.key === i,
                                "aria-label": eu.intl.formatToPlainString(eu.t.zrtAwA, { clipNumber: t + 1 }),
                                onClick: () => l(e.key),
                                children: (0, n.jsx)(eZ, { item: e, ringSize: "sm", className: to.nC }),
                            }),
                            a &&
                                ("pending" === e.status || "saved" === e.status) &&
                                (0, n.jsx)(ta, {
                                    widgetClipId: e.key,
                                    sourceClipId: "pending" === e.status ? e.sourceClipId : void 0,
                                    className: to.nM,
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
                            className: to.NI,
                            children: (0, n.jsx)(H.D, {
                                className: to.Yn,
                                "aria-label": eu.intl.string(eu.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(e5.p, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var tu = i(298149);
function tc(e) {
    let { children: t } = e;
    return (0, n.jsxs)("div", {
        className: tu.Lw,
        children: [(0, n.jsx)("div", { className: tu.tB }), (0, n.jsx)("div", { className: tu.Qs, children: t })],
    });
}
var tg = i(465927);
function tm(e) {
    let { onClick: t } = e,
        i = eu.intl.string(eu.t.rI0i0a);
    return (0, n.jsx)(V.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(K.K, { variant: "secondary", size: "sm", icon: B.T, "aria-label": i, onClick: t }),
    });
}
function tx() {
    return (0, n.jsx)("div", {
        className: tg.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: eu.intl.format(eu.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tf(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...u } = e,
        [c, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = tn((e) => e.localClips)),
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
            (0, ey.openModalLazy)(
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
                            initialMainLink: eK.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => tr(e, [ez.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: ti.nm },
            );
        }, []);
    return (0, n.jsx)(F.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: tg.kL,
        headerTitle: (0, W.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(tm, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...u,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: tg.nV,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tg.aM,
                              children: [
                                  (0, n.jsx)(eZ, { item: p, ringSize: "lg", className: tg.VH }),
                                  (0, n.jsx)(tc, {
                                      children:
                                          ("saved" === p.status || "pending" === p.status) &&
                                          (0, n.jsx)(e7, { clipId: p.key, title: p.title, allowEditing: x }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(td, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                              allowRemoving: x,
                          }),
                      ],
                  })
                : (0, n.jsx)(tx, {}),
    });
}
var th = i(704824),
    tp = i(382483),
    tI = i(385113),
    tj = i(334074),
    tA = i(657718),
    tv = i(789645),
    tE = i(478016);
function tS(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eR.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, e_.XA)(eG.jM.WIDGET_ADDED));
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
                        children: (0, n.jsx)(tA.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tv.P,
                            "aria-label": eu.intl.string(eu.t.WAI6xu),
                            onClick: () => {
                                s(eM.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(V.m, {
                        text: eu.intl.string(eu.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tA.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tE.U,
                            "aria-label": eu.intl.formatToPlainString(eu.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(eM.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tC() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tI.A], () => tI.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tp.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            i = (0, u.A)(e),
            { tokens: n, fetched: s } = (0, th.j)(e),
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
            { eligibleToShow: c, markAsDismissed: g } = (0, tj.hj)({
                applications: d,
                dismissibleContent: eL.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tj.SH,
            }),
            m = l.useMemo(() => d.filter((e) => c.includes(e.id)), [d, c]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(tS, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tb = i(128988),
    tN = i(280450),
    tT = i(321191),
    tw = i(896170),
    ty = i(922016),
    tk = i(305866),
    tR = i(732771),
    tO = i(321108),
    t_ = i(383329),
    tL = i(250573);
function tP(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.gameId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, eR.NJ)(),
        [u, c] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, t_.R)({ query: u }),
        f = u.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        I = (0, tO.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    e3.O.announce(eu.intl.string(eu.t.q0U3DE)),
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
        E = l.useMemo(() => ({ ...x, threshold: tw.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, tw.Ht)(A, e, E).length), [f, A, E]),
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
    return (0, n.jsx)(ty.Y, {
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
            return (0, n.jsx)(tk.l, {
                className: tL.C,
                "aria-label": eu.intl.string(eu.t.uqw8wK),
                children: (0, n.jsxs)(tR.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: E,
                    customMatchSorter: f ? v : void 0,
                    children: [
                        (0, n.jsx)(tR.a3, {
                            label: eu.intl.string(eu.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: eu.intl.string(eu.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, n.jsx)(tR.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function tD(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(tP, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(V.m, {
                text: eu.intl.string(eu.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(K.K, {
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
function tG(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(tP, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(H.D, {
                innerRef: t,
                className: tL.c,
                "aria-label": eu.intl.string(eu.t.PYyENc),
                ...e,
                children: (0, n.jsx)(e5.p, { color: "currentColor" }),
            }),
    });
}
let tM = l.createContext(null);
function tU(e) {
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
    return (0, n.jsx)(tM.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function tW() {
    let e = l.useContext(tM);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var tF = i(308685);
function tV(e) {
    let { widget: t } = e,
        i = (0, W.cv)(t.type),
        l = 1 === i,
        s = l ? eu.intl.string(eu.t["3FdPBT"]) : eu.intl.format(eu.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? tF.O : tF.k,
        children: [
            l && (0, n.jsx)(tG, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var tH = i(823016),
    tB = i(683071),
    tz = i(116363);
function tK(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, W.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: tz.l,
              children: (0, n.jsx)(tB.w, {
                  type: "warning",
                  children: eu.intl.formatToPlainString(eu.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var tX = i(17110);
function tY(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(H.D, {
        onClick: t,
        className: tX.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? eu.intl.string(eu.t["6MwJo/"]) : eu.intl.string(eu.t.lBeKY2),
        }),
    });
}
var tq = i(249264),
    tJ = i(462037);
function tQ(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tH.r)();
    return (0, n.jsx)("ul", {
        className: tJ.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(tq.A, {
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
        { getManageButtonForWidget: r } = (0, eB.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tW(),
        u = o ? s : s.slice(0, 2),
        c = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(tQ, { ...e, games: u }),
                c && (0, n.jsx)(tY, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tK, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tH.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function t$(e) {
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
                : (0, n.jsx)(tV, { widget: i }),
    });
}
function t0(e) {
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
                ? (0, n.jsx)(tq.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tV, { widget: i }),
    });
}
var t1 = i(768754);
function t2(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: t1.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.gameId)),
    });
}
var t8 = i(686246),
    t7 = i(201438),
    t5 = i(451395),
    t3 = i(788593),
    t6 = i(858808),
    t4 = i(350956),
    t9 = i(466215);
function ie(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tH.r)(),
        u = l.useRef(null);
    return (0, n.jsx)(t5.mG, {
        index: t,
        itemId: s.gameId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => u.current?.offsetWidth },
        "aria-label": eu.intl.formatToPlainString(eu.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(i, e, t),
        onEnd: () => d(s.gameId),
        className: t9.kL,
        dropBeforeClassName: t9.A,
        dropAfterClassName: t9.Ze,
        draggingClassName: t9.Id,
        children: (0, n.jsx)("div", { ref: u, className: t9.An, children: o }),
    });
}
function it(e) {
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
        { coverImageUrl: u, gameName: c, isLoading: g } = (0, t7.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tH.r)(),
        x = s && !r,
        { isDragging: f } = (0, t8.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t3.A, {
                    imageSrc: u,
                    gameName: c,
                    gameId: t.gameId,
                    userId: i,
                    disableInteraction: r,
                    className: null == u || r ? void 0 : t4.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(t5.jV, { buttonRef: m(t.gameId), className: t9.BU }),
                x && (0, n.jsx)(t6.A, { game: t, widgetType: l, className: t9.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: t4.mD })
        : x
          ? (0, n.jsx)(ie, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: u, gameName: c, children: h() })
          : (0, n.jsx)("div", { className: t9.kL, children: h() });
}
function ii(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tH.r)();
    return (0, n.jsx)(t2, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(it, {
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
function il(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eB.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tW(),
        u = o ? s : s.slice(0, 8),
        c = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ii, { ...e, games: u }),
                c && (0, n.jsx)(tY, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tK, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tH.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
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
                ? (0, n.jsx)(il, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tV, { widget: i }),
    });
}
function ir(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(il, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tV, { widget: i }),
    });
}
var ia = i(297264),
    io = i(915089),
    id = i(30061);
function iu(e) {
    let { gameId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, t7.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        u = eu.intl.formatToPlainString(eu.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: t4.mD })
        : (0, n.jsx)(V.m, {
              text: u,
              ariaHidden: !0,
              children: (0, n.jsxs)(H.D, {
                  className: id.c9,
                  onClick: l,
                  "aria-label": u,
                  children: [
                      (0, n.jsx)(t3.A, {
                          className: id.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(e5.p, { size: "md", className: id.Xv, color: z.A.colors.WHITE }),
                  ],
              }),
          });
}
function ic(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, io.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(id.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: id.wx,
                children: [
                    (0, n.jsx)(H.D, {
                        className: id.r,
                        "aria-label": eu.intl.string(eu.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(tv.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ia.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: eu.intl.string(eu.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: id.Vg,
                children: i.map((e) => {
                    let { gameId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(iu, { onClick: () => s(i), userId: t, gameId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function ig(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = y(t),
        { setExpanded: a } = tW(),
        { trackUserProfileEditAction: o } = (0, eR.NJ)(),
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
var im = i(344287);
function ix(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, n.jsx)(t0, { widget: t, ...i });
        case b.x.CURRENT_GAMES:
            return (0, n.jsx)(t$, { widget: t, ...i });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(ir, { widget: t, ...i });
        case b.x.PLAYED_GAMES:
            return (0, n.jsx)(is, { widget: t, ...i });
        default:
            return null;
    }
}
function ih(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = tW(),
        { shouldShowSuggestions: u, handleDismissSuggestions: c } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tN.default, tT.A], () => {
                    let e = tN.default.getId();
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
        m = g && u,
        x = (0, W.L)(t),
        f = (0, W.FM)(t, { showEditingControls: g }),
        h = (0, W.uA)(t),
        p = 1 === (0, W.cv)(t.type);
    return (0, n.jsx)(ix, {
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
                          tD,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(ig, { userId: i.id, widgetType: t.type, onDismiss: c, className: im.r }),
        ...o,
    });
}
function ip(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(tU, { widgetType: t.type, children: (0, n.jsx)(ih, { widget: t, ...i }) });
}
var iI = i(271383),
    ij = i(94160),
    iA = i(96173),
    iv = i(788259),
    iE = i(902394);
function iS(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, eR.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([tT.A], () => tT.A.getUserProfile(t)?.fetchError != null, [t]),
        [c, g] = eU(!u),
        m = (0, iA.A)();
    return (
        l.useEffect(() => {
            r.current || u || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [u, i]),
        (0, n.jsxs)("div", {
            className: iE.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: iE.FS,
                    children: [
                        (0, n.jsx)(ia.D, {
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
                        className: iE.ZW,
                        "aria-label": eu.intl.string(eu.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, n.jsx)(iv.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !u && (0, n.jsx)(eW, { targetElementRef: o, isVisible: c, markAsDismissed: g }),
            ],
        })
    );
}
var iC = i(456620);
function ib(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(_.A, { widget: t, ...i })
        : t instanceof I.Tu
          ? (0, n.jsx)(eN, { widget: t, ...i })
          : (0, p.fu)(t)
            ? (0, n.jsx)(ip, { widget: t, ...i })
            : t instanceof h.k
              ? (0, n.jsx)(tf, { widget: t, ...i })
              : null;
}
function iN() {
    return (0, n.jsxs)("div", {
        className: iC.mJ,
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
function iT(e) {
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
                        children: [(0, n.jsx)(eH, { className: iC.cG }), d && (0, n.jsx)(iN, {}), (0, n.jsx)(tC, {})],
                    }),
                r.map((e, l) =>
                    (0, n.jsx)(
                        ib,
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
        ? (0, n.jsx)(iS, { userId: t.id })
        : o
          ? (0, n.jsx)(eB.D, { children: A() })
          : A();
}
function iw(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, k.i)({ containerRef: s });
    let a = (0, iI.k)(t.id);
    return (0, n.jsxs)(ij.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(iC.XG, { [iC.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(tb.A, { scrollerRef: s }), (0, n.jsx)(iT, { user: t, ...i })],
    });
}
