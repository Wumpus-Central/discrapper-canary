r.d(t, { t: () => s });
var n = r(688560),
    a = r(886649),
    i = r(521257),
    o = r(889929);
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
    s = (0, n._I)((e = {}) => {
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
                t.setTimeout && (0, a.hl)(o.m9, "setTimeout", c),
                    t.setInterval && (0, a.hl)(o.m9, "setInterval", c),
                    t.requestAnimationFrame && (0, a.hl)(o.m9, "requestAnimationFrame", E),
                    t.XMLHttpRequest && "XMLHttpRequest" in o.m9 && (0, a.hl)(XMLHttpRequest.prototype, "send", l);
                let e = t.eventTarget;
                e && (Array.isArray(e) ? e : _).forEach(u);
            },
        };
    });
function c(e) {
    return function (...t) {
        let r = t[0];
        return (
            (t[0] = (0, o.re)(r, {
                mechanism: {
                    data: { function: (0, i.$P)(e) },
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
                        handler: (0, i.$P)(e),
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
        let r = this;
        return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e) => {
                e in r &&
                    "function" == typeof r[e] &&
                    (0, a.hl)(r, e, function (t) {
                        let r = {
                                mechanism: {
                                    data: {
                                        function: e,
                                        handler: (0, i.$P)(t),
                                    },
                                    handled: !1,
                                    type: "instrument",
                                },
                            },
                            n = (0, a.HK)(t);
                        return n && (r.mechanism.data.handler = (0, i.$P)(n)), (0, o.re)(t, r);
                    });
            }),
            e.apply(this, t)
        );
    };
}
function u(e) {
    let t = o.m9,
        r = t[e] && t[e].prototype;
    r &&
        r.hasOwnProperty &&
        r.hasOwnProperty("addEventListener") &&
        ((0, a.hl)(r, "addEventListener", function (t) {
            return function (r, n, a) {
                try {
                    "function" == typeof n.handleEvent &&
                        (n.handleEvent = (0, o.re)(n.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: (0, i.$P)(n),
                                    target: e,
                                },
                                handled: !1,
                                type: "instrument",
                            },
                        }));
                } catch (e) {}
                return t.apply(this, [
                    r,
                    (0, o.re)(n, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: (0, i.$P)(n),
                                target: e,
                            },
                            handled: !1,
                            type: "instrument",
                        },
                    }),
                    a,
                ]);
            };
        }),
        (0, a.hl)(r, "removeEventListener", function (e) {
            return function (t, r, n) {
                try {
                    let a = r && r.__sentry_wrapped__;
                    a && e.call(this, t, a, n);
                } catch (e) {}
                return e.call(this, t, r, n);
            };
        }));
}
