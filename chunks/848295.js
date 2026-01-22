n.d(t, {
    A: () => w,
}),
    n(896048),
    n(65821),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(110259),
    o = n(877624),
    c = n(311907),
    u = n(554146),
    d = n(732955),
    p = n(397927),
    f = n(775602),
    h = n(139286),
    A = n(871751),
    g = n(259407),
    m = n(915089),
    b = n(607470),
    _ = n(367727),
    E = n(652176),
    O = n(954571),
    y = n(728458),
    I = n(652215),
    v = n(49999),
    S = n(985018),
    C = n(530811);

function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = [],
    x = (e) => {
        let { tagText: t, className: n } = e;
        return (0, r.jsx)(p.LpS, {
            className: a()(C.Tc, n),
            text: t,
        });
    },
    P = (e) => {
        let { header: t, subHeader: n, imageSrc: i, tagText: l, wideStyle: s } = e;
        return (0, r.jsxs)("div", {
            className: a()(C.Vr, {
                [C.tF]: s,
            }),
            children: [
                null != l
                    ? (0, r.jsx)(x, {
                          tagText: l,
                          className: C.bX,
                      })
                    : null,
                (0, r.jsx)("img", {
                    alt: "",
                    className: a()(C._n, {
                        [C.tF]: s,
                    }),
                    src: i,
                }),
                (0, r.jsxs)("div", {
                    className: C.Zz,
                    children: [
                        (0, r.jsx)(p.Heading, {
                            variant: "heading-md/bold",
                            className: C.Hf,
                            children: t,
                        }),
                        (0, r.jsx)(p.Text, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            children: n,
                        }),
                    ],
                }),
            ],
        });
    };

