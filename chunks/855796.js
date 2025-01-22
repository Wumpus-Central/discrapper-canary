var i = r(544891),
    a = r(780384),
    o = r(668781),
    s = r(881052),
    l = r(981631),
    u = r(388032);
async function c(e) {
    let { userId: n, applicationId: r, onSuccess: a, type: c } = e;
    try {
        await i.tn.put({
            url: l.ANM.USER_GAME_RELATIONSHIP(n, r),
            body: { type: c },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            a();
    } catch (n) {
        let e = new s.Hx(n);
        o.Z.show({
            title: u.intl.string(u.t['328j/P']),
            body: e.getAnyErrorMessage()
        });
    }
}
async function d(e) {
    let { userId: n, applicationId: r, onSuccess: a } = e;
    try {
        await i.tn.del({
            url: l.ANM.USER_GAME_RELATIONSHIP(n, r),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            a();
    } catch (n) {
        let e = new s.Hx(n);
        o.Z.show({
            title: u.intl.string(u.t['328j/P']),
            body: e.getAnyErrorMessage()
        });
    }
}
async function f(e) {
    let { userId: n, applicationId: r } = e;
    await c({
        userId: n,
        applicationId: r,
        type: l.OGo.FRIEND,
        onSuccess: () => {
            a.uv.announce(u.intl.string(u.t.taJiub));
        }
    });
}
async function p(e) {
    let { userId: n, applicationId: r } = e;
    await d({
        userId: n,
        applicationId: r,
        onSuccess: () => {
            a.uv.announce(u.intl.string(u.t.zRf8cH));
        }
    });
}
async function h(e) {
    let { userId: n, applicationId: r } = e;
    await d({
        userId: n,
        applicationId: r,
        onSuccess: () => {
            a.uv.announce(u.intl.string(u.t.XMf21t));
        }
    });
}
n.Z = {
    removeGameFriend: p,
    acceptGameFriendRequest: f,
    cancelGameFriendRequest: h
};
