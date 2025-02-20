n.d(t, { Z: () => f }), n(47120);
var r = n(570140),
    i = n(317770),
    l = n(314897),
    o = n(57562),
    a = n(882029),
    s = n(955204),
    c = n(351780),
    u = n(843693);
function d(e, t, n) {
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
let p = new Set();
class h extends i.Z {
    _initialize() {
        r.Z.subscribe('MESSAGE_CREATE', this.handleMessageCreate), r.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.handleSettingsUpdate);
    }
    _terminate() {
        r.Z.unsubscribe('MESSAGE_CREATE', this.handleMessageCreate), r.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.handleSettingsUpdate);
    }
    constructor(...e) {
        super(...e),
            d(this, 'handleSettingsUpdate', (e) => {
                let { settings: t } = e;
                t.enabled ? (0, o.T)(s.hn.ENABLE_POGGERMODE) : !1 === t.enabled && (0, o.T)(s.hn.DISABLE_POGGERMODE), Object.keys(t).some((e) => e.startsWith('confetti')) && (0, o.T)(s.hn.CUSTOMIZE_CONFETTI);
            }),
            d(this, 'handleMessageCreate', (e) => {
                var t;
                let {
                    channelId: n,
                    message: { author: r, nonce: i, mentions: d }
                } = e;
                if (!c.Z.isEnabled()) return !1;
                let h = l.default.getId();
                if (((null == d ? void 0 : d.find((e) => e.id === h)) != null ? (0, o.T)(s.hn.PING_ME) : (null !== (t = null == d ? void 0 : d.length) && void 0 !== t ? t : 0) > 0 && (null == r ? void 0 : r.id) === h && (0, o.T)(s.hn.PING_SOMEONE), !(0, u.wU)(null == r ? void 0 : r.id, h, i, p))) return !1;
                let f = u.ZP.getMostRecentMessageCombo(n),
                    { combo: g } = null != f ? f : {};
                if (null == g) return !1;
                Object.values(s.hn).forEach((e) => {
                    if (null != a.Z.getUnlocked(e)) return;
                    let t = (0, s.oX)(e),
                        n = null == t ? void 0 : t.checkUnlock;
                    null != n && !1 !== n(g) && (0, o.T)(e);
                });
            });
    }
}
let f = new h();
