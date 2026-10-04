n.d(t, { A: () => Y });
var i = n(264686),
    r = n(625180),
    l = n(91242),
    a = n(976860),
    o = n(803224),
    s = n(531685),
    u = n(479975);
(n(323874), n(14289), n(35956));
var d = n(141931),
    c = n(941426),
    f = n(475735),
    h = n(25578),
    p = n(731854);
let g = new c.Vy("VibegrationsNativeCapture");
function _(e, t) {
    return (g.verbose(`native capture not used: ${e}`, t ?? {}), null);
}
function m(e) {
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
async function w(e) {
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
        o = h.Ay.getMediaEngine();
    if (o.supports(p.O5.WINDOW_PREVIEWS))
        try {
            let e = f.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
                t = await o.getSingleWindowPreview(i, l, a, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let s = await t?.desktopCapture?.getDesktopCaptureSources({
            types: [d.fS.WINDOW],
            thumbnailSize: { width: l, height: a },
        }),
        u = s?.find((e) => e.id.split(":")[1] === i);
    return null == u || "" === u.url ? _("own window missing from capture sources") : u.url;
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
        return _("window still decoded empty");
    let r = i.naturalWidth / window.outerWidth,
        l = i.naturalHeight / window.outerHeight;
    if (r <= 0 || l <= 0 || Math.abs(r - l) > 0.03 * r)
        return _("window still does not match the window geometry", {
            image: { width: i.naturalWidth, height: i.naturalHeight },
            window: { width: window.outerWidth, height: window.outerHeight },
        });
    let a = (function (e, t, n, i) {
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
    })(i, n, r, l);
    if (null == a) return _("document not found inside the window still", { inset: n });
    let o = Math.max(0, Math.floor((a.x + t.left) * r)),
        s = Math.max(0, Math.floor((a.y + t.top) * l)),
        u = Math.min(i.naturalWidth - o, Math.round(t.width * r)),
        d = Math.min(i.naturalHeight - s, Math.round(t.height * l));
    if (u < 1 || d < 1) return _("crop resolved empty");
    let c = Math.min(1, 1568 / Math.max(u, d), Math.sqrt(115e4 / (u * d))),
        f = Math.max(1, Math.round(u * c)),
        h = Math.max(1, Math.round(d * c)),
        p = document.createElement("canvas");
    ((p.width = f), (p.height = h));
    let g = p.getContext("2d");
    if (null == g) return _("no 2d context");
    g.drawImage(i, o, s, u, d, 0, 0, f, h);
    let m = await new Promise((e) => p.toBlob(e, "image/webp", 0.92));
    return null == m || "image/webp" !== m.type
        ? _("webp encode failed")
        : m.size > 5242880
          ? _("encoded capture too large", { bytes: m.size })
          : { blob: m, scale: (f / t.width + h / t.height) / 2 };
}
async function A(e, t) {
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
                        ((null != i.ref && "" !== i.ref) ||
                            (null != i.selector && "" !== i.selector) ||
                            (null != i.text && "" !== i.text))
                            ? "element"
                            : null != (r = n.rect) && r.width > 0 && r.height > 0
                              ? "rect"
                              : "viewport")))
        )
            return _("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return _("window not visible");
        let a = m(e);
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
            s = o.x > 2 || o.y > 2 ? await E() : null;
        try {
            l = await w(a);
        } finally {
            s?.();
        }
        if (null == l) return null;
        let u = m(e);
        if (
            null == u ||
            Math.abs(u.left - a.left) > 1 ||
            Math.abs(u.top - a.top) > 1 ||
            Math.abs(u.width - a.width) > 1 ||
            Math.abs(u.height - a.height) > 1
        )
            return _("frame moved or resized during capture");
        let d = await I(l, a, o);
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
            g.verbose("native capture uploaded", { id: t.captureId, bytes: d.blob.size, scale: f.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return _("threw", { err: e });
    }
}
var T = n(120426),
    v = n(860713),
    y = n(320510),
    b = n(227189),
    R = n(940107),
    S = n(171936),
    O = n(809685),
    C = n(777977),
    N = n(484697);
(n(321073), n(667532));
var x = n(112420),
    P = n(652215);
function k(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let M = {
    [P.e$_.OPEN_CONTEXT_MENU]: (e, t) => {
        let n = "custom" === e.args.type,
            i = n
                ? (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let i of t) {
                          if (n.length >= 40) break;
                          if (null == i || "object" != typeof i) continue;
                          let t = k(i.id);
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
    [P.e$_.SHOW_CONFIRM_MODAL]: (e, t) => {
        let n = !0 === t.confirm,
            i = k(e.args.title);
        return {
            result: "confirm" === e.args.type ? { confirmed: n } : { acknowledged: n },
            answered: n ? "confirmed" : "dismissed",
            subject: i,
        };
    },
    [P.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: k(e.args.url),
    }),
    [P.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: k(e.args.preview_title) ?? k(e.args.content),
    }),
    [P.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [P.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [P.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [P.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [P.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [P.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [P.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [P.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(M);
let j = { drain: () => [], end: () => {}, iframeId: null },
    D = [];
function B(e) {
    let t = D.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = M[e.cmd];
    if (null == n) return null;
    let { result: i, answered: r, options: l, subject: a } = n(e, t.answers);
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
function G(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, N.lw)(t) ?? null);
}
function L(e, t, n) {
    var i = G(e);
    if (null == i) return j;
    let r = { iframeId: i, answers: t ?? {}, recorded: [] };
    return (
        n?.beneathBatches === !0 ? D.push(r) : D.unshift(r),
        1 === D.length && (0, x.C)(B),
        {
            iframeId: i,
            drain: () => r.recorded.splice(0, r.recorded.length),
            end: () => {
                let e = D.indexOf(r);
                -1 !== e && (D.splice(e, 1), 0 === D.length && (0, x.C)(null));
            },
        }
    );
}
var W = n(948230),
    U = n(805332),
    V = n(796036);
function F(e) {
    let t = (0, S.J8)(e);
    if (null == t) return null;
    let n = t.getBoundingClientRect();
    return n.width < 1 || n.height < 1 ? null : { width: Math.round(n.width), height: Math.round(n.height) };
}
async function H(e, t) {
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
    if (null == U.A.getBuilderPreviewApplicationId() && !(0, V.h)(e))
        return {
            ok: !1,
            mode: t,
            ...n,
            code: "unavailable",
            message:
                "the phone/desktop lens is the Conjure builder header's, and this preview is not the builder screen's \u2014 open the app preview there to switch it",
        };
    (0, W.GG)("phone" === t);
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
var q = n(559676);
function J(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
}
var $ = n(165610);
async function z(e) {
    let { onClose: t, ...i } = e,
        { openOAuth2Modal: r } = await Promise.resolve().then(n.bind(n, 887909));
    r((0, b.p)(i), t);
}
async function K(e, t, n) {
    let { probe: i, spec: r, build: l, onAccepted: a, resolveUploadUrl: o } = n;
    if (!0 === i) return { status: (0, S.EA)(e) ? "accepted" : "unavailable" };
    if (r?.mode === "widget") return await (0, v.D)(e, { captureId: t, build: l, onAccepted: a, resolveUploadUrl: o });
    let s = await (0, S.ZW)(e, 6e3);
    if (null == s) return { status: "unavailable" };
    let u = null == a ? { uploadToken: void 0 } : await a();
    if (null == u) return { status: "unavailable" };
    let d = await A(s, { captureId: t, spec: r, build: l, uploadToken: u.uploadToken });
    return null != d ? d : await (0, T.x)(s, t, r, u.uploadToken);
}
async function Z(e, t, n, i) {
    if (!(0, S.EA)(e)) return { status: "unavailable" };
    let r = (0, q.t_)(e);
    try {
        let r = await (0, S.ZW)(e, 6e3);
        if (null == r) return { status: "unavailable" };
        let l = await i?.();
        if (!1 === l) return { status: "unavailable" };
        if (null != n.viewport) {
            let t = await H(e, n.viewport);
            if (!t.ok) return { status: "failed", message: t.message ?? "the preview lens did not change" };
        }
        let a = L(r, n.native);
        try {
            let i = await (0, y.S)(r, t, n);
            if ("completed" !== i.status) return i;
            let l = [...X.drain(e), ...a.drain()];
            if (0 === l.length) return i;
            return { ...i, response: { ...i.response, native: l } };
        } finally {
            a.end();
        }
    } finally {
        r();
    }
}
let X = (function (e) {
    let t = new Map();
    function n(e) {
        let n = t.get(e);
        (null != n && (t.delete(e), J("closing the operation session", () => n.end())), (0, q.Rh)(e));
    }
    return {
        begin: function (i) {
            (0, q.BP)(i);
            let r = e(i);
            if (null == r) return;
            let l = t.get(i);
            if (null != l) {
                if (null != l.iframeId && l.iframeId === r.identity) return;
                (t.delete(i), J("replacing a stale operation session", () => l.end()));
            }
            (J("dismissing what was left standing", () => r.dismiss()),
                J("opening the operation session", () => {
                    let e = r.open(),
                        l = (0, q.FQ)(() => {
                            (0, q.RW)(i) || n(i);
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
    let t = (0, S.J8)(e);
    return null == t
        ? null
        : {
              identity: G(t),
              dismiss: () =>
                  (function (e) {
                      let t = e.contentWindow;
                      if (null == t) return;
                      let n = (0, N.lw)(t);
                      null != n && ((0, O.ir)(n), (0, C.OR)(n));
                  })(t),
              open: () => L(t, void 0, { beneathBatches: !0 }),
          };
});
(0, q.Qg)((e) => {
    let t = (0, S.J8)(e);
    null != t &&
        (0, R.W)(
            t,
            "control-end",
            {},
            { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
        ).catch(() => {});
});
let Y = {
    openVibegrationsAppInstallModal: z,
    isWindowFocused: function () {
        return s.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return o.A.getDesktopType() === P.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { title: t, body: r, route: l, sound: o, volume: s } = e;
        i.default.showNotification(
            n(608598),
            t,
            r,
            { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
            {
                sound: o,
                volume: s,
                fallbackDeepLink: null == l ? void 0 : (0, u.Id)(l),
                onClick: null == l ? void 0 : () => (0, a.pX)(l),
                isUserAvatar: !1,
            },
        );
    },
    relayPreviewCapture: K,
    relayPreviewControl: Z,
    abortPreviewControl: function (e) {
        let t = (0, S.J8)(e);
        null != t &&
            (0, R.W)(
                t,
                "control-abort",
                {},
                { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control abort" },
            ).catch(() => {});
    },
    beginPreviewOperation: function (e) {
        X.begin(e);
    },
    endPreviewOperation: function (e) {
        X.end(e);
    },
    releasePreviewControl: function (e) {
        (0, q.xm)(e);
    },
    reloadAppFrames: function (e) {
        if (null != e)
            for (let t of l.A.getAllFrames())
                (0, $.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && r.A.refreshProxyTicket(t.id);
    },
};
