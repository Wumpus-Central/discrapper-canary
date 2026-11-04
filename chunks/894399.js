l.d(t, { EmojiStudioModal: () => eI });
var n = l(477900),
    i = l(582128),
    r = l(935462),
    a = l(503698),
    s = l.n(a),
    u = l(855986),
    c = l(192308),
    o = l(534514),
    d = l(815021),
    m = l(265872),
    h = l(165862),
    g = l(477782),
    f = l(408278),
    j = l(454743),
    x = l(452027),
    v = l(821609),
    N = l(157559),
    b = l(554375),
    E = l(964486),
    I = l(724165),
    A = l(61310),
    S = l(626584),
    p = l(693623),
    M = l(288224),
    y = l(626523),
    O = l(71393),
    _ = l(576705),
    C = l(967198),
    w = l(129230),
    k = l(690521),
    R = l(339143),
    D = l(80569),
    T = l(858899),
    G = l(792996),
    L = l(95477);
function z(e) {
    let { name: t, onNameChange: l, label: r } = e,
        a = i.useRef(null),
        s = i.useRef(null),
        [u, c] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                ((s.current = a.current?.selectionStart),
                    l((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : k.Ay.sanitizeEmojiName(e))));
            },
            [l],
        );
    i.useEffect(() => {
        null != s.current && (a.current?.setSelectionRange(s.current, s.current), (s.current = null));
    });
    let d = i.useCallback(() => {
            c(!1);
        }, []),
        m = i.useCallback(() => {
            c(!0);
        }, []);
    return (0, n.jsx)(L.k, {
        inputRef: a,
        error: u ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: o,
        placeholder: G.intl.string(G.t.U2JFHZ),
        name: "emoji_name",
        onBlur: d,
        onFocus: m,
        label: r,
        clearable: !0,
        required: !0,
    });
}
var F = l(143945),
    Z = l(834730),
    H = l(652215);
function V(e) {
    let { error: t, variant: l, color: i } = e;
    return (0, n.jsx)(Z.E, { variant: l, color: i, children: P(t) });
}
function P(e) {
    switch (e) {
        case H.t02.TOO_MANY_EMOJI:
        case H.t02.TOO_MANY_ANIMATED_EMOJI:
            return G.intl.string(G.t.FtKH49);
        case D.j.TOO_BIG:
        case H.t02.INVALID_FILE_ASSET_SIZE:
        case H.t02.INVALID_FORM_BODY:
            return G.intl.formatToPlainString(G.t.kIO9jy, { maxSize: 256 });
        case H.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
            return G.intl.string(G.t["6WN/qk"]);
        case D.j.MISSING_IMAGE_DATA:
            return G.intl.string(G.t["41/Kbh"]);
        case D.j.MISSING_GUILD:
            return G.intl.string(G.t["8RCtpD"]);
        case D.j.ANIMATED_CROPPING:
            return G.intl.string(G.t.yoVkHN);
        case D.j.IMAGE_LOAD:
            return G.intl.format(G.t.xZLPcF, {});
        case D.j.NO_PERMISSIONS:
            return G.intl.string(G.t.QY7ZFZ);
        case 429:
            return G.intl.string(G.t["4rjikl"]);
        case D.j.UNKNOWN:
        default:
            return G.intl.string(G.t.iufib1);
    }
}
function B(e) {
    if (e?.body?.code != null) {
        let t = Number(e.body.code);
        if (!Number.isNaN(t)) return t;
    }
    if (e?.text)
        try {
            let t = JSON.parse(e.text);
            if (t?.code != null) {
                let e = Number(t.code);
                if (!Number.isNaN(e)) return e;
            }
        } catch (e) {}
    return D.j.UNKNOWN;
}
l(307731);
var K = l(691885),
    U = l(121681),
    W = l(682163),
    J = l(492494),
    Y = l(711014),
    $ = l(403362),
    Q = l(473145);
