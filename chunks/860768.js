n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(843472),
    s = n(309010),
    o = n(926466),
    d = n(652215),
    c = n(49999),
    u = n(985018),
    A = n(988726);
class h extends a.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, r.mMO)(async () => {
            let { default: t } = await Promise.all([n.e("43600"), n.e("12629")]).then(n.bind(n, 234355));
            return (n) => (0, i.jsx)(t, { ...n, guild: e, source: d.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = s.A.getChannelId(),
            t = u.intl.formatToPlainString(u.t.DEn7nu, { invitePeople: u.intl.string(u.t.Sd8Ixw) });
        this.props.markAsDismissed(c.i.UNKNOWN), null != e && l.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${u.intl.string(u.t.VWqWZQ)}
${u.intl.string(u.t["0Lgb/K"])}`;
        return (0, i.jsx)(o.A, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: u.intl.string(u.t.Sd8Ixw),
            trackingSource: d.kZU.INVITE_NOTICE,
            type: d.n5X.INVITE,
            image: A,
            imageMarginX: 46,
        });
    }
}
let _ = h;
