r.d(n, {
    FD: function () {
        return m;
    },
    I5: function () {
        return I;
    },
    Mn: function () {
        return y;
    },
    P6: function () {
        return O;
    },
    S2: function () {
        return v;
    },
    UZ: function () {
        return T;
    },
    V3: function () {
        return b;
    },
    W3: function () {
        return R;
    },
    Zy: function () {
        return g;
    },
    b9: function () {
        return C;
    },
    cV: function () {
        return S;
    },
    si: function () {
        return N;
    },
    ss: function () {
        return E;
    },
    xn: function () {
        return A;
    }
});
var i = r(544891),
    a = r(433517),
    o = r(780384),
    s = r(570140),
    l = r(703656),
    u = r(626135),
    c = r(768581),
    d = r(546796),
    f = r(893776),
    p = r(981631),
    h = r(792101),
    _ = r(388032);
function m() {
    s.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_INIT' });
}
function g() {
    s.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_CLOSE' });
}
function E(e, n) {
    let r = n ? _.intl.string(_.t['8lQ2ra']) : _.intl.string(_.t.jf5GGR),
        a = n ? p.ANM.DELETE_ACCOUNT : p.ANM.DISABLE_ACCOUNT,
        o = (n) =>
            i.tn.post({
                url: a,
                body: {
                    password: e,
                    ...n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            });
    return (0, d.Z)(o, {
        modalProps: { title: r },
        checkEnabled: !1
    }).then(() => {
        f.Z.logoutInternal(), (0, l.uL)(p.Z5c.DEFAULT_LOGGED_OUT);
    });
}
async function v(e) {
    let n = await i.tn.patch({
            url: p.ANM.ME,
            oldFormErrors: !0,
            body: e,
            rejectWithError: !1
        }),
        r = n.body;
    if (r.token) {
        let n = r.token;
        delete r.token,
            s.Z.dispatch({
                type: 'UPDATE_TOKEN',
                token: n,
                userId: r.id
            }),
            (null == e ? void 0 : e.password) != null &&
                (null == e ? void 0 : e.new_password) != null &&
                s.Z.dispatch({
                    type: 'PASSWORD_UPDATED',
                    userId: r.id
                });
    }
    return (
        s.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: r
        }),
        n
    );
}
function y(e) {
    let { username: n, discriminator: r, email: i, emailToken: o, password: l, avatar: f, avatarDecoration: m, newPassword: g, globalName: E } = e;
    return (
        s.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT' }),
        (0, d.Z)(
            (e) => {
                let s = {
                    username: n,
                    email: i,
                    email_token: o,
                    password: l,
                    avatar: f,
                    discriminator: r,
                    global_name: E,
                    new_password: g,
                    ...e
                };
                null === m && (s.avatar_decoration_id = null), null != m && ((s.avatar_decoration_id = m.id), (s.avatar_decoration_sku_id = m.skuId));
                let u = a.K.get(p.JkL),
                    c = (0, h.xJ)();
                null != c && null != u && ((s.push_provider = c), (s.push_token = u));
                let d = a.K.get(p.scU);
                return null != h.mv && null != d && ((s.push_voip_provider = h.mv), (s.push_voip_token = d)), v(s);
            },
            {
                checkEnabled: !1,
                modalProps: { title: _.intl.string(_.t.clQc1d) },
                hooks: {
                    onEarlyClose: () =>
                        s.Z.dispatch({
                            type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
                            errors: {}
                        })
                }
            }
        ).then(
            (e) => {
                let n = e.body;
                return u.default.track(p.rMx.USER_AVATAR_UPDATED, { animated: (0, c.xR)(n.avatar) }), s.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS' }), e;
            },
            (e) => (
                s.Z.dispatch({
                    type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
                    errors: e.body
                }),
                e
            )
        )
    );
}
function b(e) {
    return i.tn.post({
        url: p.ANM.USER_HARVEST,
        body: { backends: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function I(e) {
    s.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR',
        avatar: e
    }),
        null == e ? o.uv.announce(_.intl.string(_.t['f1+oNj'])) : o.uv.announce(_.intl.string(_.t.NstziY));
}
function T(e) {
    s.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME',
        globalName: e
    });
}
function S(e) {
    s.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function A(e) {
    s.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function C() {
    s.Z.dispatch({ type: 'USER_SETTINGS_CLEAR_ERRORS' });
}
function N() {
    s.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES' });
}
function R() {
    s.Z.dispatch({ type: 'USER_SETTINGS_RESET_ALL_PENDING' });
}
function O() {
    s.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM' });
}
