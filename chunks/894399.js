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
    N = l(821609),
    b = l(157559),
    I = l(554375),
    v = l(964486),
    E = l(724165),
    S = l(61310),
    A = l(626584),
    p = l(693623),
    y = l(288224),
    M = l(626523),
    O = l(71393),
    _ = l(576705),
    C = l(967198),
    k = l(129230),
    w = l(690521),
    D = l(339143),
    R = l(80569),
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
            return G.intl.string(G.t.FtKH49);
        case R.j.TOO_BIG:
        case H.t02.INVALID_FILE_ASSET_SIZE:
        case H.t02.INVALID_FORM_BODY:
            return G.intl.formatToPlainString(G.t.kIO9jy, { maxSize: 256 });
        case H.t02.INVALID_FILE_ASSET_SIZE_RESIZE_ANIMATED:
            return G.intl.string(G.t["6WN/qk"]);
        case R.j.MISSING_IMAGE_DATA:
            return G.intl.string(G.t["41/Kbh"]);
        case R.j.MISSING_GUILD:
            return G.intl.string(G.t["8RCtpD"]);
        case R.j.ANIMATED_CROPPING:
            return G.intl.string(G.t.yoVkHN);
        case R.j.IMAGE_LOAD:
            return G.intl.format(G.t.xZLPcF, {});
        case R.j.NO_PERMISSIONS:
            return G.intl.string(G.t.QY7ZFZ);
        case 429:
            return G.intl.string(G.t["4rjikl"]);
        case R.j.UNKNOWN:
        default:
            return G.intl.string(G.t.iufib1);
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
    return R.j.UNKNOWN;
}
l(307731);
var Y = l(691885),
    $ = l(121681),
    B = l(682163),
    J = l(492494),
    Q = l(711014),
    V = l(403362),
    X = l(473145);
