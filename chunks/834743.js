n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(82950),
    o = n(623624),
    s = n(650774),
    c = n(981631),
    u = n(921944),
    d = n(388032),
    p = n(241626);
class f extends i.PureComponent {
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, r.jsx)(a.Z, {
            guild: e,
            onDismissed: () => n(u.L.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? d.intl.string(d.t.hlitVQ) : d.intl.string(d.t.XHtaDD),
            cta: d.intl.string(d.t["vqb+H1"]),
            trackingSource: c.PsQ.GUILD_SUBSCRIPTION_NOTICE,
            type: c.vID.GUILD_BOOSTING,
            image: p,
            imageMarginX: 26,
        });
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "handleButtonClick", () => {
                let { guild: e } = this.props;
                (0, o.f)({
                    guildId: e.id,
                    location: {
                        section: c.jXE.CHANNEL_NOTICE,
                        object: c.qAy.SERVER_STATUS_CTA,
                    },
                });
            });
    }
}
let g = l.ZP.connectStores([s.Z], (e) => {
    let { guild: t } = e;
    return { memberCount: s.Z.getMemberCount(t.id) };
})(f);
