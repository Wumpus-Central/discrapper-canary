n.d(t, {
    $K: () => C,
    OQ: () => I,
    RE: () => T,
    Xe: () => R,
    dv: () => S,
    rS: () => b,
    t0: () => y
}),
    n(47120),
    n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(544891),
    s = n(381499),
    o = n(570140),
    l = n(479531),
    u = n(339085),
    c = n(633302),
    d = n(856985),
    f = n(38618),
    _ = n(675478),
    p = n(486472),
    h = n(823379),
    m = n(668781),
    g = n(981631),
    E = n(526761),
    v = n(388032);
function y(e) {
    _.hW.updateAsync(
        'textAndImages',
        (t) => {
            (t.diversitySurrogate = s.Gm.create()), (t.diversitySurrogate.value = e);
        },
        E.fy.FREQUENT_USER_ACTION
    );
}
function I(e) {
    o.Z.dispatch({
        type: 'EMOJI_FETCH',
        guildId: e
    }),
        a.tn
            .get({
                url: g.ANM.GUILD_EMOJIS(e),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (t) =>
                    o.Z.dispatch({
                        type: 'EMOJI_FETCH_SUCCESS',
                        guildId: e,
                        emojis: t.body
                    }),
                () =>
                    o.Z.dispatch({
                        type: 'EMOJI_FETCH_FAILURE',
                        guildId: e
                    })
            );
}
function b(e) {
    let { guildId: t, image: n, name: i, roles: r } = e;
    return (
        o.Z.dispatch({
            type: 'EMOJI_UPLOAD_START',
            guildId: t
        }),
        a.tn
            .post({
                url: g.ANM.GUILD_EMOJIS(t),
                body: {
                    image: n,
                    name: i,
                    roles: r
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                () =>
                    o.Z.dispatch({
                        type: 'EMOJI_UPLOAD_STOP',
                        guildId: t
                    }),
                (e) => (
                    o.Z.dispatch({
                        type: 'EMOJI_UPLOAD_STOP',
                        guildId: t
                    }),
                    Promise.reject(e)
                )
            )
    );
}
function T(e, t) {
    return (
        o.Z.dispatch({
            type: 'EMOJI_DELETE',
            guildId: e,
            emojiId: t
        }),
        a.tn.del({
            url: g.ANM.GUILD_EMOJI(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        })
    );
}
async function S(e) {
    let { guildId: t, emojiId: n, name: i, roles: r } = e;
    try {
        return await a.tn.patch({
            url: g.ANM.GUILD_EMOJI(t, n),
            body: {
                name: i,
                roles: r
            },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    } catch (e) {
        throw new l.Z(e);
    }
}
function A(e) {
    if (p.Z.totalUnavailableGuilds > 0 || !f.Z.isConnected()) return e;
    let t = e
        .map((e) => {
            var t;
            return null !== (t = u.ZP.getCustomEmojiById(e)) && void 0 !== t ? t : c.ZP.getByName(e);
        })
        .filter(h.lm);
    return [...(0, d.Z)(t).keys()];
}
function N(e) {
    var t, n, i;
    return null == e ? null : null !== (i = null !== (n = e.id) && void 0 !== n ? n : null === (t = c.ZP.convertSurrogateToBase(e.surrogates)) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : e.name;
}
function C(e) {
    let t = N(e);
    null != t &&
        _.DZ.updateAsync(
            'favoriteEmojis',
            (e) =>
                ((e.emojis = A(e.emojis)), r().size(e.emojis) >= E.oX)
                    ? (m.Z.show({
                          title: v.intl.string(v.t['+XYXtb']),
                          body: v.intl.formatToPlainString(v.t.JaIyFh, { count: E.oX })
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            E.fy.INFREQUENT_USER_ACTION
        );
}
function R(e) {
    let t = N(e);
    null != t &&
        _.DZ.updateAsync(
            'favoriteEmojis',
            (e) => {
                if (((e.emojis = A(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            E.fy.INFREQUENT_USER_ACTION
        );
}
