"use strict";
n.d(t, { A: () => K, I: () => P }), n(323874), n(14289), n(35956), n(142703);
var r = n(735438),
    i = n.n(r),
    s = n(481613),
    a = n.n(s),
    o = n(77729),
    l = n(47167),
    u = n(626584),
    d = n(22007),
    c = n(794036),
    _ = n(105613),
    f = n(474228),
    E = n(400492),
    h = n(312671),
    p = n(458640),
    m = n(734057),
    g = n(803224),
    A = n(994500),
    I = n(351906),
    T = n(287809),
    S = n(954571),
    y = n(486020),
    N = n(562153),
    O = n(723702),
    R = n(837921),
    v = n(652215);
let C = O.isPlatformEmbedded && (0, O.isWindows)(),
    b = C && 10 > parseFloat(o.A.os.release),
    D = !0;
if (C && !b) {
    let [e, , t] = o.A.os.release.split(".");
    D = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let L = new u.A("NotificationUtils"),
    w =
        (C && D) ||
        ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
        ("Firefox" === a().name && 52 > parseFloat(a().version));
async function M() {
    if (o.A?.features.supports("notifications"))
        try {
            return await R.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            L.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}
function P(e) {
    return `discord://${location.host}${e}`;
}
async function U() {
    let e = await M();
    return e?.authorizationStatus === "authorized" && e?.sound === !0;
}
function k(e, t) {
    return (0, p.A)(t ?? h.A.getSoundpack())[e] ?? e;
}
async function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await U())
        try {
            await R.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", { sound: k(e, n) });
            return;
        } catch (e) {
            L.warn("Native notification sound failed with error: ", e);
        }
    (0, E.Ak)(e, t, void 0, n);
}
let G = i().throttle(x, 1e3, { leading: !0 });
function V() {
    R.Ay.flashFrame(!1);
}
C && (window.addEventListener("focus", V), R.Ay.on("MAIN_WINDOW_FOCUS", V));
let F = window.Notification;
if (b) {
    let e = {};
    R.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let r = e[n];
        null != r && (r.onclick(), r.close());
    }),
        R.Ay.send("NOTIFICATIONS_CLEAR"),
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
                    R.Ay.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    });
            }
            close() {
                null != e[this.id] && (delete e[this.id], R.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
        });
}
let B = {};
if (o.A?.features.supports("notifications")) {
    try {
        R.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
            if ("dismiss" === t) return void delete B[n];
            {
                let e = B[n];
                if ((O.isPlatformEmbedded ? R.Ay.focus() : window.focus(), null != e)) {
                    e.options?.omitClickTracking ||
                        (S.default.track(v.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...e.trackingProps }),
                        S.default.track(v.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        e.options?.onClick?.(r);
                    return;
                }
                if (null != i) {
                    let e = (function (e) {
                        try {
                            let t = new URL(e, location.origin);
                            if ("discord:" === t.protocol) return t.pathname;
                        } catch (e) {}
                        return null;
                    })(i);
                    null != e && (0, d.A)(e);
                }
            }
        }),
            R.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        L.warn("Native notification setup failed with error: ", e);
    }
    o.A?.features.supports("notifications_provisional") &&
        Y().then((e) => {
            e || R.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}
async function H() {
    if (o.A?.features.supports("notifications")) {
        let e = await M();
        return e?.authorizationStatus === "authorized" || e?.authorizationStatus === "provisional";
    }
    return null != F && "granted" === F.permission;
}
async function Y() {
    return o.A?.features.supports("notifications")
        ? (await M())?.authorizationStatus !== "undetermined"
        : null != F && "default" !== F.permission;
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? G(e, t, n) : x(e, t, n);
}
async function j(e, t, n, r, i) {
    let s,
        a = await M(),
        o = a?.authorizationStatus === "authorized" || a?.authorizationStatus === "provisional",
        u = null != a ? o : await H(),
        d = I.A.disableNotifications && null == i.overrideStreamerMode,
        E = !O.isPlatformEmbedded || ((0, O.isMac)() && o) || R.Ay.shouldDisplayNotifications(),
        h = { ...r, action: void 0, ping: void 0, banner: void 0, badge: void 0 };
    if (((r.banner = await (0, _.N)()), !(!d && u && E))) {
        null != i.sound &&
            !1 !== i.playSoundIfDisabled &&
            (W(i.sound, i.volume ?? 1, i.soundpack),
            (r.ping = !0),
            i.omitViewTracking || S.default.track(v.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...r }));
        return;
    }
    t.includes("\0") && (L.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (L.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let p = i?.tag ?? null,
        b = o && a?.sound === !0 && a?.authorizationStatus === "authorized",
        P = (e, t) => {
            i.onShown?.(),
                i.omitViewTracking ||
                    (S.default.track(v.HAw.NOTIFICATION_ACTION, { action: "VIEW", ...t }),
                    S.default.track(v.HAw.NOTIFICATION_VIEWED, h)),
                w && setTimeout(() => e.close(), 5e3);
        };
    if (
        (null == i.sound || b || (W(i.sound, i.volume ?? 1, i.soundpack), (r.ping = !0)),
        i.isUserAvatar && null != e && (e = await (0, f.w)(e)),
        C && g.A.taskbarFlash && R.Ay.flashFrame(!0),
        o)
    ) {
        let s = { title: t, body: n };
        if (
            (null != e && (s.icon = e),
            i?.sound != null && (s.sound = k(i.sound, i.soundpack)),
            i?.tag != null && (s.identifier = i.tag),
            i?.fallbackDeepLink != null && (s.fallbackDeepLink = i.fallbackDeepLink),
            Array.isArray(i.actions) && (s.actions = i.actions),
            null != i.messageRecord && (0, O.isMac)())
        ) {
            let e = i.messageRecord.channel_id,
                t = i.messageRecord.author;
            s.threadIdentifier = e;
            let n = m.A.getChannel(e);
            null != n && (s.groupName = (0, l.m1)(n, T.default, A.A));
            let r = n?.getGuildId();
            (s.senderIdentifier = t.id),
                (s.senderDisplayName = N.Ay.getName(r, e, t)),
                (s.senderAvatar = t.getAvatarURL(r, 128, !1, !1)),
                null != i.emoji &&
                    c.A.getConfig({ location: "showNotification" }).enabled &&
                    (s.emoji = i.emoji.map((e) => ({ url: (0, y._O)({ id: e.id, animated: !1, size: 96 }), ...e })));
        }
        try {
            let e = await R.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", s);
            B[e] = { options: i, trackingProps: r, clickTrackingProps: h };
            let t = {
                close() {
                    try {
                        R.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
                    } catch (e) {
                        L.warn("Native notification removal failed with error: ", e);
                    }
                },
            };
            return P(t, r), { notification: t, trackingProps: r };
        } catch (e) {
            L.warn("Native notification failed with error: ", e);
        }
    }
    null != i.sound && o && (W(i.sound, i.volume ?? 1, i.soundpack), (r.ping = !0));
    let U = { icon: e, body: n, tag: p, silent: !0 };
    try {
        s = new F(t, U);
    } catch (e) {
        return;
    }
    return (P(s, r),
    (s.onclick = (e) => {
        O.isPlatformEmbedded ? R.Ay.focus() : (window.focus(), s.close()),
            i.omitClickTracking ||
                (S.default.track(v.HAw.NOTIFICATION_ACTION, { action: "CLICK", ...r }),
                S.default.track(v.HAw.NOTIFICATION_CLICKED, h)),
            i.onClick?.("");
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
let K = {
    hasPermission: H,
    requestPermission: function (e) {
        if (o.A?.features.supports("notifications"))
            try {
                R.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
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
        null != F &&
            F.requestPermission(async () => {
                null != e && e(await H());
            });
    },
    showNotification: j,
    playNotificationSound: x,
};
