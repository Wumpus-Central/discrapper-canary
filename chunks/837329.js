t.d(n, { u: () => s }), t(415506), t(539854);
var r = t(473749),
    i = t(442837),
    l = t(905551),
    a = t(802659),
    o = t(817121);
function s(e) {
    let n = (0, i.e7)([a.Z], () => a.Z.getRegionStateForPingUrl(e)),
        t = r.useRef(null),
        s = r.useCallback(
            async (n) => {
                if ("" === e) return;
                let r = [],
                    i = !1;
                try {
                    if (
                        (await new Promise((e, t) => {
                            let l = () => {
                                    n.readyState === WebSocket.OPEN && n.close();
                                },
                                a = setTimeout(() => {
                                    i || ((i = !0), l(), t(Error("WebSocket timeout")));
                                }, 5000);
                            (n.onopen = () => {
                                if (n.readyState === WebSocket.OPEN)
                                    for (let e = 0; e < 3; e++) {
                                        let e = performance.now();
                                        n.send(e.toString());
                                    }
                            }),
                                (n.onmessage = (n) => {
                                    if (i) return;
                                    let t = parseFloat(n.data);
                                    if (!isNaN(t)) {
                                        let n = performance.now(),
                                            o = Math.round(n - t);
                                        r.push(o), !i && r.length >= 3 && ((i = !0), clearTimeout(a), l(), e());
                                    }
                                }),
                                (n.onerror = () => {
                                    i || ((i = !0), clearTimeout(a), l(), t(Error("WebSocket error")));
                                }),
                                (n.onclose = () => {
                                    i || ((i = !0), clearTimeout(a), t(Error("WebSocket closed")));
                                });
                        }),
                        r.length > 0)
                    ) {
                        let n = Math.round(r.reduce((e, n) => e + n, 0) / r.length);
                        (0, l.hz)(e, {
                            rtt: n,
                            loading: !1,
                            error: !1,
                        });
                    } else throw Error("No successful pings");
                } catch (n) {
                    (0, l.hz)(e, {
                        rtt: null,
                        loading: !1,
                        error: !0,
                    });
                } finally {
                    t.current === n && (t.current = null);
                }
            },
            [e, t],
        );
    r.useEffect(
        () => () => {
            null != t.current && (t.current.close(), (t.current = null));
        },
        [],
    );
    let d = null != n;
    return (
        r.useEffect(() => {
            if ("" === e || d) return;
            let n = a.Z.getRegionStateForPingUrl(e);
            if ((null == n ? void 0 : n.rtt) != null || (null == n ? void 0 : n.loading) === !0) return;
            (0, l.hz)(e, {
                rtt: null,
                loading: !0,
                error: !1,
            });
            let r = new WebSocket("wss://".concat(e));
            (t.current = r), s(r);
        }, [e, s, d]),
        {
            pingText: r.useMemo(
                () =>
                    null == n || n.loading
                        ? "\u2014"
                        : n.error
                          ? "Error"
                          : null !== n.rtt
                            ? "".concat(n.rtt, "ms")
                            : "\u2014",
                [n],
            ),
            pingCircleStyle: r.useMemo(() => {
                if (null == n || n.loading) return o.pingCircleLoading;
                if (n.error) return o.pingCircleError;
                if (null !== n.rtt)
                    if (n.rtt < 50) return o.pingCircleExcellent;
                    else if (n.rtt < 100) return o.pingCircleGood;
                    else if (n.rtt < 200) return o.pingCircleFair;
                    else return o.pingCirclePoor;
            }, [n]),
        }
    );
}
