n.d(t, { Z: () => g }), n(388685);
var r = n(570140),
    i = n(317770),
    l = n(314897),
    a = n(57562),
    s = n(882029),
    o = n(955204),
    c = n(351780),
    u = n(843693);
function d(e, t, n) {
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
let p = new Set();
class f extends i.Z {
    _initialize() {
        r.Z.subscribe("MESSAGE_CREATE", this.handleMessageCreate),
            r.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate);
    }
    _terminate() {
        r.Z.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate),
            r.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate);
    }
    constructor(...e) {
        super(...e),
            d(this, "handleSettingsUpdate", (e) => {
                let { settings: t } = e;
                t.enabled ? (0, a.T)(o.hn.ENABLE_POGGERMODE) : !1 === t.enabled && (0, a.T)(o.hn.DISABLE_POGGERMODE),
                    Object.keys(t).some((e) => e.startsWith("confetti")) && (0, a.T)(o.hn.CUSTOMIZE_CONFETTI);
            }),
            d(this, "handleMessageCreate", (e) => {
                var t;
                let {
                    channelId: n,
                    message: { author: r, nonce: i, mentions: d },
                } = e;
                if (!c.Z.isEnabled()) return !1;
                let f = l.default.getId();
                if (
                    ((null == d ? void 0 : d.find((e) => e.id === f)) != null
                        ? (0, a.T)(o.hn.PING_ME)
                        : (null != (t = null == d ? void 0 : d.length) ? t : 0) > 0 &&
                          (null == r ? void 0 : r.id) === f &&
                          (0, a.T)(o.hn.PING_SOMEONE),
                    !(0, u.wU)(null == r ? void 0 : r.id, f, i, p))
                )
                    return !1;
                let g = u.ZP.getMostRecentMessageCombo(n),
                    { combo: h } = null != g ? g : {};
                if (null == h) return !1;
                Object.values(o.hn).forEach((e) => {
                    if (null != s.Z.getUnlocked(e)) return;
                    let t = (0, o.oX)(e),
                        n = null == t ? void 0 : t.checkUnlock;
                    null != n && !1 !== n(h) && (0, a.T)(e);
                });
            });
    }
}
let g = new f();
