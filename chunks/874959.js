n.d(t, {
    A: () => d,
}),
    n(896048),
    n(321073);
var r = n(451988),
    i = n(73153),
    l = n(272355),
    a = n(654107),
    s = n(287809),
    o = n(318937);

function c(e, t, n) {
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
n(824217);
class u extends l.A {
    _initialize() {
        __OVERLAY__ ||
            (i.h.subscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint),
            i.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived));
    }
    _terminate() {
        __OVERLAY__ ||
            (i.h.unsubscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint),
            i.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived),
            this.lineBatchTimer.stop());
    }
    _handleVoiceChannelEffectReceived(e) {
        var t;
        let { lineId: n, points: r, userId: i, streamerId: l, emojiHose: c } = e;
        if (null != l && i !== (null == (t = s.default.getCurrentUser()) ? void 0 : t.id))
            if (null != r && null != n) {
                let e = s.default.getUser(i);
                null != e && (0, a.l0)(e.getAvatarURL(null, 80)), (0, o.d4)(n, i, l, r);
            } else null != c && ((c.lastUpdatedAt = Date.now()), (0, o.Rl)(c, i, l));
    }
    constructor(...e) {
        super(...e),
            c(this, "linesToUpdate", {}),
            c(this, "lineBatchTimer", new r.IX()),
            c(this, "_handleDrawLinePoint", (e) => {
                let { channelId: t, lineId: n, streamerId: r, point: i } = e;
                null == this.linesToUpdate[n]
                    ? (this.linesToUpdate[n] = {
                          channelId: t,
                          streamerId: r,
                          points: [i],
                      })
                    : this.linesToUpdate[n].points.push(i),
                    null == this.lineBatchTimer._ref && this.lineBatchTimer.start(500, this.sendLineBatch);
            }),
            c(this, "sendLineBatch", () => {
                for (let e in this.linesToUpdate) {
                    let { channelId: t, points: n, streamerId: r } = this.linesToUpdate[e];
                    (0, o.ZW)(t, e, r, n);
                }
                (this.linesToUpdate = {}), this.lineBatchTimer.stop();
            });
    }
}
let d = new u();
