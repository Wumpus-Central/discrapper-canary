var i = n(481060),
    r = n(570140),
    l = n(317770),
    a = n(507294),
    s = n(458034);
class o extends l.Z {
    _initialize() {
        r.Z.subscribe('GUILD_ROLE_CONNECTIONS_MODAL_SHOW', this.handleShow);
    }
    _terminate() {
        r.Z.unsubscribe('GUILD_ROLE_CONNECTIONS_MODAL_SHOW', this.handleShow);
    }
    handleShow(e) {
        let { role: t, guildId: n } = e;
        if (!(0, i.hasModalOpen)('GUILD_ROLE_CONNECTIONS_MODAL_KEY')) {
            var r;
            null != t && (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) === null ? (0, a.openGuildRoleConnectionsConnectAccountModal)(t, n) : (0, s.Am)(n);
        }
    }
}
t.Z = new o();
