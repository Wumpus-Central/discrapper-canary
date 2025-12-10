n.d(t, {
    $K: () => A,
    OQ: () => O,
    RE: () => S,
    Xe: () => N,
    dv: () => I,
    rS: () => v,
    t0: () => y,
}),
    n(388685),
    n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    o = n(381499),
    s = n(570140),
    l = n(479531),
    c = n(339085),
    u = n(633302),
    d = n(856985),
    f = n(38618),
    p = n(675478),
    _ = n(486472),
    m = n(823379),
    h = n(668781),
    g = n(981631),
    E = n(526761),
    b = n(388032);
function y(e) {
    p.hW.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = o.Gm.create()), (t.diversitySurrogate.value = e);
        },
        E.fy.FREQUENT_USER_ACTION,
    );
}
function O(e) {
    s.Z.dispatch({
        type: "EMOJI_FETCH",
        guildId: e,
    }),
        a.tn
            .get({
                url: g.ANM.GUILD_EMOJIS(e),
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then(
                (t) =>
                    s.Z.dispatch({
                        type: "EMOJI_FETCH_SUCCESS",
                        guildId: e,
                        emojis: t.body,
                    }),
                () =>
                    s.Z.dispatch({
                        type: "EMOJI_FETCH_FAILURE",
                        guildId: e,
                    }),
            );
}
function v(e) {
    let { guildId: t, image: n, name: r, roles: i, analyticsLocation: o } = e;
    return (
        s.Z.dispatch({
            type: "EMOJI_UPLOAD_START",
            guildId: t,
        }),
        a.tn
            .post({
                url: g.ANM.GUILD_EMOJIS(t),
                body: {
                    image: n,
                    name: r,
                    roles: i,
                },
                context: { client_event_source: null == o ? void 0 : o.page },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
            .then(
                (e) => (
                    s.Z.dispatch({
                        type: "EMOJI_UPLOAD_STOP",
                        guildId: t,
                    }),
                    e.body
                ),
                (e) => (
                    s.Z.dispatch({
                        type: "EMOJI_UPLOAD_STOP",
                        guildId: t,
                    }),
                    Promise.reject(e)
                ),
            )
    );
}
function S(e, t, n) {
    return (
        s.Z.dispatch({
            type: "EMOJI_DELETE",
            guildId: e,
            emojiId: t,
        }),
        a.tn.del({
            url: g.ANM.GUILD_EMOJI(e, t),
            body: null != n ? { replaced_by: n } : void 0,
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    );
}
async function I(e) {
    let { guildId: t, emojiId: n, name: r, roles: i } = e;
    try {
        return await a.tn.patch({
            url: g.ANM.GUILD_EMOJI(t, n),
            body: {
                name: r,
                roles: i,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new l.Z(e);
    }
}
function T(e) {
    if (_.Z.totalUnavailableGuilds > 0 || !f.Z.isConnected()) return e;
    let t = e
        .map((e) => {
            var t;
            return null != (t = c.ZP.getCustomEmojiById(e)) ? t : u.ZP.getByName(e);
        })
        .filter(m.lm);
    return [...(0, d.Z)(t).keys()];
}
function C(e) {
    var t, n, r;
    return null == e
        ? null
        : null !=
            (r = null != (n = e.id) ? n : null == (t = u.ZP.convertSurrogateToBase(e.surrogates)) ? void 0 : t.name)
          ? r
          : e.name;
}
function A(e) {
    let t = C(e);
    null != t &&
        p.DZ.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = T(e.emojis)), i().size(e.emojis) >= E.oX)
                    ? (h.Z.show({
                          title: b.intl.string(b.t["+XYXtZ"]),
                          body: b.intl.formatToPlainString(b.t.JaIyFi, { count: E.oX }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            E.fy.INFREQUENT_USER_ACTION,
        );
}
function N(e) {
    let t = C(e);
    null != t &&
        p.DZ.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = T(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            E.fy.INFREQUENT_USER_ACTION,
        );
}
