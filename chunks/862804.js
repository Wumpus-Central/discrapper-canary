n.d(t, { j: () => h });
var i = n(47167),
    l = n(958340),
    a = n(734057),
    s = n(71393),
    r = n(576705),
    o = n(994500),
    d = n(287809),
    c = n(486020),
    u = n(405269);
n(427930);
var m = n(985018);
function _(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: c.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: m.intl.formatToPlainString(m.t["+l04BN"], { origin: e.name, timestamp: t }),
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
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.A,
            c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.A,
            h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.A,
            p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : l.A,
            { snapshotIndex: g, parentMessage: A, messageSnapshot: f } = this,
            x = (0, u.Fe)(f.message.timestamp),
            C = e.getChannel(this.parentMessage.channel_id);
        if (null != C && C.guild_id === A.messageReference?.guild_id) {
            var E;
            let l = e.getChannel(A.messageReference?.channel_id);
            if (null == l) {
                let e = h.getGuild(C.guild_id);
                return null == e ? { snapshotIndex: g } : { snapshotIndex: g, footerInfo: _(e, x) };
            }
            return c.can(l.accessPermissions, l)
                ? {
                      snapshotIndex: g,
                      footerInfo: {
                          originLabel: (E = (0, i.m1)(l, t, n, !0)),
                          timestampLabel: x,
                          accessibilityLabel: m.intl.formatToPlainString(m.t["+l04BN"], { origin: E, timestamp: x }),
                      },
                  }
                : { snapshotIndex: g };
        }
        let I = A.messageReference?.guild_id;
        if (null == I) return { snapshotIndex: g };
        let v = h.getGuild(I) ?? p.getGuild(I);
        return null == v ? { snapshotIndex: g } : { snapshotIndex: g, footerInfo: _(v, x) };
    }
}
