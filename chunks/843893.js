a.d(n, { Authentication: () => h });
var i = a(248702),
    s = a(899656),
    r = a(458741),
    e = a(970316),
    o = a(868282),
    u = a(209054),
    c = ({ config: t, authHint: n, manager: a, onFinish: r, onError: o }) => {
        let [c, h] = (0, s.o)(() => a ?? (0, u.O)({ config: t, authHint: n }), { manageLifecycle: !a });
        return "idle" === c.status || "loading" === c.status
            ? null
            : "tutorial" === c.status
              ? (0, i.v)(e.t, { manager: h })
              : "permissions" === c.status
                ? (0, i.v)(e.r, { manager: h, permissionStatus: c.permissionStatus })
                : "capture" === c.status
                  ? (0, i.v)(e.n, { manager: h, state: c })
                  : ("finished" === c.status
                        ? r?.()
                        : "closed" === c.status
                          ? o?.(void 0)
                          : "error" === c.status && o?.(c.error),
                    null);
    },
    h = ({ config: t, manager: n, onFinish: a, onError: s }) =>
        (0, i.v)(r.t, {
            children: t ? (0, i.v)(c, { config: t, authHint: t.authHint, manager: n, onFinish: a, onError: s }) : null,
        });
(0, o.t)(h, "incode-authentication");
