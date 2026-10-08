n.d(t, { A: () => z });
var r = n(264686),
    i = n(625180),
    l = n(91242),
    o = n(976860),
    a = n(803224),
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
    w = n(475735),
    p = n(192820),
    m = n(731854);
let g = new h.Vy("VibegrationsNativeCapture");
function b(e, t) {
    return (g.verbose(`native capture not used: ${e}`, t ?? {}), null);
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
async function y(e) {
    let t = window.DiscordNative,
        n = await t?.window?.getMediaSourceId?.();
    if (null == n) return b("no media source id for our own window");
    let r = n.split(":")[1];
    if (null == r || "" === r) return b("unrecognized media source id", { sourceId: n });
    let i = Math.min(
            window.devicePixelRatio,
            1,
            1568 / Math.max(e.width, e.height),
            Math.sqrt(115e4 / (e.width * e.height)),
        ),
        l = Math.ceil(window.outerWidth * i),
        o = Math.ceil(window.outerHeight * i),
        a = p.Ay.getMediaEngine();
    if (a.supports(m.O5.WINDOW_PREVIEWS))
        try {
            let e = w.O.getConfig({ location: "vibegrationsNativeCapture" }).enabled,
                t = await a.getSingleWindowPreview(r, l, o, e);
            if (null != t && "" !== t.url) return t.url;
        } catch {}
    let u = await t?.desktopCapture?.getDesktopCaptureSources({
            types: [f.fS.WINDOW],
            thumbnailSize: { width: l, height: o },
        }),
        s = u?.find((e) => e.id.split(":")[1] === r);
    return null == s || "" === s.url ? b("own window missing from capture sources") : s.url;
}
async function M() {
    let e = document.createElement("div");
    return (
        (e.style.cssText =
            "position:fixed;left:40px;top:40width:6px;height:6px;background:rgb(255,0,255);z-index:2147483647;pointer-events:none"),
        document.body.appendChild(e),
        await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))),
        () => e.remove()
    );
}
async function I(e, t, n, r) {
    let i = new Image();
    if (((i.decoding = "async"), (i.src = e), await i.decode(), 0 === i.naturalWidth || 0 === i.naturalHeight))
        return b("window still decoded empty");
    let l = i.naturalWidth / window.outerWidth,
        o = i.naturalHeight / window.outerHeight;
    if (l <= 0 || o <= 0 || Math.abs(l - o) > 0.03 * l)
        return b("window still does not match the window geometry", {
            image: { width: i.naturalWidth, height: i.naturalHeight },
            window: { width: window.outerWidth, height: window.outerHeight },
        });
    let a = (function (e, t, n, r) {
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
                        let [l, o, a] = i.getImageData(0, 0, 1, 1).data;
                        return l > 150 && a > 150 && o < Math.min(l, a) - 80;
                    })(e, Math.round((t + 43) * n), Math.round((i + 43) * r))
                )
                    return { x: t, y: i };
        return null;
    })(i, n, l, o);
    if (null == a) return b("document not found inside the window still", { inset: n });
    let u = Math.max(0, Math.floor((a.x + t.left) * l)),
        s = Math.max(0, Math.floor((a.y + t.top) * o)),
        d = Math.min(i.naturalWidth - u, Math.round(t.width * l)),
        c = Math.min(i.naturalHeight - s, Math.round(t.height * o));
    if (d < 1 || c < 1) return b("crop resolved empty");
    let f = Math.min(1, 1568 / Math.max(d, c), Math.sqrt(115e4 / (d * c))),
        h = Math.max(1, Math.round(d * f)),
        w = Math.max(1, Math.round(c * f)),
        p = document.createElement("canvas");
    ((p.width = h), (p.height = w));
    let m = p.getContext("2d");
    if (null == m) return b("no 2d context");
    m.drawImage(i, u, s, d, c, 0, 0, h, w);
    let g = `image/${r?.format ?? "webp"}`,
        v = r?.quality == null ? 0.92 : Math.min(1, Math.max(0, r.quality / 100)),
        y = await new Promise((e) => p.toBlob(e, g, v));
    return null == y || y.type !== g
        ? b("encode failed", { type: g })
        : y.size > 5242880
          ? b("encoded capture too large", { bytes: y.size })
          : { blob: y, scale: (h / t.width + w / t.height) / 2 };
}
async function T(e, t) {
    try {
        var n, r, i;
        let l;
        if (null == window.DiscordNative) return b("not the desktop app");
        if (
            ((n = t.spec),
            null != n &&
                "viewport" !==
                    (n.mode ??
                        (null != (r = n.target) &&
                        ((null != r.ref && "" !== r.ref) || (null != r.selector && "" !== r.selector))
                            ? "element"
                            : null != (i = n.rect) && i.width > 0 && i.height > 0
                              ? "rect"
                              : "viewport")))
        )
            return b("targeted capture needs the frame DOM", { spec: t.spec });
        if ("visible" !== document.visibilityState) return b("window not visible");
        let o = v(e);
        if (null == o) return b("frame not fully on screen");
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
            return b("frame is covered");
        let a = {
                x: Math.max(0, window.outerWidth - window.innerWidth),
                y: Math.max(0, window.outerHeight - window.innerHeight),
            },
            u = a.x > 2 || a.y > 2 ? await M() : null;
        try {
            l = await y(o);
        } finally {
            u?.();
        }
        if (null == l) return null;
        let s = v(e);
        if (
            null == s ||
            Math.abs(s.left - o.left) > 1 ||
            Math.abs(s.top - o.top) > 1 ||
            Math.abs(s.width - o.width) > 1 ||
            Math.abs(s.height - o.height) > 1
        )
            return b("frame moved or resized during capture");
        let d = await I(l, o, a, t.spec);
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
        if (null == c) return b("frame has no resolvable upload url");
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
        let w = await fetch(c, { method: "POST", headers: h, body: d.blob });
        if (!w.ok) return b("upload refused", { status: w.status });
        return (
            g.verbose("native capture uploaded", { id: t.captureId, bytes: d.blob.size, scale: f.scale }),
            { status: "accepted" }
        );
    } catch (e) {
        return b("threw", { err: e });
    }
}
var _ = n(251363),
    O = n(192888),
    x = n(853555),
    E = n(809685),
    P = n(777977),
    S = n(484697);
