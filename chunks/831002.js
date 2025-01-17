n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    r = n.n(l),
    a = n(442837),
    s = n(481060),
    o = n(40851),
    c = n(358221),
    d = n(431368),
    u = n(167675),
    h = n(418469),
    p = n(673539),
    m = n(218035),
    f = n(775666),
    g = n(423589),
    C = n(592125),
    x = n(496675),
    v = n(881824),
    _ = n(146085),
    I = n(427679),
    E = n(354459),
    b = n(388032);
function Z(e) {
    let { channelId: t, closePopout: n, appContext: l, onSelect: Z } = e,
        S = (0, a.e7)([c.Z], () => c.Z.getSelectedParticipant(t)),
        N = (null == S ? void 0 : S.type) === E.fO.STREAM ? S.stream : null,
        T = (0, p.Z)(t);
    return (0, i.jsxs)(s.Menu, {
        navId: 'stage-channel-call-overflow-popout',
        onClose: n,
        'aria-label': b.intl.string(b.t.pkYeAw),
        onSelect: Z,
        children: [
            (function (e) {
                let t = (0, a.e7)([C.Z], () => C.Z.getChannel(e), [e]),
                    n = (0, a.e7)([x.Z], () => x.Z.can(_.yP, t)),
                    l = (0, a.e7)([I.Z], () => I.Z.getStageInstanceByChannel(e), [e]),
                    r = (0, o.bp)(),
                    c = () => null != t && (0, v.T)(t, r);
                return (null == t ? void 0 : t.isGuildStageVoice()) && n
                    ? null != l
                        ? (0, i.jsx)(s.MenuItem, {
                              id: 'edit-stage',
                              label: b.intl.string(b.t['I+9bLy']),
                              action: c
                          })
                        : (0, i.jsx)(s.MenuItem, {
                              id: 'start-stage',
                              label: b.intl.string(b.t.OYbHfn),
                              action: c
                          })
                    : null;
            })(t),
            (function (e) {
                let t = (0, a.e7)([C.Z], () => C.Z.getChannel(e), [e]);
                r()(null != t, 'useNotificationSettingsItem: channel cannot be undefined');
                let n = (0, g.Mn)('StageChannelCallOverflowMenu'),
                    i = (0, f.ZP)(t),
                    l = (0, m.Z)(t);
                return n ? i : l;
            })(t),
            (0, u.Z)(),
            (0, d.Z)(t),
            T,
            (0, h.Z)(N, l)
        ]
    });
}
