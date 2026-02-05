"use strict";
n.d(t, { A: () => Q, I: () => U }), n(323874), n(14289), n(35956), n(142703), n(321073), n(938796);
var r = n(735438),
    i = n.n(r),
    a = n(481613),
    s = n.n(a),
    o = n(665260),
    l = n(77729),
    u = n(47167),
    c = n(626584),
    d = n(22007),
    _ = n(794036),
    f = n(975970),
    p = n(105613),
    h = n(474228),
    m = n(400492),
    g = n(312671),
    E = n(458640),
    A = n(378058),
    I = n(734057),
    T = n(803224),
    y = n(994500),
    S = n(351906),
    v = n(287809),
    C = n(954571),
    b = n(486020),
    N = n(562153),
    R = n(723702),
    O = n(837921),
    D = n(652215);
let L = R.isPlatformEmbedded && (0, R.isWindows)(),
    w = L && 10 > parseFloat(l.A.os.release),
    x = !0;
if (L && !w) {
    let [e, , t] = l.A.os.release.split(".");
    x = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let P = new c.A("NotificationUtils"),
    M =
        (L && x) ||
        ("Chrome" === s().name && 47 > parseFloat(s().version)) ||
        ("Firefox" === s().name && 52 > parseFloat(s().version));
async function k() {
    if (l.A?.features.supports("notifications"))
        try {
            return await O.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            P.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function U(e) {
    return `discord://${location.host}${e}`;
}
function G(e) {
    try {
        let t = new URL(e, location.origin);
        if ("discord:" === t.protocol) return t.pathname;
    } catch (e) {}
    return null;
}
async function V() {
    let e = await k();
    return e?.authorizationStatus === "authorized" && e?.sound === !0;
}
function F(e, t) {
    return (0, E.A)(t ?? g.A.getSoundpack())[e] ?? e;
}
async function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await V())
        try {
            await O.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: F(e, n) });
            return;
        } catch (e) {
            P.warn("Native notification sound failed with error: ", e);
        }
    (0, m.Ak)(e, t, void 0, n);
}
let j = i().throttle(B, 1e3, { leading: !0 });
function H() {
    O.Ay.flashFrame(!1);
}
L && (window.addEventListener("focus", H), O.Ay.on("MAIN_WINDOW_FOCUS", H));
let Y = window.Notification;
if (w) {
    let e = {};
    O.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let r = e[n];
        null != r && (r.onclick(), r.close());
    }),
        O.Ay.send("NOTIFICATIONS_CLEAR"),
        (Y = class {
            static permission = "granted";
            static _id = 0;
            id = Y._id++;
            title;
            body;
            icon;
            onshow = function () {};
            onclick = function () {};
            onclose = function () {};
            static requestPermission(e) {
                e();
            }
            constructor(t, { body: n, icon: r }) {
                t.includes("\0")
                    ? (P.warn("Notification title contains null character, setting to empty string"), (this.title = ""))
                    : (this.title = t),
                    n.includes("\0")
                        ? (P.warn("Notification body contains null character, setting to empty string"),
                          (this.body = ""))
                        : (this.body = n),
                    (this.icon = r),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    O.Ay.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    });
            }
            close() {
                null != e[this.id] && (delete e[this.id], O.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
        });
}
let W = {};
if (l.A?.features.supports("notifications")) {
    try {
        O.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
            if ("dismiss" === t) return void delete W[n];
            {
                let e = W[n];
                if ((R.isPlatformEmbedded ? O.Ay.focus() : window.focus(), null != e)) {
                    e.options?.omitClickTracking ||
                        (C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...e.trackingProps }),
                        C.default.track(D.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        e.options?.onClick?.(r);
                    return;
                }
                if (null != i) {
                    let e = G(i);
                    null != e && (0, d.A)(e);
                }
            }
        }),
            O.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        P.warn("Native notification setup failed with error: ", e);
    }
    l.A?.features.supports("notifications_provisional") &&
        $().then((e) => {
            e || O.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
function K(e) {
    if (l.A?.features.supports("notifications"))
        try {
            O.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                .then((t) => {
                    e(t);
                })
                .catch(() => {
                    e(!1);
                });
            return;
        } catch (e) {
            P.warn("Native notification authorization failed with error: ", e);
        }
    null != Y &&
        Y.requestPermission(async () => {
            null != e && e(await z());
        });
}
async function z() {
    if (l.A?.features.supports("notifications")) {
        let e = await k();
        return e?.authorizationStatus === "authorized" || e?.authorizationStatus === "provisional";
    }
    return null != Y && "granted" === Y.permission;
}
async function $() {
    return l.A?.features.supports("notifications")
        ? (await k())?.authorizationStatus !== "undetermined"
        : null != Y && "default" !== Y.permission;
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? j(e, t, n) : B(e, t, n);
}
async function Z(e, t, n, r, i) {
    let a,
        s = await k(),
        l = s?.authorizationStatus === "authorized" || s?.authorizationStatus === "provisional",
        c = null != s ? l : await z(),
        d = l,
        m = S.A.disableNotifications && null == i.overrideStreamerMode,
        g = !R.isPlatformEmbedded || ((0, R.isMac)() && d) || O.Ay.shouldDisplayNotifications(),
        E = !m && c && g,
        w = { ...r, action: void 0, ping: void 0, banner: void 0, badge: void 0 },
        U = w,
        G = w;
    if (((r.banner = await (0, p.N)()), !E)) {
        null != i.sound &&
            !1 !== i.playSoundIfDisabled &&
            (q(i.sound, i.volume ?? 1, i.soundpack),
            (r.ping = !0),
            i.omitViewTracking || C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...r }));
        return;
    }
    t.includes("\0") && (P.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (P.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let V = i?.tag ?? null,
        B = d && s?.sound === !0 && s?.authorizationStatus === "authorized",
        j = (e, t) => {
            i.onShown?.(),
                i.omitViewTracking ||
                    (C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...t }),
                    C.default.track(D.HAw.NOTIFICATION_VIEWED, G)),
                M && setTimeout(() => e.close(), 5e3);
        };
    if (
        (null == i.sound || B || (q(i.sound, i.volume ?? 1, i.soundpack), (r.ping = !0)),
        i.isUserAvatar && null != e && (e = await (0, h.w)(e)),
        L && T.A.taskbarFlash && O.Ay.flashFrame(!0),
        d)
    ) {
        let a = { title: t, body: n };
        null != e && (a.icon = e),
            i?.sound != null && (a.sound = F(i.sound, i.soundpack)),
            i?.tag != null && (a.identifier = i.tag),
            i?.fallbackDeepLink != null && (a.fallbackDeepLink = i.fallbackDeepLink),
            Array.isArray(i.actions) && (a.actions = i.actions);
        let s = f.A.getCurrentConfig(
            { location: "showNotification" },
            { autoTrackExposure: !0, disable: null == i.messageRecord },
        );
        if (null != i.messageRecord && s.enabled) {
            let e = i.messageRecord.channel_id,
                t = i.messageRecord.author;
            a.threadIdentifier = e;
            let n = I.A.getChannel(e);
            null != n && (a.groupName = (0, u.m1)(n, v.default, y.A));
            let r = n?.getGuildId();
            if (
                ((a.senderIdentifier = t.id),
                (a.senderDisplayName = N.Ay.getName(r, e, t)),
                (a.senderAvatar = t.getAvatarURL(r, 128, !1, !1)),
                (a.attachments = []),
                s.includeStickers)
            )
                for (let e of (0, A.o6)(i.messageRecord)) {
                    let t = (0, A.zg)(e, { isPreview: !0 });
                    null != t && a.attachments.push({ url: t, type: "image/png" });
                }
            if (s.includeImages)
                for (let e of i.messageRecord.attachments)
                    !(0, o.Lt)(e.flags ?? 0, D.sbO.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, o.Lt)(e.flags ?? 0, D.sbO.IS_SPOILER) &&
                        e.content_type?.startsWith("image/") &&
                        a.attachments.push({ url: e.proxy_url, type: e.content_type });
            null != i.emoji &&
                _.A.getConfig({ location: "showNotification" }).enabled &&
                (a.emoji = i.emoji.map((e) => ({ url: (0, b._O)({ id: e.id, animated: !1, size: 96 }), ...e })));
        }
        try {
            let e = await O.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
            W[e] = { options: i, trackingProps: r, clickTrackingProps: U };
            let t = {
                close() {
                    try {
                        O.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
                    } catch (e) {
                        P.warn("Native notification removal failed with error: ", e);
                    }
                },
            };
            return j(t, r), { notification: t, trackingProps: r };
        } catch (e) {
            P.warn("Native notification failed with error: ", e);
        }
    }
    null != i.sound && d && (q(i.sound, i.volume ?? 1, i.soundpack), (r.ping = !0));
    let H = { icon: e, body: n, tag: V, silent: !0 };
    try {
        a = new Y(t, H);
    } catch (e) {
        return;
    }
    return (j(a, r),
    (a.onclick = (e) => {
        R.isPlatformEmbedded ? O.Ay.focus() : (window.focus(), a.close()),
            i.omitClickTracking ||
                (C.default.track(D.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...r }),
                C.default.track(D.HAw.NOTIFICATION_CLICKED, U));
        let t = "";
        i.onClick?.(t);
    }),
    x)
        ? { notification: a, trackingProps: r }
        : {
              notification: {
                  close() {
                      a?.onclose?.();
                  },
              },
              trackingProps: r,
          };
}
let Q = { hasPermission: z, requestPermission: K, showNotification: Z, playNotificationSound: B };
