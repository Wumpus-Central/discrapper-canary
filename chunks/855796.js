n.d(t, { Z: () => f });
var r = n(544891),
    i = n(780384),
    a = n(668781),
    o = n(881052),
    s = n(981631),
    l = n(388032);
function c(e) {
    let t = new o.Hx(e).getAnyErrorMessage();
    a.Z.show({
        title: l.intl.string(l.t['328j/P']),
        body: null != t ? t : l.intl.string(l.t.fEptJC)
    });
}
function u(e) {
    let { userId: t, applicationId: n, onSuccess: i, type: a } = e;
    return r.tn
        .put({
            url: s.ANM.USER_GAME_RELATIONSHIP(t, n),
            body: { type: a },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(() => {
            i();
        })
        .catch((e) => (c(e), Promise.reject(e)));
}
async function d(e) {
    let { userId: t, applicationId: n, onSuccess: i } = e;
    try {
        (await r.tn.del({
            url: s.ANM.USER_GAME_RELATIONSHIP(t, n),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            i());
    } catch (e) {
        c(e);
    }
}
let f = {
    removeGameFriend: async function (e) {
        let { userId: t, applicationId: n } = e;
        await d({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                i.uv.announce(l.intl.string(l.t.zRf8cH));
            }
        });
    },
    acceptGameFriendRequest: function (e) {
        let { userId: t, applicationId: n } = e;
        return u({
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
        await d({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                i.uv.announce(l.intl.string(l.t.XMf21t));
            }
        });
    }
};
