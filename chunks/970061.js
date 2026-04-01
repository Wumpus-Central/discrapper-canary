"use strict";
n.d(t, { A: () => z, I: () => P }), n(323874), n(14289), n(35956), n(142703);
var r = n(735438),
    i = n.n(r),
    s = n(481613),
    a = n.n(s),
    o = n(77729),
    l = n(47167),
    u = n(626584),
    c = n(22007),
    d = n(794036),
    _ = n(105613),
    f = n(474228),
    p = n(400492),
    h = n(312671),
    m = n(458640),
    E = n(734057),
    g = n(803224),
    A = n(994500),
    I = n(351906),
    T = n(287809),
    S = n(954571),
    y = n(486020),
    v = n(562153),
    N = n(723702),
    C = n(837921),
    R = n(652215);
let O = N.isPlatformEmbedded && (0, N.isWindows)(),
    b = O && 10 > parseFloat(o.A.os.release),
    D = !0;
if (O && !b) {
    let [e, , t] = o.A.os.release.split(".");
    D = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let L = new u.A("NotificationUtils"),
    w =
        (O && D) ||
        ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
        ("Firefox" === a().name && 52 > parseFloat(a().version));
async function M() {
    if (o.A?.features.supports("notifications"))
        try {
            return await C.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            L.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function P(e) {
    return `discord://${location.host}${e}`;
}
function x(e) {
    try {
        let t = new URL(e, location.origin);
        if ("discord:" === t.protocol) return t.pathname;
    } catch (e) {}
    return null;
}
async function k() {
    let e = await M();
    return e?.authorizationStatus === "authorized" && e?.sound === !0;
}
function U(e, t) {
    return (0, m.A)(t ?? h.A.getSoundpack())[e] ?? e;
}
async function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await k())
        try {
            await C.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: U(e, n) });
            return;
        } catch (e) {
            L.warn("Native notification sound failed with error: ", e);
        }
    (0, p.Ak)(e, t, void 0, n);
}
let F = i().throttle(G, 1e3, { leading: !0 });
function V() {
    C.Ay.flashFrame(!1);
}
O && (window.addEventListener("focus", V), C.Ay.on("MAIN_WINDOW_FOCUS", V));
let B = window.Notification;
if (b) {
    let e = {};
    C.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let r = e[n];
        null != r && (r.onclick(), r.close());
    }),
        C.Ay.send("NOTIFICATIONS_CLEAR"),
        (B = class {
            static permission = "granted";
            static _id = 0;
            id = B._id++;
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
                    ? (L.warn("Notification title contains null character, setting to empty string"), (this.title = ""))
                    : (this.title = t),
                    n.includes("\0")
                        ? (L.warn("Notification body contains null character, setting to empty string"),
                          (this.body = ""))
                        : (this.body = n),
                    (this.icon = r),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    C.Ay.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    });
            }
            close() {
                null != e[this.id] && (delete e[this.id], C.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
        });
}
let H = {};
if (o.A?.features.supports("notifications")) {
    try {
        C.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
            if ("dismiss" === t) return void delete H[n];
            {
                let e = H[n];
                if ((N.isPlatformEmbedded ? C.Ay.focus() : window.focus(), null != e)) {
                    e.options?.omitClickTracking ||
                        (S.default.track(R.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...e.trackingProps }),
                        S.default.track(R.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        e.options?.onClick?.(r);
                    return;
                }
                if (null != i) {
                    let e = x(i);
                    null != e && (0, c.A)(e);
                }
            }
        }),
            C.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        L.warn("Native notification setup failed with error: ", e);
    }
    o.A?.features.supports("notifications_provisional") &&
        W().then((e) => {
            e || C.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
function j(e) {
    if (o.A?.features.supports("notifications"))
        try {
            C.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                .then((t) => {
                    e(t);
                })
                .catch(() => {
                    e(!1);
                });
            return;
        } catch (e) {
            L.warn("Native notification authorization failed with error: ", e);
        }
    null != B &&
        B.requestPermission(async () => {
            null != e && e(await Y());
        });
}
async function Y() {
    if (o.A?.features.supports("notifications")) {
        let e = await M();
        return e?.authorizationStatus === "authorized" || e?.authorizationStatus === "provisional";
    }
    return null != B && "granted" === B.permission;
}
async function W() {
    return o.A?.features.supports("notifications")
        ? (await M())?.authorizationStatus !== "undetermined"
        : null != B && "default" !== B.permission;
}
function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? F(e, t, n) : G(e, t, n);
}
async function $(e, t, n, r, i) {
    let s,
        a = await M(),
        o = a?.authorizationStatus === "authorized" || a?.authorizationStatus === "provisional",
        u = null != a ? o : await Y(),
        c = o,
        p = I.A.disableNotifications && null == i.overrideStreamerMode,
        h = !N.isPlatformEmbedded || ((0, N.isMac)() && c) || C.Ay.shouldDisplayNotifications(),
        m = !p && u && h,
        b = { ...r, action: void 0, ping: void 0, banner: void 0, badge: void 0 },
        P = b,
        x = b;
    if (((r.banner = await (0, _.N)()), !m)) {
        null != i.sound &&
            !1 !== i.playSoundIfDisabled &&
            (K(i.sound, i.volume ?? 1, i.soundpack),
            (r.ping = !0),
            i.omitViewTracking || S.default.track(R.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...r }));
        return;
    }
    t.includes("\0") && (L.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (L.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let k = i?.tag ?? null,
        G = c && a?.sound === !0 && a?.authorizationStatus === "authorized",
        F = (e, t) => {
            i.onShown?.(),
                i.omitViewTracking ||
                    (S.default.track(R.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...t }),
                    S.default.track(R.HAw.NOTIFICATION_VIEWED, x)),
                w && setTimeout(() => e.close(), 5e3);
        };
    if (
        (null == i.sound || G || (K(i.sound, i.volume ?? 1, i.soundpack), (r.ping = !0)),
        i.isUserAvatar && null != e && (e = await (0, f.w)(e)),
        O && g.A.taskbarFlash && C.Ay.flashFrame(!0),
        c)
    ) {
        let s = { title: t, body: n };
        if (
            (null != e && (s.icon = e),
            i?.sound != null && (s.sound = U(i.sound, i.soundpack)),
            i?.tag != null && (s.identifier = i.tag),
            i?.fallbackDeepLink != null && (s.fallbackDeepLink = i.fallbackDeepLink),
            Array.isArray(i.actions) && (s.actions = i.actions),
            null != i.messageRecord && (0, N.isMac)())
        ) {
            let e = i.messageRecord.channel_id,
                t = i.messageRecord.author;
            s.threadIdentifier = e;
            let n = E.A.getChannel(e);
            null != n && (s.groupName = (0, l.m1)(n, T.default, A.A));
            let r = n?.getGuildId();
            (s.senderIdentifier = t.id),
                (s.senderDisplayName = v.Ay.getName(r, e, t)),
                (s.senderAvatar = t.getAvatarURL(r, 128, !1, !1)),
                null != i.emoji &&
                    d.A.getConfig({ location: "showNotification" }).enabled &&
                    (s.emoji = i.emoji.map((e) => ({ url: (0, y._O)({ id: e.id, animated: !1, size: 96 }), ...e })));
        }
        try {
            let e = await C.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", s);
            H[e] = { options: i, trackingProps: r, clickTrackingProps: P };
            let t = {
                close() {
                    try {
                        C.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
                    } catch (e) {
                        L.warn("Native notification removal failed with error: ", e);
                    }
                },
            };
            return F(t, r), { notification: t, trackingProps: r };
        } catch (e) {
            L.warn("Native notification failed with error: ", e);
        }
    }
    null != i.sound && c && (K(i.sound, i.volume ?? 1, i.soundpack), (r.ping = !0));
    let V = { icon: e, body: n, tag: k, silent: !0 };
    try {
        s = new B(t, V);
    } catch (e) {
        return;
    }
    return (F(s, r),
    (s.onclick = (e) => {
        N.isPlatformEmbedded ? C.Ay.focus() : (window.focus(), s.close()),
            i.omitClickTracking ||
                (S.default.track(R.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...r }),
                S.default.track(R.HAw.NOTIFICATION_CLICKED, P));
        let t = "";
        i.onClick?.(t);
    }),
    D)
        ? { notification: s, trackingProps: r }
        : {
              notification: {
                  close() {
                      s?.onclose?.();
                  },
              },
              trackingProps: r,
          };
}
let z = { hasPermission: Y, requestPermission: j, showNotification: $, playNotificationSound: G };
