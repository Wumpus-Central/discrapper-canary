n.d(t, { Z: () => h });
var i,
    r,
    l = n(442837),
    a = n(570140),
    o = n(19780);
let s = {},
    c = !1,
    u = null;
function d(e) {
    e in s && delete s[e];
}
function p() {
    if (!c && o.Z.isConnected()) {
        let e = o.Z.getChannelId();
        if (null != e) return d(e), (u = e), (c = !0), !0;
    } else if (c && !o.Z.isConnected() && null != u) return d(u), (u = null), (c = !1), !0;
    return !1;
}
class f extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(o.Z), this.syncWith([o.Z], p);
    }
    getIsPopoverDismissed(e) {
        var t;
        return null != e && null != (t = s[e]) && t;
    }
    getShouldShowPopover(e) {
        return null != e && o.Z.isConnected() && o.Z.getChannelId() === e && !this.getIsPopoverDismissed(e);
    }
}
(i = "displayName") in f
    ? Object.defineProperty(f, i, {
          value: "VoiceInvitesuggestionsStore ",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[i] = "VoiceInvitesuggestionsStore ");
let h = new f(a.Z, {
    VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function (e) {
        let { channelId: t } = e;
        return !s[t] && ((s[t] = !0), !0);
    },
});
