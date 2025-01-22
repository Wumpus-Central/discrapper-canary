r.d(n, {
    $K: function () {
        return D;
    },
    OQ: function () {
        return S;
    },
    RE: function () {
        return C;
    },
    Xe: function () {
        return x;
    },
    dv: function () {
        return N;
    },
    rS: function () {
        return A;
    },
    t0: function () {
        return T;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(392711),
    s = r.n(o),
    l = r(544891),
    u = r(381499),
    c = r(570140),
    d = r(479531),
    f = r(339085),
    p = r(633302),
    h = r(856985),
    _ = r(38618),
    m = r(675478),
    g = r(486472),
    E = r(823379),
    v = r(668781),
    y = r(981631),
    b = r(526761),
    I = r(388032);
function T(e) {
    m.hW.updateAsync(
        'textAndImages',
        (n) => {
            (n.diversitySurrogate = u.Gm.create()), (n.diversitySurrogate.value = e);
        },
        b.fy.FREQUENT_USER_ACTION
    );
}
function S(e) {
    c.Z.dispatch({
        type: 'EMOJI_FETCH',
        guildId: e
    }),
        l.tn
            .get({
                url: y.ANM.GUILD_EMOJIS(e),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (n) =>
                    c.Z.dispatch({
                        type: 'EMOJI_FETCH_SUCCESS',
                        guildId: e,
                        emojis: n.body
                    }),
                () =>
                    c.Z.dispatch({
                        type: 'EMOJI_FETCH_FAILURE',
                        guildId: e
                    })
            );
}
function A(e) {
    let { guildId: n, image: r, name: i, roles: a } = e;
    return (
        c.Z.dispatch({
            type: 'EMOJI_UPLOAD_START',
            guildId: n
        }),
        l.tn
            .post({
                url: y.ANM.GUILD_EMOJIS(n),
                body: {
                    image: r,
                    name: i,
                    roles: a
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                () =>
                    c.Z.dispatch({
                        type: 'EMOJI_UPLOAD_STOP',
                        guildId: n
                    }),
                (e) => (
                    c.Z.dispatch({
                        type: 'EMOJI_UPLOAD_STOP',
                        guildId: n
                    }),
                    Promise.reject(e)
                )
            )
    );
}
function C(e, n) {
    return (
        c.Z.dispatch({
            type: 'EMOJI_DELETE',
            guildId: e,
            emojiId: n
        }),
        l.tn.del({
            url: y.ANM.GUILD_EMOJI(e, n),
            oldFormErrors: !0,
            rejectWithError: !1
        })
    );
}
async function N(e) {
    let { guildId: n, emojiId: r, name: i, roles: a } = e;
    try {
        return await l.tn.patch({
            url: y.ANM.GUILD_EMOJI(n, r),
            body: {
                name: i,
                roles: a
            },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    } catch (e) {
        throw new d.Z(e);
    }
}
function R(e) {
    if (g.Z.totalUnavailableGuilds > 0 || !_.Z.isConnected()) return e;
    let n = e
        .map((e) => {
            var n;
            return null !== (n = f.ZP.getCustomEmojiById(e)) && void 0 !== n ? n : p.ZP.getByName(e);
        })
        .filter(E.lm);
    return [...(0, h.Z)(n).keys()];
}
function O(e) {
    var n, r, i;
    return null == e ? null : null !== (i = null !== (r = e.id) && void 0 !== r ? r : null === (n = p.ZP.convertSurrogateToBase(e.surrogates)) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : e.name;
}
function D(e) {
    let n = O(e);
    if (null != n)
        m.DZ.updateAsync(
            'favoriteEmojis',
            (e) =>
                ((e.emojis = R(e.emojis)), s().size(e.emojis) >= b.oX)
                    ? (v.Z.show({
                          title: I.intl.string(I.t['+XYXtb']),
                          body: I.intl.formatToPlainString(I.t.JaIyFh, { count: b.oX })
                      }),
                      !1)
                    : !e.emojis.includes(n) && void e.emojis.push(n),
            b.fy.INFREQUENT_USER_ACTION
        );
}
function x(e) {
    let n = O(e);
    if (null != n)
        m.DZ.updateAsync(
            'favoriteEmojis',
            (e) => {
                if (((e.emojis = R(e.emojis)), !e.emojis.includes(n))) return !1;
                e.emojis = e.emojis.filter((e) => n !== e);
            },
            b.fy.INFREQUENT_USER_ACTION
        );
}
