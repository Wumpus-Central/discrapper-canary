n(47120);
var i = n(570140),
    r = n(317770),
    l = n(314897),
    a = n(57562),
    s = n(882029),
    o = n(955204),
    c = n(351780),
    d = n(843693);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = new Set();
class m extends r.Z {
    _initialize() {
        i.Z.subscribe('MESSAGE_CREATE', this.handleMessageCreate), i.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.handleSettingsUpdate);
    }
    _terminate() {
        i.Z.unsubscribe('MESSAGE_CREATE', this.handleMessageCreate), i.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.handleSettingsUpdate);
    }
    constructor(...e) {
        super(...e),
            u(this, 'handleSettingsUpdate', (e) => {
                let { settings: t } = e;
                t.enabled ? (0, a.T)(o.hn.ENABLE_POGGERMODE) : !1 === t.enabled && (0, a.T)(o.hn.DISABLE_POGGERMODE), Object.keys(t).some((e) => e.startsWith('confetti')) && (0, a.T)(o.hn.CUSTOMIZE_CONFETTI);
            }),
            u(this, 'handleMessageCreate', (e) => {
                var t;
                let {
                    channelId: n,
                    message: { author: i, nonce: r, mentions: u }
                } = e;
                if (!c.Z.isEnabled()) return !1;
                let m = l.default.getId();
                if (((null == u ? void 0 : u.find((e) => e.id === m)) != null ? (0, a.T)(o.hn.PING_ME) : (null !== (t = null == u ? void 0 : u.length) && void 0 !== t ? t : 0) > 0 && (null == i ? void 0 : i.id) === m && (0, a.T)(o.hn.PING_SOMEONE), !(0, d.wU)(null == i ? void 0 : i.id, m, r, h))) return !1;
                let p = d.ZP.getMostRecentMessageCombo(n),
                    { combo: g } = null != p ? p : {};
                if (null == g) return !1;
                Object.values(o.hn).forEach((e) => {
                    if (null != s.Z.getUnlocked(e)) return;
                    let t = (0, o.oX)(e),
                        n = null == t ? void 0 : t.checkUnlock;
                    if (null != n && !1 !== n(g)) (0, a.T)(e);
                });
            });
    }
}
t.Z = new m();
