n.d(t, { G: () => l });
var r = n(690094),
    i = n(688331),
    o = n(968072),
    a = n(804524);
let s = [
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
    l = (0, i._C)((e = {}) => {
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
                t.setTimeout && (0, r.GS)(a.jf, "setTimeout", c),
                    t.setInterval && (0, r.GS)(a.jf, "setInterval", c),
                    t.requestAnimationFrame && (0, r.GS)(a.jf, "requestAnimationFrame", u),
                    t.XMLHttpRequest && "XMLHttpRequest" in a.jf && (0, r.GS)(XMLHttpRequest.prototype, "send", d);
                let e = t.eventTarget;
                e && (Array.isArray(e) ? e : s).forEach(p);
            },
        };
    });
function c(e) {
    return function (...t) {
        let n = t[0];
        return (
            (t[0] = (0, a.LV)(n, { mechanism: { data: { function: (0, o.qQ)(e) }, handled: !1, type: "instrument" } })),
            e.apply(this, t)
        );
    };
}
function u(e) {
    return function (t) {
        return e.apply(this, [
            (0, a.LV)(t, {
                mechanism: {
                    data: { function: "requestAnimationFrame", handler: (0, o.qQ)(e) },
                    handled: !1,
                    type: "instrument",
                },
            }),
        ]);
    };
}
function d(e) {
    return function (...t) {
        let n = this;
        return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e) => {
                e in n &&
                    "function" == typeof n[e] &&
                    (0, r.GS)(n, e, function (t) {
                        let n = {
                                mechanism: {
                                    data: { function: e, handler: (0, o.qQ)(t) },
                                    handled: !1,
                                    type: "instrument",
                                },
                            },
                            i = (0, r.sp)(t);
                        return i && (n.mechanism.data.handler = (0, o.qQ)(i)), (0, a.LV)(t, n);
                    });
            }),
            e.apply(this, t)
        );
    };
}
function p(e) {
    let t = a.jf[e],
        n = t && t.prototype;
    n &&
        n.hasOwnProperty &&
        n.hasOwnProperty("addEventListener") &&
        ((0, r.GS)(n, "addEventListener", function (t) {
            return function (n, r, i) {
                try {
                    var s;
                    (s = r),
                        "function" == typeof s.handleEvent &&
                            (r.handleEvent = (0, a.LV)(r.handleEvent, {
                                mechanism: {
                                    data: { function: "handleEvent", handler: (0, o.qQ)(r), target: e },
                                    handled: !1,
                                    type: "instrument",
                                },
                            }));
                } catch (e) {}
                return t.apply(this, [
                    n,
                    (0, a.LV)(r, {
                        mechanism: {
                            data: { function: "addEventListener", handler: (0, o.qQ)(r), target: e },
                            handled: !1,
                            type: "instrument",
                        },
                    }),
                    i,
                ]);
            };
        }),
        (0, r.GS)(n, "removeEventListener", function (e) {
            return function (t, n, r) {
                try {
                    let i = n.__sentry_wrapped__;
                    i && e.call(this, t, i, r);
                } catch (e) {}
                return e.call(this, t, n, r);
            };
        }));
}
