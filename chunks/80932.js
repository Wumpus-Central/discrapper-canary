n.d(t, {
    $K: () => N,
    OQ: () => v,
    RE: () => I,
    Xe: () => P,
    dv: () => T,
    rS: () => S,
    t0: () => O,
}),
    n(388685),
    n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    o = n(381499),
    s = n(780384),
    l = n(570140),
    c = n(479531),
    u = n(339085),
    d = n(633302),
    f = n(856985),
    p = n(38618),
    _ = n(675478),
    m = n(486472),
    h = n(823379),
    g = n(668781),
    E = n(981631),
    b = n(526761),
    y = n(388032);
function O(e) {
    _.hW.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = o.Gm.create()), (t.diversitySurrogate.value = e);
        },
        b.fy.FREQUENT_USER_ACTION,
    );
}
function v(e) {
    l.Z.dispatch({
        type: "EMOJI_FETCH",
        guildId: e,
    }),
        a.tn
            .get({
                url: E.ANM.GUILD_EMOJIS(e),
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then(
                (t) =>
                    l.Z.dispatch({
                        type: "EMOJI_FETCH_SUCCESS",
                        guildId: e,
                        emojis: t.body,
                    }),
                () =>
                    l.Z.dispatch({
                        type: "EMOJI_FETCH_FAILURE",
                        guildId: e,
                    }),
            );
}
function S(e) {
    let { guildId: t, image: n, name: r, roles: i, analyticsLocation: o } = e;
    return (
        l.Z.dispatch({
            type: "EMOJI_UPLOAD_START",
            guildId: t,
        }),
        a.tn
            .post({
                url: E.ANM.GUILD_EMOJIS(t),
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
                    l.Z.dispatch({
                        type: "EMOJI_UPLOAD_STOP",
                        guildId: t,
                    }),
                    e.body
                ),
                (e) => (
                    l.Z.dispatch({
                        type: "EMOJI_UPLOAD_STOP",
                        guildId: t,
                    }),
                    Promise.reject(e)
                ),
            )
    );
}
function I(e, t, n) {
    return (
        l.Z.dispatch({
            type: "EMOJI_DELETE",
            guildId: e,
            emojiId: t,
        }),
        a.tn
            .del({
                url: E.ANM.GUILD_EMOJI(e, t),
                body: null != n ? { replaced_by: n } : void 0,
                oldFormErrors: !0,
                rejectWithError: !1,
            })
            .then(() => {
                s.uv.announce(y.intl.string(y.t.L3UUha));
            })
    );
}
async function T(e) {
    let { guildId: t, emojiId: n, name: r, roles: i } = e;
    try {
        return await a.tn.patch({
            url: E.ANM.GUILD_EMOJI(t, n),
            body: {
                name: r,
                roles: i,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new c.Z(e);
    }
}
function C(e) {
    if (m.Z.totalUnavailableGuilds > 0 || !p.Z.isConnected()) return e;
    let t = e
        .map((e) => {
            var t;
            return null != (t = u.ZP.getCustomEmojiById(e)) ? t : d.ZP.getByName(e);
        })
        .filter(h.lm);
    return [...(0, f.Z)(t).keys()];
}
function A(e) {
    var t, n, r;
    return null == e
        ? null
        : null !=
            (r = null != (n = e.id) ? n : null == (t = d.ZP.convertSurrogateToBase(e.surrogates)) ? void 0 : t.name)
          ? r
          : e.name;
}
function N(e) {
    let t = A(e);
    null != t &&
        _.DZ.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = C(e.emojis)), i().size(e.emojis) >= b.oX)
                    ? (g.Z.show({
                          title: y.intl.string(y.t["+XYXtZ"]),
                          body: y.intl.formatToPlainString(y.t.JaIyFi, { count: b.oX }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            b.fy.INFREQUENT_USER_ACTION,
        );
}
function P(e) {
    let t = A(e);
    null != t &&
        _.DZ.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = C(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            b.fy.INFREQUENT_USER_ACTION,
        );
}
