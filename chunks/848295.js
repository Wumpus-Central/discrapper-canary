n.d(t, { A: () => U }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(110259),
    o = n(877624),
    d = n(311907),
    u = n(554146),
    c = n(815021),
    A = n(777666),
    h = n(534514),
    _ = n(834730),
    E = n(935462),
    p = n(315629),
    m = n(775602),
    g = n(139286),
    I = n(871751),
    C = n(259407),
    f = n(915089),
    T = n(607470),
    S = n(367727),
    N = n(652176),
    O = n(954571),
    L = n(728458),
    y = n(774774),
    v = n(652215),
    b = n(49999),
    D = n(985018),
    R = n(695594);
let P = [],
    w = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(A.Lp, { className: l()(R.Tc, n), text: t });
    },
    M = (e) => {
        let { header: t, subHeader: n, imageSrc: r, tagText: a, wideStyle: s } = e;
        return (0, i.jsxs)("div", {
            className: l()(R.Vr, { [R.tF]: s }),
            children: [
                null != a ? (0, i.jsx)(w, { tagText: a, className: R.bX }) : null,
                (0, i.jsx)("img", { alt: "", className: l()(R._n, { [R.tF]: s }), src: r }),
                (0, i.jsxs)("div", {
                    className: l()(R.Zz, { [R.tF]: s }),
                    children: [
                        (0, i.jsx)(h.D, { variant: "heading-sm/semibold", className: R.Hf, children: t }),
                        (0, i.jsx)(_.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                    ],
                }),
            ],
        });
    };
function U(e) {
    let {
            componentId: t,
            promotionId: n,
            className: a,
            renderModalProps: A,
            heroArt: w,
            heroArtClassName: U,
            header: x,
            headerClassName: G,
            modalTopPill: k,
            subHeader: j,
            subHeaderExtra: V,
            featureCards: H,
            changeLogId: B,
            button: F,
            body: Y,
            disclaimer: K,
            disclaimerExtra: z,
        } = e,
        { onClose: W, transitionState: $ } = A,
        q = (0, f.GV)(),
        X = H.length % 2 == 0,
        Q = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        [Z, J] = r.useState(Date.now()),
        [ee, et] = r.useState(0),
        [en, ei] = r.useState(0),
        [er, ea] = r.useState(!1),
        [el, es] = r.useState(!0),
        eo = r.useRef(Z),
        ed = r.useRef(ee),
        eu = r.useRef(en),
        ec = r.useRef(er),
        eA = r.useRef(el),
        [eh, e_] = r.useState(P),
        eE = r.useRef(!1);
    function ep() {
        let e = Date.now(),
            t = e - eo.current,
            n = ed.current,
            i = eu.current;
        return ec.current && (et((n += t)), eA.current || ei((i += t))), J(e), [n, i];
    }
    return (
        (0, g.A)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: o.C.ANNOUNCEMENT_MODAL },
        }),
        r.useEffect(() => {
            let e = async () => {
                try {
                    if ("video" !== w.type || null == w.subtitles) return;
                    let e = w.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            i = new Blob([n], { type: "text/vtt" }),
                            r = URL.createObjectURL(i);
                        return { ...e, src: r };
                    });
                    e_(await Promise.all(e));
                } catch (e) {
                    L.A.captureException(e), e_(P);
                }
            };
            !0 !== eE.current && e(), (eE.current = !0);
        }, [w, eh]),
        r.useEffect(
            () => () => {
                null != eh &&
                    eh.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [eh],
        ),
        r.useEffect(() => {
            (eo.current = Z), (ed.current = ee), (eu.current = en), (ec.current = er), (eA.current = el);
        }, [Z, ee, en, er, el]),
        r.useEffect(
            () => () => {
                if ("video" === w.type || "embed" === w.type) {
                    let [e, t] = ep();
                    O.default.track(v.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: B,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        O.default.track(v.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: B,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [B, w.type],
        ),
        r.useEffect(() => {
            (0, S.Vh)(u.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
            let e = Date.now();
            return (
                O.default.track(v.HAw.CHANGE_LOG_OPENED, { change_log_id: B }),
                () => {
                    O.default.track(v.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: B,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, S.qr)(u.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: b.i.DISMISS });
                }
            );
        }, [B, n]),
        (0, i.jsx)(E.EO, {
            "data-migration-pending": !0,
            className: l()(R.zr, R.kv, a),
            transitionState: $,
            "aria-labelledby": q,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(p.h, {
                color: "nitro-pink",
                children: [
                    (0, i.jsx)("div", {
                        className: R.cG,
                        children: (0, i.jsx)(c.J, { "data-migration-pending": !0, onClick: async () => await W() }),
                    }),
                    (0, i.jsxs)(E.$m, {
                        "data-migration-pending": !0,
                        className: R.Qs,
                        children: [
                            "video" === w.type
                                ? (0, i.jsx)(T.A, {
                                      className: l()(R.Ki, U),
                                      autoPlay: !Q,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: w.src,
                                      poster: w.poster,
                                      onPlay: (e) => {
                                          O.default.track(v.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: B }),
                                              J(Date.now()),
                                              ea(!0),
                                              es(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          ep(), es(e.currentTarget.muted), ea(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          ep(), es(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          ep(), es(e.currentTarget.muted), ea(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children: eh?.map((e) => {
                                          let t = (0, D.getLanguages)().find((t) => t.code === e.locale);
                                          return null == t
                                              ? null
                                              : (0, i.jsx)(
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
                                  ? (0, i.jsx)(I.rr, {
                                        className: l()(R.Ki, U),
                                        allowFullScreen: !1,
                                        href: w.href,
                                        thumbnail: w.thumbnail,
                                        video: w.embed,
                                        provider: C.mt.YOUTUBE,
                                        maxWidth: w.embed.width,
                                        maxHeight: w.embed.height,
                                        renderVideoComponent: N.$o,
                                        renderImageComponent: N.LL,
                                        renderLinkComponent: N.bU,
                                        onPlay: () => {
                                            O.default.track(v.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: B });
                                        },
                                    })
                                  : "image" === w.type
                                    ? (0, i.jsx)("img", { alt: "", className: l()(R.Ki, U), src: w.src })
                                    : null,
                            null != k && "" !== k
                                ? (0, i.jsx)(y.e4, {
                                      text: k,
                                      colorOptions: y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: R.ON,
                                  })
                                : null,
                            (0, i.jsx)(h.D, { variant: "display-md", className: l()(R.TK, G), children: x }),
                            (0, i.jsxs)(_.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: R.uI,
                                children: [j, V?.()],
                            }),
                            null != Y &&
                                "" !== Y &&
                                (0, i.jsx)(h.D, { variant: "heading-lg/semibold", className: R.G3, children: Y }),
                            H.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: l()(R.IS, { [R.tF]: X }),
                                    children: H.map((e, t) =>
                                        (0, i.jsx)(M, { ...e, wideStyle: X }, `${e.header}_${t}`),
                                    ),
                                }),
                            null != K &&
                                "" !== K &&
                                (0, i.jsxs)(_.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: R.ed,
                                    children: [K, z?.()],
                                }),
                            (0, i.jsx)("div", { className: R.UD, children: F() }),
                        ],
                    }),
                ],
            }),
        })
    );
}
