l.d(t, { n: () => w });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(830917),
    o = l(662518),
    u = l(990078),
    c = l(834730),
    d = l(408278),
    h = l(831453),
    m = l(725441),
    g = l(92259),
    x = l(106236),
    f = l(218429),
    j = l(59520),
    v = l(626584),
    E = l(424632),
    _ = l(726785),
    b = l(80569),
    A = l(818348),
    I = l(985018),
    N = l(482390);
let p = new v.A("ImageEditor"),
    S = { width: 288, height: 288 },
    w = i.forwardRef(function (e, t) {
        let { file: l, imageUri: a, onUpdate: v, onThrottledEdit: w } = e,
            R = i.useRef({ x: 0, y: 0 }),
            [T, k] = i.useState({ x: 0, y: 0 }),
            D = i.useRef(null),
            [L, G] = i.useState(1),
            [F, H] = i.useState(null),
            [U, J] = i.useState(!1),
            [W, Z] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [z, B] = i.useState(0),
            [P, V] = i.useState({ x: 0, y: 0 }),
            [K, Y] = i.useState(!1),
            { isGIF: $, isWebP: q, isCheckingAnimation: Q, isEditableAnimatedImage: X } = (0, _._)(l),
            ee = (0, o.q)(l.type) && !$ && !q,
            [et, el] = i.useState(null),
            en = (0, j.I)(w ?? A.tE, 500),
            ei = i.useRef(null),
            ea = i.useRef(0),
            er = i.useCallback(
                function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { x: R.current.x, y: R.current.y };
                    if (null == D.current) return;
                    let { x: t, y: l } = (0, E.F3)(e.x, e.y, W);
                    (R.current = { x: t, y: l }),
                        (D.current.style.transform = `translate3d(${t}px, ${l}px, 0) rotate(${z}deg) scaleX(${U ? "-1" : "1"})`),
                        k({ x: t, y: l });
                },
                [D, z, W, U],
            );
        i.useEffect(() => {
            null == F || Q || Z(y(F, L, X));
        }, [F, L, X, Q]);
        let es = i.useCallback(
                (e) => {
                    if (null == F) return;
                    let t = y(F, e, X);
                    G(e), Z(t), er(), en?.();
                },
                [F, er, X, en],
            ),
            eo = i.useCallback(() => {
                if (null == D.current || null == F) return;
                let e = (z + 90) % 360,
                    t = F.height,
                    l = F.width,
                    n = y({ width: t, height: l }, L, X);
                B(e), H({ width: t, height: l }), Z(n), er(), en?.();
            }, [F, z, er, L, X, en]),
            eu = i.useCallback(() => {
                null != D.current && (J((e) => !e), er(), en?.());
            }, [D, er, en]),
            ec = i.useCallback(() => {
                if (null == F) return {};
                let { height: e, width: t } = C(M(F, z), L);
                return { height: e, width: t, minHeight: e, minWidth: t };
            }, [F, z, L]),
            ed = i.useCallback(() => {
                ei.current?.moveGrabber(-0.025);
            }, []),
            eh = i.useCallback(() => {
                ei.current?.moveGrabber(0.025);
            }, []),
            em = i.useCallback((e) => {
                V({ x: e.clientX - R.current.x, y: e.clientY - R.current.y }), Y(!0);
            }, []);
        i.useEffect(() => {
            let e = () => Y(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let eg = i.useCallback(
            (e) => {
                let { x: t, y: l } = R.current;
                K &&
                    (e.clientX !== t || e.clientY !== l) &&
                    (er({ x: (t = e.clientX - P.x), y: (l = e.clientY - P.y) }), en?.());
            },
            [K, P, er, en],
        );
        i.useEffect(() => {
            if (K) return window.addEventListener("mousemove", eg), () => window.removeEventListener("mousemove", eg);
        }, [eg, K]);
        let ex = i.useRef(null),
            ef = i.useCallback(async () => {
                let e;
                if (null == D.current || null == F || Q) return;
                let t = Date.now(),
                    n = D.current,
                    i = { height: 128, width: 128 },
                    r = null;
                if ((null != ex.current && (ex.current(), (ex.current = null)), X))
                    try {
                        let t = O(
                                {
                                    file: l,
                                    image: n,
                                    cropDimensions: S,
                                    cropOriginCoordinates: R.current,
                                    maxDimensions: i,
                                    imageRotation: z,
                                    flipHorizontal: U,
                                    resizeWidth: 128,
                                    resizeHeight: 128,
                                },
                                F,
                                L,
                            ),
                            { result: a, cancelFn: r } = await (0, E.ny)(t);
                        (ex.current = r), (e = await a);
                    } catch (e) {
                        p.error("Error cropping animated image", e), (r = b.j.ANIMATED_CROPPING);
                    } finally {
                        ex.current?.(), (ex.current = null);
                    }
                else
                    e = ee
                        ? a
                        : (0, s.iL)({
                              image: n,
                              cropDimensions: S,
                              cropOriginCoordinates: R.current,
                              maxDimensions: i,
                              imageRotation: z,
                              flipHorizontal: U,
                          });
                return (
                    v({ imageData: e, imageDataTimestamp: t, error: r, loading: !1 }),
                    () => {
                        ex.current?.(), (ex.current = null);
                    }
                );
            }, [l, z, X, ee, Q, v, F, L, a, U]);
        i.useEffect(() => {
            K || ef();
        }, [ef, T, z, F, K, L, et, U]);
        let ej = i.useCallback(() => {
                if (null == D.current) return;
                let e = D.current.naturalWidth,
                    t = D.current.naturalHeight;
                H({ width: e, height: t }), B(0), J(!1);
                let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                G(l), el(l), (ea.current += 1), Z(y({ width: e, height: t }, l, X)), er({ x: 0, y: 0 });
            }, [D, X, er]),
            ev = i.useCallback(() => {
                ej();
            }, [ej]);
        return (
            i.useImperativeHandle(t, () => ({ reset: ej })),
            (0, n.jsxs)("div", {
                className: r()(N.j0, { [N.Id]: K }),
                style: { "--custom-image-editor-size": "288px" },
                children: [
                    (0, n.jsxs)("div", {
                        className: N.oW,
                        children: [
                            (0, n.jsx)("img", {
                                onLoad: ev,
                                onError: () => {
                                    v({ error: b.j.IMAGE_LOAD, loading: !1 });
                                },
                                style: {
                                    opacity: +(null != F),
                                    transform: `translate3d(${R.current.x}px, ${R.current.y}px, 0) rotate(${z}deg) scaleX(${U ? "-1" : "1"})`,
                                    ...ec(),
                                },
                                className: N.Sl,
                                src: a,
                                crossOrigin: "anonymous",
                                alt: I.intl.string(I.t.EYR1Fa),
                                ref: D,
                                onMouseDown: em,
                                draggable: !1,
                            }),
                            !ee &&
                                !Q &&
                                (0, n.jsx)("div", {
                                    className: N.Lw,
                                    style: { opacity: +(null != F), width: S.width, height: S.height },
                                    children: (0, n.jsx)(c.E, {
                                        className: N.TB,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: I.intl.string(I.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    ee
                        ? (0, n.jsx)("div", {
                              className: N.Nf,
                              children: (0, n.jsx)(c.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: I.intl.string(I.t.AjdEvM),
                              }),
                          })
                        : (0, n.jsxs)("div", {
                              className: N.KE,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: N.R5,
                                      children: [
                                          (0, n.jsx)(u.m, {
                                              text: I.intl.string(I.t.FEIIO9),
                                              "aria-label": I.intl.string(I.t.FEIIO9),
                                              children: (0, n.jsx)("div", {
                                                  className: N.Q$,
                                                  children: (0, n.jsx)(d.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: h.H,
                                                      onClick: eo,
                                                      "aria-label": I.intl.string(I.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, n.jsx)(u.m, {
                                              text: I.intl.string(I.t["4LRS2p"]),
                                              "aria-label": I.intl.string(I.t["4LRS2p"]),
                                              children: (0, n.jsx)("div", {
                                                  className: N.Q$,
                                                  children: (0, n.jsx)(d.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: m.v,
                                                      onClick: eu,
                                                      "aria-label": I.intl.string(I.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: r()(N.mu, N.R5),
                                      children: [
                                          (0, n.jsx)(u.m, {
                                              text: I.intl.string(I.t.QlArhK),
                                              "aria-label": I.intl.string(I.t.QlArhK),
                                              children: (0, n.jsx)("div", {
                                                  className: N.Q$,
                                                  children: (0, n.jsx)(d.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: g.V,
                                                      onClick: ed,
                                                      "aria-label": I.intl.string(I.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != et &&
                                              (0, n.jsx)(
                                                  x.A,
                                                  {
                                                      ref: ei,
                                                      className: N.aw,
                                                      initialValue: et,
                                                      minValue: 1,
                                                      maxValue: 4,
                                                      keyboardStep: 0.025,
                                                      asValueChanges: es,
                                                      equidistant: !0,
                                                      hideBubble: !0,
                                                      "aria-label": I.intl.string(I.t["2hPcVJ"]),
                                                  },
                                                  ea.current,
                                              ),
                                          (0, n.jsx)(u.m, {
                                              text: I.intl.string(I.t.Ch32tT),
                                              "aria-label": I.intl.string(I.t.Ch32tT),
                                              children: (0, n.jsx)("div", {
                                                  className: N.Q$,
                                                  children: (0, n.jsx)(d.K, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: f.r,
                                                      onClick: eh,
                                                      "aria-label": I.intl.string(I.t.Ch32tT),
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
    }),
    M = (e, t) => {
        let { width: l, height: n } = e;
        return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
    },
    C = (e, t) => {
        let { width: l, height: n } = e,
            i = 288 * t,
            a = l / n;
        return l > n ? (n = (l = i) / a) : (l = (n = i) * a), { width: l, height: n };
    };
function y(e, t, l) {
    let { width: n, height: i } = C(e, t),
        a = Math.abs(288 - n) / 2,
        r = Math.abs(288 - i) / 2;
    return l && (n < 288 || i < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: r, bottom: -r, left: -a, right: a };
}
let O = (e, t, l) => {
    let { height: n, width: i } = C(t, l),
        a = (n = Math.min(n, 288)) / (i = Math.min(i, 288)),
        r = { height: n, width: i },
        s = Math.floor(a < 1 ? 128 * a : 128 / a);
    return { ...e, cropDimensions: r, resizeHeight: a < 1 ? s : 128, resizeWidth: a > 1 ? s : 128 };
};
