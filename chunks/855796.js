var i = n(544891),
    r = n(780384),
    l = n(668781),
    a = n(881052),
    s = n(981631),
    o = n(388032);
async function c(e) {
    let { userId: t, applicationId: n, onSuccess: r, type: c } = e;
    try {
        await i.tn.put({
            url: s.ANM.USER_GAME_RELATIONSHIP(t, n),
            body: { type: c },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            r();
    } catch (t) {
        let e = new a.Hx(t);
        l.Z.show({
            title: o.intl.string(o.t['328j/P']),
            body: e.getAnyErrorMessage()
        });
    }
}
async function d(e) {
    let { userId: t, applicationId: n, onSuccess: r } = e;
    try {
        await i.tn.put({
            url: s.ANM.USER_GAME_RELATIONSHIP(t, n),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            r();
    } catch (t) {
        let e = new a.Hx(t);
        l.Z.show({
            title: o.intl.string(o.t['328j/P']),
            body: e.getAnyErrorMessage()
        });
    }
}
async function u(e) {
    let { userId: t, applicationId: n } = e;
    await c({
        userId: t,
        applicationId: n,
        type: s.OGo.FRIEND,
        onSuccess: () => {
            r.uv.announce(o.intl.string(o.t.taJiub));
        }
    });
}
async function h(e) {
    let { userId: t, applicationId: n } = e;
    await d({
        userId: t,
        applicationId: n,
        onSuccess: () => {
            r.uv.announce(o.intl.string(o.t.zRf8cH));
        }
    });
}
async function m(e) {
    let { userId: t, applicationId: n } = e;
    await d({
        userId: t,
        applicationId: n,
        onSuccess: () => {
            r.uv.announce(o.intl.string(o.t.XMf21t));
        }
    });
}
t.Z = {
    removeGameFriend: h,
    acceptGameFriendRequest: u,
    cancelGameFriendRequest: m
};
