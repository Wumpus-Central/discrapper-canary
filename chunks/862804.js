n.d(t, { j: () => g });
var i = n(47167),
    l = n(958340),
    s = n(734057),
    a = n(71393),
    r = n(576705),
    o = n(994500),
    d = n(287809),
    c = n(486020),
    u = n(58703);
n(427930);
var m = n(985018);
function h(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: c.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: m.intl.formatToPlainString(m.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class g {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.A,
            c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.A,
            g = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.A,
            A = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : l.A,
            { snapshotIndex: p, parentMessage: x, messageSnapshot: f } = this,
            C = (0, u.Fe)(f.message.timestamp),
            E = e.getChannel(this.parentMessage.channel_id);
        if (null != E && E.guild_id === x.messageReference?.guild_id) {
            var v;
            let l = e.getChannel(x.messageReference?.channel_id);
            if (null == l) {
                let e = g.getGuild(E.guild_id);
                return null == e ? { snapshotIndex: p } : { snapshotIndex: p, footerInfo: h(e, C) };
            }
            return c.can(l.accessPermissions, l)
                ? {
                      snapshotIndex: p,
                      footerInfo: {
                          originLabel: (v = (0, i.m1)(l, t, n, !0)),
                          timestampLabel: C,
                          accessibilityLabel: m.intl.formatToPlainString(m.t["+l04BN"], { origin: v, timestamp: C }),
                      },
                  }
                : { snapshotIndex: p };
        }
        let I = x.messageReference?.guild_id;
        if (null == I) return { snapshotIndex: p };
        let _ = g.getGuild(I) ?? A.getGuild(I);
        return null == _ ? { snapshotIndex: p } : { snapshotIndex: p, footerInfo: h(_, C) };
    }
}
