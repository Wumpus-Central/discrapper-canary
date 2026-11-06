l.d(t, { EmojiStudioModal: () => eE });
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
    g = l(165862),
    h = l(477782),
    f = l(408278),
    j = l(454743),
    x = l(452027),
    b = l(821609),
    N = l(157559),
    I = l(554375),
    v = l(964486),
    E = l(724165),
    S = l(61310),
    A = l(626584),
    p = l(693623),
    y = l(288224),
    O = l(626523),
    M = l(71393),
    _ = l(576705),
    C = l(967198),
    k = l(129230),
    w = l(690521),
    R = l(339143),
    D = l(80569),
    G = l(858899),
    T = l(792996),
    L = l(95477);
function z(e) {
    let { name: t, onNameChange: l, label: r } = e,
        a = i.useRef(null),
        s = i.useRef(null),
        [u, c] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                ((s.current = a.current?.selectionStart),
                    l((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : w.Ay.sanitizeEmojiName(e))));
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
        placeholder: T.intl.string(T.t.U2JFHZ),
        name: "emoji_name",
        onBlur: d,
        onFocus: m,
        label: r,
        clearable: !0,
        required: !0,
    });
}
var F = l(143945),
    P = l(834730),
    H = l(652215);
function K(e) {
    let { error: t, variant: l, color: i } = e;
    return (0, n.jsx)(P.E, { variant: l, color: i, children: U(t) });
}
function U(e) {
    switch (e) {
        case H.t02.TOO_MANY_EMOJI:
        case H.t02.TOO_MANY_ANIMATED_EMOJI:
            return T.intl.string(T.t.FtKH49);
        case D.j.TOO_BIG:
        case H.t02.INVALID_FILE_ASSET_SIZE:
        case H.t02.INVALID_FORM_BODY:
            return T.intl.formatToPlainString(T.t.kIO9jy, { maxSize: 256 });
        case H.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
            return T.intl.string(T.t["6WN/qk"]);
        case D.j.MISSING_IMAGE_DATA:
            return T.intl.string(T.t["41/Kbh"]);
        case D.j.MISSING_GUILD:
            return T.intl.string(T.t["8RCtpD"]);
        case D.j.ANIMATED_CROPPING:
            return T.intl.string(T.t.yoVkHN);
        case D.j.IMAGE_LOAD:
            return T.intl.format(T.t.xZLPcF, {});
        case D.j.NO_PERMISSIONS:
            return T.intl.string(T.t.QY7ZFZ);
        case 429:
            return T.intl.string(T.t["4rjikl"]);
        case D.j.UNKNOWN:
        default:
            return T.intl.string(T.t.iufib1);
    }
}
function W(e) {
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
var Y = l(691885),
    $ = l(121681),
    B = l(682163),
    J = l(492494),
    Q = l(711014),
    V = l(403362),
    q = l(473145);
function X(e) {
    return { label: e.name, value: e.id };
}
function Z(e) {
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
        m = (0, u.cf)([M.A, Q.Ay], () =>
            Object.fromEntries(
                Q.Ay.getFlattenedGuildIds()
                    .map((e) => M.A.getGuild(e))
                    .filter(V.Vq)
                    .map((e) => [e.id, e]),
            ),
        ),
        g = (0, u.cf)(
            [$.Ay],
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
                                return (0, q.sN)(t) - i;
                            })({ guild: l, emojis: $.Ay.getGuildEmoji(t), isEmojiAnimated: s }),
                        ];
                    }),
                ),
            [m, s],
        ),
        h = i.useMemo(() => Object.values(m).filter(Z).map(X), [m]),
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
                        return null == t ? null : (0, n.jsx)(B.Ay, { guild: t, size: B.Ay.Sizes.SMALLER, active: !0 });
                    })(e),
                    trailing: null == e.value ? null : T.intl.formatToPlainString(T.t.WkK72v, { count: g[e.value] }),
                };
            },
            [g, m],
        );
    return (
        i.useEffect(() => {
            h.length < 1 ? r(D.j.NO_PERMISSIONS) : null != l && (g?.[l] ?? 0) < 1 ? r(H.t02.TOO_MANY_EMOJI) : r(null);
        }, [h, t, r, l, g]),
        (0, n.jsx)(Y.l, {
            label: c,
            required: o,
            selectionMode: "single",
            errorMessage: d,
            onSelectionChange: t,
            options: h,
            formatOption: f,
            value: l,
            "aria-labelledby": a,
            placeholder: h.length < 1 ? T.intl.string(T.t.jHpxwo) : T.intl.string(T.t["4mqeQO"]),
            disabled: h.length < 1,
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
let em = new A.A("ImageEditor"),
    eg = { width: 288, height: 288 };
function eh(e) {
    let t,
        { ref: l, ...r } = e,
        { file: a, imageUri: u, onUpdate: c, onThrottledEdit: o } = r,
        d = i.useRef({ x: 0, y: 0 }),
        [m, g] = i.useState({ x: 0, y: 0 }),
        h = i.useRef(null),
        [j, x] = i.useState(1),
        [b, N] = i.useState(null),
        [I, v] = i.useState(!1),
        [E, S] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
        [A, p] = i.useState(0),
        [y, M] = i.useState({ x: 0, y: 0 }),
        [_, C] = i.useState(!1),
        { isGIF: k, isWebP: w, isCheckingAnimation: R, isEditableAnimatedImage: G } = (0, O._)(a),
        L = ("image/gif" === (t = a.type) || "image/webp" === t || "image/avif" === t) && !k && !w,
        [z, F] = i.useState(null),
        H = (0, eu.I)(o ?? eo.tE, 500),
        K = i.useRef(null),
        U = i.useRef(0),
        W = i.useCallback(
            function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { x: d.current.x, y: d.current.y };
                if (null == h.current) return;
                let { x: t, y: l } = (0, ec.F3)(e.x, e.y, E);
                ((d.current = { x: t, y: l }),
                    (h.current.style.transform = `translate3d(${t}px, ${l}px, 0) rotate(${A}deg) scaleX(${I ? "-1" : "1"})`),
                    g({ x: t, y: l }));
            },
            [h, A, E, I],
        );
    i.useEffect(() => {
        null == b || R || S(ej(b, j, G));
    }, [b, j, G, R]);
    let Y = i.useCallback(
            (e) => {
                if (null == b) return;
                let t = ej(b, e, G);
                (x(e), S(t), W(), H?.());
            },
            [b, W, G, H],
        ),
        $ = i.useCallback(() => {
            if (null == h.current || null == b) return;
            let e = (A + 90) % 360,
                t = b.height,
                l = b.width,
                n = ej({ width: t, height: l }, j, G);
            (p(e), N({ width: t, height: l }), S(n), W(), H?.());
        }, [b, A, W, j, G, H]),
        B = i.useCallback(() => {
            null != h.current && (v((e) => !e), W(), H?.());
        }, [h, W, H]),
        J = i.useCallback(() => {
            if (null == b) return {};
            let { height: e, width: t } = ef(
                (function (e, t) {
                    let { width: l, height: n } = e;
                    return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
                })(b, A),
                j,
            );
            return { height: e, width: t, minHeight: e, minWidth: t };
        }, [b, A, j]),
        Q = i.useCallback(() => {
            K.current?.moveGrabber(-0.025);
        }, []),
        V = i.useCallback(() => {
            K.current?.moveGrabber(0.025);
        }, []),
        q = i.useCallback((e) => {
            (M({ x: e.clientX - d.current.x, y: e.clientY - d.current.y }), C(!0));
        }, []);
    i.useEffect(() => {
        function e() {
            return C(!1);
        }
        return (window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e));
    }, []);
    let X = i.useCallback(
        (e) => {
            let { x: t, y: l } = d.current;
            _ &&
                (e.clientX !== t || e.clientY !== l) &&
                (W({ x: (t = e.clientX - y.x), y: (l = e.clientY - y.y) }), H?.());
        },
        [_, y, W, H],
    );
    i.useEffect(() => {
        if (_) return (window.addEventListener("mousemove", X), () => window.removeEventListener("mousemove", X));
    }, [X, _]);
    let Z = i.useRef(null),
        ee = i.useCallback(async () => {
            let e;
            if (null == h.current || null == b || R) return;
            let t = Date.now(),
                l = h.current,
                n = Math.min(128, Math.max(b.height, b.width)),
                i = { height: n, width: n },
                r = null;
            null != Z.current && (Z.current(), (Z.current = null));
            let { x: s, y: o } = d.current;
            if (0 === A && !I && 1 === j && 0 === s && 0 === o && b.width === b.height && a.size <= 262144) e = u;
            else if (G)
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
                                cropDimensions: eg,
                                cropOriginCoordinates: d.current,
                                maxDimensions: i,
                                imageRotation: A,
                                flipHorizontal: I,
                                resizeWidth: n,
                                resizeHeight: n,
                            },
                            b,
                            j,
                        ),
                        { result: r, cancelFn: s } = await (0, ec.ny)(t);
                    ((Z.current = s), (e = (await r).imageUri));
                } catch (e) {
                    (em.error("Error cropping animated image", e), (r = D.j.ANIMATED_CROPPING));
                } finally {
                    (Z.current?.(), (Z.current = null));
                }
            else
                e = L
                    ? u
                    : (0, et.iL)({
                          image: l,
                          cropDimensions: eg,
                          cropOriginCoordinates: d.current,
                          maxDimensions: i,
                          imageRotation: A,
                          flipHorizontal: I,
                      });
            return (
                c({ imageData: e, imageDataTimestamp: t, error: r, loading: !1 }),
                () => {
                    (Z.current?.(), (Z.current = null));
                }
            );
        }, [a, A, G, L, R, c, b, j, u, I]);
    i.useEffect(() => {
        _ || ee();
    }, [ee, m, A, b, _, j, z, I]);
    let eh = i.useCallback(() => {
            if (null == h.current) return;
            let e = h.current.naturalWidth,
                t = h.current.naturalHeight;
            (N({ width: e, height: t }), p(0), v(!1));
            let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            (x(l), F(l), (U.current += 1), S(ej({ width: e, height: t }, l, G)), W({ x: 0, y: 0 }));
        }, [h, G, W]),
        ex = i.useCallback(() => {
            eh();
        }, [eh]);
    return (
        i.useImperativeHandle(l, () => ({ reset: eh })),
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
                                opacity: +(null != b),
                                transform: `translate3d(${d.current.x}px, ${d.current.y}px, 0) rotate(${A}deg) scaleX(${I ? "-1" : "1"})`,
                                ...J(),
                            },
                            className: ed.Sl,
                            src: u,
                            crossOrigin: "anonymous",
                            alt: T.intl.string(T.t.EYR1Fa),
                            ref: h,
                            onMouseDown: q,
                            draggable: !1,
                        }),
                        !L &&
                            !R &&
                            (0, n.jsx)("div", {
                                className: ed.Lw,
                                style: { opacity: +(null != b), width: eg.width, height: eg.height },
                                children: (0, n.jsx)(P.E, {
                                    className: ed.TB,
                                    variant: "body-xs/normal",
                                    color: "text-strong",
                                    children: T.intl.string(T.t.oBPhdN),
                                }),
                            }),
                    ],
                }),
                L
                    ? (0, n.jsx)("div", {
                          className: ed.Nf,
                          children: (0, n.jsx)(P.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(T.t.AjdEvM),
                          }),
                      })
                    : (0, n.jsxs)("div", {
                          className: ed.KE,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: ed.R5,
                                  children: [
                                      (0, n.jsx)(el.m, {
                                          text: T.intl.string(T.t.FEIIO9),
                                          "aria-label": T.intl.string(T.t.FEIIO9),
                                          children: (0, n.jsx)("div", {
                                              className: ed.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: en.RotateIcon,
                                                  onClick: $,
                                                  "aria-label": T.intl.string(T.t.FEIIO9),
                                              }),
                                          }),
                                      }),
                                      (0, n.jsx)(el.m, {
                                          text: T.intl.string(T.t["4LRS2p"]),
                                          "aria-label": T.intl.string(T.t["4LRS2p"]),
                                          children: (0, n.jsx)("div", {
                                              className: ed.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: ei.FlipHorizontalIcon,
                                                  onClick: B,
                                                  "aria-label": T.intl.string(T.t["4LRS2p"]),
                                              }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, n.jsxs)("div", {
                                  className: s()(ed.mu, ed.R5),
                                  children: [
                                      (0, n.jsx)(el.m, {
                                          text: T.intl.string(T.t.QlArhK),
                                          "aria-label": T.intl.string(T.t.QlArhK),
                                          children: (0, n.jsx)("div", {
                                              className: ed.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: er.MagnifyingGlassMinusIcon,
                                                  onClick: Q,
                                                  "aria-label": T.intl.string(T.t.QlArhK),
                                              }),
                                          }),
                                      }),
                                      null != z &&
                                          (0, n.jsx)(
                                              ea.G,
                                              {
                                                  ref: K,
                                                  className: ed.aw,
                                                  initialValue: z,
                                                  minValue: 1,
                                                  maxValue: 4,
                                                  keyboardStep: 0.025,
                                                  asValueChanges: Y,
                                                  equidistant: !0,
                                                  hideBubble: !0,
                                                  "aria-label": T.intl.string(T.t["2hPcVJ"]),
                                              },
                                              U.current,
                                          ),
                                      (0, n.jsx)(el.m, {
                                          text: T.intl.string(T.t.Ch32tT),
                                          "aria-label": T.intl.string(T.t.Ch32tT),
                                          children: (0, n.jsx)("div", {
                                              className: ed.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: es.MagnifyingGlassPlusIcon,
                                                  onClick: V,
                                                  "aria-label": T.intl.string(T.t.Ch32tT),
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
let eb = new A.A("EmojiStudio"),
    eN = (e) => {
        var t;
        let l,
            { guildId: r } = e,
            a = "userImage" in e ? e.userImage : void 0,
            A = "emoji" in e ? e.emoji : void 0,
            L = !!A,
            [P, Y] = i.useState(a ?? null),
            [$, B] = i.useState(!1),
            J = (0, u.bG)([M.A, C.A, _.A], () => {
                let e = C.A.getGuildId(),
                    t = M.A.getGuild(e);
                return _.A.can(H.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [Q, V] = i.useState(r ?? J),
            [q, X] = i.useState(!1),
            [Z, et] = i.useState(null),
            [el, en] = i.useState(null),
            [ei, er] = i.useState(
                (function (e) {
                    if (null == e) return "";
                    let t = e?.file?.name ?? "",
                        l = t.lastIndexOf("."),
                        n = -1 === l ? t : t.substring(0, l);
                    return w.Ay.sanitizeEmojiName(n);
                })(P),
            ),
            [ea, es] = i.useState(null),
            eu = i.useRef(Date.now()),
            ec = i.useRef(0),
            eo = i.useRef(0),
            ed = i.useRef(!1),
            em = i.useRef(null),
            [eg, ef] = i.useState(!1),
            ej = i.useRef(null),
            eN =
                ((t = P?.file),
                (l = i.useRef(null)),
                i.useEffect(() => {
                    if (null == t) {
                        l.current = null;
                        return;
                    }
                    l.current = E.A.fromBlob(S.f.EMOJI, t);
                }, [t]),
                l),
            { isEditableAnimatedImage: ev } = (0, O._)(P?.file),
            eE = ev || P?.file?.type === "image/avif";
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
                if (null == A) return;
                let e = p.A.getEmojiRawAsset(A.id);
                if (null != e) {
                    (Y(e), es(e.data), er(A.name), B(!1));
                    return;
                }
                (B(!0),
                    (0, F.$)(A)
                        .then((e) => {
                            (Y(e), es(e.data), er(A.name), B(!1));
                        })
                        .catch((e) => {
                            (eb.error("Failed to fetch emoji image", e), et(D.j.MISSING_IMAGE_DATA), B(!1));
                        }));
            }, [A]));
        let eS = i.useCallback(
            (e) => {
                let { reason: t } = e,
                    l = Z ?? el;
                k.default.track(H.HAw.EMOJI_STUDIO_ENDED, {
                    reason: t,
                    is_initial: 0 === ec.current,
                    has_image: null != P,
                    error: null == l ? null : String(l),
                    throttled_edit_count: eo.current,
                    session_duration_ms: Date.now() - eu.current,
                    has_guild_selected: null != Q,
                });
            },
            [Z, el, eu, P, Q],
        );
        (0, v.l0)(() => {
            ed.current || eS({ reason: "closed" });
        });
        let eA = i.useCallback(async () => {
                if ((et(null), null == Q)) return void et(D.j.MISSING_GUILD);
                if (null == P || P?.file == null || null == ea) return void et(D.j.MISSING_IMAGE_DATA);
                X(!0);
                let e = (await eN.current?.getOriginalMd5()) ?? null,
                    t = null;
                try {
                    ((t = await (0, I.Gf)({
                        image: ea,
                        guildId: Q,
                        name: ei,
                        originalMd5: e,
                        analyticsLocation: { page: H.liQ.EMOJI_STUDIO },
                    })),
                        y.X({ emojiId: t.id, userImage: { ...P } }));
                } catch (e) {
                    (X(!1), et(W(e)), eb.error("Failed to upload emoji.", e));
                    return;
                }
                if (null != A)
                    try {
                        await (0, I.ak)(Q, A.id, t.id);
                    } catch (e) {
                        if (429 === e.status)
                            N.A.show({ title: T.intl.string(T.t.iufib1), body: T.intl.string(T.t.Whhv4w) });
                        else {
                            (X(!1), et(W(e)), eb.error("Failed to delete emoji.", e));
                            return;
                        }
                    }
                ((0, R.O)(!1),
                    (0, c.Oo)(D.y),
                    eS({ reason: "uploaded" }),
                    (ed.current = !0),
                    (function (e) {
                        let { emoji: t, guildId: l } = e;
                        (0, G.P0)({
                            text: T.intl.formatToPlainString(T.t.BaxFf8, {
                                emojiName: t.name,
                                emojiNameHook: (e) => e,
                                guildName: M.A.getGuild(l)?.name,
                                guildNameHook: (e) => e,
                            }),
                            icon: { type: "emoji", src: (0, w.Ez)(t), alt: t.name },
                        });
                    })({ emoji: t, guildId: Q }),
                    X(!1));
            }, [Q, P, A, ea, eS, ei, eN]),
            ep = i.useCallback(() => {
                (et(null), null != P && es(P.data), (eo.current = 0), (0, R.O)(!1), em.current?.reset());
            }, [em, P]),
            ey = i.useCallback(() => {
                (0, F.p)({ onClose: ep });
            }, [ep]),
            eO = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    i = null;
                (null != t && w.Ay.isDataTooBig(t) && (i = D.j.TOO_BIG),
                    et(n ?? i),
                    l < ec.current || (null != t && (es(t), (ec.current = l))));
            }, []),
            eM = i.useCallback(() => {
                (eo.current++, (0, R.O)(!0));
            }, []),
            e_ = L ? T.intl.string(T.t.FOYn8U) : T.intl.string(T.t.iMJO37);
        return $ || null == P
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
                              children: (0, n.jsx)(d.J, { size: "md", onClick: ey }),
                          }),
                      ],
                  }),
              })
            : (0, n.jsxs)("main", {
                  className: s()(ex.iW, { [ex.WY]: null != P }),
                  children: [
                      (0, n.jsxs)("div", {
                          className: ex.EN,
                          children: [
                              (0, n.jsx)(eh, {
                                  ref: em,
                                  file: P.file,
                                  imageUri: P.data,
                                  onUpdate: eO,
                                  onThrottledEdit: eM,
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
                                  children: (0, n.jsx)(d.J, { size: "md", onClick: ey }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ex.WA,
                                  children: (0, n.jsx)(m.Y, {
                                      targetElementRef: ej,
                                      "aria-label": T.intl.string(T.t.vznjTl),
                                      position: "bottom",
                                      align: "right",
                                      renderPopout: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, n.jsx)(g.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": T.intl.string(T.t.vznjTl),
                                              children: (0, n.jsx)(h.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: T.intl.string(T.t.ka3Yhm),
                                                  action: ep,
                                              }),
                                          });
                                      },
                                      shouldShow: eg,
                                      onRequestClose: () => ef(!1),
                                      children: () =>
                                          (0, n.jsx)(f.K, {
                                              buttonRef: ej,
                                              variant: "icon-only",
                                              icon: j.UnsendIcon,
                                              onClick: () => ef(!0),
                                              "aria-label": T.intl.string(T.t.u8IcM0),
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
                                      label: T.intl.string(T.t.JmuIb5),
                                      children: (0, n.jsxs)("ul", {
                                          children: [
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsxs)("div", {
                                                      className: ex.Br,
                                                      children: [
                                                          (0, n.jsx)(eI, {
                                                              src: ea,
                                                              alt: T.intl.string(T.t["zS0K+s"]),
                                                          }),
                                                          (0, n.jsx)("span", { children: "6" }),
                                                      ],
                                                  }),
                                              }),
                                              (0, n.jsx)("li", {
                                                  children: (0, n.jsx)("div", {
                                                      className: ex.SA,
                                                      children: (0, n.jsx)(eI, {
                                                          src: ea,
                                                          alt: T.intl.string(T.t["tE41+d"]),
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  children: (0, n.jsx)(z, {
                                      label: T.intl.string(T.t.m0YV7M),
                                      name: ei,
                                      onNameChange: er,
                                  }),
                              }),
                              L
                                  ? null
                                  : (0, n.jsx)("div", {
                                        children: (0, n.jsx)(ee, {
                                            label: T.intl.string(T.t["9uKafS"]),
                                            required: !0,
                                            onChange: V,
                                            selected: Q,
                                            onError: (e) => en(e),
                                            labelledBy: "guild-selector-label",
                                            isEmojiAnimated: eE,
                                            errorMessage: null != el ? U(el) : void 0,
                                        }),
                                    }),
                              (0, n.jsxs)("div", {
                                  className: ex.jt,
                                  children: [
                                      null != Z &&
                                          (0, n.jsx)(K, {
                                              error: Z,
                                              variant: "body-sm/normal",
                                              color: "text-feedback-critical",
                                          }),
                                      (0, n.jsx)(b.$, {
                                          text: T.intl.string(T.t.Q7UP6F),
                                          onClick: eA,
                                          loading: q,
                                          disabled: q || null == P || null == Q || ei.length < 2 || null != el,
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    };
function eI(e) {
    let { src: t, alt: l } = e;
    return null == t || "" === t ? (0, n.jsx)("div", { className: ex.A3 }) : (0, n.jsx)("img", { src: t, alt: l });
}
var ev = l(77634);
function eE(e) {
    let { transitionState: t, guildId: l } = e,
        i = "userImage" in e ? e.userImage : void 0,
        a = "emoji" in e ? e.emoji : void 0,
        s = { guildId: l, ...(null != a ? { emoji: a } : null != i ? { userImage: i } : {}) };
    return (0, n.jsx)(r.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        size: r.rI.DYNAMIC,
        fullscreenOnMobile: !1,
        className: ev.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(r.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: ev.jE,
            children: (0, n.jsx)(eN, { ...s }),
        }),
    });
}
