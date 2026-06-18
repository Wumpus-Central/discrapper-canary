"use strict";
n.d(t, { A: () => W, I: () => M }), n(323874), n(14289), n(35956), n(142703);
var i = n(735438),
    r = n.n(i),
    s = n(481613),
    a = n.n(s),
    o = n(77729),
    l = n(47167),
    u = n(626584),
    c = n(741231);
let d = (0, n(240921).Ay)({
    kind: "user",
    name: "2025-10-desktop-communication-notifications-emoji",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var _ = n(105613),
    h = n(400492),
    f = n(312671),
    p = n(458640),
    E = n(734057),
    m = n(803224),
    g = n(994500),
    A = n(351906),
    I = n(287809),
    T = n(174459),
    S = n(486020),
    y = n(562153),
    C = n(723702),
    N = n(19575),
    v = n(652215);
let R = C.isPlatformEmbedded && (0, C.isWindows)(),
    O = R && 10 > parseFloat(o.A.os.release),
    b = !0;
if (R && !O) {
    let [e, , t] = o.A.os.release.split(".");
    b = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let D = new u.A("NotificationUtils"),
    L =
        (R && b) ||
        ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
        ("Firefox" === a().name && 52 > parseFloat(a().version));
async function w() {
    if (o.A?.features.supports("notifications"))
        try {
            return await N.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            D.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function M(e) {
    return `discord://${location.host}${e}`;
}
async function P() {
    let e = await w();
    return e?.authorizationStatus === "authorized" && e?.sound === !0;
}
function x(e, t) {
    return (0, p.A)(t ?? f.A.getSoundpack())[e] ?? e;
}
async function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await P())
        try {
            await N.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: x(e, n) });
            return;
        } catch (e) {
            D.warn("Native notification sound failed with error: ", e);
        }
    (0, h.Ak)(e, t, void 0, n, { trackNotificationFailure: !0 });
}
let U = r().throttle(k, 1e3, { leading: !0 });
function G() {
    N.Ay.flashFrame(!1);
}
R && (window.addEventListener("focus", G), N.Ay.on("MAIN_WINDOW_FOCUS", G));
let F = window.Notification;
if (O) {
    let e = {};
    N.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let i = e[n];
        null != i && (i.onclick(), i.close());
    }),
        N.Ay.send("NOTIFICATIONS_CLEAR"),
        (F = class {
            static permission = "granted";
            static _id = 0;
            id = F._id++;
            title;
            body;
            icon;
            onshow = function () {};
            onclick = function () {};
            onclose = function () {};
            static requestPermission(e) {
                e();
            }
            constructor(t, { body: n, icon: i }) {
                t.includes("\0")
                    ? (D.warn("Notification title contains null character, setting to empty string"), (this.title = ""))
                    : (this.title = t),
                    n.includes("\0")
                        ? (D.warn("Notification body contains null character, setting to empty string"),
                          (this.body = ""))
                        : (this.body = n),
                    (this.icon = i),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    N.Ay.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    });
            }
            close() {
                null != e[this.id] && (delete e[this.id], N.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
        });
}
let V = {};
if (o.A?.features.supports("notifications")) {
    try {
        N.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, i, r) => {
            if ("dismiss" === t) return void delete V[n];
            {
                let e = V[n];
                if ((C.isPlatformEmbedded ? N.Ay.focus() : window.focus(), null != e)) {
                    e.options?.omitClickTracking ||
                        (T.default.track(v.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...e.trackingProps }),
                        T.default.track(v.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        e.options?.onClick?.(i);
                    return;
                }
                if (null != r) {
                    let e = (function (e) {
                        try {
                            let t = new URL(e, location.origin);
                            if ("discord:" === t.protocol) return t.pathname;
                        } catch (e) {}
                        return null;
                    })(r);
                    null != e && (0, c.A)(e);
                }
            }
        }),
            N.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        D.warn("Native notification setup failed with error: ", e);
    }
    o.A?.features.supports("notifications_provisional") &&
        j().then((e) => {
            e || N.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
async function B() {
    if (o.A?.features.supports("notifications")) {
        let e = await w();
        return e?.authorizationStatus === "authorized" || e?.authorizationStatus === "provisional";
    }
    return null != F && "granted" === F.permission;
}
async function j() {
    return o.A?.features.supports("notifications")
        ? (await w())?.authorizationStatus !== "undetermined"
        : null != F && "default" !== F.permission;
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? U(e, t, n) : k(e, t, n);
}
async function Y(e, t, n, i, r) {
    var s, a;
    let o,
        u,
        c = await w(),
        h = c?.authorizationStatus === "authorized" || c?.authorizationStatus === "provisional",
        f = null != c ? h : await B(),
        p = A.A.disableNotifications && null == r.overrideStreamerMode,
        O = !C.isPlatformEmbedded || ((0, C.isMac)() && h) || N.Ay.shouldDisplayNotifications(),
        M = { ...i, action: void 0, ping: void 0, banner: void 0, badge: void 0 };
    if (((i.banner = await (0, _.N)()), !(!p && f && O))) {
        null != r.sound &&
            !1 !== r.playSoundIfDisabled &&
            (H(r.sound, r.volume ?? 1, r.soundpack),
            (i.ping = !0),
            r.omitViewTracking || T.default.track(v.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...i }));
        return;
    }
    t.includes("\0") && (D.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (D.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let P = r?.tag ?? null,
        k = h && c?.sound === !0 && c?.authorizationStatus === "authorized";
    function U(e, t) {
        r.onShown?.(),
            r.omitViewTracking ||
                (T.default.track(v.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...t }),
                T.default.track(v.HAw.NOTIFICATION_VIEWED, M)),
            L && setTimeout(() => e.close(), 5e3);
    }
    if (
        (null == r.sound || k || (H(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0)),
        r.isUserAvatar &&
            null != e &&
            (e = await ((s = e),
            ((u = new Image()).src = s),
            (u.crossOrigin = "anonymous"),
            new Promise((e) => {
                (u.onload = () => {
                    var t;
                    let n, i, r, s;
                    "" !== u.src &&
                        e(
                            ((i = (n = document.createElement("canvas")).getContext("2d")),
                            (n.width = r = Math.min(u.width, u.height)),
                            (n.height = r),
                            null != i &&
                                ((t = i).beginPath(),
                                t.arc(r / 2, r / 2, r / 2, 0, 2 * Math.PI),
                                t.closePath(),
                                t.clip(),
                                t.drawImage(u, 0, 0, r, r, 0, 0, r, r),
                                (i = t)),
                            (s = n.toDataURL()),
                            n.remove(),
                            s),
                        );
                }),
                    (u.onerror = () => {
                        e(u.src);
                    });
            }))),
        R && m.A.taskbarFlash && N.Ay.flashFrame(!0),
        h)
    ) {
        let s = { title: t, body: n };
        if (
            (null != e && (s.icon = e),
            r?.sound != null && (s.sound = x(r.sound, r.soundpack)),
            r?.tag != null && (s.identifier = r.tag),
            r?.fallbackDeepLink != null && (s.fallbackDeepLink = r.fallbackDeepLink),
            Array.isArray(r.actions) && (s.actions = r.actions),
            null != r.messageRecord && (0, C.isMac)())
        ) {
            let e = r.messageRecord.channel_id,
                t = r.messageRecord.author;
            s.threadIdentifier = e;
            let n = E.A.getChannel(e);
            null != n && (s.groupName = (0, l.m1)(n, I.default, g.A));
            let i = n?.getGuildId();
            (s.senderIdentifier = t.id),
                (s.senderDisplayName = y.Ay.getName(i, e, t)),
                (s.senderAvatar = t.getAvatarURL(i, 128, !1, !1)),
                null != r.emoji &&
                    d.getConfig({ location: "showNotification" }).enabled &&
                    (s.emoji = r.emoji.map((e) => ({ url: (0, S._O)({ id: e.id, animated: !1, size: 96 }), ...e })));
        }
        try {
            let e =
                ((a = await N.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", s)),
                "string" == typeof a ? { identifier: a, delivered: !0 } : a);
            if (e.delivered) {
                let t = e.identifier;
                V[t] = { options: r, trackingProps: i, clickTrackingProps: M };
                let n = {
                    close() {
                        try {
                            N.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [t]);
                        } catch (e) {
                            D.warn("Native notification removal failed with error: ", e);
                        }
                    },
                };
                return U(n, i), { notification: n, trackingProps: i };
            }
        } catch (e) {
            D.warn("Native notification failed with error: ", e);
        }
    }
    null != r.sound && h && (H(r.sound, r.volume ?? 1, r.soundpack), (i.ping = !0));
    let G = { icon: e, body: n, tag: P, silent: !0 };
    try {
        o = new F(t, G);
    } catch (e) {
        return;
    }
    return (U(o, i),
    (o.onclick = (e) => {
        C.isPlatformEmbedded ? N.Ay.focus() : (window.focus(), o.close()),
            r.omitClickTracking ||
                (T.default.track(v.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...i }),
                T.default.track(v.HAw.NOTIFICATION_CLICKED, M)),
            r.onClick?.("");
    }),
    b)
        ? { notification: o, trackingProps: i }
        : {
              notification: {
                  close() {
                      o?.onclose?.();
                  },
              },
              trackingProps: i,
          };
}
let W = {
    hasPermission: B,
    requestPermission: function (e) {
        if (o.A?.features.supports("notifications"))
            try {
                N.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                    .then((t) => {
                        e(t);
                    })
                    .catch(() => {
                        e(!1);
                    });
                return;
            } catch (e) {
                D.warn("Native notification authorization failed with error: ", e);
            }
        null != F &&
            F.requestPermission(async () => {
                null != e && e(await B());
            });
    },
    showNotification: Y,
    playNotificationSound: k,
};
