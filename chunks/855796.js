n.d(t, { Z: () => d });
var i = n(544891),
    r = n(780384),
    a = n(668781),
    s = n(881052),
    o = n(981631),
    l = n(388032);
async function u(e) {
    let { userId: t, applicationId: n, onSuccess: r, type: u } = e;
    try {
        await i.tn.put({
            url: o.ANM.USER_GAME_RELATIONSHIP(t, n),
            body: { type: u },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            r();
    } catch (t) {
        let e = new s.Hx(t);
        a.Z.show({
            title: l.intl.string(l.t['328j/P']),
            body: e.getAnyErrorMessage()
        });
    }
}
async function c(e) {
    let { userId: t, applicationId: n, onSuccess: r } = e;
    try {
        await i.tn.del({
            url: o.ANM.USER_GAME_RELATIONSHIP(t, n),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            r();
    } catch (t) {
        let e = new s.Hx(t);
        a.Z.show({
            title: l.intl.string(l.t['328j/P']),
            body: e.getAnyErrorMessage()
        });
    }
}
let d = {
    removeGameFriend: async function (e) {
        let { userId: t, applicationId: n } = e;
        await c({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                r.uv.announce(l.intl.string(l.t.zRf8cH));
            }
        });
    },
    acceptGameFriendRequest: async function (e) {
        let { userId: t, applicationId: n } = e;
        await u({
            userId: t,
            applicationId: n,
            type: o.OGo.FRIEND,
            onSuccess: () => {
                r.uv.announce(l.intl.string(l.t.taJiub));
            }
        });
    },
    cancelGameFriendRequest: async function (e) {
        let { userId: t, applicationId: n } = e;
        await c({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                r.uv.announce(l.intl.string(l.t.XMf21t));
            }
        });
    }
};
