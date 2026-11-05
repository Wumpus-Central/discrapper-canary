i.d(n, { A: () => N });
var e = i(765178),
    a = i(235876),
    r = i(620632),
    o = i(308528),
    s = i(138399),
    c = i(181658),
    d = i(652215),
    l = i(381941);
let u = {
    async createInvite(t, n, i) {
        try {
            let { body: e } = await r.Bo.post({
                url: d.Rsh.GAME_ORGANIZATION_INVITES(t, n),
                body: { target_user_id: i },
                rejectWithError: !0,
            });
            return e.code;
        } catch (t) {
            throw new c.A(t);
        }
    },
    async sendInvite(t, n) {
        let i = await o.A.getOrEnsurePrivateChannel(t);
        await s.A.sendMessage(
            i,
            {
                content: `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/game-organizations/invite/${n}`,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: [],
            },
            !1,
            { location: l.Hx.GAME_ORGANIZATION_INVITE },
        );
    },
};
var g = i(172799),
    E = i(792996);
let I = new Map();
async function N(t, n, i, r) {
    ((0, a.Q)(t, i.id, g.iu.SENDING), e.O.announce(E.intl.string(E.t.kC3ZRG)));
    try {
        let r = `${t}:${i.id}`,
            o = I.get(r);
        (null == o && ((o = await u.createInvite(n.applicationId, n.gameOrganizationId, i.id)), I.set(r, o)),
            await u.sendInvite(i.id, o),
            I.delete(r),
            (0, a.Q)(t, i.id, g.iu.SENT),
            e.O.announce(E.intl.string(E.t.PuLLzP)));
    } catch {
        ((0, a.Q)(t, i.id, g.iu.ERROR), e.O.announce(E.intl.string(E.t.fEptJP)), r());
    }
}
