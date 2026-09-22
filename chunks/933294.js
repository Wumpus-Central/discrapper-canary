n.d(t, { A: () => X });
var i = n(264686),
    r = n(625180),
    l = n(91242),
    o = n(976860),
    s = n(803224),
    u = n(531685),
    a = n(479975);
(n(323874), n(14289), n(35956));
var d = n(141931),
    c = n(941426),
    f = n(475735),
    p = n(25578),
    h = n(731854);
let _ = new c.Vy("VibegrationsNativeCapture");
function g(e, t) {
    return (_.verbose(`native capture not used: ${e}`, t ?? {}), null);
}
function w(e) {
    let t = e.getBoundingClientRect();
    return t.width < 40 ||
        t.height < 40 ||
        t.left < -1 ||
        t.top < -1 ||
        t.right > window.innerWidth + 1 ||
        t.bottom > window.innerHeight + 1
        ? null
        : t;
}
async function m(e) {
    let t = window.DiscordNative,
        n = await t?.window?.getMediaSourceId?.();
    if (null == n) return g("no media source id for our own window");
    let i = n.split(":")[1];
    if (null == i || "" === i) return g("unrecognized media source id", { sourceId: n });
    let r = Math.min(
            window.devicePixelRatio,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        l = Math.ceil(window.outerWidth * r),
        o = Math.ceil(window.outerHeight * r),
        s = p.Ay.getMediaEngine();
    if (s.supports(h.O5.WINDOW_PREVIEWS))
        try {
            let e = f.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
                t = await s.getSingleWindowPreview(i, l, o, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let u = await t?.desktopCapture?.getDesktopCaptureSources({
            types: [d.fS.WINDOW],
            thumbnailSize: { width: l, height: o },
        }),
        a = u?.find((e) => e.id.split(":")[1] === i);
    return null == a || "" === a.url ? g("own window missing from capture sources") : a.url;
}
async function E() {
    let e = document.createElement("div");
    return (
        (e.style.cssText =
            "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
        document.body.appendChild(e),
        await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
        () => e.remove()
    );
}
async function I(e, t, n) {
    let i = new Image();
    if (((i.decoding = "async"), (i.src = e), await i.decode(), 0 === i.naturalWidth || 0 === i.naturalHeight))
        return g("window still decoded empty");
    let r = i.naturalWidth / window.outerWidth,
        l = i.naturalHeight / window.outerHeight;
    if (r <= 0 || l <= 0 || Math.abs(r - l) > 0.03 * r)
        return g("window still does not match the window geometry", {
            image: { width: i.naturalWidth, height: i.naturalHeight },
            window: { width: window.outerWidth, height: window.outerHeight },
        });
    let o = (function (e, t, n, i) {
        let r = t.x > 2 ? [0, t.x] : [0],
            l = t.y > 2 ? [0, t.y] : [0];
        if (1 === r.length && 1 === l.length) return { x: 0, y: 0 };
        for (let t of r)
            for (let r of l)
                if (
                    (function (e, t, n) {
                        let i = document.createElement("canvas");
                        ((i.width = 1), (i.height = 1));
                        let r = i.getContext("2d");
                        if (null == r) return !1;
                        r.drawImage(e, t, n, 1, 1, 0, 0, 1, 1);
                        let [l, o, s] = r.getImageData(0, 0, 1, 1).data;
                        return l > 150 && s > 150 && o < Math.min(l, s) - 80;
                    })(e, Math.round((t + 43) * n), Math.round((r + 43) * i))
                )
                    return { x: t, y: r };
        return null;
    })(i, n, r, l);
    if (null == o) return g("document not found inside the window still", { inset: n });
    let s = Math.max(0, Math.floor((o.x + t.left) * r)),
        u = Math.max(0, Math.floor((o.y + t.top) * l)),
        a = Math.min(i.naturalWidth - s, Math.round(t.width * r)),
        d = Math.min(i.naturalHeight - u, Math.round(t.height * l));
    if (a < 1 || d < 1) return g("crop resolved empty");
    let c = Math.min(1, 1568 / Math.max(a, d), Math.sqrt(115e4 / (a * d))),
        f = Math.max(1, Math.round(a * c)),
        p = Math.max(1, Math.round(d * c)),
        h = document.createElement("canvas");
    ((h.width = f), (h.height = p));
    let _ = h.getContext("2d");
    if (null == _) return g("no 2d context");
    _.drawImage(i, s, u, a, d, 0, 0, f, p);
    let w = await new Promise((e) => h.toBlob(e, "image/webp", 0.92));
    return null == w || "image/webp" !== w.type
        ? g("webp encode failed")
        : w.size > 5242880
          ? g("encoded capture too large", { bytes: w.size })
          : { blob: w, scale: (f / t.width + p / t.height) / 2 };
}
async function T(e, t) {
    try {
        var n, i, r;
        let l;
        if (null == window.DiscordNative) return g("not the desktop app");
        if (
            ((n = t.spec),
            null != n &&
                "viewport" !==
                    (n.mode ??
                        (null != (i = n.target) &&
                        ((null != i.ref && "" !== i.ref) ||
                            (null != i.selector && "" !== i.selector) ||
                            (null != i.text && "" !== i.text))
                            ? "element"
                            : null != (r = n.rect) && r.width > 0 && r.height > 0
                              ? "rect"
                              : "viewport")))
        )
            return g("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return g("window not visible");
        let o = w(e);
        if (null == o) return g("frame not fully on screen");
        if (
            !(function (e, t) {
                for (let [n, i] of [
                    [t.left + t.width / 2, t.top + t.height / 2],
                    [t.left + 8, t.top + 8],
                    [t.right - 8, t.top + 8],
                    [t.left + 8, t.bottom - 8],
                    [t.right - 8, t.bottom - 8],
                ]) {
                    let r = document.elementFromPoint(n, i);
                    if (r === e) continue;
                    if (null == r) return !1;
                    let l = r.getBoundingClientRect();
                    if (
                        !(
                            2 >= Math.abs(l.left - t.left) &&
                            2 >= Math.abs(l.top - t.top) &&
                            4 >= Math.abs(l.width - t.width) &&
                            4 >= Math.abs(l.height - t.height)
                        )
                    )
                        return !1;
                }
                return !0;
            })(e, o)
        )
            return g("frame is covered");
        let s = {
                x: Math.max(0, window.outerWidth - window.innerWidth),
                y: Math.max(0, window.outerHeight - window.innerHeight),
            },
            u = s.x > 2 || s.y > 2 ? await E() : null;
        try {
            l = await m(o);
        } finally {
            u?.();
        }
        if (null == l) return null;
        let a = w(e);
        if (
            null == a ||
            Math.abs(a.left - o.left) > 1 ||
            Math.abs(a.top - o.top) > 1 ||
            Math.abs(a.width - o.width) > 1 ||
            Math.abs(a.height - o.height) > 1
        )
            return g("frame moved or resized during capture");
        let d = await I(l, o, s);
        if (null == d) return null;
        let c = (function (e) {
            try {
                let t = new URL(e.src, window.location.href);
                return (
                    (t.search = ""),
                    (t.hash = ""),
                    (t.pathname = t.pathname.replace(/[^/]*$/, "")),
                    new URL("discord-cgi/screenshot", t).toString()
                );
            } catch {
                return null;
            }
        })(e);
        if (null == c) return g("frame has no resolvable upload url");
        let f = {
                mode: "viewport",
                bounds: { x: 0, y: 0, width: Math.round(o.width), height: Math.round(o.height) },
                viewport: { width: Math.round(o.width), height: Math.round(o.height) },
                scale: Math.round(1e3 * d.scale) / 1e3,
                devicePixelRatio: window.devicePixelRatio,
                formFactor: o.width <= 768 ? "narrow" : "wide",
                ...(null == t.build ? {} : { build: t.build }),
                source: "native",
            },
            p = {
                "content-type": d.blob.type,
                "x-vibegrations-capture-id": t.captureId,
                "x-vibegrations-capture-meta": encodeURIComponent(JSON.stringify(f)),
            };
        (null != t.build && (p["x-vibegrations-build"] = t.build),
            null != t.uploadToken && (p["x-vibegrations-capture-token"] = t.uploadToken));
        let h = await fetch(c, { method: "POST", headers: p, body: d.blob });
        if (!h.ok) return g("upload refused", { status: h.status });
        return (
            _.verbose("native capture uploaded", { id: t.captureId, bytes: d.blob.size, scale: f.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return g("threw", { err: e });
    }
}
var A = n(120426),
    S = n(320510),
    v = n(227189),
    y = n(171936),
    R = n(809685),
    O = n(777977),
    b = n(484697);
(n(321073), n(667532));
var k = n(112420),
    N = n(652215);
function C(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let P = {
    [N.e$_.OPEN_CONTEXT_MENU]: (e, t) => {
        let n = "custom" === e.args.type,
            i = n
                ? (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let i of t) {
                          if (n.length >= 40) break;
                          if (null == i || "object" != typeof i) continue;
                          let t = C(i.id);
                          (null != t && n.push(t), e(i.items, n));
                      }
                      return n;
                  })(e.args.items)
                : [],
            r = n ? t.contextMenuSelect : void 0;
        return n
            ? null == r
                ? { result: { opened: !0, selected_id: null }, answered: "dismissed", options: i }
                : i.includes(r)
                  ? { result: { opened: !0, selected_id: r }, answered: `selected "${r}"`, options: i }
                  : {
                        result: { opened: !0, selected_id: null },
                        answered: `dismissed \u{2014} no item with id "${r}"`,
                        options: i,
                    }
            : { result: { opened: !0 }, answered: "opened, no selection to make" };
    },
    [N.e$_.SHOW_CONFIRM_MODAL]: (e, t) => {
        let n = !0 === t.confirm,
            i = C(e.args.title);
        return {
            result: "confirm" === e.args.type ? { confirmed: n } : { acknowledged: n },
            answered: n ? "confirmed" : "dismissed",
            subject: i,
        };
    },
    [N.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: C(e.args.url),
    }),
    [N.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: C(e.args.preview_title) ?? C(e.args.content),
    }),
    [N.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [N.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [N.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [N.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [N.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [N.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [N.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [N.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(P);
let M = { drain: () => [], end: () => {}, iframeId: null },
    B = [];
function L(e) {
    let t = B.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = P[e.cmd];
    if (null == n) return null;
    let { result: i, answered: r, options: l, subject: o } = n(e, t.answers);
    return (
        t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: r,
                ...(null != l && l.length > 0 ? { options: l } : {}),
                ...(null != o ? { subject: o } : {}),
            }),
        { result: i }
    );
}
function D(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, b.lw)(t) ?? null);
}
function G(e, t, n) {
    var i = D(e);
    if (null == i) return M;
    let r = { iframeId: i, answers: t ?? {}, recorded: [] };
    return (
        n?.beneathBatches === !0 ? B.push(r) : B.unshift(r),
        1 === B.length && (0, k.C)(L),
        {
            iframeId: i,
            drain: () => r.recorded.splice(0, r.recorded.length),
            end: () => {
                let e = B.indexOf(r);
                -1 !== e && (B.splice(e, 1), 0 === B.length && (0, k.C)(null));
            },
        }
    );
}
var V = n(948230),
    x = n(805332),
    H = n(796036);
function F(e) {
    let t = (0, y.J8)(e);
    if (null == t) return null;
    let n = t.getBoundingClientRect();
    return n.width < 1 || n.height < 1 ? null : { width: Math.round(n.width), height: Math.round(n.height) };
}
async function U(e, t) {
    let n = F(e);
    if (null == n)
        return {
            ok: !1,
            mode: t,
            width: 0,
            height: 0,
            code: "unavailable",
            message: "no preview frame is on screen for this project",
        };
    if (null == x.A.getBuilderPreviewApplicationId() && !(0, H.h)(e))
        return {
            ok: !1,
            mode: t,
            ...n,
            code: "unavailable",
            message:
                "the phone/desktop lens is the Conjure builder header's, and this preview is not the builder screen's \u2014 open the app preview there to switch it",
        };
    (0, V.GG)("phone" === t);
    let i = Date.now() + 2e3;
    for (;;) {
        var r;
        let l = F(e);
        if (null != l && ((r = l.width), "phone" === t ? 60 >= Math.abs(r - 390) : r >= 520))
            return { ok: !0, mode: t, ...l };
        if (Date.now() >= i)
            return {
                ok: !1,
                mode: t,
                ...(l ?? n),
                code: "timeout",
                message: `the lens was set to ${t} but the frame is still ${String(l?.width ?? n.width)}px wide \u{2014} it is probably not the surface that applies the constraint`,
            };
        await new Promise((e) => setTimeout(e, 50));
    }
}
n(762399);
var W = n(559676);
function j(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
}
var q = n(165610);
async function $(e) {
    let { onClose: t, ...i } = e,
        { openOAuth2Modal: r } = await Promise.resolve().then(n.bind(n, 887909));
    r((0, v.p)(i), t);
}
async function J(e, t, n) {
    let { probe: i, spec: r, build: l, onAccepted: o } = n ?? {};
    if (!0 === i) return { status: (0, y.EA)(e) ? "accepted" : "unavailable" };
    let s = await (0, y.ZW)(e, 6e3);
    if (null == s) return { status: "unavailable" };
    let u = null == o ? { uploadToken: void 0 } : await o();
    if (null == u) return { status: "unavailable" };
    let a = await T(s, { captureId: t, spec: r, build: l, uploadToken: u.uploadToken });
    return null != a ? a : await (0, A.x)(s, t, r, u.uploadToken);
}
async function z(e, t, n, i) {
    if (!(0, y.EA)(e)) return { status: "unavailable" };
    let r = (0, W.t_)(e);
    try {
        let r = await (0, y.ZW)(e, 6e3);
        if (null == r) return { status: "unavailable" };
        let l = await i?.();
        if (!1 === l) return { status: "unavailable" };
        if (null != n.viewport) {
            let t = await U(e, n.viewport);
            if (!t.ok) return { status: "failed", message: t.message ?? "the preview lens did not change" };
        }
        let o = G(r, n.native);
        try {
            let i = await (0, S.S)(r, t, n);
            if ("completed" !== i.status) return i;
            let l = [...Y.drain(e), ...o.drain()];
            if (0 === l.length) return i;
            return { ...i, response: { ...i.response, native: l } };
        } finally {
            o.end();
        }
    } finally {
        r();
    }
}
let Y = (function (e) {
        let t = new Map();
        function n(e) {
            let n = t.get(e);
            (null != n && (t.delete(e), j("closing the operation session", () => n.end())), (0, W.Rh)(e));
        }
        return {
            begin: function (i) {
                (0, W.BP)(i);
                let r = e(i);
                if (null == r) return;
                let l = t.get(i);
                if (null != l) {
                    if (null != l.iframeId && l.iframeId === r.identity) return;
                    (t.delete(i), j("replacing a stale operation session", () => l.end()));
                }
                (j("dismissing what was left standing", () => r.dismiss()),
                    j("opening the operation session", () => {
                        let e = r.open(),
                            l = (0, W.FQ)(() => {
                                (0, W.RW)(i) || n(i);
                            });
                        t.set(i, {
                            iframeId: e.iframeId,
                            drain: () => e.drain(),
                            end: () => {
                                (l(), e.end());
                            },
                        });
                    }));
            },
            end: n,
            drain: (e) => t.get(e)?.drain() ?? [],
        };
    })((e) => {
        let t = (0, y.J8)(e);
        return null == t
            ? null
            : {
                  identity: D(t),
                  dismiss: () =>
                      (function (e) {
                          let t = e.contentWindow;
                          if (null == t) return;
                          let n = (0, b.lw)(t);
                          null != n && ((0, R.ir)(n), (0, O.OR)(n));
                      })(t),
                  open: () => G(t, void 0, { beneathBatches: !0 }),
              };
    }),
    X = {
        openVibegrationsAppInstallModal: $,
        isWindowFocused: function () {
            return u.A.isFocused();
        },
        areTurnNotificationsDisabled: function () {
            return s.A.getDesktopType() === N.nRU.NEVER;
        },
        presentTurnNotification: function (e) {
            let { projectId: t, title: r, body: l, route: s, sound: u, volume: d } = e;
            i.default.showNotification(
                n(608598),
                r,
                l,
                { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
                {
                    tag: `vibegrations-${t}`,
                    sound: u,
                    volume: d,
                    fallbackDeepLink: null == s ? void 0 : (0, a.I)(s),
                    onClick: null == s ? void 0 : () => (0, o.pX)(s),
                    isUserAvatar: !1,
                },
            );
        },
        relayPreviewCapture: J,
        relayPreviewControl: z,
        beginPreviewOperation: function (e) {
            Y.begin(e);
        },
        endPreviewOperation: function (e) {
            Y.end(e);
        },
        releasePreviewControl: function (e) {
            (0, W.xm)(e);
        },
        reloadAppFrames: function (e) {
            if (null != e)
                for (let t of l.A.getAllFrames())
                    (0, q.x1)(t) &&
                        t.applicationId === e &&
                        !t.data.proxyTicketRefreshing &&
                        r.A.refreshProxyTicket(t.id);
        },
    };
