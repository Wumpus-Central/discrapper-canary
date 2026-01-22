n.d(t, {
    A: () => en,
    I: () => B,
}),
    n(896048),
    n(747238),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(142703),
    n(321073),
    n(938796);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(481613),
    o = n.n(s),
    l = n(665260),
    c = n(77729),
    u = n(47167),
    d = n(626584),
    f = n(22007),
    p = n(794036),
    _ = n(975970),
    h = n(105613),
    m = n(474228),
    g = n(400492),
    E = n(312671),
    b = n(458640),
    y = n(378058),
    O = n(734057),
    A = n(803224),
    v = n(994500),
    S = n(351906),
    I = n(287809),
    T = n(954571),
    C = n(486020),
    N = n(562153),
    R = n(723702),
    w = n(837921),
    P = n(652215);

function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            });
    }
    return e;
}

function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = R.isPlatformEmbedded && (0, R.isWindows)(),
    k = M && 10 > parseFloat(c.A.os.release),
    U = !0;
if (M && !k) {
    let [e, , t] = c.A.os.release.split(".");
    U = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let G = new d.A("NotificationUtils"),
    V =
        (M && U) ||
        ("Chrome" === o().name && 47 > parseFloat(o().version)) ||
        ("Firefox" === o().name && 52 > parseFloat(o().version));
async function F() {
    if (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications"))
        try {
            return await w.Ay.invoke("NOTIFICATIONS_GET_SETTINGS");
        } catch (e) {
            G.warn("Fetching native notification settings failed with error: ", e);
        }
    return null;
}

function B(e) {
    return "discord://".concat(location.host).concat(e);
}

function H(e) {
    try {
        let t = new URL(e, location.origin);
        if ("discord:" === t.protocol) return t.pathname;
    } catch (e) {}
    return null;
}
async function Y() {
    let e = await F();
    return (null == e ? void 0 : e.authorizationStatus) === "authorized" && (null == e ? void 0 : e.sound) === !0;
}

function W(e, t) {
    var n;
    return null != (n = (0, b.A)(null != t ? t : E.A.getSoundpack())[e]) ? n : e;
}
async function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await Y())
        try {
            await w.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
                sound: W(e, n),
            });
            return;
        } catch (e) {
            G.warn("Native notification sound failed with error: ", e);
        }
    (0, g.Ak)(e, t, void 0, n);
}
let z = a().throttle(K, 1e3, {
    leading: !0,
});

function q() {
    w.Ay.flashFrame(!1);
}
M && (window.addEventListener("focus", q), w.Ay.on("MAIN_WINDOW_FOCUS", q));
let X = window.Notification;
if (k) {
    let e = {};
    w.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let r = e[n];
        null != r && (r.onclick(), r.close());
    }),
        w.Ay.send("NOTIFICATIONS_CLEAR"),
        (r = class {
            static requestPermission(e) {
                e();
            }
            close() {
                null != e[this.id] && (delete e[this.id], w.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose());
            }
            constructor(t, { body: n, icon: r }) {
                D(this, "id", X._id++),
                    D(this, "title", void 0),
                    D(this, "body", void 0),
                    D(this, "icon", void 0),
                    D(this, "onshow", function () {}),
                    D(this, "onclick", function () {}),
                    D(this, "onclose", function () {}),
                    t.includes("\0")
                        ? (G.warn("Notification title contains null character, setting to empty string"),
                          (this.title = ""))
                        : (this.title = t),
                    n.includes("\0")
                        ? (G.warn("Notification body contains null character, setting to empty string"),
                          (this.body = ""))
                        : (this.body = n),
                    (this.icon = r),
                    setImmediate(() => this.onshow()),
                    (e[this.id] = this),
                    w.Ay.send("NOTIFICATION_SHOW", {
                        id: this.id,
                        title: this.title,
                        body: this.body,
                        icon: this.icon,
                    });
            }
        }),
        D(r, "permission", "granted"),
        D(r, "_id", 0),
        (X = r);
}
let Z = {};
if (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications")) {
    try {
        w.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
            if ("dismiss" === t) return void delete Z[n];
            {
                let e = Z[n];
                if ((R.isPlatformEmbedded ? w.Ay.focus() : window.focus(), null != e)) {
                    var a, s, o;
                    (null == (a = e.options) ? void 0 : a.omitClickTracking) ||
                        (T.default.track(
                            P.HAw.NOTIFICATION_ACTION,
                            x(
                                {
                                    action: "CLICK",
                                },
                                e.trackingProps,
                            ),
                        ),
                        T.default.track(P.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)),
                        null == (o = e.options) || null == (s = o.onClick) || s.call(o, r);
                    return;
                }
                if (null != i) {
                    let e = H(i);
                    null != e && (0, f.A)(e);
                }
            }
        }),
            w.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
    } catch (e) {
        G.warn("Native notification setup failed with error: ", e);
    }
    (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications_provisional")) &&
        J().then((e) => {
            e || w.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {});
        });
}

