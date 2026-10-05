n.d(t, { A: () => z });
var i = n(264686),
    r = n(625180),
    l = n(91242),
    a = n(976860),
    o = n(803224),
    u = n(531685),
    s = n(479975);
n(884868);
var d = n(573083);
function c(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
}
(n(323874), n(14289), n(35956));
var f = n(141931),
    h = n(941426),
    p = n(475735),
    g = n(25578),
    m = n(731854);
let w = new h.Vy("VibegrationsNativeCapture");
function _(e, t) {
    return (w.verbose(`native capture not used: ${e}`, t ?? {}), null);
}
function E(e) {
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
async function y(e) {
    let t = window.DiscordNative,
        n = await t?.window?.getMediaSourceId?.();
    if (null == n) return _("no media source id for our own window");
    let i = n.split(":")[1];
    if (null == i || "" === i) return _("unrecognized media source id", { sourceId: n });
    let r = Math.min(
            window.devicePixelRatio,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        l = Math.ceil(window.outerWidth * r),
        a = Math.ceil(window.outerHeight * r),
        o = g.Ay.getMediaEngine();
    if (o.supports(m.O5.WINDOW_PREVIEWS))
        try {
            let e = p.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
                t = await o.getSingleWindowPreview(i, l, a, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let u = await t?.desktopCapture?.getDesktopCaptureSources({
            types: [f.fS.WINDOW],
            thumbnailSize: { width: l, height: a },
        }),
        s = u?.find((e) => e.id.split(":")[1] === i);
    return null == s || "" === s.url ? _("own window missing from capture sources") : s.url;
}
async function b() {
    let e = document.createElement("div");
    return (
        (e.style.cssText =
            "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
        document.body.appendChild(e),
        await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
        () => e.remove()
    );
}
async function v(e, t, n, i) {
    let r = new Image();
    if (((r.decoding = "async"), (r.src = e), await r.decode(), 0 === r.naturalWidth || 0 === r.naturalHeight))
        return _("window still decoded empty");
    let l = r.naturalWidth / window.outerWidth,
        a = r.naturalHeight / window.outerHeight;
    if (l <= 0 || a <= 0 || Math.abs(l - a) > 0.03 * l)
        return _("window still does not match the window geometry", {
            image: { width: r.naturalWidth, height: r.naturalHeight },
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
                        let [l, a, o] = r.getImageData(0, 0, 1, 1).data;
                        return l > 150 && o > 150 && a < Math.min(l, o) - 80;
                    })(e, Math.round((t + 43) * n), Math.round((r + 43) * i))
                )
                    return { x: t, y: r };
        return null;
    })(r, n, l, a);
    if (null == o) return _("document not found inside the window still", { inset: n });
    let u = Math.max(0, Math.floor((o.x + t.left) * l)),
        s = Math.max(0, Math.floor((o.y + t.top) * a)),
        d = Math.min(r.naturalWidth - u, Math.round(t.width * l)),
        c = Math.min(r.naturalHeight - s, Math.round(t.height * a));
    if (d < 1 || c < 1) return _("crop resolved empty");
    let f = Math.min(1, 1568 / Math.max(d, c), Math.sqrt(115e4 / (d * c))),
        h = Math.max(1, Math.round(d * f)),
        p = Math.max(1, Math.round(c * f)),
        g = document.createElement("canvas");
    ((g.width = h), (g.height = p));
    let m = g.getContext("2d");
    if (null == m) return _("no 2d context");
    m.drawImage(r, u, s, d, c, 0, 0, h, p);
    let w = `image/${i?.format ?? "webp"}`,
        E = i?.quality == null ? 0.92 : Math.min(1, Math.max(0, i.quality / 100)),
        y = await new Promise((e) => g.toBlob(e, w, E));
    return null == y || y.type !== w
        ? _("encode failed", { type: w })
        : y.size > 5242880
          ? _("encoded capture too large", { bytes: y.size })
          : { blob: y, scale: (h / t.width + p / t.height) / 2 };
}
async function I(e, t) {
    try {
        var n, i, r;
        let l;
        if (null == window.DiscordNative) return _("not the desktop app");
        if (
            ((n = t.spec),
            null != n &&
                "viewport" !==
                    (n.mode ??
                        (null != (i = n.target) &&
                        ((null != i.ref && "" !== i.ref) || (null != i.selector && "" !== i.selector))
                            ? "element"
                            : null != (r = n.rect) && r.width > 0 && r.height > 0
                              ? "rect"
                              : "viewport")))
        )
            return _("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return _("window not visible");
        let a = E(e);
        if (null == a) return _("frame not fully on screen");
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
            })(e, a)
        )
            return _("frame is covered");
        let o = {
                x: Math.max(0, window.outerWidth - window.innerWidth),
                y: Math.max(0, window.outerHeight - window.innerHeight),
            },
            u = o.x > 2 || o.y > 2 ? await b() : null;
        try {
            l = await y(a);
        } finally {
            u?.();
        }
        if (null == l) return null;
        let s = E(e);
        if (
            null == s ||
            Math.abs(s.left - a.left) > 1 ||
            Math.abs(s.top - a.top) > 1 ||
            Math.abs(s.width - a.width) > 1 ||
            Math.abs(s.height - a.height) > 1
        )
            return _("frame moved or resized during capture");
        let d = await v(l, a, o, t.spec);
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
        if (null == c) return _("frame has no resolvable upload url");
        let f = {
                mode: "viewport",
                bounds: { x: 0, y: 0, width: Math.round(a.width), height: Math.round(a.height) },
                viewport: { width: Math.round(a.width), height: Math.round(a.height) },
                scale: Math.round(1e3 * d.scale) / 1e3,
                devicePixelRatio: window.devicePixelRatio,
                formFactor: a.width <= 768 ? "narrow" : "wide",
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
        if (!p.ok) return _("upload refused", { status: p.status });
        return (
            w.verbose("native capture uploaded", { id: t.captureId, bytes: d.blob.size, scale: f.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return _("threw", { err: e });
    }
}
var A = n(251363),
    T = n(399503),
    R = n(192888),
    C = n(853555),
    x = n(809685),
    O = n(777977),
    P = n(484697);
(n(321073), n(667532));
var N = n(112420),
    S = n(652215);
function M(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let j = {
    [S.e$_.OPEN_CONTEXT_MENU]: (e) =>
        "custom" !== e.args.type
            ? { result: { opened: !0 }, answered: "opened, no selection to make" }
            : {
                  result: { opened: !0, selected_id: null },
                  answered: "dismissed",
                  options: (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let i of t) {
                          if (n.length >= 40) break;
                          if (null == i || "object" != typeof i) continue;
                          let t = M(i.id);
                          (null != t && n.push(t), e(i.items, n));
                      }
                      return n;
                  })(e.args.items),
              },
    [S.e$_.SHOW_CONFIRM_MODAL]: (e) => ({
        result: "confirm" === e.args.type ? { confirmed: !1 } : { acknowledged: !1 },
        answered: "dismissed",
        subject: M(e.args.title),
    }),
    [S.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: M(e.args.url),
    }),
    [S.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: M(e.args.preview_title) ?? M(e.args.content),
    }),
    [S.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [S.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [S.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [S.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [S.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [S.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [S.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [S.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(j);
let k = { drain: () => [], end: () => {}, iframeId: null },
    D = [];
function U(e) {
    let t = D.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = j[e.cmd];
    if (null == n) return null;
    let { result: i, answered: r, options: l, subject: a } = n(e);
    return (
        t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: r,
                ...(null != l && l.length > 0 ? { options: l } : {}),
                ...(null != a ? { subject: a } : {}),
            }),
        { result: i }
    );
}
function L(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, P.lw)(t) ?? null);
}
function W(e, t) {
    var n = L(e);
    if (null == n) return k;
    let i = { iframeId: n, recorded: [] };
    return (
        t?.beneathBatches === !0 ? D.push(i) : D.unshift(i),
        1 === D.length && (0, N.C)(U),
        {
            iframeId: n,
            drain: () => i.recorded.splice(0, i.recorded.length),
            end: () => {
                let e = D.indexOf(i);
                -1 !== e && (D.splice(e, 1), 0 === D.length && (0, N.C)(null));
            },
        }
    );
}
var J = n(873715),
    F = n(226178),
    G = n(165610);
async function B(e) {
    let { onClose: t, ...i } = e,
        { openOAuth2Modal: r } = await Promise.resolve().then(n.bind(n, 887909));
    r((0, F.i)(i), t);
}
async function H(e, t, n) {
    let { probe: i, spec: r, build: l, onAccepted: a, resolveUploadUrl: o } = n;
    if (!0 === i) return { status: (0, C.rQ)(e) ? "accepted" : "unavailable" };
    if (r?.mode === "widget") return await (0, T.K)(e, { captureId: t, build: l, onAccepted: a, resolveUploadUrl: o });
    let u = await (0, C.o$)(e, 6e3);
    if (null == u) return { status: "unavailable" };
    let s = null == a ? { uploadToken: void 0 } : await a();
    if (null == s) return { status: "unavailable" };
    let d = await I(u, { captureId: t, spec: r, build: l, uploadToken: s.uploadToken });
    return null != d ? d : await (0, A.i)(u, t, r, s.uploadToken);
}
async function $(e, t, n, i) {
    if (!(0, C.rQ)(e)) return { status: "unavailable" };
    let r = (0, d.Wg)(e);
    try {
        let r = await (0, C.o$)(e, 6e3);
        if (null == r) return { status: "unavailable" };
        let l = await i?.();
        if (!1 === l) return { status: "unavailable" };
        let a = W(r);
        try {
            let i = await (0, J.J)(r, t, n);
            if ("completed" !== i.status) return i;
            let l = [...V.drain(e), ...a.drain()];
            if (0 === l.length) return i;
            return { ...i, response: { ...i.response, native: l } };
        } finally {
            a.end();
        }
    } finally {
        r();
    }
}
let V = (function (e) {
    let t = new Map();
    function n(e) {
        let n = t.get(e);
        (null != n && (t.delete(e), c("closing the operation session", () => n.end())), (0, d.YN)(e));
    }
    return {
        begin: function (i) {
            (0, d.oJ)(i);
            let r = e(i);
            if (null == r) return;
            let l = t.get(i);
            if (null != l) {
                if (null != l.iframeId && l.iframeId === r.identity) return;
                (t.delete(i), c("replacing a stale operation session", () => l.end()));
            }
            (c("dismissing what was left standing", () => r.dismiss()),
                c("opening the operation session", () => {
                    let e = r.open(),
                        l = (0, d.W3)(() => {
                            (0, d.wK)(i) || n(i);
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
    let t = (0, C.UJ)(e);
    return null == t
        ? null
        : {
              identity: L(t),
              dismiss: () =>
                  (function (e) {
                      let t = e.contentWindow;
                      if (null == t) return;
                      let n = (0, P.lw)(t);
                      null != n && ((0, x.ir)(n), (0, O.OR)(n));
                  })(t),
              open: () => W(t, { beneathBatches: !0 }),
          };
});
(0, d.h2)((e) => {
    let t = (0, C.UJ)(e);
    null != t &&
        (0, R.W)(
            t,
            "control-end",
            {},
            { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
        ).catch(() => {});
});
let z = {
    openConjureAppInstallModal: B,
    isWindowFocused: function () {
        return u.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return o.A.getDesktopType() === S.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { title: t, body: r, route: l, sound: o, volume: u } = e;
        i.default.showNotification(
            n(608598),
            t,
            r,
            { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
            {
                sound: o,
                volume: u,
                fallbackDeepLink: null == l ? void 0 : (0, s.Id)(l),
                onClick: null == l ? void 0 : () => (0, a.pX)(l),
                isUserAvatar: !1,
            },
        );
    },
    relayPreviewCapture: H,
    relayPreviewControl: $,
    abortPreviewControl: function (e) {
        let t = (0, C.UJ)(e);
        null != t &&
            (0, R.W)(
                t,
                "control-abort",
                {},
                { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control abort" },
            ).catch(() => {});
    },
    beginPreviewOperation: function (e) {
        V.begin(e);
    },
    endPreviewOperation: function (e) {
        V.end(e);
    },
    releasePreviewControl: function (e) {
        (0, d.GU)(e);
    },
    reloadAppFrames: function (e) {
        if (null != e)
            for (let t of l.A.getAllFrames())
                (0, G.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && r.A.refreshProxyTicket(t.id);
    },
};
