n.d(t, { A: () => c }), n(321073);
var i = n(451988),
    r = n(73153),
    a = n(272355),
    l = n(654107),
    s = n(287809),
    o = n(318937);
n(824217);
class d extends a.A {
    linesToUpdate = {};
    lineBatchTimer = new i.IX();
    _initialize() {
        __OVERLAY__ ||
            (r.h.subscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint),
            r.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived));
    }
    _terminate() {
        __OVERLAY__ ||
            (r.h.unsubscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint),
            r.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived),
            this.lineBatchTimer.stop());
    }
    _handleDrawLinePoint = (e) => {
        let { channelId: t, lineId: n, streamerId: i, point: r } = e;
        null == this.linesToUpdate[n]
            ? (this.linesToUpdate[n] = { channelId: t, streamerId: i, points: [r] })
            : this.linesToUpdate[n].points.push(r),
            null == this.lineBatchTimer._ref && this.lineBatchTimer.start(500, this.sendLineBatch);
    };
    sendLineBatch = () => {
        for (let e in this.linesToUpdate) {
            let { channelId: t, points: n, streamerId: i } = this.linesToUpdate[e];
            (0, o.ZW)(t, e, i, n);
        }
        (this.linesToUpdate = {}), this.lineBatchTimer.stop();
    };
    _handleVoiceChannelEffectReceived(e) {
        let { lineId: t, points: n, userId: i, streamerId: r, emojiHose: a } = e;
        if (null != r && i !== s.default.getCurrentUser()?.id)
            if (null != n && null != t) {
                let e = s.default.getUser(i);
                null != e && (0, l.l0)(e.getAvatarURL(null, 80)), (0, o.d4)(t, i, r, n);
            } else null != a && ((a.lastUpdatedAt = Date.now()), (0, o.Rl)(a, i, r));
    }
}
let c = new d();