function q(e) {
    return { label: e.name, value: e.id };
}
function X(e) {
    return _.A.can(H.xBc.CREATE_GUILD_EXPRESSIONS, e);
}
function ee(e) {
    let {
            onChange: t,
            selected: l,
            onError: r,
            labelledBy: a,
            isEmojiAnimated: s,
            label: c,
            required: o,
            errorMessage: d,
        } = e,
        m = (0, u.cf)([O.A, Y.Ay], () =>
            Object.fromEntries(
                Y.Ay.getFlattenedGuildIds()
                    .map((e) => O.A.getGuild(e))
                    .filter($.Vq)
                    .map((e) => [e.id, e]),
            ),
        ),
        h = (0, u.cf)(
            [U.Ay],
            () =>
                Object.fromEntries(
                    Object.entries(m).map((e) => {
                        let [t, l] = e;
                        return [
                            t,
                            (function (e) {
                                let { guild: t, emojis: l, isEmojiAnimated: n } = e,
                                    i =
                                        l.filter((e) => e.animated === n && !e.managed && !(0, J.Eg)(e, t.id)).length ??
                                        0;
                                return (0, Q.sN)(t) - i;
                            })({ guild: l, emojis: U.Ay.getGuildEmoji(t), isEmojiAnimated: s }),
                        ];
                    }),
                ),
            [m, s],
        ),
        g = i.useMemo(() => Object.values(m).filter(X).map(q), [m]),
        f = i.useCallback(
            (e) => {
                let { value: t, label: l, disabled: i } = e;
                return {
                    id: String(t),
                    value: t,
                    label: l,
                    disabled: i,
                    leading: (function (e) {
                        if (null == e.value) return null;
                        let t = m[e.value];
                        return null == t ? null : (0, n.jsx)(W.Ay, { guild: t, size: W.Ay.Sizes.SMALLER, active: !0 });
                    })(e),
                    trailing: null == e.value ? null : G.intl.formatToPlainString(G.t.WkK72v, { count: h[e.value] }),
                };
            },
            [h, m],
        );
    return (
        i.useEffect(() => {
            g.length < 1 ? r(D.j.NO_PERMISSIONS) : null != l && (h?.[l] ?? 0) < 1 ? r(H.t02.TOO_MANY_EMOJI) : r(null);
        }, [g, t, r, l, h]),
        (0, n.jsx)(K.l, {
            label: c,
            required: o,
            selectionMode: "single",
            errorMessage: d,
            onSelectionChange: t,
            options: g,
            formatOption: f,
            value: l,
            "aria-labelledby": a,
            placeholder: g.length < 1 ? G.intl.string(G.t.jHpxwo) : G.intl.string(G.t["4mqeQO"]),
            disabled: g.length < 1,
        })
    );
}
var et = l(830917),
    el = l(866665),
    en = l(831453),
    ei = l(725441),
    er = l(92259),
    ea = l(205513),
    es = l(218429),
    eu = l(59520),
    ec = l(424632),
    eo = l(818348),
    ed = l(162555);
let em = new S.A("ImageEditor"),
    eh = { width: 288, height: 288 };
