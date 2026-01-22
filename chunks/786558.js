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
            artboard: b,
            withReducedMotion: y = "halt",
            ref: O,
            artboardProperties: A,
            dataBinding: v,
            onDataBindingChange: S,
            touchScrollEnabled: I = !0,
            dynamicDataBinding: T,
            listenOnDocumentBody: C,
            eventCapture: N,
            assetLoader: R,
            onLoad: w,
        } = e,
        P = i.useContext(l.C),
        D = (0, o.R)(),
        x = null != (t = null == (n = (a = (0, c.G9)()).isWindowFocused) ? void 0 : n.call(a)) ? t : D,
        [L, j] = i.useState(void 0),
        M = i.useRef(null),
        { rive: k, RiveComponent: U } = (0, s.useRive)({
            eventTarget: null == E ? void 0 : E.current,
            buffer: f,
            autoplay: p,
            stateMachines: L,
            artboard: b,
            useOffscreenRenderer: !0,
            layout: new s.Layout({
                fit: null != h ? u.i[h] : s.Fit.Cover,
                alignment: null != m ? u.y[m] : s.Alignment.Center,
            }),
            isTouchScrollEnabled: I,
            listenOnDocumentBody: C,
            eventCapture: N,
            assetLoader: R,
            onLoad: w,
        });
    i.useImperativeHandle(
        O,
        () => ({
            play: () => (null == k ? void 0 : k.play()),
            pause: () => (null == k ? void 0 : k.pause()),
            stop: () => (null == k ? void 0 : k.stop()),
            getProperties: () => {
                var e, t;
                return null !=
                    (e =
                        null == k || null == (t = k.viewModelInstance)
                            ? void 0
                            : t.properties.reduce((e, t) => {
                                  var n, r, i, a, s;
                                  return (
                                      "viewModel" === t.type &&
                                          (null == k ||
                                              null == (s = k.viewModelInstance) ||
                                              null == (a = s.viewModel(t.name)) ||
                                              a.properties.forEach((n) => {
                                                  var r, i, a;
                                                  e[t.name + "/" + n.name] = {
                                                      type: n.type,
                                                      value:
                                                          null == k ||
                                                          null == (a = k.viewModelInstance) ||
                                                          null == (i = a[n.type]) ||
                                                          null == (r = i.call(a, "".concat(t.name, "/").concat(n.name)))
                                                              ? void 0
                                                              : r.value,
                                                  };
                                              })),
                                      (e[t.name] = {
                                          type: t.type,
                                          value:
                                              null == k ||
                                              null == (i = k.viewModelInstance) ||
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
                if (null == k) return [];
                let e = new Set(),
                    t = k.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let r = t.artboardByIndex(n);
                    e.add(r.name);
                }
                return Array.from(e);
            },
        }),
        [k],
    ),
        (0, d.J)({
            rive: k,
            artboard: b,
            artboardProperties: A,
            dataBinding: v,
            dynamicDataBinding: T,
            onDataBindingChange: S,
        }),
        i.useEffect(() => {
            if (null != k && "short-loop" === y && P.reducedMotion.enabled) {
                let e = () => {
                        k.isPlaying &&
                            (M.current = setTimeout(() => {
                                k.pause();
                            }, 5e3));
                    },
                    t = () => {
                        clearTimeout(M.current);
                    };
                return (
                    k.on(s.EventType.Play, e),
                    k.on(s.EventType.Pause, t),
                    k.on(s.EventType.Stop, t),
                    () => {
                        k.off(s.EventType.Play, e), k.off(s.EventType.Pause, t), k.off(s.EventType.Stop, t);
                    }
                );
            }
        }, [k, y, P.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            if (null != k && "layout" === h) {
                k.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != k.canvas && k.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [k, h]),
        i.useEffect(() => {
            null != k &&
                null == L &&
                (j(k.stateMachineNames),
                k.reset({
                    stateMachines: k.stateMachineNames,
                    autoplay: p,
                    artboard: b,
                    autoBind: !0,
                }),
                k.setupRiveListeners());
        }, [k, p, L, b]);
    let G = i.useRef(0);
    i.useEffect(() => {
        if (null == k) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((G.current = t.data),
                t.data > 0 &&
                    ("halt" === y && P.reducedMotion.enabled && k.isPlaying && k.pause(),
                    k.off(s.EventType.Advance, e)));
        };
        return (
            k.on(s.EventType.Advance, e),
            p && k.play(),
            () => {
                k.off(s.EventType.Advance, e);
            }
        );
    }, [k, P.reducedMotion.enabled, y, p]);
    let V = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != k)
                return (
                    !x && V.current && k.isPlaying && G.current > 0
                        ? k.pause()
                        : x && !k.isPlaying && V.current && k.play(),
                    () => {
                        null != k && x && (V.current = null != k.frameRequestId);
                    }
                );
        }, [k, x]),
        (0, r.jsx)(U, {
            className: _,
            style: g,
        })
    );
}
s.RuntimeLoader.setWasmUrl(a);