function w(e) {
    let {
            componentId: t,
            promotionId: n,
            className: l,
            renderModalProps: x,
            heroArt: w,
            heroArtClassName: L,
            modalTopExtra: R,
            header: D,
            headerClassName: M,
            subHeader: k,
            subHeaderExtra: U,
            featureCards: G,
            changeLogId: V,
            button: B,
            body: H,
        } = e,
        { onClose: F, transitionState: Y } = x,
        K = (0, m.GV)(),
        z = G.length % 2 == 0,
        W = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        [q, Q] = i.useState(Date.now()),
        [X, Z] = i.useState(0),
        [J, $] = i.useState(0),
        [ee, et] = i.useState(!1),
        [en, er] = i.useState(!0),
        ei = i.useRef(q),
        el = i.useRef(X),
        ea = i.useRef(J),
        es = i.useRef(ee),
        eo = i.useRef(en),
        [ec, eu] = i.useState(j),
        ed = i.useRef(!1);

    function ep() {
        let e = Date.now(),
            t = e - ei.current,
            n = el.current,
            r = ea.current;
        return es.current && (Z((n += t)), eo.current || $((r += t))), Q(e), [n, r];
    }
    return (
        (0, h.A)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: {
                component_id: t,
                component_type: o.C.ANNOUNCEMENT_MODAL,
            },
        }),
        i.useEffect(() => {
            let e = async () => {
                try {
                    var e;
                    if ("video" !== w.type || null == w.subtitles) return;
                    let t =
                        null == (e = w.subtitles)
                            ? void 0
                            : e.map(async (e) => {
                                  let t = await fetch(e.src);
                                  if (!t.ok) throw Error("Failed to fetch the subtitle file ".concat(e.src));
                                  let n = await t.text(),
                                      r = new Blob([n], {
                                          type: "text/vtt",
                                      }),
                                      i = URL.createObjectURL(r);
                                  return T(N({}, e), {
                                      src: i,
                                  });
                              });
                    eu(await Promise.all(t));
                } catch (e) {
                    y.A.captureException(e), eu(j);
                }
            };
            !0 !== ed.current && e(), (ed.current = !0);
        }, [w, ec]),
        i.useEffect(
            () => () => {
                null != ec &&
                    ec.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [ec],
        ),
        i.useEffect(() => {
            (ei.current = q), (el.current = X), (ea.current = J), (es.current = ee), (eo.current = en);
        }, [q, X, J, ee, en]),
        i.useEffect(
            () => () => {
                if ("video" === w.type || "embed" === w.type) {
                    let [e, t] = ep();
                    O.default.track(I.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: V,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        O.default.track(I.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: V,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [V, w.type],
        ),
        i.useEffect(() => {
            (0, _.Vh)(u.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
            let e = Date.now();
            return (
                O.default.track(I.HAw.CHANGE_LOG_OPENED, {
                    change_log_id: V,
                }),
                () => {
                    O.default.track(I.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: V,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, _.qr)(u.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                            dismissAction: v.i.DISMISS,
                        });
                }
            );
        }, [V, n]),
        (0, r.jsx)(p.EOs, {
            "data-migration-pending": !0,
            className: a()(C.zr, C.kv, l),
            transitionState: Y,
            "aria-labelledby": K,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(p.hLv, {
                color: "nitro-pink",
                children: [
                    (0, r.jsx)("div", {
                        className: C.cG,
                        children: (0, r.jsx)(d.JnF, {
                            "data-migration-pending": !0,
                            onClick: async () => await F(),
                        }),
                    }),
                    null == R ? void 0 : R(),
                    (0, r.jsxs)(p.$mQ, {
                        "data-migration-pending": !0,
                        className: C.Qs,
                        children: [
                            "video" === w.type
                                ? (0, r.jsx)(b.A, {
                                      className: a()(C.Ki, L),
                                      autoPlay: !W,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: w.src,
                                      poster: w.poster,
                                      onPlay: (e) => {
                                          O.default.track(I.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                              change_log_id: V,
                                          }),
                                              Q(Date.now()),
                                              et(!0),
                                              er(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          ep(), er(e.currentTarget.muted), et(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          ep(), er(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          ep(), er(e.currentTarget.muted), et(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children:
                                          null == ec
                                              ? void 0
                                              : ec.map((e) => {
                                                    let t = (0, S.getLanguages)().find((t) => t.code === e.locale);
                                                    return null == t
                                                        ? null
                                                        : (0, r.jsx)(
                                                              "track",
                                                              {
                                                                  label: t.englishName,
                                                                  kind: "captions",
                                                                  srcLang: t.code,
                                                                  src: e.src,
                                                                  default: e.isDefault,
                                                              },
                                                              e.locale,
                                                          );
                                                }),
                                  })
                                : "embed" === w.type
                                  ? (0, r.jsx)(A.rr, {
                                        className: a()(C.Ki, L),
                                        allowFullScreen: !1,
                                        href: w.href,
                                        thumbnail: w.thumbnail,
                                        video: w.embed,
                                        provider: g.mt.YOUTUBE,
                                        maxWidth: w.embed.width,
                                        maxHeight: w.embed.height,
                                        renderVideoComponent: E.$o,
                                        renderImageComponent: E.LL,
                                        renderLinkComponent: E.bU,
                                        onPlay: () => {
                                            O.default.track(I.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                change_log_id: V,
                                            });
                                        },
                                    })
                                  : "image" === w.type
                                    ? (0, r.jsx)("img", {
                                          alt: "",
                                          className: a()(C.Ki, L),
                                          src: w.src,
                                      })
                                    : null,
                            (0, r.jsx)(p.Heading, {
                                variant: "display-md",
                                className: a()(C.TK, M),
                                children: D,
                            }),
                            (0, r.jsxs)(p.Text, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: C.uI,
                                children: [k, null == U ? void 0 : U()],
                            }),
                            null != H &&
                                "" !== H &&
                                (0, r.jsx)(p.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: C.G3,
                                    children: H,
                                }),
                            G.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: a()(C.IS, {
                                        [C.tF]: z,
                                    }),
                                    children: G.map((e, t) =>
                                        (0, r.jsx)(
                                            P,
                                            T(N({}, e), {
                                                wideStyle: z,
                                            }),
                                            "".concat(e.header, "_").concat(t),
                                        ),
                                    ),
                                }),
                            (0, r.jsx)("div", {
                                className: C.UD,
                                children: B(),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
