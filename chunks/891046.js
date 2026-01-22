n.d(t, {
    A: () => V,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(602137),
    c = n(311907),
    o = n(827734),
    d = n(397927),
    u = n(147192),
    m = n(810181),
    h = n(234914),
    f = n(930125),
    g = n(282108),
    x = n(77350),
    b = n(294520),
    p = n(863439),
    j = n(291812),
    v = n(652176),
    y = n(253932),
    A = n(761640),
    C = n(734057),
    O = n(576705),
    N = n(994500),
    S = n(435470),
    T = n(473503),
    _ = n(256265),
    E = n(710948),
    w = n(835369),
    R = n(414368),
    k = n(715493),
    P = n(313880),
    I = n(52933),
    M = n(848551),
    D = n(505234),
    L = n(253913),
    U = n(652215),
    F = n(985018),
    G = n(368964);

function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = r.memo(function (e) {
    let {
            id: t,
            threadId: n,
            goToThread: r,
            overrideMedia: a,
            className: i,
            coords: s,
            gridCoords: o,
            gridSectionBoundaries: d,
            observePostVisibilityAnalytics: u,
        } = e,
        m = (0, c.bG)([C.A], () => C.A.getChannel(n));
    return null == m
        ? null
        : (0, l.jsx)(B, {
              id: t,
              channel: m,
              goToThread: r,
              overrideMedia: a,
              className: i,
              coords: s,
              gridCoords: o,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d,
          });
});

function B(e) {
    let {
            id: t,
            channel: n,
            goToThread: a,
            overrideMedia: u,
            className: m,
            coords: h,
            gridCoords: f,
            gridSectionBoundaries: g,
            observePostVisibilityAnalytics: x,
        } = e,
        b = n.id,
        p = r.useRef(null),
        j = (0, c.bG)([A.Ay], () => A.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: v, loaded: y } = (0, T.OA)(n),
        { messageCountText: C } = (0, S.k6)(n),
        { isNew: O, hasUnreads: N } = (0, S.X5)(n),
        _ = r.useRef(null),
        { handleLeftClick: E, handleRightClick: k } = (0, D.A)({
            facepileRef: _,
            goToThread: a,
            channel: n,
        });
    r.useEffect(() => {
        null == x || x(p.current, b);
    }, [x, b]);
    let I = (0, S.Mw)(n, s.T.CREATION_DATE, L.EG.POSTED_DURATION_AGO),
        U = (0, w.hf)(n),
        H = (0, M.E)({
            id: t,
            row: f.row,
            column: f.column,
            section: f.section,
            boundaries: g,
        }),
        { onFocus: V } = H,
        B = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        a = Object.getOwnPropertyNames(e);
                    for (l = 0; l < a.length; l++)
                        (n = a[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
            return a;
        })(H, ["onFocus"]);
    return (0, l.jsxs)("li", {
        ref: p,
        onClick: E,
        onFocus: V,
        onContextMenu: k,
        className: i()(G.kL, m, {
            [G.nT]: j,
        }),
        style: z({}, h),
        children: [
            (0, l.jsx)(
                d.DUT,
                z(
                    {
                        onClick: E,
                        focusProps: {
                            ringTarget: p,
                        },
                        onContextMenu: k,
                        "aria-label": F.intl.formatToPlainString(F.t.pgYN6c, {
                            title: n.name,
                            count: C,
                        }),
                        className: G.Kv,
                    },
                    B,
                ),
            ),
            (0, l.jsxs)("div", {
                className: G.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: G.Y6,
                        children: [
                            (0, l.jsxs)("div", {
                                className: G.wO,
                                children: [
                                    (0, l.jsx)(P.A, {
                                        channel: n,
                                        message: v,
                                    }),
                                    (0, l.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: G.SD,
                                        children: I,
                                    }),
                                ],
                            }),
                            O
                                ? (0, l.jsx)(d.LpS, {
                                      className: G.Ad,
                                      color: o.A.unsafe_rawColors.BRAND_260.css,
                                      text: F.intl.string(F.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, l.jsx)(d.Fmo, {
                        children: (0, l.jsx)(d.Heading, {
                            variant: "heading-md/extrabold",
                            className: G.DD,
                            color: N ? "text-strong" : "text-muted",
                            style: {
                                width: "".concat(h.width - 2 * R.qf, "px"),
                            },
                            children: U,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: G.PU,
                children: (0, l.jsx)(d.M1G, {
                    children: (0, l.jsx)(K, {
                        channel: n,
                        firstMessage: v,
                        isFirstMessageLoaded: y,
                        overrideMedia: u,
                        coords: h,
                    }),
                }),
            }),
            (0, l.jsx)("div", {
                className: G.qr,
                children: (0, l.jsx)(d.M1G, {
                    children: (0, l.jsx)(q, {
                        channel: n,
                        firstMessage: v,
                        facepileRef: _,
                    }),
                }),
            }),
        ],
    });
}

function K(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: r, overrideMedia: a, coords: i } = e,
        { isBlocked: s, isIgnored: o } = (0, c.cf)([N.A], () => ({
            isBlocked: null != n && N.A.isBlockedForMessage(n),
            isIgnored: null != n && N.A.isIgnoredForMessage(n),
        }));
    return s
        ? (0, l.jsx)($, {
              message: F.intl.string(F.t.Lkp2fB),
              containerWidth: i.width,
              channel: t,
          })
        : o
          ? (0, l.jsx)($, {
                message: F.intl.string(F.t.yWK7ZM),
                containerWidth: i.width,
                channel: t,
            })
          : (0, l.jsx)(W, {
                channel: t,
                firstMessage: n,
                isFirstMessageLoaded: r,
                overrideMedia: a,
                coords: i,
            });
}

function W(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: r, overrideMedia: a, coords: i } = e,
        s = (0, c.bG)([C.A], () => C.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, S.gk)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !1,
        }),
        { hasUnreads: d } = (0, S.X5)(t),
        u = (0, c.bG)([O.A], () => O.A.can(U.xBc.MANAGE_MESSAGES, t)),
        m = y.kt.useSetting(),
        h = y.gs.useSetting(),
        f = (0, p.A)(h, u),
        g = (0, _.no)(n, s, !1),
        x = t.isMediaPost(),
        [b, j] = (0, R.tm)(i.width - 2 * R.IZ, x ? R.PL.SIXTEEN_BY_NINE : R.PL.THREE_BY_TWO);
    return (null == n ? void 0 : n.blocked) || null == (null != a ? a : o)
        ? (0, l.jsx)(Z, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: r,
              containerWidth: i.width,
              hasUnreads: d,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(Q, {
                      mediaAttachments: g,
                      globalSpoilerRenderSetting: f,
                      containerWidth: b,
                      containerHeight: j,
                      canAutoPlay: m,
                      shouldMaintainAspectRatio: x,
                  }),
                  (0, l.jsx)("div", {
                      className: G.GA,
                      children: (0, l.jsx)(I.Ay, {
                          channel: t,
                          tagsClassName: G.uU,
                      }),
                  }),
              ],
          });
}

function q(e) {
    let { channel: t, facepileRef: n, firstMessage: r } = e,
        a = (0, m.m)(t.id),
        i = (null == r ? void 0 : r.reactions) != null && r.reactions.length > 0;
    return (0, l.jsxs)("div", {
        className: G.GD,
        children: [
            (0, l.jsxs)("div", {
                className: G.QW,
                children: [
                    (0, l.jsx)("div", {
                        className: G.mz,
                        children: (0, l.jsx)(w.$k, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0,
                        }),
                    }),
                    a.length > 0
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("span", {
                                      className: G.xE,
                                      children: "•",
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: G.IW,
                                      children: [
                                          (0, l.jsx)(w.gL, {
                                              channel: t,
                                              userIds: a,
                                              facepileRef: n,
                                          }),
                                          (0, l.jsx)("div", {
                                              className: G.r$,
                                              children: (0, l.jsx)(d.nvX, {
                                                  themed: !0,
                                                  dotRadius: 2,
                                              }),
                                          }),
                                          (0, l.jsx)(u.Ay, {
                                              channel: t,
                                              className: G.mD,
                                              renderDots: !1,
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: G.QW,
                children: [
                    i || null == r
                        ? null
                        : (0, l.jsx)(w.NA, {
                              firstMessage: r,
                              channel: t,
                          }),
                    null == r
                        ? null
                        : (0, l.jsx)(w.cn, {
                              firstMessage: r,
                              channel: t,
                          }),
                ],
            }),
        ],
    });
}
let J = (e) => e.preventDefault(),
    X = r.memo(function (e) {
        return (0, l.jsx)(l.Fragment, {
            children: (0, v.LL)(
                H(z({}, e), {
                    analyticsSource: "ForumPostMediaPreviewImage",
                }),
            ),
        });
    }),
    Q = r.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: a,
                containerHeight: s,
                canAutoPlay: c,
                shouldMaintainAspectRatio: o = !1,
            } = e,
            { containsVideo: u, containsGif: m } = r.useMemo(() => (0, _.$2)(t), [t]),
            p = r.useMemo(() => t.slice(k.xA, k.lV), [t]),
            j = (0, k.eX)({
                numAttachments: p.length,
                containerWidth: a,
                containerHeight: s,
            }),
            v = (0, k.p2)({
                imageContainerStyles: j,
                containerWidth: a,
                containerHeight: s,
            }),
            y = (0, g.O8)(f.v.GUILD),
            A = r.useMemo(
                () =>
                    p.map((e, t) => {
                        var r;
                        let [a, s] = (0, b.K6)(e, !n, y),
                            f = (0, b.rx)(s),
                            g = H(z({}, v[t]), {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && a ? f : e.alt,
                                onClick: J,
                                shouldRenderAccessory: !m && !u,
                            }),
                            p = (0, x.ge)(e.src) ? "".concat(e.src, "?format=png") : e.src,
                            A = c && !a ? e.src : p;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: G.UV,
                                style: j[t],
                                children: [
                                    o
                                        ? (0, l.jsx)(
                                              h.A,
                                              H(z({}, g), {
                                                  src: A,
                                                  backgroundSrc: p,
                                                  aspectRatio: g.maxWidth / g.maxHeight,
                                                  alt: null != (r = g.alt) ? r : "",
                                                  className: i()(G.EN, {
                                                      [G.cd]: a,
                                                  }),
                                                  imageChildClassName: G.Rp,
                                              }),
                                          )
                                        : e.src.startsWith("data:")
                                          ? (0, l.jsx)(
                                                d._V3,
                                                H(z({}, g), {
                                                    className: G.il,
                                                    imageClassName: i()(G.LW, {
                                                        [G.cd]: a,
                                                    }),
                                                }),
                                            )
                                          : (0, l.jsx)(
                                                X,
                                                H(z({}, g), {
                                                    autoPlay: c && !a,
                                                    containerClassName: G.EK,
                                                    imageClassName: i()(G.rp, {
                                                        [G.cd]: a,
                                                    }),
                                                    responsive: !0,
                                                }),
                                            ),
                                    a &&
                                        (0, l.jsx)("div", {
                                            className: G.X,
                                            children: (0, l.jsx)(E.A, {
                                                obscureReason: s,
                                                iconClassname: G.yo,
                                            }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [c, m, u, n, j, v, p, o, y],
            );
        return (0, l.jsxs)("div", {
            className: G.pV,
            style: {
                width: a,
                height: s,
            },
            children: [
                A,
                (m || u) &&
                    (0, l.jsxs)("div", {
                        className: G.vz,
                        children: [
                            u &&
                                (0, l.jsx)(d.udU, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: G.cU,
                                }),
                            m &&
                                (0, l.jsx)(d.Osp, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: G.cU,
                                }),
                        ],
                    }),
                t.length > k.Mm &&
                    (0, l.jsx)(Y, {
                        text: (t.length - k.Mm).toString(),
                        icon: d.xfq,
                        pillClassName: G.v3,
                        iconClassName: G.In,
                        textClassName: G.EY,
                    }),
            ],
        });
    });

function Y(e) {
    let { text: t, icon: n, pillClassName: r, iconClassName: a, textClassName: i } = e;
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsx)(n, {
                className: a,
                color: "currentColor",
            }),
            (0, l.jsxs)(d.Text, {
                variant: "text-xs/medium",
                className: i,
                children: ["+", t],
            }),
        ],
    });
}

function Z(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: a, containerWidth: s, hasUnreads: c } = e,
        o = y.hH.useSetting(),
        [u, m] = (0, R.tm)(s - 2 * R.IZ),
        { content: h } = (0, S.gk)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0,
        }),
        { shouldRenderTagsRow: f } = (0, I.BA)({
            channel: t,
            isNew: !1,
        }),
        g = r.useMemo(
            () => ({
                width: u,
                height: m,
            }),
            [u, m],
        ),
        x = c ? G.kR : G.b8;
    return (0, l.jsxs)("div", {
        className: G.Cv,
        style: g,
        children: [
            (0, l.jsxs)("div", {
                className: G.Qs,
                children: [
                    a &&
                        null == n &&
                        (0, l.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: c ? "text-default" : "text-muted",
                            children: F.intl.string(F.t.mE3KJN),
                        }),
                    a &&
                        null != n &&
                        (0, l.jsx)(j.Ay, {
                            message: n,
                            content: h,
                            className: x,
                            compact: o,
                        }),
                ],
            }),
            (0, l.jsx)("div", {
                className: i()(G.kh, {
                    [G.ZH]: !f,
                }),
                children: f
                    ? (0, l.jsx)(I.Ay, {
                          channel: t,
                          tagsClassName: G.uU,
                      })
                    : null,
            }),
        ],
    });
}

function $(e) {
    let { message: t, containerWidth: n, channel: a } = e,
        [s, c] = (0, R.tm)(n - 2 * R.IZ),
        { shouldRenderTagsRow: o } = (0, I.BA)({
            channel: a,
            isNew: !1,
        }),
        u = r.useMemo(
            () => ({
                width: s,
                height: c,
            }),
            [s, c],
        );
    return (0, l.jsxs)("div", {
        className: G.Cv,
        style: u,
        children: [
            (0, l.jsx)("div", {
                className: G.Qs,
                children: (0, l.jsx)(d.Text, {
                    className: G.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, l.jsx)("div", {
                className: i()(G.kh, {
                    [G.ZH]: !o,
                }),
                children: o
                    ? (0, l.jsx)(I.Ay, {
                          channel: a,
                          tagsClassName: G.uU,
                      })
                    : null,
            }),
        ],
    });
}
