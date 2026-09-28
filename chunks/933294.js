n.d(t, { A: () => X });
var r = n(264686),
    i = n(625180),
    l = n(91242),
    o = n(976860),
    s = n(803224),
    u = n(531685),
    a = n(479975);
(n(323874), n(14289), n(35956));
var d = n(141931),
    c = n(941426),
    f = n(475735),
    h = n(25578),
    p = n(731854);
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
async function E(e) {
    let t = window.DiscordNative,
        n = await t?.window?.getMediaSourceId?.();
    if (null == n) return g("no media source id for our own window");
    let r = n.split(":")[1];
    if (null == r || "" === r) return g("unrecognized media source id", { sourceId: n });
    let i = Math.min(
            window.devicePixelRatio,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        l = Math.ceil(window.outerWidth * i),
        o = Math.ceil(window.outerHeight * i),
        s = h.Ay.getMediaEngine();
    if (s.supports(p.O5.WINDOW_PREVIEWS))
        try {
            let e = f.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
                t = await s.getSingleWindowPreview(r, l, o, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let u = await t?.desktopCapture?.getDesktopCaptureSources({
            types: [d.fS.WINDOW],
            thumbnailSize: { width: l, height: o },
        }),
        a = u?.find((e) => e.id.split(":")[1] === r);
    return null == a || "" === a.url ? g("own window missing from capture sources") : a.url;
}
async function m() {
    let e = document.createElement("div");
    return (
        (e.style.cssText =
            "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
        document.body.appendChild(e),
        await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
        () => e.remove()
    );
}
async function T(e, t, n) {
    let r = new Image();
    if (((r.decoding = "async"), (r.src = e), await r.decode(), 0 === r.naturalWidth || 0 === r.naturalHeight))
        return g("window still decoded empty");
    let i = r.naturalWidth / window.outerWidth,
        l = r.naturalHeight / window.outerHeight;
    if (i <= 0 || l <= 0 || Math.abs(i - l) > 0.03 * i)
        return g("window still does not match the window geometry", {
            image: { width: r.naturalWidth, height: r.naturalHeight },
            window: { width: window.outerWidth, height: window.outerHeight },
        });
    let o = (function (e, t, n, r) {
        let i = t.x > 2 ? [0, t.x] : [0],
            l = t.y > 2 ? [0, t.y] : [0];
        if (1 === i.length && 1 === l.length) return { x: 0, y: 0 };
        for (let t of i)
            for (let i of l)
                if (
                    (function (e, t, n) {
                        let r = document.createElement("canvas");
                        ((r.width = 1), (r.height = 1));
                        let i = r.getContext("2d");
                        if (null == i) return !1;
                        i.drawImage(e, t, n, 1, 1, 0, 0, 1, 1);
                        let [l, o, s] = i.getImageData(0, 0, 1, 1).data;
                        return l > 150 && s > 150 && o < Math.min(l, s) - 80;
                    })(e, Math.round((t + 43) * n), Math.round((i + 43) * r))
                )
                    return { x: t, y: i };
        return null;
    })(r, n, i, l);
    if (null == o) return g("document not found inside the window still", { inset: n });
    let s = Math.max(0, Math.floor((o.x + t.left) * i)),
        u = Math.max(0, Math.floor((o.y + t.top) * l)),
        a = Math.min(r.naturalWidth - s, Math.round(t.width * i)),
        d = Math.min(r.naturalHeight - u, Math.round(t.height * l));
    if (a < 1 || d < 1) return g("crop resolved empty");
    let c = Math.min(1, 1568 / Math.max(a, d), Math.sqrt(115e4 / (a * d))),
        f = Math.max(1, Math.round(a * c)),
        h = Math.max(1, Math.round(d * c)),
        p = document.createElement("canvas");
    ((p.width = f), (p.height = h));
    let _ = p.getContext("2d");
    if (null == _) return g("no 2d context");
    _.drawImage(r, s, u, a, d, 0, 0, f, h);
    let w = await new Promise((e) => p.toBlob(e, "image/webp", 0.92));
    return null == w || "image/webp" !== w.type
        ? g("webp encode failed")
        : w.size > 5242880
          ? g("encoded capture too large", { bytes: w.size })
          : { blob: w, scale: (f / t.width + h / t.height) / 2 };
}
async function I(e, t) {
    try {
        var n, r, i;
        let l;
        if (null == window.DiscordNative) return g("not the desktop app");
        if (
            ((n = t.spec),
            null != n &&
                "viewport" !==
                    (n.mode ??
                        (null != (r = n.target) &&
                        ((null != r.ref && "" !== r.ref) ||
                            (null != r.selector && "" !== r.selector) ||
                            (null != r.text && "" !== r.text))
                            ? "element"
                            : null != (i = n.rect) && i.width > 0 && i.height > 0
                              ? "rect"
                              : "viewport")))
        )
            return g("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return g("window not visible");
        let o = w(e);
        if (null == o) return g("frame not fully on screen");
        if (
            !(function (e, t) {
                for (let [n, r] of [
                    [t.left + t.width / 2, t.top + t.height / 2],
                    [t.left + 8, t.top + 8],
                    [t.right - 8, t.top + 8],
                    [t.left + 8, t.bottom - 8],
                    [t.right - 8, t.bottom - 8],
                ]) {
                    let i = document.elementFromPoint(n, r);
                    if (i === e) continue;
                    if (null == i) return !1;
                    let l = i.getBoundingClientRect();
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
            u = s.x > 2 || s.y > 2 ? await m() : null;
        try {
            l = await E(o);
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
        let d = await T(l, o, s);
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
            h = {
                "content-type": d.blob.type,
                "x-vibegrations-capture-id": t.captureId,
                "x-vibegrations-capture-meta": encodeURIComponent(JSON.stringify(f)),
            };
        (null != t.build && (h["x-vibegrations-build"] = t.build),
            null != t.uploadToken && (h["x-vibegrations-capture-token"] = t.uploadToken));
        let p = await fetch(c, { method: "POST", headers: h, body: d.blob });
        if (!p.ok) return g("upload refused", { status: p.status });
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
    R = n(227189),
    y = n(940107),
    v = n(171936),
    O = n(809685),
    b = n(777977),
    k = n(484697);
(n(321073), n(667532));
var C = n(112420),
    N = n(652215);
function P(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let M = {
    [N.e$_.OPEN_CONTEXT_MENU]: (e, t) => {
        let n = "custom" === e.args.type,
            r = n
                ? (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let r of t) {
                          if (n.length >= 40) break;
                          if (null == r || "object" != typeof r) continue;
                          let t = P(r.id);
                          (null != t && n.push(t), e(r.items, n));
                      }
                      return n;
                  })(e.args.items)
                : [],
            i = n ? t.contextMenuSelect : void 0;
        return n
            ? null == i
                ? { result: { opened: !0, selected_id: null }, answered: "dismissed", options: r }
                : r.includes(i)
                  ? { result: { opened: !0, selected_id: i }, answered: `selected "${i}"`, options: r }
                  : {
                        result: { opened: !0, selected_id: null },
                        answered: `dismissed \u{2014} no item with id "${i}"`,
                        options: r,
                    }
            : { result: { opened: !0 }, answered: "opened, no selection to make" };
    },
    [N.e$_.SHOW_CONFIRM_MODAL]: (e, t) => {
        let n = !0 === t.confirm,
            r = P(e.args.title);
        return {
            result: "confirm" === e.args.type ? { confirmed: n } : { acknowledged: n },
            answered: n ? "confirmed" : "dismissed",
            subject: r,
        };
    },
    [N.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: P(e.args.url),
    }),
    [N.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: P(e.args.preview_title) ?? P(e.args.content),
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
Object.keys(M);
let B = { drain: () => [], end: () => {}, iframeId: null },
    L = [];
function D(e) {
    let t = L.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = M[e.cmd];
    if (null == n) return null;
    let { result: r, answered: i, options: l, subject: o } = n(e, t.answers);
    return (
        t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: i,
                ...(null != l && l.length > 0 ? { options: l } : {}),
                ...(null != o ? { subject: o } : {}),
            }),
        { result: r }
    );
}
function G(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, k.lw)(t) ?? null);
}
function V(e, t, n) {
    var r = G(e);
    if (null == r) return B;
    let i = { iframeId: r, answers: t ?? {}, recorded: [] };
    return (
        n?.beneathBatches === !0 ? L.push(i) : L.unshift(i),
        1 === L.length && (0, C.C)(D),
        {
            iframeId: r,
            drain: () => i.recorded.splice(0, i.recorded.length),
            end: () => {
                let e = L.indexOf(i);
                -1 !== e && (L.splice(e, 1), 0 === L.length && (0, C.C)(null));
            },
        }
    );
}
var H = n(948230),
    x = n(805332),
    U = n(796036);
function F(e) {
    let t = (0, v.J8)(e);
    if (null == t) return null;
    let n = t.getBoundingClientRect();
    return n.width < 1 || n.height < 1 ? null : { width: Math.round(n.width), height: Math.round(n.height) };
}
async function W(e, t) {
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
    if (null == x.A.getBuilderPreviewApplicationId() && !(0, U.h)(e))
        return {
            ok: !1,
            mode: t,
            ...n,
            code: "unavailable",
            message:
                "the phone/desktop lens is the Conjure builder header's, and this preview is not the builder screen's \u2014 open the app preview there to switch it",
        };
    (0, H.GG)("phone" === t);
    let r = Date.now() + 2e3;
    for (;;) {
        var i;
        let l = F(e);
        if (null != l && ((i = l.width), "phone" === t ? 60 >= Math.abs(i - 390) : i >= 520))
            return { ok: !0, mode: t, ...l };
        if (Date.now() >= r)
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
var j = n(559676);
function q(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
}
var $ = n(165610);
async function J(e) {
    let { onClose: t, ...r } = e,
        { openOAuth2Modal: i } = await Promise.resolve().then(n.bind(n, 887909));
    i((0, R.p)(r), t);
}
async function z(e, t, n) {
    let { probe: r, spec: i, build: l, onAccepted: o } = n ?? {};
    if (!0 === r) return { status: (0, v.EA)(e) ? "accepted" : "unavailable" };
    let s = await (0, v.ZW)(e, 6e3);
    if (null == s) return { status: "unavailable" };
    let u = null == o ? { uploadToken: void 0 } : await o();
    if (null == u) return { status: "unavailable" };
    let a = await I(s, { captureId: t, spec: i, build: l, uploadToken: u.uploadToken });
    return null != a ? a : await (0, A.x)(s, t, i, u.uploadToken);
}
async function Y(e, t, n, r) {
    if (!(0, v.EA)(e)) return { status: "unavailable" };
    let i = (0, j.t_)(e);
    try {
        let i = await (0, v.ZW)(e, 6e3);
        if (null == i) return { status: "unavailable" };
        let l = await r?.();
        if (!1 === l) return { status: "unavailable" };
        if (null != n.viewport) {
            let t = await W(e, n.viewport);
            if (!t.ok) return { status: "failed", message: t.message ?? "the preview lens did not change" };
        }
        let o = V(i, n.native);
        try {
            let r = await (0, S.S)(i, t, n);
            if ("completed" !== r.status) return r;
            let l = [...K.drain(e), ...o.drain()];
            if (0 === l.length) return r;
            return { ...r, response: { ...r.response, native: l } };
        } finally {
            o.end();
        }
    } finally {
        i();
    }
}
let K = (function (e) {
    let t = new Map();
    function n(e) {
        let n = t.get(e);
        (null != n && (t.delete(e), q("closing the operation session", () => n.end())), (0, j.Rh)(e));
    }
    return {
        begin: function (r) {
            (0, j.BP)(r);
            let i = e(r);
            if (null == i) return;
            let l = t.get(r);
            if (null != l) {
                if (null != l.iframeId && l.iframeId === i.identity) return;
                (t.delete(r), q("replacing a stale operation session", () => l.end()));
            }
            (q("dismissing what was left standing", () => i.dismiss()),
                q("opening the operation session", () => {
                    let e = i.open(),
                        l = (0, j.FQ)(() => {
                            (0, j.RW)(r) || n(r);
                        });
                    t.set(r, {
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
    let t = (0, v.J8)(e);
    return null == t
        ? null
        : {
              identity: G(t),
              dismiss: () =>
                  (function (e) {
                      let t = e.contentWindow;
                      if (null == t) return;
                      let n = (0, k.lw)(t);
                      null != n && ((0, O.ir)(n), (0, b.OR)(n));
                  })(t),
              open: () => V(t, void 0, { beneathBatches: !0 }),
          };
});
(0, j.Qg)((e) => {
    let t = (0, v.J8)(e);
    null != t &&
        (0, y.W)(
            t,
            "control-end",
            {},
            { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
        ).catch(() => {});
});
let X = {
    openVibegrationsAppInstallModal: J,
    isWindowFocused: function () {
        return u.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return s.A.getDesktopType() === N.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { projectId: t, title: i, body: l, route: s, sound: u, volume: d } = e;
        r.default.showNotification(
            n(608598),
            i,
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
    relayPreviewCapture: z,
    relayPreviewControl: Y,
    beginPreviewOperation: function (e) {
        K.begin(e);
    },
    endPreviewOperation: function (e) {
        K.end(e);
    },
    releasePreviewControl: function (e) {
        (0, j.xm)(e);
    },
    reloadAppFrames: function (e) {
        if (null != e)
            for (let t of l.A.getAllFrames())
                (0, $.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && i.A.refreshProxyTicket(t.id);
    },
};
