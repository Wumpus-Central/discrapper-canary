n.d(t, { A: () => z });
var i = n(535558),
    r = n(439372),
    a = n(91242),
    s = n(188567),
    l = n(633802),
    o = n(435558),
    d = n(332874);
n(321073);
var c = n(780594),
    u = n.n(c),
    _ = n(64460),
    E = n(426819),
    A = n(775121),
    f = n(429582),
    h = n(484697),
    I = n(532624),
    p = n(723702),
    m = n(350535),
    g = n(652215);
let T = new Set([
        "esc",
        "shift+esc",
        "pageup",
        "pagedown",
        "shift+pageup",
        "shift+pagedown",
        "f1",
        "shift+f10",
        "mod+s",
        "mod+p",
        "mod+e",
        "mod+i",
        "mod+u",
        "mod+g",
        "mod+return",
        "alt+left",
        "alt+right",
        ..._.J.binds,
    ]),
    S = null;
function N(e) {
    if (e.includes(" ")) return [];
    let { key: t, modifiers: n } = A.A.combokeys.getKeyInfo(e, "keydown");
    return (function (e) {
        if (null == S) {
            S = new Map();
            for (let e = 1; e < 256; e++) {
                let t = String(u()({ type: "keydown", which: e }));
                S.set(t, [...(S.get(t) ?? []), e]);
            }
        }
        return S.get(e) ?? [];
    })(t).map((e) => ({
        keyCode: e,
        ctrlKey: n.includes("ctrl"),
        altKey: n.includes("alt"),
        shiftKey: n.includes("shift"),
        metaKey: n.includes("meta"),
    }));
}
function C(e) {
    let { keyCode: t, ctrlKey: n, altKey: i, shiftKey: r, metaKey: a } = e;
    return `${t} ${n} ${i} ${r} ${a}`;
}
let O = null;
function R() {
    return (
        null == O &&
            (O = new Map(
                (function () {
                    let e = [];
                    for (let t of Object.values(E.zR))
                        if (t?.comboKeysBindGlobal === !0)
                            for (let n of A.A.getRegistrableBinds(t)) T.has(n) || e.push(n);
                    if (!p.isPlatformEmbedded)
                        for (let t of Object.values(I.Ay.getUserAgnosticState()))
                            t.enabled &&
                                t.shortcut.length > 0 &&
                                t.action !== g.hCu.UNASSIGNED &&
                                e.push((0, m.dI)(t.shortcut));
                    return e;
                })()
                    .flatMap(N)
                    .map((e) => [C(e), e]),
            )),
        O
    );
}
let L = new Map();
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e?.isConnected === !0 ? e : document,
        r = new (i.ownerDocument?.defaultView ?? window).KeyboardEvent(t.type, {
            bubbles: !0,
            cancelable: !0,
            ctrlKey: t.ctrlKey,
            altKey: t.altKey,
            shiftKey: t.shiftKey,
            metaKey: t.metaKey,
            repeat: n,
        });
    (Object.defineProperty(r, "which", { value: t.keyCode }),
        Object.defineProperty(r, "keyCode", { value: t.keyCode }),
        i.dispatchEvent(r));
}
let D = function (e) {
        function t() {
            ((O = null), e());
        }
        return (I.Ay.addChangeListener(t), () => I.Ay.removeChangeListener(t));
    },
    b = function (e, t) {
        let n = (0, h.fl)(e),
            i = L.get(e),
            r = !1;
        if ("keydown" === t.type) {
            if (
                null == n ||
                ((0, f.t8)(n) ? !(0, f.r8)(n) : !n.ownerDocument.hasFocus() || n.ownerDocument.activeElement !== n) ||
                !R().has(C(t))
            )
                return;
            (null == i && ((i = new Map()), L.set(e, i)), (r = i.has(t.keyCode)), i.set(t.keyCode, t));
        } else if (
            i?.delete(t.keyCode) !== !0 ||
            ("release" === t.type &&
                (function (e) {
                    if (null == e) return !1;
                    let { ownerDocument: t } = e;
                    return t.hasFocus() && t.activeElement?.tagName !== "IFRAME";
                })(n))
        )
            return;
        y(n, { ...t, type: "keydown" === t.type ? "keydown" : "keyup" }, r);
    },
    v = function (e) {
        let t = L.get(e);
        if ((L.delete(e), null == t)) return;
        let n = (0, h.fl)(e);
        for (let e of t.values()) y(n, { ...e, type: "keyup" });
    },
    P = {
        name: "string",
        startTime: "number",
        duration: "number",
        fetchStart: "number",
        requestStart: "number",
        responseStart: "number",
        responseEnd: "number",
        transferSize: "number",
    },
    M = { name: "string", startTime: "number" },
    U = { startTime: "number", size: "number" },
    w = { startTime: "number", duration: "number" };
