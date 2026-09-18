n.d(t, { A: () => Q });
var i = n(485845),
    r = n(179771),
    l = n(136722),
    s = n(264686),
    o = n(976860),
    a = n(803224),
    u = n(531685),
    d = n(479975);
(n(323874), n(14289), n(35956));
var c = n(141931),
    f = n(941426),
    h = n(475735),
    p = n(544576),
    g = n(731854);
let w = new f.Vy("VibegrationsNativeCapture");
function m(e, t) {
    return (w.verbose(`native capture not used: ${e}`, t ?? {}), null);
}
function v(e) {
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
async function _(e) {
    let t = window.DiscordNative,
        n = await t?.window?.getMediaSourceId?.();
    if (null == n) return m("no media source id for our own window");
    let i = n.split(":")[1];
    if (null == i || "" === i) return m("unrecognized media source id", { sourceId: n });
    let r = Math.min(
            window.devicePixelRatio,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        l = Math.ceil(window.outerWidth * r),
        s = Math.ceil(window.outerHeight * r),
        o = p.Ay.getMediaEngine();
    if (o.supports(g.O5.WINDOW_PREVIEWS))
        try {
            let e = h.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
                t = await o.getSingleWindowPreview(i, l, s, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let a = await t?.desktopCapture?.getDesktopCaptureSources({
            types: [c.fS.WINDOW],
            thumbnailSize: { width: l, height: s },
        }),
        u = a?.find((e) => e.id.split(":")[1] === i);
    return null == u || "" === u.url ? m("own window missing from capture sources") : u.url;
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
async function A(e, t, n) {
    let i = new Image();
    if (((i.decoding = "async"), (i.src = e), await i.decode(), 0 === i.naturalWidth || 0 === i.naturalHeight))
        return m("window still decoded empty");
    let r = i.naturalWidth / window.outerWidth,
        l = i.naturalHeight / window.outerHeight;
    if (r <= 0 || l <= 0 || Math.abs(r - l) > 0.03 * r)
        return m("window still does not match the window geometry", {
            image: { width: i.naturalWidth, height: i.naturalHeight },
            window: { width: window.outerWidth, height: window.outerHeight },
        });
    let s = (function (e, t, n, i) {
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
                        let [l, s, o] = r.getImageData(0, 0, 1, 1).data;
                        return l > 150 && o > 150 && s < Math.min(l, o) - 80;
                    })(e, Math.round((t + 43) * n), Math.round((r + 43) * i))
                )
                    return { x: t, y: r };
        return null;
    })(i, n, r, l);
    if (null == s) return m("document not found inside the window still", { inset: n });
    let o = Math.max(0, Math.floor((s.x + t.left) * r)),
        a = Math.max(0, Math.floor((s.y + t.top) * l)),
        u = Math.min(i.naturalWidth - o, Math.round(t.width * r)),
        d = Math.min(i.naturalHeight - a, Math.round(t.height * l));
    if (u < 1 || d < 1) return m("crop resolved empty");
    let c = Math.min(1, 1568 / Math.max(u, d), Math.sqrt(115e4 / (u * d))),
        f = Math.max(1, Math.round(u * c)),
        h = Math.max(1, Math.round(d * c)),
        p = document.createElement("canvas");
    ((p.width = f), (p.height = h));
    let g = p.getContext("2d");
    if (null == g) return m("no 2d context");
    g.drawImage(i, o, a, u, d, 0, 0, f, h);
    let w = await new Promise((e) => p.toBlob(e, "image/webp", 0.92));
    return null == w || "image/webp" !== w.type
        ? m("webp encode failed")
        : w.size > 5242880
          ? m("encoded capture too large", { bytes: w.size })
          : { blob: w, scale: (f / t.width + h / t.height) / 2 };
}
async function I(e, t) {
    try {
        var n, i, r;
        let l;
        if (null == window.DiscordNative) return m("not the desktop app");
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
            return m("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return m("window not visible");
        let s = v(e);
        if (null == s) return m("frame not fully on screen");
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
            })(e, s)
        )
            return m("frame is covered");
        let o = {
                x: Math.max(0, window.outerWidth - window.innerWidth),
                y: Math.max(0, window.outerHeight - window.innerHeight),
            },
            a = o.x > 2 || o.y > 2 ? await b() : null;
        try {
            l = await _(s);
        } finally {
            a?.();
        }
        if (null == l) return null;
        let u = v(e);
        if (
            null == u ||
            Math.abs(u.left - s.left) > 1 ||
            Math.abs(u.top - s.top) > 1 ||
            Math.abs(u.width - s.width) > 1 ||
            Math.abs(u.height - s.height) > 1
        )
            return m("frame moved or resized during capture");
        let d = await A(l, s, o);
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
        if (null == c) return m("frame has no resolvable upload url");
        let f = {
                mode: "viewport",
                bounds: { x: 0, y: 0, width: Math.round(s.width), height: Math.round(s.height) },
                viewport: { width: Math.round(s.width), height: Math.round(s.height) },
                scale: Math.round(1e3 * d.scale) / 1e3,
                devicePixelRatio: window.devicePixelRatio,
                formFactor: s.width <= 768 ? "narrow" : "wide",
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
        if (!p.ok) return m("upload refused", { status: p.status });
        return (
            w.verbose("native capture uploaded", { id: t.captureId, bytes: d.blob.size, scale: f.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return m("threw", { err: e });
    }
}
var T = n(120426),
    y = n(320510),
    S = n(171936);
(n(321073), n(667532));
var E = n(809685),
    M = n(777977),
    O = n(112420),
    k = n(484697),
    N = n(652215);
function C(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let R = {
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
Object.keys(R);
let P = { drain: () => [], end: () => {}, iframeId: null };
function x(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, k.lw)(t) ?? null);
}
let D = [];
function L(e) {
    let t = D.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = R[e.cmd];
    if (null == n) return null;
    let { result: i, answered: r, options: l, subject: s } = n(e, t.answers);
    return (
        t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: r,
                ...(null != l && l.length > 0 ? { options: l } : {}),
                ...(null != s ? { subject: s } : {}),
            }),
        { result: i }
    );
}
function B(e, t, n) {
    let i = x(e);
    if (null == i) return P;
    let r = { iframeId: i, answers: t ?? {}, recorded: [] };
    return (
        n?.beneathBatches === !0 ? D.push(r) : D.unshift(r),
        1 === D.length && (0, O.C)(L),
        {
            iframeId: i,
            drain: () => r.recorded.splice(0, r.recorded.length),
            end: () => {
                let e = D.indexOf(r);
                -1 !== e && (D.splice(e, 1), 0 === D.length && (0, O.C)(null));
            },
        }
    );
}
var V = n(948230),
    H = n(805332),
    W = n(796036);
function q(e) {
    let t = (0, S.J8)(e);
    if (null == t) return null;
    let n = t.getBoundingClientRect();
    return n.width < 1 || n.height < 1 ? null : { width: Math.round(n.width), height: Math.round(n.height) };
}
async function G(e, t) {
    let n = q(e);
    if (null == n)
        return {
            ok: !1,
            mode: t,
            width: 0,
            height: 0,
            code: "unavailable",
            message: "no preview frame is on screen for this project",
        };
    if (null == H.A.getBuilderPreviewApplicationId() && !(0, W.h)(e))
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
        let l = q(e);
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
var $ = n(559676);
let F = [r.F.BOT, r.F.APPLICATIONS_COMMANDS];
async function U(e) {
    let { applicationId: t, application: r, guildId: s, onClose: o } = e,
        a = r?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? r?.installParams,
        [{ openOAuth2Modal: u }, { fetchProfile: d }] = await Promise.all([
            Promise.resolve().then(n.bind(n, 887909)),
            Promise.resolve().then(n.bind(n, 803306)),
        ]);
    u(
        {
            clientId: t,
            guildId: s,
            disableGuildSelect: !0,
            integrationType: i.b.GUILD_INSTALL,
            scopes: a?.scopes ?? F,
            permissions: a?.permissions != null ? l.iu(a.permissions) : void 0,
            callback: () => !0,
        },
        () => {
            (o?.(), d(t, { withMutualGuilds: !0 }));
        },
    );
}
async function j(e, t, n) {
    let { probe: i, spec: r, build: l, onAccepted: s } = n ?? {};
    if (!0 === i) return { status: (0, S.EA)(e) ? "accepted" : "unavailable" };
    let o = await (0, S.ZW)(e, 6e3);
    if (null == o) return { status: "unavailable" };
    let a = null == s ? { uploadToken: void 0 } : await s();
    if (null == a) return { status: "unavailable" };
    let u = await I(o, { captureId: t, spec: r, build: l, uploadToken: a.uploadToken });
    return null != u ? u : await (0, T.x)(o, t, r, a.uploadToken);
}
async function z(e, t, n, i) {
    if (!(0, S.EA)(e)) return { status: "unavailable" };
    let r = (0, $.t_)(e);
    try {
        let r = await (0, S.ZW)(e, 6e3);
        if (null == r) return { status: "unavailable" };
        let l = await i?.();
        if (!1 === l) return { status: "unavailable" };
        if (null != n.viewport) {
            let t = await G(e, n.viewport);
            if (!t.ok) return { status: "failed", message: t.message ?? "the preview lens did not change" };
        }
        let s = B(r, n.native);
        try {
            let i = await (0, y.S)(r, t, n);
            if ("completed" !== i.status) return i;
            let l = [...(X.get(e)?.drain() ?? []), ...s.drain()];
            if (0 === l.length) return i;
            return { ...i, response: { ...i.response, native: l } };
        } finally {
            s.end();
        }
    } finally {
        r();
    }
}
let X = new Map();
function Y(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
}
function J(e) {
    let t = X.get(e);
    (null != t && (X.delete(e), Y("closing the operation session", () => t.end())), (0, $.Rh)(e));
}
let Q = {
    openVibegrationsAppInstallModal: U,
    isWindowFocused: function () {
        return u.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return a.A.getDesktopType() === N.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { projectId: t, title: i, body: r, route: l, sound: a, volume: u } = e;
        s.default.showNotification(
            n(608598),
            i,
            r,
            { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
            {
                tag: `vibegrations-${t}`,
                sound: a,
                volume: u,
                fallbackDeepLink: null == l ? void 0 : (0, d.I)(l),
                onClick: null == l ? void 0 : () => (0, o.pX)(l),
                isUserAvatar: !1,
            },
        );
    },
    relayPreviewCapture: j,
    relayPreviewControl: z,
    beginPreviewOperation: function (e) {
        (0, $.BP)(e);
        let t = (0, S.J8)(e);
        if (null == t) return;
        let n = x(t),
            i = X.get(e);
        if (null != i) {
            if (null != i.iframeId && i.iframeId === n) return;
            (X.delete(e), Y("replacing a stale operation session", () => i.end()));
        }
        (Y("dismissing what was left standing", () =>
            (function (e) {
                let t = e.contentWindow;
                if (null == t) return;
                let n = (0, k.lw)(t);
                null != n && ((0, E.ir)(n), (0, M.OR)(n));
            })(t),
        ),
            Y("opening the operation session", () => {
                let n = B(t, void 0, { beneathBatches: !0 }),
                    i = (0, $.FQ)(() => {
                        (0, $.RW)(e) || J(e);
                    });
                X.set(e, {
                    iframeId: n.iframeId,
                    drain: () => n.drain(),
                    end: () => {
                        (i(), n.end());
                    },
                });
            }));
    },
    endPreviewOperation: J,
    releasePreviewControl: function (e) {
        (0, $.xm)(e);
    },
};