function eg(e) {
    let t,
        { ref: l, ...r } = e,
        { file: a, imageUri: u, onUpdate: c, onThrottledEdit: o } = r,
        d = i.useRef({ x: 0, y: 0 }),
        [m, h] = i.useState({ x: 0, y: 0 }),
        g = i.useRef(null),
        [j, x] = i.useState(1),
        [v, N] = i.useState(null),
        [b, E] = i.useState(!1),
        [I, A] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
        [S, p] = i.useState(0),
        [M, O] = i.useState({ x: 0, y: 0 }),
        [_, C] = i.useState(!1),
        { isGIF: w, isWebP: k, isCheckingAnimation: R, isEditableAnimatedImage: T } = (0, y._)(a),
        L = ("image/gif" === (t = a.type) || "image/webp" === t || "image/avif" === t) && !w && !k,
        [z, F] = i.useState(null),
        H = (0, eu.I)(o ?? eo.tE, 500),
        V = i.useRef(null),
        P = i.useRef(0),
        B = i.useCallback(
            function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { x: d.current.x, y: d.current.y };
                if (null == g.current) return;
                let { x: t, y: l } = (0, ec.F3)(e.x, e.y, I);
                ((d.current = { x: t, y: l }),
                    (g.current.style.transform = `translate3d(${t}px, ${l}px, 0) rotate(${S}deg) scaleX(${b ? "-1" : "1"})`),
                    h({ x: t, y: l }));
            },
            [g, S, I, b],
        );
    i.useEffect(() => {
        null == v || R || A(ej(v, j, T));
    }, [v, j, T, R]);
    let K = i.useCallback(
            (e) => {
                if (null == v) return;
                let t = ej(v, e, T);
                (x(e), A(t), B(), H?.());
            },
            [v, B, T, H],
        ),
        U = i.useCallback(() => {
            if (null == g.current || null == v) return;
            let e = (S + 90) % 360,
                t = v.height,
                l = v.width,
                n = ej({ width: t, height: l }, j, T);
            (p(e), N({ width: t, height: l }), A(n), B(), H?.());
        }, [v, S, B, j, T, H]),
        W = i.useCallback(() => {
            null != g.current && (E((e) => !e), B(), H?.());
        }, [g, B, H]),
        J = i.useCallback(() => {
            if (null == v) return {};
            let { height: e, width: t } = ef(
                (function (e, t) {
                    let { width: l, height: n } = e;
                    return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
                })(v, S),
                j,
            );
            return { height: e, width: t, minHeight: e, minWidth: t };
        }, [v, S, j]),
        Y = i.useCallback(() => {
            V.current?.moveGrabber(-0.025);
        }, []),
        $ = i.useCallback(() => {
            V.current?.moveGrabber(0.025);
        }, []),
        Q = i.useCallback((e) => {
            (O({ x: e.clientX - d.current.x, y: e.clientY - d.current.y }), C(!0));
        }, []);
    i.useEffect(() => {
        function e() {
            return C(!1);
        }
        return (window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e));
    }, []);
    let q = i.useCallback(
        (e) => {
            let { x: t, y: l } = d.current;
            _ &&
                (e.clientX !== t || e.clientY !== l) &&
                (B({ x: (t = e.clientX - M.x), y: (l = e.clientY - M.y) }), H?.());
        },
        [_, M, B, H],
    );
    i.useEffect(() => {
        if (_) return (window.addEventListener("mousemove", q), () => window.removeEventListener("mousemove", q));
    }, [q, _]);
    let X = i.useRef(null),
        ee = i.useCallback(async () => {
            let e;
            if (null == g.current || null == v || R) return;
            let t = Date.now(),
                l = g.current,
                n = Math.min(128, Math.max(v.height, v.width)),
                i = { height: n, width: n },
                r = null;
            null != X.current && (X.current(), (X.current = null));
            let { x: s, y: o } = d.current;
            if (0 === S && !b && 1 === j && 0 === s && 0 === o && v.width === v.height && a.size <= 262144) e = u;
            else if (T)
                try {
                    let t = (function (e, t, l) {
                            let { height: n, width: i } = ef(t, l),
                                r = (n = Math.min(n, 288)) / (i = Math.min(i, 288)),
                                a = { height: n, width: i },
                                s = Math.min(128, Math.max(t.height, t.width)),
                                u = Math.floor(r < 1 ? s * r : s / r);
                            return { ...e, cropDimensions: a, resizeHeight: r < 1 ? u : s, resizeWidth: r > 1 ? u : s };
                        })(
                            {
                                file: a,
                                image: l,
                                cropDimensions: eh,
                                cropOriginCoordinates: d.current,
                                maxDimensions: i,
                                imageRotation: S,
                                flipHorizontal: b,
                                resizeWidth: n,
                                resizeHeight: n,
                            },
                            v,
                            j,
                        ),
                        { result: r, cancelFn: s } = await (0, ec.ny)(t);
                    ((X.current = s), (e = await r));
                } catch (e) {
                    (em.error("Error cropping animated image", e), (r = D.j.ANIMATED_CROPPING));
                } finally {
                    (X.current?.(), (X.current = null));
                }
            else
                e = L
                    ? u
                    : (0, et.iL)({
                          image: l,
                          cropDimensions: eh,
                          cropOriginCoordinates: d.current,
                          maxDimensions: i,
                          imageRotation: S,
                          flipHorizontal: b,
                      });
            return (
                c({ imageData: e, imageDataTimestamp: t, error: r, loading: !1 }),
                () => {
                    (X.current?.(), (X.current = null));
                }
            );
        }, [a, S, T, L, R, c, v, j, u, b]);
    i.useEffect(() => {
        _ || ee();
    }, [ee, m, S, v, _, j, z, b]);
    let eg = i.useCallback(() => {
            if (null == g.current) return;
            let e = g.current.naturalWidth,
                t = g.current.naturalHeight;
            (N({ width: e, height: t }), p(0), E(!1));
            let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            (x(l), F(l), (P.current += 1), A(ej({ width: e, height: t }, l, T)), B({ x: 0, y: 0 }));
        }, [g, T, B]),
        ex = i.useCallback(() => {
            eg();
        }, [eg]);
    return (
        i.useImperativeHandle(l, () => ({ reset: eg })),
        (0, n.jsxs)("div", {
            className: s()(ed.j0, { [ed.Id]: _ }),
            style: { "--custom-image-editor-size": "288px" },
            children: [
                (0, n.jsxs)("div", {
                    className: ed.oW,
                    children: [
                        (0, n.jsx)("img", {
                            onLoad: ex,
                            onError: () => {
                                c({ error: D.j.IMAGE_LOAD, loading: !1 });
                            },
                            style: {
                                opacity: +(null != v),
                                transform: `translate3d(${d.current.x}px, ${d.current.y}px, 0) rotate(${S}deg) scaleX(${b ? "-1" : "1"})`,
                                ...J(),
                            },
                            className: ed.Sl,
                            src: u,
                            crossOrigin: "anonymous",
                            alt: G.intl.string(G.t.EYR1Fa),
                            ref: g,
                            onMouseDown: Q,
                            draggable: !1,
                        }),
                        !L &&
                            !R &&
                            (0, n.jsx)("div", {
                                className: ed.Lw,
                                style: { opacity: +(null != v), width: eh.width, height: eh.height },
                                children: (0, n.jsx)(Z.E, {
                                    className: ed.TB,
                                    variant: "body-xs/normal",
                                    color: "text-strong",
                                    children: G.intl.string(G.t.oBPhdN),
                                }),
                            }),
                    ],
                }),
                L
                    ? (0, n.jsx)("div", {
                          className: ed.Nf,
                          children: (0, n.jsx)(Z.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: G.intl.string(G.t.AjdEvM),
                          }),
                      })
                    : (0, n.jsxs)("div", {
                          className: ed.KE,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: ed.R5,
                                  children: [
                                      (0, n.jsx)(el.m, {
                                          text: G.intl.string(G.t.FEIIO9),
                                          "aria-label": G.intl.string(G.t.FEIIO9),
                                          children: (0, n.jsx)("div", {
                                              className: ed.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: en.H,
                                                  onClick: U,
                                                  "aria-label": G.intl.string(G.t.FEIIO9),
                                              }),
                                          }),
                                      }),
                                      (0, n.jsx)(el.m, {
                                          text: G.intl.string(G.t["4LRS2p"]),
                                          "aria-label": G.intl.string(G.t["4LRS2p"]),
                                          children: (0, n.jsx)("div", {
                                              className: ed.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: ei.v,
                                                  onClick: W,
                                                  "aria-label": G.intl.string(G.t["4LRS2p"]),
                                              }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, n.jsxs)("div", {
                                  className: s()(ed.mu, ed.R5),
                                  children: [
                                      (0, n.jsx)(el.m, {
                                          text: G.intl.string(G.t.QlArhK),
                                          "aria-label": G.intl.string(G.t.QlArhK),
                                          children: (0, n.jsx)("div", {
                                              className: ed.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: er.V,
                                                  onClick: Y,
                                                  "aria-label": G.intl.string(G.t.QlArhK),
                                              }),
                                          }),
                                      }),
                                      null != z &&
                                          (0, n.jsx)(
                                              ea.G,
                                              {
                                                  ref: V,
                                                  className: ed.aw,
                                                  initialValue: z,
                                                  minValue: 1,
                                                  maxValue: 4,
                                                  keyboardStep: 0.025,
                                                  asValueChanges: K,
                                                  equidistant: !0,
                                                  hideBubble: !0,
                                                  "aria-label": G.intl.string(G.t["2hPcVJ"]),
                                              },
                                              P.current,
                                          ),
                                      (0, n.jsx)(el.m, {
                                          text: G.intl.string(G.t.Ch32tT),
                                          "aria-label": G.intl.string(G.t.Ch32tT),
                                          children: (0, n.jsx)("div", {
                                              className: ed.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: es.r,
                                                  onClick: $,
                                                  "aria-label": G.intl.string(G.t.Ch32tT),
                                              }),
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
}
function ef(e, t) {
    let { width: l, height: n } = e,
        i = 288 * t,
        r = l / n;
    return (l > n ? (n = (l = i) / r) : (l = (n = i) * r), { width: l, height: n });
}
function ej(e, t, l) {
    let { width: n, height: i } = ef(e, t),
        r = Math.abs(288 - n) / 2,
        a = Math.abs(288 - i) / 2;
    return l && (n < 288 || i < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: a, bottom: -a, left: -r, right: r };
}
var ex = l(740243);
let ev = new S.A("EmojiStudio"),
    eN = (e) => {
        var t;
        let l,
            { guildId: r } = e,
            a = "userImage" in e ? e.userImage : void 0,
            S = "emoji" in e ? e.emoji : void 0,
            L = !!S,
            [Z, K] = i.useState(a ?? null),
            [U, W] = i.useState(!1),
            J = (0, u.bG)([O.A, C.A, _.A], () => {
                let e = C.A.getGuildId(),
                    t = O.A.getGuild(e);
                return _.A.can(H.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [Y, $] = i.useState(r ?? J),
            [Q, q] = i.useState(!1),
            [X, et] = i.useState(null),
            [el, en] = i.useState(null),
            [ei, er] = i.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        l = t.lastIndexOf("."),
                        n = -1 === l ? t : t.substring(0, l);
                    return k.Ay.sanitizeEmojiName(n);
                })(Z),
            ),
            [ea, es] = i.useState(null),
            eu = i.useRef(Date.now()),
            ec = i.useRef(0),
            eo = i.useRef(0),
            ed = i.useRef(!1),
            em = i.useRef(null),
            [eh, ef] = i.useState(!1),
            ej = i.useRef(null),
            eN =
                ((t = Z?.file),
                (l = i.useRef(null)),
                i.useEffect(() => {
                    if (null == t) {
                        l.current = null;
                        return;
                    }
                    l.current = I.A.fromBlob(A.f.EMOJI, t);
                }, [t]),
                l),
            { isEditableAnimatedImage: eE } = (0, y._)(Z?.file),
            eI = eE || Z?.file?.type === "image/avif";
        (i.useEffect(
            () => (
                (0, R.O)(!1),
                () => {
                    (0, R.O)(!1);
                }
            ),
            [],
        ),
            i.useEffect(() => {
                if (null == S) return;
                let e = p.A.getEmojiRawAsset(S.id);
                if (null != e) {
                    (K(e), es(e.data), er(S.name), W(!1));
                    return;
                }
                (W(!0),
                    (0, F.$)(S)
                        .then((e) => {
                            (K(e), es(e.data), er(S.name), W(!1));
                        })
                        .catch((e) => {
                            (ev.error("Failed to fetch emoji image", e), et(D.j.MISSING_IMAGE_DATA), W(!1));
                        }));
            }, [S]));
        let eA = i.useCallback(
            (e) => {
                let { reason: t } = e,
                    l = X ?? el;
                w.default.track(H.HAw.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === ec.current,
                    has_image: null != Z,
                    error: null == l ? null : String(l),
                    throttled_edit_count: eo.current,
                    session_duration_ms: Date.now() - eu.current,
                    has_guild_selected: null != Y,
                });
            },
            [X, el, eu, Z, Y],
        );
        (0, E.l0)(() => {
            ed.current || eA({ reason: "closed" });
        });
        let eS = i.useCallback(async () => {
                if ((et(null), null == Y)) return void et(D.j.MISSING_GUILD);
                if (null == Z || Z?.file == null || null == ea) return void et(D.j.MISSING_IMAGE_DATA);
                q(!0);
                let e = (await eN.current?.getOriginalMd5()) ?? null,
                    t = null;
                try {
                    ((t = await (0, b.Gf)({
                        image: ea,
                        guildId: Y,
                        name: ei,
                        originalMd5: e,
                        analyticsLocation: { page: H.liQ.EMOJI_STUDIO },
                    })),
                        M.X({ emojiId: t.id, userImage: { ...Z } }));
                } catch (e) {
                    (q(!1), et(B(e)), ev.error("Failed to upload emoji.", e));
                    return;
                }
                if (null != S)
                    try {
                        await (0, b.ak)(Y, S.id, t.id);
                    } catch (e) {
                        if (429 === e.status)
                            N.A.show({ title: G.intl.string(G.t.iufib1), body: G.intl.string(G.t.Whhv4w) });
                        else {
                            (q(!1), et(B(e)), ev.error("Failed to delete emoji.", e));
                            return;
                        }
                    }
                ((0, R.O)(!1),
                    (0, c.Oo)(D.y),
                    eA({ reason: "uploaded" }),
                    (ed.current = !0),
                    (function (e) {
                        let { emoji: t, guildId: l } = e;
                        (0, T.P0)({
                            text: G.intl.formatToPlainString(G.t.BaxFf8, {
                                emojiName: t.name,
                                emojiNameHook: (e) => e,
                                guildName: O.A.getGuild(l)?.name,
                                guildNameHook: (e) => e,
                            }),
                            icon: { type: "emoji", src: (0, k.Ez)(t), alt: t.name },
                        });
                    })({ emoji: t, guildId: Y }),
                    q(!1));
            }, [Y, Z, S, ea, eA, ei, eN]),
            ep = i.useCallback(() => {
                (et(null), null != Z && es(Z.data), (eo.current = 0), (0, R.O)(!1), em.current?.reset());
            }, [em, Z]),
            eM = i.useCallback(() => {
                (0, F.p)({ onClose: ep });
            }, [ep]),
            ey = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    i = null;
                (null != t && k.Ay.isDataTooBig(t) && (i = D.j.TOO_BIG),
                    et(n ?? i),
                    l < ec.current || (null != t && (es(t), (ec.current = l))));
            }, []),
            eO = i.useCallback(() => {
                (eo.current++, (0, R.O)(!0));
            }, []),
            e_ = L ? G.intl.string(G.t.FOYn8U) : G.intl.string(G.t.iMJO37);
        return U || null == Z
            ? (0, n.jsx)("main", {
                  className: ex.iW,
                  children: (0, n.jsxs)("div", {
                      className: ex.EN,
                      children: [
                          (0, n.jsx)("div", {
                              className: ex.uv,
                              children: (0, n.jsx)(o.D, {
                                  variant: "heading-lg/medium",
                                  color: "text-strong",
                                  className: ex.DD,
                                  children: e_,
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: ex.b,
                              children: (0, n.jsx)(d.J, { size: "md", onClick: eM }),
                          }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: s()(ex.iW, { [ex.WY]: null != Z }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: ex.EN,
                          children: [
                              (0, n.jsx)(eg, {
                                  ref: em,
                                  file: Z.file,
                                  imageUri: Z.data,
                                  onUpdate: ey,
                                  onThrottledEdit: eO,
                              }),
                              (0, n.jsx)("div", {
                                  className: ex.uv,
                                  children: (0, n.jsx)(o.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-strong",
                                      className: ex.DD,
                                      children: e_,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ex.b,
                                  children: (0, n.jsx)(d.J, { size: "md", onClick: eM }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ex.WA,
                                  children: (0, n.jsx)(m.Y, {
                                      targetElementRef: ej,
                                      "aria-label": G.intl.string(G.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, n.jsx)(h.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": G.intl.string(G.t.vznjTl),
                                              children: (0, n.jsx)(g.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: G.intl.string(G.t.ka3Yhm),
                                                  action: ep,
                                              }),
                                          });
                                      },
                                      shouldShow: eh,
                                      onRequestClose: () => ef(!1),
                                      children: () =>
                                          (0, n.jsx)(f.K, {
                                              buttonRef: ej,
                                              variant: "icon-only",
                                              icon: j.n,
                                              onClick: () => ef(!0),
                                              "aria-label": G.intl.string(G.t.u8IcM0),
                                          }),
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsxs)("aside", {
                          className: ex.HU,
                          children: [
                              (0, n.jsx)("div", {
                                  className: ex.ey,
                                  children: (0, n.jsx)(x.D, {
                                      label: G.intl.string(G.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: ex.Br,
                                                      children: [
                                                          (0, n.jsx)(eb, {
                                                              src: ea,
                                                              alt: G.intl.string(G.t["zS0K+s"]),
                                                          }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: ex.SA,
                                                      children: (0, n.jsx)(eb, {
                                                          src: ea,
                                                          alt: G.intl.string(G.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  children: (0, n.jsx)(z, {
                                      label: G.intl.string(G.t.m0YV7M),
                                      name: ei,
                                      onNameChange: er,
                                  }),
                              }),
                              L
                                  ? null
                                  : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(ee, {
                                            label: G.intl.string(G.t["9uKafS"]),
                                            required: !0,
                                            onChange: $,
                                            selected: Y,
                                            onError: (e) => en(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: eI,
                                            errorMessage: null != el ? P(el) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: ex.jt,
                                  children: [
                                      null != X &&
                                          (0, n.jsx)(V, {
                                              error: X,
                                              variant: "body-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, n.jsx)(v.$, {
                                          text: G.intl.string(G.t.Q7UP6F),
                                          onClick: eS,
                                          loading: Q,
                                          disabled: Q || null == Z || null == Y || ei.length < 2 || null != el,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    };
function eb(e) {
    let { src: t, alt: l } = e;
    return null == t || "" === t ? (0, n.jsx)("div", { className: ex.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
}
var eE = l(77634);
function eI(e) {
    let { transitionState: t, guildId: l } = e,
        i = "userImage" in e ? e.userImage : void 0,
        a = "emoji" in e ? e.emoji : void 0,
        s = { guildId: l, ...(null != a ? { emoji: a } : null != i ? { userImage: i } : {}) };
    return (0, n.jsx)(r.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        size: r.rI.DYNAMIC,
        fullscreenOnMobile: !1,
        className: eE.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: eE.jE,
            children: (0, n.jsx)(eN, { ...s }),
        }),
    });
}
