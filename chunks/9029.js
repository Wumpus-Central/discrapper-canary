n.d(t, { Z: () => d });
var i = n(481060),
    l = n(570140),
    r = n(317770),
    a = n(507294),
    s = n(458034);
class o extends r.Z {
    _initialize() {
        l.Z.subscribe('GUILD_ROLE_CONNECTIONS_MODAL_SHOW', this.handleShow);
    }
    _terminate() {
        l.Z.unsubscribe('GUILD_ROLE_CONNECTIONS_MODAL_SHOW', this.handleShow);
    }
    handleShow(e) {
        let { role: t, guildId: n } = e;
        if (!(0, i.nfh)('GUILD_ROLE_CONNECTIONS_MODAL_KEY')) {
            var l;
            null != t && (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) === null ? (0, a.g)(t, n) : (0, s.Am)(n);
        }
    }
}
let d = new o();
