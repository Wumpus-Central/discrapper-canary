n.d(t, {
    w: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(389544),
    s = n(647307),
    o = n(941861),
    l = n(844222),
    c = n(460890),
    u = n(605752),
    d = n(270597);

function f(e) {
    var t, n, a;
    let {
            buffer: f,
            autoplay: p = !0,
            className: _,
            fit: h,
            alignment: m,
            style: g,
            eventTargetRef: E,
            artboard: y,
            withReducedMotion: b = "halt",
            ref: O,
            artboardProperties: v,
            dataBinding: A,
            onDataBindingChange: I,
            touchScrollEnabled: S = !0,
            dynamicDataBinding: T,
            listenOnDocumentBody: C,
            eventCapture: N,
            assetLoader: w,
            onLoad: R,
            stateMachine: P,
        } = e,
        D = i.useContext(l.C),
        x = (0, o.R)(),
        L = null != (t = null == (n = (a = (0, c.G9)()).isWindowFocused) ? void 0 : n.call(a)) ? t : x,
        [j, M] = i.useState(void 0),
        k = i.useRef(null),
        { rive: U, RiveComponent: G } = (0, s.useRive)({
            eventTarget: null == E ? void 0 : E.current,
            buffer: f,
            autoplay: p,
            stateMachines: null != P ? [P] : j,
            artboard: y,
            useOffscreenRenderer: !0,
            layout: new s.Layout({
                fit: null != h ? u.i[h] : s.Fit.Cover,
                alignment: null != m ? u.y[m] : s.Alignment.Center,
            }),
            isTouchScrollEnabled: S,
            listenOnDocumentBody: C,
            eventCapture: N,
            assetLoader: w,
            onLoad: R,
        });
    i.useImperativeHandle(
        O,
        () => ({
            play: () => (null == U ? void 0 : U.play()),
            pause: () => (null == U ? void 0 : U.pause()),
            stop: () => (null == U ? void 0 : U.stop()),
            getProperties: () => {
                var e, t;
                return null !=
                    (e =
                        null == U || null == (t = U.viewModelInstance)
                            ? void 0
                            : t.properties.reduce((e, t) => {
                                  var n, r, i, a, s;
                                  return (
                                      "viewModel" === t.type &&
                                          (null == U ||
                                              null == (s = U.viewModelInstance) ||
                                              null == (a = s.viewModel(t.name)) ||
                                              a.properties.forEach((n) => {
                                                  var r, i, a;
                                                  e[t.name + "/" + n.name] = {
                                                      type: n.type,
                                                      value:
                                                          null == U ||
                                                          null == (a = U.viewModelInstance) ||
                                                          null == (i = a[n.type]) ||
                                                          null == (r = i.call(a, "".concat(t.name, "/").concat(n.name)))
                                                              ? void 0
                                                              : r.value,
                                                  };
                                              })),
                                      (e[t.name] = {
                                          type: t.type,
                                          value:
                                              null == U ||
                                              null == (i = U.viewModelInstance) ||
                                              null == (r = i[t.type]) ||
                                              null == (n = r.call(i, t.name))
                                                  ? void 0
                                                  : n.value,
                                      }),
                                      e
                                  );
                              }, {}))
                    ? e
                    : {};
            },
            getArtboards: () => {
                if (null == U) return [];
                let e = new Set(),
                    t = U.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let r = t.artboardByIndex(n);
                    e.add(r.name);
                }
                return Array.from(e);
            },
        }),
        [U],
    ),
        (0, d.J)({
            rive: U,
            artboard: y,
            artboardProperties: v,
            dataBinding: A,
            dynamicDataBinding: T,
            onDataBindingChange: I,
        }),
        i.useEffect(() => {
            if (null != U && "short-loop" === b && D.reducedMotion.enabled) {
                let e = () => {
                        U.isPlaying &&
                            (k.current = setTimeout(() => {
                                U.pause();
                            }, 5e3));
                    },
                    t = () => {
                        clearTimeout(k.current);
                    };
                return (
                    U.on(s.EventType.Play, e),
                    U.on(s.EventType.Pause, t),
                    U.on(s.EventType.Stop, t),
                    () => {
                        U.off(s.EventType.Play, e), U.off(s.EventType.Pause, t), U.off(s.EventType.Stop, t);
                    }
                );
            }
        }, [U, b, D.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            if (null != U && "layout" === h) {
                U.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != U.canvas && U.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [U, h]),
        i.useEffect(() => {
            null != U &&
                null == j &&
                null == P &&
                (M(U.stateMachineNames),
                U.reset({
                    stateMachines: U.stateMachineNames,
                    autoplay: p,
                    artboard: y,
                    autoBind: !0,
                }),
                U.setupRiveListeners());
        }, [U, p, j, y, P]);
    let V = i.useRef(0);
    i.useEffect(() => {
        if (null == U) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((V.current = t.data),
                t.data > 0 &&
                    ("halt" === b && D.reducedMotion.enabled && U.isPlaying && U.pause(),
                    U.off(s.EventType.Advance, e)));
        };
        return (
            U.on(s.EventType.Advance, e),
            p && U.play(),
            () => {
                U.off(s.EventType.Advance, e);
            }
        );
    }, [U, D.reducedMotion.enabled, b, p]);
    let F = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != U)
                return (
                    !L && F.current && U.isPlaying && V.current > 0
                        ? U.pause()
                        : L && !U.isPlaying && F.current && U.play(),
                    () => {
                        null != U && L && (F.current = null != U.frameRequestId);
                    }
                );
        }, [U, L]),
        (0, r.jsx)(G, {
            className: _,
            style: g,
        })
    );
}
s.RuntimeLoader.setWasmUrl(a);
