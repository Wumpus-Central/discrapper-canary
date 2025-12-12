n.d(t, { t: () => s });
var r = n(688560),
    i = n(886649),
    a = n(521257),
    o = n(889929);
let _ = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "BroadcastChannel",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "SharedWorker",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload",
    ],
    s = (0, r._I)((e = {}) => {
        let t = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...e,
        };
        return {
            name: "BrowserApiErrors",
            setupOnce() {
                t.setTimeout && (0, i.hl)(o.m9, "setTimeout", c),
                    t.setInterval && (0, i.hl)(o.m9, "setInterval", c),
                    t.requestAnimationFrame && (0, i.hl)(o.m9, "requestAnimationFrame", E),
                    t.XMLHttpRequest && "XMLHttpRequest" in o.m9 && (0, i.hl)(XMLHttpRequest.prototype, "send", l);
                let e = t.eventTarget;
                e && (Array.isArray(e) ? e : _).forEach(u);
            },
        };
    });
function c(e) {
    return function (...t) {
        let n = t[0];
        return (
            (t[0] = (0, o.re)(n, {
                mechanism: {
                    data: { function: (0, a.$P)(e) },
                    handled: !1,
                    type: "instrument",
                },
            })),
            e.apply(this, t)
        );
    };
}
function E(e) {
    return function (t) {
        return e.apply(this, [
            (0, o.re)(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: (0, a.$P)(e),
                    },
                    handled: !1,
                    type: "instrument",
                },
            }),
        ]);
    };
}
function l(e) {
    return function (...t) {
        let n = this;
        return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e) => {
                e in n &&
                    "function" == typeof n[e] &&
                    (0, i.hl)(n, e, function (t) {
                        let n = {
                                mechanism: {
                                    data: {
                                        function: e,
                                        handler: (0, a.$P)(t),
                                    },
                                    handled: !1,
                                    type: "instrument",
                                },
                            },
                            r = (0, i.HK)(t);
                        return r && (n.mechanism.data.handler = (0, a.$P)(r)), (0, o.re)(t, n);
                    });
            }),
            e.apply(this, t)
        );
    };
}
function u(e) {
    let t = o.m9,
        n = t[e] && t[e].prototype;
    n &&
        n.hasOwnProperty &&
        n.hasOwnProperty("addEventListener") &&
        ((0, i.hl)(n, "addEventListener", function (t) {
            return function (n, r, i) {
                try {
                    "function" == typeof r.handleEvent &&
                        (r.handleEvent = (0, o.re)(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: (0, a.$P)(r),
                                    target: e,
                                },
                                handled: !1,
                                type: "instrument",
                            },
                        }));
                } catch (e) {}
                return t.apply(this, [
                    n,
                    (0, o.re)(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: (0, a.$P)(r),
                                target: e,
                            },
                            handled: !1,
                            type: "instrument",
                        },
                    }),
                    i,
                ]);
            };
        }),
        (0, i.hl)(n, "removeEventListener", function (e) {
            return function (t, n, r) {
                try {
                    let i = n && n.__sentry_wrapped__;
                    i && e.call(this, t, i, r);
                } catch (e) {}
                return e.call(this, t, n, r);
            };
        }));
}