function G(e, t) {
    let n = [];
    if (!Array.isArray(e)) return n;
    for (let i of e)
        (function (e, t) {
            if ("object" != typeof e || null == e) return !1;
            for (let [n, i] of Object.entries(t)) if (typeof e[n] !== i) return !1;
            return !0;
        })(i, t) && n.push(i);
    return n;
}
function x(e, t) {
    return Array.isArray(e) ? G(e, t) : null;
}
let k = { muted: !1 },
    F = new Map();
function B(e) {
    let t = a.A.getFrameByIframeId(e);
    if (null != t) return { muted: t.data.muted };
    let n = F.get(e);
    return null != n ? n.parentState : k;
}
function V(e) {
    ((e.parentState = B(e.iframeId)), e.host.dispatch({ type: i.Ii.STATE_UPDATED, state: e.parentState }));
}
function H() {
    return { type: i.Ii.KEYBINDS_UPDATED, keybinds: [...R().values()] };
}
function j(e) {
    let t = [...e.launchTimingsRequests.values()];
    for (let n of (e.launchTimingsRequests.clear(), t)) n(null);
}
function W(e) {
    let { iframeId: t, pipe: n } = e,
        r = F.get(t);
    if (null == r) {
        let e;
        ((r = e =
            {
                iframeId: t,
                host: (function (e) {
                    let { onConnect: t, onMessage: n } = e,
                        r = new Map(),
                        a = (0, d.g)(n, () => {
                            (r.clear(), t(s));
                        }),
                        s = {
                            offer: (e) => a.offer(e),
                            dispatch(e) {
                                (0, o.isEqual)(r.get(e.type), e) || (r.set(e.type, e), a.dispatch(e));
                            },
                            close() {
                                (a.close(), n({ type: i._i.DISCONNECTED }));
                            },
                        };
                    return s;
                })({
                    onConnect: () => {
                        var t;
                        (((t = e).connected = !0), j(t), V(t), t.host.dispatch(H()), (0, l.lB)(t.iframeId));
                    },
                    onMessage: (t) =>
                        (function (e, t) {
                            if (t.type === i._i.STATE_UPDATED) (0, l.WR)(e.iframeId, t.state);
                            else if (t.type === i._i.DISCONNECTED)
                                ((e.connected = !1), j(e), v(e.iframeId), (0, l.QQ)(e.iframeId));
                            else if (t.type === i._i.KEYBIND_CAPTURED) b(e.iframeId, t.keybind);
                            else if (t.type === i._i.LAUNCH_TIMINGS_RESPONSE) {
                                let n = e.launchTimingsRequests.get(t.nonce);
                                (e.launchTimingsRequests.delete(t.nonce),
                                    null != n &&
                                        n(
                                            (function (e) {
                                                let t;
                                                if ("string" != typeof e) return null;
                                                try {
                                                    t = JSON.parse(e);
                                                } catch {
                                                    return null;
                                                }
                                                if ("object" != typeof t || null == t) return null;
                                                let n = t;
                                                if ("number" != typeof n.timeOrigin) return null;
                                                let i = 0;
                                                return (
                                                    "number" == typeof n.droppedResources && (i = n.droppedResources),
                                                    {
                                                        timeOrigin: n.timeOrigin,
                                                        navigation: G(n.navigation, P),
                                                        resources: G(n.resources, P),
                                                        droppedResources: i,
                                                        paints: G(n.paints, M),
                                                        marks: G(n.marks, M),
                                                        largestContentfulPaints: x(n.largestContentfulPaints, U),
                                                        longAnimationFrames: x(n.longAnimationFrames, w),
                                                    }
                                                );
                                            })(t.timingsJson),
                                        ));
                            }
                        })(e, t),
                }),
                parentState: B(t),
                connected: !1,
                launchTimingsRequests: new Map(),
            }),
            F.set(t, r));
    }
    r.host.offer(n);
}
function Y(e) {
    let { id: t } = e,
        n = F.get(t);
    null != n && (F.delete(t), n.host.close());
}
function K() {
    let e = H();
    for (let t of F.values()) t.host.dispatch(e);
}
function $() {
    for (let e of F.values()) V(e);
}
class X extends r.A {
    actions = { EMBEDDED_APP_SHIM_PIPE_OPEN: W };
    stores = new Map().set(a.A, $);
    _unsubscribeKeybinds = null;
    _initialize() {
        (s._.subscribe(g.jej.IFRAME_UNMOUNT, Y), (this._unsubscribeKeybinds = D(K)));
    }
    _terminate() {
        for (let e of (s._.unsubscribe(g.jej.IFRAME_UNMOUNT, Y),
        this._unsubscribeKeybinds?.(),
        (this._unsubscribeKeybinds = null),
        F.values()))
            e.host.close();
        F.clear();
    }
}
let z = new X();