function q(e) {
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
        m = (0, u.cf)([O.A, Q.Ay], () =>
            Object.fromEntries(
                Q.Ay.getFlattenedGuildIds()
                    .map((e) => O.A.getGuild(e))
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
                                return (0, X.sN)(t) - i;
                            })({ guild: l, emojis: $.Ay.getGuildEmoji(t), isEmojiAnimated: s }),
                        ];
                    }),
                ),
            [m, s],
        ),
        h = i.useMemo(() => Object.values(m).filter(Z).map(q), [m]),
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
                    trailing: null == e.value ? null : G.intl.formatToPlainString(G.t.WkK72v, { count: g[e.value] }),
                };
            },
            [g, m],
        );
    return (
        i.useEffect(() => {
            h.length < 1 ? r(R.j.NO_PERMISSIONS) : null != l && (g?.[l] ?? 0) < 1 ? r(H.t02.TOO_MANY_EMOJI) : r(null);
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
            placeholder: h.length < 1 ? G.intl.string(G.t.jHpxwo) : G.intl.string(G.t["4mqeQO"]),
            disabled: h.length < 1,
        })
    );
}
var et = l(830917),
    el = l(866665),
    en = l(831453),
    ei = l(725441),
    er = l(92259),
    ea = l(893007),
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
        [N, b] = i.useState(null),
        [I, v] = i.useState(!1),
        [E, S] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
        [A, p] = i.useState(0),
        [y, O] = i.useState({ x: 0, y: 0 }),
        [_, C] = i.useState(!1),
        { isGIF: k, isWebP: w, isCheckingAnimation: D, isEditableAnimatedImage: T } = (0, M._)(a),
        L = ("image/gif" === (t = a.type) || "image/webp" === t || "image/avif" === t) && !k && !w,
        [z, F] = i.useState(null),
        H = (0, eu.I)(o ?? eo.tE, 500),
        K = i.useCallback(
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
        null == N || D || S(ej(N, j, T));
    }, [N, j, T, D]);
    let U = i.useCallback(
            (e) => {
                if (null == N) return;
                let t = ej(N, e, T);
                (x(e), S(t), K(), H?.());
            },
            [N, K, T, H],
        ),
        W = i.useCallback(() => {
            if (null == h.current || null == N) return;
            let e = (A + 90) % 360,
                t = N.height,
                l = N.width,
                n = ej({ width: t, height: l }, j, T);
            (p(e), b({ width: t, height: l }), S(n), K(), H?.());
        }, [N, A, K, j, T, H]),
        Y = i.useCallback(() => {
            null != h.current && (v((e) => !e), K(), H?.());
        }, [h, K, H]),
        $ = i.useCallback(() => {
            if (null == N) return {};
            let { height: e, width: t } = ef(
                (function (e, t) {
                    let { width: l, height: n } = e;
                    return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
                })(N, A),
                j,
            );
            return { height: e, width: t, minHeight: e, minWidth: t };
        }, [N, A, j]),
        B = i.useCallback(() => {
            let e = Math.max(j - 0.025, 1);
            e !== j && U(e);
        }, [j, U]),
        J = i.useCallback(() => {
            let e = Math.min(j + 0.025, 4);
            e !== j && U(e);
        }, [j, U]),
        Q = i.useCallback((e) => {
            (O({ x: e.clientX - d.current.x, y: e.clientY - d.current.y }), C(!0));
        }, []);
    i.useEffect(() => {
        function e() {
            return C(!1);
        }
        return (window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e));
    }, []);
    let V = i.useCallback(
        (e) => {
            let { x: t, y: l } = d.current;
            _ &&
                (e.clientX !== t || e.clientY !== l) &&
                (K({ x: (t = e.clientX - y.x), y: (l = e.clientY - y.y) }), H?.());
        },
        [_, y, K, H],
    );
    i.useEffect(() => {
        if (_) return (window.addEventListener("mousemove", V), () => window.removeEventListener("mousemove", V));
    }, [V, _]);
    let X = i.useRef(null),
        q = i.useCallback(async () => {
            let e;
            if (null == h.current || null == N || D) return;
            let t = Date.now(),
                l = h.current,
                n = Math.min(128, Math.max(N.height, N.width)),
                i = { height: n, width: n },
                r = null;
            null != X.current && (X.current(), (X.current = null));
            let { x: s, y: o } = d.current;
            if (0 === A && !I && 1 === j && 0 === s && 0 === o && N.width === N.height && a.size <= 262144) e = u;
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
                                cropDimensions: eg,
                                cropOriginCoordinates: d.current,
                                maxDimensions: i,
                                imageRotation: A,
                                flipHorizontal: I,
                                resizeWidth: n,
                                resizeHeight: n,
                            },
                            N,
                            j,
                        ),
                        { result: r, cancelFn: s } = await (0, ec.ny)(t);
                    ((X.current = s), (e = (await r).imageUri));
                } catch (e) {
                    (em.error("Error cropping animated image", e), (r = R.j.ANIMATED_CROPPING));
                } finally {
                    (X.current?.(), (X.current = null));
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
                    (X.current?.(), (X.current = null));
                }
            );
        }, [a, A, T, L, D, c, N, j, u, I]);
    i.useEffect(() => {
        _ || q();
    }, [q, m, A, N, _, j, z, I]);
    let Z = i.useCallback(() => {
            if (null == h.current) return;
            let e = h.current.naturalWidth,
                t = h.current.naturalHeight;
            (b({ width: e, height: t }), p(0), v(!1));
            let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            (x(l), F(l), S(ej({ width: e, height: t }, l, T)), K({ x: 0, y: 0 }));
        }, [h, T, K]),
        ee = i.useCallback(() => {
            Z();
        }, [Z]);
    return (
        i.useImperativeHandle(l, () => ({ reset: Z })),
        (0, n.jsxs)("div", {
            className: s()(ed.j0, { [ed.Id]: _ }),
            style: { "--custom-image-editor-size": "288px" },
            children: [
                (0, n.jsxs)("div", {
                    className: ed.oW,
                    children: [
                        (0, n.jsx)("img", {
                            onLoad: ee,
                            onError: () => {
                                c({ error: R.j.IMAGE_LOAD, loading: !1 });
                            },
                            style: {
                                opacity: +(null != N),
                                transform: `translate3d(${d.current.x}px, ${d.current.y}px, 0) rotate(${A}deg) scaleX(${I ? "-1" : "1"})`,
                                ...$(),
                            },
                            className: ed.Sl,
                            src: u,
                            crossOrigin: "anonymous",
                            alt: G.intl.string(G.t.EYR1Fa),
                            ref: h,
                            onMouseDown: Q,
                            draggable: !1,
                        }),
                        !L &&
                            !D &&
                            (0, n.jsx)("div", {
                                className: ed.Lw,
                                style: { opacity: +(null != N), width: eg.width, height: eg.height },
                                children: (0, n.jsx)(P.E, {
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
                          children: (0, n.jsx)(P.E, {
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
                                                  icon: en.RotateIcon,
                                                  onClick: W,
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
                                                  icon: ei.FlipHorizontalIcon,
                                                  onClick: Y,
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
                                                  icon: er.MagnifyingGlassMinusIcon,
                                                  onClick: B,
                                                  "aria-label": G.intl.string(G.t.QlArhK),
                                              }),
                                          }),
                                      }),
                                      null != z &&
                                          (0, n.jsx)("div", {
                                              className: ed.aw,
                                              children: (0, n.jsx)(ea.A, {
                                                  value: j,
                                                  minValue: 1,
                                                  maxValue: 4,
                                                  step: 0.025,
                                                  onChange: U,
                                                  hideTooltip: !0,
                                                  "aria-label": G.intl.string(G.t["2hPcVJ"]),
                                                  formatValue: (e) =>
                                                      G.intl.formatToPlainString(G.t.GHwBy5, {
                                                          percent: Math.round(100 * e),
                                                      }),
                                              }),
                                          }),
                                      (0, n.jsx)(el.m, {
                                          text: G.intl.string(G.t.Ch32tT),
                                          "aria-label": G.intl.string(G.t.Ch32tT),
                                          children: (0, n.jsx)("div", {
                                              className: ed.Q$,
                                              children: (0, n.jsx)(f.K, {
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  icon: es.MagnifyingGlassPlusIcon,
                                                  onClick: J,
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
let eN = new A.A("EmojiStudio"),
    eb = (e) => {
        var t;
        let l,
            { guildId: r } = e,
            a = "userImage" in e ? e.userImage : void 0,
            A = "emoji" in e ? e.emoji : void 0,
            L = !!A,
            [P, Y] = i.useState(a ?? null),
            [$, B] = i.useState(!1),
            J = (0, u.bG)([O.A, C.A, _.A], () => {
                let e = C.A.getGuildId(),
                    t = O.A.getGuild(e);
                return _.A.can(H.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [Q, V] = i.useState(r ?? J),
            [X, q] = i.useState(!1),
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
            eb =
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
            { isEditableAnimatedImage: ev } = (0, M._)(P?.file),
            eE = ev || P?.file?.type === "image/avif";
        (i.useEffect(
            () => (
                (0, D.O)(!1),
                () => {
                    (0, D.O)(!1);
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
                            (eN.error("Failed to fetch emoji image", e), et(R.j.MISSING_IMAGE_DATA), B(!1));
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
                if ((et(null), null == Q)) return void et(R.j.MISSING_GUILD);
                if (null == P || P?.file == null || null == ea) return void et(R.j.MISSING_IMAGE_DATA);
                q(!0);
                let e = (await eb.current?.getOriginalMd5()) ?? null,
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
                    (q(!1), et(W(e)), eN.error("Failed to upload emoji.", e));
                    return;
                }
                if (null != A)
                    try {
                        await (0, I.ak)(Q, A.id, t.id);
                    } catch (e) {
                        if (429 === e.status)
                            b.A.show({ title: G.intl.string(G.t.iufib1), body: G.intl.string(G.t.Whhv4w) });
                        else {
                            (q(!1), et(W(e)), eN.error("Failed to delete emoji.", e));
                            return;
                        }
                    }
                ((0, D.O)(!1),
                    (0, c.Oo)(R.y),
                    eS({ reason: "uploaded" }),
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
                            icon: { type: "emoji", src: (0, w.Ez)(t), alt: t.name },
                        });
                    })({ emoji: t, guildId: Q }),
                    q(!1));
            }, [Q, P, A, ea, eS, ei, eb]),
            ep = i.useCallback(() => {
                (et(null), null != P && es(P.data), (eo.current = 0), (0, D.O)(!1), em.current?.reset());
            }, [em, P]),
            ey = i.useCallback(() => {
                (0, F.p)({ onClose: ep });
            }, [ep]),
            eM = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: l = 0, error: n } = e,
                    i = null;
                (null != t && w.Ay.isDataTooBig(t) && (i = R.j.TOO_BIG),
                    et(n ?? i),
                    l < ec.current || (null != t && (es(t), (ec.current = l))));
            }, []),
            eO = i.useCallback(() => {
                (eo.current++, (0, D.O)(!0));
            }, []),
            e_ = L ? G.intl.string(G.t.FOYn8U) : G.intl.string(G.t.iMJO37);
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
                                  onUpdate: eM,
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
                                  children: (0, n.jsx)(d.J, { size: "md", onClick: ey }),
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
                                          return (0, n.jsx)(g.W, {
                                              "data-menu-migrated-auto": !0,
                                              navId: "emoji-studio-context-menu",
                                              onClose: t,
                                              onSelect: t,
                                              "aria-label": G.intl.string(G.t.vznjTl),
                                              children: (0, n.jsx)(h.Dr, {
                                                  id: "emoji-studio-reset",
                                                  color: "danger",
                                                  label: G.intl.string(G.t.ka3Yhm),
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
                                                          (0, n.jsx)(eI, {
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
                                                      children: (0, n.jsx)(eI, {
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
                                      (0, n.jsx)(N.$, {
                                          text: G.intl.string(G.t.Q7UP6F),
                                          onClick: eA,
                                          loading: X,
                                          disabled: X || null == P || null == Q || ei.length < 2 || null != el,
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
            children: (0, n.jsx)(eb, { ...s }),
        }),
    });
}
