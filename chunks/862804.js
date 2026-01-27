n.d(t, {
    j: () => g,
});
var r = n(47167),
    i = n(958340),
    l = n(734057),
    a = n(71393),
    s = n(576705),
    o = n(994500),
    c = n(287809),
    u = n(486020),
    d = n(405269);
n(427930);
var p = n(985018);

function m(e, t, n) {
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

function f(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: u.Ay.getGuildIconURL({
            id: e.id,
            size: 16,
            icon: e.icon,
            canAnimate: !1,
        }),
        timestampLabel: t,
        accessibilityLabel: p.intl.formatToPlainString(p.t["+l04BN"], {
            origin: e.name,
            timestamp: t,
        }),
    };
}
class g {
    getForwardInfo() {
        var e, t, n, u, m;
        let g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.A,
            h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.A,
            b = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.A,
            A = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.A,
            y = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.A,
            { snapshotIndex: v, parentMessage: x, messageSnapshot: O } = this,
            E = (0, d.Fe)(O.message.timestamp),
            j = g.getChannel(this.parentMessage.channel_id);
        if (null != j && j.guild_id === (null == (t = x.messageReference) ? void 0 : t.guild_id)) {
            let e = g.getChannel(null == (u = x.messageReference) ? void 0 : u.channel_id);
            if (null == e) {
                let e = A.getGuild(j.guild_id);
                return null == e
                    ? {
                          snapshotIndex: v,
                      }
                    : {
                          snapshotIndex: v,
                          footerInfo: f(e, E),
                      };
            }
            return b.can(e.accessPermissions, e)
                ? {
                      snapshotIndex: v,
                      footerInfo: {
                          originLabel: (m = (0, r.m1)(e, h, _, !0)),
                          timestampLabel: E,
                          accessibilityLabel: p.intl.formatToPlainString(p.t["+l04BN"], {
                              origin: m,
                              timestamp: E,
                          }),
                      },
                  }
                : {
                      snapshotIndex: v,
                  };
        }
        let C = null == (n = x.messageReference) ? void 0 : n.guild_id;
        if (null == C)
            return {
                snapshotIndex: v,
            };
        let I = null != (e = A.getGuild(C)) ? e : y.getGuild(C);
        return null == I
            ? {
                  snapshotIndex: v,
              }
            : {
                  snapshotIndex: v,
                  footerInfo: f(I, E),
              };
    }
    constructor(e, t, n) {
        m(this, "parentMessage", void 0),
            m(this, "messageSnapshot", void 0),
            m(this, "snapshotIndex", void 0),
            (this.parentMessage = e),
            (this.messageSnapshot = t),
            (this.snapshotIndex = n);
    }
}