(n(321073), n(667532));
var N = n(112420),
    k = n(652215);
function W(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let A = {
    [k.e$_.OPEN_CONTEXT_MENU]: (e) =>
        "custom" !== e.args.type
            ? { result: { opened: !0 }, answered: "opened, no selection to make" }
            : {
                  result: { opened: !0, selected_id: null },
                  answered: "dismissed",
                  options: (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let r of t) {
                          if (n.length >= 40) break;
                          if (null == r || "object" != typeof r) continue;
                          let t = W(r.id);
                          (null != t && n.push(t), e(r.items, n));
                      }
                      return n;
                  })(e.args.items),
              },
    [k.e$_.SHOW_CONFIRM_MODAL]: (e) => ({
        result: "confirm" === e.args.type ? { confirmed: !1 } : { acknowledged: !1 },
        answered: "dismissed",
        subject: W(e.args.title),
    }),
    [k.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: W(e.args.url),
    }),
    [k.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: W(e.args.preview_title) ?? W(e.args.content),
    }),
    [k.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [k.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [k.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [k.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [k.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [k.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [k.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [k.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(A);
let C = { drain: () => [], end: () => {}, iframeId: null },
    $ = [];
function D(e) {
    let t = $.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = A[e.cmd];
    if (null == n) return null;
    let { result: r, answered: i, options: l, subject: o } = n(e);
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
function L(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, S.lw)(t) ?? null);
}
function R(e, t) {
    var n = L(e);
    if (null == n) return C;
    let r = { iframeId: n, recorded: [] };
    return (
        t?.beneathBatches === !0 ? $.push(r) : $.unshift(r),
        1 === $.length && (0, N.C)(D),
        {
            iframeId: n,
            drain: () => r.recorded.splice(0, r.recorded.length),
            end: () => {
                let e = $.indexOf(r);
                -1 !== e && ($.splice(e, 1), 0 === $.length && (0, N.C)(null));
            },
        }
    );
}
var U = n(873715),
    F = n(226178),
    H = n(165610);
async function q(e) {
    let { onClose: t, ...r } = e,
        { openOAuth2Modal: i } = await Promise.resolve().then(n.bind(n, 887909));
    i((0, F.i)(r), t);
}
async function j(e, t, r) {
    let { probe: i, spec: l, build: o, onAccepted: a, resolveUploadUrl: u } = r;
    if (!0 === i) return { status: (0, x.rQ)(e) ? "accepted" : "unavailable" };
    if (l?.mode === "widget") {
        let { captureConjureProfileWidget: r } = await Promise.all([
            n.e("253781"),
            n.e("686889"),
            n.e("471043"),
            n.e("584996"),
            n.e("258759"),
            n.e("912597"),
            n.e("70594"),
            n.e("993103"),
            n.e("193158"),
            n.e("252229"),
            n.e("250478"),
            n.e("28561"),
            n.e("324622"),
            n.e("795093"),
            n.e("446800"),
            n.e("306306"),
            n.e("518954"),
            n.e("201050"),
            n.e("908081"),
            n.e("829260"),
            n.e("25212"),
            n.e("504098"),
            n.e("245691"),
            n.e("845928"),
            n.e("192847"),
            n.e("81766"),
            n.e("815341"),
            n.e("916519"),
            n.e("794624"),
        ]).then(n.bind(n, 399503));
        return await r(e, { captureId: t, build: o, onAccepted: a, resolveUploadUrl: u });
    }
    let s = await (0, x.o$)(e, 6e3);
    if (null == s) return { status: "unavailable" };
    let d = null == a ? { uploadToken: void 0 } : await a();
    if (null == d) return { status: "unavailable" };
    let c = T(s, { captureId: t, spec: l, build: o, uploadToken: d.uploadToken });
    function f(e) {
        return Promise.race([c, new Promise((t) => setTimeout(() => t(null), e))]);
    }
    let h = await f(3e3);
    if (null != h) return h;
    let w = await (0, _.i)(s, t, l, d.uploadToken);
    return "accepted" === w.status ? w : ((await f(3e3)) ?? w);
}
async function G(e, t, n, r) {
    if (!(0, x.rQ)(e)) return { status: "unavailable" };
    let i = (0, d.Wg)(e);
    try {
        let i = await (0, x.o$)(e, 6e3);
        if (null == i) return { status: "unavailable" };
        let l = await r?.();
        if (!1 === l) return { status: "unavailable" };
        let o = R(i);
        try {
            let r = await (0, U.J)(i, t, n);
            if ("completed" !== r.status) return r;
            let l = [...J.drain(e), ...o.drain()];
            if (0 === l.length) return r;
            return { ...r, response: { ...r.response, native: l } };
        } finally {
            o.end();
        }
    } finally {
        i();
    }
}
let J = (function (e) {
    let t = new Map();
    function n(e) {
        let n = t.get(e);
        (null != n && (t.delete(e), c("closing the operation session", () => n.end())), (0, d.YN)(e));
    }
    return {
        begin: function (r) {
            (0, d.oJ)(r);
            let i = e(r);
            if (null == i) return;
            let l = t.get(r);
            if (null != l) {
                if (null != l.iframeId && l.iframeId === i.identity) return;
                (t.delete(r), c("replacing a stale operation session", () => l.end()));
            }
            (c("dismissing what was left standing", () => i.dismiss()),
                c("opening the operation session", () => {
                    let e = i.open(),
                        l = (0, d.W3)(() => {
                            (0, d.wK)(r) || n(r);
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
    let t = (0, x.UJ)(e);
    return null == t
        ? null
        : {
              identity: L(t),
              dismiss: () =>
                  (function (e) {
                      let t = e.contentWindow;
                      if (null == t) return;
                      let n = (0, S.lw)(t);
                      null != n && ((0, E.ir)(n), (0, P.OR)(n));
                  })(t),
              open: () => R(t, { beneathBatches: !0 }),
          };
});
(0, d.h2)((e) => {
    let t = (0, x.UJ)(e);
    null != t &&
        (0, O.W)(
            t,
            "control-end",
            {},
            { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
        ).catch(() => {});
});
let z = {
    openConjureAppInstallModal: q,
    isWindowFocused: function () {
        return u.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return a.A.getDesktopType() === k.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { title: t, body: i, route: l, sound: a, volume: u } = e;
        r.default.showNotification(
            n(608598),
            t,
            i,
            { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
            {
                sound: a,
                volume: u,
                fallbackDeepLink: null == l ? void 0 : (0, s.Id)(l),
                onClick: null == l ? void 0 : () => (0, o.pX)(l),
                isUserAvatar: !1,
            },
        );
    },
    relayPreviewCapture: j,
    relayPreviewControl: G,
    abortPreviewControl: function (e) {
        let t = (0, x.UJ)(e);
        null != t &&
            (0, O.W)(
                t,
                "control-abort",
                {},
                { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control abort" },
            ).catch(() => {});
    },
    beginPreviewOperation: function (e) {
        J.begin(e);
    },
    endPreviewOperation: function (e) {
        J.end(e);
    },
    releasePreviewControl: function (e) {
        (0, d.GU)(e);
    },
    reloadAppFrames: function (e) {
        if (null != e)
            for (let t of l.A.getAllFrames())
                (0, H.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && i.A.refreshProxyTicket(t.id);
    },
};
