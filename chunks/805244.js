n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(816814),
    s = n(240872),
    l = n(23645),
    c = n(183620),
    u = n(921801),
    d = n(355497),
    f = n(202858),
    p = n(726985),
    _ = n(388032);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { backupCodes: t, hasTOTPEnabled: n, currentUser: m } = e,
        g = i.useCallback((e) => {
            (0, a.h7j)((t) => (0, r.jsx)(c.Z, E(h({}, t), { password: e })), { stackingBehavior: "stack" });
        }, []),
        b = i.useCallback(() => {
            (0, a.h7j)((e) =>
                (0, r.jsx)(
                    d.default,
                    E(h({}, e), {
                        handleSubmit: (e) =>
                            o.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                g(e);
                            }),
                        title: _.intl.string(_.t.PsQmzU),
                        actionText: _.intl.string(_.t.ajkYcF),
                    }),
                ),
            );
        }, [g]),
        y = i.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: n } = e;
                        return "* "
                            .concat(n.substr(0, 4), "-")
                            .concat(n.substr(4), " ")
                            .concat(t ? "(used)" : "");
                    })
                    .join("\r\n"),
                n = _.intl.formatToPlainString(_.t["uYWwh/"], { email: m.email });
            return "".concat(n, "\r\n\r\n").concat(e);
        }, [t, m.email]),
        O = i.useMemo(
            () =>
                t.length > 0
                    ? (0, r.jsx)(l.Z, {
                          fileContents: y,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, r.jsx)(a.Button, {
                              variant: "primary",
                              size: "sm",
                              text: _.intl.string(_.t.qZZUy6),
                          }),
                      })
                    : (0, r.jsx)(u.F, {
                          setting: p.s6.ACCOUNT_VIEW_BACKUP_CODES,
                          children: (0, r.jsx)(a.Button, {
                              variant: "primary",
                              size: "sm",
                              text: _.intl.string(_.t.xZEzbu),
                              onClick: b,
                          }),
                      }),
            [t.length, y, b],
        ),
        v = i.useCallback(() => {
            s.Z.show({
                title: _.intl.string(_.t["D+aE7g"]),
                body: _.intl.string(_.t.EA4ZEk),
                cancelText: _.intl.string(_.t["ETE/oC"]),
                onConfirm: () => o.Z.disable(),
            });
        }, []);
    return (0, r.jsx)(a.gNt, {
        label: _.intl.string(_.t.EPVq00),
        description: _.intl.string(_.t.bQwxib),
        children: (0, r.jsxs)(a.ButtonGroup, {
            size: "sm",
            children: [
                O,
                n &&
                    (0, r.jsx)(u.F, {
                        setting: p.s6.ACCOUNT_REMOVE_2FA,
                        children: (0, r.jsx)(a.Button, {
                            variant: "critical-secondary",
                            size: "sm",
                            text: _.intl.string(_.t["D+aE7g"]),
                            onClick: v,
                        }),
                    }),
                !n &&
                    (0, r.jsx)(u.F, {
                        setting: p.s6.ACCOUNT_ENABLE_2FA,
                        children: (0, r.jsx)(a.Button, {
                            variant: "primary",
                            size: "sm",
                            text: _.intl.string(_.t.cDgKte),
                            onClick: f.ZP.enableMFA,
                        }),
                    }),
            ],
        }),
    });
}
