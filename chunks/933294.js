n.d(t, { A: () => Q });
var i = n(485845),
    r = n(179771),
    l = n(136722),
    o = n(264686),
    s = n(625180),
    u = n(91242),
    a = n(976860),
    d = n(803224),
    c = n(531685),
    f = n(479975);
(n(323874), n(14289), n(35956));
var h = n(141931),
    p = n(941426),
    _ = n(475735),
    g = n(544576),
    w = n(731854);
let m = new p.Vy("VibegrationsNativeCapture");
function E(e, t) {
    return (m.verbose(`native capture not used: ${e}`, t ?? {}), null);
}
function I(e) {
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
async function T(e) {
    let t = window.DiscordNative,
        n = await t?.window?.getMediaSourceId?.();
    if (null == n) return E("no media source id for our own window");
    let i = n.split(":")[1];
    if (null == i || "" === i) return E("unrecognized media source id", { sourceId: n });
    let r = Math.min(
            window.devicePixelRatio,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        l = Math.ceil(window.outerWidth * r),
        o = Math.ceil(window.outerHeight * r),
        s = g.Ay.getMediaEngine();
    if (s.supports(w.O5.WINDOW_PREVIEWS))
        try {
            let e = _.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
                t = await s.getSingleWindowPreview(i, l, o, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let u = await t?.desktopCapture?.getDesktopCaptureSources({
            types: [h.fS.WINDOW],
            thumbnailSize: { width: l, height: o },
        }),
        a = u?.find((e) => e.id.split(":")[1] === i);
    return null == a || "" === a.url ? E("own window missing from capture sources") : a.url;
}
async function A() {
    let e = document.createElement("div");
    return (
        (e.style.cssText =
            "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
        document.body.appendChild(e),
        await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
        () => e.remove()
    );
}
async function S(e, t, n) {
    let i = new Image();
    if (((i.decoding = "async"), (i.src = e), await i.decode(), 0 === i.naturalWidth || 0 === i.naturalHeight))
        return E("window still decoded empty");
    let r = i.naturalWidth / window.outerWidth,
        l = i.naturalHeight / window.outerHeight;
    if (r <= 0 || l <= 0 || Math.abs(r - l) > 0.03 * r)
        return E("window still does not match the window geometry", {
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
    if (null == o) return E("document not found inside the window still", { inset: n });
    let s = Math.max(0, Math.floor((o.x + t.left) * r)),
        u = Math.max(0, Math.floor((o.y + t.top) * l)),
        a = Math.min(i.naturalWidth - s, Math.round(t.width * r)),
        d = Math.min(i.naturalHeight - u, Math.round(t.height * l));
    if (a < 1 || d < 1) return E("crop resolved empty");
    let c = Math.min(1, 1568 / Math.max(a, d), Math.sqrt(115e4 / (a * d))),
        f = Math.max(1, Math.round(a * c)),
        h = Math.max(1, Math.round(d * c)),
        p = document.createElement("canvas");
    ((p.width = f), (p.height = h));
    let _ = p.getContext("2d");
    if (null == _) return E("no 2d context");
    _.drawImage(i, s, u, a, d, 0, 0, f, h);
    let g = await new Promise((e) => p.toBlob(e, "image/webp", 0.92));
    return null == g || "image/webp" !== g.type
        ? E("webp encode failed")
        : g.size > 5242880
          ? E("encoded capture too large", { bytes: g.size })
          : { blob: g, scale: (f / t.width + h / t.height) / 2 };
}
async function v(e, t) {
    try {
        var n, i, r;
        let l;
        if (null == window.DiscordNative) return E("not the desktop app");
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
            return E("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return E("window not visible");
        let o = I(e);
        if (null == o) return E("frame not fully on screen");
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
            return E("frame is covered");
        let s = {
                x: Math.max(0, window.outerWidth - window.innerWidth),
                y: Math.max(0, window.outerHeight - window.innerHeight),
            },
            u = s.x > 2 || s.y > 2 ? await A() : null;
        try {
            l = await T(o);
        } finally {
            u?.();
        }
        if (null == l) return null;
        let a = I(e);
        if (
            null == a ||
            Math.abs(a.left - o.left) > 1 ||
            Math.abs(a.top - o.top) > 1 ||
            Math.abs(a.width - o.width) > 1 ||
            Math.abs(a.height - o.height) > 1
        )
            return E("frame moved or resized during capture");
        let d = await S(l, o, s);
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
        if (null == c) return E("frame has no resolvable upload url");
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
        if (!p.ok) return E("upload refused", { status: p.status });
        return (
            m.verbose("native capture uploaded", { id: t.captureId, bytes: d.blob.size, scale: f.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return E("threw", { err: e });
    }
}
var y = n(120426),
    R = n(320510),
    O = n(171936),
    b = n(809685),
    k = n(777977),
    N = n(484697);
(n(321073), n(667532));
var P = n(112420),
    C = n(652215);
function M(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let B = {
    [C.e$_.OPEN_CONTEXT_MENU]: (e, t) => {
        let n = "custom" === e.args.type,
            i = n
                ? (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let i of t) {
                          if (n.length >= 40) break;
                          if (null == i || "object" != typeof i) continue;
                          let t = M(i.id);
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
    [C.e$_.SHOW_CONFIRM_MODAL]: (e, t) => {
        let n = !0 === t.confirm,
            i = M(e.args.title);
        return {
            result: "confirm" === e.args.type ? { confirmed: n } : { acknowledged: n },
            answered: n ? "confirmed" : "dismissed",
            subject: i,
        };
    },
    [C.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: M(e.args.url),
    }),
    [C.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: M(e.args.preview_title) ?? M(e.args.content),
    }),
    [C.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [C.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [C.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [C.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [C.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [C.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [C.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [C.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(B);
let L = { drain: () => [], end: () => {}, iframeId: null },
    D = [];
function G(e) {
    let t = D.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = B[e.cmd];
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
function V(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, N.lw)(t) ?? null);
}
function x(e, t, n) {
    var i = V(e);
    if (null == i) return L;
    let r = { iframeId: i, answers: t ?? {}, recorded: [] };
    return (
        n?.beneathBatches === !0 ? D.push(r) : D.unshift(r),
        1 === D.length && (0, P.C)(G),
        {
            iframeId: i,
            drain: () => r.recorded.splice(0, r.recorded.length),
            end: () => {
                let e = D.indexOf(r);
                -1 !== e && (D.splice(e, 1), 0 === D.length && (0, P.C)(null));
            },
        }
    );
}
var H = n(948230),
    F = n(805332),
    U = n(796036);
function W(e) {
    let t = (0, O.J8)(e);
    if (null == t) return null;
    let n = t.getBoundingClientRect();
    return n.width < 1 || n.height < 1 ? null : { width: Math.round(n.width), height: Math.round(n.height) };
}
async function j(e, t) {
    let n = W(e);
    if (null == n)
        return {
            ok: !1,
            mode: t,
            width: 0,
            height: 0,
            code: "unavailable",
            message: "no preview frame is on screen for this project",
        };
    if (null == F.A.getBuilderPreviewApplicationId() && !(0, U.h)(e))
        return {
            ok: !1,
            mode: t,
            ...n,
            code: "unavailable",
            message:
                "the phone/desktop lens is the Conjure builder header's, and this preview is not the builder screen's \u2014 open the app preview there to switch it",
        };
    (0, H.GG)("phone" === t);
    let i = Date.now() + 2e3;
    for (;;) {
        var r;
        let l = W(e);
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
function $(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
}
var J = n(165610);
let z = [r.F.BOT, r.F.APPLICATIONS_COMMANDS];
async function Y(e) {
    let { applicationId: t, application: r, guildId: o, onClose: s } = e,
        u = r?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? r?.installParams,
        [{ openOAuth2Modal: a }, { fetchProfile: d }] = await Promise.all([
            Promise.resolve().then(n.bind(n, 887909)),
            Promise.resolve().then(n.bind(n, 803306)),
        ]);
    a(
        {
            clientId: t,
            guildId: o,
            disableGuildSelect: !0,
            integrationType: i.b.GUILD_INSTALL,
            scopes: u?.scopes ?? z,
            permissions: u?.permissions != null ? l.iu(u.permissions) : void 0,
            callback: () => !0,
        },
        () => {
            (s?.(), d(t, { withMutualGuilds: !0 }));
        },
    );
}
async function X(e, t, n) {
    let { probe: i, spec: r, build: l, onAccepted: o } = n ?? {};
    if (!0 === i) return { status: (0, O.EA)(e) ? "accepted" : "unavailable" };
    let s = await (0, O.ZW)(e, 6e3);
    if (null == s) return { status: "unavailable" };
    let u = null == o ? { uploadToken: void 0 } : await o();
    if (null == u) return { status: "unavailable" };
    let a = await v(s, { captureId: t, spec: r, build: l, uploadToken: u.uploadToken });
    return null != a ? a : await (0, y.x)(s, t, r, u.uploadToken);
}
async function Z(e, t, n, i) {
    if (!(0, O.EA)(e)) return { status: "unavailable" };
    let r = (0, q.t_)(e);
    try {
        let r = await (0, O.ZW)(e, 6e3);
        if (null == r) return { status: "unavailable" };
        let l = await i?.();
        if (!1 === l) return { status: "unavailable" };
        if (null != n.viewport) {
            let t = await j(e, n.viewport);
            if (!t.ok) return { status: "failed", message: t.message ?? "the preview lens did not change" };
        }
        let o = x(r, n.native);
        try {
            let i = await (0, R.S)(r, t, n);
            if ("completed" !== i.status) return i;
            let l = [...K.drain(e), ...o.drain()];
            if (0 === l.length) return i;
            return { ...i, response: { ...i.response, native: l } };
        } finally {
            o.end();
        }
    } finally {
        r();
    }
}
let K = (function (e) {
        let t = new Map();
        function n(e) {
            let n = t.get(e);
            (null != n && (t.delete(e), $("closing the operation session", () => n.end())), (0, q.Rh)(e));
        }
        return {
            begin: function (i) {
                (0, q.BP)(i);
                let r = e(i);
                if (null == r) return;
                let l = t.get(i);
                if (null != l) {
                    if (null != l.iframeId && l.iframeId === r.identity) return;
                    (t.delete(i), $("replacing a stale operation session", () => l.end()));
                }
                ($("dismissing what was left standing", () => r.dismiss()),
                    $("opening the operation session", () => {
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
        let t = (0, O.J8)(e);
        return null == t
            ? null
            : {
                  identity: V(t),
                  dismiss: () =>
                      (function (e) {
                          let t = e.contentWindow;
                          if (null == t) return;
                          let n = (0, N.lw)(t);
                          null != n && ((0, b.ir)(n), (0, k.OR)(n));
                      })(t),
                  open: () => x(t, void 0, { beneathBatches: !0 }),
              };
    }),
    Q = {
        openVibegrationsAppInstallModal: Y,
        isWindowFocused: function () {
            return c.A.isFocused();
        },
        areTurnNotificationsDisabled: function () {
            return d.A.getDesktopType() === C.nRU.NEVER;
        },
        presentTurnNotification: function (e) {
            let { projectId: t, title: i, body: r, route: l, sound: s, volume: u } = e;
            o.default.showNotification(
                n(608598),
                i,
                r,
                { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
                {
                    tag: `vibegrations-${t}`,
                    sound: s,
                    volume: u,
                    fallbackDeepLink: null == l ? void 0 : (0, f.I)(l),
                    onClick: null == l ? void 0 : () => (0, a.pX)(l),
                    isUserAvatar: !1,
                },
            );
        },
        relayPreviewCapture: X,
        relayPreviewControl: Z,
        beginPreviewOperation: function (e) {
            K.begin(e);
        },
        endPreviewOperation: function (e) {
            K.end(e);
        },
        releasePreviewControl: function (e) {
            (0, q.xm)(e);
        },
        reloadAppFrames: function (e) {
            if (null != e)
                for (let t of u.A.getAllFrames())
                    (0, J.x1)(t) &&
                        t.applicationId === e &&
                        !t.data.proxyTicketRefreshing &&
                        s.A.refreshProxyTicket(t.id);
        },
    };
