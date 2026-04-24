n.d(t, { j: () => h });
var i = n(47167),
    l = n(958340),
    a = n(734057),
    r = n(71393),
    s = n(576705),
    o = n(994500),
    c = n(287809),
    d = n(486020),
    u = n(58703);
n(427930);
var _ = n(985018);
function m(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: d.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: _.intl.formatToPlainString(_.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class h {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.A,
            d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.A,
            h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.A,
            p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : l.A,
            { snapshotIndex: g, parentMessage: f, messageSnapshot: x } = this,
            A = (0, u.Fe)(x.message.timestamp),
            C = e.getChannel(this.parentMessage.channel_id);
        if (null != C && C.guild_id === f.messageReference?.guild_id) {
            var v;
            let l = e.getChannel(f.messageReference?.channel_id);
            if (null == l) {
                let e = h.getGuild(C.guild_id);
                return null == e ? { snapshotIndex: g } : { snapshotIndex: g, footerInfo: m(e, A) };
            }
            return d.can(l.accessPermissions, l)
                ? {
                      snapshotIndex: g,
                      footerInfo: {
                          originLabel: (v = (0, i.m1)(l, t, n, !0)),
                          timestampLabel: A,
                          accessibilityLabel: _.intl.formatToPlainString(_.t["+l04BN"], { origin: v, timestamp: A }),
                      },
                  }
                : { snapshotIndex: g };
        }
        let I = f.messageReference?.guild_id;
        if (null == I) return { snapshotIndex: g };
        let E = h.getGuild(I) ?? p.getGuild(I);
        return null == E ? { snapshotIndex: g } : { snapshotIndex: g, footerInfo: m(E, A) };
    }
}
