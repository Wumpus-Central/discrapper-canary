n.d(t, { Z: () => d });
var r = n(544891),
    i = n(780384),
    a = n(668781),
    o = n(881052),
    s = n(981631),
    l = n(388032);
async function c(e) {
    let { userId: t, applicationId: n, onSuccess: i, type: c } = e;
    try {
        await r.tn.put({
            url: s.ANM.USER_GAME_RELATIONSHIP(t, n),
            body: { type: c },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            i();
    } catch (t) {
        let e = new o.Hx(t);
        a.Z.show({
            title: l.intl.string(l.t['328j/P']),
            body: e.getAnyErrorMessage()
        });
    }
}
async function u(e) {
    let { userId: t, applicationId: n, onSuccess: i } = e;
    try {
        await r.tn.del({
            url: s.ANM.USER_GAME_RELATIONSHIP(t, n),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            i();
    } catch (t) {
        let e = new o.Hx(t);
        a.Z.show({
            title: l.intl.string(l.t['328j/P']),
            body: e.getAnyErrorMessage()
        });
    }
}
let d = {
    removeGameFriend: async function (e) {
        let { userId: t, applicationId: n } = e;
        await u({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                i.uv.announce(l.intl.string(l.t.zRf8cH));
            }
        });
    },
    acceptGameFriendRequest: async function (e) {
        let { userId: t, applicationId: n } = e;
        await c({
            userId: t,
            applicationId: n,
            type: s.OGo.FRIEND,
            onSuccess: () => {
                i.uv.announce(l.intl.string(l.t.taJiub));
            }
        });
    },
    cancelGameFriendRequest: async function (e) {
        let { userId: t, applicationId: n } = e;
        await u({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                i.uv.announce(l.intl.string(l.t.XMf21t));
            }
        });
    }
};
