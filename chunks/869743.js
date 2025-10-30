n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(299206),
    s = n(726521),
    l = n(389052),
    c = n(388032),
    u = n(37393);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e) => {
        let { appRecord: t, closePopout: n, selectedGuildId: i, selectedChannelId: l, children: u = null } = e,
            d = (0, o.Z)({
                id: t.id,
                label: c.intl.string(c.t["+NP/b2"]),
            });
        return (0, r.jsxs)(a.v2r, {
            navId: "authorized-app-action-menu",
            onClose: n,
            "aria-label": c.intl.string(c.t.tKobzb),
            onSelect: void 0,
            children: [
                (0, r.jsx)(a.sNh, {
                    id: "report",
                    label: c.intl.string(c.t["+78Pfm"]),
                    color: "danger",
                    action: () =>
                        (0, s.uu)({
                            application: t,
                            entrypoint: "authorized_apps_settings",
                            contextualGuildId: i,
                            contextualChannelId: l,
                        }),
                }),
                u,
                d,
            ],
        });
    },
    m = (e) => {
        let { appRecord: t, botUser: n, closePopout: i, selectedGuildId: a, selectedChannelId: o } = e;
        return (0, r.jsx)(h, {
            appRecord: t,
            closePopout: i,
            selectedGuildId: a,
            selectedChannelId: o,
            children: (0, l.Z)({
                user: n,
                location: "UserSettingsAuthedApps",
                color: "danger",
            }),
        });
    },
    g = (e) => {
        let { appRecord: t, selectedGuildId: n, selectedChannelId: o } = e,
            s = i.useRef(null);
        return (0, r.jsx)(a.yRy, {
            targetElementRef: s,
            renderPopout: (e) => {
                let { closePopout: i } = e;
                return null == t.bot
                    ? (0, r.jsx)(h, {
                          appRecord: t,
                          closePopout: i,
                          selectedGuildId: n,
                          selectedChannelId: o,
                      })
                    : (0, r.jsx)(m, {
                          appRecord: t,
                          botUser: t.bot,
                          closePopout: i,
                          selectedGuildId: n,
                          selectedChannelId: o,
                      });
            },
            align: "right",
            position: "bottom",
            children: (e) =>
                (0, r.jsx)(
                    a.P3F,
                    p(
                        f(
                            {
                                innerRef: s,
                                className: u.actionMenuButton,
                                "aria-label": c.intl.string(c.t["UKOtz+"]),
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)(a.xhG, {
                                size: "xs",
                                color: a.TVs.colors.INTERACTIVE_NORMAL,
                            }),
                        },
                    ),
                ),
        });
    };