function Q(e) {
    if (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications"))
        try {
            w.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                .then((t) => {
                    e(t);
                })
                .catch(() => {
                    e(!1);
                });
            return;
        } catch (e) {
            G.warn("Native notification authorization failed with error: ", e);
        }
    null != X &&
        X.requestPermission(async () => {
            null != e && e(await $());
        });
}
async function $() {
    if (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications")) {
        let e = await F();
        return (
            (null == e ? void 0 : e.authorizationStatus) === "authorized" ||
            (null == e ? void 0 : e.authorizationStatus) === "provisional"
        );
    }
    return null != X && "granted" === X.permission;
}
async function J() {
    if (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications")) {
        var e;
        return (null == (e = await F()) ? void 0 : e.authorizationStatus) !== "undetermined";
    }
    return null != X && "default" !== X.permission;
}

function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? z(e, t, n) : K(e, t, n);
}
async function et(e, t, n, r, i) {
    var a, s, o, c, d, f, g;
    let E,
        b = await F(),
        D =
            (null == b ? void 0 : b.authorizationStatus) === "authorized" ||
            (null == b ? void 0 : b.authorizationStatus) === "provisional",
        L = null != b ? D : await $(),
        k = D,
        B = S.A.disableNotifications && null == i.overrideStreamerMode,
        H = !R.isPlatformEmbedded || ((0, R.isMac)() && k) || w.Ay.shouldDisplayNotifications(),
        Y = !B && L && H,
        K = j(x({}, r), {
            action: void 0,
            ping: void 0,
            banner: void 0,
            badge: void 0,
        }),
        z = K,
        q = K;
    if (((r.banner = await (0, h.N)()), !Y)) {
        null != i.sound &&
            !1 !== i.playSoundIfDisabled &&
            (ee(i.sound, null != (s = i.volume) ? s : 1, i.soundpack),
            (r.ping = !0),
            i.omitViewTracking ||
                T.default.track(
                    P.HAw.NOTIFICATION_ACTION,
                    x(
                        {
                            action: "VIEW",
                        },
                        r,
                    ),
                ));
        return;
    }
    t.includes("\0") && (G.warn("Notification title contains null character, setting to empty string"), (t = "")),
        n.includes("\0") && (G.warn("Notification body contains null character, setting to empty string"), (n = ""));
    let Q = null != (a = null == i ? void 0 : i.tag) ? a : null,
        J = k && (null == b ? void 0 : b.sound) === !0 && (null == b ? void 0 : b.authorizationStatus) === "authorized",
        et = (e, t) => {
            var n;
            null == (n = i.onShown) || n.call(i),
                i.omitViewTracking ||
                    (T.default.track(
                        P.HAw.NOTIFICATION_ACTION,
                        x(
                            {
                                action: "VIEW",
                            },
                            t,
                        ),
                    ),
                    T.default.track(P.HAw.NOTIFICATION_VIEWED, q)),
                V && setTimeout(() => e.close(), 5e3);
        };
    if (
        (null == i.sound || J || (ee(i.sound, null != (o = i.volume) ? o : 1, i.soundpack), (r.ping = !0)),
        i.isUserAvatar && null != e && (e = await (0, m.w)(e)),
        M && A.A.taskbarFlash && w.Ay.flashFrame(!0),
        k)
    ) {
        let a = {
            title: t,
            body: n,
        };
        null != e && (a.icon = e),
            (null == i ? void 0 : i.sound) != null && (a.sound = W(i.sound, i.soundpack)),
            (null == i ? void 0 : i.tag) != null && (a.identifier = i.tag),
            (null == i ? void 0 : i.fallbackDeepLink) != null && (a.fallbackDeepLink = i.fallbackDeepLink),
            Array.isArray(i.actions) && (a.actions = i.actions);
        let s = _.A.getCurrentConfig(
            {
                location: "showNotification",
            },
            {
                autoTrackExposure: !0,
                disable: null == i.messageRecord,
            },
        );
        if (null != i.messageRecord && s.enabled) {
            let e = i.messageRecord.channel_id,
                t = i.messageRecord.author;
            a.threadIdentifier = e;
            let n = O.A.getChannel(e);
            null != n && (a.groupName = (0, u.m1)(n, I.default, v.A));
            let r = null == n ? void 0 : n.getGuildId();
            if (
                ((a.senderIdentifier = t.id),
                (a.senderDisplayName = N.Ay.getName(r, e, t)),
                (a.senderAvatar = t.getAvatarURL(r, 128, !1, !1)),
                (a.attachments = []),
                s.includeStickers)
            )
                for (let e of (0, y.o6)(i.messageRecord)) {
                    let t = (0, y.zg)(e, {
                        isPreview: !0,
                    });
                    null != t &&
                        a.attachments.push({
                            url: t,
                            type: "image/png",
                        });
                }
            if (s.includeImages)
                for (let e of i.messageRecord.attachments)
                    !(0, l.Lt)(null != (c = e.flags) ? c : 0, P.sbO.CONTAINS_EXPLICIT_MEDIA) &&
                        !(0, l.Lt)(null != (d = e.flags) ? d : 0, P.sbO.IS_SPOILER) &&
                        (null == (f = e.content_type) ? void 0 : f.startsWith("image/")) &&
                        a.attachments.push({
                            url: e.proxy_url,
                            type: e.content_type,
                        });
            null != i.emoji &&
                p.A.getConfig({
                    location: "showNotification",
                }).enabled &&
                (a.emoji = i.emoji.map((e) =>
                    x(
                        {
                            url: (0, C._O)({
                                id: e.id,
                                animated: !1,
                                size: 96,
                            }),
                        },
                        e,
                    ),
                ));
        }
        try {
            let e = await w.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
            Z[e] = {
                options: i,
                trackingProps: r,
                clickTrackingProps: z,
            };
            let t = {
                close() {
                    try {
                        w.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
                    } catch (e) {
                        G.warn("Native notification removal failed with error: ", e);
                    }
                },
            };
            return (
                et(t, r),
                {
                    notification: t,
                    trackingProps: r,
                }
            );
        } catch (e) {
            G.warn("Native notification failed with error: ", e);
        }
    }
    null != i.sound && k && (ee(i.sound, null != (g = i.volume) ? g : 1, i.soundpack), (r.ping = !0));
    let en = {
        icon: e,
        body: n,
        tag: Q,
        silent: !0,
    };
    try {
        E = new X(t, en);
    } catch (e) {
        return;
    }
    return (et(E, r),
    (E.onclick = (e) => {
        var t;
        R.isPlatformEmbedded ? w.Ay.focus() : (window.focus(), E.close()),
            i.omitClickTracking ||
                (T.default.track(
                    P.HAw.NOTIFICATION_ACTION,
                    x(
                        {
                            action: "CLICK",
                        },
                        r,
                    ),
                ),
                T.default.track(P.HAw.NOTIFICATION_CLICKED, z));
        let n = "";
        null == (t = i.onClick) || t.call(i, n);
    }),
    U)
        ? {
              notification: E,
              trackingProps: r,
          }
        : {
              notification: {
                  close() {
                      var e;
                      null == E || null == (e = E.onclose) || e.call(E);
                  },
              },
              trackingProps: r,
          };
}
let en = {
    hasPermission: $,
    requestPermission: Q,
    showNotification: et,
    playNotificationSound: K,
};
